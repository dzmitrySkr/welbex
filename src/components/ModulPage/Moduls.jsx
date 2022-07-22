import { useSelector } from "react-redux/es/exports";
import React from "react";
import ModuleBox from "./ModuleBox";
import "../../styles/moduleBox.css";
import ModuleModal from "./ModuleModal";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../LoadingBck";

function Moduls() {
  let [toggleModal, setToggleModal] = useState(false);
  let [storeModules, setStoreModules] = useState([]);
  const URL = process.env.REACT_APP_URL_MODULES;

  useEffect(() => {
    const search = async () => {
      let resp = await fetch(URL);
      let moduls = await resp.json();
      setStoreModules(moduls);
    };
    search().catch(console.error);
  }, [toggleModal, storeModules]);

  return (
    <>
      <h2>Moduls</h2>

      <button className="add_module_btn" onClick={() => setToggleModal(true)}>
        Add module
      </button>

      <div className="moduls_wrapper">
        {storeModules.map((item) => (
          <ModuleBox item={item} />
        ))}
      </div>

      <ModuleModal toggleModal={toggleModal} setToggleModal={setToggleModal} />

      <Loading userSearch={storeModules} />
    </>
  );
}

export default React.memo(Moduls);
