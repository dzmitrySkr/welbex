import { useEffect, useState } from "react";
import React from "react";
import "../../styles/tableline.css";
import ModalChangeUser from "./ModalChangeUser";
import Moment from "react-moment";

function TableLine({ fulluser }) {
  const SOCNET = process.env.REACT_APP_URL_SOCNET;
  const USER_MODUL = process.env.REACT_APP_URL_USERMODUL;
  const MODULES = process.env.REACT_APP_URL_MODULES;

  const [instaFromBack, setInstaFromBack] = useState("");
  const [telegaFromBack, setTelegaFromBack] = useState("");
  const [toggleModalChUser, setToggleModalChUser] = useState(false);
  const [modul, setModul] = useState("");

  // add modules
  useEffect(() => {
    const serch = async () => {
      const response = await fetch(`${USER_MODUL}/${fulluser.id}`);
      const searchnodules = await response.json();
      const response2 = await fetch(`${MODULES}/${searchnodules[0].module_id}`);
      const searchnodules2 = await response2.json();
      searchnodules2 && setModul(searchnodules2.title);
    };
    serch().catch(console.error);
  }, []);

  //add telegram and instagram
  useEffect(() => {
    const serch = async () => {
      const response = await fetch(`${SOCNET}${fulluser.id}`);
      const searchUsers = await response.json();
      searchUsers && setInstaFromBack(searchUsers.instagram);
      searchUsers && setTelegaFromBack(searchUsers.telegram);
    };
    serch().catch(console.error);
  }, []);

  return (
    <>
      <div className="line">
        <div className="name line_item">
          <a
            href={`https://t.me/${
              telegaFromBack
                ? telegaFromBack.slice(1)
                : fulluser.telegram && fulluser.telegram.slice(1)
            }`}
            target={"_blank"}
          >
            {fulluser.firstName} {fulluser.lastName}
          </a>
        </div>
        <div className="telrgram line_item">
          {telegaFromBack || fulluser.telegram}
        </div>
        <div className="instagram line_item">
          {instaFromBack || fulluser.instagram}
        </div>
        <div className="login line_item">{fulluser.login}</div>
        <div className="modul_name line_item">{modul || fulluser.modul}</div>
        <div className="start_date line_item">
          {/* {fulluser.updatedAt &&
            fulluser.updatedAt.split("T")[0].split("-").reverse().join("-")} */}
          <Moment format="DD-MM-YYYY">{fulluser.updatedAt}</Moment>
        </div>
        <div className="action line_item">Invite</div>

        <div
          className="change line_item"
          onClick={() => {
            return setToggleModalChUser(!toggleModalChUser);
          }}
        >
          Change
        </div>
      </div>

      <div
        onClick={() => setToggleModalChUser(false)}
        className={toggleModalChUser ? "shadow_modal" : "shadow_modal off"}
      ></div>

      <ModalChangeUser
        toggleModalChUser={toggleModalChUser}
        setToggleModalChUser={setToggleModalChUser}
        telegram={telegaFromBack || fulluser.telegram}
        instagram={instaFromBack || fulluser.instagram}
        fulluser={fulluser}
      />
    </>
  );
}

export default React.memo(TableLine);
