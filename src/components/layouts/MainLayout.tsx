
import { ReactNode } from "react";
import Navbar from "@/components/ui/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3">МотоПрокат</h3>
              <p className="text-sm text-gray-300 max-w-xs">
                Прокат мотоциклов для любых мероприятий и путешествий с 2010 года
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Контакты</h4>
              <p className="text-sm text-gray-300">+7 (999) 123-45-67</p>
              <p className="text-sm text-gray-300">info@motoprokat.ru</p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-sm text-gray-400">
            © {new Date().getFullYear()} МотоПрокат. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
