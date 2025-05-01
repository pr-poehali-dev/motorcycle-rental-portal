
import AdminLayout from "@/components/layouts/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { 
  BarChart, 
  DollarSign, 
  Motorcycle, 
  Users,
  ShoppingBag,
  Bike,
  Calendar
} from "lucide-react";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Панель управления</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">{new Date().toLocaleDateString('ru-RU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="motorcycles">Мотоциклы</TabsTrigger>
            <TabsTrigger value="orders">Заказы</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Общая выручка
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₽745,231</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% по сравнению с прошлым месяцем
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Заказов
                  </CardTitle>
                  <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+42</div>
                  <p className="text-xs text-muted-foreground">
                    +12% по сравнению с прошлым месяцем
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Клиентов
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% по сравнению с прошлым месяцем
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Мотоциклов в парке
                  </CardTitle>
                  <Motorcycle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">
                    +3 за последний месяц
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Статистика аренды</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[200px] flex items-center justify-center border-dashed border-2 border-gray-200 rounded-md">
                    <div className="flex flex-col items-center text-center p-4 space-y-2">
                      <BarChart className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm font-medium">График статистики аренды</p>
                      <p className="text-sm text-muted-foreground">
                        Скоро здесь будет график с данными по дням
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Популярные мотоциклы</CardTitle>
                  <CardDescription>
                    Топ-5 мотоциклов по количеству заказов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {popularMotorcycles.map((motorcycle) => (
                      <div key={motorcycle.id} className="flex items-center">
                        <Bike className="h-4 w-4 mr-2 text-primary" />
                        <div className="ml-2 space-y-1 flex-1">
                          <p className="text-sm font-medium leading-none">
                            {motorcycle.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {motorcycle.orders} бронирований
                          </p>
                        </div>
                        <div className="font-medium">{motorcycle.revenue}₽</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Последние бронирования</CardTitle>
                  <CardDescription>
                    Список последних заказов на аренду мотоциклов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        <div className="ml-2 space-y-1 flex-1">
                          <div className="flex justify-between">
                            <p className="text-sm font-medium leading-none">
                              {booking.motorcycle}
                            </p>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              booking.status === 'Активен' ? 'bg-green-100 text-green-800' : 
                              booking.status === 'Завершен' ? 'bg-blue-100 text-blue-800' : 
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {booking.status}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {booking.customer} • {booking.dates}
                          </p>
                        </div>
                        <div className="font-medium">{booking.amount}₽</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Задачи на сегодня</CardTitle>
                  <CardDescription>
                    Запланированные мероприятия
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {dailyTasks.map((task, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mr-2 mt-0.5">
                          <Icon name={task.icon} size={16} className="text-primary" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">{task.title}</p>
                          <p className="text-xs text-muted-foreground">{task.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="motorcycles" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Управление мотоциклами</CardTitle>
                <CardDescription>
                  Здесь будет представлен интерфейс для управления мотоциклами
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center border-dashed border-2 border-gray-200 rounded-md">
                  <div className="flex flex-col items-center text-center p-4 space-y-2">
                    <Motorcycle className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm font-medium">Таблица мотоциклов</p>
                    <p className="text-sm text-muted-foreground">
                      Этот раздел находится в разработке
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="orders" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Управление заказами</CardTitle>
                <CardDescription>
                  Здесь будет представлен интерфейс для управления заказами
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center border-dashed border-2 border-gray-200 rounded-md">
                  <div className="flex flex-col items-center text-center p-4 space-y-2">
                    <ShoppingBag className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm font-medium">Таблица заказов</p>
                    <p className="text-sm text-muted-foreground">
                      Этот раздел находится в разработке
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

// Примерные данные для отображения на дашборде
const popularMotorcycles = [
  { id: 1, name: "Harley-Davidson Iron 883", orders: 12, revenue: 60000 },
  { id: 2, name: "BMW R 1250 GS", orders: 9, revenue: 63000 },
  { id: 3, name: "Yamaha MT-07", orders: 8, revenue: 32000 },
  { id: 4, name: "Ducati Monster", orders: 6, revenue: 42000 },
  { id: 5, name: "Honda CB650R", orders: 5, revenue: 25000 },
];

const recentBookings = [
  { 
    id: 1, 
    motorcycle: "Harley-Davidson Iron 883",
    customer: "Александр Петров",
    status: "Активен",
    dates: "20 апр - 24 апр",
    amount: 20000
  },
  { 
    id: 2, 
    motorcycle: "BMW R 1250 GS",
    customer: "Ирина Смирнова",
    status: "Ожидает",
    dates: "25 апр - 30 апр",
    amount: 35000
  },
  { 
    id: 3, 
    motorcycle: "Yamaha MT-07",
    customer: "Сергей Иванов",
    status: "Завершен",
    dates: "15 апр - 18 апр",
    amount: 12000
  },
  { 
    id: 4, 
    motorcycle: "Ducati Monster",
    customer: "Мария Козлова",
    status: "Активен",
    dates: "22 апр - 25 апр",
    amount: 21000
  },
];

const dailyTasks = [
  { 
    icon: "Check",
    title: "Техническое обслуживание BMW R 1250 GS",
    time: "10:00" 
  },
  { 
    icon: "ArrowLeftRight",
    title: "Выдача мотоцикла Harley-Davidson Iron 883",
    time: "12:30" 
  },
  { 
    icon: "ArrowLeftRight",
    title: "Приём мотоцикла Yamaha MT-07",
    time: "16:00" 
  },
  { 
    icon: "PhoneCall",
    title: "Звонок клиенту по поводу брони",
    time: "17:30" 
  },
];

export default Dashboard;
