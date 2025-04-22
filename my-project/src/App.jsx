import { useState, useEffect } from 'react';
import SBDLogo from './assets/SBDLogo.svg';
import DMJLogo from './assets/DMJLogo.svg';
import OSLogo from './assets/OSLogo.svg';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
        {/* Logo di Kiri */}
        <div className="flex items-center">
          <img src={SBDLogo} alt="Main Logo" className="h-8" />
        </div>

        {/* Tombol di Kanan */}
        <div className="flex items-center gap-4">
          {/* 5 Tombol Navigasi */}
          {['Home', 'SBD', 'DMJ', 'OS', 'NETLAB'].map((buttonText) => (
            <button
              key={buttonText}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {buttonText !== 'Home' && (
                <img
                  src={
                    buttonText === 'SBD' ? SBDLogo :
                    buttonText === 'DMJ' ? DMJLogo :
                    buttonText === 'OS' ? OSLogo :
                    '/Logo.svg'
                  }
                  alt={`${buttonText} Logo`}
                  className="h-6"
                />
              )}
              <span className="text-gray-800 dark:text-gray-200">{buttonText}</span>
            </button>
          ))}

          {/* Toggle Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-600 p-1 relative transition-colors"
          >
            <div
              className={`w-6 h-6 rounded-full bg-white dark:bg-gray-300 transform transition-transform ${
                darkMode ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Konten Utama */}
      <main className="pt-24 px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Selamat Datang di Website Kami
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Ini adalah tampilan utama website dengan mode {darkMode ? 'gelap' : 'terang'}
        </p>
      </main>
    </div>
  );
}

export default App;