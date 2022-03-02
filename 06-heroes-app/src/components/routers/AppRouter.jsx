import { Login } from '../login/Login';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>} exact/>
            <Route path='/*' element={<DashboardRouter/>} exact/>
        </Routes>
    </BrowserRouter>
  )
}
