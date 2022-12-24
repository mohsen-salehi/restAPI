import "./bootsrtap.css"
import Register from "./components/auth/register";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/auth/login";
import CreateLink from "./components/createLink";
function App() {
  return (
    <div className="App col-12 d-flex justify-content-center align-items-center vh-100">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register />}/>
                <Route path="login" element={<Login />}/>
                <Route path="create_link" element={<CreateLink />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
