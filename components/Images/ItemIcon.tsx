import Image from "next/image";

interface Props {
  gameVersion: string;
  id: number;
}

const ItemIcon: React.FC<Props> = ({ gameVersion, id }) => {
  return (
    <Image
      alt="ItemIcon"
      width={64}
      height={64}
      src={
        "http://ddragon.leagueoflegends.com/cdn/" +
        gameVersion +
        "/img/item/" +
        id +
        ".png"
      }
    />
  );
};
export default ItemIcon;
