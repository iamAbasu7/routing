import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Blogs } from "./pages/Blogs";
import { Contact } from "./pages/Contact";
import { DynamicBlocgPage } from "./pages/DynamicBlocgPage";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { User } from './pages/User';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/blogs" element = {<Blogs/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/blogs/:title" element={<DynamicBlocgPage/>}/>
              <Route path="*" element={<Error/>}/>
              <Route path="/user" element={<User/>}/>
          </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
