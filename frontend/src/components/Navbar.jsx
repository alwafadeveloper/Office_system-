import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Home,
  RefreshCw,
  User,
  LogIn,
  Settings,
  LogOut,
  Info,
  Phone,
  BookOpen,
  FileText,
  Mail,
  ShoppingBag,
  Search,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";

const Navbar = () => {
  const { authUser, logout } = useAuthStore();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const mobileMenuRef = useRef(null); // Separate ref for mobile sidebar
  const navigate = useNavigate();

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsDesktopMenuOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && !event.target.closest('[aria-label="Open menu"]')) {
        setIsMobileSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  const NavLink = ({ to, icon, text, onClick, closeSidebar = false }) => (
    <Link
      to={to}
      className="group flex items-center p-3 rounded-xl hover:bg-gray-100 text-gray-700 hover:text-black transition-all duration-200 font-medium"
      onClick={() => {
        if (closeSidebar) {
          setIsMobileSidebarOpen(false);
        }
        onClick?.();
      }}
    >
      <span className="mr-3 text-gray-500 group-hover:text-black transition-colors duration-200">{icon}</span>
      <span>{text}</span>
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm font-sans border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
          {/* Left side - Logo & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="md:hidden text-gray-600 hover:text-black p-2 -ml-2"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold tracking-tighter">
              <span className="text-black">Bajit</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">pur</span>
            </Link>
          </div>

          {/* Middle - Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600">
            {['Home', 'Products', 'Collections', 'About'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-black transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Right side - Icons & Actions */}
          <div className="flex items-center gap-5">
            <button className="text-gray-600 hover:text-black hidden md:block">
              <Search size={20} />
            </button>

            {authUser ? (
              <div className="relative" ref={menuRef}>
                <button onClick={() => setIsDesktopMenuOpen(!isDesktopMenuOpen)} className="text-gray-600 hover:text-black">
                  <User size={20} />
                </button>
                {isDesktopMenuOpen && (
                  <div className="absolute right-0 mt-4 w-56 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50 text-black">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm font-semibold text-gray-800 truncate">{authUser.name}</p>
                      <p className="text-xs text-gray-500 truncate">{authUser.email}</p>
                    </div>
                    <div className="py-1">
                      <Link to="/profile" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsDesktopMenuOpen(false)}>My Profile</Link>
                      <Link to="/orders" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsDesktopMenuOpen(false)}>My Orders</Link>
                    </div>
                    <div className="border-t border-gray-200"></div>
                    <button onClick={() => { logout(navigate); setIsDesktopMenuOpen(false); }} className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="text-gray-600 hover:text-black hidden md:block" title="Login">
                <LogIn size={20} />
              </Link>
            )}

            <Link to="/cart" className="relative text-gray-600 hover:text-black">
              <ShoppingBag size={20} />
              <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white font-bold">1</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar with transition */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-transform duration-300 ease-in-out ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        ref={mobileMenuRef}
      >
        {isMobileSidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMobileSidebarOpen(false)}
            />
            <div className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-white shadow-2xl text-black border-r border-gray-200">
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <Link
                  to="/"
                  className="flex items-center gap-3"
                  onClick={() => setIsMobileSidebarOpen(false)}
                >
                  <span className="text-2xl font-bold tracking-tighter">
                    <span className="text-black">Bajit</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">pur</span>
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="text-gray-500 hover:text-black p-2 -mr-2"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="p-4 overflow-y-auto h-full pb-24">
                <nav className="flex flex-col space-y-1">
                  <NavLink
                    to="/"
                    icon={<Home size={20} />}
                    text="Home"
                    closeSidebar={true}
                  />
                  <NavLink
                    to="/products"
                    icon={<ShoppingBag size={20} />}
                    text="Shop"
                    closeSidebar={true}
                  />
                  <NavLink
                    to="/about"
                    icon={<Info size={20} />}
                    text="About"
                    closeSidebar={true}
                  />
                  <NavLink
                    to="/contact"
                    icon={<Phone size={20} />}
                    text="Contact"
                    closeSidebar={true}
                  />

                  <div className="border-t border-gray-200 my-2"></div>

                  <div className="px-3 py-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                    Tools
                  </div>
                  <button
                    onClick={() => {
                      handleRefresh();
                      setIsMobileSidebarOpen(false);
                    }}
                    className="group flex items-center p-3 rounded-xl hover:bg-gray-100 text-gray-700 hover:text-black transition-all duration-200 font-medium w-full text-left"
                  >
                    <RefreshCw size={18} className="mr-3 text-gray-500 group-hover:text-black transition-colors" />
                    <span>Refresh Page</span>
                  </button>

                  <div className="border-t border-gray-200 my-2"></div>

                  <div className="px-3 py-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                    Account
                  </div>
                  {authUser ? (
                    <>
                      <NavLink
                        to="/profile"
                        icon={<User size={20} />}
                        text="My Profile"
                        closeSidebar={true}
                      />
                      <NavLink
                        to="/orders"
                        icon={<BookOpen size={20} />}
                        text="My Orders"
                        closeSidebar={true}
                      />
                      <button
                        onClick={() => {
                          logout(navigate);
                          setIsMobileSidebarOpen(false);
                          navigate("/");
                        }}
                        className="group flex items-center p-3 rounded-xl hover:bg-red-50 text-red-600 transition-all duration-200 font-medium w-full text-left"
                      >
                        <LogOut size={20} className="mr-3" />
                        <span>Logout</span>
                      </button>
                    </>
                  ) : (
                    <NavLink
                      to="/login"
                      icon={<LogIn size={18} />}
                      text="Login"
                      closeSidebar={true}
                    />
                  )}
                </nav>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-200">
                <p className="text-xs text-gray-500 text-center font-medium">
                  "Code is poetry."
                  <br />
                  <span className="text-black font-semibold mt-1 block">Bajitpur</span>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
