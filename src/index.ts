import { HemisphericLight, UniversalCamera, Vector3 } from "@babylonjs/core";
import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder"

class Game
{
    public static CreateScene(engine: Engine, canvas: HTMLCanvasElement): Scene
    {
        var scene = new Scene(engine);

        var camera = new UniversalCamera("camera1", new Vector3(0,5,-10));

        camera.setTarget(Vector3.Zero());

        camera.attachControl(canvas, true);

        var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

        var sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 32 }, scene);

        sphere.position.y = 1;

        var ground = MeshBuilder.CreateGround("ground", {width: 5, height: 5}, scene);

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
