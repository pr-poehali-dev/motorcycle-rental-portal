
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarFooter,
} from "@/components/ui/sidebar";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen relative">
        <Sidebar>
          <SidebarHeader>
            <Link to="/" className="flex items-center gap-2 px-2">
              <Icon name="Bike" size={24} className="text-primary" />
              <span className="font-bold text-lg">МотоПрокат</span>
            </Link>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/admin")}
                  tooltip="Панель управления"
                >
                  <Link to="/admin">
                    <Icon name="LayoutDashboard" />
                    <span>Панель управления</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/admin/motorcycles")}
                  tooltip="Мотоциклы"
                >
                  <Link to="/admin/motorcycles">
                    <Icon name="Bike" />
                    <span>Мотоциклы</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/admin/orders")}
                  tooltip="Заказы"
                >
                  <Link to="/admin/orders">
                    <Icon name="ShoppingBag" />
                    <span>Заказы</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/admin/users")}
                  tooltip="Пользователи"
                >
                  <Link to="/admin/users">
                    <Icon name="Users" />
                    <span>Пользователи</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive("/admin/settings")}
                  tooltip="Настройки"
                >
                  <Link to="/admin/settings">
                    <Icon name="Settings" />
                    <span>Настройки</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          
          <SidebarFooter>
            <div className="flex items-center gap-2 p-2">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?&w=128&h=128&dpr=2&q=80" />
                <AvatarFallback>АД</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="text-sm font-medium">Администратор</div>
                <div className="text-xs text-muted-foreground">admin@motoprokat.ru</div>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset>
          <div className="flex items-center border-b p-4">
            <SidebarTrigger />
            <h1 className="font-semibold ml-4">Панель администратора</h1>
            <div className="ml-auto">
              <Button variant="outline" size="sm" asChild>
                <Link to="/">Вернуться на сайт</Link>
              </Button>
            </div>
          </div>
          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
