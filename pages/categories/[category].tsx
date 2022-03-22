import Layout from "../layout";
import React from "react";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    // "https://api.chucknorris.io/jokes/random"
    `https://api.chucknorris.io/jokes/random?category=${context.params.category}`
  );
  const joke = await response.json();
  // console.log(context);
  return {
    props: {
      joke: joke.value,
    },
  };
};

const randomJoke = ({ joke }) => {
  return (
    <div>
      <Layout>
        <p>{joke}</p>
      </Layout>
    </div>
  );
};

export default randomJoke;
