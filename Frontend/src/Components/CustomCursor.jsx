import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // Check if device is mobile or touch-only
    const checkMobile = () => {
      const isTouch =
        "ontouchstart" in window ||
        window.matchMedia("(hover: none)").matches ||
        window.innerWidth < 768;
      setIsMobile(isTouch);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isMobile) return () => window.removeEventListener("resize", checkMobile);

    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("a, button, input, .folder-card, .file-item-card, .file-info-top, .mockup-item, .socialIcons i")
      ) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (
        target.closest("a, button, input, .folder-card, .file-item-card, .file-info-top, .mockup-item, .socialIcons i")
      ) {
        setIsHovered(false);
      }
    };

    // Smooth Lerp loop for trailing transparent ring
    const animateRing = () => {
      const ease = 0.2; // smooth trailing physics
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        const scale = isHovered ? "scale(1.4)" : "scale(1)";
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) ${scale}`;
      }

      rafId.current = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    rafId.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isMobile, isHovered]);

  if (isMobile) return null;

  return (
    /* Translucent Trailing Ring following the click cursor */
    <div
      ref={ringRef}
      className="custom-cursor-ring"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "24px",
        height: "24px",
        border: isHovered
          ? "1px solid rgba(200, 169, 126, 0.45)"
          : "1px solid rgba(200, 169, 126, 0.22)",
        backgroundColor: isHovered ? "rgba(200, 169, 126, 0.08)" : "transparent",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 99998,
        willChange: "transform",
        transition: "border-color 0.2s ease, background-color 0.2s ease",
      }}
    />
  );
}
