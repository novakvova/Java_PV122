// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Provider} from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import {store} from "./store/store.ts";
import './index.css'
import './satoshi.css';
import {LoginUserAction} from "./store/actions/AuthActions.ts";

if(localStorage.token) {
    LoginUserAction(store.dispatch, localStorage.token);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </>,
)
