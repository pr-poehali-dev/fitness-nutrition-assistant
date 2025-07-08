import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactMethods = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      description: "Пн-Пт: 9:00-21:00, Сб: 10:00-18:00",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "vika@fitness.ru",
      description: "Отвечу в течение 24 часов",
    },
    {
      icon: "MessageCircle",
      title: "Telegram",
      value: "@vika_fitness",
      description: "Быстрая связь и консультации",
    },
    {
      icon: "Instagram",
      title: "Instagram",
      value: "@vika_fitness_coach",
      description: "Ежедневные советы и мотивация",
    },
  ];

  const faq = [
    {
      question: "Сколько длится одна тренировка?",
      answer:
        "Продолжительность тренировки обычно составляет 60-90 минут, в зависимости от программы и ваших целей.",
    },
    {
      question: "Нужно ли специальное оборудование?",
      answer:
        "Для домашних тренировок минимум оборудования. В зале есть все необходимое для эффективных занятий.",
    },
    {
      question: "Как быстро будут видны результаты?",
      answer:
        "Первые результаты обычно заметны через 2-3 недели регулярных тренировок и правильного питания.",
    },
    {
      question: "Можно ли заниматься онлайн?",
      answer:
        "Да, я провожу онлайн-тренировки и консультации. Это удобно для тех, кто не может приехать в зал.",
    },
  ];

  const workingHours = [
    { day: "Понедельник", hours: "9:00 - 21:00" },
    { day: "Вторник", hours: "9:00 - 21:00" },
    { day: "Среда", hours: "9:00 - 21:00" },
    { day: "Четверг", hours: "9:00 - 21:00" },
    { day: "Пятница", hours: "9:00 - 21:00" },
    { day: "Суббота", hours: "10:00 - 18:00" },
    { day: "Воскресенье", hours: "Выходной" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Свяжитесь со мной
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Готова ответить на все ваши вопросы и помочь начать путь к здоровью
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Имя</Label>
                      <Input id="firstName" placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Фамилия</Label>
                      <Input id="lastName" placeholder="Ваша фамилия" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Интересующая услуга</Label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Выберите услугу</option>
                      <option value="training">Персональные тренировки</option>
                      <option value="nutrition">Консультация по питанию</option>
                      <option value="program">Составление программы</option>
                      <option value="online">Онлайн-тренировки</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о своих целях и вопросах..."
                      className="min-h-32"
                    />
                  </div>

                  <Button size="lg" className="w-full">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        <Icon
                          name={method.icon as any}
                          className="text-primary"
                          size={24}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{method.title}</h3>
                        <p className="text-primary font-medium">
                          {method.value}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Working Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" className="mr-2" size={24} />
                  Часы работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {workingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm">{schedule.day}</span>
                      <span
                        className={`text-sm font-medium ${
                          schedule.hours === "Выходной"
                            ? "text-gray-500"
                            : "text-primary"
                        }`}
                      >
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MapPin" className="mr-2" size={24} />
                  Локация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Фитнес-центр "Энергия"
                  <br />
                  ул. Спортивная, 25
                  <br />
                  Москва, 125040
                </p>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <Icon name="Map" className="text-gray-400" size={48} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Часто задаваемые вопросы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faq.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Свяжитесь со мной удобным способом и получите бесплатную
            консультацию
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-primary font-semibold"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать в Telegram
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
