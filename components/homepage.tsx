import Head from "next/head";
import React, { useContext } from "react";
import { FileContext } from "../contexts/FileSystem";

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
        <div className="inline-flex space-x-1">
          <button
            onClick={writeFile}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Write
          </button>
          <button
            onClick={readFile}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Read
          </button>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
