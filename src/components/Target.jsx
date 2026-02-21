import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Target = ({ position }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group position={position} ref={meshRef}>
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2, 16]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      <mesh position={[0, 0.2, 0]}>
        <torusGeometry args={[0.6, 0.08, 16, 100]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position={[0, 0.2, 0]}>
        <torusGeometry args={[0.4, 0.08, 16, 100]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[0, 0.2, 0]}>
        <torusGeometry args={[0.2, 0.08, 16, 100]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
};

export default Target;