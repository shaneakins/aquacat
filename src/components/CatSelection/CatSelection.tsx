"use-client";
import CatIcon from "@components/svg/CatIcon";

type Props = {
  cat: string;
  handleSelectCat: (evt: React.MouseEvent<HTMLDivElement>) => void;
};
const CatSelection = ({ cat, handleSelectCat }: Props) => {
  //   const styles = { height: "160px" };
  const styles = {};
  return (
    <div className="flex gap-7 justify-center mb-10">
      <div style={styles} onClick={handleSelectCat} aria-label="raven">
        <CatIcon fill="#000000"></CatIcon>
      </div>
      <div style={styles} onClick={handleSelectCat} aria-label="yaya">
        <CatIcon fill="#805f2f" flip></CatIcon>
      </div>
    </div>
  );
};
export default CatSelection;
