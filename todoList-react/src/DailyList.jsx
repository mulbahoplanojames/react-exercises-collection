import React, { useEffect, useState } from "react";
import Style from "/src/DailyList.module.css";

let nextId = 0;

const DailyList = () => {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);
  //Changing the background color
  const [color, setColor] = useState("white");
  const [isblack, setIsblack] = useState(false);

  // CLick function for add element to an array
  const handelClick = () => {
    setItems([...items, { id: nextId++, names: name }]);
    setName("");
  };

  useEffect(() => {
    isblack ? setColor("#000") : setColor("white");
  }, [isblack]);

  return (
    <>
      <div className={Style.main_wripper} style={{ background: color }}>
        <h1 className={Style.title}>My Daily List</h1>

        <div className={Style.add_wripper}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={Style.input}
          />
          <button onClick={handelClick} className={Style.add_btn}>
            Add Item
          </button>
        </div>

        <ul>
          {items.map((item) => (
            <li key={item.id} className={Style.list}>
              {item.names}
              <button
                onClick={() =>
                  setItems(items.filter((del) => del.id !== item.id))
                }
                className={Style.delete_btn}
              >
                Delete Item
              </button>
            </li>
          ))}
        </ul>

        <button
          className={Style.change_color}
          onClick={() => setIsblack((prevColor) => !prevColor)}
        >
          Change Color
        </button>
      </div>
    </>
  );
};

export default DailyList;
