import { useEffect, useState } from "react";
import "../../styles/modalChange.css";
import { useDispatch } from "react-redux";
// import { changeNameR } from "../../store/action/addAction";
import ModalChangeUserInfo from "./ModalChangeUserInfo";
import { addUsers } from "../../store/action/addAction";

function ModalChangeUser({
  toggleModalChUser,
  setToggleModalChUser,
  fulluser,
  telegram,
  instagram,
}) {
  const [persent, setPersent] = useState(0);
  const [toggleName, setToggleName] = useState(true);
  const [name, setName] = useState(
    `${fulluser.firstName} ${fulluser.lastName}`
  );
  const dispatch = useDispatch();
  const FULL_NAME_URL = process.env.REACT_APP_URL_USERS;
  const CHANGEUSER = process.env.REACT_APP_URL_CHANGEUSER;

  useEffect(() => {
    const done = fulluser.progress.filter((fulluser) => fulluser.status);
    setPersent(((done.length * 100) / fulluser.progress.length).toFixed(2));
    // const time =
    //   new Date().getTime() -
    //   new Date(fulluser.updatedAt.split("T")[0].split("-").join("-")).getTime();
    // setDays(Math.floor(time / 86400000));
  }, []);

  const changeName = async () => {
    const obj = {
      login: fulluser.login,
      password: 123123,
      firstName: name,
      lastName: "",
      isAdmin: false,
      instagram: `@${instagram}`,
      telegram: `@${telegram}`,
      moduleId: 1,
    };

    if (!toggleName) {
      try {
        const response = await fetch(`${CHANGEUSER}/${fulluser.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });
        const data = await response.json();
        const response2 = await fetch(`${FULL_NAME_URL}`);
        const searchusers = await response2.json();
        dispatch(addUsers(searchusers));
        // enter you logic when the fetch is successful
      } catch (error) {
        // enter your logic for when there is an error (ex. error toast)
        console.log(error);
      }
    }
    setToggleName(!toggleName);
  };

  return (
    <>
      <div className={toggleModalChUser ? "modal_change" : "modal_change off"}>
        <div
          className="close_modal"
          onClick={() => {
            return setToggleModalChUser(false);
          }}
        >
          &#128473;
        </div>
        <div className="toggle_name">
          {toggleName ? (
            <div className="user_name">
              {fulluser.firstName} {fulluser.lastName}
            </div>
          ) : (
            <input className="user_name" value={name} onChange={(e) => setName(e.target.value)} />
          )}

          <button onClick={() => changeName()}>clickMe</button>
        </div>
        <hr></hr>
        <h2 className="prigress_title">PROGRESS</h2>
        <div className="progress_wrapprer">
          <div className="progress_line">
            <div
              className="progress_line_full"
              style={{ width: `${Number(persent)}%` }}
            ></div>
          </div>
          <div className="progress_persent">
            <p>{persent} %</p>
          </div>
        </div>

        <hr></hr>

        <ModalChangeUserInfo fulluser={fulluser} />
        <hr></hr>
      </div>
    </>
  );
}

export default ModalChangeUser;
