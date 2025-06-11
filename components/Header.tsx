import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur px-4 lg:px-6 h-14 flex items-center shadow-sm">
      <Link href="#top" className="text-lg font-bold" aria-label="Back to top">
        Logo
      </Link>
      <div className="ml-auto flex sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger
            className="p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7" />
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-56 bg-white dark:bg-zinc-900 text-black dark:text-white shadow-md rounded-md p-2 space-y-1"
          >
            {navItems.map(({ label, href }) => (
              <DropdownMenuItem asChild key={label}>
                <Link
                  href={href}
                  className="block text-base px-4 py-2 rounded-md hover:bg-gray-100"
                >
                  {label}
                </Link>
              </DropdownMenuItem>
            ))}
            <div className="border-t mt-2 pt-2 px-4">
              <ThemeToggle />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <nav
        className="ml-auto hidden sm:flex gap-4 sm:gap-6 items-center"
        aria-label="Main navigation"
      >
        {navItems.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            {label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
