import { useEffect, useState, useMemo } from "react";
import React from "react";
import "../../styles/users.css";
import TableLine from "./TableLine";
import TableTitleLine from "./TableTitleLine";
import { useDispatch, useSelector } from "react-redux";
import {
  addUsers,
  userSortByName,
  userSortByDate,
  userSortByNameREV,
  userSortByDateREV,
} from "../../store/action/addAction";
import ModalAddUser from "./ModalAddUser";
import Loading from "../LoadingBck";
import Pagination from "../Pagination/Pagination";

function Users() {
  const FULL_NAME_URL = process.env.REACT_APP_URL_USERS;
  const dispatch = useDispatch();
  const { storeUsers } = useSelector((state) => state);
  const [modulToggle, setModulToggle] = useState(false);
  const [userSearch, setUserSearch] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [allUsers, setAllUsers] = useState([]);
  const [targetInput, setTargetInput] = useState([]);

  let PageSize = 5


  
  // Load users from back in redux store (RS)
  useEffect(() => {
    const serch = async () => {
      let response = await fetch(`${FULL_NAME_URL}`);
      let searchusers = await response.json();
      storeUsers.lengths || dispatch(addUsers(searchusers));
    };
    serch().catch(console.error);
    setAllUsers(storeUsers);
    setUserSearch(storeUsers);
    console.log("save to REDUX");
  }, []);

  //Save users from RS to variable
  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if (allUsers < storeUsers) {
      let showPage = targetInput.slice(firstPageIndex, lastPageIndex);
      setUserSearch(showPage);
    } else {
      let showPage = storeUsers.slice(firstPageIndex, lastPageIndex);
      setUserSearch(showPage);
      setAllUsers(storeUsers);
      console.log("save to VARIABLE");
    }
  }, [storeUsers, currentPage]);

  //During searching we looking for coincidents in redux and save them in variable
  let search = (e) => {
    let a = storeUsers.filter((item) => {
      return item.firstName.toLowerCase().includes(e.toLowerCase());
    });
    setTargetInput(a);
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    let b = a.slice(firstPageIndex, lastPageIndex);

    setUserSearch(b);
    setAllUsers(a);
  };

  //sort in RS by Name
  let sortByName = (setSortOnName, setSortOnDate, swich) => {
    swich ? dispatch(userSortByName()) : dispatch(userSortByNameREV());
    setSortOnName(true);
    setSortOnDate(false);
  };

  //sort in RS by Date

  let sortByDate = (setSortOnDate, setSortOnName, swich) => {
    swich ? dispatch(userSortByDate()) : dispatch(userSortByDateREV());
    setSortOnDate(true);
    setSortOnName(false);
  };
  //--------------------------------------------

  return (
    <>

      <div className="title_wrapper">
        <div className="title">
          <h2>Users List</h2>
        </div>
        <div className="right">
          <div className="add_btn">
            <button
              className="add"
              onClick={() => {
                return setModulToggle(true);
              }}
            >
              Add user
            </button>
          </div>
          <div className="search">
            <input type="search_inp" onChange={(e) => search(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="table_title table_item">
        <TableTitleLine sortByName={sortByName} sortByDate={sortByDate} />
        {userSearch.map((fulluser) => (
          <TableLine fulluser={fulluser} key={fulluser.id} />
        ))}
      </div>

      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={allUsers.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />

      <div
        onClick={() => setModulToggle(false)}
        className={modulToggle ? "shadow" : "shadow off"}
      ></div>

      <ModalAddUser modulToggle={modulToggle} setModulToggle={setModulToggle} />

      <Loading userSearch={userSearch} />
    </>
  );
}

export default React.memo(Users);
