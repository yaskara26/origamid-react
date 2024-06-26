import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import UserContext from "../../UserContext";
// import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
// import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";

import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";
import AdicionarFoto from "../Icons/AdicionarFoto";
import Sair from "../Icons/Sair";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  const mobile = useMedia("(max-width: 40)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          {/* <MinhasFotos /> */}
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          {/* <Estatisticas /> */}
          {mobile && "Estátisticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFoto />
          {mobile && "Adicionar Fotos"}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
