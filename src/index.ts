/* CSC-495 Virtual Reality Lecture 2, Fall 2022
 * Author: Regis Kopper
 *
 * Based on
 * CSC 5619 Lecture 2, Fall 2020
 * Author: Evan Suma Rosenberg
 * 
 * License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 */ 

import { float, HemisphericLight, StandardMaterial, Texture, UniversalCamera, Vector3 } from "@babylonjs/core";
import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder"
import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";


class Game
{
    public static CreateScene(engine: Engine, canvas: HTMLCanvasElement): Scene
    {
        let scene = new Scene(engine);

        let camera = new UniversalCamera("camera1", new Vector3(0,5,-10));

        camera.setTarget(Vector3.Zero());

        camera.attachControl(canvas, true);

        let light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

        let sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, scene);

        sphere.position.y = 1;

        let ground = MeshBuilder.CreateGround("ground", {width: 100, height: 100}, scene);

        let gridTexture = new Texture("textures/grid.png");

        let groundMaterial = new StandardMaterial("groundMaterial", scene);
        groundMaterial.diffuseTexture = gridTexture;
        ground.material = groundMaterial;

        scene.debugLayer.show();

        return scene;
    }

}

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;

const engine = new Engine (canvas, true);

const scene = Game.CreateScene(engine, canvas);

engine.runRenderLoop(function ()
{
    scene.render();
});

window.addEventListener("resize", function (){
    engine.resize();
})

