import Topbar from "./Components/Topbar/Topbar";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Settings/Settings";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        {/* <Route path='/posts' element={<Homepage />} /> */}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/write' element={currentUser ? <Write /> : <Login />} />
        <Route path='/settings' element={currentUser ? <Settings /> : <Login />} />
        <Route path='/post/:postID' element={currentUser ? <Single /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
