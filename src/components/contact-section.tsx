import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { useCursorInteraction } from "@/hooks/use-cursor-interaction";

export default function ContactSection() {
  const { handleMouseEnter, handleMouseLeave, handleClick } =
    useCursorInteraction();

  const handleOpenDirections = () => {
    const query = encodeURIComponent(
      "Panchayat Samiti Campus, Buhana, Jhunjhunu, Rajasthan 333502",
    );
    window.open(`https://maps.google.com/maps?q=${query}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 government-heading">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600">
            Visit our office or contact us for assistance with government
            services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 government-heading">
              Office Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-raj-orange rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-600">
                    DOITC Buhana Office
                    <br />
                    Panchayat Samiti Campus
                    <br />
                    Buhana, Jhunjhunu
                    <br />
                    Rajasthan 333502
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-raj-blue rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Phone & Helpline
                  </h4>
                  <p className="text-gray-600">
                    Toll-free Helpline:{" "}
                    <span className="font-semibold text-raj-blue">181</span>
                    <br />
                    Available 24/7 for citizen services
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-raj-green rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">
                    <a
                      href="mailto:doit.buhana@gmail.com"
                      className="text-raj-blue hover:underline"
                    >
                      doit.buhana@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-raj-goldForOfficeHours rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Office Hours
                  </h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9:30 AM - 6:00 PM
                    <br />
                    Saturday: Closed
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Access Links */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Access</h4>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://emitra.rajasthan.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dynamic-cursor bg-raj-cream text-raj-orange py-3 px-4 rounded-lg text-center font-medium hover:bg-raj-orange hover:text-white transition-colors duration-200 flex items-center justify-center"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  data-testid="link-emitra-portal"
                >
                  eMitra Portal
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <a
                  href="https://sampark.rajasthan.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dynamic-cursor bg-raj-cream text-raj-blue py-3 px-4 rounded-lg text-center font-medium hover:bg-raj-blue hover:text-white transition-colors duration-200 flex items-center justify-center"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  data-testid="link-sampark-portal"
                >
                  Sampark Portal
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Map and Directions */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 government-heading">
              Location & Directions
            </h3>

            {/* Map placeholder with location */}
            <div className="bg-gray-200 rounded-xl h-64 mb-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-raj-blue bg-opacity-20 flex items-center justify-center">
                <div className="text-raj-blue text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-semibold">DOITC Buhana Office</p>
                  <p className="text-sm">Panchayat Samiti Campus</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Nearest Landmarks
                </h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Buhana Block Office (100m)</li>
                  <li>• Government Hospital Buhana (500 km)</li>
                  <li>• Buhana Market (800m)</li>
                  <li>• Post Office Buhana (600m)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Public Transport
                </h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Bus: Buhana Bus Stand (1 km)</li>
                  <li>• Railway: Chirawa Junction (35 km)</li>
                  <li>• Auto/Taxi: Available at bus stand</li>
                  <li>• Parking: Available on campus</li>
                </ul>
              </div>
            </div>

            <button
              className="dynamic-cursor w-full bg-raj-orange hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200 mt-6"
              onClick={handleOpenDirections}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              data-testid="button-get-directions"
            >
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
