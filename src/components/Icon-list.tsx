import { useState } from 'react';
import { LinkButtons } from './link-buttons';
import IconInstagram from './icons/icon-instagram';
import IconFacebook from './icons/icon-facebook';
import IconWhatsapp from './icons/icon-whatsapp';
import { IconJusbrasil } from './icons/icon-jusbrasil';
import IconLinkedin from './icons/icon-linkedin';

export default function IconButtons() {
  const [hoveredIcons, setHoveredIcons] = useState<boolean[]>(new Array(5).fill(false));

  const handleMouseEnter = (index: number) => {
    setHoveredIcons((prev) => {
      const newHoveredIcons = [...prev];
      newHoveredIcons[index] = true;
      return newHoveredIcons;
    });
  };

  const icons = [
    {
      icon: IconWhatsapp,
      link: 'https://api.whatsapp.com/send?phone=5546999750201',
      hover: 'Whatsapp'
    },
    {
      icon: IconFacebook,
      link: 'https://www.facebook.com/adv.mariaeduardarisso',
      hover: 'Facebook'
    },
    {
      icon: IconInstagram,
      link: 'https://www.instagram.com/adv.mariaeduardarisso/',
      hover: 'Instagram'
    },
    {
      icon: IconJusbrasil,
      link: 'https://mariaeduardarisso.jusbrasil.com.br/',
      hover: 'JusBrasil'
    },
    {
      icon: IconLinkedin,
      link: 'https://www.linkedin.com/in/mariaeduardarisso/',
      hover: 'Linkedin'
    }
  ];

  return (
    <div className="flex flex-col mt-6 place-items-center">
      {icons.map((item, index) => (
        <LinkButtons key={index} link={item.link} toolTip={item.hover}>
          <item.icon
            className={`pr-3 py-2 mt-2 w-16 h-12 stroke-accent fill-accent border-y border-l border-accent ${
              !hoveredIcons[index] ? 'md:animate-pulse' : ''
            } hover:-translate-x-1 transition-transform`}
            onMouseEnter={() => handleMouseEnter(index)}
          />
        </LinkButtons>
      ))}
    </div>
  );
}
