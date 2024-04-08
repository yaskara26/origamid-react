import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/postar":
        setTitle("Poste sua Foto");
        break;
      case "/conta/estatistica":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha conta");
        break;
    }
    if ("/conta/estatistica" === location.pathname) setTitle("Estatísticas");
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">Título</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
