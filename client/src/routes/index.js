import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import ProtectedRoute from './ProtectedRoute';
import PartidaPage from '../pages/PartidaPage';
import VictoriaPage from '../pages/VictoriaPage';
import FracasoPage from '../pages/FracasoPage';
import PrePartida from '../pages/PrePartida';
import AgresivaPage from '../pages/AgresivaPage';
import PasivaPage from '../pages/PasivaPage';
import CreacionPage from '../pages/CreacionPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <ProtectedRoute component={<LoginPage />} />,
    },
    {
        path: '/main',
        element: <MainPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/partida',
        element: <PartidaPage />,
    },
    {
        path: '/fracaso',
        element: <FracasoPage />,
    },
    {
        path: '/victoria',
        element: <VictoriaPage />,
    }
    ,
    {
        path: '/prePartida',
        element: <PrePartida />,
    },
    {
        path: '/agresiva',
        element: <AgresivaPage />,
    },
    {
        path: '/pasiva',
        element: <PasivaPage />,
    },
    {
        path: '/crear-partida',
        element: <CreacionPage />,
    }
])