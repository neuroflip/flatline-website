class Camera {
	constructor() {
		this.xOff = 0;
		this.yOff = 0;
		this.zOff = 20;
		this.scaleFactor = 50;
	}

	translateToCamera(object) {
		const point = new Point3D(0, this.yOff, this.zOff);

		Util.translate(point, object);
	}

	translateInverseToCamera(object) {
		const point = new Point3D(0, -this.yOff, -this.zOff);

		Util.translate(point, object);
	}
};

class Engine  {
	constructor(canvas) {
		this.requestAnimationFrameID = null;
		this.object = Sphere;
		this.xAngle = 0;
		this.yAngle = 0;
		this.lastScreenX = 0;
		this.lastScreenY = 0;
		this.canvas = canvas;
		this.canvasCtx = this.canvas.getContext('2d');
		this.canvasCtx.lineWidth = 0.1;
		this.camera = null;
		this.light = null;
		this.deltaTime = 0;
        this.lastTime = 0;
	}

	init() {
		initScene.call(this);
		this.canvas.oncontextmenu = ignoreFunction;
		this.renderScene();
	}

	reScaleViewport() {
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

class Point2D {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	};
};

class Point3D {
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	};
};

class Light {
  constructor(position, color) {
      this.position = position;
      this.color =color;
  }

  rotateLight(angle) {
      this.position = Util.zrotatePoint(this.position, Util.g2r(angle));
  }

  translateLight(point) {
      this.position = Util.translatePoint(this.position, point);
  }

  getLight2DProjection(scaleFactor, width, height) {        
       return Util.calculate2DProjectionPoint(this.position, scaleFactor, width, height);
  }

  renderLight(canvas, scaleFactor, width, height) {
      const position2d = this.getLight2DProjection(scaleFactor/2, width, height);

      Util.drawLine(canvas, 
    position2d.x,
    position2d.y,
    position2d.x+4,
    position2d.y+4,
    `#${this.color.x}${this.color.y}${this.color.z}`);

      Util.drawLine(canvas, 
          position2d.x,
          position2d.y+4,
          position2d.x+4,
          position2d.y+4,
          `#${this.color.x}${this.color.y}${this.color.z}`);
      }

  getLightDistance(p1) {
      const p2 = this.position;
  
      return Math.sqrt( (p2.x-p1.x)*(p2.x-p1.x) + (p2.y-p1.y)*(p2.y-p1.y)^2 + (p2.z-p1.z)*(p2.z-p1.z) );
  }
};

class Triangle {
	constructor(point1, point2, point3) {
		this.p1 = point1;
		this.p2 = point2;
		this.p3 = point3;
	}
};

const Util = {
	CANVASW: 375,
	CANVASH: 375,
	XROTATE_INITIAL: 178,
	YROTATE_INITIAL: 45,
	//CLEAR_COLOR: "rgba(255, 255, 255, 0.0)",
			CLEAR_COLOR: "#000",

	 createArray(length) {
			var arr = new Array(length || 0),
					i = length;

			if (arguments.length > 1) {
					var args = Array.prototype.slice.call(arguments, 1);
					while (i--) arr[length - 1 - i] = this.createArray.apply(this, args);
			}

			return arr;
	},
		scaledDimensions(w, h) {
				var width, height;

				if (window.innerWidth > window.innerHeight) {
						width = window.innerHeight;
						height = window.innerHeight;
				} else {
						width = window.innerWidth;
						height = window.innerWidth;
				}

				return {
						"width": width,
						"height": height
				};
		},
		g2r(g) { 
			return g*(PI/180); 
		},
	r2g(r) {
		return r*(180/PI); 
	},
	translate(point, object) {	
		for(let j=0; j<object.triangles.length; j++) {
			object.triangles[j].p1 = this.translatePoint(object.triangles[j].p1, point);
			object.triangles[j].p2 = this.translatePoint(object.triangles[j].p2, point);
			object.triangles[j].p3 = this.translatePoint(object.triangles[j].p3, point);
		}
	},
	translatePoint(p1, p2) {
		const x = p1.x + p2.x;
		const y = p1.y + p2.y;
		const z = p1.z + p2.z;

		return new Point3D(x,y,z);
	},
	zrotatePoint(point, q) {
		let tx, ty, temp;
	
		tx = point.x;
		ty = point.y;
		temp = tx * Math.cos(q) - ty * Math.sin(q);
		ty = tx * Math.sin(q) + ty * Math.cos(q);
		tx = temp;
		
		return new Point3D(tx, ty, point.z);
	},
	zrotate(q, object) {
		for(let j=0; j<object.triangles.length; j++) {
			object.triangles[j].p1 = this.zrotatePoint(object.triangles[j].p1, q);
			object.triangles[j].p2 = this.zrotatePoint(object.triangles[j].p2, q);
			object.triangles[j].p3 = this.zrotatePoint(object.triangles[j].p3, q);
		}
	},
	yrotatePoint(point, q) {
		let tx, tz, temp;
	
		tx = point.x;
		tz = point.z;
		temp = tz * Math.cos(q) - tx * Math.sin(q);
		tx = tz * Math.sin(q) + tx * Math.cos(q);
		tz = temp;
		
		return new Point3D(tx, point.y, tz);
	},
	yrotate(q, object) {
		for(let j=0; j<object.triangles.length; j++) {
			object.triangles[j].p1 = this.yrotatePoint(object.triangles[j].p1, q);
			object.triangles[j].p2 = this.yrotatePoint(object.triangles[j].p2, q);
			object.triangles[j].p3 = this.yrotatePoint(object.triangles[j].p3, q);
		}
	},
	xrotatePoint(point, q) {
		let tz, ty, temp;
	
		ty = point.y;
		tz = point.z;
		temp = ty * Math.cos(q) - tz * Math.sin(q);
		tz = ty * Math.sin(q) + tz * Math.cos(q);
		ty = temp;
			
		return new Point3D(point.x, ty, tz);
	},
	xrotate(q, object) {
		for(let j=0; j<object.triangles.length; j++) {
			object.triangles[j].p1 = this.xrotatePoint(object.triangles[j].p1, q);
			object.triangles[j].p2 = this.xrotatePoint(object.triangles[j].p2, q);
			object.triangles[j].p3 = this.xrotatePoint(object.triangles[j].p3, q);
		}
	},
	scale(s, object) {
		for(let j=0; j<object.triangles.length; j++) {
			object.triangles[j].p1 = this.scalePoint(object.triangles[j].p1, s);
			object.triangles[j].p2 = this.scalePoint(object.triangles[j].p2, s);
			object.triangles[j].p3 = this.scalePoint(object.triangles[j].p3, s);
		}
	},
	scalePoint(point, s) {
		return new Point3D(point.x * s, point.y * s, point.z * s);
	},
	calculate2DProjectionPoint: function(point3d, scaleFactor, width, height) {
		let point2d = new Point2D(0,0);

		point2d.x = Math.floor((point3d.x * scaleFactor / point3d.z * scaleFactor) + (width / 2));
		point2d.y = Math.floor((point3d.y * scaleFactor / point3d.z * scaleFactor) + (height / 2));
		
		return point2d;
	},
	drawLine: function(canvasCtx, x0, y0, x1, y1, color) {
		x0=Math.floor(x0);
		x1=Math.floor(x1);
		y0=Math.floor(y0);
		y1=Math.floor(y1);
		canvasCtx.strokeStyle = color;
		canvasCtx.lineCap = 'square';
		canvasCtx.beginPath();
		canvasCtx.moveTo(x0, y0);
		canvasCtx.lineTo(x1, y1);
		canvasCtx.closePath();
		canvasCtx.stroke();
		canvasCtx.shadowBlur = 0;
		canvasCtx.shadowColor = color;
	}
};

const Sphere = {
	triangles: Util.createArray(12),
	projection: Util.createArray(12)
}, zOff = 0;

Sphere.triangles[0] = new Triangle(new Point3D(0.000000,0.000000,
zOff-1.000000
), new Point3D(0.425323,-0.309011,
zOff-0.850654
), new Point3D(-0.162456,-0.499995,
zOff-0.850654
));
Sphere.projection[0] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[1] = new Triangle(new Point3D(0.723607,-0.525725,
zOff-0.447220
), new Point3D(0.425323,-0.309011,
zOff-0.850654
), new Point3D(0.850648,0.000000,
zOff-0.525736
));
Sphere.projection[1] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[2] = new Triangle(new Point3D(0.000000,0.000000,
zOff-1.000000
), new Point3D(-0.162456,-0.499995,
zOff-0.850654
), new Point3D(-0.525730,0.000000,
zOff-0.850652
));
Sphere.projection[2] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[3] = new Triangle(new Point3D(0.000000,0.000000,
zOff-1.000000
), new Point3D(-0.525730,0.000000,
zOff-0.850652
), new Point3D(-0.162456,0.499995,
zOff-0.850654
));
Sphere.projection[3] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[4] = new Triangle(new Point3D(0.000000,0.000000,
zOff-1.000000
), new Point3D(-0.162456,0.499995,
zOff-0.850654
), new Point3D(0.425323,0.309011,
zOff-0.850654
));
Sphere.projection[4] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[5] = new Triangle(new Point3D(0.723607,-0.525725,
zOff-0.447220
), new Point3D(0.850648,0.000000,
zOff-0.525736
), new Point3D(0.951058,-0.309013,
zOff+0.000000
));
Sphere.projection[5] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[6] = new Triangle(new Point3D(-0.276388,-0.850649,
zOff-0.447220
), new Point3D(0.262869,-0.809012,
zOff-0.525738
), new Point3D(0.000000,-1.000000,
zOff+0.000000
));
Sphere.projection[6] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[7] = new Triangle(new Point3D(-0.894426,0.000000,
zOff-0.447216
), new Point3D(-0.688189,-0.499997,
zOff-0.525736
), new Point3D(-0.951058,-0.309013,
zOff+0.000000
));
Sphere.projection[7] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[8] = new Triangle(new Point3D(-0.276388,0.850649,
zOff-0.447220
), new Point3D(-0.688189,0.499997,
zOff-0.525736
), new Point3D(-0.587786,0.809017,
zOff+0.000000
));
Sphere.projection[8] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[9] = new Triangle(new Point3D(0.723607,0.525725,
zOff-0.447220
), new Point3D(0.262869,0.809012,
zOff-0.525738
), new Point3D(0.587786,0.809017,
zOff+0.000000
));
Sphere.projection[9] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[10] = new Triangle(new Point3D(0.723607,-0.525725,
zOff-0.447220
), new Point3D(0.951058,-0.309013,
zOff+0.000000
), new Point3D(0.587786,-0.809017,
zOff+0.000000
));
Sphere.projection[10] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[11] = new Triangle(new Point3D(-0.276388,-0.850649,
zOff-0.447220
), new Point3D(0.000000,-1.000000,
zOff+0.000000
), new Point3D(-0.587786,-0.809017,
zOff+0.000000
));
Sphere.projection[11] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[12] = new Triangle(new Point3D(-0.894426,0.000000,
zOff-0.447216
), new Point3D(-0.951058,-0.309013,
zOff+0.000000
), new Point3D(-0.951058,0.309013,
zOff+0.000000
));
Sphere.projection[12] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[13] = new Triangle(new Point3D(-0.276388,0.850649,
zOff-0.447220
), new Point3D(-0.587786,0.809017,
zOff+0.000000
), new Point3D(0.000000,1.000000,
zOff+0.000000
));
Sphere.projection[13] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[14] = new Triangle(new Point3D(0.723607,0.525725,
zOff-0.447220
), new Point3D(0.587786,0.809017,
zOff+0.000000
), new Point3D(0.951058,0.309013,
zOff+0.000000
));
Sphere.projection[14] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[15] = new Triangle(new Point3D(0.276388,-0.850649,
zOff+0.447220
), new Point3D(0.688189,-0.499997,
zOff+0.525736
), new Point3D(0.162456,-0.499995,
zOff+0.850654
));
Sphere.projection[15] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[16] = new Triangle(new Point3D(-0.723607,-0.525725,
zOff+0.447220
), new Point3D(-0.262869,-0.809012,
zOff+0.525738
), new Point3D(-0.425323,-0.309011,
zOff+0.850654
));
Sphere.projection[16] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[17] = new Triangle(new Point3D(-0.723607,0.525725,
zOff+0.447220
), new Point3D(-0.850648,0.000000,
zOff+0.525736
), new Point3D(-0.425323,0.309011,
zOff+0.850654
));
Sphere.projection[17] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[18] = new Triangle(new Point3D(0.276388,0.850649,
zOff+0.447220
), new Point3D(-0.262869,0.809012,
zOff+0.525738
), new Point3D(0.162456,0.499995,
zOff+0.850654
));
Sphere.projection[18] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[19] = new Triangle(new Point3D(0.894426,0.000000,
zOff+0.447216
), new Point3D(0.688189,0.499997,
zOff+0.525736
), new Point3D(0.525730,0.000000,
zOff+0.850652
));
Sphere.projection[19] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[20] = new Triangle(new Point3D(0.525730,0.000000,
zOff+0.850652
), new Point3D(0.162456,0.499995,
zOff+0.850654
), new Point3D(0.000000,0.000000,
zOff+1.000000
));
Sphere.projection[20] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[21] = new Triangle(new Point3D(0.525730,0.000000,
zOff+0.850652
), new Point3D(0.688189,0.499997,
zOff+0.525736
), new Point3D(0.162456,0.499995,
zOff+0.850654
));
Sphere.projection[21] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[22] = new Triangle(new Point3D(0.688189,0.499997,
zOff+0.525736
), new Point3D(0.276388,0.850649,
zOff+0.447220
), new Point3D(0.162456,0.499995,
zOff+0.850654
));
Sphere.projection[22] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[23] = new Triangle(new Point3D(0.162456,0.499995,
zOff+0.850654
), new Point3D(-0.425323,0.309011,
zOff+0.850654
), new Point3D(0.000000,0.000000,
zOff+1.000000
));
Sphere.projection[23] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[24] = new Triangle(new Point3D(0.162456,0.499995,
zOff+0.850654
), new Point3D(-0.262869,0.809012,
zOff+0.525738
), new Point3D(-0.425323,0.309011,
zOff+0.850654
));
Sphere.projection[24] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[25] = new Triangle(new Point3D(-0.262869,0.809012,
zOff+0.525738
), new Point3D(-0.723607,0.525725,
zOff+0.447220
), new Point3D(-0.425323,0.309011,
zOff+0.850654
));
Sphere.projection[25] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[26] = new Triangle(new Point3D(-0.425323,0.309011,
zOff+0.850654
), new Point3D(-0.425323,-0.309011,
zOff+0.850654
), new Point3D(0.000000,0.000000,
zOff+1.000000
));
Sphere.projection[26] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[27] = new Triangle(new Point3D(-0.425323,0.309011,
zOff+0.850654
), new Point3D(-0.850648,0.000000,
zOff+0.525736
), new Point3D(-0.425323,-0.309011,
zOff+0.850654
));
Sphere.projection[27] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[28] = new Triangle(new Point3D(-0.850648,0.000000,
zOff+0.525736
), new Point3D(-0.723607,-0.525725,
zOff+0.447220
), new Point3D(-0.425323,-0.309011,
zOff+0.850654
));
Sphere.projection[28] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[29] = new Triangle(new Point3D(-0.425323,-0.309011,
zOff+0.850654
), new Point3D(0.162456,-0.499995,
zOff+0.850654
), new Point3D(0.000000,0.000000,
zOff+1.000000
));
Sphere.projection[29] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[30] = new Triangle(new Point3D(-0.425323,-0.309011,
zOff+0.850654
), new Point3D(-0.262869,-0.809012,
zOff+0.525738
), new Point3D(0.162456,-0.499995,
zOff+0.850654
));
Sphere.projection[30] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[31] = new Triangle(new Point3D(-0.262869,-0.809012,
zOff+0.525738
), new Point3D(0.276388,-0.850649,
zOff+0.447220
), new Point3D(0.162456,-0.499995,
zOff+0.850654
));
Sphere.projection[31] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[32] = new Triangle(new Point3D(0.162456,-0.499995,
zOff+0.850654
), new Point3D(0.525730,0.000000,
zOff+0.850652
), new Point3D(0.000000,0.000000,
zOff+1.000000
));
Sphere.projection[32] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[33] = new Triangle(new Point3D(0.162456,-0.499995,
zOff+0.850654
), new Point3D(0.688189,-0.499997,
zOff+0.525736
), new Point3D(0.525730,0.000000,
zOff+0.850652
));
Sphere.projection[33] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[34] = new Triangle(new Point3D(0.688189,-0.499997,
zOff+0.525736
), new Point3D(0.894426,0.000000,
zOff+0.447216
), new Point3D(0.525730,0.000000,
zOff+0.850652
));
Sphere.projection[34] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[35] = new Triangle(new Point3D(0.951058,0.309013,
zOff+0.000000
), new Point3D(0.688189,0.499997,
zOff+0.525736
), new Point3D(0.894426,0.000000,
zOff+0.447216
));
Sphere.projection[35] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[36] = new Triangle(new Point3D(0.951058,0.309013,
zOff+0.000000
), new Point3D(0.587786,0.809017,
zOff+0.000000
), new Point3D(0.688189,0.499997,
zOff+0.525736
));
Sphere.projection[36] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[37] = new Triangle(new Point3D(0.587786,0.809017,
zOff+0.000000
), new Point3D(0.276388,0.850649,
zOff+0.447220
), new Point3D(0.688189,0.499997,
zOff+0.525736
));
Sphere.projection[37] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[38] = new Triangle(new Point3D(0.000000,1.000000,
zOff+0.000000
), new Point3D(-0.262869,0.809012,
zOff+0.525738
), new Point3D(0.276388,0.850649,
zOff+0.447220
));
Sphere.projection[38] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[39] = new Triangle(new Point3D(0.000000,1.000000,
zOff+0.000000
), new Point3D(-0.587786,0.809017,
zOff+0.000000
), new Point3D(-0.262869,0.809012,
zOff+0.525738
));
Sphere.projection[39] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[40] = new Triangle(new Point3D(-0.587786,0.809017,
zOff+0.000000
), new Point3D(-0.723607,0.525725,
zOff+0.447220
), new Point3D(-0.262869,0.809012,
zOff+0.525738
));
Sphere.projection[40] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[41] = new Triangle(new Point3D(-0.951058,0.309013,
zOff+0.000000
), new Point3D(-0.850648,0.000000,
zOff+0.525736
), new Point3D(-0.723607,0.525725,
zOff+0.447220
));
Sphere.projection[41] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[42] = new Triangle(new Point3D(-0.951058,0.309013,
zOff+0.000000
), new Point3D(-0.951058,-0.309013,
zOff+0.000000
), new Point3D(-0.850648,0.000000,
zOff+0.525736
));
Sphere.projection[42] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[43] = new Triangle(new Point3D(-0.951058,-0.309013,
zOff+0.000000
), new Point3D(-0.723607,-0.525725,
zOff+0.447220
), new Point3D(-0.850648,0.000000,
zOff+0.525736
));
Sphere.projection[43] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[44] = new Triangle(new Point3D(-0.587786,-0.809017,
zOff+0.000000
), new Point3D(-0.262869,-0.809012,
zOff+0.525738
), new Point3D(-0.723607,-0.525725,
zOff+0.447220
));
Sphere.projection[44] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[45] = new Triangle(new Point3D(-0.587786,-0.809017,
zOff+0.000000
), new Point3D(0.000000,-1.000000,
zOff+0.000000
), new Point3D(-0.262869,-0.809012,
zOff+0.525738
));
Sphere.projection[45] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[46] = new Triangle(new Point3D(0.000000,-1.000000,
zOff+0.000000
), new Point3D(0.276388,-0.850649,
zOff+0.447220
), new Point3D(-0.262869,-0.809012,
zOff+0.525738
));
Sphere.projection[46] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[47] = new Triangle(new Point3D(0.587786,-0.809017,
zOff+0.000000
), new Point3D(0.688189,-0.499997,
zOff+0.525736
), new Point3D(0.276388,-0.850649,
zOff+0.447220
));
Sphere.projection[47] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[48] = new Triangle(new Point3D(0.587786,-0.809017,
zOff+0.000000
), new Point3D(0.951058,-0.309013,
zOff+0.000000
), new Point3D(0.688189,-0.499997,
zOff+0.525736
));
Sphere.projection[48] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[49] = new Triangle(new Point3D(0.951058,-0.309013,
zOff+0.000000
), new Point3D(0.894426,0.000000,
zOff+0.447216
), new Point3D(0.688189,-0.499997,
zOff+0.525736
));
Sphere.projection[49] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[50] = new Triangle(new Point3D(0.587786,0.809017,
zOff+0.000000
), new Point3D(0.000000,1.000000,
zOff+0.000000
), new Point3D(0.276388,0.850649,
zOff+0.447220
));
Sphere.projection[50] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[51] = new Triangle(new Point3D(0.587786,0.809017,
zOff+0.000000
), new Point3D(0.262869,0.809012,
zOff-0.525738
), new Point3D(0.000000,1.000000,
zOff+0.000000
));
Sphere.projection[51] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[52] = new Triangle(new Point3D(0.262869,0.809012,
zOff-0.525738
), new Point3D(-0.276388,0.850649,
zOff-0.447220
), new Point3D(0.000000,1.000000,
zOff+0.000000
));
Sphere.projection[52] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[53] = new Triangle(new Point3D(-0.587786,0.809017,
zOff+0.000000
), new Point3D(-0.951058,0.309013,
zOff+0.000000
), new Point3D(-0.723607,0.525725,
zOff+0.447220
));
Sphere.projection[53] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[54] = new Triangle(new Point3D(-0.587786,0.809017,
zOff+0.000000
), new Point3D(-0.688189,0.499997,
zOff-0.525736
), new Point3D(-0.951058,0.309013,
zOff+0.000000
));
Sphere.projection[54] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[55] = new Triangle(new Point3D(-0.688189,0.499997,
zOff-0.525736
), new Point3D(-0.894426,0.000000,
zOff-0.447216
), new Point3D(-0.951058,0.309013,
zOff+0.000000
));
Sphere.projection[55] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[56] = new Triangle(new Point3D(-0.951058,-0.309013,
zOff+0.000000
), new Point3D(-0.587786,-0.809017,
zOff+0.000000
), new Point3D(-0.723607,-0.525725,
zOff+0.447220
));
Sphere.projection[56] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[57] = new Triangle(new Point3D(-0.951058,-0.309013,
zOff+0.000000
), new Point3D(-0.688189,-0.499997,
zOff-0.525736
), new Point3D(-0.587786,-0.809017,
zOff+0.000000
));
Sphere.projection[57] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[58] = new Triangle(new Point3D(-0.688189,-0.499997,
zOff-0.525736
), new Point3D(-0.276388,-0.850649,
zOff-0.447220
), new Point3D(-0.587786,-0.809017,
zOff+0.000000
));
Sphere.projection[58] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[59] = new Triangle(new Point3D(0.000000,-1.000000,
zOff+0.000000
), new Point3D(0.587786,-0.809017,
zOff+0.000000
), new Point3D(0.276388,-0.850649,
zOff+0.447220
));
Sphere.projection[59] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[60] = new Triangle(new Point3D(0.000000,-1.000000,
zOff+0.000000
), new Point3D(0.262869,-0.809012,
zOff-0.525738
), new Point3D(0.587786,-0.809017,
zOff+0.000000
));
Sphere.projection[60] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[61] = new Triangle(new Point3D(0.262869,-0.809012,
zOff-0.525738
), new Point3D(0.723607,-0.525725,
zOff-0.447220
), new Point3D(0.587786,-0.809017,
zOff+0.000000
));
Sphere.projection[61] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[62] = new Triangle(new Point3D(0.951058,-0.309013,
zOff+0.000000
), new Point3D(0.951058,0.309013,
zOff+0.000000
), new Point3D(0.894426,0.000000,
zOff+0.447216
));
Sphere.projection[62] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[63] = new Triangle(new Point3D(0.951058,-0.309013,
zOff+0.000000
), new Point3D(0.850648,0.000000,
zOff-0.525736
), new Point3D(0.951058,0.309013,
zOff+0.000000
));
Sphere.projection[63] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[64] = new Triangle(new Point3D(0.850648,0.000000,
zOff-0.525736
), new Point3D(0.723607,0.525725,
zOff-0.447220
), new Point3D(0.951058,0.309013,
zOff+0.000000
));
Sphere.projection[64] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[65] = new Triangle(new Point3D(0.425323,0.309011,
zOff-0.850654
), new Point3D(0.262869,0.809012,
zOff-0.525738
), new Point3D(0.723607,0.525725,
zOff-0.447220
));
Sphere.projection[65] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[66] = new Triangle(new Point3D(0.425323,0.309011,
zOff-0.850654
), new Point3D(-0.162456,0.499995,
zOff-0.850654
), new Point3D(0.262869,0.809012,
zOff-0.525738
));
Sphere.projection[66] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[67] = new Triangle(new Point3D(-0.162456,0.499995,
zOff-0.850654
), new Point3D(-0.276388,0.850649,
zOff-0.447220
), new Point3D(0.262869,0.809012,
zOff-0.525738
));
Sphere.projection[67] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[68] = new Triangle(new Point3D(-0.162456,0.499995,
zOff-0.850654
), new Point3D(-0.688189,0.499997,
zOff-0.525736
), new Point3D(-0.276388,0.850649,
zOff-0.447220
));
Sphere.projection[68] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[69] = new Triangle(new Point3D(-0.162456,0.499995,
zOff-0.850654
), new Point3D(-0.525730,0.000000,
zOff-0.850652
), new Point3D(-0.688189,0.499997,
zOff-0.525736
));
Sphere.projection[69] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[70] = new Triangle(new Point3D(-0.525730,0.000000,
zOff-0.850652
), new Point3D(-0.894426,0.000000,
zOff-0.447216
), new Point3D(-0.688189,0.499997,
zOff-0.525736
));
Sphere.projection[70] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[71] = new Triangle(new Point3D(-0.525730,0.000000,
zOff-0.850652
), new Point3D(-0.688189,-0.499997,
zOff-0.525736
), new Point3D(-0.894426,0.000000,
zOff-0.447216
));
Sphere.projection[71] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[72] = new Triangle(new Point3D(-0.525730,0.000000,
zOff-0.850652
), new Point3D(-0.162456,-0.499995,
zOff-0.850654
), new Point3D(-0.688189,-0.499997,
zOff-0.525736
));
Sphere.projection[72] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[73] = new Triangle(new Point3D(-0.162456,-0.499995,
zOff-0.850654
), new Point3D(-0.276388,-0.850649,
zOff-0.447220
), new Point3D(-0.688189,-0.499997,
zOff-0.525736
));
Sphere.projection[73] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[74] = new Triangle(new Point3D(0.850648,0.000000,
zOff-0.525736
), new Point3D(0.425323,0.309011,
zOff-0.850654
), new Point3D(0.723607,0.525725,
zOff-0.447220
));
Sphere.projection[74] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[75] = new Triangle(new Point3D(0.850648,0.000000,
zOff-0.525736
), new Point3D(0.425323,-0.309011,
zOff-0.850654
), new Point3D(0.425323,0.309011,
zOff-0.850654
));
Sphere.projection[75] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[76] = new Triangle(new Point3D(0.425323,-0.309011,
zOff-0.850654
), new Point3D(0.000000,0.000000,
zOff-1.000000
), new Point3D(0.425323,0.309011,
zOff-0.850654
));
Sphere.projection[76] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[77] = new Triangle(new Point3D(-0.162456,-0.499995,
zOff-0.850654
), new Point3D(0.262869,-0.809012,
zOff-0.525738
), new Point3D(-0.276388,-0.850649,
zOff-0.447220
));
Sphere.projection[77] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[78] = new Triangle(new Point3D(-0.162456,-0.499995,
zOff-0.850654
), new Point3D(0.425323,-0.309011,
zOff-0.850654
), new Point3D(0.262869,-0.809012,
zOff-0.525738
));
Sphere.projection[78] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
Sphere.triangles[79] = new Triangle(new Point3D(0.425323,-0.309011,
zOff-0.850654
), new Point3D(0.723607,-0.525725,
zOff-0.447220
), new Point3D(0.262869,-0.809012,
zOff-0.525738
));
Sphere.projection[79] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
const PI=3.1415926535897932384626433;


