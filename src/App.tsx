import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/HomePage";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import CostEstimationPage from "./pages/CostEstimationPage";
import VmProvisioningPage from "./pages/VmProvisioningPage";
import CostingItemsPage from "./pages/CostingItemsPage";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<CostEstimationPage />} path="/cost-estimation" />
      <Route element={<VmProvisioningPage />} path="/vm-provisioning" />
      <Route element={<CostingItemsPage />} path="/costing-items" />
    </Routes>
  );
}

export default App;
