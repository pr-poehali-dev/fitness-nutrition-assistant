import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Consultations = () => {
  const consultationTypes = [
    {
      title: "Анализ питания",
      duration: "60 минут",
      price: "3,000 ₽",
      description:
        "Детальный анализ вашего рациона с рекомендациями по улучшению",
      features: [
        "Анализ текущего рациона",
        "Выявление недостатков",
        "Рекомендации по корректировке",
        "План питания на неделю",
      ],
      icon: "Apple",
    },
    {
      title: "Составление рациона",
      duration: "90 минут",
      price: "4,500 ₽",
      description:
        "Индивидуальный план питания на основе ваших целей и предпочтений",
      features: [
        "Персональный план питания",
        "Список продуктов",
        "Рецепты блюд",
        "Режим питания",
      ],
      icon: "BookOpen",
      popular: true,
    },
    {
      title: "Коррекция веса",
      duration: "120 минут",
      price: "6,000 ₽",
      description:
        "Комплексная программа для здорового снижения или набора веса",
      features: [
        "Расчет калорийности",
        "Соотношение БЖУ",
        "Режим приема пищи",
        "Контроль прогресса",
      ],
      icon: "Target",
    },
  ];

  const nutritionServices = [
    { name: "Расчет калорий", icon: "Calculator" },
    { name: "Составление меню", icon: "ChefHat" },
    { name: "Анализ состава тела", icon: "Scale" },
    { name: "Спортивное питание", icon: "Pill" },
    { name: "Детокс программы", icon: "Leaf" },
    { name: "Пищевые добавки", icon: "Beaker" },
  ];

  const process = [
    {
      step: "1",
      title: "Заявка",
      description: "Оставьте заявку на консультацию",
    },
    {
      step: "2",
      title: "Анкета",
      description: "Заполните анкету о здоровье и целях",
    },
    {
      step: "3",
      title: "Консультация",
      description: "Проведем встречу онлайн или офлайн",
    },
    {
      step: "4",
      title: "План",
      description: "Получите персональный план питания",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Консультации по питанию
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Профессиональная помощь нутрициолога для достижения ваших целей
          </p>
        </div>
      </section>

      {/* Consultation Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Виды консультаций
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий формат консультации для решения ваших задач
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((consultation, index) => (
              <Card
                key={index}
                className={`relative ${consultation.popular ? "border-primary border-2" : ""}`}
              >
                {consultation.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary">Популярно</Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Icon
                        name={consultation.icon as any}
                        className="text-primary"
                        size={24}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        {consultation.title}
                      </CardTitle>
                      <p className="text-sm text-gray-500">
                        {consultation.duration}
                      </p>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {consultation.price}
                  </div>
                  <p className="text-gray-600">{consultation.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {consultation.features.map((feature, featureIndex) => (
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
                  <Button
                    className="w-full"
                    variant={consultation.popular ? "default" : "outline"}
                  >
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Дополнительные услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексный подход к здоровому питанию
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {nutritionServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon
                      name={service.icon as any}
                      className="text-primary"
                      size={24}
                    />
                  </div>
                  <h3 className="font-semibold text-sm">{service.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Как проходит консультация
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Простой и понятный процесс работы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Начните путь к здоровому питанию
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Запишитесь на консультацию и получите персональные рекомендации
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-primary font-semibold"
          >
            <Icon name="Calendar" className="mr-2" size={20} />
            Записаться на консультацию
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultations;
