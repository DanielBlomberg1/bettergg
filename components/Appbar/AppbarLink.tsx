import Link from "next/link";
import styles from "./Appbar.module.css";

interface IAppbarLink {
  text: string;
  href: string;
}

const AppbarLink: React.FC<IAppbarLink> = ({ text, href }) => {
  return (
    <h1 className={styles.item}>
      <Link
        className={styles.xl}
        style={{ marginLeft: 5, lineHeight: "1vh" }}
        href={href}
      >
        <a className={styles.link}>{text}</a>
      </Link>
    </h1>
  );
};
export default AppbarLink;
