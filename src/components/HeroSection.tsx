import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
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
  );
}
