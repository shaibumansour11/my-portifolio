"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function FloatingContactButton() {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll reactive
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setVisible(false);
      else setVisible(true);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleClick = () => router.push("/contact");

  return (
    <div
      style={{
        position: "fixed",
        bottom: visible ? "20px" : "-80px",
        right: "20px",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "bottom 0.4s ease",
      }}
    >
      {/* Tooltip */}
      {!isMobile && (
        <span
          style={{
            marginBottom: "6px",
            padding: "3px 8px",
            borderRadius: "6px",
            backgroundColor: "rgba(0,0,0,0.75)",
            color: "#fff",
            fontSize: "11px",
            fontWeight: "500",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(-5px)",
            transition: "all 0.3s ease",
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          Contact Me
        </span>
      )}

      {/* Hologram Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: isMobile ? "45px" : "55px",
          height: isMobile ? "45px" : "55px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #0d1f3c 0%, #1a3b6d 100%)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid rgba(0,150,255,0.6)",
          boxShadow:
            "0 0 10px rgba(0,150,255,0.4), 0 0 20px rgba(0,150,255,0.2), 0 0 40px rgba(0,100,200,0.15)",
          cursor: "pointer",
          transition: "all 0.3s ease",
          animation: "float 3s ease-in-out infinite, pulse 2.5s infinite",
          position: "relative",
          overflow: "visible",
        }}
      >
        {/* Font Awesome Mail Icon */}
        <FontAwesomeIcon
          icon={faEnvelope}
          width={isMobile ? 20 : 24}
          height={isMobile ? 20 : 24}
        />

        {/* Glow trail effect */}
        {hovered && (
          <span
            style={{
              position: "absolute",
              width: isMobile ? "75px" : "85px",
              height: isMobile ? "75px" : "85px",
              borderRadius: "50%",
              background: "rgba(0,150,255,0.15)",
              filter: "blur(12px)",
              zIndex: -1,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animation: "glowTrail 1.5s infinite alternate",
            }}
          />
        )}
      </button>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }

        @keyframes pulse {
          0% {
            box-shadow:
              0 0 10px rgba(0,150,255,0.4),
              0 0 20px rgba(0,150,255,0.2),
              0 0 40px rgba(0,100,200,0.15);
          }
          50% {
            box-shadow:
              0 0 15px rgba(0,150,255,0.6),
              0 0 30px rgba(0,150,255,0.4),
              0 0 50px rgba(0,100,200,0.25);
          }
          100% {
            box-shadow:
              0 0 10px rgba(0,150,255,0.4),
              0 0 20px rgba(0,150,255,0.2),
              0 0 40px rgba(0,100,200,0.15);
          }
        }

        @keyframes glowTrail {
          0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.5; }
          100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.15; }
        }

        button:hover {
          transform: scale(1.2) rotate(10deg);
          box-shadow:
            0 0 20px rgba(0,150,255,0.7),
            0 0 40px rgba(0,150,255,0.5),
            0 0 70px rgba(0,100,200,0.4);
        }
      `}</style>
    </div>
  );
}
