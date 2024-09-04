import Image from 'next/image';

export const IconJusbrasil: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <Image
      src="/jusBrasilCustomizado.png"
      alt="Ícone da Web global"
      width={32}
      height={32}
      className={`${props.className} object-contain`}
    />
  );
};
