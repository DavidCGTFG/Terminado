import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { shuffleArray } from "../helpers/randomOptions";
import { ItinerarioContext } from "../context/ItinerarioContext";

const PartidaPage = () => {
  const { caso } = useContext(ItinerarioContext);
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (caso) {
      const fields = [
        {
          type: "agresiva",
          text: caso.texto_Opcion_Agresiva,
        },
        {
          type: "victoria",
          text: caso.texto_Opcion_Avanzada,
        },
        {
          type: "victoria",
          text: caso.texto_Opcion_Basica,
        },
        {
          type: "pasiva",
          text: caso.texto_Opcion_Pasiva,
        },
      ];
      const shuffledOptions = shuffleArray(fields);
      setOptions(shuffledOptions);
      setLoading(false);
    }
  }, [caso]);

  useEffect(() => {
    console.log("OPCIONES: ", options);
  }, [options]);

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
      {loading ? (
        <CircularProgress />
      ) : (
        <div className="recuadro">
          <div
            style={{
              display: "flex",
              padding: "2rem 4rem",
              gap: "1rem",
              flexDirection: "column",
            }}
            className="opciones"
          >
            <h2 style={{ color: "white" }}>{caso.texto_intro}</h2>
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
            {options.map((option,index) => {
              return (
                <Link className="links" to={`/${option.type}`}>
                  <button className="mi-btn-caso"
                    style={{
                      backgroundImage: `url("/imagen${index+1}.jpg")`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >{option.text}</button>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PartidaPage;
