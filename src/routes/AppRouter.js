import {
  React,
  Routes,
  Route,
  // Outlet,
  // useSelector,
  Navigate,
} from '../utils/GlobalExport';


// import PublicRoute from '../routes/PublicRoute';
import PrivateRoute from '../routes/PrivateRoute';
import NotFound from '../pages/error/404';


// import { BrowserRouter as Router} from 'react-router-dom'
import SecureRoute from '../routes/SecureRoute';

// import Home from '../pages/dashboard/Dashboard'
// import Test from '../pages/App/Test'
import Login from '../pages/auth/Login'



function AppRouter() {
  // check user authenticate
  // const userAuthenTicate = useSelector((state) => state.auth.isAuthenticate);
  return (
      <Routes>
        <Route element={<SecureRoute/>}>
          {PrivateRoute.map(
            ({ component: Component, path, exact, index, childRouters }) => (
              <Route 
                path={`/${path}`}
                key={index}
                exact={exact}
                element={<Component/>}
              >
                
                {/* children route */}
                {childRouters.map(
                  ({ component: CComponent, path, cexact, index }) => (
                    <>
                    { console.log(path)}
                    {index === undefined && (
                          <Route
                            key={path}
                            index
                            element={<Navigate to={path} replace />}
                          />
                        )}
                        <Route
                          path={`${path}`}
                          key={path}
                          exact={cexact}
                          element={<CComponent />}
                        />
                    </>
                  )
                )}
              </Route>
            )
          )}
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
  )
}

export default AppRouter