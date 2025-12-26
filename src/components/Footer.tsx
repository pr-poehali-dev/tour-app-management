import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from '@/hooks/use-toast';

export default function Footer() {
  const handleBooking = (itemName: string) => {
    toast({
      title: "Заявка отправлена!",
      description: `Менеджер свяжется с вами для подтверждения бронирования "${itemName}"`,
    });
  };

  return (
    <>
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
    </>
  );
}
