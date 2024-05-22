import Util from "./Util";
import Point3D from "./Point3D";
import Point2D from "./Point2D";
import Triangle from "./Triangle";

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

export default Sphere
