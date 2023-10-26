// import './App.css'
import {Suspense, lazy, useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

import Loader from './common/Loader';

// import ECommerce from './pages/Dashboard/ECommerce';
const SignIn  = lazy(() => import('./pages/Authentication/SignIn'));
const SignUp  = lazy(() => import('./pages/Authentication/SignUp'));
const HomePage  = lazy(() => import("./components/HomePage"));
const ECommerce = lazy(() => import("./pages/Dashboard/ECommerce.tsx"));

const DefaultLayout = lazy(() => import('./layout/AdminLayout.tsx'));

import routes from './routes';

function App() {

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    return loading ? (
        <Loader/>
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
                }/>
                <Route path="/auth/signin" element={
                    <Suspense fallback={<Loader/>}>
                        <SignIn/>
                    </Suspense>
                }/>
                <Route path="/auth/signup" element={
                    <Suspense fallback={<Loader/>}>
                        <SignUp/>
                    </Suspense>
                }/>
                <Route path={"/admin"} element={
                    <Suspense fallback={<Loader/>}>
                        <DefaultLayout/>
                    </Suspense>
                }>
                    <Route index element={
                        <Suspense fallback={<Loader/>}>
                            <ECommerce/>
                        </Suspense>
                    }/>
                    {routes.map(({path, component: Component}, idx) => (
                        <Route
                            key={idx}
                            path={path}
                            element={
                                <Suspense fallback={<Loader/>}>
                                    <Component/>
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
