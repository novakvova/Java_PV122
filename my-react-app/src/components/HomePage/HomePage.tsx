import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <h1>Головна сторінка!</h1>
            <Link to={"/admin"}>Адмін панель</Link>
            <Link to={"/login"}>Вхід</Link>
        </>
    );
}
export default HomePage;