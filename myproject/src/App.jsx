import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import Home from "./Home";
import Create from "./Create";
// import Delete from "./Delete";
import Update from "./Update";
import Nav from "./Nav";
import Footer from "./Footer";

/* Layout component */
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter basename="/react-crud-dashboard">
        <Routes>

          {/* Public Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout>
                  <Home />
                </Layout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <Layout>
                  <Create />
                </Layout>
              </ProtectedRoute>
            }
          />

          

          <Route
            path="/update/:id"
            element={
              <ProtectedRoute>
                <Layout>
                  <Update />
                </Layout>
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
