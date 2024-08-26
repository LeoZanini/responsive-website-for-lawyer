'use client';
import { HeaderComponent } from '@/components/header';
import { LawIcon } from '@/components/icons/law-icon';
import { cards } from '@/components/ui/cards';
import { LayoutGrid } from '@/components/ui/layout-grid';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function FadeInSection({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px'
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'} ${
        inView ? 'translate-x-0' : 'translate-x-10'
      }`}>
      {children}
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [isScrolledPastGrid, setIsScrolledPastGrid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const gridElement = document.getElementById('main-image');
      if (gridElement) {
        const gridBottom = gridElement.getBoundingClientRect().bottom;
        if (gridBottom < 0) {
          setIsScrolledPastGrid(true);
        } else {
          setIsScrolledPastGrid(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(sectionId);
    }
  };

  const services = [
    {
      title: 'Direito do Trabalho',
      description:
        'Assessoria especializada em questões trabalhistas, defendendo os direitos dos trabalhadores e orientando empregadores.',
      image: '/direito-trabalho.jpg'
    },
    {
      title: 'Direito Previdenciário',
      description:
        'Orientação e representação em questões relacionadas à Previdência Social, incluindo aposentadorias, pensões e benefícios.',
      image: '/direito-previdenciario.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-primary-background text-primary-text overflow-x-hidden">
      <Head>
        <title>Maria Eduarda Risso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent
        isScrolledPastGrid={isScrolledPastGrid}
        activeTab={activeTab}
        handleNavClick={handleNavClick}
      />
      <div id="home" className="relative overflow-hidden w-screen h-screen">
        <div className="absolute inset-0 bg-black opacity-60 backdrop-blur-sm"></div>
        <Image
          id="main-image"
          alt="home page image"
          src="/imagem-exemplo5.jpg"
          width={1720}
          height={200}
          className="object-cover w-full h-full z-0"
        />
      </div>

      <main className="container mx-auto px-4 py-40">
        <FadeInSection>
          <section className="mb-20">
            <h2 className="text-3xl font-cmtiempo font-bold mb-8 text-accent text-end">
              Bem-vindo ao nosso Escritório
            </h2>
            <p className="text-primary-text leading-relaxed font-din-next text-end">
              Oferecemos serviços jurídicos de alta qualidade, focados em Direito do Trabalho e
              Direito Previdenciário. Nossa missão é garantir que seus direitos sejam protegidos e
              que você receba a orientação jurídica necessária.
            </p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="services" className="mb-20">
            <h2 className="text-3xl font-cmtiempo font-bold mb-8 text-accent text-center">
              Nossos Serviços
            </h2>
            <div className="space-y-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 flex items-center transition-transform duration-300 hover:scale-102">
                  <div className="flex-shrink-0 mr-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={200}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-cmtiempo font-semibold text-accent">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-secondary-text font-din-next">{service.description}</p>
                    <button className="mt-4 bg-accent hover:bg-opacity-80 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 font-din-next">
                      Saiba Mais
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="about" className="mb-20">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-cmtiempo font-bold mb-6 text-accent">Sobre Nós</h2>
              <p className="text-secondary-text leading-relaxed font-din-next">
                O Escritório de Advocacia Jane Smith tem se dedicado a fornecer serviços jurídicos
                especializados por mais de 20 anos. Nossa equipe de advogados experientes está
                comprometida em ajudar nossos clientes a navegar por questões jurídicas complexas
                com confiança e elegância. Nos orgulhamos de nossa atenção aos detalhes, abordagem
                personalizada e compromisso em alcançar os melhores resultados possíveis para nossos
                clientes.
              </p>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="contact" className="mb-20">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-cmtiempo font-bold mb-6 text-accent">
                Entre em Contato
              </h2>
              <p className="text-secondary-text mb-4 font-din-next">
                Ficaremos felizes em atendê-lo. Entre em contato para uma consulta:
              </p>
              <div className="space-y-2 text-primary-text font-din-next">
                <p>Telefone: (11) 5555-1234</p>
                <p>Email: contato@janesmith.adv.br</p>
                <p>Endereço: Av. Paulista, 1000, São Paulo - SP, 01310-100</p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="profile" className="mb-20">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-cmtiempo font-bold mb-6 text-accent">
                Perfil da Advogada
              </h2>
              <div className="flex items-center">
                <Image
                  src="/jane-smith.jpg"
                  alt="Jane Smith"
                  width={200}
                  height={200}
                  className="rounded-full mr-8"
                />
                <div>
                  <h3 className="text-2xl font-cmtiempo font-semibold text-accent mb-4">
                    Dra. Jane Smith
                  </h3>
                  <p className="text-secondary-text leading-relaxed font-din-next">
                    A Dra. Jane Smith é especialista em Direito do Trabalho e Direito
                    Previdenciário, com mais de 20 anos de experiência. Formada pela Universidade de
                    São Paulo, possui mestrado em Direito do Trabalho e é membro ativo da OAB-SP.
                    Sua paixão é defender os direitos dos trabalhadores e garantir que seus clientes
                    recebam o devido suporte em questões previdenciárias. Ao longo de sua carreira,
                    a Dra. Jane já atendeu mais de 1000 casos com sucesso, sempre priorizando a
                    ética e a excelência em seu trabalho.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>

      <footer className="bg-accent text-white py-6">
        <div className="container mx-auto px-4 text-center font-din-next">
          <p>&copy; 2024 Escritório de Advocacia Jane Smith. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
