import { Component, Input, OnInit } from '@angular/core';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

@Component({
  selector: 'app-three-dee-box',
  templateUrl: './three-dee-box.component.html',
  styleUrl: './three-dee-box.component.scss'
})
export class ThreeDeeBoxComponent implements OnInit {
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private mixer: THREE.AnimationMixer | undefined;
  private controls!: OrbitControls;
  private loader!: FBXLoader;
  private clock = new THREE.Clock();
  
  @Input() path: string | undefined;
  
  constructor () {}
  
  ngOnInit(): void {
    this.initThreeJS();
    this.animate();
  }
  
  ngOnChanges() {
    this.loadModel();
  }
  
  initThreeJS() {
    // Create a scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('pink')
    
    // Create camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 5, 10);
    
    // Create a renderer
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    const threeJsContainer = document.querySelector('#threejs-container')
    this.renderer.setSize(threeJsContainer!.clientWidth, threeJsContainer!.clientHeight);
    this.renderer.shadowMap.enabled = true;
    threeJsContainer!.appendChild(this.renderer.domElement);
    
    // Add OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    
    
    // Add Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    this.scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    this.scene.add(directionalLight);
    
    // Load FBX model
    this.loader = new FBXLoader();
  }
  
  private animate() {
    requestAnimationFrame(() => this.animate());
    
    const delta = this.clock.getDelta();
    if (this.mixer) {
      this.mixer.update(delta);
    }
    // this.controls.addEventListener( 'change', ()=>{this.renderer.render(this.scene, this.camera)} );
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
  
  private loadModel() {
    if (this.path) {
      this.loader.load(
        this.path, // file path
        (object) => { // onLoad function
          object.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          })
          
          object.scale.set(0.1, 0.1, 0.1);
          this.scene.add(object);
          
          // Animation mixer
          this.mixer = new THREE.AnimationMixer(object);
          const action = this.mixer.clipAction((object as any).animations[0]);
          action.play();
        },
        undefined, // onProgress function
        (error) => { // onError function
          console.error('An error has occured', error);
        }
      );
    }
  }
}
