import ItemIcon from "../Images/ItemIcon";
import styles from "./ItemList.module.css";

export interface IItemList {
  items: IItem[];
  gameVersion: string;
  rows: number;
  BOX_SIZE?: number;
}

export interface IItem {
  id: number;
}

const ItemListHorizontal: React.FC<IItemList> = ({
  items,
  gameVersion,
  rows = 1,
  BOX_SIZE = 64,
}) => {
  let mycode = [items.slice(items.length / rows)];
  for (let i = 0; i < rows; i++) {
    mycode.push(items.slice(i, items.length / rows));
  }

  if (rows % 2 == 0) {
    mycode.pop();
  }

  return (
    <div>
      {mycode.map((row, index) => {
        return (
          <div
            className={styles.container}
            key={index * 10000}
            style={{
              width: row.length * BOX_SIZE,
              height: BOX_SIZE,
            }}
          >
            {row.map((item: IItem, index: number) => {
              return (
                <ItemIcon key={index} gameVersion={gameVersion} id={item.id} />
              );
            })}
          </div>
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
