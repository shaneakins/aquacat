import BowlIcon from "@components/svg/BowlIcon";

type Props = {
  bowlSize: string;
  handleSelectBowlSize: (evt: React.MouseEvent<HTMLImageElement>) => void;
};
const BowlSelection = ({ bowlSize, handleSelectBowlSize }: Props) => {
  return (
    <div className="flex gap-7 justify-center mb-10">
      <div
        className="flex place-items-center"
        data-size="s"
        onClick={handleSelectBowlSize}
      >
        <BowlIcon width="70px" height="70px" />
      </div>
      <div
        className="flex place-items-center"
        data-size="l"
        onClick={handleSelectBowlSize}
      >
        <BowlIcon width="100px" height="100px" />
      </div>
    </div>
  );
};
export default BowlSelection;
