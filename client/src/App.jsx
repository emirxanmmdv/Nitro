import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import AddPage from "./Pages/AddPage";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              
              <Route path="/" element={<Home />} />
              <Route path="addpage" element={<AddPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
