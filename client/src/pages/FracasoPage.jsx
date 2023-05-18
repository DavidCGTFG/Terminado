import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ItinerarioContext } from "../context/ItinerarioContext";
const FracasoPage = () => {
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
      <h1 className="titulo">No has conseguido las botas de la amistad</h1>
      <button onClick={handleContinuar} className="mi-btn-caso-redencion">
        Continuemos
      </button>
    </div>
  );
};

export default FracasoPage;
