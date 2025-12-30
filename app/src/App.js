import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import LogScreen from "./Pages/LogScreen";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Rules from "./Pages/Rules";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<LogScreen />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/rules"
          element={
            <ProtectedRoute>
              <Rules />
            </ProtectedRoute>
          }
        />
      </Routes>

    </AuthContextProvider>
  );
}

export default App;
