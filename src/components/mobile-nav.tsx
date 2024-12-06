"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </Button>
      {isOpen && (
        <nav className="absolute left-0 right-0 top-16 bg-primary p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#schedule"
                className="block py-2 hover:underline"
                onClick={() => setIsOpen(false)}
              >
                일정
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
