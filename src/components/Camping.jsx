import { PresentationControls, Stage } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

export const Camping = (props) => {
    const { scene } = useGLTF("/models/Camping.glb");
    return <primitive object={scene} {...props} />;
};

