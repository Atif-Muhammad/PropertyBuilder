import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import whatsapp from "../assets/whatsapp.png";


const Footer = () => {
  return (
    <footer className="bg-construction-steel text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg"><img src="/image.png" alt="" /></span>
              </div> */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10L12 3L21 10V21H3V10Z" />
                <path d="M9 21V14H15V21" />
                <path d="M12 3V8" />
              </svg>

              <span className="text-xl font-bold">Property Builder</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted construction partner for residential and commercial projects.
              Quality craftsmanship, on-time delivery, and exceptional service.
            </p>
            <div className="flex space-x-4">
              {/* <Facebook className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" /> */}
              <img className="w-10 h-10 hover:text-primary cursor-pointer transition-colors" src={whatsapp} alt="whatsapp" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/why-choose-us" className="text-gray-300 hover:text-white transition-colors">Why Choose Us</Link></li>
              {/* <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li> */}
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Residential Construction</li>
              <li>Commercial Construction</li>
              <li>Remodeling & Renovation</li>
              <li>Interior/Exterior Work</li>
              <li>Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">info@buildpros.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-300">123 Construction Ave, Builder City, BC 12345</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                Licensed & Insured<br />
                License #: CON-123456<br />
                Available 24/7 for Emergencies
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 BuildPros Hub. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;