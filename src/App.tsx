import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { Suspense } from "react";
import { MotionConfig } from "framer-motion";

function App() {
  return (
    <>
      {/* Fixed 3D Background */}
      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 30 }}
        style={{ 
          position: "fixed", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100vh",
          zIndex: 0
        }}
      >
        <color attach="background" args={["#0a0a0a"]} />
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>

      {/* Scrollable Content */}
      <MotionConfig
        transition={{
          type: "spring",
          mass: 5,
          stiffness: 500,
          damping: 50,
          restDelta: 0.0001,
        }}
      >
        <div style={{ position: "relative", zIndex: 10 }}>
          <Interface />
        </div>
      </MotionConfig>
    </>
  );
}

export default App;
