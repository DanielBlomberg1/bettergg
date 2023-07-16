import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Better.gg</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Better.gg</h1>

        <p className={styles.description}>
          Get better at league with statistics
        </p>

        <div className={styles.grid}>
          <Link href="/search">
            <a className={styles.card}>
              <h2>Check your matches</h2>
              <p>
                Find out weaknesses in your game and become better with our
                skill asessment.🤯{" "}
              </p>
            </a>
          </Link>
          <Link href="/builds">
            <a className={styles.card}>
              <h2>Find new builds</h2>
              <p>
                Browse through all the items in the game and gain the
                advantage.😎{" "}
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>This was made with NextJS</footer>
    </div>
  );
};

export default Home;
