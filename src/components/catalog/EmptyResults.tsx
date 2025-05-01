import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface EmptyResultsProps {
  onResetFilters: () => void;
}

const EmptyResults = ({ onResetFilters }: EmptyResultsProps) => {
  return (
    <div className="text-center py-12">
      <Icon name="SearchX" className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
      <h3 className="text-xl font-semibold mb-2">Мотоциклы не найдены</h3>
      <p className="text-muted-foreground mb-4">
        Попробуйте изменить параметры поиска или фильтры
      </p>
      <Button variant="outline" onClick={onResetFilters}>
        Сбросить фильтры
      </Button>
    </div>
  );
};

export default EmptyResults;