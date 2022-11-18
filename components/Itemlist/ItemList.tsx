import ItemIcon from "../Images/ItemIcon";
import styles from "./ItemList.module.css";

export interface IItemList {
  items: IItem[];
  gameVersion: string;
}

export interface IItem {
  id: number;
}

const ItemListHorizontal: React.FC<IItemList> = ({ items, gameVersion }) => {
  return (
    <div className={styles.container}>
      {items.map((item: IItem, index: number) => {
        return (
          <ItemIcon
            key={index + item.id}
            gameVersion={gameVersion}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

const ItemListVertical: React.FC<IItemList> = ({ items, gameVersion }) => {
  return (
    <div className={styles.containervertical}>
      {items.map((item: IItem, index: number) => {
        return (
          <ItemIcon
            key={item.id + index}
            gameVersion={gameVersion}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export { ItemListHorizontal, ItemListVertical };
