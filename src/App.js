import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
function App() {
  const data = useSelector((state) => state.allProducts);

  return <></>;
}

export default App;
