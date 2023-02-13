import { Navigate, Route, Routes } from 'react-router-dom';
import { DCPage, HeroPage, MarvelPage, SearchPage } from '../pages';

export const HeroesRoutes = () => {
    return (
        <>
            <div className='container'>
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DCPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero" element={<HeroPage />} />
                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    )
}