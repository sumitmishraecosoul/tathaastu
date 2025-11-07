import React from "react";

const WhatsAppFloatingButton = ({
  phoneNumber = "+918318875772",
  message = "Hello! I'd like to know more about your services.",
}) => {
  const sanitizedNumber = phoneNumber.replace(/[^0-9]/g, "");
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://api.whatsapp.com/send?phone=${sanitizedNumber}&text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-xl hover:bg-[#1ebe5d] transition-transform hover:scale-105"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-5 w-5 text-[#25D366]"
        >
          <path
            fill="currentColor"
            d="M16.01 3.1c-7.1 0-12.9 5.8-12.9 12.9c0 2.3.6 4.5 1.7 6.5l-1.8 6.6l6.8-1.8c1.9 1 4.1 1.6 6.2 1.6h.1c7.1 0 12.9-5.8 12.9-12.9c0-3.4-1.3-6.7-3.8-9.1c-2.4-2.5-5.7-3.8-9.2-3.8zm7.3 20c-.3.8-1.7 1.5-2.4 1.6c-.6.1-1.3.1-2.1-.1c-.5-.1-1.1-.4-1.9-.7c-3.3-1.4-5.4-4.6-5.6-4.8c-.2-.3-1.3-1.7-1.3-3.3c0-1.6.8-2.4 1.2-2.8c.3-.3.7-.4 1-.4h.7c.2 0 .5-.1.7.5c.3.6 1.1 2.6 1.1 2.6c.1.2.1.4 0 .6c-.1.2-.2.3-.4.5l-.5.5c-.1.1-.3.3-.1.6c.1.3.5 1 1.3 1.6c.9.8 1.7 1.1 2 .1c.2-.3.4-.6.7-.8c.2-.2.3-.3.5-.2c.2.1 1.6.8 1.8.9c.3.1.4.2.5.3c.1.2.1 1.1-.2 1.9z"
          />
        </svg>
      </span>
      <span className="hidden sm:block text-sm font-semibold tracking-wide">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppFloatingButton;

