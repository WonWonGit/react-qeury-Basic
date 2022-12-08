import { Route, Routes } from "react-router-dom"
import Todos from "../components/Todos";

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<Todos />}></Route>
        </Routes>
    )
}

export default Router;