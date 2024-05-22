import Point3D from "./Point3D";
import Util from "./Util";

export default class Camera {
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