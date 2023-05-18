import React from "react";
import { Link, Navigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import axios from "axios";
// import { ControlBar, Player } from "video-react";
// import "video-react/dist/video-react.css";

const MainPage = () => {
 
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url("/img1.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <Player ref={videoRef} playsInline autoPlay muted>
        <source src="/background-main.mp4" type="video/mp4" />
        <ControlBar disableDefaultControls={true} autoHide={false} />
      </Player> */}

      <div className="recuadro">
        <div className="titulo">supervalues</div>
        <div className="botones">
          <button className="mi-btn-start">
            <Link className="links" to="/prePartida">
              Empezar
            </Link>
          </button>
          <button className="mi-btn-menu ">
            <Link className="links" to="/crear-partida">
              Crear
            </Link>
          </button>
          {/* <button className="mi-btn-start" onClick={testdb}>
            Consulta
          </button> */}
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            paddingTop: "3rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowRightAltIcon style={{ color: "#00c271" }} fontSize="large" />
          <p
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "18px",
            }}
          >
            Un videojuego para trabajar los valores en el aula
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
