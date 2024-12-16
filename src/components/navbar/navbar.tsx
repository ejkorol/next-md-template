import * as React from "react";
import clsx from "clsx";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { KBD } from "@/components/ui/kbd";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <nav className="flex flex-col">
      <Navbar.Top />
      <Navbar.Bottom />
    </nav>
  );
};

Navbar.Top = () => {
  return (
    <div className="flex max-w-screen-2xl px-8 py-4 mx-auto w-full items-center justify-between">
      <div className="flex items-center">
        <h3 className="text-3xl font-medium">Acme</h3>
        <div className="ml-8 flex items-center gap-4">
          <Navbar.Link>Documentation</Navbar.Link>
          <Navbar.Link>Guides</Navbar.Link>
          <Navbar.Link>Help</Navbar.Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Input
          startContent={
            <Search size={16} className="absolute left-2 text-neutral-400" />
          }
          className="pl-10 border-0 bg-neutral-900 hover:bg-neutral-800 transition-all w-[250px]"
          placeholder="Search..."
          endContent={
            <KBD type="command" className="absolute right-2">
              k
            </KBD>
          }
        />
        <Button className="text-neutral-400" variant="outline">
          Feedback
        </Button>
      </div>
    </div>
  );
};

Navbar.Link = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link
      className={clsx(
        `${className} text-sm font-medium text-neutral-600 hover:text-neutral-400 transition-all`,
      )}
      href="/"
    >
      {children}
    </Link>
  );
};

Navbar.Bottom = () => {
  return (
    <div className="border-b pb-2">
      <div className="flex max-w-screen-2xl px-8 mx-auto w-full items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            <Navbar.MenuItem name="Getting Started">
              <div className="w-[300px]">Getting Started</div>
            </Navbar.MenuItem>
            <Navbar.MenuItem name="Features">
              <div className="w-[400px] h-16">Features</div>
            </Navbar.MenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

Navbar.MenuItem = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="px-0 py-0 bg-transparent text-neutral-500 hover:text-foreground hover:bg-transparent data-[state=open]:text-foreground data-[state=open]:bg-transparent">
        {name}
      </NavigationMenuTrigger>
      <NavigationMenuContent>{children}</NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default Navbar;
