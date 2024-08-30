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

function FadeInSection({ children }: { children: React.ReactNode }) {
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

  const handleNavClick = (sectionId: string) => {
    console.log(`Navigating to section: ${sectionId}`); // Adicione esta linha para depuração
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(sectionId);
    }
  };

  const services = [
    {
      title: 'Direito Previdenciário',
      description: (
        <ul className="list-disc list-inside w-[80%]">
          <li>Aposentadorias;</li>
          <li>Benefício por incapacidade permanente (antiga aposentadoria por invalidez);</li>
          <li>Benefício por incapacidade temporária (antigo auxílio-doença);</li>
          <li>Auxílio-Acidente;</li>
          <li>Pensão por Morte;</li>
          <li>Salário-Maternidade;</li>
          <li>Entre outros serviços.</li>
        </ul>
      ),
      image: '/imagem-exemplo.jpg',
      className: 'bg-firstCard-background w-1/3 p-8',
      titleClassName: 'text-white w-[60%]',
      descriptionClassName: ''
    },
    {
      title: 'Direito do Trabalho',
      description: (
        <ul className="list-disc ml-5">
          <li>Reconhecimento de Vínculo Empregatício;</li>
          <li>Reversão da Justa Causa;</li>
          <li>Horas Extras;</li>
          <li>Acidente de Trabalho</li>
          <li>Adicional de Insalubridade e Periculosidade;</li>
          <li>Diferenças Salariais;</li>
          <li>Rescisão Indireta;</li>
          <li>Estabilidades;</li>
          <li>Entre outros serviços.</li>
        </ul>
      ),
      image: '/imagem-exemplo6.jpg',
      className: 'bg-white w-1/3 p-8',
      titleClassName: 'text-black w-[60%]',
      descriptionClassName: 'text-black'
    },
    {
      title: 'Outras Áreas',
      description: (
        <ul className="list-disc ml-5">
          <li>Cível;</li>
          <li>Consumidor;</li>
          <li>Família.</li>
        </ul>
      ),
      image: '/imagem-maria-2.png',
      className: 'bg-accent text-white w-1/3',
      titleClassName: 'text-black pt-10',
      descriptionClassName: 'text-black'
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

      <main className="px-4">
        <FadeInSection>
          <section
            className="flex place-content-end justify-end h-screen w-full px-20 py-80"
            id="ínicio">
            <h2 className="text-6xl text-end font-bold mb-8 text-accent pr-24 w-[70%] p-4 leading-none">
              Um Serviço Jurídico de
              <FlipWords className="text-end " words={words} />
              <div className="mr-8 text-end"></div>
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
          <section id="serviços" className="my-32 w-full flex flex-col">
            <h2 className=" text-5xl font-bold mb-8 text-accent text-center mt-28">
              Áreas de atuação
            </h2>
            <div className="flex">
              {services.map((service, index) => (
                <div
                  className={`flex place-items-center flex-col ${service.className}`}
                  key={index}>
                  {service === services[2] && (
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={1000}
                      height={200}
                      className="object-cover h-[50%] opacity-80 border-b "
                    />
                  )}
                  <div className={`flex flex-col h-[140px]`}>
                    <h3
                      className={`text-3xl text-start ml-8 mb-2 font-bold ${service.titleClassName}`}>
                      {service.title}
                    </h3>
                    <div className={`m-2 ml-12 h-full ${service.descriptionClassName}`}>
                      {service.description}
                    </div>
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
