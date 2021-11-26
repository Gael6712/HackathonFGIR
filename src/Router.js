import { Route, Routes } from "react-router";
import Acceuil from "./Acceuil";
import Home from "./containers/Home";

export default function Router() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Acceuil />} />
        <Route exact path="/hangman" element={<Home />} />
     </Routes>
    </>
  );
}
