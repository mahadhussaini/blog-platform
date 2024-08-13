import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Post from "./pages/Post";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import ProfilePage from "./pages/user/ProfilePage";
import CreatePostPage from "./pages/auth/CreatePostPage";
import PrivateRoute from "./pages/auth/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import "./styles/App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="/profile"
              element={<PrivateRoute element={<ProfilePage />} />}
            />
            <Route
              path="/create"
              element={<PrivateRoute element={<CreatePostPage />} />}
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
