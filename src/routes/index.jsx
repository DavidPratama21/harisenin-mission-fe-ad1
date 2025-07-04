import { createBrowserRouter, Navigate } from "react-router";
import Beranda from "../pages/Beranda";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Kategori from "../pages/Kategori";
import DetailProduk from "../pages/DetailProduk";
import Metode from "../pages/Metode";
import Bayar from "../pages/Bayar";
import UbahMetodePembayaran from "../pages/UbahMetodePembayaran";
import Selesai from "../pages/Selesai";
import Pesanan from "../pages/Pesanan";
import Kelas from "../pages/Kelas";
import Profil from "../pages/Profil";
import Video from "../pages/Video";
import ProtectedRoute from "./ProtectedRoute";
import Admin from "../pages/Admin";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Beranda />
            </ProtectedRoute>
        ),
    },
    {
        path: "/kategori",
        element: (
            <ProtectedRoute>
                <Kategori />
            </ProtectedRoute>
        ),
    },
    {
        path: "/detailProduk",
        element: (
            <ProtectedRoute>
                <DetailProduk />
            </ProtectedRoute>
        ),
    },
    {
        path: "/metode",
        element: (
            <ProtectedRoute>
                <Metode />
            </ProtectedRoute>
        ),
    },
    {
        path: "/bayar",
        element: (
            <ProtectedRoute>
                <Bayar />
            </ProtectedRoute>
        ),
    },
    {
        path: "/ubahMetode",
        element: (
            <ProtectedRoute>
                <UbahMetodePembayaran />
            </ProtectedRoute>
        ),
    },
    {
        path: "/selesai",
        element: (
            <ProtectedRoute>
                <Selesai />
            </ProtectedRoute>
        ),
    },
    {
        path: "/pesanan",
        element: (
            <ProtectedRoute>
                <Pesanan />
            </ProtectedRoute>
        ),
    },
    {
        path: "/kelas",
        element: (
            <ProtectedRoute>
                <Kelas />
            </ProtectedRoute>
        ),
    },
    {
        path: "/profil",
        element: (
            <ProtectedRoute>
                <Profil />
            </ProtectedRoute>
        ),
    },
    {
        path: "/video",
        element: (
            <ProtectedRoute>
                <Video />
            </ProtectedRoute>
        ),
    },
    {
        path: "/admin",
        element: (
            <ProtectedRoute>
                <Admin />
            </ProtectedRoute>
        ),
    },
]);
