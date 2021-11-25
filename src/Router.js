import { Route, Routes } from "react-router";
import Home from "./containers/Home";

export default function Router() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}
