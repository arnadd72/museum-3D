import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF, Html } from "@react-three/drei";

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function ModelViewer({ modelUrl }) {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        background: "#111",
        borderRadius: "15px",
      }}
    >
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Suspense
          fallback={
            <Html center>
              <div style={{ color: "white" }}>Loading 3D...</div>
            </Html>
          }
        >
          <Stage environment="city" intensity={0.6}>
            <Model url={modelUrl} />
          </Stage>
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
}
