import { useRouter } from "next/router";
import { useState } from "react";

import Link from "next/link";
import Loading from "../../components/Loading/Loading";
import RegionPicker from "../../components/RegionPicker/RegionPicker";
import styles from "../../styles/SearchPage.module.css";

const SearchPage = () => {
  const router = useRouter();

  //send request to server to get data
  // of the search results
  const [summonerName, setSummonerName] = useState("");
  const [region, setRegion] = useState("eun1");
  const [isLoading, setIsLoading] = useState(false);
  const [tagline, setTagline] = useState("#EUNE");

  const fetchSummoner = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    router.push(
      "/summoner/" + region + "/" + summonerName + "/" + tagline.slice(1)
    );
  };

  return (
    <>
      <h1 className={styles.title}>
        <Link href="/">
          <a className={styles.link}>Better.GG</a>
        </Link>
      </h1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <form className={styles.container} onSubmit={fetchSummoner}>
            <input
              className={styles.input}
              type="text"
              onInput={(e) =>
                setSummonerName((e.target as HTMLTextAreaElement).value)
              }
              placeholder="Type in your summoner name..."
            />
            <div className={styles.taglineContainer}>
              <input
                className={styles.taglineInput}
                type="text"
                onInput={(e) =>
                  setTagline((e.target as HTMLTextAreaElement).value)
                }
                value="#EUNE"
                style={{ marginLeft: "8px", flex: "0 1 auto" }}
              />
            </div>
            <div className={styles.regionPickerContainer}>
              <RegionPicker onChange={(value: string) => setRegion(value)} />
            </div>
            <button type="submit" className={styles.button}>
              Search
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default SearchPage;
