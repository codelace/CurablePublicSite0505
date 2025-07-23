
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Command, CommandInput, CommandList, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  CircleDot, 
  Settings
} from "lucide-react";

const navItems = [
  { title: "Home", url: "/home", icon: LayoutDashboard },
  { title: "About", url: "/about", icon: CircleDot },
  { title: "Whitepaper", url: "/whitepaper", icon: Settings },
  { title: "Tokenomics", url: "/tokenomics", icon: CircleDot },
  { title: "FAQ", url: "/faq", icon: CircleDot },
];

const CommandSidebar = () => {
  const location = useLocation();
  const [search, setSearch] = React.useState("");

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/09b91ead-c551-44c9-9287-08ac8adcacd4.png" 
            alt="CURABLE LABS" 
            className="h-8 w-auto" 
          />
          <div className="w-2 h-2 rounded-full bg-quantum-red animate-pulse-dot"></div>
        </Link>
        <Command className="rounded-lg border mt-4">
          <CommandInput
            placeholder="Search..."
            value={search}
            onValueChange={setSearch}
          />
          {search && (
            <CommandList>
              <CommandGroup heading="Pages">
                {navItems
                  .filter(item => 
                    item.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .map(item => (
                    <CommandItem key={item.url} onSelect={() => {
                      window.location.href = item.url;
                    }}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </CommandItem>
                  ))
                }
              </CommandGroup>
            </CommandList>
          )}
        </Command>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={isActive(item.url)}
                    tooltip={item.title}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Join Labs">
                  <Link to="/join" className="text-molecular-accent">
                    <CircleDot />
                    <span>Join Labs</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Novel Cure App">
                  <Link to="/novel" className="text-logo-blue">
                    <Settings />
                    <span>Novel Cure App</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="mt-4 flex justify-center">
          <SidebarTrigger />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default CommandSidebar;
