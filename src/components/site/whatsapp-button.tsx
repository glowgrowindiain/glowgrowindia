import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/site-content";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${BRAND.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Glow Grow India on WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full border border-brand-glow/40 bg-brand-glow/10 px-4 py-3 text-[10px] font-semibold tracking-[0.2em] text-brand-glow uppercase backdrop-blur-md transition-all hover:bg-brand-glow hover:text-brand-ink sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}