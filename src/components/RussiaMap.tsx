import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface City {
  name: string;
  x: number;
  y: number;
  hotels: string[];
  attractions: string[];
  description: string;
}

const cities: City[] = [
  {
    name: "Москва",
    x: 52,
    y: 45,
    hotels: ["Парад Отель Кремлёвский", "Парад Отель Арбат", "Парад Отель Сити"],
    attractions: ["Красная площадь", "Кремль", "Большой театр", "Парк Горького"],
    description: "Столица России с богатой историей и современной инфраструктурой"
  },
  {
    name: "Санкт-Петербург",
    x: 48,
    y: 25,
    hotels: ["Парад Отель Невский", "Парад Отель Эрмитаж", "Парад Отель Петроград"],
    attractions: ["Эрмитаж", "Петергоф", "Исаакиевский собор", "Дворцовая площадь"],
    description: "Культурная столица с уникальной архитектурой и музеями"
  },
  {
    name: "Казань",
    x: 62,
    y: 42,
    hotels: ["Парад Отель Кремль", "Парад Отель Булак"],
    attractions: ["Кремль Казани", "Мечеть Кул-Шариф", "Улица Баумана", "Храм всех религий"],
    description: "Город двух культур с удивительным сочетанием традиций"
  },
  {
    name: "Сочи",
    x: 54,
    y: 72,
    hotels: ["Парад Отель Олимпийский", "Парад Отель Ривьера", "Парад Отель Красная Поляна"],
    attractions: ["Олимпийский парк", "Роза Хутор", "Дендрарий", "Красная Поляна"],
    description: "Курортная жемчужина России на берегу Чёрного моря"
  },
  {
    name: "Екатеринбург",
    x: 72,
    y: 40,
    hotels: ["Парад Отель Центральный", "Парад Отель Исеть"],
    attractions: ["Храм на Крови", "Плотинка", "Ельцин Центр", "Невьянская башня"],
    description: "Столица Урала с уникальным промышленным наследием"
  },
  {
    name: "Владивосток",
    x: 95,
    y: 58,
    hotels: ["Парад Отель Золотой Рог", "Парад Отель Русский"],
    attractions: ["Золотой мост", "Остров Русский", "Токаревский маяк", "Набережная Цесаревича"],
    description: "Ворота на Дальний Восток с панорамным видом на бухту"
  },
  {
    name: "Иркутск",
    x: 82,
    y: 48,
    hotels: ["Парад Отель Байкал", "Парад Отель Ангара"],
    attractions: ["Озеро Байкал", "130-й квартал", "Нерпинарий", "Листвянка"],
    description: "Ворота к озеру Байкал - жемчужине Сибири"
  },
  {
    name: "Нижний Новгород",
    x: 58,
    y: 42,
    hotels: ["Парад Отель Стрелка", "Парад Отель Кремль"],
    attractions: ["Нижегородский Кремль", "Стрелка", "Чкаловская лестница", "Большая Покровская"],
    description: "Город слияния двух великих рек - Волги и Оки"
  }
];

const RussiaMap = () => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="relative w-full" style={{ paddingBottom: "50%" }}>
        <svg
          viewBox="0 0 100 60"
          className="absolute inset-0 w-full h-full"
          style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))" }}
        >
          <path
            d="M5,25 L15,20 L25,18 L35,20 L42,22 L45,25 L48,23 L55,22 L65,25 L72,28 L78,30 L85,32 L90,35 L93,40 L95,45 L93,50 L88,52 L82,50 L75,48 L68,50 L60,52 L52,55 L45,56 L38,55 L30,52 L22,50 L15,48 L10,45 L7,40 L5,35 L5,30 Z"
            fill="hsl(var(--primary))"
            fillOpacity="0.1"
            stroke="hsl(var(--primary))"
            strokeWidth="0.3"
            className="transition-all duration-300"
          />
          
          {cities.map((city, idx) => (
            <g key={city.name}>
              <circle
                cx={city.x}
                cy={city.y}
                r="1.2"
                fill="hsl(var(--accent))"
                opacity="0.3"
                className="animate-ripple"
                style={{ animationDelay: `${idx * 0.3}s` }}
              />
              <circle
                cx={city.x}
                cy={city.y}
                r={hoveredCity === city.name ? "1.5" : "1"}
                fill="hsl(var(--accent))"
                className="cursor-pointer transition-all duration-200 hover:opacity-100 animate-pulse-slow"
                opacity={hoveredCity === city.name ? "1" : "0.9"}
                onClick={() => setSelectedCity(city)}
                onMouseEnter={() => setHoveredCity(city.name)}
                onMouseLeave={() => setHoveredCity(null)}
                style={{ animationDelay: `${idx * 0.2}s` }}
              />
              <circle
                cx={city.x}
                cy={city.y}
                r="2.5"
                fill="transparent"
                className="cursor-pointer"
                onClick={() => setSelectedCity(city)}
                onMouseEnter={() => setHoveredCity(city.name)}
                onMouseLeave={() => setHoveredCity(null)}
              />
              {hoveredCity === city.name && (
                <text
                  x={city.x}
                  y={city.y - 2.5}
                  textAnchor="middle"
                  className="text-[2px] font-semibold fill-primary pointer-events-none"
                  style={{ fontSize: "2.5px" }}
                >
                  {city.name}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        {cities.map((city) => (
          <Button
            key={city.name}
            variant="outline"
            className="justify-start hover:bg-accent hover:text-white transition-colors"
            onClick={() => setSelectedCity(city)}
          >
            <Icon name="MapPin" size={16} className="mr-2" />
            {city.name}
          </Button>
        ))}
      </div>

      <Dialog open={!!selectedCity} onOpenChange={() => setSelectedCity(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedCity && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-primary flex items-center gap-3">
                  <Icon name="MapPin" size={28} className="text-accent" />
                  {selectedCity.name}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                <p className="text-muted-foreground text-lg">{selectedCity.description}</p>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Hotel" size={20} className="text-accent" />
                      Наши отели в городе
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {selectedCity.hotels.map((hotel, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                              <Icon name="Building2" size={20} className="text-accent" />
                            </div>
                            <span className="font-medium">{hotel}</span>
                          </div>
                          <Button size="sm" className="bg-accent hover:bg-accent/90">
                            Забронировать
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Camera" size={20} className="text-accent" />
                      Достопримечательности
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedCity.attractions.map((attraction, idx) => (
                        <Badge key={idx} variant="outline" className="justify-start p-3 text-sm hover:bg-primary hover:text-white transition-colors cursor-default">
                          <Icon name="Star" size={14} className="mr-2 text-accent" />
                          {attraction}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-accent hover:bg-accent/90">
                    <Icon name="Phone" size={18} className="mr-2" />
                    Позвонить
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Icon name="Mail" size={18} className="mr-2" />
                    Написать
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RussiaMap;