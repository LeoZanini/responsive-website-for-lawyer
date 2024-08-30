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
  const getButtonClassNames = (activeTab: string, tab: string) => {
    return `transition ease-in-out duration-1000 hover:text-white border-b-accent ${
      activeTab === tab ? 'font-semibold border-b-2 border-b-accent' : ''
    }  `;
  };

  return (
    <>
      <header
        className={`p-4 fixed w-full z-10 transition-colors duration-700 h-[72px] ${
          isScrolledPastGrid
            ? 'border-b border-primary border-b-accent bg-[rgba(0,0,0,0.9)] shadow-lg '
            : ' bg-transparent'
        }`}>
        <div className="flex w-full h-full">
          <div className="flex pl-10">
            <MariaLogo className={'stroke-accent'} width="80" height="60" />
          </div>
          <div className="flex flex-col justify-center"></div>
          {/* <nav className="flex w-1/2 z-10 place-items-end text-xl justify-center text-accent">
            <div className="flex ">
              <ul className={`flex place-items-end space-x-20 ${lateef.className}`}>
                {['ínicio', 'serviços', 'contato'].map((tab) => (
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
          </nav> */}
        </div>
      </header>
    </>
  );
};
