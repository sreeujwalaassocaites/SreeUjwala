import React from "react";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "h-12 w-auto", light = false }: LogoProps) {
  return (
    <img 
      src="/logo_sky_blue-removebg-preview.png" 
      alt="EAZYKREDIT Logo" 
      className={className}
      style={light ? { filter: "brightness(0) invert(1)" } : undefined}
    />
  );
}
