import React, { FC, useContext, useState } from "react";
import ligtIcon from "../../assets/svg/lightIcon.svg";
import darcIcon from "../../assets/svg/darcIcon.svg";
import { SerialsContext } from "../../Context/SerialsContext";
import style from "./Header.module.css";
import Profile from "../Profile/Profile";

const Header: FC = () => {
  const [theme, setTheme] = useState(false);
  const first = useContext(SerialsContext);
  console.log(first);

  return (
    <div className={style.header}>
      <h1 className={style.title}>Save The Series</h1>
      <div className={style.btnContainer}>
        <Profile />
        <button
          className={style.button}
          onClick={() =>
            first.onChange(first.theme === "light" ? "dark" : "light")
          }
        >
          <img src={first.theme === "light" ? darcIcon : ligtIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
