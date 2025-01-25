// import React, { useEffect, useState } from "react";
// import { useViewportScroll } from "framer-motion";

// const ScrollVelocity = () => {
//   const { scrollY } = useViewportScroll();
//   const [velocity, setVelocity] = useState(0);
//   const [direction, setDirection] = useState("down");

//   useEffect(() => {
//     return scrollY.onChange((latest) => {
//       const newVelocity = scrollY.getVelocity();
//       setVelocity(newVelocity);
//       setDirection(newVelocity > 0 ? "down" : "up");
//     });
//   }, [scrollY]);

//   return (
//     <div>
//       <p>Scroll Velocity: {velocity.toFixed(2)}</p>
//       <p>Scroll Direction: {direction}</p>
//     </div>
//   );
// };

// export default ScrollVelocity;
import { Canvas } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

const ScrollVelocity3D = () => {
  const { scroll } = useScroll();
  const [velocity, setVelocity] = useState(0);
  const [direction, setDirection] = useState("down");

  useEffect(() => {
    return scroll.onChange((latest) => {
      const newVelocity = scroll.getVelocity();
      setVelocity(newVelocity);
      setDirection(newVelocity > 0 ? "down" : "up");
    });
  }, [scroll]);

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      <div>
        <p>Scroll Velocity: {velocity.toFixed(2)}</p>
        <p>Scroll Direction: {direction}</p>
      </div>
    </Canvas>
  );
};

export default ScrollVelocity3D;
