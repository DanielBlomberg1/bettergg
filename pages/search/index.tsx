import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Link from "next/link";
import styles from "../../styles/SearchPage.module.css";

const SearchPage = () => {
  const router = useRouter();

  //send request to server to get data
  // of the search results
  const [value, setValue] = useState("");
  const [region, setRegion] = useState("eun1");

  const fetchSummoner = async () => {
    router.push("/summoner/" + region + "/" + value);
  };

  useEffect(() => {
    setValue(value);
    console.log(value);
  }, [value]);

  return (
    <>
      <h1 className={styles.title}>
        {" "}
        <Link href="/">
          <a className={styles.link}>Better.GG</a>
        </Link>
      </h1>
      <div className={styles.container}>
        <input
          className={styles.input}
          type="text"
          onInput={(e) => setValue((e.target as HTMLTextAreaElement).value)}
          placeholder="Type in your summoner name..."
        />

        <button className={styles.button} onClick={() => fetchSummoner()}>
          Search
        </button>
      </div>
    </>
  );
};

export default SearchPage;
