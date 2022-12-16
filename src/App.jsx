import Topbar from "./Components/Topbar/Topbar";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Settings/Settings";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Post from "./Components/Post/Post";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/posts' element={<Homepage/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/write' element={<Write/>} />
      <Route path='/settings' element={<Settings/>} />
      <Route path='/post/:postID' element={<Post/>} />
        {/* <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
