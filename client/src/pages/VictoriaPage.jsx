import React, { useContext, useEffect } from "react";
import { ItinerarioContext } from "../context/ItinerarioContext";
import { useNavigate } from "react-router-dom";

const VictoriaPage = () => {
  const navigate = useNavigate();
  const { setCurrentCaso, currentCaso, itinerario } =
    useContext(ItinerarioContext);

  const handleContinuar = () => {
    console.log("ITINERARIO: ", itinerario);
    setCurrentCaso(currentCaso + 1);
    if (currentCaso + 1 == itinerario.idCasos.length) {
      setCurrentCaso(0);
      navigate("/main");
    } else {
      navigate("/partida");
    }
  };

  return (
    <div>
      <h1 className="titulo">HAS CONSEGUIDO LAS BOTAS DE LA AMISTAD</h1>

      <button onClick={handleContinuar} className="mi-btn-caso-redencion">
        Continuemos
      </button>
    </div>
  );
};

export default VictoriaPage;
