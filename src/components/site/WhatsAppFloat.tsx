const MSG = encodeURIComponent(
  "Olá! Tenho interesse no III Congresso de Psicogenealogia — Raízes da Alma. Pode me ajudar?"
);

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/5548000000000?text=${MSG}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <div className="flex items-center gap-3 bg-gradient-to-r from-gold to-gold-light text-background pl-4 pr-5 py-3 rounded-full shadow-[0_10px_40px_-10px_rgba(201,168,76,0.6)] hover:shadow-[0_15px_50px_-10px_rgba(201,168,76,0.8)] transition-all duration-500 hover:-translate-y-1">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7 0-.3-.2-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1.1 2.8 1.2 3 .1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
        </svg>
        <span className="font-body font-medium text-sm hidden sm:inline">
          Tire suas dúvidas
        </span>
      </div>
    </a>
  );
}
