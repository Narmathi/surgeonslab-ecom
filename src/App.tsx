import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import ProductListingPage from "@/pages/ProductListingPage";
import ProductDetailsPage from "@/pages/ProductDetailPage";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import ScrollToTop from "@/components/common/ScrolltoTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductListingPage />} />
          <Route path="products/:id" element={<ProductDetailsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
