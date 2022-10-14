import React from "react";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/main";
import DetailsPage from "./pages/details";
import Page404 from "./pages/page404";
import MainLayout from "./layout";
import Cards from "./pages/cards";

function App() {
  return (
      <Routes>
          <Route path="/" element={<MainLayout />}>
              <Route index element={<MainPage />}/>
              <Route path=":id/details" element={<DetailsPage />}/>
              <Route path="cards" element={<Cards/>} />
              <Route path="*" element={<Page404/>} />
          </Route>
      </Routes>
  );
}

export default App;