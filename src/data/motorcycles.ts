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

// Моковые данные для каталога
export const motorcycles: MotorcycleType[] = [
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