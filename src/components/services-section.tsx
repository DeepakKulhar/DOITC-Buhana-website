import { CheckCircle, Settings, Globe, Wifi, BarChart3, MessageSquare } from "lucide-react";
import { useCursorInteraction } from "@/hooks/use-cursor-interaction";
import { useLocation } from "wouter";   // ✅ import navigation hook from wouter

export default function ServicesSection() {
  const { handleMouseEnter, handleMouseLeave, handleClick } = useCursorInteraction();
  const [, navigate] = useLocation(); // ✅ gives us navigate("/path")

  const services = [
    {
      id: 'emitra',
      title: 'eMitra',
      description: 'One-stop government services platform serving all 33 districts through 13,000+ kiosks with 300+ services including certificates, bill payments, and applications.',
      icon: CheckCircle,
      gradient: 'from-raj-orange to-raj-gold',
      features: ['Birth/Death Certificates', 'Utility Bill Payments', 'Scheme Applications'],
      buttonText: 'Access eMitra Portal',
      buttonColor: 'bg-raj-orange hover:bg-orange-600'
    },
    {
      id: 'sampark',
      title: 'Sampark Portal',
      description: 'Centralized citizen grievance and service delivery platform with helpline 181, offering government services, complaint registration, and real-time status tracking.',
      icon: MessageSquare,
      gradient: 'from-indigo-500 to-indigo-700',
      features: ['Grievance Registration', '181 Helpline Support', 'Real-time Tracking'],
      buttonText: 'Access Sampark Portal',
      buttonColor: 'bg-indigo-600 hover:bg-indigo-700'
    },
    {
      id: 'emitra-plus',
      title: 'eMitra Plus',
      description: 'Advanced self-service kiosks with ATM-like functionality, instant document printing, video conferencing, and multiple payment modes for enhanced citizen experience.',
      icon: Settings,
      gradient: 'from-raj-blue to-blue-600',
      features: ['Self-Service Terminals', 'Instant Document Printing', 'Video Conferencing'],
      buttonText: 'Find Nearest Kiosk',
      buttonColor: 'bg-raj-blue hover:bg-blue-700'
    },
    {
      id: 'rajswan',
      title: 'RajSWAN',
      description: 'Rajasthan State Wide Area Network connecting 9,000+ government sites with video conferencing at district and block levels, extending to Gram Panchayat level.',
      icon: Globe,
      gradient: 'from-raj-green to-green-600',
      features: ['9,000+ Connected Sites', 'Video Conferencing', 'GIS Decision Support'],
      buttonText: 'Network Information',
      buttonColor: 'bg-raj-green hover:bg-green-700'
    },
    {
      id: 'rajwifi',
      title: 'RajWiFi Infrastructure',
      description: 'Comprehensive WiFi coverage across government offices, service centers, and public locations with 400+ Rajiv Gandhi Service Centers equipped with high-speed internet.',
      icon: Wifi,
      gradient: 'from-purple-500 to-purple-700',
      features: ['400+ Service Centers', 'Free Public Access', 'High-Speed Connectivity'],
      buttonText: 'Find WiFi Locations',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      id: 'scada',
      title: 'SCADA Systems',
      description: 'Supervisory Control and Data Acquisition systems for power grid monitoring, smart energy management, and infrastructure automation across Rajasthan\'s power distribution network.',
      icon: BarChart3,
      gradient: 'from-red-500 to-red-700',
      features: ['Power Grid Monitoring', 'Smart Energy Management', 'Infrastructure Automation'],
      buttonText: 'System Information',
      buttonColor: 'bg-red-600 hover:bg-red-700'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 government-heading">Digital Services Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive e-governance solutions connecting citizens with government services through innovative technology platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="service-card bg-white rounded-2xl shadow-xl border border-gray-100 p-8 dynamic-cursor" 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(service.id)}
                data-testid={`service-card-${service.id}`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 government-heading">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-raj-green mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <button 
                  className={`w-full ${service.buttonColor} text-white py-3 rounded-lg font-semibold transition-colors duration-200`}
                  data-testid={`button-${service.id}`}
                  onClick={() => {
                    if (service.id === "emitra-plus") {
                      navigate("/nearest-kiosk");   // ✅ only this button navigates
                    } else {
                      console.log(`${service.title} clicked`);
                    }
                  }}
                >
                  {service.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
