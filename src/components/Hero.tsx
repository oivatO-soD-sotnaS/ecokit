import React, { FC, SetStateAction } from 'react'

interface HeroProps {
  setActiveSection: React.Dispatch<SetStateAction<string>>
}

const Hero: FC<HeroProps> = ({ setActiveSection }) => {
  return (
    <div className="relative">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              EcoKit Escolar
            </h1>
            <p className="text-xl md:text-2xl text-green-700 mb-6">
              Materiais escolares sustentáveis para um futuro melhor
            </p>
            <p className="text-gray-700 mb-8">
              Kits com material reciclado ou sustentável para alunos: cadernos reciclados, 
              lápis plantáveis e canudos reutilizáveis. Educação com consciência ambiental.
            </p>
            <button 
              onClick={() => setActiveSection('about')}
              className="cursor-pointer bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Conheça nosso projeto
            </button>
          </div>
          <div className="hidden md:block">
            <div className="bg-white p-6 rounded-lg shadow-xl transform rotate-3 relative">
              <div className="bg-green-50 p-4 rounded-md mb-4">
                <h3 className="text-green-800 font-semibold mb-2">Cadernos Reciclados</h3>
                <p className="text-gray-600">Feitos com papel 100% reciclado e capa resistente</p>
              </div>
              <div className="bg-green-50 p-4 rounded-md mb-4">
                <h3 className="text-green-800 font-semibold mb-2">Lápis Plantáveis</h3>
                <p className="text-gray-600">Quando acabam, podem ser plantados e virar flores ou ervas</p>
              </div>
              <div className="bg-green-50 p-4 rounded-md">
                <h3 className="text-green-800 font-semibold mb-2">Canudos Reutilizáveis</h3>
                <p className="text-gray-600">Substitutos duráveis para os canudos plásticos descartáveis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
