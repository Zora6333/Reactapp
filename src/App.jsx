import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage/Main";
import AboutUsPage from "./page/AboutUsPage/AboutUs";
import Layout from "./component/Layout/Layout";
import NotFound from "./page/NotFound/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/AboutUs" element={<AboutUsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
