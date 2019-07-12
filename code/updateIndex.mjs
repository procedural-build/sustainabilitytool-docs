import Glob from "glob";
import FS from "fs";
import { CamelToTitle } from "./utils";


const getDocs = function(files) {
  if (files.length > 1) {
      return `docs:\n  - ${files.slice(1).join("\n  - ")}\n`
  } else {
      return ""
  }
};

const generateIndex = function(files, folder) {
  let firstDoc = files[0];
  let data =
    `title: ${CamelToTitle(firstDoc.replace(".md", " "))}\n` +
    "header:\n" +
    "  - /_shared/header.md\n" +
    "main:\n" +
    `  - ${files.join("\n  - ")}\n` +
    "navigation:\n" +
    "  - /_shared/toc.md\n" +
    `${getDocs(files)}` +
    "footer:\n" +
    "  - /_shared/footer.md";

  FS.writeFile(`${folder}/index.yml`, data, err => {
    if (err) throw err;
    console.log("The new index.yml has been saved!");
  });
};

let folders = Glob.sync(`./content/!(_)*/`);
let cleanFolders = [];

for (let folder of folders) {
    let files = Glob.sync(`${folder}/*.md`);
    let cleanFiles = [];

    for (let file of files) {
        let file_list = file.split("/");
        cleanFiles.push(file_list[file_list.length - 1]);
    }
    //console.log(cleanFiles);
    generateIndex(cleanFiles, folder)
}