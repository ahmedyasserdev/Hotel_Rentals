import { ButtonProps } from "@/types";
import Image from "next/image";



const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flex-center gap-2   ${variant} ${
        full && "w-full"
      } `}
    >
      
      <p className=" whitespace-nowrap cursor-pointer">
        {title}
      </p>
      {icon && <Image src={icon} alt={title} width={25} height={25} />}
    </button>
  );
};

export default Button;