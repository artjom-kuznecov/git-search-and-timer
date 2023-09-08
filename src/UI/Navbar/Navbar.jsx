import { Link } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.nb}>
      <div className={s.nbLs}>
        <div className={`${s.nbB} ${s.nbBGit}`}>
          <Link className={s.nbL} to='/git-search'>
            ПОИСК ПО GIT ПРОЕКТАМ
          </Link>
        </div>

        <div className={`${s.nbB} ${s.nbBPom}`}>
          <Link className={s.nbL} to='/timer'>
            POMODORO TIMER
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
