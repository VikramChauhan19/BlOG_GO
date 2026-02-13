import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Blog from "./page/Blog";
import { Delete } from "./page/Delete";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Add from "./page/Add";
import Edit from "./page/Edit";
import About from "./page/About";
import Contact from "./page/Contact";
import Login from "./page/Login";

function App() {
  return (
    <div className="app-layout">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
export default App;
