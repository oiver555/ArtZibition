import { useFrame, useThree, } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three"
import { useControls } from 'leva'

const Hero = (props) => {
    const meshRef = useRef()
    const { positionX, positionY, positionZ, fov, far, near, zoom } = useControls({
        positionX: {
            step: 1,
            value: 0,

        },
        positionY: {
            step: 1,
            value: 0
        },
        positionZ: {
            step: 1,
            value: 10
        },
        fov: {
            step: 1,
            value: 40
        },
        far: {
            step: 1,
            value: 100
        },
        near: {
            step: 1,
            value: 0.1
        },
        zoom: {
            step: 1,
            value: 0
        },

    })
    const { camera } = useThree()

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

    useEffect(() => {
        camera.updateProjectionMatrix()
    }, [positionX, positionY, positionZ, fov, far, near, zoom])

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