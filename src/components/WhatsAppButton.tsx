
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-5 right-5 z-50 rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center"
    >
      <Phone className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppButton;
