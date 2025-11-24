import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side - Text */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm">
            © {new Date().getFullYear()} Department of Information Technology & Communication, Government of Rajasthan. All rights reserved.
          </p>
          <p className="text-xs italic">
            "Satyameva Jayate" | सत्यमेव जयते
          </p>
          <p className="text-xs italic text-gray-500">
            Website developed by  Deepak Kulhar (Programmer) <br />
                                  with assistance of 
                                  Teepu (AP)  <br />
                                  Sanjay Singh (AP)  <br />
                                  Ved Prakash Jangir(AP)  <br />
                                  Pawan Singh (IA)
          </p>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
