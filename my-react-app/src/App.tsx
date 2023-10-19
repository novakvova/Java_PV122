// import './App.css'
import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// import ECommerce from './pages/Dashboard/ECommerce';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import routes from './routes';
import HomePage from "./components/HomePage";
import ECommerce from "./pages/Dashboard/ECommerce.tsx";

const DefaultLayout = lazy(() => import('./layout/AdminLayout.tsx'));


function App() {

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

  return loading ? (
      <Loader />
  ) : (
      <>
          <Toaster position='top-right' reverseOrder={false} containerClassName='overflow-auto'/>

          <Routes>
              <Route path="/" element={
                  <Suspense fallback={<Loader/>}>
                      <HomePage/>
                  </Suspense>
              }/>

              <Route path="/login" element={
                  <Suspense fallback={<Loader/>}>
                      <SignIn/>
                  </Suspense>
              } />
              <Route path="/auth/signin" element={<SignIn />} />
              <Route path="/auth/signup" element={<SignUp />} />
              <Route path={"/admin"}  element={<DefaultLayout />}>
                  <Route index element={<ECommerce />} />
                  {routes.map(({ path, component: Component }, idx) => (
                      <Route
                          key={idx}
                          path={path}
                          element={
                              <Suspense fallback={<Loader />}>
                                  <Component />
                              </Suspense>
                          }
                      />
                  ))}
              </Route>
          </Routes>
      </>
  );
}

export default App
