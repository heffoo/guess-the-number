import React, { useState } from "react";
import { Modal } from "./modal";
import "./App.scss";

let start = 0;
let steps = 0;
export const App = () => {
  const [numberValue, setNumberValue] = useState<number>();
  const [randomNumber, setrandomNumber] = useState<number>();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [showLog, setLog] = useState<boolean>(false);
  const [next, setNext] = useState<boolean>(false);

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
  let n = 0;
  const compare = () => {
    for (; n < 4; n++) {
      if (numberValue?.toString().slice()[n] === numberValue?.toString().slice()[n + 1]) {
        console.log(
          "напишите правильно. ваше число `" + numberValue?.toString().slice()[n] + "` используется несколько раз."
        );
        alert("write a correct number");
        return;
      }
    }

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
        Math.round((end - start) / 1000) > 60 ? "минуты и сделали" : "секунд и сделали",
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
        <div className="interface">
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
        </div>
        <button className="changelog-btn" onClick={() => setLog(!showLog)}>
          changelog
        </button>
        {showLog && (
          <div className="changeLog">
            изменения в общем такие. хорошие. <button onClick={() => setNext(!next)}>далее →</button>
            {next && (
              <ul>
                <li>у нас тут в общем капитальный редизайн;</li>
                <li>модалка теперь закрывается по вне (украденная разработка Илона Васильевича Маска);</li>
                <li>полная адаптация под мобильные устройства(да вообще под все устройства);</li>
                <li>
                  пользователи, которые любят проблемы, теперь не смогут отправлять одинаковые числа. <br />
                  система не примет, даже если постараться;
                </li>
                <li>а еще, если нажать снова на changelog, то закроется вся ветка сразу;</li>
                <li>много мелких доработок (честно).</li>
              </ul>
            )}
          </div>
        )}
        <button className="modalButton" onClick={() => setModalOpen(!isModalOpen)}>
          ?
        </button>
        {isModalOpen && <Modal setModalOpen={setModalOpen} isModalOpen={isModalOpen} />}
      </div>
    </div>
  );
};

export default App;
