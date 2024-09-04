import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface LinkButtonsProps {
  buttonClassName?: string;
  children: React.ReactNode;
  useDefault?: boolean;
  link: string;
  toolTip?: string;
}

export const LinkButtons: React.FC<LinkButtonsProps> = (props) => {
  const { buttonClassName, children, useDefault, link, toolTip } = props;

  const defaultClassName =
    'group transition duration-300 hover:-translate-x-1 ease-in-out relative ';

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={`${buttonClassName}${useDefault && defaultClassName}`}
          onClick={() => (window.location.href = link)}>
          {children}
        </TooltipTrigger>
        <TooltipContent>{toolTip}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
