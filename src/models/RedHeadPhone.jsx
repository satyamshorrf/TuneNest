import React, { useEffect, useRef } from "react";

export default function ModelViewer() {
  const modelRef = useRef(null);

  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  return (
    <model-viewer
      ref={modelRef}
      src="glb/red_headphones.glb"
      alt="3D Headphones"
      auto-rotate
      camera-controls
      disable-zoom
      interaction-prompt="none"
      camera-orbit="0deg 90deg auto"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        pointerEvents: "auto",
        backgroundColor: "transparent",
      }}
    />
  );
}
