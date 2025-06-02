import React from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre o Projeto' },
    { id: 'market', label: 'Análise de Mercado' },
    { id: 'customers', label: 'Segmentação' },
    { id: 'empathy', label: 'Mapa de Empatia' },
  ];

  return (
    <header className="bg-green-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">EcoKit Escolar</h1>
        </div>
        <nav className="flex flex-wrap justify-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-3 py-2 mx-1 rounded-md text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-white text-green-600'
                  : 'text-white hover:bg-green-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
