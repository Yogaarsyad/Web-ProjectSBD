import { useState, useEffect } from 'react';
import SBDLogo from './assets/SBDLogo.svg';
import DMJLogo from './assets/DMJLogo.svg';
import OSLogo from './assets/OSLogo.svg';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const renderContent = () => {
    switch(currentPage) {
      case 'SBD':
        return (
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img 
              src={SBDLogo}
              alt="SBD Logo" 
              className="h-40 w-40 animate-fade-in"
            />
            <p className="text-gray-600 dark:text-gray-300 text-justify">
              Mata kuliah ini mempelajari konsep dasar sistem basis data, termasuk desain skema, 
              model relasional, dan penggunaan SQL untuk manipulasi data. Mahasiswa juga diajarkan 
              teknik normalisasi, pengindeksan, serta pengelolaan transaksi dan keamanan data.
            </p>
          </div>
        );
      
      case 'DMJ':
        return (
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img 
              src={DMJLogo}
              alt="DMJ Logo" 
              className="h-40 w-40 animate-fade-in"
            />
            <p className="text-gray-600 dark:text-gray-300 text-justify">
              Mata kuliah ini membahas perancangan dan pengelolaan infrastruktur jaringan komputer, 
              termasuk topologi, protokol komunikasi, serta manajemen perangkat keras dan perangkat 
              lunak jaringan. Mahasiswa juga mempelajari teknik pemecahan masalah dan pengamanan jaringan.
            </p>
          </div>
        );
      
      case 'OS':
        return (
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img 
              src={OSLogo}
              alt="OS Logo" 
              className="h-40 w-40 animate-fade-in"
            />
            <p className="text-gray-600 dark:text-gray-300 text-justify">
              Mata kuliah ini mengkaji prinsip dasar sistem operasi, termasuk manajemen proses, 
              memori, file, dan perangkat keras. Mahasiswa juga mempelajari teknik penjadwalan, 
              sinkronisasi, serta keamanan dan pemeliharaan sistem operasi.
            </p>
          </div>
        );
      
      case 'NETLAB':
        return (
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img 
              src="/Logo.svg" 
              alt="NETLAB Logo" 
              className="h-40 w-40 animate-fade-in"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Network Laboratory</h2>
              <p className="text-gray-600 dark:text-gray-300 text-justify">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="text-center space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-300">
                Welcome to Informatics Learning Platform
              </h1>
              
              <div className="flex items-center justify-center space-x-4">
                <span className="h-px w-16 bg-gray-300 dark:bg-gray-600"></span>
                <span className="text-gray-500 dark:text-gray-400">Created by</span>
                <span className="h-px w-16 bg-gray-300 dark:bg-gray-600"></span>
              </div>
              
              <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-200">
                Tri Yoga Arsyad
              </h2>
            </div>

            <div className="mt-12 animate-slide-up">
              <div className="inline-block px-6 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-800">
                <span className="text-sm text-blue-600 dark:text-blue-300">
                  🚀 Coming Soon: Interactive Learning Features
                </span>
              </div>
              <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                I am working hard to bring you a new and better learning experience. Stay tuned for more exciting updates!
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 bg-[url('https://via.placeholder.com/1920x1080.png?text=Temporary+Background')] bg-cover bg-center">
      {/* Bagian Navbar yang diupdate */}
      <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={SBDLogo} alt="Main Logo" className="h-8" />
          <span className="ml-2 text-lg font-semibold dark:text-white">Network Laboratory</span>
        </div>

        <div className="flex items-center gap-4">
          {['Home', 'SBD', 'DMJ', 'OS', 'NETLAB'].map((buttonText) => (
            <button
              key={buttonText}
              onClick={() => setCurrentPage(buttonText)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                currentPage === buttonText 
                  ? 'bg-blue-500 text-white hover:bg-blue-600' 
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              } active:scale-95 transform hover:scale-105`}
            >
              <span className="text-gray-800 dark:text-gray-200">{buttonText}</span>
            </button>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-600 p-1 relative transition-all duration-300"
          >
            <div
              className={`w-6 h-6 rounded-full bg-white dark:bg-gray-300 transform transition-all duration-300 ${
                darkMode ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </nav>

      <main className="pt-24 px-8 container mx-auto">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;