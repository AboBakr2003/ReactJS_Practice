import React from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import OrderSummary from "./pages/order-summary/order-summary";
import Products from "./pages/products/products";
// import About from './pages/about/about'
const About = React.lazy(() => import("./pages/about/about"));
import Contact from "./pages/contact/contact";
// import Dashboard from './pages/dashboard/dashboard'
const Dashboard = React.lazy(() => import("./pages/dashboard/dashboard"));
import FeaturedProducts from "./pages/products/component/featured-products/featured-products";
import NewProducts from "./pages/products/component/new-products/new-products";
import { containerStyles } from "./app-style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDetails from "./pages/dashboard/components/users/user-details/user-details";
import Profile from "./pages/profile/profile";
import { AuthProvider } from "./context/auth/auth";
import Login from "./pages/login/login";
import ReactSvg from "./global-styles/react-svg/react-svg";
// import RequireAuth from "./context/require-auth/require-auth";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <div style={containerStyles}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order-summary" element={<OrderSummary />} />
            <Route path="/products" element={<Products />}>
              <Route
                index
                element={
                  <>
                    <FeaturedProducts /> <NewProducts />
                  </>
                }
              />
              <Route path="featured" element={<FeaturedProducts />} />
              <Route path="new" element={<NewProducts />} />
            </Route>
            <Route
              path="/about"
              element={
                <React.Suspense
                  fallback={<div style={{ color: "#fff" }}>Loading...</div>}
                >
                  <About />
                </React.Suspense>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/dashboard"
              element={
                <React.Suspense
                  fallback={<div style={{ color: "#fff" }}>Loading...</div>}
                >
                  <Dashboard />
                </React.Suspense>
              }
            >
              <Route path=":id" element={<UserDetails />} />
            </Route>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/login" element={<Login />} />
          </Routes>
          <ReactSvg />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
