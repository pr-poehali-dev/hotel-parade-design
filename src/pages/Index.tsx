import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import RussiaMap from "@/components/RussiaMap";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  const rooms = [
    {
      title: "Стандарт",
      price: "от 4 500 ₽",
      image: "https://cdn.poehali.dev/projects/68ef16cf-8d97-4d5b-b7e3-74493903031d/files/986abc93-64fc-4dad-9243-cca78dcc8c11.jpg",
      features: ["2 гостя", "25 м²", "Wi-Fi", "Завтрак"]
    },
    {
      title: "Комфорт",
      price: "от 6 900 ₽",
      image: "https://cdn.poehali.dev/projects/68ef16cf-8d97-4d5b-b7e3-74493903031d/files/b255c746-6c0b-44c9-81d8-0b1e0f4e8fbf.jpg",
      features: ["2-3 гостя", "35 м²", "Wi-Fi", "Завтрак"]
    },
    {
      title: "Люкс",
      price: "от 12 000 ₽",
      image: "https://cdn.poehali.dev/projects/68ef16cf-8d97-4d5b-b7e3-74493903031d/files/b255c746-6c0b-44c9-81d8-0b1e0f4e8fbf.jpg",
      features: ["4 гостя", "55 м²", "Wi-Fi", "Завтрак"]
    }
  ];

  const features = [
    { icon: "Wifi", title: "Высокоскоростной Wi-Fi", desc: "Бесплатный интернет во всех номерах" },
    { icon: "Utensils", title: "Ресторан", desc: "Изысканная кухня и завтрак" },
    { icon: "Car", title: "Парковка", desc: "Бесплатная охраняемая парковка" },
    { icon: "Clock", title: "24/7 Ресепшн", desc: "Круглосуточное обслуживание" }
  ];

  const reviews = [
    { name: "Анна М.", text: "Великолепный отель! Чистота, комфорт и отличный сервис.", rating: 5 },
    { name: "Дмитрий К.", text: "Останавливаемся здесь каждый раз. Всегда на высоте!", rating: 5 },
    { name: "Елена П.", text: "Прекрасное расположение и внимательный персонал.", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">ПАРАД ОТЕЛЕЙ</div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#rooms" className="text-foreground hover:text-primary transition-colors">Номера</a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button onClick={() => setBookingOpen(!bookingOpen)} className="bg-accent hover:bg-accent/90">
            Забронировать
          </Button>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/68ef16cf-8d97-4d5b-b7e3-74493903031d/files/46874a5f-c3ca-4214-baf0-ead83f40a728.jpg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Ваш идеальный отдых
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Современный комфорт, безупречный сервис и незабываемые впечатления
          </p>
          <Button 
            size="lg" 
            onClick={() => setBookingOpen(!bookingOpen)}
            className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 animate-scale-in"
            style={{animationDelay: '0.4s'}}
          >
            <Icon name="Calendar" className="mr-2" size={20} />
            Забронировать номер
          </Button>
        </div>
      </section>

      <section id="rooms" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Наши номера</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выберите идеальный вариант для вашего отдыха</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="relative h-64 overflow-hidden">
                  <img src={room.image} alt={room.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full font-semibold">
                    {room.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{room.title}</h3>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {room.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-accent" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => setBookingOpen(!bookingOpen)}>
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Наша сеть по всей России</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выберите город на карте и узнайте о наших отелях</p>
          
          <RussiaMap />
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Наши преимущества</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Всё для вашего комфорта</p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center group animate-fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors duration-300">
                  <Icon name={feature.icon} size={32} className="text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Отзывы гостей</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Что говорят наши гости</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-shadow animate-fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-primary">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Контакты и бронирование</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Свяжитесь с нами любым удобным способом</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">info@parad-hotels.ru</p>
                </div>
              </div>
            </div>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Форма бронирования</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Мы свяжемся с вами в ближайшее время.'); }}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="date" 
                    placeholder="Дата заезда" 
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none"
                    required
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none">
                    <option>Стандарт</option>
                    <option>Комфорт</option>
                    <option>Люкс</option>
                  </select>
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold mb-4">ПАРАД ОТЕЛЕЙ</div>
          <p className="text-white/80 mb-6">Ваш идеальный отдых начинается здесь</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Twitter" size={24} />
            </a>
          </div>
          <p className="text-sm text-white/60">© 2024 Парад Отелей. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;