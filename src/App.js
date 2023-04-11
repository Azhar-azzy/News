import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import News from "./pages/news/News";
import Books from "./pages/books/Books";
import Headlines from "./pages/headlines/Headlines";
import Business from "./pages/business/Business";
import World from "./pages/world/World";

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/headlines" element={<Headlines />} />
          <Route path="/books" element={<Books />} />
          <Route path="/business" element={<Business />} />
          <Route path="/world" element={<World />} />
          <Route path="/news/detail/:id" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
