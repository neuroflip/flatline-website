import Camera from "./Camera.js";
import Util from "./Util.js";
import Point3D from "./Point3D.js";
import Light from "./Light.js";
import Torus from "./Torus.js";
import Cube from "./Cube.js";
import Sphere from "./Sphere.js";

export default class Engine {
	constructor(canvas) {
		this.requestAnimationFrameID = null;
		this.object = Sphere;
		this.xAngle = 0;
		this.yAngle = 0;
		this.lastScreenX = 0;
		this.lastScreenY = 0;
		this.canvas = canvas;
		this.canvasCtx = this.canvas.getContext('2d');
		//this.canvas.width = Util.CANVASW;
		//this.canvas.height = Util.CANVASH;
		this.canvasCtx.lineWidth = 0.1;
		this.camera = null;
		this.light = null;
		this.deltaTime = 0;
        this.lastTime = 0;
	}

	init() {
		initScene.call(this);
		this.canvas.oncontextmenu = ignoreFunction;
		//this.reScaleViewport();
		this.renderScene();
	}

	reScaleViewport(d) {
		const rootElement = document.getElementById("root");

		window.document.getElementById(this.canvas.id).style.height = "100px";
		window.document.getElementById(this.canvas.id).style.width = "100px";
	}

	renderScene(time = 0) {
		this.deltaTime += time - this.lastTime;
        this.lastTime = time;


		Util.translate(new Point3D(-this.camera.xOff, -this.camera.yOff, -this.camera.zOff), this.object);
		Util.zrotate(0.01, this.object);
		Util.xrotate(0.01, this.object);
		Util.yrotate(0.01, this.object);
		Util.translate(new Point3D(this.camera.xOff, this.camera.yOff, this.camera.zOff), this.object);

		clearCtx.call(this);
		this.light.rotateLight(1);
		render.call(this, this.object);
		this.requestAnimationFrameID = window.requestAnimationFrame(this.renderScene.bind(this), this.canvas);
	}
}

function ignoreFunction(event) {
	event.preventDefault();
	event.stopPropagation();
	event.stopImmediatePropagation();

	return false;
}

function initScene() {
	this.camera = new Camera();
	this.light = new Light(new Point3D(0,10,0), 
						   new Point3D("F","0","0"));

	//Util.xrotate(Util.g2r(Util.XROTATE_INITIAL), this.object);	
    //Util.yrotate(Util.g2r(Util.YROTATE_INITIAL), this.object);
	Util.translate(new Point3D(this.camera.xOff, this.camera.yOff, this.camera.zOff), this.object);

	this.light.position = Util.xrotatePoint(this.light.position, Util.g2r(Util.XROTATE_INITIAL));
	this.light.position = Util.zrotatePoint(this.light.position, Util.g2r(Util.YROTATE_INITIAL));

	this.light.position = Util.translatePoint(this.light.position, 
		new Point3D(0, this.camera.yOff+5, this.camera.zOff));
}

function clearCtx() {
	this.canvasCtx.fillStyle = Util.CLEAR_COLOR;
	this.canvasCtx.fillRect(0, 0, this.canvas.width, this.canvas.height);
}

function calculate2DProjectionPoint(triangles, projection, i) {
	projection[i].p1 = Util.calculate2DProjectionPoint(triangles[i].p1, this.camera.scaleFactor, this.canvas.width, this.canvas.height);
	projection[i].p2 = Util.calculate2DProjectionPoint(triangles[i].p2, this.camera.scaleFactor, this.canvas.width, this.canvas.height);
	projection[i].p3 = Util.calculate2DProjectionPoint(triangles[i].p3, this.camera.scaleFactor, this.canvas.width, this.canvas.height);
}

function getColorFromDistanceTriangleLight(point) {
	const distance = Math.abs(this.light.getLightDistance(point));
	
	return (16 - Math.max(Math.min(Math.ceil(16 * distance / 14), 16), 0)).toString(16);
}

function render(object) {
	let color;

	this.canvasCtx.beginPath();
	for(var i=0; i<object.triangles.length-1; i++) {
		calculate2DProjectionPoint.call(this, object.triangles, object.projection, i);
		color = getColorFromDistanceTriangleLight.call(this, object.triangles[i].p1);

		if(object.projection[i].p1.x>=0 && 
			object.projection[i].p1.y>=0 && 
			object.projection[i].p2.x>=0 &&
			object.projection[i].p2.y>=0 &&
			object.projection[i].p3.x>=0 &&
			object.projection[i].p3.y>=0 &&
			object.projection[i].p1.x<=Util.CANVASW && 
			object.projection[i].p1.y<=Util.CANVASH && 
			object.projection[i].p2.x<=Util.CANVASW &&
			object.projection[i].p2.y<=Util.CANVASH &&
			object.projection[i].p3.x<=Util.CANVASW &&
			object.projection[i].p3.y<=Util.CANVASH) {
				Util.drawLine(this.canvasCtx, 
					object.projection[i].p1.x,
					object.projection[i].p1.y,
					object.projection[i].p2.x,
					object.projection[i].p2.y,
					`#${color}${color}${color}`);
				Util.drawLine(this.canvasCtx, 
					object.projection[i].p2.x,
					object.projection[i].p2.y,
					object.projection[i].p3.x,
					object.projection[i].p3.y,
					`#${color}${color}${color}`);
				Util.drawLine(this.canvasCtx, 
					object.projection[i].p3.x,
					object.projection[i].p3.y,
					object.projection[i].p1.x,
					object.projection[i].p1.y,
					`#${color}${color}${color}`);
		}
	}
	this.canvasCtx.stroke();
}