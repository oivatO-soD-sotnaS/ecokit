import React from 'react';

const EmpathyMap: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Mapa de Empatia do Cliente</h2>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className='text-gray-700'>
            Para compreender melhor quem compraria o EcoKit Escolar, vamos nos colocar no lugar do nosso cliente principal: pais e responsáveis conscientes. O mapa de empatia nos ajuda a visualizar as necessidades, sentimentos e motivações desses clientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              O que pensam e sentem?
            </h3>
            <p className="text-gray-700">
              Sentem uma preocupação crescente com o futuro do planeta e o legado que deixarão para seus filhos. Desejam oferecer o melhor para a educação deles, o que inclui não apenas bons materiais, mas também bons valores, como o respeito ao meio ambiente.
            </p>
            <p className="text-gray-700 mt-3">
              Podem sentir-se um pouco culpados pelo consumismo geral e buscam ativamente formas de fazer escolhas mais responsáveis no dia a dia. Encontrar um produto como o EcoKit pode gerar satisfação e um sentimento de dever cumprido, mas também podem sentir-se confusos ou céticos diante de tantas opções que se dizem "verdes".
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              O que veem?
            </h3>
            <p className="text-gray-700">
              São bombardeados por notícias sobre mudanças climáticas, poluição plástica nos oceanos e desmatamento. Veem propagandas de diversos produtos sustentáveis, mas nem sempre confiam na veracidade das informações.
            </p>
            <p className="text-gray-700 mt-3">
              Observam as escolhas de outros pais, os materiais que os colegas dos filhos usam e recebem comunicados da escola, que às vezes mencionam projetos de sustentabilidade. Veem também o interesse (ou desinteresse) dos próprios filhos por questões ambientais e por materiais escolares diferentes.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              O que falam e fazem?
            </h3>
            <p className="text-gray-700">
              Costumam pesquisar online por opções de material escolar sustentável antes do início das aulas. Conversam com amigos, familiares ou em grupos de pais sobre dicas de consumo consciente e educação ambiental.
            </p>
            <p className="text-gray-700 mt-3">
              Tentam implementar práticas sustentáveis em casa, como separar o lixo, economizar água e energia. Procuram produtos que sejam não apenas ecológicos, mas também práticos, duráveis e seguros para as crianças. Comparam preços e leem avaliações antes de tomar uma decisão de compra.
            </p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              O que ouvem?
            </h3>
            <p className="text-gray-700">
              Ouvem recomendações de outros pais sobre marcas e produtos, mensagens da escola sobre listas de material ou projetos pedagógicos. Ouvem os próprios filhos pedindo materiais específicos, muitas vezes influenciados por colegas ou personagens.
            </p>
            <p className="text-gray-700 mt-3">
              Escutam notícias sobre novas leis ambientais ou iniciativas de sustentabilidade de empresas e governos. Ouvem também especialistas falando sobre os impactos do consumo e a importância de escolhas conscientes.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
              Dores
            </h3>
            <p className="text-gray-700">
              Uma dor comum é a dificuldade em encontrar materiais escolares que sejam genuinamente sustentáveis, de boa qualidade e com um preço acessível. Falta tempo para pesquisar a fundo todas as opções disponíveis.
            </p>
            <p className="text-gray-700 mt-3">
              Há o receio de cair no "greenwashing", ou seja, comprar um produto que parece ecológico, mas não é. Preocupam-se com a durabilidade dos materiais, pois as crianças podem ser descuidadas. O custo adicional que produtos sustentáveis às vezes representam também é uma dor, especialmente para famílias com orçamento limitado.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ganhos Esperados
            </h3>
            <p className="text-gray-700">
              Eles buscam a tranquilidade de saber que fizeram uma escolha responsável e alinhada aos seus valores. A conveniência de encontrar um kit completo, com itens selecionados e sustentáveis, é um grande ganho.
            </p>
            <p className="text-gray-700 mt-3">
              Querem sentir que estão contribuindo ativamente para a educação ambiental dos filhos, não apenas com palavras, mas com exemplos práticos. Esperam produtos de boa qualidade, que durem o ano letivo. Sentir-se parte de uma comunidade que se preocupa com o futuro e ver o impacto positivo de suas escolhas, mesmo que pequeno, são ganhos importantes para esses clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpathyMap;
