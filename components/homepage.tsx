import React, { useContext } from "react";
import { FileContext } from "../contexts/FileSystem";
import { ReactTerminal } from "react-terminal";
import { Rnd } from "react-rnd";

export default function HomePage() {
  const { write, read } = useContext(FileContext);

  const writeFile = () => {
    write("message.txt", "hello")
      .then((value) => {
        console.log(value);
      })
      .catch((err) => {
        console.log(`ERR!: ${err}`);
      });
  };
  const readFile = () => {
    read("message.txt")
      .then((value) => {
        console.log(value);
      })
      .catch((err) => {
        console.log(`ERR!: ${err}`);
      });
  };
  const commands = {
    whoami: "jackharper",
    cd: (directory) => `changed path to ${directory}`,
  };

  return (
    <div className="flex flex-col items-center h-screen py-2">
      <Rnd
        default={{
          x: 0,
          y: 0,
          width: "40%",
          height: "40%",
        }}
        dragHandleClassName={"index_controls__9z-dM"}
      >
        <ReactTerminal commands={commands}></ReactTerminal>
      </Rnd>
      {/* <div className="h-40v w-7/12 top-1/4 relative">
      </div> */}
    </div>
  );
}
