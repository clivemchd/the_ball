import React, {Component} from "react";
import {
  Scene,
  Engine,
  UniversalCamera,
  Vector3,
  HemisphericLight,
  Mesh,
  Vector2,
} from "babylonjs";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    // this.init();
  }

  init = () => {
    let canvas = document.getElementById("renderCanvas");
    let engine = new Engine(canvas, true, {
      preserveDrawingBuffer: true,
      stencil: true,
    });
    let createScene = () => {
      let scene = new Scene(engine);
      let camera = new UniversalCamera(
        "camera1",
        new Vector3(0, 5, -10),
        scene
      );
      camera.setTarget(Vector3.Zero());
      camera.attachControl(canvas, false);
      let light = new HemisphericLight("light1", new Vector3(0, 1, 3), scene);
      let sphere = new Mesh.CreateSphere(
        "sphere1",
        16,
        2,
        scene,
        false,
        Mesh.FRONTSIDE
      );
      sphere.position.y = 1;
      let ground = new Mesh.CreateGround(
        "ground1",
        200,
        100,
        100,
        scene,
        false
      );
      return scene;
    };
    let scene = createScene();
    engine.runRenderLoop(function () {
      scene.render();
    });
  };

  componentDidMount() {
    this.init();
  }

  render() {
    return (
      <div className="App">
        <canvas id="renderCanvas" className="theFirstCanvas"></canvas>
      </div>
    );
  }
}

export default App;
