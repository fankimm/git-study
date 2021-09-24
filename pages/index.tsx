import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import TodoForm from "../src/components/TodoForm";
import TodoList from "../src/components/TodoList";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default Home;
