import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Типы для мотоциклов
export interface MotorcycleType {
  id: number;
  name: string;
  brand: string;
  type: "sport" | "cruiser" | "touring" | "enduro" | "street";
  pricePerDay: number;
  engineSize: number;
  available: boolean;
  image: string;
  description: string;
}

interface MotorcycleCardProps {
  motorcycle: MotorcycleType;
}

const MotorcycleCard = ({ motorcycle }: MotorcycleCardProps) => {
  return (
    <Card key={motorcycle.id} className="overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={motorcycle.image} 
          alt={motorcycle.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
        />
        {!motorcycle.available && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-semibold px-3 py-1 rounded">Недоступен</span>
          </div>
        )}
      </div>
      <CardContent className="p-5 flex-1 flex flex-col">
        <div className="mb-2 flex justify-between items-start">
          <h3 className="font-bold text-lg">{motorcycle.name}</h3>
          <span className="text-primary font-bold">{motorcycle.pricePerDay} ₽/день</span>
        </div>
        <p className="text-muted-foreground text-sm mb-4">{motorcycle.description}</p>
        <div className="mt-auto flex gap-2">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <Link to={`/catalog/${motorcycle.id}`}>Подробнее</Link>
          </Button>
          <Button size="sm" className="flex-1" disabled={!motorcycle.available}>
            В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MotorcycleCard;