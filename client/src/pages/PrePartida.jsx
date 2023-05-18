import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const PrePartidaPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url("/cielo.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >

    <div className="recuadro">
      <div
        style={{
          display: "flex",
          padding: "2rem 4rem",
         
          flexDirection: "column",
          height: "50%",
        }}
        className="opciones"
      >
    <h2 style={{ color: "white" }}>
    Pasando un día con Poncho el oso. 
    </h2>
    <div >
      <img src="osito.png" alt="osito" className="osito"/>
    </div>
    <button className="mi-btn-menu-pre ">
            <Link className="links" to="/partida">
              Empecemos
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrePartidaPage;
