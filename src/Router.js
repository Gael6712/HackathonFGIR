import { Route, Routes } from "react-router";
import Acceuil from "./Acceuil";
import Home from "./containers/Home";
import Test from "./containers/Test";

export default function Router() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Acceuil />} />
        <Route exact path="/hangman" element={<Home />} />
        <Route exact path="/test" element={<Test />} />
      </Routes>
    </>
  );
}
