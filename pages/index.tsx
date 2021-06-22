import Head from "next/head";
import React from "react";
import HomePage from "../components/homepage";
import FileProvider, { FileContext } from "../contexts/FileSystem";
import { TerminalContextProvider } from "react-terminal";

export default function Home() {
  return (
    <TerminalContextProvider>
      <FileProvider>
        <HomePage></HomePage>
      </FileProvider>
    </TerminalContextProvider>
  );
}
