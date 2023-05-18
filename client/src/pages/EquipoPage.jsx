import React from "react";
import { Link, Navigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { colors } from "@mui/material";

const EquipoPage = () => {
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
            gap: "1rem",
            flexDirection: "column"
          }}
          className="opciones"
        >
          <h2 style={{ color: "white" }}>
          Chicos tenemos que hacer una cartulina con el tema que queramos, ¿qué hacemos?
          </h2>
        </div>

        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1rem",
            padding: "2rem 4rem",
            justifyContent: "space-between",
          }}
        >
          <Link className="links" to="/pasivaE">
            <button className="mi-btn-caso">
            Me callo y dejo que los demás decidan.
            </button>
          </Link>

          <Link className="links" to="/victoriaE">
            <button className="mi-btn-caso">
            Vamos a dar todos nuestro punto de vista y llegamos a un acuerdo, ¿vale?
            </button>
          </Link>

          <Link className="links" to="/victoriaE">
            <button className="mi-btn-caso">
            Vamos a votar.
            </button>
          </Link>

          <Link className="links" to="/agresivaE">
            <button className="mi-btn-caso">
            Propones tu tema sin importar la opinión del resto.
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EquipoPage;