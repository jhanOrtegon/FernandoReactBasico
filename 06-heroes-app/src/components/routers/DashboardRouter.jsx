import { DcScreen } from '../dc/DcScreen';
import { MarvelScreen } from '../marvel/MarvelScreen';
import { SearchScreen } from '../Search/SearchScreen';
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../ui/Navbar';
import { Hero } from '../hero/Hero';


export const DashboardRouter = () => {
    return (
        <>
        <Navbar/>
            <Routes>
                <Route path='/dc' element={<DcScreen />} exact />
                <Route path='/marvel' element={<MarvelScreen />} exact />
                <Route path='/search' element={<SearchScreen />} exact />
                <Route path='/hero' element={<Hero />} exact />
                <Route path='/' element={<MarvelScreen />} exact />
            </Routes>
        </>
    )
}
