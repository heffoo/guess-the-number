import React, { useRef, useEffect, FC } from "react";

interface Props {
  setModalOpen: any;
  isModalOpen: boolean;
}

export const Modal: FC<Props> = ({ setModalOpen, isModalOpen }) => {
  const modal = useRef<HTMLDivElement>(null);
  const onClickOutsideHandler = (e: any) => {
    if (
      (isModalOpen && !modal.current!.contains(e.target)) ||
      (isModalOpen && e.target.classList.contains("exit-modal-button"))
    ) {
      setModalOpen(false);
      window.removeEventListener("click", onClickOutsideHandler);
    }
  };

  useEffect(() => {
    window.addEventListener("click", onClickOutsideHandler);
  }, [setModalOpen, isModalOpen, modal]);

  if (isModalOpen) {
    return (
      <div className="modal">
        <div ref={modal} className="modal-container">
          короче, нажимаете gen, генерируется случайное число, надо угадать по подсказкам в консоли, вот и все. точные
          попадания - точно попал по месту цифры, просто попадания - ну просто попал. начинаться может с нуля, цифры
          повторяться не могут.<br></br> ¯\_(ツ)_/¯ кто найдет баг, тому дам 5 рублей
        </div>
        {/* <button onClick={() => setModalOpen(!isModalOpen)} className="exit-modal-button">
          ×
        </button> */}
      </div>
    );
  } else {
    return null;
  }
};
