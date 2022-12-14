import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "../../styles/SearchPage.module.css";

const SearchPage = () => {
  const router = useRouter();

  //send request to server to get data
  // of the search results
  const [value, setValue] = useState("");

  const fetchSummoner = async () => {
    router.push("/summoner/" + value);
  };

  useEffect(() => {
    setValue(value);
    console.log(value);
  }, [value]);

  return (
    <>
      <h1 className={styles.title}>Better.GG</h1>
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
