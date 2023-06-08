import { Home } from "./component/Home";
import Login from "./component/Login";
import Navbar from "./component/Navbar";
import Signup from "./component/Signup";
import ItemState from "./context/item/ItemState";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <ItemState>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </ItemState>
    </>
  );
}

export default App;
