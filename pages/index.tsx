import Head from "next/head";
import React from "react";
import HomePage from "../components/homepage";
import FileProvider, { FileContext } from "../contexts/FileSystem";

export default function Home() {
  return (
    <FileProvider>
      <HomePage></HomePage>
    </FileProvider>
  );
}
