import type { FSModule } from "browserfs/dist/node/core/FS";

import * as BrowserFS from "browserfs";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

export type FileContextType = {
  write: (filepath: string, content: string) => Promise<void>;
  read: (filepath: string) => Promise<string>;
};

export const FileContext = createContext<FileContextType>(null);

export default class FileProvider extends React.Component {
  private fs: FSModule;

  constructor(props) {
    super(props);

    this.read = this.read.bind(this);
    this.write = this.write.bind(this);
  }

  componentDidMount() {
    BrowserFS.install(window);

    BrowserFS.configure(
      {
        fs: "MountableFileSystem",
        options: {},
      },
      () => {
        this.fs = BrowserFS.BFSRequire("fs");
      }
    );
  }

  render() {
    return (
      <FileContext.Provider
        value={{ ...this.state, write: this.write, read: this.read }}
      >
        {this.props.children}
      </FileContext.Provider>
    );
  }

  write(filepath: string, content: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.fs.writeFile(filepath, content, (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      });
    });
  }

  read(filepath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.fs.readFile(filepath, { encoding: "utf-8" }, (err, data) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(data);
      });
    });
  }
}
