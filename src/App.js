import React, { Suspense, lazy } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ✅ Lazy load pages to reduce initial load
const HomePage = lazy(() => import('./pages/HomePage'));
const Cricket3 = lazy(() => import('./pages/cricket3'));
const SnickoMeter = lazy(() => import('./pages/SnickoMeter'));
const FootballTechnologies = lazy(() => import('./pages/FootballTechnologies'));
const TennisTechnologies = lazy(() => import('./pages/TennisTechnologies'));
<<<<<<< HEAD
const Blogs = lazy(() => import('./pages/Blogs'));
const Books = lazy(() => import('./pages/Books')); // Lazy load Books component
const Rental = lazy(() => import('./pages/Rental')); // Lazy load Rental component
=======
>>>>>>> a270c23625903cc97df5a0528e5475350f7c492a


// ✅ Global error handler
window.onerror = function (message, source, lineno, colno, error) {
  console.error("🌐 Global Error Caught:", {
    message,
    source,
    lineno,
    colno,
    error,
  });
};

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/Cric-stadium.webp)`,
          backgroundSize: "cover",
<<<<<<< HEAD
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          imageRendering: "auto",
=======
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  imageRendering: "auto",
>>>>>>> a270c23625903cc97df5a0528e5475350f7c492a
        }}
      >
        {/* ✅ Suspense fallback to show while route loads */}
        <Suspense
          fallback={
            <div style={{ color: 'white', padding: '2rem', textAlign: 'center', fontSize: '1.5rem' }}>
              Loading SportsTech Explorer...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fantasy" element={<Cricket3 />} />
<<<<<<< HEAD
            
            <Route path="/rental" element={<Rental />} /> {/* New route for Rental component */}
            {/* The Books route will be handled within HomePage.js now */}
=======
>>>>>>> a270c23625903cc97df5a0528e5475350f7c492a
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> a270c23625903cc97df5a0528e5475350f7c492a
