import { useState } from "react";
import "../../styles/tableline.css";

function TableTitleLine({ sortByName, sortByDate }) {
  const [sortOnName, setSortOnName] = useState(false);
  const [sortOnDate, setSortOnDate] = useState(false);
  const [swich, setSwich] = useState(false);
  console.log(swich);

  return (
    <div className="line title_line">
      <div className="name line_item">
        Full name{" "}
        <span
          onClick={() => {
            return (
              sortByName(setSortOnName, setSortOnDate, swich), setSwich(!swich)
            );
          }}
          className={
            sortOnName
              ? swich
                ? "unicode unicode_rev"
                : "unicode unicode_off"
              : "unicode"
          }
        >
          &#9650;
        </span>
      </div>
      <div className="telrgram line_item">Telegram</div>
      <div className="instagram line_item">Instagram</div>
      <div className="login line_item">Login</div>
      <div className="modul_name line_item">Ьodules</div>
      <div className="start_date line_item">
        Start date{" "}
        <span
          onClick={() => {
            return (
              sortByDate(setSortOnDate, setSortOnName, swich), setSwich(!swich)
            );
          }}
          className={
            sortOnDate
              ? swich
                ? "unicode unicode_rev"
                : "unicode unicode_off"
              : "unicode"
          }
        >
          &#9650;
        </span>
      </div>
      <div className="action line_item">Action</div>
      <div className="change line_item"></div>
    </div>
  );
}

export default TableTitleLine;
