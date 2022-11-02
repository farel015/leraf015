import React, { Suspense } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const TechnologyPage = React.lazy(() => import("./pages/TechnologyPage"));
const SoftwarePage = React.lazy(() => import("./pages/SoftwarePage"));
const GamesPage = React.lazy(() => import("./pages/GamesPage"));
const MoviesPage = React.lazy(() => import("./pages/MoviesPage"));

function App() {
  return (
    <>
      <NavbarComp />
      <Suspense
        fallback={
          <Container>
            <span>Halaman sedang di load...</span>
          </Container>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/software" element={<SoftwarePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
        <FooterComp />
      </Suspense>
    </>
  );
}

export default App;
