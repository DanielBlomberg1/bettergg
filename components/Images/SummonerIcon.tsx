import Image from "next/image";

interface Props {
  gameVersion: string;
  id: number;
}

const SummonerIcon: React.FC<Props> = ({ gameVersion, id }) => {
  return (
    <Image
      alt="SummonerIcon"
      width={200}
      height={200}
      src={
        "http://ddragon.leagueoflegends.com/cdn/" +
        gameVersion +
        "/img/profileicon/" +
        id +
        ".png"
      }
    />
  );
};
export default SummonerIcon;
