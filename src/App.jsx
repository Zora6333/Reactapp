import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage/Main";
import AboutUsPage from "./page/AboutUsPage/AboutUs";
import Layout from "./component/Layout/Layout";
import NotFound from "./page/NotFound/NotFound";
import Contacts from "./page/Contacts/Contacts";
import Castomfurniture from './page/Customfurniture/Customfurniture'
import Politics from './page/Politics/Politics'
import MasterClass from './page/MasterClass/MasterClass'
import "./App.css";


function App() {
  return (
    <>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/MasterClass" element={<MasterClass />} />
            <Route path="/AboutUs" element={<AboutUsPage />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Customfur" element={<Castomfurniture />} />
            <Route path="/Politics" element={<Politics />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </HashRouter>
    </>
  );
}

export default App;
