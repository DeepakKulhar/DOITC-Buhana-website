import { useCallback } from "react";

export function useCursorInteraction() {
  const handleMouseEnter = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const element = event.currentTarget;
    element.style.transform = 'scale(1.02)';
  }, []);

  const handleMouseLeave = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const element = event.currentTarget;
    element.style.transform = 'scale(1)';
  }, []);

  const handleClick = useCallback((action: string) => {
    console.log('Action triggered:', action);
    
    // Add click animation to the event target
    const target = document.activeElement as HTMLElement;
    if (target) {
      target.style.transform = 'scale(0.98)';
      setTimeout(() => {
        target.style.transform = 'scale(1)';
      }, 150);
    }
    
    // Handle specific actions
    switch (action) {
      case 'emitra-access':
        window.open('https://emitra.rajasthan.gov.in', '_blank');
        break;
      case 'view-services':
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'emitra':
        window.open('https://emitra.rajasthan.gov.in', '_blank');
        break;
      case 'emitra-plus':
        // Could redirect to eMitra Plus specific page or kiosk locator
        console.log('eMitra Plus service selected');
        break;
      case 'rajswan':
        // Could redirect to RajSWAN information page
        console.log('RajSWAN service selected');
        break;
      case 'rajwifi':
        // Could redirect to WiFi locations or information
        console.log('RajWiFi service selected');
        break;
      case 'iphone-services':
        // Could redirect to app store or mobile services page
        console.log('iPhone services selected');
        break;
      case 'scada':
        // Could redirect to SCADA systems information
        console.log('SCADA systems selected');
        break;
      case 'sampark':
        window.open('https://sampark.rajasthan.gov.in', '_blank');
        break;
      default:
        console.log('Unhandled action:', action);
    }
  }, []);

  return {
    handleMouseEnter,
    handleMouseLeave,
    handleClick
  };
}