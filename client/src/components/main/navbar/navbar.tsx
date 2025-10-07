
import { Link, NavLink } from "react-router-dom";
import { SearchIcon } from "lucide-react";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {ModeToggle} from "./toggle";

export function Navbar() {

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Blog", to: "/blog" },
    { name: "Categories", to: "/categories" },
    { name: "About", to: "/about" },
    { name: "Contacts", to: "/contacts" },
  ];

  return (
    <nav className="flex items-center justify-between p-4 border-b sticky ">

      <div className="flex-shrink-0">
        <Link to="/" className="text-xl font-bold">
          Psych101
        </Link>
      </div>

      <div className="flex items-center space-x-4">

        <ul className="flex space-x-4 list-none p-0 mr-4">
          {navItems.map((item) => (
            <li key={item.name}>

              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div>
          <ModeToggle />
        </div>

        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Search..." className="h-9" />
          <Button type="submit" size="icon" className="h-9 w-9">
            <SearchIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
