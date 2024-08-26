const Card1 = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Assessoria especializada em questões trabalhistas, defendendo os direitos dos trabalhadores
        e orientando empregadores.
      </p>
    </div>
  );
};

const Card2 = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Orientação e representação em questões relacionadas à Previdência Social, incluindo
        aposentadorias, pensões e benefícios.
      </p>
    </div>
  );
};

export const cards = [
  {
    id: 1,
    content: <Card1 />,
    className: 'col-span-2',
    thumbnail: '/imagem-exemplo6.jpg'
  },
  {
    id: 2,
    content: <Card2 />,
    className: '',
    thumbnail: '/imagem-exemplo2.jpg'
  },
  {
    id: 3,
    content: <Card2 />,
    className: 'col-span-1',
    thumbnail: '/imagem-exemplo3.jpg'
  },
  {
    id: 4,
    content: <Card2 />,
    className: 'col-span-2',
    thumbnail: '/imagem-exemplo4.jpg'
  }
];
