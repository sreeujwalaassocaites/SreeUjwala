"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loansDropdownOpen, setLoansDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when page path changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setLoansDropdownOpen(false);
  }, [pathname]);

  const loanProducts = [
    { name: "Home Loan", href: "/loans/home-loan" },
    { name: "Business Loan", href: "/loans/business-loan" },
    { name: "Personal Loan", href: "/loans/personal-loan" },
    { name: "Loan Against Property", href: "/loans/loan-against-property" },
    { name: "Car Loan", href: "/loans/car-loan" },
    { name: "Used Car Loan", href: "/loans/used-car-loan" },
  ];

  const isActive = (path: string) => pathname === path;

  // Determine if we are on index or other subpages. On index page, the hero has a blue gradient.
  // We want the text to be dark-blue or white on hero based on styling.
  // To keep it simple and highly premium, we'll use dark text when scrolled (solid white nav), 
  // and dark text or white text when transparent depending on page hero design.
  // For index page hero, it has a white/light blue background, so dark text is perfect!
  const textClass = scrolled 
    ? "text-text-dark hover:text-primary-blue" 
    : "text-text-dark hover:text-primary-blue md:text-text-dark";

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-premium border-b border-border-color h-[90px]" 
          : "bg-transparent h-[105px]"
      } flex items-center`}
    >
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <Logo className="h-20 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link 
            href="/" 
            className={`font-semibold text-sm transition-colors relative py-2 ${
              isActive("/") ? "text-primary-blue" : textClass
            }`}
          >
            Home
            {isActive("/") && (
              <motion.span 
                layoutId="navUnderline" 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-blue" 
              />
            )}
          </Link>
          <Link 
            href="/about" 
            className={`font-semibold text-sm transition-colors relative py-2 ${
              isActive("/about") ? "text-primary-blue" : textClass
            }`}
          >
            About
            {isActive("/about") && (
              <motion.span 
                layoutId="navUnderline" 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-blue" 
              />
            )}
          </Link>

          {/* Loans Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setLoansDropdownOpen(true)}
            onMouseLeave={() => setLoansDropdownOpen(false)}
          >
            <button 
              className={`font-semibold text-sm transition-colors py-2 flex items-center gap-1 cursor-pointer ${
                pathname.startsWith("/loans") ? "text-primary-blue" : textClass
              }`}
            >
              Loans
              <ChevronDown className="h-4 w-4" />
            </button>
            <AnimatePresence>
              {loansDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-60 bg-white border border-border-color rounded-card shadow-premium py-2 mt-1"
                >
                  {loanProducts.map((loan) => (
                    <Link
                      key={loan.name}
                      href={loan.href}
                      className={`block px-5 py-2.5 text-sm font-medium transition-all hover:bg-section-bg hover:text-primary-blue ${
                        isActive(loan.href) ? "text-primary-blue bg-section-bg font-semibold" : "text-text-dark"
                      }`}
                    >
                      {loan.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            href="/calculators" 
            className={`font-semibold text-sm transition-colors relative py-2 ${
              isActive("/calculators") ? "text-primary-blue" : textClass
            }`}
          >
            Calculators
            {isActive("/calculators") && (
              <motion.span 
                layoutId="navUnderline" 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-blue" 
              />
            )}
          </Link>

          <Link 
            href="/#partner-banks" 
            className={`font-semibold text-sm transition-colors py-2 ${textClass}`}
          >
            Partner Banks
          </Link>

          <Link 
            href="/blogs" 
            className={`font-semibold text-sm transition-colors relative py-2 ${
              isActive("/blogs") ? "text-primary-blue" : textClass
            }`}
          >
            Blogs
            {isActive("/blogs") && (
              <motion.span 
                layoutId="navUnderline" 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-blue" 
              />
            )}
          </Link>

          <Link 
            href="/#faqs" 
            className={`font-semibold text-sm transition-colors py-2 ${textClass}`}
          >
            FAQs
          </Link>

          <Link 
            href="/contact" 
            className={`font-semibold text-sm transition-colors relative py-2 ${
              isActive("/contact") ? "text-primary-blue" : textClass
            }`}
          >
            Contact
            {isActive("/contact") && (
              <motion.span 
                layoutId="navUnderline" 
                className="absolute bottom-0 left-0 w-full h-[2px] bg-primary-blue" 
              />
            )}
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center">
          <Link 
            href="/apply" 
            className="bg-gradient-to-r from-dark-blue to-primary-blue text-white px-6 py-2.5 text-sm font-semibold rounded-btn shadow-md hover:shadow-premium-hover hover:-translate-y-0.5 transition-all duration-300"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-dark-blue p-2 cursor-pointer focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-md shadow-premium border-b border-border-color overflow-hidden lg:hidden flex flex-col px-6 py-6 gap-4"
          >
            <Link 
              href="/" 
              className={`font-semibold text-base py-1 ${isActive("/") ? "text-primary-blue" : "text-text-dark"}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`font-semibold text-base py-1 ${isActive("/about") ? "text-primary-blue" : "text-text-dark"}`}
            >
              About
            </Link>
            
            {/* Mobile Loans List */}
            <div className="flex flex-col gap-2 border-l-2 border-border-color pl-4 py-1">
              <span className="font-semibold text-sm text-text-gray mb-1 uppercase tracking-wider">Loans</span>
              {loanProducts.map((loan) => (
                <Link
                  key={loan.name}
                  href={loan.href}
                  className={`font-medium text-sm py-1.5 transition-colors ${
                    isActive(loan.href) ? "text-primary-blue font-semibold" : "text-text-dark hover:text-primary-blue"
                  }`}
                >
                  {loan.name}
                </Link>
              ))}
            </div>

            <Link 
              href="/calculators" 
              className={`font-semibold text-base py-1 ${isActive("/calculators") ? "text-primary-blue" : "text-text-dark"}`}
            >
              Calculators
            </Link>
            <Link 
              href="/#partner-banks" 
              className="font-semibold text-base py-1 text-text-dark"
            >
              Partner Banks
            </Link>
            <Link 
              href="/blogs" 
              className={`font-semibold text-base py-1 ${isActive("/blogs") ? "text-primary-blue" : "text-text-dark"}`}
            >
              Blogs
            </Link>
            <Link 
              href="/#faqs" 
              className="font-semibold text-base py-1 text-text-dark"
            >
              FAQs
            </Link>
            <Link 
              href="/contact" 
              className={`font-semibold text-base py-1 ${isActive("/contact") ? "text-primary-blue" : "text-text-dark"}`}
            >
              Contact
            </Link>

            <Link 
              href="/apply" 
              className="bg-gradient-to-r from-dark-blue to-primary-blue text-white text-center py-3 text-sm font-semibold rounded-btn mt-2 shadow-md"
            >
              Apply Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
