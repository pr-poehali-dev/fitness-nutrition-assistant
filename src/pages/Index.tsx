import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Dumbbell",
      title: "Персональные тренировки",
      description:
        "Индивидуальные программы тренировок с учетом ваших целей и возможностей",
    },
    {
      icon: "Apple",
      title: "Консультации по питанию",
      description:
        "Составление рационов питания и поддержка на пути к здоровому образу жизни",
    },
    {
      icon: "Target",
      title: "Постановка целей",
      description:
        "Помогу определить реалистичные цели и создать план их достижения",
    },
  ];

  const stats = [
    { number: "200+", label: "Довольных клиентов" },
    { number: "5", label: "Лет опыта" },
    { number: "95%", label: "Достигают результат" },
    { number: "24/7", label: "Поддержка" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-accent text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Достигни своих целей с
                <span className="block text-yellow-300">Викой Фитнес</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Персональный тренер и нутрициолог. Помогаю людям
                трансформировать свое тело и образ жизни
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-primary font-semibold"
                >
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на консультацию
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть программы
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/img/5d044fc9-4647-46e2-a40a-14f18b9b569d.jpg"
                  alt="Вика - персональный тренер"
                  className="rounded-lg shadow-2xl max-w-md w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-white text-primary p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm">лет опыта</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Мои услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексный подход к здоровью и фитнесу для достижения ваших целей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={service.icon as any}
                      className="text-primary"
                      size={32}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Готовы начать свой путь к здоровью?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Запишитесь на бесплатную консультацию и получите персональный план
            тренировок
          </p>
          <Button size="lg" className="text-lg px-8 py-4">
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Записаться сейчас
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
