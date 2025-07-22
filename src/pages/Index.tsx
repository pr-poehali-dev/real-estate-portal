import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      title: "Вторичная недвижимость",
      description: "Профессиональная помощь в покупке и продаже квартир на вторичном рынке",
      icon: "Home",
      image: "/img/bfa479ef-931a-44e4-a606-66fc4b42e990.jpg"
    },
    {
      title: "Коммерческая недвижимость",
      description: "Инвестиционные объекты, офисы, торговые площади для вашего бизнеса",
      icon: "Building2",
      image: "/img/289d0740-3062-4e4b-a59e-49a43fc9fc86.jpg"
    },
    {
      title: "Загородная недвижимость",
      description: "Дома, коттеджи, участки для комфортной жизни за городом",
      icon: "Trees",
      image: "/img/7fd643b3-3305-42e5-8607-8851ca13db04.jpg"
    },
    {
      title: "Новостройки",
      description: "Квартиры в новых жилых комплексах с современной инфраструктурой",
      icon: "Building",
      image: "/img/bfa479ef-931a-44e4-a606-66fc4b42e990.jpg"
    },
    {
      title: "Юридическое сопровождение",
      description: "Полное правовое обеспечение сделок с недвижимостью",
      icon: "Scale",
      image: "/img/289d0740-3062-4e4b-a59e-49a43fc9fc86.jpg"
    },
    {
      title: "Ипотечное кредитование",
      description: "Помощь в получении ипотеки на выгодных условиях",
      icon: "CreditCard",
      image: "/img/7fd643b3-3305-42e5-8607-8851ca13db04.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <Icon name="Building2" size={16} className="text-white" />
              </div>
              <h1 className="font-display text-2xl font-bold text-luxury-black">Метры Москвы</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-luxury-black hover:text-luxury-gold transition-colors">Услуги</a>
              <a href="#about" className="text-luxury-black hover:text-luxury-gold transition-colors">О нас</a>
              <a href="#contact" className="text-luxury-black hover:text-luxury-gold transition-colors">Контакты</a>
              <Button className="bg-luxury-gold hover:bg-yellow-500 text-white">
                Консультация
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-gradient-to-br from-luxury-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/bfa479ef-931a-44e4-a606-66fc4b42e990.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Премиальная<br />
              <span className="text-luxury-gold">Недвижимость</span>
            </h2>
            <p className="font-body text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Эксклюзивные объекты недвижимости для статусных клиентов. 
              Профессиональное сопровождение сделок любой сложности.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-luxury-gold hover:bg-yellow-500 text-white px-8 py-4 text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white px-8 py-4 text-lg">
                <Icon name="Search" size={20} className="mr-2" />
                Подобрать объект
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="font-display text-5xl font-bold text-luxury-black mb-6">
              Мои <span className="text-luxury-gold">Услуги</span>
            </h3>
            <p className="font-body text-xl text-luxury-gray max-w-3xl mx-auto">
              Полный спектр услуг в сфере недвижимости для достижения ваших целей
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-luxury-black/40 group-hover:bg-luxury-black/20 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <Icon name={service.icon as any} size={24} className="text-white" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="font-display text-xl text-luxury-black group-hover:text-luxury-gold transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-body text-luxury-gray text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="mt-4 text-luxury-gold hover:text-luxury-black hover:bg-luxury-gold/10 p-0">
                    Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-luxury-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Успешных сделок" },
              { number: "15", label: "Лет опыта" },
              { number: "98%", label: "Довольных клиентов" },
              { number: "24/7", label: "Поддержка" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-luxury-gold mb-2">
                  {stat.number}
                </div>
                <div className="font-body text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="font-display text-5xl font-bold text-luxury-black mb-6">
                Свяжитесь <span className="text-luxury-gold">с нами</span>
              </h3>
              <p className="font-body text-xl text-luxury-gray">
                Получите персональную консультацию от эксперта по недвижимости
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="font-display text-2xl text-luxury-black">
                      Оставить заявку
                    </CardTitle>
                    <CardDescription className="font-body text-luxury-gray">
                      Мы свяжемся с вами в течение 15 минут
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input placeholder="Ваше имя" className="border-gray-200 focus:border-luxury-gold" />
                    <Input placeholder="Телефон" className="border-gray-200 focus:border-luxury-gold" />
                    <Input placeholder="Email" className="border-gray-200 focus:border-luxury-gold" />
                    <Textarea 
                      placeholder="Расскажите о ваших потребностях" 
                      className="border-gray-200 focus:border-luxury-gold min-h-[100px]"
                    />
                    <Button className="w-full bg-luxury-gold hover:bg-yellow-500 text-white">
                      Отправить заявку
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="font-display text-2xl font-bold text-luxury-black mb-6">
                    Контактная информация
                  </h4>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-body font-semibold text-luxury-black">Телефон</div>
                        <div className="font-body text-luxury-gray">+7 (495) 123-45-67</div>
                        <div className="font-body text-luxury-gray">+7 (905) 123-45-67</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-body font-semibold text-luxury-black">Email</div>
                        <div className="font-body text-luxury-gray">info@blatafy-realestate.ru</div>
                        <div className="font-body text-luxury-gray">sales@blatafy-realestate.ru</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-body font-semibold text-luxury-black">Офис</div>
                        <div className="font-body text-luxury-gray">г. Москва, ул. Тверская, д. 15</div>
                        <div className="font-body text-luxury-gray">БЦ "Премиум Плаза", офис 301</div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Clock" size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-body font-semibold text-luxury-black">Режим работы</div>
                        <div className="font-body text-luxury-gray">Пн-Пт: 9:00 - 21:00</div>
                        <div className="font-body text-luxury-gray">Сб-Вс: 10:00 - 18:00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <Icon name="Building2" size={16} className="text-white" />
              </div>
              <h1 className="font-display text-xl font-bold text-white">BLATAFY REALESTION</h1>
            </div>
            
            <div className="text-center md:text-right">
              <p className="font-body text-gray-400 text-sm">
                © 2024 Blatafy Realestion. Все права защищены.
              </p>
              <p className="font-body text-gray-500 text-xs mt-1">
                Лицензия на осуществление брокерской деятельности № 12345
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}