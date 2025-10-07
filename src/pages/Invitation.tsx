import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Invitation: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <h1 className="section-title mb-3">Convite</h1>
        <p className="text-center text-silver-600 mb-8 max-w-3xl mx-auto">
          Herica e Luis têm o prazer de convidá-lo para celebrar a renovação de seus votos matrimoniais.
        </p>
        
        {/* Invitation Card */}
<div className="max-w-5xl mx-auto mb-16 overflow-hidden rounded-xl shadow-2xl border border-silver-200">
  {/* --- Imagem principal de fundo --- */}
  <div
    className="relative h-80 bg-cover bg-center"
    style={{ backgroundImage: "url(/casal.jpg)" }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
      <div className="text-white p-6">
        <h2 className="text-4xl font-script">Bodas de Prata</h2>
        <p className="text-silver-200">Cerimônia de Renovação de Votos</p>
      </div>
    </div>
  </div>

  {/* --- Conteúdo interno --- */}
  <div className="bg-white p-8">
    <div className="text-center mb-8">
      <div
        className="w-24 h-24 mx-auto mb-4 rounded-full border-3 border-primary-200 bg-cover bg-center shadow-lg"
        style={{ backgroundImage: "url(/casamento3.jpg)" }}
      ></div>

      <h3 className="text-3xl font-script mb-2 text-primary-600">Herica & Luis</h3>
      <p className="text-silver-600">Convidam você para celebrar 25 anos de casamento</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="flex items-start">
        <Calendar className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
        <div>
          <h4 className="font-medium mb-1">Data</h4>
          <p className="text-silver-600">15 de Dezembro, 2025</p>
        </div>
      </div>

      <div className="flex items-start">
        <Clock className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
        <div>
          <h4 className="font-medium mb-1">Horário</h4>
          <p className="text-silver-600">19:00 - Cerimônia</p>
          <p className="text-silver-600">20:30 - Recepção</p>
        </div>
      </div>

      <div className="flex items-start">
        <MapPin className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
        <div>
          <h4 className="font-medium mb-1">Local</h4>
          <p className="text-silver-600">Espaço Zarifi</p>
          <a
            href="https://g.co/kgs/CoKKWFA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:underline text-sm"
          >
            Ver no mapa
          </a>
        </div>
      </div>

      <div className="flex items-start">
        <Users className="text-primary-500 mr-3 mt-1 flex-shrink-0" size={20} />
        <div>
          <h4 className="font-medium mb-1">Traje</h4>
          <p className="text-silver-600">Esporte Fino</p>
        </div>
      </div>
    </div>

    <p className="text-center text-silver-700 italic mb-4">
      "Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe".
    </p>
    <p className="text-center text-silver-500 text-sm">- Mateus 19:6</p>
  </div>
</div>
        
        {/* Couple Photos Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="section-subtitle text-center mb-8">Nossos Momentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-xl shadow-lg hover-lift">
              <img 
                src="/penedo2.jpg" 
                alt="Herica e Luis - Momento 1" 
                className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-script text-xl mb-1">Amor Verdadeiro</h3>
                <p className="text-silver-200 text-sm">Uma história de amor</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg hover-lift">
              <img 
                src="/nogueira2.jpg" 
                alt="Herica e Luis - Momento 2" 
                className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-script text-xl mb-1">Jornada Juntos</h3>
                <p className="text-silver-200 text-sm">25 anos de companheirismo</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg hover-lift">
              <img 
                src="/fosorio.jpg" 
                alt="Herica e Luis - Momento 3" 
                className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-script text-xl mb-1">Celebração</h3>
                <p className="text-silver-200 text-sm">Renovando os votos</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Details Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="section-subtitle mb-4">Sobre a Cerimônia</h2>
            <p className="text-silver-700 leading-relaxed mb-4">
Há 25 anos, diante de Deus e das pessoas que amamos, dissemos “sim” ao amor, à parceria e à fé.
Hoje, renovamos essas promessas com o coração cheio de gratidão pelas bênçãos que recebemos ao longo dessa caminhada.
Foram anos de alegrias, desafios, aprendizados e muitos motivos para sorrir.
Cada dia vivido juntos foi prova do cuidado de Deus, que sempre guiou nossos passos e fortaleceu nosso laço.
            </p>
            <p className="text-silver-700 leading-relaxed">
    

Nesta celebração, queremos honrar o amor que resistiu ao tempo, o lar que construímos com fé e os laços que nos unem à família e aos amigos.
Mais do que uma renovação de votos, será um momento de adoração, gratidão e esperança — pois sabemos que tudo o que vivemos e ainda viveremos vem das mãos de Deus.
            </p>
          </div>
          
          <div>
            <h2 className="section-subtitle mb-4">Informações Adicionais</h2>
            <p className="text-silver-700 leading-relaxed mb-4">
              Há 25 anos, Herica e Luis uniram suas vidas em matrimônio, iniciando uma jornada de amor, respeito e companheirismo. Agora, celebramos suas Bodas de Prata com uma cerimônia especial de renovação de votos.
            </p>
            <p className="text-silver-700 leading-relaxed">
              Este momento simboliza não apenas o tempo que passou, mas também o amor que cresceu e se fortaleceu ao longo dos anos. Convidamos você a fazer parte desta celebração especial.
              Com imensa alegria, convidamos você para celebrar conosco um momento inesquecível: nossas Bodas, marcando mais um capítulo da nossa história de amor e cumplicidade.
📅 Data: 15 de dezembro de 2025
📍 Local: Espaço Zarifi
👔 Traje: Esporte fino


Sua presença tornará este dia ainda mais especial. Venha compartilhar conosco essa noite de alegria, amor e gratidão!
Esperamos por você para brindar juntos a essa linda jornada que continua.
            </p>
          </div>
        </div>
        
        {/* RSVP Section */}
        <div className="max-w-2xl mx-auto">
          <h2 className="section-subtitle text-center mb-6">Confirme Sua Presença</h2>
          <p className="text-center text-silver-600 mb-8">
            Por favor, confirme sua presença até 01/12/2025 para que possamos organizar tudo da melhor forma.
          </p>
          
          <div className="text-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdJXw77GtTy9ejUhag8Xi0IDRAn7v1sni_SfBy9aCkHPFUTJA/viewform?usp=sharing&ouid=117097185544898960308"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex items-center px-8 py-3 text-lg"
            >
              Confirmar Presença
            </a>
            <p className="text-sm text-silver-500 mt-4">
              Você será redirecionado para um formulário do Google Forms
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitation;