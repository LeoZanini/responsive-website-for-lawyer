import { lancelot, lateef } from '@/app/layout';
import { LawIcon } from './icons/law-icon';

export const HeaderComponent = (props) => {
  const { isScrolledPastGrid, activeTab, handleNavClick } = props;

  const getHeaderClassNames = (isScrolledPastGrid: boolean) => {
    return `py-4 fixed w-full z-10 transition-colors duration-700 ${
      isScrolledPastGrid ? 'border-b border-accent bg-black shadow-lg' : ' bg-transparent shadow-lg'
    }`;
  };

  const getButtonClassNames = (isScrolledPastGrid: boolean, activeTab: string, tab: string) => {
    return `transition ease-in-out duration-1000 hover:text-accent ${
      activeTab === tab ? 'font-semibold border-b-2 border-b-accent' : ''
    }  `;
  };

  return (
    <>
      <header className={getHeaderClassNames(isScrolledPastGrid)}>
        <div className="flex w-full ">
          <div className="w-1/4 flex flex-col place-items-end">
            <h2 className={`text-[18px] h-1 text-gray-200 ${lancelot.className} `}>
              Direto Trabalhista e Previdenciário
            </h2>
            <h1 className={`text-[40px] h-0 text-accent ${lateef.className}`}>
              Maria Eduarda Risso
            </h1>
          </div>
          <div className="flex justify-center align-middle border-l border-l-accent">
            <LawIcon className={'w-10 h-12'} />
          </div>
          <nav className="flex w-1/2 z-10 place-items-end text-xl justify-center">
            <div className="flex ">
              <ul className={`flex place-items-end space-x-20 ${lateef.className}`}>
                {['ínicio', 'serviços', 'sobre', 'contato'].map((tab) => (
                  <li key={tab}>
                    <button
                      onClick={() => handleNavClick(tab)}
                      className={getButtonClassNames(isScrolledPastGrid, activeTab, tab)}>
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
