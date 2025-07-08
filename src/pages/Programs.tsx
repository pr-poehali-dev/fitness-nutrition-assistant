import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Programs = () => {
  const programs = [
    {
      title: "Похудение и тонус",
      duration: "12 недель",
      level: "Начинающий",
      price: "15,000 ₽",
      description:
        "Комплексная программа для снижения веса и улучшения тонуса мышц",
      features: [
        "Индивидуальный план тренировок",
        "Программа питания",
        "Еженедельные консультации",
        "Поддержка 24/7",
      ],
      popular: true,
    },
    {
      title: "Набор мышечной массы",
      duration: "16 недель",
      level: "Средний",
      price: "20,000 ₽",
      description:
        "Программа для увеличения мышечной массы и силовых показателей",
      features: [
        "Силовые тренировки",
        "Спортивное питание",
        "Контроль прогресса",
        "Корректировка программы",
      ],
      popular: false,
    },
    {
      title: "Подготовка к соревнованиям",
      duration: "20 недель",
      level: "Профи",
      price: "30,000 ₽",
      description: "Профессиональная подготовка к фитнес-соревнованиям",
      features: [
        "Интенсивные тренировки",
        "Строгий план питания",
        "Позинг и подача",
        "Психологическая подготовка",
      ],
      popular: false,
    },
  ];

  const workoutTypes = [
    { name: "Силовые тренировки", icon: "Dumbbell" },
    { name: "Кардио", icon: "Heart" },
    { name: "Функциональный тренинг", icon: "Target" },
    { name: "Стретчинг", icon: "Smile" },
    { name: "HIIT", icon: "Zap" },
    { name: "Йога", icon: "Leaf" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Программы тренировок
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Выберите программу, которая подходит вашему уровню подготовки и
            целям
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className={`relative ${program.popular ? "border-primary border-2" : ""}`}
              >
                {program.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary">Популярно</Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <Badge variant="outline">{program.level}</Badge>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {program.price}
                  </div>
                  <p className="text-gray-600">{program.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Icon name="Clock" className="mr-2" size={16} />
                      {program.duration}
                    </div>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm"
                        >
                          <Icon
                            name="Check"
                            className="mr-2 text-green-500"
                            size={16}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className="w-full"
                    variant={program.popular ? "default" : "outline"}
                  >
                    Выбрать программу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workout Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Виды тренировок
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Разнообразные направления для достижения ваших целей
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {workoutTypes.map((type, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon
                      name={type.icon as any}
                      className="text-primary"
                      size={24}
                    />
                  </div>
                  <h3 className="font-semibold text-sm">{type.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Не знаете какую программу выбрать?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Запишитесь на консультацию и я помогу подобрать идеальную программу
            для вас
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-primary font-semibold"
          >
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Получить консультацию
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
