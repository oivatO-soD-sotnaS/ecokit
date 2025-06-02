import React from 'react';

const MarketAnalysis: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Análise de Mercado</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Concorrentes Locais no Brasil</h3>
          <div className="prose prose-lg max-w-none">
            <p className="mb-4 text-gray-700">
              A análise do mercado brasileiro revela alguns atores importantes no segmento de materiais escolares com foco em sustentabilidade, que podem ser considerados concorrentes diretos ou indiretos para a EcoKit Escolar.
            </p>
            
            <p className="mb-4 text-gray-700">
              Um concorrente direto significativo é a <strong>Ecoplast Brasil</strong>. Com mais de duas décadas de atuação, a empresa se especializou na fabricação de kits escolares ecológicos, utilizando principalmente PET e PP reciclados. Eles possuem certificações ambientais, capacidade de personalização e atendem a grandes demandas, incluindo licitações públicas. Além disso, oferecem produtos voltados para a inclusão de alunos com necessidades especiais, demonstrando uma preocupação social alinhada à sustentabilidade.
            </p>
            
            <p className="mb-4 text-gray-700">
              Outra iniciativa relevante, embora com um foco diferente, é o <strong>Instituto Brasil Solidário (IBS)</strong>. Eles não vendem kits escolares diretamente como um produto comercial, mas desenvolvem e distribuem um "Kit Ambiental" com materiais pedagógicos sobre sustentabilidade, impressos em papel 100% reciclado. O foco do IBS é educacional e voltado para escolas públicas, promovendo práticas ambientais através de cadernos temáticos e guias de atividades.
            </p>
            
            <p className="mb-4 text-gray-700">
              Grandes marcas tradicionais de material escolar também estão incorporando a sustentabilidade em seus produtos. A <strong>Faber-Castell</strong>, por exemplo, possui a linha "EcoLápis", produzida com madeira 100% reflorestada e certificada. Embora não ofereçam um kit completo focado exclusivamente no ecológico, a presença de linhas sustentáveis de marcas consolidadas representa uma concorrência indireta.
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-green-700 mb-4">Competências e Oportunidades</h3>
          <div className="prose prose-lg max-w-none">
            <p className="mb-4 text-gray-700">
              Diante desse cenário, a startup EcoKit Escolar pode buscar se diferenciar e exceder os concorrentes existentes explorando alguns pontos chave:
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg shadow-md mb-6">
              <h4 className="text-xl font-semibold text-green-700 mb-2">Diversificação dos materiais sustentáveis</h4>
              <p className="text-gray-700">
                Enquanto a Ecoplast foca em PET e PP reciclados, a EcoKit Escolar incorpora outros materiais inovadores com forte apelo ecológico, como bambu, madeira certificada, bioplásticos e papel semente. O lápis plantável é um carro-chefe que comunica de forma lúdica e educativa o ciclo de vida do produto.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow-md mb-6">
              <h4 className="text-xl font-semibold text-green-700 mb-2">Foco no público e na comunicação</h4>
              <p className="text-gray-700">
                A EcoKit Escolar direciona seus esforços para o consumidor final (pais e alunos) e para parcerias diretas com escolas particulares, construindo uma marca com forte apelo educativo e engajador. Isso envolve a criação de conteúdo sobre sustentabilidade e oficinas em escolas.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow-md mb-6">
              <h4 className="text-xl font-semibold text-green-700 mb-2">Modelo de negócio com impacto social</h4>
              <p className="text-gray-700">
                A EcoKit Escolar explora um modelo com maior impacto social direto, direcionando uma porcentagem das vendas para projetos de reflorestamento ou educação ambiental em comunidades locais, criando uma conexão mais forte com consumidores que buscam propósito em suas compras.
              </p>
            </div>
            
            <p className="mb-4 text-gray-700">
              A simplicidade e o foco em um kit específico e bem definido também podem ser uma vantagem competitiva inicial, facilitando a gestão e a comunicação da marca, especialmente no contexto de um projeto escolar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;
