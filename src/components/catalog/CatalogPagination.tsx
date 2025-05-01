import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface CatalogPaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const CatalogPagination = ({ 
  currentPage, 
  totalPages, 
  setCurrentPage 
}: CatalogPaginationProps) => {
  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
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
            onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CatalogPagination;