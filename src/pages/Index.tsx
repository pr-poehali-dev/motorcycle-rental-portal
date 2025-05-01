
import MainLayout from "@/components/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <MainLayout>
      <div className="relative">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-primary to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Свобода передвижения на двух колёсах</h1>
              <p className="text-xl mb-8">
                Арендуйте мотоциклы премиум-класса для деловых поездок, отдыха или приключений
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/catalog">Выбрать мотоцикл</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-primary-foreground/10" asChild>
                  <Link to="/about">Узнать больше</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured motorcycles */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Популярные мотоциклы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMotorcycles.map((moto) => (
              <div key={moto.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <img src={moto.image} alt={moto.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{moto.name}</h3>
                  <p className="text-gray-600 mb-4">{moto.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">{moto.price} ₽/день</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/catalog/${moto.id}`}>Подробнее</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/catalog">Посмотреть все мотоциклы</Link>
            </Button>
          </div>
        </div>
        
        {/* How it works */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Как работает прокат</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// Данные для отображения на главной странице
const featuredMotorcycles = [
  {
    id: 1,
    name: "Harley-Davidson Iron 883",
    description: "Легендарный круизер для городских поездок",
    price: 5000,
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80"
  },
  {
    id: 2,
    name: "Yamaha MT-07",
    description: "Спортивный мотоцикл для динамичной езды",
    price: 4000,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80"
  },
  {
    id: 3,
    name: "BMW R 1250 GS",
    description: "Премиальный турэндуро для дальних путешествий",
    price: 7000,
    image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&h=750&q=80"
  }
];

const steps = [
  {
    title: "Выберите мотоцикл",
    description: "Просмотрите наш каталог и выберите модель, которая подходит для ваших целей"
  },
  {
    title: "Забронируйте онлайн",
    description: "Укажите даты аренды и оформите бронирование через сайт"
  },
  {
    title: "Получите и наслаждайтесь",
    description: "Приезжайте в пункт выдачи, предоставьте документы и отправляйтесь в путь"
  }
];

export default Index;
