import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import LogScreen from "./Pages/LogScreen";
import Dashboard from "./Pages/Dashboard";
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
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
