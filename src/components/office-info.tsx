import { MapPin, Mail, Activity } from "lucide-react";

export default function OfficeInfo() {
  return (
    <section id="about" className="py-16 bg-raj-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 service-card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-raj-blue rounded-lg flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>  
              <h3 className="text-xl font-semibold text-gray-900 government-heading">Office Location</h3>
            </div>
            <p className="text-gray-600 mb-4">DOITC Buhana Office</p>
            <p className="text-gray-800 font-medium">
              Panchayat Samiti Campus<br/>
              Buhana, Jhunjhunu<br/>
              Rajasthan 333502
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 service-card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-raj-green rounded-lg flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 government-heading">Contact Information</h3>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">
                Email: <span className="text-raj-blue font-medium">doit.buhana@gmail.com</span>
              </p>
              <p className="text-gray-600">
                Helpline: <span className="text-raj-blue font-bold">181</span> (Toll-free)
              </p>
              <p className="text-gray-600">Office Hours: 9:30 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 service-card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-raj-orange rounded-lg flex items-center justify-center mr-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 government-heading">Service Status</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">E-Mitra Services</span>
                <span className="px-2 py-1 bg-raj-green text-white text-xs rounded-full status-active">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Aadhaar Services</span>
                <span className="px-2 py-1 bg-raj-green text-white text-xs rounded-full status-active">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">RajSWAN Network</span>
                <span className="px-2 py-1 bg-raj-green text-white text-xs rounded-full status-active">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Raj-WiFi Infrastructure</span>
                <span className="px-2 py-1 bg-raj-green text-white text-xs rounded-full status-active">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Videowall</span>
                <span className="px-2 py-1 bg-raj-green text-white text-xs rounded-full status-active">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}