// import { Route, Routes } from "react-router-dom";
// import IndexPage from "@/pages/HomePage";
// import DocsPage from "@/pages/docs";
// import PricingPage from "@/pages/pricing";
// import BlogPage from "@/pages/blog";
// import AboutPage from "@/pages/about";
// import CostEstimationPage from "./pages/CostEstimationPage";
// import VmProvisioningPage from "./pages/VmProvisioningPage";
// import CostingItemsPage from "./pages/CostingItemsPage";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Regiester";

// function App() {
//   return (
//     <Routes>
//       <Route element={<Login />} path="/" />
//       <Route element={<Register />} path="/register" />
//       <Route element={<IndexPage />} path="/home" />
//       <Route element={<DocsPage />} path="/docs" />
//       <Route element={<PricingPage />} path="/pricing" />
//       <Route element={<BlogPage />} path="/blog" />
//       <Route element={<AboutPage />} path="/about" />
//       <Route element={<CostEstimationPage />} path="/cost-estimation" />
//       <Route element={<VmProvisioningPage />} path="/vm-provisioning" />
//       <Route element={<CostingItemsPage />} path="/costing-items" />
//     </Routes>
//   );
// }

// export default App;
import { Route, Routes } from "react-router-dom";
import IndexPage from "@/pages/HomePage";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import CostEstimationPage from "./pages/CostEstimationPage";
import VmProvisioningPage from "./pages/VmProvisioningPage";
import CostingItemsPage from "./pages/CostingItemsPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Regiester";
import PrivateRoute from "@/components/PrivateRoute";
import { AuthProvider } from "@/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Register />} path="/register" />
        
        {/* Protected Routes */}
        <Route path="/home" element={<PrivateRoute><IndexPage /></PrivateRoute>} />
        <Route path="/docs" element={<PrivateRoute><DocsPage /></PrivateRoute>} />
        <Route path="/pricing" element={<PrivateRoute><PricingPage /></PrivateRoute>} />
        <Route path="/blog" element={<PrivateRoute><BlogPage /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><AboutPage /></PrivateRoute>} />
        <Route path="/cost-estimation" element={<PrivateRoute><CostEstimationPage /></PrivateRoute>} />
        <Route path="/vm-provisioning" element={<PrivateRoute><VmProvisioningPage /></PrivateRoute>} />
        <Route path="/costing-items" element={<PrivateRoute><CostingItemsPage /></PrivateRoute>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
