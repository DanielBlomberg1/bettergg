import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
      <input
        type="text"
        onInput={(e) => setValue((e.target as HTMLTextAreaElement).value)}
        placeholder="Type in your summoner name..."
      />
      <button onClick={() => fetchSummoner()}>Search</button>
    </>
  );
};

export default SearchPage;
