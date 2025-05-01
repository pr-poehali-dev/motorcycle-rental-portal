import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface CatalogFiltersProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  selectedType: string | null;
  setSelectedType: (value: string | null) => void;
  selectedBrand: string | null;
  setSelectedBrand: (value: string | null) => void;
  onlyAvailable: boolean;
  setOnlyAvailable: (value: boolean) => void;
  uniqueBrands: string[];
  handleResetFilters: () => void;
}

const CatalogFilters = ({
  searchQuery,
  setSearchQuery,
  priceRange,
  setPriceRange,
  selectedType,
  setSelectedType,
  selectedBrand,
  setSelectedBrand,
  onlyAvailable,
  setOnlyAvailable,
  uniqueBrands,
  handleResetFilters
}: CatalogFiltersProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Фильтры</h2>
        
        {/* Поиск */}
        <div className="mb-4">
          <Label className="mb-2 block">Поиск</Label>
          <div className="relative">
            <Input
              placeholder="Поиск мотоциклов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Icon 
              name="Search" 
              className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" 
            />
          </div>
        </div>
        
        {/* Фильтр по цене */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <Label>Стоимость в день</Label>
            <span className="text-sm text-muted-foreground">
              {priceRange[0]}₽ - {priceRange[1]}₽
            </span>
          </div>
          <Slider 
            defaultValue={[0, 10000]} 
            min={0}
            max={10000}
            step={500}
            value={priceRange}
            onValueChange={setPriceRange}
            className="my-4"
          />
        </div>
        
        {/* Фильтр по типу */}
        <div className="mb-4">
          <Label htmlFor="type" className="mb-2 block">Тип мотоцикла</Label>
          <Select
            value={selectedType || ""}
            onValueChange={(value) => setSelectedType(value || null)}
          >
            <SelectTrigger id="type">
              <SelectValue placeholder="Все типы" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Все типы</SelectItem>
              <SelectItem value="sport">Спортивный</SelectItem>
              <SelectItem value="cruiser">Круизер</SelectItem>
              <SelectItem value="touring">Туристический</SelectItem>
              <SelectItem value="enduro">Эндуро</SelectItem>
              <SelectItem value="street">Городской</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Фильтр по бренду */}
        <div className="mb-4">
          <Label htmlFor="brand" className="mb-2 block">Бренд</Label>
          <Select
            value={selectedBrand || ""}
            onValueChange={(value) => setSelectedBrand(value || null)}
          >
            <SelectTrigger id="brand">
              <SelectValue placeholder="Все бренды" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Все бренды</SelectItem>
              {uniqueBrands.map(brand => (
                <SelectItem key={brand} value={brand}>{brand}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Фильтр по доступности */}
        <div className="flex items-center space-x-2 mb-6">
          <Checkbox 
            id="available" 
            checked={onlyAvailable}
            onCheckedChange={(checked) => setOnlyAvailable(checked as boolean)}
          />
          <Label htmlFor="available">Только доступные</Label>
        </div>
        
        {/* Кнопка сброса */}
        <Button variant="outline" className="w-full" onClick={handleResetFilters}>
          Сбросить фильтры
        </Button>
      </CardContent>
    </Card>
  );
};

export default CatalogFilters;