'use client';
import { HeaderComponent } from '@/components/header';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MariaLogo } from '@/components/icons/maria-logo';
import IconLocation from '@/components/icons/icon-location';
import IconButtons from '@/components/Icon-list';

export default function Home() {
  const [activeTab, setActiveTab] = useState('main-image');
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
      titleClassName: 'text-white w-[50%]',
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
        <ul className="list-disc">
          <li>Cível;</li>
          <li>Consumidor;</li>
          <li>Família.</li>
        </ul>
      ),
      image: '/imagem-maria-2.png',
      className: 'bg-accent text-white w-1/3 text-lg',
      titleClassName: 'text-black pt-10 ml-0',
      descriptionClassName: 'text-black ml-0'
    }
  ];

  return (
    <div className="flex flex-col text-primary-text overflow-x-hidden font-static">
      <Head>
        <title>Maria Eduarda Risso</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent
        isScrolledPastGrid={isScrolledPastGrid}
        activeTab={activeTab}
        handleNavClick={handleNavClick}
      />
      <div className="absolute w-full h-screen">
        <Image
          id="main-image"
          alt="home page image"
          src="/imagem-maria-up.png"
          width={2048}
          height={1144}
          className="object-fill opacity-80"
        />
      </div>
      <main className="relative py-12">
        <>
          <section
            className="relative flex justify-center place-content-center w-screen lg:pt-40 2xl:pt-52 h-screen"
            id="ínicio">
            <div className="flex flex-col text-accent ml-20 leading-none w-1/3 p-6 place-items-center h-96">
              <MariaLogo
                className={'flex stroke-accent fill-accent h-1/2'}
                width=""
                height="60"
                barDistance="860"
              />
              <div className="text-5xl font-libre_Baskerville"> Maria Eduarda Risso</div>
              <div className="text-2xl font-playfairDisplay text-gray-300">Advogada</div>
            </div>
            <div className="flex w-1/2 justify-center place-items-center 2xl:ml-26 xl:ml-[62px] h-96 mt-6">
              <button
                className="border text-accent border-accent w-48 h-10 hover:bg-opacity-75 transition duration-700 ease-in-out font-libre_Baskerville"
                onClick={() => handleNavClick('serviços')}>
                ATUAÇÃO
              </button>
            </div>
          </section>
        </>
        <>
          <section id="serviços" className="w-full flex flex-col h-screen pt-24 bg-[#e3dfd6] ">
            <h2 className=" text-5xl font-bold mb-8 text-accent text-center">Áreas de atuação</h2>
            <div className="flex mx-4">
              {services.map((service, index) => (
                <div
                  className={`flex place-items-center flex-col mx-4 shadow-lg border border-accent hover:scale-[102%] transition-scale duration-1000 ${service.className}`}
                  key={index}>
                  {service === services[2] && (
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={1000}
                      height={200}
                      className="object-cover h-[50%] opacity-80"
                    />
                  )}
                  <div className={`flex flex-col h-[200px]`}>
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
        </>
        <>
          <section id="contato" className="w-full flex flex-col h-full lg:mt-12 xl:mt-12 2xl:mt-24">
            <div className="flex w-full justify-center">
              <IconButtons />
              <Image
                src="/maria-high-res.JPG"
                alt="Advogada Maria Eduarda Risso"
                width={400}
                height={400}
                className="mr-8 shadow-2xl opacity-85 object-cover border border-accent"
              />
              <div className="flex flex-col w-[40%]">
                <h2 className="text-5xl text-accent text-left py-6">Maria Eduarda Risso</h2>
                <p className="leading-relaxed text-justify py-6 pr-2 first-letter:text-xl">
                  <span className="text-accent w-fit font-bold">Advogada</span> inscrita na{' '}
                  <span className="text-accent w-fit font-bold">OAB/PR 111.038</span>, bacharela em
                  Direito pela Universidade Estadual do Oeste do Paraná, campus de Francisco
                  Beltrão, e atualmente{' '}
                  <span className="text-accent w-fit font-bold">pós-graduanda</span> em Direito
                  Privado Contemporâneo pela Faculdade de São Vicente/SP. Durante a graduação,
                  participei ativamente de grupos de pesquisa, com foco na produção de artigos e
                  publicações sobre{' '}
                  <span className="text-accent w-fit font-bold">Direito do Trabalho</span> e{' '}
                  <span className="text-accent w-fit font-bold">Direito Previdenciário</span>.
                  <br />
                  <br />
                  Além disso, desde o segundo ano de faculdade, atuei em escritórios de advocacia,
                  adquirindo <span className="text-accent w-fit font-bold">
                    sólida experiência
                  </span>{' '}
                  nessas áreas. Após minha graduação, passei a exercer a profissão com foco
                  principal nas áreas de Direito do Trabalho e Previdenciário. Com mais de seis anos
                  de prática nessas especialidades, venho desenvolvendo uma experiência e expertise,
                  atuando de forma <span className="text-accent w-fit font-bold">comprometida</span>{' '}
                  e aprofundada ao longo dos anos.
                </p>
              </div>
            </div>
            {/* Mapa e Endereço */}
            <div className="flex flex-col w-full justify-start place-items-center mt-12">
              <div className="flex flex-col place-items-center">
                <div className="mb-6 flex justify-center place-items-center">
                  <IconLocation className="w-10 mr-6 text-accent" />
                  <h3 className="text-5xl text-accent"> Meu Endereço</h3>
                </div>
                <iframe
                  loading="lazy"
                  className="w-[650px] h-[400px] border-2 border-accent"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com.br/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_API_KEI}&q=Av.+Gen.+Osório,+184+-+Cango,+Francisco+Beltrão+-+PR,+85604-240`}
                  allowFullScreen></iframe>{' '}
              </div>
            </div>
            {/* Linha divisória com logo */}
            <div className="w-full relative flex flex-col mt-10">
              <div className="bg-accent h-[2px] my-10 flex place-content-center">
                <MariaLogo
                  className="stroke-accent fill-accent absolute top-0"
                  width="80"
                  height="80"
                />
              </div>
            </div>
          </section>
        </>
      </main>
      <footer className="bg-black bg-opacity-50 text-accent py-2">
        <div className="w-full text-center">
          <p>&copy; 2024 Maria Eduarda Risso. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
