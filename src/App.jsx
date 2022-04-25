import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Invita from "./pages/Invita";
import PagePortabilidad from "./pages/PagePortabilidad";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Invita />}/>
        <Route path="plans" element={<PagePortabilidad />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
