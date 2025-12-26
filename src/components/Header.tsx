import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
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
  );
}
