import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

const destinations = [
  {
    id: 1,
    name: 'Мальдивы',
    description: 'Райские острова с белоснежными пляжами',
    price: 120000,
    duration: '7 ночей',
    image: 'https://cdn.poehali.dev/projects/f1ef1181-39e4-4cde-a6c6-c068da88c16b/files/f97e82e7-a4d9-4552-841a-af5844a49568.jpg',
    rating: 4.9,
    reviews: 342,
    category: 'Пляж'
  },
  {
    id: 2,
    name: 'Париж',
    description: 'Романтика и архитектура старой Европы',
    price: 65000,
    duration: '5 ночей',
    image: 'https://cdn.poehali.dev/projects/f1ef1181-39e4-4cde-a6c6-c068da88c16b/files/99f2df9d-9d17-47dd-b97c-67a8b9bfd5bf.jpg',
    rating: 4.8,
    reviews: 521,
    category: 'Экскурсии'
  },
  {
    id: 3,
    name: 'Альпы',
    description: 'Горнолыжный курорт премиум класса',
    price: 95000,
    duration: '6 ночей',
    image: 'https://cdn.poehali.dev/projects/f1ef1181-39e4-4cde-a6c6-c068da88c16b/files/7e909f1e-cb49-4228-a342-fd7e3fb846fc.jpg',
    rating: 4.7,
    reviews: 287,
    category: 'Горы'
  }
];

const hotels = [
  {
    id: 1,
    name: 'Grand Paradise Resort',
    location: 'Мальдивы, Атолл Ари',
    price: 25000,
    rating: 5.0,
    amenities: ['Бассейн', 'Спа', 'Ресторан', 'Wi-Fi'],
    image: 'https://cdn.poehali.dev/projects/f1ef1181-39e4-4cde-a6c6-c068da88c16b/files/f97e82e7-a4d9-4552-841a-af5844a49568.jpg'
  },
  {
    id: 2,
    name: 'Le Marais Boutique Hotel',
    location: 'Париж, Франция',
    price: 12000,
    rating: 4.9,
    amenities: ['Завтрак', 'Wi-Fi', 'Парковка'],
    image: 'https://cdn.poehali.dev/projects/f1ef1181-39e4-4cde-a6c6-c068da88c16b/files/99f2df9d-9d17-47dd-b97c-67a8b9bfd5bf.jpg'
  },
  {
    id: 3,
    name: 'Alpine Summit Lodge',
    location: 'Швейцарские Альпы',
    price: 18000,
    rating: 4.8,
    amenities: ['Лыжи', 'Спа', 'Ресторан', 'Камин'],
    image: 'https://cdn.poehali.dev/projects/f1ef1181-39e4-4cde-a6c6-c068da88c16b/files/7e909f1e-cb49-4228-a342-fd7e3fb846fc.jpg'
  }
];

const reviews = [
  {
    id: 1,
    author: 'Анна Петрова',
    rating: 5,
    destination: 'Мальдивы',
    text: 'Незабываемый отдых! Отель превзошел все ожидания, сервис на высшем уровне.',
    date: '15 ноября 2024'
  },
  {
    id: 2,
    author: 'Дмитрий Соколов',
    rating: 5,
    destination: 'Париж',
    text: 'Великолепная организация тура. Увидели все главные достопримечательности.',
    date: '8 ноября 2024'
  },
  {
    id: 3,
    author: 'Мария Иванова',
    rating: 4,
    destination: 'Альпы',
    text: 'Отличный горнолыжный курорт, прекрасные склоны и уютный отель.',
    date: '1 ноября 2024'
  }
];

const myBookings = [
  {
    id: 1,
    destination: 'Мальдивы',
    dates: '15.01.2025 - 22.01.2025',
    status: 'Подтверждено',
    price: 120000,
    hotel: 'Grand Paradise Resort'
  },
  {
    id: 2,
    destination: 'Париж',
    dates: '20.02.2025 - 25.02.2025',
    status: 'Ожидает оплаты',
    price: 65000,
    hotel: 'Le Marais Boutique Hotel'
  }
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         dest.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || dest.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBooking = (itemName: string) => {
    toast({
      title: "Заявка отправлена!",
      description: `Менеджер свяжется с вами для подтверждения бронирования "${itemName}"`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/30 to-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Palmtree" className="text-primary" size={28} />
            <span className="text-2xl font-bold text-primary">Путешествуй.tour</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Button variant="ghost" className="font-medium">Главная</Button>
            <Button variant="ghost" className="font-medium">Каталог</Button>
            <Button variant="ghost" className="font-medium">Отели</Button>
            <Button variant="ghost" className="font-medium">Контакты</Button>
          </nav>
          <Button className="gap-2">
            <Icon name="User" size={18} />
            Войти
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-secondary text-secondary-foreground">Путешествия мечты</Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Откройте мир с <span className="text-primary">Путешествуй.tour</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Тысячи туристических направлений, удобное бронирование отелей и персональный сервис для незабываемых путешествий
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Icon name="Search" size={20} />
                  Найти тур
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="Phone" size={20} />
                  Консультация
                </Button>
              </div>
              <div className="flex gap-6 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Направлений</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">1000+</div>
                  <div className="text-sm text-muted-foreground">Отелей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/f1ef1181-39e4-4cde-a6c6-c068da88c16b/files/f97e82e7-a4d9-4552-841a-af5844a49568.jpg" 
                alt="Tropical paradise" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <Tabs defaultValue="tours" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Что вас интересует?</h2>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="tours">Туры</TabsTrigger>
                <TabsTrigger value="hotels">Отели</TabsTrigger>
                <TabsTrigger value="profile">Личный кабинет</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="tours" className="space-y-8 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                  <Icon name="Search" className="absolute left-3 top-3 text-muted-foreground" size={20} />
                  <Input
                    placeholder="Поиск направления..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Button 
                    variant={selectedCategory === 'all' ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory('all')}
                  >
                    Все
                  </Button>
                  <Button 
                    variant={selectedCategory === 'Пляж' ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory('Пляж')}
                  >
                    Пляж
                  </Button>
                  <Button 
                    variant={selectedCategory === 'Экскурсии' ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory('Экскурсии')}
                  >
                    Экскурсии
                  </Button>
                  <Button 
                    variant={selectedCategory === 'Горы' ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory('Горы')}
                  >
                    Горы
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map((dest) => (
                  <Card key={dest.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                      <Badge className="absolute top-4 right-4 bg-secondary">{dest.category}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {dest.name}
                        <div className="flex items-center gap-1 text-sm font-normal">
                          <Icon name="Star" size={16} className="fill-primary text-primary" />
                          <span>{dest.rating}</span>
                        </div>
                      </CardTitle>
                      <CardDescription>{dest.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Icon name="Calendar" size={16} />
                          <span className="text-sm">{dest.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Icon name="MessageCircle" size={16} />
                          <span>{dest.reviews}</span>
                        </div>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-primary">
                          {dest.price.toLocaleString('ru-RU')} ₽
                        </span>
                        <span className="text-sm text-muted-foreground">/ чел</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full gap-2" onClick={() => handleBooking(dest.name)}>
                        <Icon name="ShoppingCart" size={18} />
                        Забронировать
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hotels" className="space-y-8 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-4">
                <Input placeholder="Город или отель..." className="flex-1" />
                <Select>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Количество гостей" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 гость</SelectItem>
                    <SelectItem value="2">2 гостя</SelectItem>
                    <SelectItem value="3">3 гостя</SelectItem>
                    <SelectItem value="4">4+ гостей</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="gap-2">
                  <Icon name="Search" size={18} />
                  Найти
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hotels.map((hotel) => (
                  <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="truncate">{hotel.name}</span>
                        <div className="flex items-center gap-1 text-sm font-normal">
                          <Icon name="Star" size={16} className="fill-primary text-primary" />
                          <span>{hotel.rating}</span>
                        </div>
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <Icon name="MapPin" size={14} />
                        {hotel.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.map((amenity) => (
                          <Badge key={amenity} variant="secondary">{amenity}</Badge>
                        ))}
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-secondary">
                          {hotel.price.toLocaleString('ru-RU')} ₽
                        </span>
                        <span className="text-sm text-muted-foreground">/ ночь</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full gap-2" variant="secondary" onClick={() => handleBooking(hotel.name)}>
                        <Icon name="Hotel" size={18} />
                        Забронировать
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="profile" className="space-y-8 animate-fade-in">
              <div className="grid lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 space-y-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Ticket" className="text-primary" />
                      Мои заявки
                    </CardTitle>
                    <CardDescription>История бронирований и текущие поездки</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {myBookings.map((booking) => (
                      <div key={booking.id} className="border rounded-lg p-4 space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold text-lg">{booking.destination}</h3>
                            <p className="text-sm text-muted-foreground">{booking.hotel}</p>
                          </div>
                          <Badge variant={booking.status === 'Подтверждено' ? 'default' : 'secondary'}>
                            {booking.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Icon name="Calendar" size={16} />
                            {booking.dates}
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="DollarSign" size={16} />
                            {booking.price.toLocaleString('ru-RU')} ₽
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">Детали</Button>
                          {booking.status === 'Ожидает оплаты' && (
                            <Button size="sm" className="gap-1">
                              <Icon name="CreditCard" size={14} />
                              Оплатить
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="User" className="text-primary" />
                      Профиль
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="bg-primary text-primary-foreground text-xl">ИП</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">Иван Петров</div>
                        <div className="text-sm text-muted-foreground">ivan@example.com</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start gap-2">
                        <Icon name="Settings" size={18} />
                        Настройки
                      </Button>
                      <Button variant="outline" className="w-full justify-start gap-2">
                        <Icon name="Heart" size={18} />
                        Избранное
                      </Button>
                      <Button variant="outline" className="w-full justify-start gap-2">
                        <Icon name="Bell" size={18} />
                        Уведомления
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16">
        <div className="container space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Отзывы наших клиентов</h2>
            <p className="text-muted-foreground">Узнайте, что говорят путешественники о нашем сервисе</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="animate-slide-up">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-secondary text-secondary-foreground">
                          {review.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">{review.author}</CardTitle>
                        <CardDescription className="text-xs">{review.date}</CardDescription>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="mb-3">{review.destination}</Badge>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="gap-2">
                  <Icon name="MessageSquarePlus" size={20} />
                  Оставить отзыв
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Оставьте свой отзыв</DialogTitle>
                  <DialogDescription>Поделитесь впечатлениями о поездке</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Направление</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите направление" />
                      </SelectTrigger>
                      <SelectContent>
                        {destinations.map(dest => (
                          <SelectItem key={dest.id} value={dest.name}>{dest.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Ваш отзыв</Label>
                    <Textarea placeholder="Расскажите о своем опыте..." />
                  </div>
                  <Button className="w-full">Отправить отзыв</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Свяжитесь с нами</h2>
              <p className="text-white/90">
                Наши менеджеры помогут подобрать идеальное путешествие для вас
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={24} />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-white/90">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={24} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-white/90">info@puteshestvuy.tour</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={24} />
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div className="text-white/90">Пн-Вс: 9:00 - 21:00</div>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Ваше имя</Label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <Label>Телефон</Label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <Label>Сообщение</Label>
                  <Textarea placeholder="Расскажите, куда хотите поехать..." />
                </div>
                <Button className="w-full gap-2" onClick={() => handleBooking('консультацию')}>
                  <Icon name="Send" size={18} />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Palmtree" className="text-primary" size={24} />
              <span className="font-bold text-lg">Путешествуй.tour</span>
            </div>
            <div className="text-sm text-muted-foreground text-center">
              © 2024 Путешествуй.tour. Все права защищены.
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
