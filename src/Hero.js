import { useFrame, } from "@react-three/fiber";
import {  useRef } from "react";
import * as THREE from "three"

const Hero = (props) => {
    const meshRef = useRef()

    useFrame((scene) => {

        const objectWorldPosition = new THREE.Vector3();
        meshRef.current.getWorldPosition(objectWorldPosition);
        const screenPos = objectWorldPosition.clone().project(scene.camera)
        if (screenPos.x < -1.2) {
            meshRef.current.position.set(10.5, 0, 0)
        } else {
            meshRef.current.position.x += -.01
        }

      


        // scene.camera.far = 50
        // scene.camera.aspect = 500 / window.innerWidth;
        // console.log(screenPos);
    })

    return (

        <mesh
            ref={meshRef}
            {...props}
            scale={1}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color={'orange'} />
        </mesh>

    )
}

export default Hero