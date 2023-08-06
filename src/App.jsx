import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";
import Beneficios from "./components/Beneficios/Beneficios";
import Categorias from "./components/Categorias/Categorias";
import CardsProductos from "./components/Productos/CardsProductos";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <Beneficios />
        <Categorias />
        <CardsProductos />
        <Contacto />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
