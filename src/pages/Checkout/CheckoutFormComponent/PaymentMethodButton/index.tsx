import { PaymentMethodButtonContainer } from "./style"

interface PaymentMethodButtonProps {
  icon: JSX.Element;
  title: string;
  onClick: () => void;
  className?: string; // Adicione a propriedade className
}

export function PaymentMethodButton({ icon, title, onClick, className }: PaymentMethodButtonProps) {
  return (
    <PaymentMethodButtonContainer className={className} onClick={onClick}>
        {icon}
        <p>{title}</p>
    </PaymentMethodButtonContainer>
  );
}