import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';
import AppHeader from '../components/AppHeader';
import AppLoading from '../components/UI/AppLoading';

const MainPage = lazy(() => import('./../pages/MainPage'));
const LoginPage = lazy(() => import('./../pages/LoginPage'));
const RegistrationPage = lazy(() => import('./../pages/RegistrationPage'));
const ProfilePage = lazy(() => import('./../pages/ProfilePage'));

function AppRouter() {
    return (
        <Suspense fallback={<AppLoading />}>
            <AppHeader />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/profile/:id" element={<ProfilePage />} />
            </Routes>
        </Suspense>
    )
}

export default AppRouter;