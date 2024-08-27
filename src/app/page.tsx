'use client';
import { HeaderComponent } from '@/components/header';
import { LawIcon } from '@/components/icons/law-icon';
import { cards } from '@/components/ui/cards';
import { FlipWords } from '@/components/ui/flip-words';
import { LayoutGrid } from '@/components/ui/layout-grid';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { lancelot, lateef } from './layout';

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
  const [activeTab, setActiveTab] = useState('ínicio');
  const [isScrolledPastGrid, setIsScrolledPastGrid] = useState(false);
  const words = ['Qualidade', 'Procedêncida', 'Confiança', 'Excelência'];

  useEffect(() => {
    const handleScroll = () => {
      const gridElement = document.getElementById('ínicio');
      if (gridElement) {
        const gridBottom = gridElement.getBoundingClientRect().bottom;
        gridBottom < 0 ? setIsScrolledPastGrid(true) : setIsScrolledPastGrid(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    console.log(`Navigating to section: ${sectionId}`); // Adicione esta linha para depuração
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
      image: '/imagem-exemplo6.jpg'
    },
    {
      title: 'Direito Previdenciário',
      description:
        'Orientação e representação em questões relacionadas à Previdência Social, incluindo aposentadorias, pensões e benefícios.',
      image: '/imagem-exemplo.jpg'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-primary-background text-primary-text overflow-x-hidden font-static">
      <Head>
        <title>Maria Eduarda Risso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent
        isScrolledPastGrid={isScrolledPastGrid}
        activeTab={activeTab}
        handleNavClick={handleNavClick}
      />
      <div className="absolute w-full">
        <Image
          id="main-image"
          alt="home page image"
          src="/imagem-exemplo4.jpg"
          width={1720}
          height={200}
          className="object-cover object-left-top z-0"
        />
      </div>

      <main className="mx-auto px-4">
        <FadeInSection>
          <section
            className="flex place-content-end justify-end h-screen w-full px-20 py-80"
            id="ínicio">
            <h2 className="text-6xl text-end font-bold mb-8 text-accent pr-24 w-[60%] p-4 leading-none">
              Um Serviço Jurídico de
              <FlipWords className="text-end " words={words} />
              <h3 className="mr-8 text-end"></h3>
            </h2>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="flex flex-col place-content-end justify-end h-screen w-1/2">
            <h2 className="text-5xl font-bold mb-8 text-accent text-end bg-[rgba(0,0,0,0.2)] px-4 pt-4">
              Bem-vindo ao nosso Escritório
            </h2>
            <p className="text-primary-text leading-8 text-end mt-2">
              Oferecemos serviços jurídicos de alta qualidade, focados em Direito do Trabalho e
              Direito Previdenciário. Nossa missão é garantir que seus direitos sejam protegidos e
              que você receba a orientação jurídica necessária.
            </p>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="serviços" className="mt-60 mb-60 w-full flex flex-col">
            <h2 className="text-5xl font-bold mb-8 text-accent text-end mr-20">Nossos Serviços</h2>
            <div className="space-y-8 flex flex-col place-items-end ">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-[rgba(255,255,255,0.9)] shadow-xl border border-accent p-6 flex items-start">
                  <div className="mr-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={200}
                      height={200}
                      className=""
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-accent text-start">{service.title}</h3>
                    <p className="mt-3 text-secondary-text">{service.description}</p>
                    <button className="mt-4 bg-accent hover:bg-opacity-80 text-white font-semibold py-2 px-4 transition-colors duration-300 font-din-next">
                      Saiba Mais
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="sobre" className="mb-60">
            <div className="bg-[rgba(255,255,255,0.9)] shadow-xl border border-accent p-8">
              <h2 className="text-3xl font-bold mb-6 text-accent">Sobre Nós</h2>
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
          <section id="contato" className="mb-60">
            <div className="bg-[rgba(255,255,255,0.9)] shadow-xl border border-accent p-8">
              <h2 className="text-3xl font-bold mb-6 text-accent">Entre em Contato</h2>
              <p className="text-secondary-text mb-4 font-din-next">
                Ficaremos felizes em atendê-lo. Entre em contato para uma consulta:
              </p>
              <div className="space-y-2 text-black">
                <p>Telefone: (11) 5555-1234</p>
                <p>Email: contato@janesmith.adv.br</p>
                <p>Endereço: Av. Paulista, 1000, São Paulo - SP, 01310-100</p>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="profile" className="mb-60">
            <div className="bg-[rgba(255,255,255,0.9)] shadow-xl border border-accent p-8">
              <div className="flex items-center">
                <Image
                  src="/maria.jpeg"
                  alt="Jane Smith"
                  width={200}
                  height={200}
                  className="rounded-full mr-8"
                />
                <div>
                  <h2 className={`text-5xl font-bold mb-6 text-accent ${lateef.className}`}>
                    Maria Eduarda Risso
                  </h2>
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

      <footer className="bg-[rgb(49,21,8)] text-gray-300 py-4">
        <div className="container mx-auto px-4 text-center font-din-next">
          <p>
            &copy; 2024 Escritório de Advocacia Maria Eduarda Risso. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
