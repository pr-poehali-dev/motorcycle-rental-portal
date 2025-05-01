import { useState, useMemo } from "react";
import { MotorcycleType } from "@/data/motorcycles";

interface UseCatalogFiltersProps {
  motorcycles: MotorcycleType[];
}

interface UseCatalogFiltersReturn {
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
  currentPage: number;
  setCurrentPage: (value: number) => void;
  filteredMotorcycles: MotorcycleType[];
  paginatedMotorcycles: MotorcycleType[];
  totalPages: number;
  handleResetFilters: () => void;
  uniqueBrands: string[];
}

export const useCatalogFilters = ({ motorcycles }: UseCatalogFiltersProps): UseCatalogFiltersReturn => {
  // Состояния для фильтров
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [onlyAvailable, setOnlyAvailable] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Уникальные бренды для фильтра
  const uniqueBrands = useMemo(() => {
    return Array.from(new Set(motorcycles.map(moto => moto.brand)));
  }, [motorcycles]);
  
  // Фильтрация мотоциклов
  const filteredMotorcycles = useMemo(() => {
    return motorcycles.filter(moto => {
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
  }, [motorcycles, searchQuery, priceRange, selectedType, selectedBrand, onlyAvailable]);
  
  // Пагинация
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredMotorcycles.length / itemsPerPage);
  
  // Сбрасываем страницу, если изменились фильтры
  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery, priceRange, selectedType, selectedBrand, onlyAvailable]);
  
  const paginatedMotorcycles = useMemo(() => {
    return filteredMotorcycles.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [filteredMotorcycles, currentPage]);
  
  // Обработчики для фильтров
  const handleResetFilters = () => {
    setSearchQuery("");
    setPriceRange([0, 10000]);
    setSelectedType(null);
    setSelectedBrand(null);
    setOnlyAvailable(true);
    setCurrentPage(1);
  };
  
  return {
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
    currentPage,
    setCurrentPage,
    filteredMotorcycles,
    paginatedMotorcycles,
    totalPages,
    handleResetFilters,
    uniqueBrands
  };
};