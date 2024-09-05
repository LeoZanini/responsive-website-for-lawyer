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

  const defaultClassName = '';

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
