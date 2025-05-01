
import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Icon from "@/components/ui/icon";

// Типы для мотоциклов
interface MotorcycleType {
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

const Catalog = () => {
  // Состояния для фильтров
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [onlyAvailable, setOnlyAvailable] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // Фильтрация мотоциклов
  const filteredMotorcycles = motorcycles.filter(moto => {
    // Поиск по имени или описанию
    const matchesSearch = moto.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          moto.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Фильтр по цене
    const matchesPrice = moto.pricePerDay >= priceRange[0] && moto.pricePerDay <= priceRange[1];
    
    // Фильтр по типу
    const matchesType = !selectedType || moto.type === selectedType;
    
    // Фильтр по бренду
    const matchesBrand = !selectedBrand || moto.brand === selectedBrand;
    
    // Фильтр по доступности
    const matchesAvailability = !onlyAvailable || moto.available;
    
    return matchesSearch && matchesPrice && matchesType && matchesBrand && matchesAvailability;
  });

  // Пагинация
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredMotorcycles.length / itemsPerPage);
  const paginatedMotorcycles = filteredMotorcycles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Обработчики для фильтров
  const handleResetFilters = () => {
    setSearchQuery("");
    setPriceRange([0, 10000]);
    setSelectedType(null);
    setSelectedBrand(null);
    setOnlyAvailable(true);
    setCurrentPage(1);
  };

  // Уникальные бренды для фильтра
  const uniqueBrands = Array.from(new Set(motorcycles.map(moto => moto.brand)));

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Каталог мотоциклов</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Фильтры */}
          <div className="space-y-6 lg:sticky lg:top-4 lg:self-start">
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
          </div>
          
          {/* Список мотоциклов */}
          <div className="lg:col-span-3">
            {/* Результаты поиска */}
            <div className="mb-4 flex justify-between items-center">
              <p className="text-muted-foreground">
                Найдено: <span className="font-medium">{filteredMotorcycles.length}</span> мотоциклов
              </p>
              <Select defaultValue="price_asc">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Сортировать по" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price_asc">Цена (по возрастанию)</SelectItem>
                  <SelectItem value="price_desc">Цена (по убыванию)</SelectItem>
                  <SelectItem value="name_asc">Название (А-Я)</SelectItem>
                  <SelectItem value="name_desc">Название (Я-А)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Карточки мотоциклов */}
            {paginatedMotorcycles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {paginatedMotorcycles.map((motorcycle) => (
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
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="SearchX" className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Мотоциклы не найдены</h3>
                <p className="text-muted-foreground mb-4">
                  Попробуйте изменить параметры поиска или фильтры
                </p>
                <Button variant="outline" onClick={handleResetFilters}>
                  Сбросить фильтры
                </Button>
              </div>
            )}
            
            {/* Пагинация */}
            {filteredMotorcycles.length > 0 && (
              <Pagination className="mt-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    />
                  </PaginationItem>
                  
                  {/* Отображение страниц пагинации */}
                  {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNumber = index + 1;
                    
                    // Отображаем только первую, последнюю и текущую страницы с соседними
                    if (
                      pageNumber === 1 || 
                      pageNumber === totalPages || 
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <PaginationItem key={pageNumber}>
                          <PaginationLink 
                            isActive={pageNumber === currentPage}
                            onClick={() => setCurrentPage(pageNumber)}
                          >
                            {pageNumber}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    }
                    
                    // Добавляем многоточие
                    if (
                      (pageNumber === 2 && currentPage > 3) || 
                      (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
                    ) {
                      return (
                        <PaginationItem key={`ellipsis-${pageNumber}`}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      );
                    }
                    
                    return null;
                  })}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// Моковые данные для каталога
const motorcycles: MotorcycleType[] = [
  {
    id: 1,
    name: "Harley-Davidson Iron 883",
    brand: "Harley-Davidson",
    type: "cruiser",
    pricePerDay: 5000,
    engineSize: 883,
    available: true,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80",
    description: "Легендарный круизер для городских поездок"
  },
  {
    id: 2,
    name: "Yamaha MT-07",
    brand: "Yamaha",
    type: "street",
    pricePerDay: 4000,
    engineSize: 689,
    available: true,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80",
    description: "Спортивный стритфайтер для динамичной езды"
  },
  {
    id: 3,
    name: "BMW R 1250 GS",
    brand: "BMW",
    type: "touring",
    pricePerDay: 7000,
    engineSize: 1254,
    available: true,
    image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80",
    description: "Премиальный турэндуро для дальних путешествий"
  },
  {
    id: 4,
    name: "Honda Africa Twin",
    brand: "Honda",
    type: "enduro",
    pricePerDay: 6500,
    engineSize: 1100,
    available: true,
    image: "https://images.unsplash.com/photo-1616711420628-1598c4196035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80",
    description: "Надежный эндуро для преодоления любых дорог"
  },
  {
    id: 5,
    name: "Ducati Monster",
    brand: "Ducati",
    type: "sport",
    pricePerDay: 6000,
    engineSize: 937,
    available: false,
    image: "https://images.unsplash.com/photo-1614026480418-bd11fdb9542f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80",
    description: "Легендарный спортивный мотоцикл с итальянским характером"
  },
  {
    id: 6,
    name: "Kawasaki Ninja ZX-10R",
    brand: "Kawasaki",
    type: "sport",
    pricePerDay: 7500,
    engineSize: 998,
    available: true,
    image: "https://images.unsplash.com/photo-1589399707721-63b44b5e0b6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80",
    description: "Спортивный мотоцикл для трека и быстрой езды"
  },
  {
    id: 7,
    name: "KTM 390 Duke",
    brand: "KTM",
    type: "street",
    pricePerDay: 3500,
    engineSize: 373,
    available: true,
    image: "https://images.unsplash.com/photo-1619771914272-e00b55764b5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80",
    description: "Лёгкий и маневренный мотоцикл для города"
  },
  {
    id: 8,
    name: "Triumph Bonneville T120",
    brand: "Triumph",
    type: "cruiser",
    pricePerDay: 5500,
    engineSize: 1200,
    available: true,
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80",
    description: "Классический мотоцикл в ретро-стиле"
  },
  {
    id: 9,
    name: "Suzuki V-Strom 650",
    brand: "Suzuki",
    type: "touring",
    pricePerDay: 4500,
    engineSize: 645,
    available: false,
    image: "https://images.unsplash.com/photo-1611241443322-78b19f5a6f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80",
    description: "Надёжный туристический мотоцикл для длительных поездок"
  },
];

export default Catalog;
