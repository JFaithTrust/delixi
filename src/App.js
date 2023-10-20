import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import { About, Branchs, Home, News } from "./pages";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="basis-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/branchs" element={<Branchs />} />
        </Routes>
      </div>
      <div className="bg-red-600">
        <Footer />
      </div>
    </div>
  );
}

export default App;
