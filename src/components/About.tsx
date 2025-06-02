import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Sobre o Projeto EcoKit Escolar</h2>
        
        <div className="prose prose-lg max-w-none">
            <p className="mb-4 text-gray-700">
            O projeto EcoKit Escolar nasce da crescente preocupação com o meio ambiente e da necessidade de introduzir práticas sustentáveis desde cedo na vida dos estudantes. A ideia central é oferecer uma alternativa consciente e prática aos materiais escolares tradicionais, que muitas vezes contribuem para o acúmulo de lixo e o consumo de recursos não renováveis.
            </p>
          
          <p className="mb-4 text-gray-700">
            Observamos que, embora exista uma maior conscientização sobre sustentabilidade, ainda há uma lacuna no mercado por opções acessíveis e completas de material escolar verdadeiramente ecológico.
          </p>
          
          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Nossa Proposta</h3>
          
          <p className="mb-4 text-gray-700">
            A nossa proposta é a criação e comercialização de kits escolares compostos inteiramente por materiais reciclados, sustentáveis ou de baixo impacto ambiental. Imagine um kit contendo cadernos feitos de papel reciclado, lápis que, após o uso, podem ser plantados e se transformar em uma pequena horta ou flor (lápis semente), e canudos reutilizáveis para substituir os descartáveis nos lanches escolares.
          </p>
          
          <p className="mb-4 text-gray-700">
            Esses são apenas exemplos iniciais, pois o EcoKit pode evoluir para incluir réguas de bambu, borrachas naturais, apontadores de metal durável, entre outros itens selecionados com cuidado.
          </p>
          
          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Mais que Produtos, uma Ferramenta Educacional</h3>
          
          <p className="mb-4 text-gray-700">
            O EcoKit Escolar não é apenas um conjunto de produtos, mas uma ferramenta de educação ambiental. Ao utilizar esses materiais, os alunos têm um contato diário e prático com o conceito de sustentabilidade, aprendendo sobre a importância da reciclagem, do reuso e do consumo consciente.
          </p>
          
          <p className="mb-4 text-gray-700">
            Para os pais e responsáveis preocupados com o futuro e a formação de valores em seus filhos, o kit representa uma escolha alinhada aos seus princípios. Para as escolas, é uma oportunidade de reforçar seu compromisso com a educação ambiental e a responsabilidade social, integrando a sustentabilidade ao cotidiano escolar.
          </p>
          
          <p className="mb-4 text-gray-700">
            Buscamos oferecer uma solução completa, conveniente e com forte apelo educativo, diferenciando-nos pela curadoria dos materiais, pela possibilidade de incluir itens inovadores como o lápis plantável e os canudos reutilizáveis, e por uma comunicação que engaje alunos, pais e escolas na causa ambiental. Acreditamos que o EcoKit Escolar pode contribuir para um futuro mais sustentável, começando pela sala de aula.
          </p>
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Missão</h3>
            <p className="text-gray-700">Promover a sustentabilidade no ambiente escolar através de produtos ecológicos que educam e inspiram.</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Visão</h3>
            <p className="text-gray-700">Ser referência em materiais escolares sustentáveis, contribuindo para a formação de uma geração mais consciente.</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Valores</h3>
            <p className="text-gray-700">Sustentabilidade, educação, inovação, transparência e responsabilidade social.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
