"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/zahratul syitha.png";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  sticky?: boolean;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  variant?: "default" | "elevated" | "minimal";
}

const menuItems = [
  { name: "Beranda", path: "/" },
  { name: "Tentang", path: "/about" },
  { name: "Layanan", path: "/program" },
  { name: "PPDB", path: "/ppdb" },
  { name: "Berita", path: "/news" },
  { name: "Kontak", path: "/contact" },
];

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  actions,
  leftContent,
  rightContent,
  sticky = true,
  maxWidth = "2xl",
  variant = "elevated",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full",
  };

  const variantClasses = {
    default: "bg-white border-b border-gray-200",
    elevated: "bg-white border-b border-gray-200 shadow-sm",
    minimal: "bg-transparent border-none",
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fungsi untuk cek route aktif
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header
      className={`
        w-full
        ${variantClasses[variant]}
        ${sticky ? "sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/95" : ""}
      `}
    >
      <div
        className={`
          mx-auto w-full
          px-4 py-3
          sm:px-5 sm:py-3.5
          lg:px-6 lg:py-4
          ${maxWidthClasses[maxWidth]}
        `}
      >
        {/* Top Row */}
        <div className="flex items-center justify-between gap-4">
          {/* Left - Logo/Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            <div className="flex items-center gap-3">
              {leftContent ? (
                leftContent
              ) : (
                <Link href="/" className="flex items-center gap-2">
                  <Image src={logo} alt="Logo Sekolah" width={50} height={50} />
                  {/* <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div> */}
                  <div>
                    <h1 className="text-lg font-bold text-gray-900">
                      {title || "Sekolah Kita"}
                    </h1>
                    {subtitle && (
                      <p className="text-xs text-gray-600">{subtitle}</p>
                    )}
                  </div>
                </Link>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`
                  px-4 py-2 rounded-lg font-medium text-sm transition-colors
                  ${
                    isActive(item.path)
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Content */}
          <div className="flex items-center gap-3">
            {/* Desktop Actions */}
            {actions && (
              <div className="hidden sm:flex items-center gap-2">
                {actions}
              </div>
            )}

            {/* Right Content (Login/Profile Button) */}
            {rightContent ? (
              rightContent
            ) : (
              <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Masuk
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`
            lg:hidden transition-all duration-300 ease-in-out overflow-hidden
            ${isMenuOpen ? "max-h-96 mt-4 border-t border-gray-200" : "max-h-0"}
          `}
        >
          <div className="pt-4 pb-2">
            <nav className="flex flex-col space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    px-4 py-3 rounded-lg font-medium text-sm transition-colors
                    ${
                      isActive(item.path)
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Actions */}
            {actions && (
              <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-2">
                {React.Children.map(actions, (action, index) => (
                  <div key={index}>{action}</div>
                ))}
              </div>
            )}

            {/* Mobile Login Button */}
            {!rightContent && (
              <button className="w-full mt-4 inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Masuk ke Akun
              </button>
            )}
          </div>
        </div>

        {/* Mobile Actions Row (for small screens) */}
        {actions && (
          <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 sm:hidden">
            {React.Children.map(actions, (action, index) => (
              <div key={index} className="flex-shrink-0">
                {action}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;