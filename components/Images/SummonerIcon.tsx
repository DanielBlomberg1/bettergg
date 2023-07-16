import Image from "next/image";

interface Props {
  gameVersion: string;
  id: number;
}

const SummonerIcon: React.FC<Props> = ({ gameVersion, id }) => {
  return (
    <Image
      alt="SummonerSpellIcon"
      width={200}
      height={200}
      src={"/img/profileicon/" + id + ".png"}
    />
  );
};
export default SummonerIcon;
