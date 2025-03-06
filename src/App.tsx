import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import QuizLobbyPage from './Pages/QuizLobbyPage/QuizLobbyPage';
import QuizPage from './Pages/QuizPage/QuizPage';
import EndPage from './Pages/EndPage/EndPage';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import './App.css';

function App() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }

  const { session } = authContext;

  

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/home"
        element={session ? <HomePage /> : <Navigate to="/" />}
      />
      <Route
        path="/quiz-lobby"
        element={session ? <QuizLobbyPage /> : <Navigate to="/" />}
      />
      <Route
        path="/quiz"
        element={session ? <QuizPage /> : <Navigate to="/" />}
      />
      <Route
        path="/end"
        element={session ? <EndPage /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
