import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";

// Layouts
import RootLayout from "./layouts/RootLayout";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <Link to="/">Home</Link>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
