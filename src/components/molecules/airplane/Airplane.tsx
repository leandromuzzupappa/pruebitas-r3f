/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/airplane/model.glb
*/

import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { IModelProps } from "@/data/interfaces";

export const Airplane = (props: IModelProps) => {
  const { nodes, materials } = useGLTF("/airplane/model.glb") as any;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.PUSHILIN_Plane_Circle000.geometry}
        material={materials.plane}
      />
      <mesh
        geometry={nodes.PUSHILIN_Plane_Helix.geometry}
        material={materials.plane}
        position={[1.09, 0.23, 0]}
      />
    </group>
  );
};

useGLTF.preload("/airplane/model.glb");
