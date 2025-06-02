import React from 'react';

const CustomerSegmentation: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Segmentação de Clientes</h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="mb-4 text-gray-700">
            Para direcionar as estratégias da EcoKit Escolar, é fundamental compreender os diferentes grupos de clientes que podem se interessar por kits de material escolar sustentável. A segmentação permite adaptar a comunicação, os produtos e os canais de venda para atender às necessidades específicas de cada público.
          </p>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-green-600 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-700">Pais e Responsáveis</h3>
            </div>
            <p className="text-gray-700">
              Um segmento primário crucial é composto por pais e responsáveis por alunos, principalmente aqueles com consciência ambiental elevada ou em formação. Este grupo busca produtos que, além de cumprirem sua função educacional, estejam alinhados com valores de sustentabilidade e cuidado com o planeta.
            </p>
            <p className="text-gray-700 mt-3">
              Eles são motivados pela preocupação com o futuro dos filhos, pelo desejo de consumir de forma mais responsável e pela busca por materiais menos tóxicos e mais naturais. A praticidade de adquirir um kit completo e a percepção de que estão contribuindo para a educação ambiental dos filhos também são fatores importantes.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-green-600 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-700">Escolas</h3>
            </div>
            <p className="text-gray-700">
              Outro segmento de grande potencial são as escolas, especialmente as da rede particular, que buscam se diferenciar através de projetos pedagógicos inovadores e práticas sustentáveis. Escolas com foco em educação ambiental ou que desejam fortalecer sua imagem como instituições responsáveis podem adotar os EcoKits.
            </p>
            <p className="text-gray-700 mt-3">
              Para este segmento, é importante destacar como o EcoKit se integra ao projeto pedagógico, reforça os valores da escola e contribui para a formação de cidadãos conscientes. Parcerias podem ser estabelecidas para oferecer condições especiais ou desenvolver kits personalizados.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-green-600 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-700">Alunos</h3>
            </div>
            <p className="text-gray-700">
              Embora não sejam os compradores diretos na maioria dos casos, os próprios alunos, especialmente os mais velhos (ensino fundamental II e médio), representam um segmento de influência importante. Eles são cada vez mais expostos a informações sobre questões ambientais e podem ser atraídos por produtos com design inovador e propósito claro.
            </p>
            <p className="text-gray-700 mt-3">
              O apelo visual, a conexão com causas ambientais e a influência de colegas podem motivar os alunos a pedirem ou escolherem produtos sustentáveis, influenciando a decisão de compra dos pais.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-green-600 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-700">ONGs e Projetos Socioeducativos</h3>
            </div>
            <p className="text-gray-700">
              Organizações não governamentais (ONGs) e projetos socioeducativos que trabalham com educação ambiental ou apoio a estudantes podem ser considerados um segmento secundário ou parceiro. Eles podem adquirir os kits para uso em suas atividades ou buscar parcerias para distribuição em comunidades específicas.
            </p>
            <p className="text-gray-700 mt-3">
              Estas parcerias podem ampliar o alcance e o impacto social da EcoKit Escolar, contribuindo para a missão de promover a sustentabilidade no ambiente educacional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSegmentation;
