import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Center, Spacer, Stack } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buildoors</title>
        <meta name="The NFT collection for builders" />
        <link rel="icon" href="/favicon.io" />
      </Head>

      <Box
        w="full"
        h="calc(100vh)"
        bgImage={"url(/home-background.svg)"}
        backgroundPosition="center"
      ></Box>
    </div>
  );
};

export default Home;
