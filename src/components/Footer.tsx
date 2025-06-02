import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">EcoKit Escolar</h3>
            <p className="text-green-100">
              Materiais escolares sustentáveis para um futuro melhor. Cadernos reciclados, lápis plantáveis e canudos reutilizáveis.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-green-100 mb-2">
              <span className="font-medium">Email:</span> otavio@unix.com.br
            </p>
            <p className="text-green-100 mb-2">
              <span className="font-medium">Telefone:</span> (45) 9 9127-7655 
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-green-100 mb-2">
              <span className="font-medium">Email:</span> otavio@unix.com.br
            </p>
            <p className="text-green-100 mb-2">
              <span className="font-medium">Telefone:</span> (45) 9 9127-7655 
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-green-700 text-center">
          <p className="text-green-100">
            &copy; {new Date().getFullYear()} EcoKit Escolar.
          </p>
          <p className="text-green-200 text-sm mt-2">
            Projeto desenvolvido para trabalho escolar de empreendedorismo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
