import React from "react";
const fs = require("fs");
const path = require("path");

const FsNavigator = () => {
  const listDirectory = path => {
    const folders = [];
    const directory = {
      folders: [],
      files: []
    };
    fs.readdirSync(path).forEach(item => {
      try {
        // console.log(item);
        const stat = fs.statSync(`${path}/${item}`);
        // console.log("stat is: ", stat.isDirectory());
        if (stat.isDirectory()) {
          directory.folders.push(item);
        } else {
          directory.files.push(item);
        }
      } catch (error) {
        console.error("error in listDirectory: ", error);
      }
    });
    // console.log("folders in directory: ", directory);
    return directory;
  };

  // console.log("path resolves to: ", path.resolve(__dirname, "../../FullStack"));
  // listDirectory(path.resolve(__dirname, "../../FullStack"));

  const write = () => {
    fs.writeFile("test.txt", "this is a test", function(err, data) {
      if (err) return console.error(err);
      console.log("data is: ", data);
    });
  };

  return (
    <div>
      <p>ToDo add navigation capabilities</p>
      <button
        onClick={() =>
          listDirectory(path.resolve(__dirname, "../../FullStack"))
        }
      >
        Test this out!
      </button>
      <button onClick={write}>FS Write test</button>
    </div>
  );
};

export default FsNavigator;
