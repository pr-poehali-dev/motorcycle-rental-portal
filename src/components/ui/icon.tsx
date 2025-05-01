
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof LucideIcons | string;
  color?: string;
  size?: number;
  className?: string;
  fallback?: keyof typeof LucideIcons;
}

const Icon = ({
  name,
  color,
  size = 24,
  className,
  fallback = "CircleAlert",
  ...rest
}: IconProps) => {
  // Check if the icon exists in lucide-react
  const IconComponent = LucideIcons[name as keyof typeof LucideIcons] || 
                       LucideIcons[fallback as keyof typeof LucideIcons];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found and fallback "${fallback}" also not found`);
    return null;
  }

  return (
    <IconComponent
      color={color}
      size={size}
      className={cn("", className)}
      aria-hidden="true"
      {...rest}
    />
  );
};

export default Icon;
