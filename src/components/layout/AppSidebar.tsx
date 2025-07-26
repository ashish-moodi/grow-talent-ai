import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  FileText,
  Briefcase,
  User,
  MessageSquare,
  Settings,
  Search,
  BarChart3,
  Users,
  Building,
  Zap
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const mainNavItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Resume Builder", url: "/builder", icon: FileText },
  { title: "Jobs", url: "/jobs", icon: Briefcase },
  { title: "Profile", url: "/profile", icon: User },
];

const networkingItems = [
  { title: "Connections", url: "/connections", icon: Users },
  { title: "Messages", url: "/messages", icon: MessageSquare },
  { title: "Search People", url: "/search", icon: Search },
];

const recruiterItems = [
  { title: "Recruiter Dashboard", url: "/recruiter", icon: Building },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path || currentPath.startsWith(path + "/");
  
  const getNavClass = (path: string) =>
    isActive(path) 
      ? "bg-primary/10 text-primary border-r-2 border-primary font-medium" 
      : "text-luxury-muted hover:text-foreground hover:bg-muted/50";

  return (
    <Sidebar className="border-r bg-card shadow-luxury transition-luxury">{/* Remove dynamic width */}
      <SidebarContent className="p-4">
        {/* Logo */}
        <div className={`flex items-center mb-8 ${collapsed ? "justify-center" : "justify-start"}`}>
          <div className="flex items-center space-x-2">
            <div className="rounded-lg bg-gradient-luxury p-2">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className={`font-bold text-xl bg-gradient-luxury bg-clip-text text-transparent transition-opacity duration-200 ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}`}>
              CareerAI
            </span>
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className={`text-luxury-muted text-sm font-medium transition-opacity duration-200 ${collapsed ? "opacity-0" : "opacity-100"}`}>
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="transition-luxury">
                    <NavLink to={item.url} className={getNavClass(item.url)}>
                      <item.icon className="h-5 w-5" />
                      <span className={`ml-3 transition-opacity duration-200 ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}`}>
                        {item.title}
                      </span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Networking */}
        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className={`text-luxury-muted text-sm font-medium transition-opacity duration-200 ${collapsed ? "opacity-0" : "opacity-100"}`}>
            Networking
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {networkingItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="transition-luxury">
                    <NavLink to={item.url} className={getNavClass(item.url)}>
                      <item.icon className="h-5 w-5" />
                      <span className={`ml-3 transition-opacity duration-200 ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}`}>
                        {item.title}
                      </span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Recruiter Section */}
        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className={`text-luxury-muted text-sm font-medium transition-opacity duration-200 ${collapsed ? "opacity-0" : "opacity-100"}`}>
            Recruiter
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {recruiterItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="transition-luxury">
                    <NavLink to={item.url} className={getNavClass(item.url)}>
                      <item.icon className="h-5 w-5" />
                      <span className={`ml-3 transition-opacity duration-200 ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}`}>
                        {item.title}
                      </span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings */}
        <SidebarGroup className="mt-8">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="transition-luxury">
                  <NavLink to="/settings" className={getNavClass("/settings")}>
                    <Settings className="h-5 w-5" />
                    <span className={`ml-3 transition-opacity duration-200 ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}`}>
                      Settings
                    </span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}