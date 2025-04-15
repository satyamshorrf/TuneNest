import React, { useEffect, useState } from "react";

export default function ModelViewer() {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  const handleDoubleClick = () => {
    setZoomed(!zoomed);
  };

  return (
    <>
      <model-viewer
        src="/wooden_box.glb"
        alt="3D Wooden Box"
        auto-rotate
        camera-controls
        exposure="1"
        onDoubleClick={handleDoubleClick}
        style={{
       
          bottom: zoomed ? "0" : "20px",
          right: zoomed ? "0" : "20px",
          width: zoomed ? "100vw" : "200px",
          height: zoomed ? "100vh" : "200px",
          backgroundColor: "transparent",
          border: "none",
          zIndex: 1000,
          transition: "all 0.5s ease-in-out",
          cursor: "pointer",
        }}
      />

      {/* Close Button (only in zoomed mode) */}
      {zoomed && (
        <button
          onClick={() => setZoomed(false)}
          style={{
           position: "fixed",
            bottom: "20px",
            top: "20px",
            right: "30px",
            zIndex: 1100,
            padding: "8px 16px",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          ✕ Close
        </button>
      )}

      {/* Bottom Text */}
      <div
        style={{
        
          bottom: "500px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#fff",
          fontSize: "14px",
          zIndex: 1100,
          pointerEvents: "none",
          fontFamily: "sans-serif",
          background: zoomed ? "rgba(0,0,0,0.6)" : "transparent",
          padding: zoomed ? "4px 10px" : "0",
          borderRadius: "4px",
        }}
      >
        DoubleClickZoomzIN
      </div>
    </>
  );
}
