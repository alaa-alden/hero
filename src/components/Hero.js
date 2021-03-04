import { useEffect, useState } from "react";
import "../styles/select.css";

export default function Hero({ onChange, type, placeholder }) {
  const [active, setActive] = useState(false);
  const [chosen, setChosen] = useState(placeholder);

  const Deactivate = () => {
    setActive((previousValue) => !previousValue);
  };
  const Active = () => {
    setActive((previousValue) => !previousValue);
  };
  const initOption = () => {
    let lists = [];
    switch (type) {
      case "age": {
        // setChosen("choose your age");
        for (let i = 12; i <= 100; i++)
          lists.push(
            <div className={"option"} key={i}>
              <input
                type="radio"
                className="radio"
                id={"age" + i}
                name="age"
                value={i}
              />
              <label htmlFor={"age" + i} onClick={() => Deactivate()}>
                {i}
              </label>
            </div>
          );
        return lists;
      }
      case "relationship": {
        const relationships = [
          "wife",
          "Husband",
          "Frind",
          "Fmaily",
          "Teacher",
          "Others",
        ];
        for (let i = 0; i < relationships.length; i++)
          lists.push(
            <div className={"option"} key={i}>
              <input
                type="radio"
                className="radio"
                id={"relationship" + i}
                name="relationship"
                value={relationships[i]}
              />
              <label htmlFor={"relationship" + i} onClick={() => Deactivate()}>
                {relationships[i]}
              </label>
            </div>
          );
        return lists;
      }
      case "occasion": {
        const occasions = [
          "Birthday",
          "Baby",
          "Valenetine's",
          "Wedding",
          "Christmas",
          "Graduation",
          "Holidays",
          "Other",
        ];
        for (let i = 0; i < occasions.length; i++)
          lists.push(
            <div className={"option"} key={i}>
              <input
                type="radio"
                className="radio"
                id={"occasion" + i}
                name="occasion"
                value={occasions[i]}
              />
              <label htmlFor={"occasion" + i} onClick={() => Deactivate()}>
                {occasions[i]}
              </label>
            </div>
          );
        return lists;
      }
      case "gender": {
        lists.push(
          <div className={"option"} key="1">
            <input
              type="radio"
              className="radio"
              id="gender1"
              name="gender1"
              value="female"
            />
            <label htmlFor="gender1" onClick={() => Deactivate()}>
              Female
            </label>
          </div>
        );
        lists.push(
          <div className={"option"} key="2">
            <input
              type="radio"
              className="radio"
              id="gender2"
              name="gender2"
              value="male"
            />
            <label htmlFor="gender2" onClick={() => Deactivate()}>
              Male
            </label>
          </div>
        );
        return lists;
      }
      default:
    }
  };
  return (
    <div
      className="select-box"
      onChange={(e) => {
        const { value } = e.target;
        setChosen(value);
        onChange(value);
      }}
    >
      <div className={`options-container ${active ? "active" : ""}`}>
        {initOption()}
      </div>
      <div
        className="d-flex selected"
        onClick={() => {
          //! set time or change idea
          // setTimeout(() => setActive((previousValue) => !previousValue), 10000);
          Active();
        }}
      >
        <div>{chosen}</div>
        <span></span>
      </div>
    </div>
  );
}
/*

 
 */
/*  {`
          .select-box {
            direction: rtl;
            display: flex;
            width: 400px;
            flex-direction: column;
            position: relative;
          }

          .select-box .options-container {
            direction: rtl;

            position: absolute;
            top: 55px;
            width: 400px;
            z-index: 1000000000;
            background: #2f3640;
            color: #f5f6fa;
            max-height: 0;
            opacity: 0;
            transition: all 0.4s;
            border-radius: 8px;
            overflow: hidden;

            order: 1;
          }

          .selected {
            direction: rtl;
            padding: 12px 24px;
            cursor: pointer;
            background: #2f3640;
            border-radius: 8px;
            margin-bottom: 8px;
            color: #f5f6fa;
            text-transform: capitalize;
            position: relative;

            order: 0;
          }

          .selected::after {
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

          .select-box .options-container.active {
            max-height: 240px;
            opacity: 1;
            overflow-y: scroll;
          }

          .select-box .options-container.active + .selected::after {
            transform: rotateX(180deg);
            top: -6px;
          }

          .select-box .options-container::-webkit-scrollbar {
            width: 8px;
            background: #0d141f;
            border-radius: 0 8px 8px 0;
          }

          .select-box .options-container::-webkit-scrollbar-thumb {
            background: #525861;
            border-radius: 0 8px 8px 0;
          }
          .select-box .option:hover {
            background: #414b57;
          }

          .select-box label {
            cursor: pointer;
            padding: 12px 24px;
            margin: 0;
            width: 100%;
            height: 100%;
          }

          .select-box .option .radio {
            display: none;
          }
        `}
        
        */
