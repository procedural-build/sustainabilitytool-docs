import Glob from "glob";
import FS from "fs";


let folders = Glob.sync(`./content/!(_)*/`);
let cleanFolders = []
for (let folder of folders) {
    cleanFolders.push(folder.slice(10, -1))
}

let data = "---\nlayout: toc\nsections:\n  - " + cleanFolders.join('\n  - ') + "\n---\n";
FS.writeFile('content/_shared/toc.md', data, (err) => {
    if (err) throw err;
    console.log('The new TOC has been saved!');
});
