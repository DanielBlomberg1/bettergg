import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

interface IFreakyTextProps {
  text: string;
}

const FreakyText: React.FC<IFreakyTextProps> = (props) => {
  const { text } = props;
  const [textContent, setTextContent] = useState(text);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";
  let iter = text.length;

  const funnyEffect = () => {
    setInterval(() => {
      if (iter < 0) {
        return;
      }
      let newWord = text.slice(iter);
      for (let i = 0; i < iter; i++) {
        const randomLetter =
          letters[Math.floor(Math.random() * letters.length)];
        newWord += randomLetter;
      }
      setTextContent(newWord);
      iter--;
    }, 60);
  };

  useEffect(() => {
    funnyEffect();
  }, []);

  return (
    <h1 className={styles.title} onMouseEnter={() => funnyEffect()}>
      {textContent}
    </h1>
  );
};

export default FreakyText;
