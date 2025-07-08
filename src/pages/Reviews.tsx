import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      name: "Анна Петрова",
      age: 28,
      program: "Похудение",
      rating: 5,
      result: "-12 кг за 3 месяца",
      text: "Вика помогла мне не только похудеть, но и полностью изменить отношение к питанию. Сейчас я чувствую себя гораздо лучше и увереннее!",
      image: "/api/placeholder/60/60",
    },
    {
      name: "Дмитрий Соколов",
      age: 35,
      program: "Набор массы",
      rating: 5,
      result: "+8 кг мышц за 4 месяца",
      text: "Отличный специалист! Программа тренировок и питания была составлена идеально под мои цели. Результат превзошел все ожидания.",
      image: "/api/placeholder/60/60",
    },
    {
      name: "Мария Волкова",
      age: 42,
      program: "Здоровое питание",
      rating: 5,
      result: "Улучшение самочувствия",
      text: "Благодаря консультациям Вики я научилась правильно питаться. Прошли проблемы с пищеварением, появилась энергия.",
      image: "/api/placeholder/60/60",
    },
    {
      name: "Алексей Морозов",
      age: 29,
      program: "Функциональный тренинг",
      rating: 5,
      result: "Улучшение физформы",
      text: "Профессиональный подход, индивидуальная программа и постоянная поддержка. Рекомендую всем!",
      image: "/api/placeholder/60/60",
    },
    {
      name: "Елена Кузнецова",
      age: 33,
      program: "Реабилитация",
      rating: 5,
      result: "Восстановление после травмы",
      text: "Вика помогла мне вернуться к тренировкам после травмы спины. Очень внимательный и знающий тренер.",
      image: "/api/placeholder/60/60",
    },
    {
      name: "Игорь Лебедев",
      age: 26,
      program: "Подготовка к соревнованиям",
      rating: 5,
      result: "1 место на соревнованиях",
      text: "Благодаря Вике я занял первое место на региональных соревнованиях по бодибилдингу. Профессионал своего дела!",
      image: "/api/placeholder/60/60",
    },
  ];

  const stats = [
    { number: "200+", label: "Успешных трансформаций" },
    { number: "95%", label: "Клиентов достигают целей" },
    { number: "4.9", label: "Средняя оценка" },
    { number: "100%", label: "Рекомендуют друзьям" },
  ];

  const beforeAfter = [
    {
      name: "Татьяна",
      program: "Похудение и тонус",
      duration: "4 месяца",
      result: "-15 кг",
    },
    {
      name: "Андрей",
      program: "Набор массы",
      duration: "6 месяцев",
      result: "+12 кг",
    },
    {
      name: "Светлана",
      program: "Функциональный тренинг",
      duration: "3 месяца",
      result: "Улучшение силы",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Отзывы клиентов
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Реальные истории успеха и трансформации наших клиентов
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Что говорят клиенты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Честные отзывы о работе и результатах
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <Icon name="User" className="text-gray-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.age} лет</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2">
                      {review.program}
                    </Badge>
                    <div className="flex items-center mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          className="text-yellow-500 fill-current"
                          size={16}
                        />
                      ))}
                    </div>
                    <div className="text-sm font-semibold text-primary">
                      {review.result}
                    </div>
                  </div>

                  <p className="text-gray-600 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Результаты трансформации
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Впечатляющие изменения наших клиентов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfter.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Image" className="text-gray-400" size={48} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{item.program}</p>
                  <p className="text-sm text-gray-600 mb-2">{item.duration}</p>
                  <div className="text-primary font-semibold">
                    {item.result}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Хотите стать следующим успешным клиентом?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к сотням довольных клиентов и начните свою
            трансформацию
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-primary font-semibold"
          >
            <Icon name="Rocket" className="mr-2" size={20} />
            Начать трансформацию
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
