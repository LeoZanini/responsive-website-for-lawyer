import { lancelot, lateef } from '@/app/layout';
import { LawIcon } from './icons/law-icon';
import { MariaLogo } from './icons/maria-logo';
import { ReactElement } from 'react';

type HeaderComponentProps = {
  isScrolledPastGrid: boolean;
  activeTab: string;
  handleNavClick: (sectionId: string) => void;
};

export const HeaderComponent = ({
  isScrolledPastGrid,
  activeTab,
  handleNavClick
}: HeaderComponentProps) => {
  const getHeaderClassNames = (isScrolledPastGrid: boolean) => {
    return `py-4 fixed w-full z-10 transition-colors duration-700 ${
      isScrolledPastGrid
        ? 'border-b border-primary border-b-accent bg-[rgba(0,0,0,0.9)] shadow-lg '
        : ' bg-transparent'
    }`;
  };

  const getButtonClassNames = (activeTab: string, tab: string) => {
    return `transition ease-in-out duration-1000 hover:text-accent border-b-accent ${
      activeTab === tab ? 'font-semibold border-b-2 border-b-accent' : ''
    }  `;
  };

  return (
    <>
      <header className={getHeaderClassNames(isScrolledPastGrid)}>
        <div className="flex w-full ">
          <div className="flex justify-center align-middle pl-10">
            <MariaLogo className={'accent stroke-accent'} width="80" height="60" />
          </div>
          <div className=" flex flex-col place-items-start">
            <h2 className={`text-[18px] h-1 text-gray-200 ${lancelot.className} `}>
              Direto Trabalhista e Previdenciário
            </h2>
            <h1 className={`text-[40px] h-0 text-accent ${lateef.className}`}>
              Maria Eduarda Risso
            </h1>
          </div>
          <nav className="flex w-1/2 z-10 place-items-end text-xl justify-center">
            <div className="flex ">
              <ul className={`flex place-items-end space-x-20 ${lateef.className}`}>
                {['ínicio', 'serviços', 'sobre', 'contato'].map((tab) => (
                  <li key={tab}>
                    <button
                      onClick={() => handleNavClick(tab)}
                      className={getButtonClassNames(activeTab, tab)}>
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
