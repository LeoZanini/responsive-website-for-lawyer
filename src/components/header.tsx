import { LawIcon } from './icons/law-icon';

const getHeaderClassNames = (isScrolledPastGrid: boolean) => {
  return `py-6 fixed w-full z-10 transition-colors duration-500 ${
    isScrolledPastGrid
      ? 'bg-[rgba(218,165,32,0.9)] border-b border-white shadow-lg'
      : 'border-b border-accent bg-[rgba(0,0,0,0.4)] shadow-lg'
  }`;
};

const getLawIconClassNames = (isScrolledPastGrid: boolean) => {
  return `w-14 h-14 pr-1 mr-4 border-r stroke-0 ${
    isScrolledPastGrid ? 'border-r-black' : 'stroke-accent fill-accent border-r-accent'
  }`;
};

const getButtonClassNames = (isScrolledPastGrid: boolean, activeTab: string, tab: string) => {
  return `transition ease-in-out duration-1000 font-cmtiempo ${
    activeTab === tab ? 'font-semibold border-b-2' : ''
  } ${
    isScrolledPastGrid
      ? activeTab === tab
        ? 'border-black '
        : ''
      : activeTab === tab
      ? 'border-accent '
      : ''
  } ${isScrolledPastGrid ? 'text-black hover:text-white' : 'text-white hover:text-accent'}`;
};

export const HeaderComponent = (props) => {
  const { isScrolledPastGrid, activeTab, handleNavClick } = props;

  return (
    <>
      <header className={getHeaderClassNames(isScrolledPastGrid)}>
        <div className="flex container mx-auto px-6">
          <div className="flex justify-center align-middle">
            <LawIcon className={getLawIconClassNames(isScrolledPastGrid)} />
          </div>
          <div className="w-1/4">
            <h1
              className={`text-2xl font-light font-cmtiempo ${
                isScrolledPastGrid ? 'text-white' : 'text-[rgba(253,189,70,0.95)]'
              }`}>
              Maria Eduarda Risso
            </h1>
            <h2
              className={`text-xl font-light font-cmtiempo ${
                isScrolledPastGrid ? 'text-primary-background' : 'text-white'
              }`}>
              Direto trabalhista e previdenciario
            </h2>
          </div>
          <nav className="flex w-full z-10 place-items-end">
            <div className="container mx-auto px-4">
              <ul className="flex justify-end place-items-end space-x-8">
                {['home', 'services', 'about', 'contact'].map((tab) => (
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
