import Topbar from "./Components/Topbar/Topbar";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Settings/Settings";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/posts' element={<Homepage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/write' element={user ? <Write /> : <Login />} />
        <Route path='/settings' element={user ? <Settings /> : <Login />} />
        <Route path='/post/:postId' element={user ? <Single /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
