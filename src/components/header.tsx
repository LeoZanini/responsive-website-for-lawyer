import { lancelot, lateef } from '@/app/layout';
import { LawIcon } from './icons/law-icon';
import { MariaLogo } from './icons/maria-logo';
import { ReactElement } from 'react';
import IconBxlWhatsapp from './icons/icon-whatsapp';

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
        className={`fixed w-full z-10 transition-colors duration-700 h-16
          
          border-b-2 border-primary border-b-accent bg-[rgba(0,0,0,0.9)] shadow-lg
           
        `}>
        <div className="flex w-full h-full justify-between place-items-center">
          <div className="flex pl-10">
            <button
              onClick={() => handleNavClick('ínicio')}
              className="group hover:scale-95 transition duration-1000 ease-in-out">
              <MariaLogo
                className={`stroke-accent fill-accent mt-2 p-1 transition-colors duration-1000 ease-in-out`}
                width="80"
                height="50"
                barDistance="760"
              />
            </button>
          </div>
          <div className="flex flex-col justify-center"></div>
          <button className="flex text-sm h-8 mr-10 place-items-center text-accent p-2 border border-accent hover:opacity-80 transition duration-1000 ease-in-out">
            <IconBxlWhatsapp className="w-6 fill-accent mr-2" />
            Entre em Contato
          </button>
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
