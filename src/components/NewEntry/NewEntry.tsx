"use client";

import CatSelection from "@components/CatSelection/CatSelection";
import Clicker from "@components/Clicker/Clicker";

import { useState } from "react";
import BowlSelection from "@components/BowlSelection/BowlSelection";
import NumericInputField from "@components/atoms/NumericInputField/NumericInputField";

// type Props = {
//   children: ReactNode;
// };
const NewEntry = () => {
  type CatType = "raven" | "yaya";
  type BowlSizeType = "s" | "l";

  type DataType = {
    date: string;
    info: {
      name: string;
      amount: number;
      bowl: string;
    };
  };

  const [amount, setAmount] = useState(0);
  const [cat, setCat] = useState<CatType>("raven");
  const [bowlSize, setBowlSize] = useState<BowlSizeType>("s");
  const [totalAmount, setTotalAmount] = useState();

  const MAX_AMOUNT = 200;
  const MIN_AMOUNT = 0;
  const BOWL_S_AMOUNT = 120;
  const BOWL_L_AMOUNT = 200;

  const isValid = (value: number) => value > MIN_AMOUNT && value < MAX_AMOUNT;

  const isDownDisabled = amount === MIN_AMOUNT;
  const isUpDisabled = amount === MAX_AMOUNT;

  function increaseAmount() {
    if (amount < MAX_AMOUNT) setAmount((amount) => amount + 1);
    console.log("moo");
  }
  function decreaseAmount() {
    if (amount > MIN_AMOUNT) setAmount((amount) => amount - 1);
  }

  function clearAmount() {
    setAmount(0);
  }
  //   function confirmAmount() {
  //     if (amount > 0 || amount <= 5) {
  //       setTotalAmount((total) => total + amount);
  //       clearAmount();
  //     }
  //   }
  const adjustAmountByBowlSize = (val: number, bowl: string) => {
    const base = val > 120 || bowl === "l" ? BOWL_L_AMOUNT : BOWL_S_AMOUNT;
    return base - val;
  };

  function handleInputChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const val = +evt.target.value;
    if (isValid(val)) setAmount(val);
  }

  function handleInputFocus(evt: React.ChangeEvent<HTMLInputElement>) {
    evt.target.select();
  }

  function handleSelectBowlSize(evt: React.MouseEvent<HTMLDivElement>) {
    const size = evt.currentTarget.dataset.size as BowlSizeType;
    console.log(size);
    setBowlSize(size);
  }

  async function handleSumbit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    console.log(evt);
    if (!cat || !amount) {
      alert("Amount cannot be zero");
      return;
    }
    try {
      const date = new Date();
      const res = await fetch("http://localhost:3000/api/water", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          date,
          info: { name: cat, amount, bowl: bowlSize },
        }),
      });

      if (res.ok) {
        alert(`Entry for ${cat} added successfully`);
      } else {
        throw new Error("Failed to create entry");
      }
    } catch (err) {
      console.log("Error creating entry", err);
    }
  }

  const handleSelectCat = (evt: React.MouseEvent<HTMLDivElement>) => {
    const altText = evt.currentTarget.getAttribute("aria-label") as CatType;
    setCat(altText);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <CatSelection cat={cat} handleSelectCat={handleSelectCat} />
        <BowlSelection
          bowlSize={bowlSize}
          handleSelectBowlSize={handleSelectBowlSize}
        />
        <Clicker
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
          isDownDisabled={isDownDisabled}
          isUpDisabled={isUpDisabled}
          handleSumbit={handleSumbit}
        >
          {/* <h1 className="text-center text-xl">Water (g)?</h1> */}
          <NumericInputField
            value={amount}
            onFocus={handleInputFocus}
            onChange={handleInputChange}
            placeholder="Amount in g"
          />
        </Clicker>
      </div>
      <h2>{amount}</h2>
      <h2>{cat}</h2>

      <button onClick={clearAmount} className="my-9 p-3 bg-blue-600 text-white">
        Clear
      </button>
      <h2>{`Total amount: ${totalAmount}`}</h2>
    </main>
  );
};

export default NewEntry;
