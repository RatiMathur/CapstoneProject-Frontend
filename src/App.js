import "./App.css";
import Login from "./Components/Login.js";
import Signup from "./Components/Signup.js";
import Books from "./Components/Books.js";
import CreateBook from "./Components/CreateBook.js";
import Dashboard from "./Components/Dashboard.js";
import DashboardContent from "./Components/DashboardContent.js";
import NotFound from "./Components/NotFound.js";
import UpdateBook from "./Components/UpdateBook.js";
import BookDetails from "./Components/BookDetails.js";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route
            path=""
            element={
              <ProtectedRoute>
                <DashboardContent />
              </ProtectedRoute>
            }
          />
          <Route
            path="books"
            element={
              <ProtectedRoute>
                <Books />
              </ProtectedRoute>
            }
          />
          <Route
            path="books/:id"
            element={
              <ProtectedRoute>
                <UpdateBook />
              </ProtectedRoute>
            }
          />
          <Route
            path="book/:id"
            element={
              <ProtectedRoute>
                <BookDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="books/new"
            element={
              <ProtectedRoute>
                <CreateBook />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
