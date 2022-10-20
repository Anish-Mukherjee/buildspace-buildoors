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
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          {/*Navbar*/}
          <Spacer />
          {/* If connected second view otherwise first view*/}
          <Spacer />
          <Center>
            <Box marginBottom={4} color="white">
              <a href="https://twitter.com/0xanish" target="_blank" rel="noopener noreferrer">
                Built with ♥ by @0xanish
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
