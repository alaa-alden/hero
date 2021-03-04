import { useEffect, useState } from "react";
// import "../styles/select.css";

export default function Select({ data, onChange }) {
  const { id } = data;
  const [active, setActive] = useState(false);
  const [chosen, setChosen] = useState("Select Video Category");

  useEffect(() => {
    const selected = document.querySelector(`.selected${id}`);
    const optionsContainer = document.querySelector(`.options-container${id}`);

    const optionsList = document.querySelectorAll(`.option${id}`);
    //* done
    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle(`active${id}`);
    });

    optionsList.forEach((o) => {
      o.addEventListener("click", () => {
        // setChosen("hacker");
        selected.innerHTML = o.querySelector("label").innerHTML;
        // setActive((previousValue) => !previousValue);
        optionsContainer.classList.remove(`active${id}`);
      });
    });
  });
  const Active = () => {
    setActive((previousValue) => !previousValue);
  };
  return (
    <div className="select-box">
      <div className={"options-container" + id}>
        <div className={"option" + id}>
          <input
            type="radio"
            className="radio"
            id="automobiles"
            name="category"
          />
          <label htmlFor="automobiles">Automobiles</label>
        </div>
        <div className={"option" + id}>
          <input type="radio" className="radio" id="film" name="category" />
          <label htmlFor="film">Film &amp; Animation</label>
        </div>
        <div className={"option" + id}>
          <input type="radio" className="radio" id="science" name="category" />
          <label htmlFor="science">Science &amp; Technology</label>
        </div>
        <div className={"option" + id}>
          <input type="radio" className="radio" id="art" name="category" />
          <label htmlFor="art">Art</label>
        </div>
        <div className={"option" + id}>
          <input type="radio" className="radio" id="music" name="category" />
          <label htmlFor="music">Music</label>
        </div>
        <div className={"option" + id}>
          <input type="radio" className="radio" id="travel" name="category" />
          <label htmlFor="travel">Travel &amp; Events</label>
        </div>
        <div className={"option" + id}>
          <input type="radio" className="radio" id="sports" name="category" />
          <label htmlFor="sports">Sports</label>
        </div>
        <div className={"option" + id}>
          <input type="radio" className="radio" id="news" name="category" />
          <label htmlFor="news">News &amp; Politics</label>
        </div>
        <div className={"option" + id}>
          <input
            type="radio"
            className="radio"
            id="tutorials"
            name="category"
          />
          <label htmlFor="tutorials">Tutorials</label>
        </div>
      </div>
      <div
        className={"selected" + id}>
        Select Video Category
      </div>
      <style jsx="true">
        {`
          .select-box {
            display: flex;
            width: 400px;
            flex-direction: column;
            position: relative;
          }

          .select-box .options-container${id} {
            position: absolute;
            top: 55px;
            width: 400px;
            z-index: 5000;
            background: #2f3640;
            color: #f5f6fa;
            max-height: 0;
            opacity: 0;
            transition: all 0.4s;
            border-radius: 8px;
            overflow: hidden;

            order: 1;
          }

          .selected${id} {
            background: #2f3640;
            border-radius: 8px;
            margin-bottom: 8px;
            color: #f5f6fa;
            position: relative;

            order: 0;
          }

          .selected${id}::after {
            content: "";
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23f5f6fa' d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z' /%3E%3Cpath fill='none' d='M0 0h24v24H0V0z' /%3E%3C/svg%3E");
            background-size: contain;
            background-repeat: no-repeat;

            position: absolute;
            height: 100%;
            width: 32px;
            right: 10px;
            top: 5px;

            transition: all 0.4s;
          }

          .select-box .options-container${id}.active${id} {
            max-height: 240px;
            opacity: 1;
            overflow-y: scroll;
          }

          .select-box
            .options-container${id}.active${id}
            + .selected${id}::after {
            transform: rotateX(180deg);
            top: -6px;
          }

          .select-box .options-container${id}::-webkit-scrollbar {
            width: 8px;
            background: #0d141f;
            border-radius: 0 8px 8px 0;
          }

          .select-box .options-container${id}::-webkit-scrollbar-thumb {
            background: #525861;
            border-radius: 0 8px 8px 0;
          }

          .select-box .option${id}, .selected${id} {
            padding: 12px 24px;
            cursor: pointer;
          }

          .select-box .option${id}:hover {
            background: #414b57;
          }

          .select-box label {
            cursor: pointer;
          }

          .select-box .option${id} .radio {
            display: none;
          }
        `}
      </style>
    </div>
  );
}
