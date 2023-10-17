import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import { About, Home, News } from "./pages";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="basis-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
