"use client";

import Image from "next/image";

function buildWhatsAppLink(phone, message) {
  const cleanPhone = phone.replace(/[^\d]/g, "");
  const text = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${text}`;
}

export default function WhatsAppButton({
  phone,
  message,
  label,
  imgSrc,
  className = "",
}) {
  const href = buildWhatsAppLink(phone, message);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {imgSrc && (
        <span className="w-10 h-10 relative">
          <Image src={imgSrc} alt={label} fill className="object-contain" />
        </span>
      )}
      <span>{label}</span>
    </a>
  );
}
