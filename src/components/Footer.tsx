import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Icon name="Zap" className="mr-2 text-primary" size={28} />
              <span className="text-xl font-bold">Вика Фитнес</span>
            </div>
            <p className="text-gray-400 mb-4">
              Персональный тренер и нутрициолог. Помогаю достичь ваших целей в
              фитнесе и здоровом питании.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Навигация
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/programs"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Программы
                </Link>
              </li>
              <li>
                <Link
                  to="/consultations"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Консультации
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Отзывы
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Блог
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Контакты
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Icon name="MapPin" size={16} className="mr-2" />
                Москва
              </li>
              <li className="flex items-center text-gray-300">
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (999) 123-45-67
              </li>
              <li className="flex items-center text-gray-300">
                <Icon name="Mail" size={16} className="mr-2" />
                vika@fitness.ru
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Вика Фитнес. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
