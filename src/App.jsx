import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'; // Import this
// Pages Import
import Auth from "./pages/Auth.jsx"; 
import Dashboard from "./pages/Dashboard.jsx";
import AnalyzeNews from "./pages/AnalyzeNews.jsx";
import Home from "./pages/Home.jsx";
import AISummary from "./pages/AISummary.jsx"; 
import FactCheckHistory from "./pages/FactCheckHistory.jsx";
import SavedArticles from "./pages/SavedArticles.jsx";
import AlertsTrends from "./pages/AlertsTrends.jsx";
import Quizzes from "./pages/Quizzes.jsx";
import Settings from "./pages/Settings.jsx";
import AboutUs from "./pages/AboutUs.jsx";
// 🔥 Refresh ya Tab close hone par Guest Session completely uda dega
window.addEventListener("beforeunload", () => {
  if (sessionStorage.getItem('token') === 'guest-session') {
    sessionStorage.clear();
  }
});
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />

        {/* Yahan dekho, maine <Dashboard> ko <ProtectedRoute> ke andar dal diya hai */}
        <Route path="/*" element={
          <ProtectedRoute>
            <Dashboard>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/analyze" element={<AnalyzeNews />} />
                <Route path="/summary" element={<AISummary />} />
                <Route path="/history" element={<FactCheckHistory />} />
                <Route path="/saved" element={<SavedArticles />} />
                <Route path="/alerts" element={<AlertsTrends />} />
                <Route path="/quizzes" element={<Quizzes />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/about" element={<AboutUs/>} />
              </Routes>
            </Dashboard>
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}



export default App;