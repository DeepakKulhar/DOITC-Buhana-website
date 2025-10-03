import { useEffect, useRef, useState } from "react";

export default function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '300+', label: 'Services Available', subtitle: 'Through eMitra Platform' },
    { value: '9,000+', label: 'Connected Sites', subtitle: 'RajSWAN Network Coverage' },
    { value: '13,000+', label: 'Service Kiosks', subtitle: 'Across All Districts' },
    { value: '33', label: 'Districts Covered', subtitle: 'Complete State Coverage' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-raj-blue to-raj-orange text-white relative overflow-hidden"
    >
      <div className="heritage-pattern absolute inset-0"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 government-heading">Digital Governance Impact</h2>
          <p className="text-xl text-gray-100">Serving citizens across Rajasthan with innovative technology solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center ${isVisible ? 'animate-pulse-soft' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`stat-${index}`}
            >
              <div className="text-4xl font-bold text-raj-orangeforstats mb-2 government-heading">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-gray-100">{stat.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}