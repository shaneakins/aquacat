// "use client";

import { ReactNode, FC } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

type Props = {
  increaseAmount: () => void;
  decreaseAmount: () => void;
  handleSumbit: (evt: React.FormEvent<HTMLFormElement>) => void;
  isUpDisabled: boolean;
  isDownDisabled: boolean;
  children: ReactNode;
};

const Clicker: FC<Props> = ({
  increaseAmount,
  decreaseAmount,
  isUpDisabled,
  isDownDisabled,
  handleSumbit,
  children,
}: Props) => {
  return (
    <form className="flex items-center flex-col" onSubmit={handleSumbit}>
      <div className="flex items-center gap-2">
        {/* <button
          className={`text-6xl text-yellow-500 ${
            isDownDisabled ? "text-gray-700 cursor-not-allowed" : ""
          }`}
          onClick={decreaseAmount}
          disabled={isDownDisabled}
        >
          {"\u2B07"}
        </button> */}
        <button
          type="button"
          onClick={decreaseAmount}
          disabled={isDownDisabled}
        >
          <ChevronDownIcon className="h-8 w-8" />
        </button>
        <div style={{ width: "100px" }}>{children}</div>
        <button type="button" onClick={increaseAmount} disabled={isUpDisabled}>
          <ChevronUpIcon className="h-8 w-8" />
        </button>
        {/* <button
          className={`text-6xl text-yellow-500 ${
            isUpDisabled ? "text-gray-700 cursor-not-allowed" : ""
          }`}
          onClick={increaseAmount}
          disabled={isUpDisabled}
        >
          {"\u2B06"}
        </button> */}
      </div>
      <button type="submit" className="my-9 p-3 bg-blue-600 text-white">
        Confirm
      </button>
    </form>
  );
};

export default Clicker;
