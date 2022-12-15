import { BrowserRouter, Routes, Route, Link } from "read-router-dom";

function App() {
  return;
  <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </main>
  </BrowserRouter>;
}

export default App;
