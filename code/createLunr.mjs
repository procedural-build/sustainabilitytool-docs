import Glob from "glob";
import { CamelToTitle } from "./utils";
import FS from "fs";
import lunr from "lunr";

const generateDocument = function(file) {
  let fileStringList = file.split("/");
  let name = fileStringList[fileStringList.length - 1];
  return {
    id: `/${name.replace(".md", "")}/`,
    title: CamelToTitle(name.replace(".md", " ")),
    body: FS.readFileSync(file) + ""
  };
};

const collectDocuments = function() {
  let folders = Glob.sync(`./content/!(_)*/`);
  let indexObjects = [];
  for (let folder of folders) {
    let files = Glob.sync(`${folder}/*.md`);

    for (let file of files) {
      indexObjects.push(generateDocument(file));
    }
  }

  return indexObjects;
};

const createIndex = function() {
  let documents = collectDocuments();
  let index = lunr(function() {
    this.ref("id");
    this.field("body");
    this.field("title");

    documents.forEach(function(doc) {
      this.add(doc);
    }, this);
  });
  //console.log(index)

  return index;
};

const writeIndexToJSON = function(folder) {
  let data = JSON.stringify(createIndex());
  FS.writeFile(`${folder}/lunrIndex.json`, data, err => {
    if (err) throw err;
    console.log("The new lunrIndex.json has been saved!");
  });
};

writeIndexToJSON("./assets/lunr");
