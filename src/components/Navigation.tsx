import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/why-choose-us", label: "Why Choose Us" },
    // { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-construction-steel text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@buildpros.com</span>
            </div>
          </div>
          {/* <div className="hidden md:block">
            <span>Licensed & Insured | 24/7 Emergency Service</span>
          </div> */}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-white font-bold text-lg"><img src="/image.png" alt="" /></span>
              </div>
              <span className="text-xl font-bold text-construction-steel">
                B-Grade Sami
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href)
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-700"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
              {/* <Button variant="cta" size="sm">
                Get Quote
              </Button> */}
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden border-t bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors ${isActive(item.href)
                        ? "text-primary bg-primary/5"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-3 py-2">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 text-green-800">
                    Message on WhatsApp
                    {/* <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#25D366" d="M16.002 3.003C9.377 3.003 3.996 8.384 3.996 15.008c0 2.65.792 5.1 2.15 7.16L3 29l7.068-2.122a12.93 12.93 0 005.934 1.515c6.626 0 12.007-5.381 12.007-12.007S22.628 3.003 16.002 3.003zm0 21.836a10.362 10.362 0 01-5.28-1.45l-.378-.225-4.197 1.257 1.238-4.088-.246-.392a10.326 10.326 0 01-1.552-5.352c0-5.726 4.658-10.384 10.384-10.384 5.726 0 10.384 4.658 10.384 10.384s-4.658 10.384-10.384 10.384zm5.678-7.826c-.31-.155-1.837-.906-2.123-1.01-.285-.104-.494-.155-.703.155-.208.31-.806 1.01-.988 1.218-.182.208-.364.234-.674.078-.31-.155-1.311-.482-2.495-1.538-.922-.822-1.543-1.837-1.72-2.148-.182-.31-.02-.477.137-.632.14-.14.31-.364.465-.547.155-.182.206-.31.31-.517.104-.208.052-.39-.026-.547-.078-.155-.703-1.699-.964-2.32-.252-.604-.507-.52-.703-.53-.182-.008-.39-.01-.597-.01s-.547.078-.834.39c-.285.31-1.093 1.067-1.093 2.6s1.12 3.014 1.276 3.222c.155.208 2.205 3.377 5.345 4.736.748.322 1.331.515 1.785.66.75.238 1.434.205 1.976.125.603-.09 1.837-.75 2.098-1.478.26-.729.26-1.353.182-1.478-.078-.124-.286-.198-.597-.353z" />
              </svg> */}

                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;