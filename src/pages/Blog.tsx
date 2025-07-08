import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Blog = () => {
  const articles = [
    {
      title: "10 лучших упражнений для домашней тренировки",
      category: "Тренировки",
      date: "15 января 2024",
      readTime: "5 мин",
      excerpt:
        "Эффективные упражнения, которые можно выполнять дома без дополнительного оборудования.",
      featured: true,
    },
    {
      title: "Как правильно составить план питания для похудения",
      category: "Питание",
      date: "12 января 2024",
      readTime: "8 мин",
      excerpt:
        "Пошаговое руководство по созданию сбалансированного рациона для снижения веса.",
      featured: false,
    },
    {
      title: "Важность восстановления после тренировок",
      category: "Восстановление",
      date: "10 января 2024",
      readTime: "6 мин",
      excerpt:
        "Почему отдых так же важен, как и сама тренировка, и как правильно восстанавливаться.",
      featured: false,
    },
    {
      title: "Мифы о спортивном питании",
      category: "Питание",
      date: "8 января 2024",
      readTime: "7 мин",
      excerpt:
        "Разбираем самые распространенные заблуждения о спортивных добавках и правильном питании.",
      featured: false,
    },
    {
      title: "Кардио или силовые: что выбрать для похудения",
      category: "Тренировки",
      date: "5 января 2024",
      readTime: "6 мин",
      excerpt:
        "Сравниваем эффективность разных видов тренировок для снижения веса.",
      featured: false,
    },
    {
      title: "Психология мотивации в спорте",
      category: "Психология",
      date: "3 января 2024",
      readTime: "9 мин",
      excerpt:
        "Как найти и поддерживать мотивацию на пути к здоровому образу жизни.",
      featured: false,
    },
  ];

  const categories = [
    { name: "Все статьи", count: 24, active: true },
    { name: "Тренировки", count: 12, active: false },
    { name: "Питание", count: 8, active: false },
    { name: "Восстановление", count: 3, active: false },
    { name: "Психология", count: 1, active: false },
  ];

  const tips = [
    {
      icon: "Droplets",
      title: "Пейте больше воды",
      text: "Норма 30-40 мл на кг веса",
    },
    {
      icon: "Moon",
      title: "Качественный сон",
      text: "7-9 часов для восстановления",
    },
    {
      icon: "Calendar",
      title: "Регулярность",
      text: "Лучше каждый день по 20 минут",
    },
    {
      icon: "Heart",
      title: "Слушайте тело",
      text: "Отдых тоже важен",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Блог о фитнесе и здоровье
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Полезные статьи, советы и рекомендации от профессионального тренера
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={category.active ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-white"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {articles.map((article, index) => (
                <Card
                  key={index}
                  className={`${article.featured ? "border-primary" : ""}`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{article.category}</Badge>
                      {article.featured && (
                        <Badge className="bg-primary">Рекомендуем</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl hover:text-primary cursor-pointer">
                      {article.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <Icon name="Calendar" size={16} className="mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Icon name="Clock" size={16} className="mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <Button variant="outline" size="sm">
                      Читать далее
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" variant="outline">
                Показать больше статей
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Lightbulb" className="mr-2" size={24} />
                  Быстрые советы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Icon
                          name={tip.icon as any}
                          className="text-primary"
                          size={20}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{tip.title}</h4>
                        <p className="text-xs text-gray-600">{tip.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Mail" className="mr-2" size={24} />
                  Рассылка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Получайте новые статьи и советы прямо на почту
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Ваш email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <Button size="sm" className="w-full">
                    Подписаться
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Popular Articles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="TrendingUp" className="mr-2" size={24} />
                  Популярные статьи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {articles.slice(0, 3).map((article, index) => (
                    <div key={index} className="text-sm">
                      <h4 className="font-semibold hover:text-primary cursor-pointer mb-1">
                        {article.title}
                      </h4>
                      <p className="text-xs text-gray-500">{article.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Нужна персональная консультация?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Получите индивидуальные рекомендации от профессионального тренера
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-primary font-semibold"
          >
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Связаться со мной
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
