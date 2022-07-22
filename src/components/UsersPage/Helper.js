import { useDispatch, useSelector } from "react-redux";
import {
  addUsers,
  userSortByName,
  userSortByDate,
  userSortByNameREV,
  userSortByDateREV,
} from "../../store/action/addAction";

let Helper = () => {
  const dispatch = useDispatch();

  let sortByDate = (setSortOnDate, setSortOnName, swich) => {
    swich ? dispatch(userSortByDate()) : dispatch(userSortByDateREV());
    setSortOnDate(true);
    setSortOnName(false);
  };
};

export default Helper;
