import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Invita from "./pages/Invita";
import PagePortabilidad from "./pages/PagePortabilidad";

function App() {
  const gigas = Math.floor(Math.random() * 11);
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
