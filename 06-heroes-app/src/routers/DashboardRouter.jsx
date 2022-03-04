import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/Search/SearchScreen';
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar';
import { Hero } from '../components/hero/Hero';


export const DashboardRouter = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path='/dc' element={<DcScreen />} exact />
                    <Route path='/marvel' element={<MarvelScreen />} exact />
                    <Route path='/search' element={<SearchScreen />} exact />
                    <Route path='/hero/:heroId' element={<Hero />} exact />
                    <Route path='/' element={<MarvelScreen />} exact />
                </Routes>
            </div>
        </>
    )
}
