import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Gift, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="grid grid-cols-3 h-full">
  <div
    className="bg-cover bg-center opacity-20"
    style={{ backgroundImage: "url(/namoro1.jpg)" }}
  ></div>
  <div
    className="bg-cover bg-center"
    style={{ backgroundImage: "url(/casamento.jpg)" }}
  ></div>
  <div
    className="bg-cover bg-center opacity-20"
    style={{ backgroundImage: "url(/casal2.jpg)" }}
  ></div>
</div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-script font-medium mb-4 animate-slide-up text-shadow-lg">
            Herica & Luis
          </h1>
          <p className="text-xl md:text-3xl mb-8 animate-slide-up font-light" style={{animationDelay: '0.2s'}}>
            25 Anos de Amor e União
          </p>
          <p className="text-lg md:text-xl mb-8 animate-slide-up font-light opacity-90" style={{animationDelay: '0.3s'}}>
            15 de Dezembro, 2025 • Espaço Zarifi
          </p>
          <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Link to="/presentear" className="btn btn-primary mx-2 text-lg px-8 py-3">
              Presentear os Noivos
            </Link>
            <Link to="/convite" className="btn bg-white text-primary-500 hover:bg-silver-100 mx-2 mt-4 sm:mt-0 text-lg px-8 py-3">
              Ver Convite
            </Link>
          </div>
        </div>
      </section>
      
      {/* Countdown & Info Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-silver-200 rounded-lg shadow-sm">
              <Calendar className="mx-auto text-primary-500 mb-3" size={36} />
              <h3 className="text-xl font-serif mb-2">Data da Celebração</h3>
              <p className="text-silver-600">15 de Dezembro, 2025</p>
              <p className="text-silver-600">19:00 horas</p>
            </div>
            
            <div className="text-center p-6 border border-silver-200 rounded-lg shadow-sm">
              <MapPin className="mx-auto text-primary-500 mb-3" size={36} />
              <h3 className="text-xl font-serif mb-2">Local</h3>
              <p className="text-silver-600">Espaço Zarifi</p>
              <a 
                href="https://g.co/kgs/CoKKWFA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:underline inline-flex items-center mt-1"
              >
                Ver no mapa
              </a>
            </div>
            
            <div className="text-center p-6 border border-silver-200 rounded-lg shadow-sm">
              <Gift className="mx-auto text-primary-500 mb-3" size={36} />
              <h3 className="text-xl font-serif mb-2">Lista de Presentes</h3>
              <p className="text-silver-600">Escolha entre diversas opções de valores</p>
              <Link to="/presentear" className="text-primary-500 hover:underline mt-1 inline-block">
                Ver lista
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-silver-100">
        <div className="container-custom">
          <h2 className="section-title mb-12">Nossa História de Amor</h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src="/casamentocopia.jpg" 
                alt="Herica e Luis" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-serif mb-4">25 Anos de União</h3>
              <p className="mb-4 text-silver-700 leading-relaxed">
                Tudo começou numa tarde de 19 de novembro. Hérica saía da faculdade, já no finzinho do curso, e Luis vinha da solenidade do Dia da Bandeira. O encontro foi no metrô, e durante toda a viagem, os olhares se cruzavam pelo reflexo no vidro. Para surpresa dos dois, eles desceram na mesmíssima estação!

Ele, super tímido, usou a cantada mais clássica que existe: "Eu não te conheço de algum lugar?". E não é que deu certo? Foram caminhando até a casa dela, e na hora de trocar contatos, ela, muito esperta, preferiu pegar o número dele! Ele contou que era bombeiro e que só vinha para casa nos fins de semana. Combinaram de se falar no sábado.

Hérica guardou o número na bolsa da faculdade, mas o destino resolveu testá-los. Naquela mesma semana, ela foi assaltada e levaram a bolsa... com o telefone dentro! E agora? Como ela iria achá-lo?

A solução foi pedir ajuda à sua vizinha e amiga, Ciomar, e procurar na antiga "Páginas Amarelas". Enquanto isso, Luis, sem entender por que ela não ligava, refazia o caminho todos os dias na esperança de encontrá-la.

Depois de 17 dias de angústia, Ciomar conseguiu o impossível: encontrou Luis! Ufa! Ela explicou tudo, e ele foi correndo ao encontro de sua amada. O reencontro foi comemorado com um sorvete na "Sem Nome" (quem é dos anos 90 sabe!). Depois de horas de conversa, finalmente começaram a namorar.
              </p>
              <p className="mb-6 text-silver-700 leading-relaxed">


Foram quatro anos de muito conhecimento e preparação, que culminaram em um lindo "sim" no dia 16 de dezembro de 2000. E claro, Ciomar foi a madrinha! Prova de que Deus sempre envia seus anjos.

A vida de casados começou de forma simples, mas com muito amor, respeito e cumplicidade. Compraram o primeiro apartamento (ou "apertamento", como brincavam), que ficou ainda menor quando chegou a maior felicidade de suas vidas: a filha Ana Luísa, "A graciosa combatente gloriosa", que desde pequena já mostra a que veio, enchendo a vida deles de orgulho!

Juntos, eles passaram por muitas provas e perdas difíceis. Enfrentaram a maior pandemia da história na linha de frente, dispostos a ajudar o próximo, uma batalha que quase lhes custou a vida. Mas o Senhor tem planos para eles, e "Aquele que começou a boa obra é fiel para completar!".

Agora, eles estão chegando aos 25 anos de casados. Para celebrar essas Bodas de Prata, será uma honra ter vocês, compartilhando esse momento tão especial com eles!
              
              </p>
              <Link to="/convite" className="btn btn-outline">
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Photo Gallery Section */}
<section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title mb-12">Momentos Especiais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover-lift">
              <img 
                src="/casamento.jpg" 
                alt="Herica e Luis - Casamento" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-medium">Nosso Casamento</p>
                  <p className="text-sm opacity-80">2000</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover-lift">
              <img 
                src="/amor.jpg" 
                alt="Herica e Luis - Amor Atual" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-medium">Amor Eterno</p>
                  <p className="text-sm opacity-80">2024</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover-lift">
              <img 
                src="/casados para sempre.jpg" 
                alt="Herica e Luis - Casados para Sempre" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-medium">Casados para Sempre</p>
                  <p className="text-sm opacity-80">25 anos juntos</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover-lift">
              <img 
                src="/casamento2.jpg" 
                alt="Herica e Luis - Renovação de Votos" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-medium">Renovação de Votos</p>
                  <p className="text-sm opacity-80">2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* RSVP Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Confirme Sua Presença</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Sua presença é muito importante para nós neste momento tão especial. Confirme seu comparecimento até 01/12/2025.
          </p>
          <Link to="/convite" className="btn bg-white text-primary-500 hover:bg-silver-100">
            Confirmar Agora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;