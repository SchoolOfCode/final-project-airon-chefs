import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";
import QuizLobbyPage from "./Pages/QuizLobbyPage/QuizLobbyPage";
import QuizPage from "./Pages/QuizPage/QuizPage";
import EndPage from "./Pages/EndPage/EndPage";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import "./App.css";

function App() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { session } = authContext;

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      {session && (
        <>
          <Route path="/home" element={<HomePage />} />
          <Route path="/quiz-lobby" element={<QuizLobbyPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/quiz-multi" element={<QuizLobbyPage />} />
          <Route path="/end" element={<EndPage />} />
        </>
      )}
    </Routes>
  );
}

export default App;
