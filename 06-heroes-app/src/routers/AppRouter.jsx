import { Login } from '../components/login/Login';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { DashboardRouter } from './DashboardRouter';
import PrivateRouters from './PrivateRouters';
import PublicRouters from './PublicRouters';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={
          <PublicRouters>
            <Login />
          </PublicRouters>

        } exact />

        <Route path='/*' element={
          <PrivateRouters>
            <DashboardRouter />
          </PrivateRouters>}
          exact />
      </Routes>
    </BrowserRouter>
  )
}
