import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <Hero />
        <Hero />
        <Hero />
      </Layout>
    </>
  );
}

export default App;
