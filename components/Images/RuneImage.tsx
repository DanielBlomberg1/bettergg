import Tippy from "@tippyjs/react";
import Image from "next/image";
import "tippy.js/dist/tippy.css"; // optional

interface Props {
  imageString: string;
  runeName: string;
  description: string;
  width: number;
  height: number;
  style?: React.CSSProperties;
}

const RuneImage: React.FC<Props> = ({
  imageString,
  runeName,
  description,
  width,
  height,
  style,
}) => {
  return (
    <div style={{ width: 64, height: 64 }}>
      <Tippy
        theme="translucent"
        placement="bottom-start"
        content={
          <>
            <span>{runeName}</span>
            <hr />
            <span>{description}</span>
          </>
        }
      >
        <span>
          <Image
            alt="SummonerSpellIcon"
            width={width}
            height={height}
            src={"/img/" + imageString}
            style={style}
          />
        </span>
      </Tippy>
    </div>
  );
};
export default RuneImage;
