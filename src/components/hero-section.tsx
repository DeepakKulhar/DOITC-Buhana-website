import { useCursorInteraction } from "@/hooks/use-cursor-interaction";

export default function HeroSection() {
  const { handleMouseEnter, handleMouseLeave, handleClick } = useCursorInteraction();

  return (
    <section id="home" className="relative bg-gradient-to-r from-cyan-500 to-gray-700 text-white py-20 overflow-hidden">
      <div className="heritage-pattern absolute inset-0"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 government-heading">
              Digital Rajasthan
              <span className="block text-cyan-300">Gateway</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Serving citizens through innovative e-governance solutions, connecting rural and urban areas with cutting-edge technology services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="dynamic-cursor bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('emitra-access')}
                data-testid="button-emitra-access"
              >
                Access eMitra Services
              </button>
              <button 
                className="dynamic-cursor border border-white hover:bg-white hover:text-gray-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick('view-services')}
                data-testid="button-view-services"
              >
                View All Services
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-cyan-400 bg-opacity-20 rounded-lg p-4 text-center animate-pulse-soft">
                  <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <p className="text-sm">eMitra</p>
                </div>
                <div className="bg-raj-green bg-opacity-20 rounded-lg p-4 text-center animate-pulse-soft delay-100">
                  <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.46.66C7.26 17.69 9.26 12.5 17 11V8zm0-6l4 4-4 4V7H3V5h14V2z"/>
                  </svg>
                  <p className="text-sm">RajSWAN</p>
                </div>
                <div className="bg-blue-400 bg-opacity-20 rounded-lg p-4 text-center animate-pulse-soft delay-200">
                  <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 17h2v2H3zm16-5v1c0 2.66-2.34 5-5 5s-5-2.34-5-5V9c0-2.66 2.34-5 5-5s5 2.34 5 5z"/>
                  </svg>
                  <p className="text-sm">RajWiFi</p>
                </div>
                <div className="bg-purple-400 bg-opacity-20 rounded-lg p-4 text-center animate-pulse-soft delay-300">
                  <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8h16v10z"/>
                  </svg>
                  <p className="text-sm">Sampark Portal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}