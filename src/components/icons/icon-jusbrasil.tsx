import Image from 'next/image';

export const IconJusbrasil: React.FC<{ className?: string }> = ({ className, ...rest }) => {
  return (
    <div className={`flex justify-center py-[3px] ${className}`} {...rest}>
      <Image
        src="/jusBrasilCustomizado.png"
        alt="Ícone da Web global"
        width={90}
        height={90}
        className="object-contain w-[60%] py-1"
      />
    </div>
  );
};
