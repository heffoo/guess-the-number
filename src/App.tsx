import React, { useState } from "react";
import { Modal } from "./modal";
import './App.scss'

let start = 0;
let steps = 0;
export const App = () => {
  const [numberValue, setNumberValue] = useState<number>();
  const [randomNumber, setrandomNumber] = useState<number>();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const startfunc = () => {
    return (start = Date.now());
  };
  function shuffle(o: any) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    startfunc();
    return o;
  }
  let i = 0;
  let k = 0;
  let e = 0;
  let s = 0;

  const compare = () => {
    for (; i < 4; i++) {
      if (randomNumber?.toString().slice()[i] === numberValue?.toString().slice()[i]) {
        k++;
      }
    }
    console.log("точных совпадений:", k);
    steps++;
    for (; s < 4; s++) {
      if (randomNumber?.toString().split("").includes(numberValue!.toString().split("")[s])) e++;
    }

    let end = Date.now();

    console.log("совпадений:", e - k);
    Number(randomNumber) === Number(numberValue) &&
      console.log(
        "you win, вы потратили ",
        Math.round((end - start) / 1000) > 60 ? ((end - start) / 60000).toFixed(2) : Math.round((end - start) / 1000),
        Math.round((end - start) / 1000) > 60 ? "минуты и сделали" : 'секунд и сделали',
        steps,
        "шагов"
      );
  };

  // console.log(randomNumber);
  const reset = () => {
    const form = document.getElementById("form") as HTMLFormElement;

    if (form !== null) {
      form.reset();
    }
  };

  return (
    <div className="App">
      <div className="div2">
        <form
          id="form"
          onSubmit={(e: any) => {
            e.preventDefault();
            compare();
            reset();
          }}
        >
          <input
            type="text"
            pattern="[0-9]{4}"
            onKeyPress={(e) => e.key === "Enter" && console.log(numberValue)}
            onChange={(e: any) => setNumberValue(Number(e.target.value))}
          />
        </form>
        <button
          onClick={() => {
            setrandomNumber(shuffle("0123456789".split("")).join("").substring(0, 4));
          }}
        >
          gen
        </button>
        <button className="modalButton" onClick={() => setModalOpen(!isModalOpen)}>?</button>
        {isModalOpen && <Modal setModalOpen={setModalOpen} isModalOpen={isModalOpen} />}
        {/* <span className="bumber">{Number(randomNumber) === Number(numberValue) ? "you win" : "you lose"}</span> */}
      </div>
    </div>
  );
};

export default App;
