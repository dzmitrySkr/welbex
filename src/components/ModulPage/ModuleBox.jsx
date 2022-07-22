import "../../styles/moduleBox.css";
import { useEffect } from "react";

function ModuleBox({ item }) {
  let URL = process.env.REACT_APP_URL_MODULES;

  const deleteBox = async () => {
    await fetch(`${URL}/${item.id}`, { method: "DELETE" });
  };

  useEffect(() => {}, []);

  return (
    <div className="module_box">
      <p className="module_name">{item.title}</p>
      <div
        className="colored first"
        style={{ backgroundColor: item.color }}
      ></div>

      <div
        className="delete_box"
        onClick={() => {
          deleteBox();
        }}
      >
        &#128473;
      </div>
    </div>
  );
}

export default ModuleBox;
