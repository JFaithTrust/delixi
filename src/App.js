import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import {
  About,
  Branchs,
  Contact,
  Detail,
  Home,
  News,
  NewsDetail,
  ProductDetail,
} from "./pages";

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/news-detail/:id" element={<NewsDetail />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </div>
      <div className="bg-red-600">
        <Footer />
      </div>
    </div>
  );
}

export default App;
