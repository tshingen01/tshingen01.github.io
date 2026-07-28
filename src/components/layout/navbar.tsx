"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "fixed top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-2xl py-3 px-4 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-2xl border border-border/70 shadow-[0_8px_32px_rgba(15,23,42,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-background/60 backdrop-blur-xl border border-border/40 shadow-[0_4px_20px_rgba(15,23,42,0.06)]"
      )}
    >
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div
              className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-700"
              style={{
                background: "linear-gradient(135deg, rgba(78,205,196,0.1) 0%, transparent 40%, rgba(216,178,242,0.1) 100%)",
              }}
            />
          </div>

          <div className="relative flex items-center">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-display text-xl font-bold transition-all hover:opacity-80 group text-foreground"
            >
              <span className="tracking-tight bg-gradient-to-r from-teal via-violet-500 to-fuchsia-500 bg-clip-text text-transparent dark:from-teal-light dark:via-violet-400 dark:to-fuchsia-400">
                TSHINGEN
              </span>
            </Link>

            <div className="hidden md:flex items-center justify-center flex-1 mr-20">
              {NAV_ITEMS.map((item) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={item.href}
                    className="relative"
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-all px-3 py-1.5 rounded-lg",
                        active
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-primary hover:bg-white/5"
                      )}
                    >
                      {item.label}
                    </Link>

                    {active && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-6 rounded-full"
                        style={{
                          background: "linear-gradient(90deg, var(--teal), var(--lavender))",
                          boxShadow: "0 0 8px rgba(78, 205, 196, 0.5)",
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <div className="hidden md:flex">
                <ThemeToggle />
              </div>

              <div className="flex md:hidden">
                <ThemeToggle />
              </div>

              <div className="flex md:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-muted/50 shadow-sm"
                    >
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>

                  <SheetContent
                    side="right"
                    className="p-0 bg-background/95 backdrop-blur-2xl text-foreground border-l border-border/50"
                  >
                    <VisuallyHidden>
                      <h2>Mobile Navigation Menu</h2>
                    </VisuallyHidden>

                    <div className="flex flex-col h-full">
                      <div className="p-6 flex items-center justify-between">
                        <Link
                          href="/"
                          onClick={() => setOpen(false)}
                          className="font-display text-2xl font-bold"
                        >
                          <SheetTitle>Mark Kinsley Rimando</SheetTitle>
                        </Link>
                      </div>

                      <div className="flex-1 px-6 py-6 flex flex-col gap-2">
                        {NAV_ITEMS.map((item, index) => (
                          <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "block py-3 px-4 text-lg font-medium rounded-xl transition-all",
                                pathname === item.href
                                  ? "text-primary bg-primary/10"
                                  : "text-muted-foreground hover:bg-white/5 hover:text-primary"
                              )}
                            >
                              {item.label}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </motion.header>
  );
}
