import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import Header from "./container/Header";
import ProductComponent from "./container/ProductComponent";
import ProductDetails from "./container/ProductDetails";
import ProductListing from "./container/ProductListing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const data = useSelector((state) => state.allProducts);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productid" element={<ProductDetails />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
