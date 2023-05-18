import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const ItinerarioContext = createContext();

export const ItinerarioContextProvider = ({ children }) => {
    const [caso, setCaso] = useState(null);
    const [itinerario, setItinerario] = useState(null);
    const [currentCaso, setCurrentCaso] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('GETTING ITINERARIO');
        const getItinerario = async () => {
            try {
                const { data } = await axios.get("http://54.88.52.250/api/v1/itinerario/last");
                setItinerario(data.data);
            } catch (error) {
                console.error('Error al obtener el itinerario:', error);
            }
        };
        getItinerario();
    }, []);

    useEffect(() => {
        if (itinerario) {
            const getCaso = async () => {
                try {
                    console.log(itinerario);
                    console.log('CURRENT CASO: ', currentCaso)
                    const { data } = await axios.get(`http://54.88.52.250/api/v1/caso/${itinerario.idCasos[currentCaso]}?itinerario=${itinerario.idItinerario}`);
    
                    console.log(data[0]);
                    setCaso(data[0]);
                    setLoading(false);
                } catch (error) {
                    console.error('Error al obtener el caso1:', error);
                }
            };
            getCaso();
        }
    }, [itinerario, currentCaso]);

    useEffect(() => {
        if (itinerario && currentCaso >= 0 && currentCaso < itinerario.idCasos.length) {
            getCaso();
        }
    }, [currentCaso]);

    const getCaso = async () => {
    try {
        console.log(itinerario);
        console.log('CURRENT CASO: ', currentCaso);
       
        const { data } = await axios.get(`http://54.88.52.250/api/v1/caso/${itinerario.idCasos[currentCaso]}?itinerario=${itinerario.idItinerario}`);

        if (data.data.length > 0) {
            console.log(data[0]);
            setCaso(data[0]);
            setLoading(false);
        } else {
            console.error('No se encontró el caso');
        }
    } catch (error) {
        console.error('Error al obtener el caso2:', error);
    }
};

    const data = {
        caso,
        setCaso,
        currentCaso,
        setCurrentCaso,
        itinerario,
        setItinerario
    };

    return loading ? (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress />
        </div>
    ) : (
        <ItinerarioContext.Provider value={data}>
            {children}
        </ItinerarioContext.Provider>
    );
};
