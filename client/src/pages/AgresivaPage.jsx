import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ItinerarioContext } from "../context/ItinerarioContext";
import { shuffleArray } from "../helpers/randomOptions";
import { CircularProgress } from "@mui/material";

const AgresivaPage = () => {
  const [loading, setLoading] = useState(true);
  const [texto, setTexto] = useState(null);
  const [options, setOptions] = useState([]);
  const { caso } = useContext(ItinerarioContext);

  useEffect(() => {
    setTexto(caso.texto_Redencion_Agresiva);
    const fields = [
      {
        type: "fracaso",
        text: caso.texto_Redencion_Mala_Agresiva,
      },
      {
        type: "victoria",
        text: caso.texto_Redencion_Buena_Agresiva,
      },
    ];
    const shuffledOptions = shuffleArray(fields);
    setOptions(shuffledOptions);
    setLoading(false);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url("/tormenta.jpg")`,
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
            <h2 style={{ color: "white" }}>{texto}</h2>
          </div>

          <div
            style={{
              display: "grid",
              gap: "1rem",
              padding: "2rem 4rem",
              gridTemplateColumns: "repeat(2,1fr)",
            }}
          >
            {options.map((option) => (
              <Link className="links" to={`/${option.type}`}>
                <button className="mi-btn-caso-redencion">{option.text}</button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AgresivaPage;
