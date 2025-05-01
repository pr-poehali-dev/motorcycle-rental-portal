
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Icon name="Bike" size={24} />
          <span className="text-xl font-bold">МотоПрокат</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/catalog" className="hover:text-gray-200 transition-colors">
            Каталог
          </Link>
          <Link to="/about" className="hover:text-gray-200 transition-colors">
            О нас
          </Link>
          <Link to="/contacts" className="hover:text-gray-200 transition-colors">
            Контакты
          </Link>
          <Link to="/admin" className="hover:text-gray-200 transition-colors">
            Админ
          </Link>
        </div>
        
        <div className="flex items-center gap-3">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="text-white hover:bg-primary-foreground/10">
              <ShoppingCart size={20} />
            </Button>
          </Link>
          <Button variant="outline" className="hidden md:flex border-white text-white hover:bg-primary-foreground/10">
            Забронировать
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
