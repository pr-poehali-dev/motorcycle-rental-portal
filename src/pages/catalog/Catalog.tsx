import MainLayout from "@/components/layouts/MainLayout";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import MotorcycleCard from "@/components/ui/MotorcycleCard";
import CatalogFilters from "@/components/catalog/CatalogFilters";
import CatalogPagination from "@/components/catalog/CatalogPagination";
import EmptyResults from "@/components/catalog/EmptyResults";
import { motorcycles } from "@/data/motorcycles";
import { useCatalogFilters } from "@/hooks/useCatalogFilters";

const Catalog = () => {
  const {
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
  } = useCatalogFilters({ motorcycles });

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Каталог мотоциклов</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Фильтры */}
          <div className="space-y-6 lg:sticky lg:top-4 lg:self-start">
            <CatalogFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              onlyAvailable={onlyAvailable}
              setOnlyAvailable={setOnlyAvailable}
              uniqueBrands={uniqueBrands}
              handleResetFilters={handleResetFilters}
            />
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
                  <MotorcycleCard 
                    key={motorcycle.id} 
                    motorcycle={motorcycle} 
                  />
                ))}
              </div>
            ) : (
              <EmptyResults onResetFilters={handleResetFilters} />
            )}
            
            {/* Пагинация */}
            {filteredMotorcycles.length > 0 && (
              <CatalogPagination 
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Catalog;