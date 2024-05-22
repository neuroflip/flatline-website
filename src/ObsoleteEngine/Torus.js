import Util from "./Util";
import Point3D from "./Point3D";
import Point2D from "./Point2D";
import Triangle from "./Triangle";

const Torus = {
        triangles: Util.createArray(12),
        projection: Util.createArray(12)
    }, zOff = 30;

Torus.triangles[0] = new Triangle(new Point3D(1.250000,0.000000,
    zOff+0.000000
    ), new Point3D(1.239306,0.163158,
    zOff+0.000000
    ), new Point3D(1.206099,0.158786,
    zOff+0.125000
    ));
    Torus.projection[0] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1] = new Triangle(new Point3D(1.206099,0.158786,
    zOff+0.125000
    ), new Point3D(1.216506,0.000000,
    zOff+0.125000
    ), new Point3D(1.250000,0.000000,
    zOff+0.000000
    ));
    Torus.projection[1] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[2] = new Triangle(new Point3D(1.216506,0.000000,
    zOff+0.125000
    ), new Point3D(1.206099,0.158786,
    zOff+0.125000
    ), new Point3D(1.115376,0.146842,
    zOff+0.216506
    ));
    Torus.projection[2] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[3] = new Triangle(new Point3D(1.115376,0.146842,
    zOff+0.216506
    ), new Point3D(1.125000,0.000000,
    zOff+0.216506
    ), new Point3D(1.216506,0.000000,
    zOff+0.125000
    ));
    Torus.projection[3] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[4] = new Triangle(new Point3D(1.125000,0.000000,
    zOff+0.216506
    ), new Point3D(1.115376,0.146842,
    zOff+0.216506
    ), new Point3D(0.991445,0.130526,
    zOff+0.250000
    ));
    Torus.projection[4] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[5] = new Triangle(new Point3D(0.991445,0.130526,
    zOff+0.250000
    ), new Point3D(1.000000,0.000000,
    zOff+0.250000
    ), new Point3D(1.125000,0.000000,
    zOff+0.216506
    ));
    Torus.projection[5] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[6] = new Triangle(new Point3D(1.000000,0.000000,
    zOff+0.250000
    ), new Point3D(0.991445,0.130526,
    zOff+0.250000
    ), new Point3D(0.867514,0.114210,
    zOff+0.216506
    ));
    Torus.projection[6] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[7] = new Triangle(new Point3D(0.867514,0.114210,
    zOff+0.216506
    ), new Point3D(0.875000,0.000000,
    zOff+0.216506
    ), new Point3D(1.000000,0.000000,
    zOff+0.250000
    ));
    Torus.projection[7] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[8] = new Triangle(new Point3D(0.875000,0.000000,
    zOff+0.216506
    ), new Point3D(0.867514,0.114210,
    zOff+0.216506
    ), new Point3D(0.776791,0.102266,
    zOff+0.125000
    ));
    Torus.projection[8] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[9] = new Triangle(new Point3D(0.776791,0.102266,
    zOff+0.125000
    ), new Point3D(0.783494,0.000000,
    zOff+0.125000
    ), new Point3D(0.875000,0.000000,
    zOff+0.216506
    ));
    Torus.projection[9] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[10] = new Triangle(new Point3D(0.783494,0.000000,
    zOff+0.125000
    ), new Point3D(0.776791,0.102266,
    zOff+0.125000
    ), new Point3D(0.743584,0.097895,
    zOff+0.000000
    ));
    Torus.projection[10] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[11] = new Triangle(new Point3D(0.743584,0.097895,
    zOff+0.000000
    ), new Point3D(0.750000,0.000000,
    zOff+0.000000
    ), new Point3D(0.783494,0.000000,
    zOff+0.125000
    ));
    Torus.projection[11] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[12] = new Triangle(new Point3D(0.750000,0.000000,
    zOff+0.000000
    ), new Point3D(0.743584,0.097895,
    zOff+0.000000
    ), new Point3D(0.776791,0.102266,
    zOff-0.125000
    ));
    Torus.projection[12] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[13] = new Triangle(new Point3D(0.776791,0.102266,
    zOff-0.125000
    ), new Point3D(0.783494,0.000000,
    zOff-0.125000
    ), new Point3D(0.750000,0.000000,
    zOff+0.000000
    ));
    Torus.projection[13] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[14] = new Triangle(new Point3D(0.783494,0.000000,
    zOff-0.125000
    ), new Point3D(0.776791,0.102266,
    zOff-0.125000
    ), new Point3D(0.867514,0.114210,
    zOff-0.216506
    ));
    Torus.projection[14] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[15] = new Triangle(new Point3D(0.867514,0.114210,
    zOff-0.216506
    ), new Point3D(0.875000,0.000000,
    zOff-0.216506
    ), new Point3D(0.783494,0.000000,
    zOff-0.125000
    ));
    Torus.projection[15] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[16] = new Triangle(new Point3D(0.875000,0.000000,
    zOff-0.216506
    ), new Point3D(0.867514,0.114210,
    zOff-0.216506
    ), new Point3D(0.991445,0.130526,
    zOff-0.250000
    ));
    Torus.projection[16] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[17] = new Triangle(new Point3D(0.991445,0.130526,
    zOff-0.250000
    ), new Point3D(1.000000,0.000000,
    zOff-0.250000
    ), new Point3D(0.875000,0.000000,
    zOff-0.216506
    ));
    Torus.projection[17] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[18] = new Triangle(new Point3D(1.000000,0.000000,
    zOff-0.250000
    ), new Point3D(0.991445,0.130526,
    zOff-0.250000
    ), new Point3D(1.115376,0.146842,
    zOff-0.216506
    ));
    Torus.projection[18] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[19] = new Triangle(new Point3D(1.115376,0.146842,
    zOff-0.216506
    ), new Point3D(1.125000,0.000000,
    zOff-0.216506
    ), new Point3D(1.000000,0.000000,
    zOff-0.250000
    ));
    Torus.projection[19] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[20] = new Triangle(new Point3D(1.125000,0.000000,
    zOff-0.216506
    ), new Point3D(1.115376,0.146842,
    zOff-0.216506
    ), new Point3D(1.206099,0.158786,
    zOff-0.125000
    ));
    Torus.projection[20] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[21] = new Triangle(new Point3D(1.206099,0.158786,
    zOff-0.125000
    ), new Point3D(1.216506,0.000000,
    zOff-0.125000
    ), new Point3D(1.125000,0.000000,
    zOff-0.216506
    ));
    Torus.projection[21] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[22] = new Triangle(new Point3D(1.239306,0.163158,
    zOff+0.000000
    ), new Point3D(1.250000,0.000000,
    zOff+0.000000
    ), new Point3D(1.216506,0.000000,
    zOff-0.125000
    ));
    Torus.projection[22] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[23] = new Triangle(new Point3D(1.216506,0.000000,
    zOff-0.125000
    ), new Point3D(1.206099,0.158786,
    zOff-0.125000
    ), new Point3D(1.239306,0.163158,
    zOff+0.000000
    ));
    Torus.projection[23] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[24] = new Triangle(new Point3D(1.239306,0.163158,
    zOff+0.000000
    ), new Point3D(1.207407,0.323524,
    zOff+0.000000
    ), new Point3D(1.175055,0.314855,
    zOff+0.125000
    ));
    Torus.projection[24] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[25] = new Triangle(new Point3D(1.175055,0.314855,
    zOff+0.125000
    ), new Point3D(1.206099,0.158786,
    zOff+0.125000
    ), new Point3D(1.239306,0.163158,
    zOff+0.000000
    ));
    Torus.projection[25] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[26] = new Triangle(new Point3D(1.206099,0.158786,
    zOff+0.125000
    ), new Point3D(1.175055,0.314855,
    zOff+0.125000
    ), new Point3D(1.086667,0.291171,
    zOff+0.216506
    ));
    Torus.projection[26] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[27] = new Triangle(new Point3D(1.086667,0.291171,
    zOff+0.216506
    ), new Point3D(1.115376,0.146842,
    zOff+0.216506
    ), new Point3D(1.206099,0.158786,
    zOff+0.125000
    ));
    Torus.projection[27] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[28] = new Triangle(new Point3D(1.115376,0.146842,
    zOff+0.216506
    ), new Point3D(1.086667,0.291171,
    zOff+0.216506
    ), new Point3D(0.965926,0.258819,
    zOff+0.250000
    ));
    Torus.projection[28] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[29] = new Triangle(new Point3D(0.965926,0.258819,
    zOff+0.250000
    ), new Point3D(0.991445,0.130526,
    zOff+0.250000
    ), new Point3D(1.115376,0.146842,
    zOff+0.216506
    ));
    Torus.projection[29] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[30] = new Triangle(new Point3D(0.991445,0.130526,
    zOff+0.250000
    ), new Point3D(0.965926,0.258819,
    zOff+0.250000
    ), new Point3D(0.845185,0.226467,
    zOff+0.216506
    ));
    Torus.projection[30] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[31] = new Triangle(new Point3D(0.845185,0.226467,
    zOff+0.216506
    ), new Point3D(0.867514,0.114210,
    zOff+0.216506
    ), new Point3D(0.991445,0.130526,
    zOff+0.250000
    ));
    Torus.projection[31] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[32] = new Triangle(new Point3D(0.867514,0.114210,
    zOff+0.216506
    ), new Point3D(0.845185,0.226467,
    zOff+0.216506
    ), new Point3D(0.756797,0.202783,
    zOff+0.125000
    ));
    Torus.projection[32] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[33] = new Triangle(new Point3D(0.756797,0.202783,
    zOff+0.125000
    ), new Point3D(0.776791,0.102266,
    zOff+0.125000
    ), new Point3D(0.867514,0.114210,
    zOff+0.216506
    ));
    Torus.projection[33] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[34] = new Triangle(new Point3D(0.776791,0.102266,
    zOff+0.125000
    ), new Point3D(0.756797,0.202783,
    zOff+0.125000
    ), new Point3D(0.724444,0.194114,
    zOff+0.000000
    ));
    Torus.projection[34] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[35] = new Triangle(new Point3D(0.724444,0.194114,
    zOff+0.000000
    ), new Point3D(0.743584,0.097895,
    zOff+0.000000
    ), new Point3D(0.776791,0.102266,
    zOff+0.125000
    ));
    Torus.projection[35] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[36] = new Triangle(new Point3D(0.743584,0.097895,
    zOff+0.000000
    ), new Point3D(0.724444,0.194114,
    zOff+0.000000
    ), new Point3D(0.756797,0.202783,
    zOff-0.125000
    ));
    Torus.projection[36] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[37] = new Triangle(new Point3D(0.756797,0.202783,
    zOff-0.125000
    ), new Point3D(0.776791,0.102266,
    zOff-0.125000
    ), new Point3D(0.743584,0.097895,
    zOff+0.000000
    ));
    Torus.projection[37] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[38] = new Triangle(new Point3D(0.776791,0.102266,
    zOff-0.125000
    ), new Point3D(0.756797,0.202783,
    zOff-0.125000
    ), new Point3D(0.845185,0.226467,
    zOff-0.216506
    ));
    Torus.projection[38] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[39] = new Triangle(new Point3D(0.845185,0.226467,
    zOff-0.216506
    ), new Point3D(0.867514,0.114210,
    zOff-0.216506
    ), new Point3D(0.776791,0.102266,
    zOff-0.125000
    ));
    Torus.projection[39] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[40] = new Triangle(new Point3D(0.867514,0.114210,
    zOff-0.216506
    ), new Point3D(0.845185,0.226467,
    zOff-0.216506
    ), new Point3D(0.965926,0.258819,
    zOff-0.250000
    ));
    Torus.projection[40] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[41] = new Triangle(new Point3D(0.965926,0.258819,
    zOff-0.250000
    ), new Point3D(0.991445,0.130526,
    zOff-0.250000
    ), new Point3D(0.867514,0.114210,
    zOff-0.216506
    ));
    Torus.projection[41] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[42] = new Triangle(new Point3D(0.991445,0.130526,
    zOff-0.250000
    ), new Point3D(0.965926,0.258819,
    zOff-0.250000
    ), new Point3D(1.086667,0.291171,
    zOff-0.216506
    ));
    Torus.projection[42] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[43] = new Triangle(new Point3D(1.086667,0.291171,
    zOff-0.216506
    ), new Point3D(1.115376,0.146842,
    zOff-0.216506
    ), new Point3D(0.991445,0.130526,
    zOff-0.250000
    ));
    Torus.projection[43] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[44] = new Triangle(new Point3D(1.115376,0.146842,
    zOff-0.216506
    ), new Point3D(1.086667,0.291171,
    zOff-0.216506
    ), new Point3D(1.175055,0.314855,
    zOff-0.125000
    ));
    Torus.projection[44] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[45] = new Triangle(new Point3D(1.175055,0.314855,
    zOff-0.125000
    ), new Point3D(1.206099,0.158786,
    zOff-0.125000
    ), new Point3D(1.115376,0.146842,
    zOff-0.216506
    ));
    Torus.projection[45] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[46] = new Triangle(new Point3D(1.206099,0.158786,
    zOff-0.125000
    ), new Point3D(1.175055,0.314855,
    zOff-0.125000
    ), new Point3D(1.207407,0.323524,
    zOff+0.000000
    ));
    Torus.projection[46] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[47] = new Triangle(new Point3D(1.207407,0.323524,
    zOff+0.000000
    ), new Point3D(1.239306,0.163158,
    zOff+0.000000
    ), new Point3D(1.206099,0.158786,
    zOff-0.125000
    ));
    Torus.projection[47] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[48] = new Triangle(new Point3D(1.207407,0.323524,
    zOff+0.000000
    ), new Point3D(1.154849,0.478354,
    zOff+0.000000
    ), new Point3D(1.123905,0.465537,
    zOff+0.125000
    ));
    Torus.projection[48] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[49] = new Triangle(new Point3D(1.123905,0.465537,
    zOff+0.125000
    ), new Point3D(1.175055,0.314855,
    zOff+0.125000
    ), new Point3D(1.207407,0.323524,
    zOff+0.000000
    ));
    Torus.projection[49] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[50] = new Triangle(new Point3D(1.175055,0.314855,
    zOff+0.125000
    ), new Point3D(1.123905,0.465537,
    zOff+0.125000
    ), new Point3D(1.039364,0.430519,
    zOff+0.216506
    ));
    Torus.projection[50] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[51] = new Triangle(new Point3D(1.039364,0.430519,
    zOff+0.216506
    ), new Point3D(1.086667,0.291171,
    zOff+0.216506
    ), new Point3D(1.175055,0.314855,
    zOff+0.125000
    ));
    Torus.projection[51] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[52] = new Triangle(new Point3D(1.086667,0.291171,
    zOff+0.216506
    ), new Point3D(1.039364,0.430519,
    zOff+0.216506
    ), new Point3D(0.923880,0.382683,
    zOff+0.250000
    ));
    Torus.projection[52] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[53] = new Triangle(new Point3D(0.923880,0.382683,
    zOff+0.250000
    ), new Point3D(0.965926,0.258819,
    zOff+0.250000
    ), new Point3D(1.086667,0.291171,
    zOff+0.216506
    ));
    Torus.projection[53] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[54] = new Triangle(new Point3D(0.965926,0.258819,
    zOff+0.250000
    ), new Point3D(0.923880,0.382683,
    zOff+0.250000
    ), new Point3D(0.808395,0.334848,
    zOff+0.216506
    ));
    Torus.projection[54] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[55] = new Triangle(new Point3D(0.808395,0.334848,
    zOff+0.216506
    ), new Point3D(0.845185,0.226467,
    zOff+0.216506
    ), new Point3D(0.965926,0.258819,
    zOff+0.250000
    ));
    Torus.projection[55] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[56] = new Triangle(new Point3D(0.845185,0.226467,
    zOff+0.216506
    ), new Point3D(0.808395,0.334848,
    zOff+0.216506
    ), new Point3D(0.723854,0.299830,
    zOff+0.125000
    ));
    Torus.projection[56] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[57] = new Triangle(new Point3D(0.723854,0.299830,
    zOff+0.125000
    ), new Point3D(0.756797,0.202783,
    zOff+0.125000
    ), new Point3D(0.845185,0.226467,
    zOff+0.216506
    ));
    Torus.projection[57] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[58] = new Triangle(new Point3D(0.756797,0.202783,
    zOff+0.125000
    ), new Point3D(0.723854,0.299830,
    zOff+0.125000
    ), new Point3D(0.692910,0.287013,
    zOff+0.000000
    ));
    Torus.projection[58] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[59] = new Triangle(new Point3D(0.692910,0.287013,
    zOff+0.000000
    ), new Point3D(0.724444,0.194114,
    zOff+0.000000
    ), new Point3D(0.756797,0.202783,
    zOff+0.125000
    ));
    Torus.projection[59] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[60] = new Triangle(new Point3D(0.724444,0.194114,
    zOff+0.000000
    ), new Point3D(0.692910,0.287013,
    zOff+0.000000
    ), new Point3D(0.723854,0.299830,
    zOff-0.125000
    ));
    Torus.projection[60] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[61] = new Triangle(new Point3D(0.723854,0.299830,
    zOff-0.125000
    ), new Point3D(0.756797,0.202783,
    zOff-0.125000
    ), new Point3D(0.724444,0.194114,
    zOff+0.000000
    ));
    Torus.projection[61] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[62] = new Triangle(new Point3D(0.756797,0.202783,
    zOff-0.125000
    ), new Point3D(0.723854,0.299830,
    zOff-0.125000
    ), new Point3D(0.808395,0.334848,
    zOff-0.216506
    ));
    Torus.projection[62] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[63] = new Triangle(new Point3D(0.808395,0.334848,
    zOff-0.216506
    ), new Point3D(0.845185,0.226467,
    zOff-0.216506
    ), new Point3D(0.756797,0.202783,
    zOff-0.125000
    ));
    Torus.projection[63] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[64] = new Triangle(new Point3D(0.845185,0.226467,
    zOff-0.216506
    ), new Point3D(0.808395,0.334848,
    zOff-0.216506
    ), new Point3D(0.923880,0.382683,
    zOff-0.250000
    ));
    Torus.projection[64] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[65] = new Triangle(new Point3D(0.923880,0.382683,
    zOff-0.250000
    ), new Point3D(0.965926,0.258819,
    zOff-0.250000
    ), new Point3D(0.845185,0.226467,
    zOff-0.216506
    ));
    Torus.projection[65] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[66] = new Triangle(new Point3D(0.965926,0.258819,
    zOff-0.250000
    ), new Point3D(0.923880,0.382683,
    zOff-0.250000
    ), new Point3D(1.039364,0.430519,
    zOff-0.216506
    ));
    Torus.projection[66] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[67] = new Triangle(new Point3D(1.039364,0.430519,
    zOff-0.216506
    ), new Point3D(1.086667,0.291171,
    zOff-0.216506
    ), new Point3D(0.965926,0.258819,
    zOff-0.250000
    ));
    Torus.projection[67] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[68] = new Triangle(new Point3D(1.086667,0.291171,
    zOff-0.216506
    ), new Point3D(1.039364,0.430519,
    zOff-0.216506
    ), new Point3D(1.123905,0.465537,
    zOff-0.125000
    ));
    Torus.projection[68] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[69] = new Triangle(new Point3D(1.123905,0.465537,
    zOff-0.125000
    ), new Point3D(1.175055,0.314855,
    zOff-0.125000
    ), new Point3D(1.086667,0.291171,
    zOff-0.216506
    ));
    Torus.projection[69] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[70] = new Triangle(new Point3D(1.175055,0.314855,
    zOff-0.125000
    ), new Point3D(1.123905,0.465537,
    zOff-0.125000
    ), new Point3D(1.154849,0.478354,
    zOff+0.000000
    ));
    Torus.projection[70] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[71] = new Triangle(new Point3D(1.154849,0.478354,
    zOff+0.000000
    ), new Point3D(1.207407,0.323524,
    zOff+0.000000
    ), new Point3D(1.175055,0.314855,
    zOff-0.125000
    ));
    Torus.projection[71] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[72] = new Triangle(new Point3D(1.154849,0.478354,
    zOff+0.000000
    ), new Point3D(1.082532,0.625000,
    zOff+0.000000
    ), new Point3D(1.053525,0.608253,
    zOff+0.125000
    ));
    Torus.projection[72] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[73] = new Triangle(new Point3D(1.053525,0.608253,
    zOff+0.125000
    ), new Point3D(1.123905,0.465537,
    zOff+0.125000
    ), new Point3D(1.154849,0.478354,
    zOff+0.000000
    ));
    Torus.projection[73] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[74] = new Triangle(new Point3D(1.123905,0.465537,
    zOff+0.125000
    ), new Point3D(1.053525,0.608253,
    zOff+0.125000
    ), new Point3D(0.974279,0.562500,
    zOff+0.216506
    ));
    Torus.projection[74] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[75] = new Triangle(new Point3D(0.974279,0.562500,
    zOff+0.216506
    ), new Point3D(1.039364,0.430519,
    zOff+0.216506
    ), new Point3D(1.123905,0.465537,
    zOff+0.125000
    ));
    Torus.projection[75] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[76] = new Triangle(new Point3D(1.039364,0.430519,
    zOff+0.216506
    ), new Point3D(0.974279,0.562500,
    zOff+0.216506
    ), new Point3D(0.866025,0.500000,
    zOff+0.250000
    ));
    Torus.projection[76] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[77] = new Triangle(new Point3D(0.866025,0.500000,
    zOff+0.250000
    ), new Point3D(0.923880,0.382683,
    zOff+0.250000
    ), new Point3D(1.039364,0.430519,
    zOff+0.216506
    ));
    Torus.projection[77] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[78] = new Triangle(new Point3D(0.923880,0.382683,
    zOff+0.250000
    ), new Point3D(0.866025,0.500000,
    zOff+0.250000
    ), new Point3D(0.757772,0.437500,
    zOff+0.216506
    ));
    Torus.projection[78] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[79] = new Triangle(new Point3D(0.757772,0.437500,
    zOff+0.216506
    ), new Point3D(0.808395,0.334848,
    zOff+0.216506
    ), new Point3D(0.923880,0.382683,
    zOff+0.250000
    ));
    Torus.projection[79] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[80] = new Triangle(new Point3D(0.808395,0.334848,
    zOff+0.216506
    ), new Point3D(0.757772,0.437500,
    zOff+0.216506
    ), new Point3D(0.678525,0.391747,
    zOff+0.125000
    ));
    Torus.projection[80] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[81] = new Triangle(new Point3D(0.678525,0.391747,
    zOff+0.125000
    ), new Point3D(0.723854,0.299830,
    zOff+0.125000
    ), new Point3D(0.808395,0.334848,
    zOff+0.216506
    ));
    Torus.projection[81] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[82] = new Triangle(new Point3D(0.723854,0.299830,
    zOff+0.125000
    ), new Point3D(0.678525,0.391747,
    zOff+0.125000
    ), new Point3D(0.649519,0.375000,
    zOff+0.000000
    ));
    Torus.projection[82] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[83] = new Triangle(new Point3D(0.649519,0.375000,
    zOff+0.000000
    ), new Point3D(0.692910,0.287013,
    zOff+0.000000
    ), new Point3D(0.723854,0.299830,
    zOff+0.125000
    ));
    Torus.projection[83] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[84] = new Triangle(new Point3D(0.692910,0.287013,
    zOff+0.000000
    ), new Point3D(0.649519,0.375000,
    zOff+0.000000
    ), new Point3D(0.678525,0.391747,
    zOff-0.125000
    ));
    Torus.projection[84] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[85] = new Triangle(new Point3D(0.678525,0.391747,
    zOff-0.125000
    ), new Point3D(0.723854,0.299830,
    zOff-0.125000
    ), new Point3D(0.692910,0.287013,
    zOff+0.000000
    ));
    Torus.projection[85] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[86] = new Triangle(new Point3D(0.723854,0.299830,
    zOff-0.125000
    ), new Point3D(0.678525,0.391747,
    zOff-0.125000
    ), new Point3D(0.757772,0.437500,
    zOff-0.216506
    ));
    Torus.projection[86] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[87] = new Triangle(new Point3D(0.757772,0.437500,
    zOff-0.216506
    ), new Point3D(0.808395,0.334848,
    zOff-0.216506
    ), new Point3D(0.723854,0.299830,
    zOff-0.125000
    ));
    Torus.projection[87] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[88] = new Triangle(new Point3D(0.808395,0.334848,
    zOff-0.216506
    ), new Point3D(0.757772,0.437500,
    zOff-0.216506
    ), new Point3D(0.866025,0.500000,
    zOff-0.250000
    ));
    Torus.projection[88] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[89] = new Triangle(new Point3D(0.866025,0.500000,
    zOff-0.250000
    ), new Point3D(0.923880,0.382683,
    zOff-0.250000
    ), new Point3D(0.808395,0.334848,
    zOff-0.216506
    ));
    Torus.projection[89] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[90] = new Triangle(new Point3D(0.923880,0.382683,
    zOff-0.250000
    ), new Point3D(0.866025,0.500000,
    zOff-0.250000
    ), new Point3D(0.974279,0.562500,
    zOff-0.216506
    ));
    Torus.projection[90] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[91] = new Triangle(new Point3D(0.974279,0.562500,
    zOff-0.216506
    ), new Point3D(1.039364,0.430519,
    zOff-0.216506
    ), new Point3D(0.923880,0.382683,
    zOff-0.250000
    ));
    Torus.projection[91] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[92] = new Triangle(new Point3D(1.039364,0.430519,
    zOff-0.216506
    ), new Point3D(0.974279,0.562500,
    zOff-0.216506
    ), new Point3D(1.053525,0.608253,
    zOff-0.125000
    ));
    Torus.projection[92] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[93] = new Triangle(new Point3D(1.053525,0.608253,
    zOff-0.125000
    ), new Point3D(1.123905,0.465537,
    zOff-0.125000
    ), new Point3D(1.039364,0.430519,
    zOff-0.216506
    ));
    Torus.projection[93] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[94] = new Triangle(new Point3D(1.123905,0.465537,
    zOff-0.125000
    ), new Point3D(1.053525,0.608253,
    zOff-0.125000
    ), new Point3D(1.082532,0.625000,
    zOff+0.000000
    ));
    Torus.projection[94] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[95] = new Triangle(new Point3D(1.082532,0.625000,
    zOff+0.000000
    ), new Point3D(1.154849,0.478354,
    zOff+0.000000
    ), new Point3D(1.123905,0.465537,
    zOff-0.125000
    ));
    Torus.projection[95] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[96] = new Triangle(new Point3D(1.082532,0.625000,
    zOff+0.000000
    ), new Point3D(0.991692,0.760952,
    zOff+0.000000
    ), new Point3D(0.965119,0.740562,
    zOff+0.125000
    ));
    Torus.projection[96] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[97] = new Triangle(new Point3D(0.965119,0.740562,
    zOff+0.125000
    ), new Point3D(1.053525,0.608253,
    zOff+0.125000
    ), new Point3D(1.082532,0.625000,
    zOff+0.000000
    ));
    Torus.projection[97] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[98] = new Triangle(new Point3D(1.053525,0.608253,
    zOff+0.125000
    ), new Point3D(0.965119,0.740562,
    zOff+0.125000
    ), new Point3D(0.892523,0.684856,
    zOff+0.216506
    ));
    Torus.projection[98] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[99] = new Triangle(new Point3D(0.892523,0.684856,
    zOff+0.216506
    ), new Point3D(0.974279,0.562500,
    zOff+0.216506
    ), new Point3D(1.053525,0.608253,
    zOff+0.125000
    ));
    Torus.projection[99] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[100] = new Triangle(new Point3D(0.974279,0.562500,
    zOff+0.216506
    ), new Point3D(0.892523,0.684856,
    zOff+0.216506
    ), new Point3D(0.793353,0.608761,
    zOff+0.250000
    ));
    Torus.projection[100] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[101] = new Triangle(new Point3D(0.793353,0.608761,
    zOff+0.250000
    ), new Point3D(0.866025,0.500000,
    zOff+0.250000
    ), new Point3D(0.974279,0.562500,
    zOff+0.216506
    ));
    Torus.projection[101] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[102] = new Triangle(new Point3D(0.866025,0.500000,
    zOff+0.250000
    ), new Point3D(0.793353,0.608761,
    zOff+0.250000
    ), new Point3D(0.694184,0.532666,
    zOff+0.216506
    ));
    Torus.projection[102] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[103] = new Triangle(new Point3D(0.694184,0.532666,
    zOff+0.216506
    ), new Point3D(0.757772,0.437500,
    zOff+0.216506
    ), new Point3D(0.866025,0.500000,
    zOff+0.250000
    ));
    Torus.projection[103] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[104] = new Triangle(new Point3D(0.757772,0.437500,
    zOff+0.216506
    ), new Point3D(0.694184,0.532666,
    zOff+0.216506
    ), new Point3D(0.621587,0.476961,
    zOff+0.125000
    ));
    Torus.projection[104] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[105] = new Triangle(new Point3D(0.621587,0.476961,
    zOff+0.125000
    ), new Point3D(0.678525,0.391747,
    zOff+0.125000
    ), new Point3D(0.757772,0.437500,
    zOff+0.216506
    ));
    Torus.projection[105] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[106] = new Triangle(new Point3D(0.678525,0.391747,
    zOff+0.125000
    ), new Point3D(0.621587,0.476961,
    zOff+0.125000
    ), new Point3D(0.595015,0.456571,
    zOff+0.000000
    ));
    Torus.projection[106] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[107] = new Triangle(new Point3D(0.595015,0.456571,
    zOff+0.000000
    ), new Point3D(0.649519,0.375000,
    zOff+0.000000
    ), new Point3D(0.678525,0.391747,
    zOff+0.125000
    ));
    Torus.projection[107] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[108] = new Triangle(new Point3D(0.649519,0.375000,
    zOff+0.000000
    ), new Point3D(0.595015,0.456571,
    zOff+0.000000
    ), new Point3D(0.621587,0.476961,
    zOff-0.125000
    ));
    Torus.projection[108] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[109] = new Triangle(new Point3D(0.621587,0.476961,
    zOff-0.125000
    ), new Point3D(0.678525,0.391747,
    zOff-0.125000
    ), new Point3D(0.649519,0.375000,
    zOff+0.000000
    ));
    Torus.projection[109] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[110] = new Triangle(new Point3D(0.678525,0.391747,
    zOff-0.125000
    ), new Point3D(0.621587,0.476961,
    zOff-0.125000
    ), new Point3D(0.694184,0.532666,
    zOff-0.216506
    ));
    Torus.projection[110] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[111] = new Triangle(new Point3D(0.694184,0.532666,
    zOff-0.216506
    ), new Point3D(0.757772,0.437500,
    zOff-0.216506
    ), new Point3D(0.678525,0.391747,
    zOff-0.125000
    ));
    Torus.projection[111] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[112] = new Triangle(new Point3D(0.757772,0.437500,
    zOff-0.216506
    ), new Point3D(0.694184,0.532666,
    zOff-0.216506
    ), new Point3D(0.793353,0.608761,
    zOff-0.250000
    ));
    Torus.projection[112] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[113] = new Triangle(new Point3D(0.793353,0.608761,
    zOff-0.250000
    ), new Point3D(0.866025,0.500000,
    zOff-0.250000
    ), new Point3D(0.757772,0.437500,
    zOff-0.216506
    ));
    Torus.projection[113] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[114] = new Triangle(new Point3D(0.866025,0.500000,
    zOff-0.250000
    ), new Point3D(0.793353,0.608761,
    zOff-0.250000
    ), new Point3D(0.892523,0.684856,
    zOff-0.216506
    ));
    Torus.projection[114] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[115] = new Triangle(new Point3D(0.892523,0.684856,
    zOff-0.216506
    ), new Point3D(0.974279,0.562500,
    zOff-0.216506
    ), new Point3D(0.866025,0.500000,
    zOff-0.250000
    ));
    Torus.projection[115] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[116] = new Triangle(new Point3D(0.974279,0.562500,
    zOff-0.216506
    ), new Point3D(0.892523,0.684856,
    zOff-0.216506
    ), new Point3D(0.965119,0.740562,
    zOff-0.125000
    ));
    Torus.projection[116] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[117] = new Triangle(new Point3D(0.965119,0.740562,
    zOff-0.125000
    ), new Point3D(1.053525,0.608253,
    zOff-0.125000
    ), new Point3D(0.974279,0.562500,
    zOff-0.216506
    ));
    Torus.projection[117] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[118] = new Triangle(new Point3D(1.053525,0.608253,
    zOff-0.125000
    ), new Point3D(0.965119,0.740562,
    zOff-0.125000
    ), new Point3D(0.991692,0.760952,
    zOff+0.000000
    ));
    Torus.projection[118] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[119] = new Triangle(new Point3D(0.991692,0.760952,
    zOff+0.000000
    ), new Point3D(1.082532,0.625000,
    zOff+0.000000
    ), new Point3D(1.053525,0.608253,
    zOff-0.125000
    ));
    Torus.projection[119] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[120] = new Triangle(new Point3D(0.991692,0.760952,
    zOff+0.000000
    ), new Point3D(0.883883,0.883884,
    zOff+0.000000
    ), new Point3D(0.860200,0.860200,
    zOff+0.125000
    ));
    Torus.projection[120] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[121] = new Triangle(new Point3D(0.860200,0.860200,
    zOff+0.125000
    ), new Point3D(0.965119,0.740562,
    zOff+0.125000
    ), new Point3D(0.991692,0.760952,
    zOff+0.000000
    ));
    Torus.projection[121] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[122] = new Triangle(new Point3D(0.965119,0.740562,
    zOff+0.125000
    ), new Point3D(0.860200,0.860200,
    zOff+0.125000
    ), new Point3D(0.795495,0.795495,
    zOff+0.216506
    ));
    Torus.projection[122] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[123] = new Triangle(new Point3D(0.795495,0.795495,
    zOff+0.216506
    ), new Point3D(0.892523,0.684856,
    zOff+0.216506
    ), new Point3D(0.965119,0.740562,
    zOff+0.125000
    ));
    Torus.projection[123] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[124] = new Triangle(new Point3D(0.892523,0.684856,
    zOff+0.216506
    ), new Point3D(0.795495,0.795495,
    zOff+0.216506
    ), new Point3D(0.707107,0.707107,
    zOff+0.250000
    ));
    Torus.projection[124] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[125] = new Triangle(new Point3D(0.707107,0.707107,
    zOff+0.250000
    ), new Point3D(0.793353,0.608761,
    zOff+0.250000
    ), new Point3D(0.892523,0.684856,
    zOff+0.216506
    ));
    Torus.projection[125] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[126] = new Triangle(new Point3D(0.793353,0.608761,
    zOff+0.250000
    ), new Point3D(0.707107,0.707107,
    zOff+0.250000
    ), new Point3D(0.618718,0.618719,
    zOff+0.216506
    ));
    Torus.projection[126] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[127] = new Triangle(new Point3D(0.618718,0.618719,
    zOff+0.216506
    ), new Point3D(0.694184,0.532666,
    zOff+0.216506
    ), new Point3D(0.793353,0.608761,
    zOff+0.250000
    ));
    Torus.projection[127] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[128] = new Triangle(new Point3D(0.694184,0.532666,
    zOff+0.216506
    ), new Point3D(0.618718,0.618719,
    zOff+0.216506
    ), new Point3D(0.554014,0.554014,
    zOff+0.125000
    ));
    Torus.projection[128] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[129] = new Triangle(new Point3D(0.554014,0.554014,
    zOff+0.125000
    ), new Point3D(0.621587,0.476961,
    zOff+0.125000
    ), new Point3D(0.694184,0.532666,
    zOff+0.216506
    ));
    Torus.projection[129] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[130] = new Triangle(new Point3D(0.621587,0.476961,
    zOff+0.125000
    ), new Point3D(0.554014,0.554014,
    zOff+0.125000
    ), new Point3D(0.530330,0.530330,
    zOff+0.000000
    ));
    Torus.projection[130] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[131] = new Triangle(new Point3D(0.530330,0.530330,
    zOff+0.000000
    ), new Point3D(0.595015,0.456571,
    zOff+0.000000
    ), new Point3D(0.621587,0.476961,
    zOff+0.125000
    ));
    Torus.projection[131] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[132] = new Triangle(new Point3D(0.595015,0.456571,
    zOff+0.000000
    ), new Point3D(0.530330,0.530330,
    zOff+0.000000
    ), new Point3D(0.554014,0.554014,
    zOff-0.125000
    ));
    Torus.projection[132] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[133] = new Triangle(new Point3D(0.554014,0.554014,
    zOff-0.125000
    ), new Point3D(0.621587,0.476961,
    zOff-0.125000
    ), new Point3D(0.595015,0.456571,
    zOff+0.000000
    ));
    Torus.projection[133] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[134] = new Triangle(new Point3D(0.621587,0.476961,
    zOff-0.125000
    ), new Point3D(0.554014,0.554014,
    zOff-0.125000
    ), new Point3D(0.618718,0.618719,
    zOff-0.216506
    ));
    Torus.projection[134] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[135] = new Triangle(new Point3D(0.618718,0.618719,
    zOff-0.216506
    ), new Point3D(0.694184,0.532666,
    zOff-0.216506
    ), new Point3D(0.621587,0.476961,
    zOff-0.125000
    ));
    Torus.projection[135] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[136] = new Triangle(new Point3D(0.694184,0.532666,
    zOff-0.216506
    ), new Point3D(0.618718,0.618719,
    zOff-0.216506
    ), new Point3D(0.707107,0.707107,
    zOff-0.250000
    ));
    Torus.projection[136] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[137] = new Triangle(new Point3D(0.707107,0.707107,
    zOff-0.250000
    ), new Point3D(0.793353,0.608761,
    zOff-0.250000
    ), new Point3D(0.694184,0.532666,
    zOff-0.216506
    ));
    Torus.projection[137] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[138] = new Triangle(new Point3D(0.793353,0.608761,
    zOff-0.250000
    ), new Point3D(0.707107,0.707107,
    zOff-0.250000
    ), new Point3D(0.795495,0.795495,
    zOff-0.216506
    ));
    Torus.projection[138] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[139] = new Triangle(new Point3D(0.795495,0.795495,
    zOff-0.216506
    ), new Point3D(0.892523,0.684856,
    zOff-0.216506
    ), new Point3D(0.793353,0.608761,
    zOff-0.250000
    ));
    Torus.projection[139] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[140] = new Triangle(new Point3D(0.892523,0.684856,
    zOff-0.216506
    ), new Point3D(0.795495,0.795495,
    zOff-0.216506
    ), new Point3D(0.860200,0.860200,
    zOff-0.125000
    ));
    Torus.projection[140] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[141] = new Triangle(new Point3D(0.860200,0.860200,
    zOff-0.125000
    ), new Point3D(0.965119,0.740562,
    zOff-0.125000
    ), new Point3D(0.892523,0.684856,
    zOff-0.216506
    ));
    Torus.projection[141] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[142] = new Triangle(new Point3D(0.965119,0.740562,
    zOff-0.125000
    ), new Point3D(0.860200,0.860200,
    zOff-0.125000
    ), new Point3D(0.883883,0.883884,
    zOff+0.000000
    ));
    Torus.projection[142] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[143] = new Triangle(new Point3D(0.883883,0.883884,
    zOff+0.000000
    ), new Point3D(0.991692,0.760952,
    zOff+0.000000
    ), new Point3D(0.965119,0.740562,
    zOff-0.125000
    ));
    Torus.projection[143] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[144] = new Triangle(new Point3D(0.883883,0.883884,
    zOff+0.000000
    ), new Point3D(0.760952,0.991691,
    zOff+0.000000
    ), new Point3D(0.740562,0.965119,
    zOff+0.125000
    ));
    Torus.projection[144] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[145] = new Triangle(new Point3D(0.740562,0.965119,
    zOff+0.125000
    ), new Point3D(0.860200,0.860200,
    zOff+0.125000
    ), new Point3D(0.883883,0.883884,
    zOff+0.000000
    ));
    Torus.projection[145] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[146] = new Triangle(new Point3D(0.860200,0.860200,
    zOff+0.125000
    ), new Point3D(0.740562,0.965119,
    zOff+0.125000
    ), new Point3D(0.684857,0.892522,
    zOff+0.216506
    ));
    Torus.projection[146] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[147] = new Triangle(new Point3D(0.684857,0.892522,
    zOff+0.216506
    ), new Point3D(0.795495,0.795495,
    zOff+0.216506
    ), new Point3D(0.860200,0.860200,
    zOff+0.125000
    ));
    Torus.projection[147] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[148] = new Triangle(new Point3D(0.795495,0.795495,
    zOff+0.216506
    ), new Point3D(0.684857,0.892522,
    zOff+0.216506
    ), new Point3D(0.608762,0.793353,
    zOff+0.250000
    ));
    Torus.projection[148] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[149] = new Triangle(new Point3D(0.608762,0.793353,
    zOff+0.250000
    ), new Point3D(0.707107,0.707107,
    zOff+0.250000
    ), new Point3D(0.795495,0.795495,
    zOff+0.216506
    ));
    Torus.projection[149] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[150] = new Triangle(new Point3D(0.707107,0.707107,
    zOff+0.250000
    ), new Point3D(0.608762,0.793353,
    zOff+0.250000
    ), new Point3D(0.532666,0.694184,
    zOff+0.216506
    ));
    Torus.projection[150] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[151] = new Triangle(new Point3D(0.532666,0.694184,
    zOff+0.216506
    ), new Point3D(0.618718,0.618719,
    zOff+0.216506
    ), new Point3D(0.707107,0.707107,
    zOff+0.250000
    ));
    Torus.projection[151] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[152] = new Triangle(new Point3D(0.618718,0.618719,
    zOff+0.216506
    ), new Point3D(0.532666,0.694184,
    zOff+0.216506
    ), new Point3D(0.476961,0.621587,
    zOff+0.125000
    ));
    Torus.projection[152] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[153] = new Triangle(new Point3D(0.476961,0.621587,
    zOff+0.125000
    ), new Point3D(0.554014,0.554014,
    zOff+0.125000
    ), new Point3D(0.618718,0.618719,
    zOff+0.216506
    ));
    Torus.projection[153] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[154] = new Triangle(new Point3D(0.554014,0.554014,
    zOff+0.125000
    ), new Point3D(0.476961,0.621587,
    zOff+0.125000
    ), new Point3D(0.456571,0.595015,
    zOff+0.000000
    ));
    Torus.projection[154] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[155] = new Triangle(new Point3D(0.456571,0.595015,
    zOff+0.000000
    ), new Point3D(0.530330,0.530330,
    zOff+0.000000
    ), new Point3D(0.554014,0.554014,
    zOff+0.125000
    ));
    Torus.projection[155] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[156] = new Triangle(new Point3D(0.530330,0.530330,
    zOff+0.000000
    ), new Point3D(0.456571,0.595015,
    zOff+0.000000
    ), new Point3D(0.476961,0.621587,
    zOff-0.125000
    ));
    Torus.projection[156] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[157] = new Triangle(new Point3D(0.476961,0.621587,
    zOff-0.125000
    ), new Point3D(0.554014,0.554014,
    zOff-0.125000
    ), new Point3D(0.530330,0.530330,
    zOff+0.000000
    ));
    Torus.projection[157] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[158] = new Triangle(new Point3D(0.554014,0.554014,
    zOff-0.125000
    ), new Point3D(0.476961,0.621587,
    zOff-0.125000
    ), new Point3D(0.532666,0.694184,
    zOff-0.216506
    ));
    Torus.projection[158] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[159] = new Triangle(new Point3D(0.532666,0.694184,
    zOff-0.216506
    ), new Point3D(0.618718,0.618719,
    zOff-0.216506
    ), new Point3D(0.554014,0.554014,
    zOff-0.125000
    ));
    Torus.projection[159] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[160] = new Triangle(new Point3D(0.618718,0.618719,
    zOff-0.216506
    ), new Point3D(0.532666,0.694184,
    zOff-0.216506
    ), new Point3D(0.608762,0.793353,
    zOff-0.250000
    ));
    Torus.projection[160] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[161] = new Triangle(new Point3D(0.608762,0.793353,
    zOff-0.250000
    ), new Point3D(0.707107,0.707107,
    zOff-0.250000
    ), new Point3D(0.618718,0.618719,
    zOff-0.216506
    ));
    Torus.projection[161] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[162] = new Triangle(new Point3D(0.707107,0.707107,
    zOff-0.250000
    ), new Point3D(0.608762,0.793353,
    zOff-0.250000
    ), new Point3D(0.684857,0.892522,
    zOff-0.216506
    ));
    Torus.projection[162] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[163] = new Triangle(new Point3D(0.684857,0.892522,
    zOff-0.216506
    ), new Point3D(0.795495,0.795495,
    zOff-0.216506
    ), new Point3D(0.707107,0.707107,
    zOff-0.250000
    ));
    Torus.projection[163] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[164] = new Triangle(new Point3D(0.795495,0.795495,
    zOff-0.216506
    ), new Point3D(0.684857,0.892522,
    zOff-0.216506
    ), new Point3D(0.740562,0.965119,
    zOff-0.125000
    ));
    Torus.projection[164] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[165] = new Triangle(new Point3D(0.740562,0.965119,
    zOff-0.125000
    ), new Point3D(0.860200,0.860200,
    zOff-0.125000
    ), new Point3D(0.795495,0.795495,
    zOff-0.216506
    ));
    Torus.projection[165] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[166] = new Triangle(new Point3D(0.860200,0.860200,
    zOff-0.125000
    ), new Point3D(0.740562,0.965119,
    zOff-0.125000
    ), new Point3D(0.760952,0.991691,
    zOff+0.000000
    ));
    Torus.projection[166] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[167] = new Triangle(new Point3D(0.760952,0.991691,
    zOff+0.000000
    ), new Point3D(0.883883,0.883884,
    zOff+0.000000
    ), new Point3D(0.860200,0.860200,
    zOff-0.125000
    ));
    Torus.projection[167] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[168] = new Triangle(new Point3D(0.760952,0.991691,
    zOff+0.000000
    ), new Point3D(0.625000,1.082532,
    zOff+0.000000
    ), new Point3D(0.608253,1.053525,
    zOff+0.125000
    ));
    Torus.projection[168] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[169] = new Triangle(new Point3D(0.608253,1.053525,
    zOff+0.125000
    ), new Point3D(0.740562,0.965119,
    zOff+0.125000
    ), new Point3D(0.760952,0.991691,
    zOff+0.000000
    ));
    Torus.projection[169] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[170] = new Triangle(new Point3D(0.740562,0.965119,
    zOff+0.125000
    ), new Point3D(0.608253,1.053525,
    zOff+0.125000
    ), new Point3D(0.562500,0.974279,
    zOff+0.216506
    ));
    Torus.projection[170] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[171] = new Triangle(new Point3D(0.562500,0.974279,
    zOff+0.216506
    ), new Point3D(0.684857,0.892522,
    zOff+0.216506
    ), new Point3D(0.740562,0.965119,
    zOff+0.125000
    ));
    Torus.projection[171] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[172] = new Triangle(new Point3D(0.684857,0.892522,
    zOff+0.216506
    ), new Point3D(0.562500,0.974279,
    zOff+0.216506
    ), new Point3D(0.500000,0.866025,
    zOff+0.250000
    ));
    Torus.projection[172] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[173] = new Triangle(new Point3D(0.500000,0.866025,
    zOff+0.250000
    ), new Point3D(0.608762,0.793353,
    zOff+0.250000
    ), new Point3D(0.684857,0.892522,
    zOff+0.216506
    ));
    Torus.projection[173] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[174] = new Triangle(new Point3D(0.608762,0.793353,
    zOff+0.250000
    ), new Point3D(0.500000,0.866025,
    zOff+0.250000
    ), new Point3D(0.437500,0.757772,
    zOff+0.216506
    ));
    Torus.projection[174] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[175] = new Triangle(new Point3D(0.437500,0.757772,
    zOff+0.216506
    ), new Point3D(0.532666,0.694184,
    zOff+0.216506
    ), new Point3D(0.608762,0.793353,
    zOff+0.250000
    ));
    Torus.projection[175] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[176] = new Triangle(new Point3D(0.532666,0.694184,
    zOff+0.216506
    ), new Point3D(0.437500,0.757772,
    zOff+0.216506
    ), new Point3D(0.391747,0.678525,
    zOff+0.125000
    ));
    Torus.projection[176] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[177] = new Triangle(new Point3D(0.391747,0.678525,
    zOff+0.125000
    ), new Point3D(0.476961,0.621587,
    zOff+0.125000
    ), new Point3D(0.532666,0.694184,
    zOff+0.216506
    ));
    Torus.projection[177] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[178] = new Triangle(new Point3D(0.476961,0.621587,
    zOff+0.125000
    ), new Point3D(0.391747,0.678525,
    zOff+0.125000
    ), new Point3D(0.375000,0.649519,
    zOff+0.000000
    ));
    Torus.projection[178] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[179] = new Triangle(new Point3D(0.375000,0.649519,
    zOff+0.000000
    ), new Point3D(0.456571,0.595015,
    zOff+0.000000
    ), new Point3D(0.476961,0.621587,
    zOff+0.125000
    ));
    Torus.projection[179] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[180] = new Triangle(new Point3D(0.456571,0.595015,
    zOff+0.000000
    ), new Point3D(0.375000,0.649519,
    zOff+0.000000
    ), new Point3D(0.391747,0.678525,
    zOff-0.125000
    ));
    Torus.projection[180] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[181] = new Triangle(new Point3D(0.391747,0.678525,
    zOff-0.125000
    ), new Point3D(0.476961,0.621587,
    zOff-0.125000
    ), new Point3D(0.456571,0.595015,
    zOff+0.000000
    ));
    Torus.projection[181] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[182] = new Triangle(new Point3D(0.476961,0.621587,
    zOff-0.125000
    ), new Point3D(0.391747,0.678525,
    zOff-0.125000
    ), new Point3D(0.437500,0.757772,
    zOff-0.216506
    ));
    Torus.projection[182] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[183] = new Triangle(new Point3D(0.437500,0.757772,
    zOff-0.216506
    ), new Point3D(0.532666,0.694184,
    zOff-0.216506
    ), new Point3D(0.476961,0.621587,
    zOff-0.125000
    ));
    Torus.projection[183] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[184] = new Triangle(new Point3D(0.532666,0.694184,
    zOff-0.216506
    ), new Point3D(0.437500,0.757772,
    zOff-0.216506
    ), new Point3D(0.500000,0.866025,
    zOff-0.250000
    ));
    Torus.projection[184] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[185] = new Triangle(new Point3D(0.500000,0.866025,
    zOff-0.250000
    ), new Point3D(0.608762,0.793353,
    zOff-0.250000
    ), new Point3D(0.532666,0.694184,
    zOff-0.216506
    ));
    Torus.projection[185] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[186] = new Triangle(new Point3D(0.608762,0.793353,
    zOff-0.250000
    ), new Point3D(0.500000,0.866025,
    zOff-0.250000
    ), new Point3D(0.562500,0.974279,
    zOff-0.216506
    ));
    Torus.projection[186] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[187] = new Triangle(new Point3D(0.562500,0.974279,
    zOff-0.216506
    ), new Point3D(0.684857,0.892522,
    zOff-0.216506
    ), new Point3D(0.608762,0.793353,
    zOff-0.250000
    ));
    Torus.projection[187] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[188] = new Triangle(new Point3D(0.684857,0.892522,
    zOff-0.216506
    ), new Point3D(0.562500,0.974279,
    zOff-0.216506
    ), new Point3D(0.608253,1.053525,
    zOff-0.125000
    ));
    Torus.projection[188] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[189] = new Triangle(new Point3D(0.608253,1.053525,
    zOff-0.125000
    ), new Point3D(0.740562,0.965119,
    zOff-0.125000
    ), new Point3D(0.684857,0.892522,
    zOff-0.216506
    ));
    Torus.projection[189] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[190] = new Triangle(new Point3D(0.740562,0.965119,
    zOff-0.125000
    ), new Point3D(0.608253,1.053525,
    zOff-0.125000
    ), new Point3D(0.625000,1.082532,
    zOff+0.000000
    ));
    Torus.projection[190] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[191] = new Triangle(new Point3D(0.625000,1.082532,
    zOff+0.000000
    ), new Point3D(0.760952,0.991691,
    zOff+0.000000
    ), new Point3D(0.740562,0.965119,
    zOff-0.125000
    ));
    Torus.projection[191] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[192] = new Triangle(new Point3D(0.625000,1.082532,
    zOff+0.000000
    ), new Point3D(0.478355,1.154849,
    zOff+0.000000
    ), new Point3D(0.465537,1.123905,
    zOff+0.125000
    ));
    Torus.projection[192] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[193] = new Triangle(new Point3D(0.465537,1.123905,
    zOff+0.125000
    ), new Point3D(0.608253,1.053525,
    zOff+0.125000
    ), new Point3D(0.625000,1.082532,
    zOff+0.000000
    ));
    Torus.projection[193] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[194] = new Triangle(new Point3D(0.608253,1.053525,
    zOff+0.125000
    ), new Point3D(0.465537,1.123905,
    zOff+0.125000
    ), new Point3D(0.430519,1.039364,
    zOff+0.216506
    ));
    Torus.projection[194] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[195] = new Triangle(new Point3D(0.430519,1.039364,
    zOff+0.216506
    ), new Point3D(0.562500,0.974279,
    zOff+0.216506
    ), new Point3D(0.608253,1.053525,
    zOff+0.125000
    ));
    Torus.projection[195] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[196] = new Triangle(new Point3D(0.562500,0.974279,
    zOff+0.216506
    ), new Point3D(0.430519,1.039364,
    zOff+0.216506
    ), new Point3D(0.382684,0.923879,
    zOff+0.250000
    ));
    Torus.projection[196] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[197] = new Triangle(new Point3D(0.382684,0.923879,
    zOff+0.250000
    ), new Point3D(0.500000,0.866025,
    zOff+0.250000
    ), new Point3D(0.562500,0.974279,
    zOff+0.216506
    ));
    Torus.projection[197] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[198] = new Triangle(new Point3D(0.500000,0.866025,
    zOff+0.250000
    ), new Point3D(0.382684,0.923879,
    zOff+0.250000
    ), new Point3D(0.334848,0.808394,
    zOff+0.216506
    ));
    Torus.projection[198] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[199] = new Triangle(new Point3D(0.334848,0.808394,
    zOff+0.216506
    ), new Point3D(0.437500,0.757772,
    zOff+0.216506
    ), new Point3D(0.500000,0.866025,
    zOff+0.250000
    ));
    Torus.projection[199] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[200] = new Triangle(new Point3D(0.437500,0.757772,
    zOff+0.216506
    ), new Point3D(0.334848,0.808394,
    zOff+0.216506
    ), new Point3D(0.299830,0.723854,
    zOff+0.125000
    ));
    Torus.projection[200] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[201] = new Triangle(new Point3D(0.299830,0.723854,
    zOff+0.125000
    ), new Point3D(0.391747,0.678525,
    zOff+0.125000
    ), new Point3D(0.437500,0.757772,
    zOff+0.216506
    ));
    Torus.projection[201] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[202] = new Triangle(new Point3D(0.391747,0.678525,
    zOff+0.125000
    ), new Point3D(0.299830,0.723854,
    zOff+0.125000
    ), new Point3D(0.287013,0.692910,
    zOff+0.000000
    ));
    Torus.projection[202] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[203] = new Triangle(new Point3D(0.287013,0.692910,
    zOff+0.000000
    ), new Point3D(0.375000,0.649519,
    zOff+0.000000
    ), new Point3D(0.391747,0.678525,
    zOff+0.125000
    ));
    Torus.projection[203] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[204] = new Triangle(new Point3D(0.375000,0.649519,
    zOff+0.000000
    ), new Point3D(0.287013,0.692910,
    zOff+0.000000
    ), new Point3D(0.299830,0.723854,
    zOff-0.125000
    ));
    Torus.projection[204] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[205] = new Triangle(new Point3D(0.299830,0.723854,
    zOff-0.125000
    ), new Point3D(0.391747,0.678525,
    zOff-0.125000
    ), new Point3D(0.375000,0.649519,
    zOff+0.000000
    ));
    Torus.projection[205] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[206] = new Triangle(new Point3D(0.391747,0.678525,
    zOff-0.125000
    ), new Point3D(0.299830,0.723854,
    zOff-0.125000
    ), new Point3D(0.334848,0.808394,
    zOff-0.216506
    ));
    Torus.projection[206] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[207] = new Triangle(new Point3D(0.334848,0.808394,
    zOff-0.216506
    ), new Point3D(0.437500,0.757772,
    zOff-0.216506
    ), new Point3D(0.391747,0.678525,
    zOff-0.125000
    ));
    Torus.projection[207] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[208] = new Triangle(new Point3D(0.437500,0.757772,
    zOff-0.216506
    ), new Point3D(0.334848,0.808394,
    zOff-0.216506
    ), new Point3D(0.382684,0.923879,
    zOff-0.250000
    ));
    Torus.projection[208] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[209] = new Triangle(new Point3D(0.382684,0.923879,
    zOff-0.250000
    ), new Point3D(0.500000,0.866025,
    zOff-0.250000
    ), new Point3D(0.437500,0.757772,
    zOff-0.216506
    ));
    Torus.projection[209] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[210] = new Triangle(new Point3D(0.500000,0.866025,
    zOff-0.250000
    ), new Point3D(0.382684,0.923879,
    zOff-0.250000
    ), new Point3D(0.430519,1.039364,
    zOff-0.216506
    ));
    Torus.projection[210] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[211] = new Triangle(new Point3D(0.430519,1.039364,
    zOff-0.216506
    ), new Point3D(0.562500,0.974279,
    zOff-0.216506
    ), new Point3D(0.500000,0.866025,
    zOff-0.250000
    ));
    Torus.projection[211] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[212] = new Triangle(new Point3D(0.562500,0.974279,
    zOff-0.216506
    ), new Point3D(0.430519,1.039364,
    zOff-0.216506
    ), new Point3D(0.465537,1.123905,
    zOff-0.125000
    ));
    Torus.projection[212] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[213] = new Triangle(new Point3D(0.465537,1.123905,
    zOff-0.125000
    ), new Point3D(0.608253,1.053525,
    zOff-0.125000
    ), new Point3D(0.562500,0.974279,
    zOff-0.216506
    ));
    Torus.projection[213] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[214] = new Triangle(new Point3D(0.608253,1.053525,
    zOff-0.125000
    ), new Point3D(0.465537,1.123905,
    zOff-0.125000
    ), new Point3D(0.478355,1.154849,
    zOff+0.000000
    ));
    Torus.projection[214] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[215] = new Triangle(new Point3D(0.478355,1.154849,
    zOff+0.000000
    ), new Point3D(0.625000,1.082532,
    zOff+0.000000
    ), new Point3D(0.608253,1.053525,
    zOff-0.125000
    ));
    Torus.projection[215] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[216] = new Triangle(new Point3D(0.478355,1.154849,
    zOff+0.000000
    ), new Point3D(0.323524,1.207407,
    zOff+0.000000
    ), new Point3D(0.314855,1.175055,
    zOff+0.125000
    ));
    Torus.projection[216] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[217] = new Triangle(new Point3D(0.314855,1.175055,
    zOff+0.125000
    ), new Point3D(0.465537,1.123905,
    zOff+0.125000
    ), new Point3D(0.478355,1.154849,
    zOff+0.000000
    ));
    Torus.projection[217] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[218] = new Triangle(new Point3D(0.465537,1.123905,
    zOff+0.125000
    ), new Point3D(0.314855,1.175055,
    zOff+0.125000
    ), new Point3D(0.291171,1.086667,
    zOff+0.216506
    ));
    Torus.projection[218] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[219] = new Triangle(new Point3D(0.291171,1.086667,
    zOff+0.216506
    ), new Point3D(0.430519,1.039364,
    zOff+0.216506
    ), new Point3D(0.465537,1.123905,
    zOff+0.125000
    ));
    Torus.projection[219] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[220] = new Triangle(new Point3D(0.430519,1.039364,
    zOff+0.216506
    ), new Point3D(0.291171,1.086667,
    zOff+0.216506
    ), new Point3D(0.258819,0.965926,
    zOff+0.250000
    ));
    Torus.projection[220] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[221] = new Triangle(new Point3D(0.258819,0.965926,
    zOff+0.250000
    ), new Point3D(0.382684,0.923879,
    zOff+0.250000
    ), new Point3D(0.430519,1.039364,
    zOff+0.216506
    ));
    Torus.projection[221] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[222] = new Triangle(new Point3D(0.382684,0.923879,
    zOff+0.250000
    ), new Point3D(0.258819,0.965926,
    zOff+0.250000
    ), new Point3D(0.226467,0.845185,
    zOff+0.216506
    ));
    Torus.projection[222] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[223] = new Triangle(new Point3D(0.226467,0.845185,
    zOff+0.216506
    ), new Point3D(0.334848,0.808394,
    zOff+0.216506
    ), new Point3D(0.382684,0.923879,
    zOff+0.250000
    ));
    Torus.projection[223] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[224] = new Triangle(new Point3D(0.334848,0.808394,
    zOff+0.216506
    ), new Point3D(0.226467,0.845185,
    zOff+0.216506
    ), new Point3D(0.202783,0.756797,
    zOff+0.125000
    ));
    Torus.projection[224] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[225] = new Triangle(new Point3D(0.202783,0.756797,
    zOff+0.125000
    ), new Point3D(0.299830,0.723854,
    zOff+0.125000
    ), new Point3D(0.334848,0.808394,
    zOff+0.216506
    ));
    Torus.projection[225] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[226] = new Triangle(new Point3D(0.299830,0.723854,
    zOff+0.125000
    ), new Point3D(0.202783,0.756797,
    zOff+0.125000
    ), new Point3D(0.194114,0.724444,
    zOff+0.000000
    ));
    Torus.projection[226] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[227] = new Triangle(new Point3D(0.194114,0.724444,
    zOff+0.000000
    ), new Point3D(0.287013,0.692910,
    zOff+0.000000
    ), new Point3D(0.299830,0.723854,
    zOff+0.125000
    ));
    Torus.projection[227] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[228] = new Triangle(new Point3D(0.287013,0.692910,
    zOff+0.000000
    ), new Point3D(0.194114,0.724444,
    zOff+0.000000
    ), new Point3D(0.202783,0.756797,
    zOff-0.125000
    ));
    Torus.projection[228] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[229] = new Triangle(new Point3D(0.202783,0.756797,
    zOff-0.125000
    ), new Point3D(0.299830,0.723854,
    zOff-0.125000
    ), new Point3D(0.287013,0.692910,
    zOff+0.000000
    ));
    Torus.projection[229] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[230] = new Triangle(new Point3D(0.299830,0.723854,
    zOff-0.125000
    ), new Point3D(0.202783,0.756797,
    zOff-0.125000
    ), new Point3D(0.226467,0.845185,
    zOff-0.216506
    ));
    Torus.projection[230] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[231] = new Triangle(new Point3D(0.226467,0.845185,
    zOff-0.216506
    ), new Point3D(0.334848,0.808394,
    zOff-0.216506
    ), new Point3D(0.299830,0.723854,
    zOff-0.125000
    ));
    Torus.projection[231] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[232] = new Triangle(new Point3D(0.334848,0.808394,
    zOff-0.216506
    ), new Point3D(0.226467,0.845185,
    zOff-0.216506
    ), new Point3D(0.258819,0.965926,
    zOff-0.250000
    ));
    Torus.projection[232] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[233] = new Triangle(new Point3D(0.258819,0.965926,
    zOff-0.250000
    ), new Point3D(0.382684,0.923879,
    zOff-0.250000
    ), new Point3D(0.334848,0.808394,
    zOff-0.216506
    ));
    Torus.projection[233] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[234] = new Triangle(new Point3D(0.382684,0.923879,
    zOff-0.250000
    ), new Point3D(0.258819,0.965926,
    zOff-0.250000
    ), new Point3D(0.291171,1.086667,
    zOff-0.216506
    ));
    Torus.projection[234] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[235] = new Triangle(new Point3D(0.291171,1.086667,
    zOff-0.216506
    ), new Point3D(0.430519,1.039364,
    zOff-0.216506
    ), new Point3D(0.382684,0.923879,
    zOff-0.250000
    ));
    Torus.projection[235] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[236] = new Triangle(new Point3D(0.430519,1.039364,
    zOff-0.216506
    ), new Point3D(0.291171,1.086667,
    zOff-0.216506
    ), new Point3D(0.314855,1.175055,
    zOff-0.125000
    ));
    Torus.projection[236] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[237] = new Triangle(new Point3D(0.314855,1.175055,
    zOff-0.125000
    ), new Point3D(0.465537,1.123905,
    zOff-0.125000
    ), new Point3D(0.430519,1.039364,
    zOff-0.216506
    ));
    Torus.projection[237] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[238] = new Triangle(new Point3D(0.465537,1.123905,
    zOff-0.125000
    ), new Point3D(0.314855,1.175055,
    zOff-0.125000
    ), new Point3D(0.323524,1.207407,
    zOff+0.000000
    ));
    Torus.projection[238] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[239] = new Triangle(new Point3D(0.323524,1.207407,
    zOff+0.000000
    ), new Point3D(0.478355,1.154849,
    zOff+0.000000
    ), new Point3D(0.465537,1.123905,
    zOff-0.125000
    ));
    Torus.projection[239] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[240] = new Triangle(new Point3D(0.323524,1.207407,
    zOff+0.000000
    ), new Point3D(0.163158,1.239306,
    zOff+0.000000
    ), new Point3D(0.158786,1.206099,
    zOff+0.125000
    ));
    Torus.projection[240] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[241] = new Triangle(new Point3D(0.158786,1.206099,
    zOff+0.125000
    ), new Point3D(0.314855,1.175055,
    zOff+0.125000
    ), new Point3D(0.323524,1.207407,
    zOff+0.000000
    ));
    Torus.projection[241] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[242] = new Triangle(new Point3D(0.314855,1.175055,
    zOff+0.125000
    ), new Point3D(0.158786,1.206099,
    zOff+0.125000
    ), new Point3D(0.146842,1.115376,
    zOff+0.216506
    ));
    Torus.projection[242] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[243] = new Triangle(new Point3D(0.146842,1.115376,
    zOff+0.216506
    ), new Point3D(0.291171,1.086667,
    zOff+0.216506
    ), new Point3D(0.314855,1.175055,
    zOff+0.125000
    ));
    Torus.projection[243] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[244] = new Triangle(new Point3D(0.291171,1.086667,
    zOff+0.216506
    ), new Point3D(0.146842,1.115376,
    zOff+0.216506
    ), new Point3D(0.130526,0.991445,
    zOff+0.250000
    ));
    Torus.projection[244] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[245] = new Triangle(new Point3D(0.130526,0.991445,
    zOff+0.250000
    ), new Point3D(0.258819,0.965926,
    zOff+0.250000
    ), new Point3D(0.291171,1.086667,
    zOff+0.216506
    ));
    Torus.projection[245] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[246] = new Triangle(new Point3D(0.258819,0.965926,
    zOff+0.250000
    ), new Point3D(0.130526,0.991445,
    zOff+0.250000
    ), new Point3D(0.114210,0.867514,
    zOff+0.216506
    ));
    Torus.projection[246] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[247] = new Triangle(new Point3D(0.114210,0.867514,
    zOff+0.216506
    ), new Point3D(0.226467,0.845185,
    zOff+0.216506
    ), new Point3D(0.258819,0.965926,
    zOff+0.250000
    ));
    Torus.projection[247] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[248] = new Triangle(new Point3D(0.226467,0.845185,
    zOff+0.216506
    ), new Point3D(0.114210,0.867514,
    zOff+0.216506
    ), new Point3D(0.102266,0.776791,
    zOff+0.125000
    ));
    Torus.projection[248] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[249] = new Triangle(new Point3D(0.102266,0.776791,
    zOff+0.125000
    ), new Point3D(0.202783,0.756797,
    zOff+0.125000
    ), new Point3D(0.226467,0.845185,
    zOff+0.216506
    ));
    Torus.projection[249] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[250] = new Triangle(new Point3D(0.202783,0.756797,
    zOff+0.125000
    ), new Point3D(0.102266,0.776791,
    zOff+0.125000
    ), new Point3D(0.097895,0.743584,
    zOff+0.000000
    ));
    Torus.projection[250] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[251] = new Triangle(new Point3D(0.097895,0.743584,
    zOff+0.000000
    ), new Point3D(0.194114,0.724444,
    zOff+0.000000
    ), new Point3D(0.202783,0.756797,
    zOff+0.125000
    ));
    Torus.projection[251] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[252] = new Triangle(new Point3D(0.194114,0.724444,
    zOff+0.000000
    ), new Point3D(0.097895,0.743584,
    zOff+0.000000
    ), new Point3D(0.102266,0.776791,
    zOff-0.125000
    ));
    Torus.projection[252] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[253] = new Triangle(new Point3D(0.102266,0.776791,
    zOff-0.125000
    ), new Point3D(0.202783,0.756797,
    zOff-0.125000
    ), new Point3D(0.194114,0.724444,
    zOff+0.000000
    ));
    Torus.projection[253] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[254] = new Triangle(new Point3D(0.202783,0.756797,
    zOff-0.125000
    ), new Point3D(0.102266,0.776791,
    zOff-0.125000
    ), new Point3D(0.114210,0.867514,
    zOff-0.216506
    ));
    Torus.projection[254] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[255] = new Triangle(new Point3D(0.114210,0.867514,
    zOff-0.216506
    ), new Point3D(0.226467,0.845185,
    zOff-0.216506
    ), new Point3D(0.202783,0.756797,
    zOff-0.125000
    ));
    Torus.projection[255] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[256] = new Triangle(new Point3D(0.226467,0.845185,
    zOff-0.216506
    ), new Point3D(0.114210,0.867514,
    zOff-0.216506
    ), new Point3D(0.130526,0.991445,
    zOff-0.250000
    ));
    Torus.projection[256] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[257] = new Triangle(new Point3D(0.130526,0.991445,
    zOff-0.250000
    ), new Point3D(0.258819,0.965926,
    zOff-0.250000
    ), new Point3D(0.226467,0.845185,
    zOff-0.216506
    ));
    Torus.projection[257] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[258] = new Triangle(new Point3D(0.258819,0.965926,
    zOff-0.250000
    ), new Point3D(0.130526,0.991445,
    zOff-0.250000
    ), new Point3D(0.146842,1.115376,
    zOff-0.216506
    ));
    Torus.projection[258] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[259] = new Triangle(new Point3D(0.146842,1.115376,
    zOff-0.216506
    ), new Point3D(0.291171,1.086667,
    zOff-0.216506
    ), new Point3D(0.258819,0.965926,
    zOff-0.250000
    ));
    Torus.projection[259] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[260] = new Triangle(new Point3D(0.291171,1.086667,
    zOff-0.216506
    ), new Point3D(0.146842,1.115376,
    zOff-0.216506
    ), new Point3D(0.158786,1.206099,
    zOff-0.125000
    ));
    Torus.projection[260] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[261] = new Triangle(new Point3D(0.158786,1.206099,
    zOff-0.125000
    ), new Point3D(0.314855,1.175055,
    zOff-0.125000
    ), new Point3D(0.291171,1.086667,
    zOff-0.216506
    ));
    Torus.projection[261] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[262] = new Triangle(new Point3D(0.314855,1.175055,
    zOff-0.125000
    ), new Point3D(0.158786,1.206099,
    zOff-0.125000
    ), new Point3D(0.163158,1.239306,
    zOff+0.000000
    ));
    Torus.projection[262] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[263] = new Triangle(new Point3D(0.163158,1.239306,
    zOff+0.000000
    ), new Point3D(0.323524,1.207407,
    zOff+0.000000
    ), new Point3D(0.314855,1.175055,
    zOff-0.125000
    ));
    Torus.projection[263] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[264] = new Triangle(new Point3D(0.163158,1.239306,
    zOff+0.000000
    ), new Point3D(0.000000,1.250000,
    zOff+0.000000
    ), new Point3D(0.000000,1.216506,
    zOff+0.125000
    ));
    Torus.projection[264] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[265] = new Triangle(new Point3D(0.000000,1.216506,
    zOff+0.125000
    ), new Point3D(0.158786,1.206099,
    zOff+0.125000
    ), new Point3D(0.163158,1.239306,
    zOff+0.000000
    ));
    Torus.projection[265] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[266] = new Triangle(new Point3D(0.158786,1.206099,
    zOff+0.125000
    ), new Point3D(0.000000,1.216506,
    zOff+0.125000
    ), new Point3D(0.000000,1.125000,
    zOff+0.216506
    ));
    Torus.projection[266] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[267] = new Triangle(new Point3D(0.000000,1.125000,
    zOff+0.216506
    ), new Point3D(0.146842,1.115376,
    zOff+0.216506
    ), new Point3D(0.158786,1.206099,
    zOff+0.125000
    ));
    Torus.projection[267] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[268] = new Triangle(new Point3D(0.146842,1.115376,
    zOff+0.216506
    ), new Point3D(0.000000,1.125000,
    zOff+0.216506
    ), new Point3D(0.000000,1.000000,
    zOff+0.250000
    ));
    Torus.projection[268] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[269] = new Triangle(new Point3D(0.000000,1.000000,
    zOff+0.250000
    ), new Point3D(0.130526,0.991445,
    zOff+0.250000
    ), new Point3D(0.146842,1.115376,
    zOff+0.216506
    ));
    Torus.projection[269] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[270] = new Triangle(new Point3D(0.130526,0.991445,
    zOff+0.250000
    ), new Point3D(0.000000,1.000000,
    zOff+0.250000
    ), new Point3D(0.000000,0.875000,
    zOff+0.216506
    ));
    Torus.projection[270] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[271] = new Triangle(new Point3D(0.000000,0.875000,
    zOff+0.216506
    ), new Point3D(0.114210,0.867514,
    zOff+0.216506
    ), new Point3D(0.130526,0.991445,
    zOff+0.250000
    ));
    Torus.projection[271] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[272] = new Triangle(new Point3D(0.114210,0.867514,
    zOff+0.216506
    ), new Point3D(0.000000,0.875000,
    zOff+0.216506
    ), new Point3D(0.000000,0.783494,
    zOff+0.125000
    ));
    Torus.projection[272] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[273] = new Triangle(new Point3D(0.000000,0.783494,
    zOff+0.125000
    ), new Point3D(0.102266,0.776791,
    zOff+0.125000
    ), new Point3D(0.114210,0.867514,
    zOff+0.216506
    ));
    Torus.projection[273] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[274] = new Triangle(new Point3D(0.102266,0.776791,
    zOff+0.125000
    ), new Point3D(0.000000,0.783494,
    zOff+0.125000
    ), new Point3D(0.000000,0.750000,
    zOff+0.000000
    ));
    Torus.projection[274] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[275] = new Triangle(new Point3D(0.000000,0.750000,
    zOff+0.000000
    ), new Point3D(0.097895,0.743584,
    zOff+0.000000
    ), new Point3D(0.102266,0.776791,
    zOff+0.125000
    ));
    Torus.projection[275] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[276] = new Triangle(new Point3D(0.097895,0.743584,
    zOff+0.000000
    ), new Point3D(0.000000,0.750000,
    zOff+0.000000
    ), new Point3D(0.000000,0.783494,
    zOff-0.125000
    ));
    Torus.projection[276] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[277] = new Triangle(new Point3D(0.000000,0.783494,
    zOff-0.125000
    ), new Point3D(0.102266,0.776791,
    zOff-0.125000
    ), new Point3D(0.097895,0.743584,
    zOff+0.000000
    ));
    Torus.projection[277] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[278] = new Triangle(new Point3D(0.102266,0.776791,
    zOff-0.125000
    ), new Point3D(0.000000,0.783494,
    zOff-0.125000
    ), new Point3D(0.000000,0.875000,
    zOff-0.216506
    ));
    Torus.projection[278] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[279] = new Triangle(new Point3D(0.000000,0.875000,
    zOff-0.216506
    ), new Point3D(0.114210,0.867514,
    zOff-0.216506
    ), new Point3D(0.102266,0.776791,
    zOff-0.125000
    ));
    Torus.projection[279] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[280] = new Triangle(new Point3D(0.114210,0.867514,
    zOff-0.216506
    ), new Point3D(0.000000,0.875000,
    zOff-0.216506
    ), new Point3D(0.000000,1.000000,
    zOff-0.250000
    ));
    Torus.projection[280] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[281] = new Triangle(new Point3D(0.000000,1.000000,
    zOff-0.250000
    ), new Point3D(0.130526,0.991445,
    zOff-0.250000
    ), new Point3D(0.114210,0.867514,
    zOff-0.216506
    ));
    Torus.projection[281] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[282] = new Triangle(new Point3D(0.130526,0.991445,
    zOff-0.250000
    ), new Point3D(0.000000,1.000000,
    zOff-0.250000
    ), new Point3D(0.000000,1.125000,
    zOff-0.216506
    ));
    Torus.projection[282] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[283] = new Triangle(new Point3D(0.000000,1.125000,
    zOff-0.216506
    ), new Point3D(0.146842,1.115376,
    zOff-0.216506
    ), new Point3D(0.130526,0.991445,
    zOff-0.250000
    ));
    Torus.projection[283] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[284] = new Triangle(new Point3D(0.146842,1.115376,
    zOff-0.216506
    ), new Point3D(0.000000,1.125000,
    zOff-0.216506
    ), new Point3D(0.000000,1.216506,
    zOff-0.125000
    ));
    Torus.projection[284] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[285] = new Triangle(new Point3D(0.000000,1.216506,
    zOff-0.125000
    ), new Point3D(0.158786,1.206099,
    zOff-0.125000
    ), new Point3D(0.146842,1.115376,
    zOff-0.216506
    ));
    Torus.projection[285] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[286] = new Triangle(new Point3D(0.158786,1.206099,
    zOff-0.125000
    ), new Point3D(0.000000,1.216506,
    zOff-0.125000
    ), new Point3D(0.000000,1.250000,
    zOff+0.000000
    ));
    Torus.projection[286] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[287] = new Triangle(new Point3D(0.000000,1.250000,
    zOff+0.000000
    ), new Point3D(0.163158,1.239306,
    zOff+0.000000
    ), new Point3D(0.158786,1.206099,
    zOff-0.125000
    ));
    Torus.projection[287] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[288] = new Triangle(new Point3D(0.000000,1.250000,
    zOff+0.000000
    ), new Point3D(-0.163158,1.239306,
    zOff+0.000000
    ), new Point3D(-0.158786,1.206099,
    zOff+0.125000
    ));
    Torus.projection[288] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[289] = new Triangle(new Point3D(-0.158786,1.206099,
    zOff+0.125000
    ), new Point3D(0.000000,1.216506,
    zOff+0.125000
    ), new Point3D(0.000000,1.250000,
    zOff+0.000000
    ));
    Torus.projection[289] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[290] = new Triangle(new Point3D(0.000000,1.216506,
    zOff+0.125000
    ), new Point3D(-0.158786,1.206099,
    zOff+0.125000
    ), new Point3D(-0.146842,1.115375,
    zOff+0.216506
    ));
    Torus.projection[290] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[291] = new Triangle(new Point3D(-0.146842,1.115375,
    zOff+0.216506
    ), new Point3D(0.000000,1.125000,
    zOff+0.216506
    ), new Point3D(0.000000,1.216506,
    zOff+0.125000
    ));
    Torus.projection[291] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[292] = new Triangle(new Point3D(0.000000,1.125000,
    zOff+0.216506
    ), new Point3D(-0.146842,1.115375,
    zOff+0.216506
    ), new Point3D(-0.130526,0.991445,
    zOff+0.250000
    ));
    Torus.projection[292] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[293] = new Triangle(new Point3D(-0.130526,0.991445,
    zOff+0.250000
    ), new Point3D(0.000000,1.000000,
    zOff+0.250000
    ), new Point3D(0.000000,1.125000,
    zOff+0.216506
    ));
    Torus.projection[293] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[294] = new Triangle(new Point3D(0.000000,1.000000,
    zOff+0.250000
    ), new Point3D(-0.130526,0.991445,
    zOff+0.250000
    ), new Point3D(-0.114211,0.867514,
    zOff+0.216506
    ));
    Torus.projection[294] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[295] = new Triangle(new Point3D(-0.114211,0.867514,
    zOff+0.216506
    ), new Point3D(0.000000,0.875000,
    zOff+0.216506
    ), new Point3D(0.000000,1.000000,
    zOff+0.250000
    ));
    Torus.projection[295] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[296] = new Triangle(new Point3D(0.000000,0.875000,
    zOff+0.216506
    ), new Point3D(-0.114211,0.867514,
    zOff+0.216506
    ), new Point3D(-0.102267,0.776791,
    zOff+0.125000
    ));
    Torus.projection[296] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[297] = new Triangle(new Point3D(-0.102267,0.776791,
    zOff+0.125000
    ), new Point3D(0.000000,0.783494,
    zOff+0.125000
    ), new Point3D(0.000000,0.875000,
    zOff+0.216506
    ));
    Torus.projection[297] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[298] = new Triangle(new Point3D(0.000000,0.783494,
    zOff+0.125000
    ), new Point3D(-0.102267,0.776791,
    zOff+0.125000
    ), new Point3D(-0.097895,0.743584,
    zOff+0.000000
    ));
    Torus.projection[298] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[299] = new Triangle(new Point3D(-0.097895,0.743584,
    zOff+0.000000
    ), new Point3D(0.000000,0.750000,
    zOff+0.000000
    ), new Point3D(0.000000,0.783494,
    zOff+0.125000
    ));
    Torus.projection[299] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[300] = new Triangle(new Point3D(0.000000,0.750000,
    zOff+0.000000
    ), new Point3D(-0.097895,0.743584,
    zOff+0.000000
    ), new Point3D(-0.102267,0.776791,
    zOff-0.125000
    ));
    Torus.projection[300] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[301] = new Triangle(new Point3D(-0.102267,0.776791,
    zOff-0.125000
    ), new Point3D(0.000000,0.783494,
    zOff-0.125000
    ), new Point3D(0.000000,0.750000,
    zOff+0.000000
    ));
    Torus.projection[301] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[302] = new Triangle(new Point3D(0.000000,0.783494,
    zOff-0.125000
    ), new Point3D(-0.102267,0.776791,
    zOff-0.125000
    ), new Point3D(-0.114211,0.867514,
    zOff-0.216506
    ));
    Torus.projection[302] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[303] = new Triangle(new Point3D(-0.114211,0.867514,
    zOff-0.216506
    ), new Point3D(0.000000,0.875000,
    zOff-0.216506
    ), new Point3D(0.000000,0.783494,
    zOff-0.125000
    ));
    Torus.projection[303] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[304] = new Triangle(new Point3D(0.000000,0.875000,
    zOff-0.216506
    ), new Point3D(-0.114211,0.867514,
    zOff-0.216506
    ), new Point3D(-0.130526,0.991445,
    zOff-0.250000
    ));
    Torus.projection[304] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[305] = new Triangle(new Point3D(-0.130526,0.991445,
    zOff-0.250000
    ), new Point3D(0.000000,1.000000,
    zOff-0.250000
    ), new Point3D(0.000000,0.875000,
    zOff-0.216506
    ));
    Torus.projection[305] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[306] = new Triangle(new Point3D(0.000000,1.000000,
    zOff-0.250000
    ), new Point3D(-0.130526,0.991445,
    zOff-0.250000
    ), new Point3D(-0.146842,1.115375,
    zOff-0.216506
    ));
    Torus.projection[306] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[307] = new Triangle(new Point3D(-0.146842,1.115375,
    zOff-0.216506
    ), new Point3D(0.000000,1.125000,
    zOff-0.216506
    ), new Point3D(0.000000,1.000000,
    zOff-0.250000
    ));
    Torus.projection[307] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[308] = new Triangle(new Point3D(0.000000,1.125000,
    zOff-0.216506
    ), new Point3D(-0.146842,1.115375,
    zOff-0.216506
    ), new Point3D(-0.158786,1.206099,
    zOff-0.125000
    ));
    Torus.projection[308] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[309] = new Triangle(new Point3D(-0.158786,1.206099,
    zOff-0.125000
    ), new Point3D(0.000000,1.216506,
    zOff-0.125000
    ), new Point3D(0.000000,1.125000,
    zOff-0.216506
    ));
    Torus.projection[309] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[310] = new Triangle(new Point3D(0.000000,1.216506,
    zOff-0.125000
    ), new Point3D(-0.158786,1.206099,
    zOff-0.125000
    ), new Point3D(-0.163158,1.239306,
    zOff+0.000000
    ));
    Torus.projection[310] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[311] = new Triangle(new Point3D(-0.163158,1.239306,
    zOff+0.000000
    ), new Point3D(0.000000,1.250000,
    zOff+0.000000
    ), new Point3D(0.000000,1.216506,
    zOff-0.125000
    ));
    Torus.projection[311] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[312] = new Triangle(new Point3D(-0.163158,1.239306,
    zOff+0.000000
    ), new Point3D(-0.323524,1.207407,
    zOff+0.000000
    ), new Point3D(-0.314855,1.175055,
    zOff+0.125000
    ));
    Torus.projection[312] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[313] = new Triangle(new Point3D(-0.314855,1.175055,
    zOff+0.125000
    ), new Point3D(-0.158786,1.206099,
    zOff+0.125000
    ), new Point3D(-0.163158,1.239306,
    zOff+0.000000
    ));
    Torus.projection[313] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[314] = new Triangle(new Point3D(-0.158786,1.206099,
    zOff+0.125000
    ), new Point3D(-0.314855,1.175055,
    zOff+0.125000
    ), new Point3D(-0.291171,1.086667,
    zOff+0.216506
    ));
    Torus.projection[314] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[315] = new Triangle(new Point3D(-0.291171,1.086667,
    zOff+0.216506
    ), new Point3D(-0.146842,1.115375,
    zOff+0.216506
    ), new Point3D(-0.158786,1.206099,
    zOff+0.125000
    ));
    Torus.projection[315] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[316] = new Triangle(new Point3D(-0.146842,1.115375,
    zOff+0.216506
    ), new Point3D(-0.291171,1.086667,
    zOff+0.216506
    ), new Point3D(-0.258819,0.965926,
    zOff+0.250000
    ));
    Torus.projection[316] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[317] = new Triangle(new Point3D(-0.258819,0.965926,
    zOff+0.250000
    ), new Point3D(-0.130526,0.991445,
    zOff+0.250000
    ), new Point3D(-0.146842,1.115375,
    zOff+0.216506
    ));
    Torus.projection[317] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[318] = new Triangle(new Point3D(-0.130526,0.991445,
    zOff+0.250000
    ), new Point3D(-0.258819,0.965926,
    zOff+0.250000
    ), new Point3D(-0.226467,0.845185,
    zOff+0.216506
    ));
    Torus.projection[318] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[319] = new Triangle(new Point3D(-0.226467,0.845185,
    zOff+0.216506
    ), new Point3D(-0.114211,0.867514,
    zOff+0.216506
    ), new Point3D(-0.130526,0.991445,
    zOff+0.250000
    ));
    Torus.projection[319] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[320] = new Triangle(new Point3D(-0.114211,0.867514,
    zOff+0.216506
    ), new Point3D(-0.226467,0.845185,
    zOff+0.216506
    ), new Point3D(-0.202783,0.756797,
    zOff+0.125000
    ));
    Torus.projection[320] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[321] = new Triangle(new Point3D(-0.202783,0.756797,
    zOff+0.125000
    ), new Point3D(-0.102267,0.776791,
    zOff+0.125000
    ), new Point3D(-0.114211,0.867514,
    zOff+0.216506
    ));
    Torus.projection[321] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[322] = new Triangle(new Point3D(-0.102267,0.776791,
    zOff+0.125000
    ), new Point3D(-0.202783,0.756797,
    zOff+0.125000
    ), new Point3D(-0.194114,0.724444,
    zOff+0.000000
    ));
    Torus.projection[322] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[323] = new Triangle(new Point3D(-0.194114,0.724444,
    zOff+0.000000
    ), new Point3D(-0.097895,0.743584,
    zOff+0.000000
    ), new Point3D(-0.102267,0.776791,
    zOff+0.125000
    ));
    Torus.projection[323] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[324] = new Triangle(new Point3D(-0.097895,0.743584,
    zOff+0.000000
    ), new Point3D(-0.194114,0.724444,
    zOff+0.000000
    ), new Point3D(-0.202783,0.756797,
    zOff-0.125000
    ));
    Torus.projection[324] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[325] = new Triangle(new Point3D(-0.202783,0.756797,
    zOff-0.125000
    ), new Point3D(-0.102267,0.776791,
    zOff-0.125000
    ), new Point3D(-0.097895,0.743584,
    zOff+0.000000
    ));
    Torus.projection[325] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[326] = new Triangle(new Point3D(-0.102267,0.776791,
    zOff-0.125000
    ), new Point3D(-0.202783,0.756797,
    zOff-0.125000
    ), new Point3D(-0.226467,0.845185,
    zOff-0.216506
    ));
    Torus.projection[326] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[327] = new Triangle(new Point3D(-0.226467,0.845185,
    zOff-0.216506
    ), new Point3D(-0.114211,0.867514,
    zOff-0.216506
    ), new Point3D(-0.102267,0.776791,
    zOff-0.125000
    ));
    Torus.projection[327] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[328] = new Triangle(new Point3D(-0.114211,0.867514,
    zOff-0.216506
    ), new Point3D(-0.226467,0.845185,
    zOff-0.216506
    ), new Point3D(-0.258819,0.965926,
    zOff-0.250000
    ));
    Torus.projection[328] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[329] = new Triangle(new Point3D(-0.258819,0.965926,
    zOff-0.250000
    ), new Point3D(-0.130526,0.991445,
    zOff-0.250000
    ), new Point3D(-0.114211,0.867514,
    zOff-0.216506
    ));
    Torus.projection[329] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[330] = new Triangle(new Point3D(-0.130526,0.991445,
    zOff-0.250000
    ), new Point3D(-0.258819,0.965926,
    zOff-0.250000
    ), new Point3D(-0.291171,1.086667,
    zOff-0.216506
    ));
    Torus.projection[330] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[331] = new Triangle(new Point3D(-0.291171,1.086667,
    zOff-0.216506
    ), new Point3D(-0.146842,1.115375,
    zOff-0.216506
    ), new Point3D(-0.130526,0.991445,
    zOff-0.250000
    ));
    Torus.projection[331] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[332] = new Triangle(new Point3D(-0.146842,1.115375,
    zOff-0.216506
    ), new Point3D(-0.291171,1.086667,
    zOff-0.216506
    ), new Point3D(-0.314855,1.175055,
    zOff-0.125000
    ));
    Torus.projection[332] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[333] = new Triangle(new Point3D(-0.314855,1.175055,
    zOff-0.125000
    ), new Point3D(-0.158786,1.206099,
    zOff-0.125000
    ), new Point3D(-0.146842,1.115375,
    zOff-0.216506
    ));
    Torus.projection[333] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[334] = new Triangle(new Point3D(-0.158786,1.206099,
    zOff-0.125000
    ), new Point3D(-0.314855,1.175055,
    zOff-0.125000
    ), new Point3D(-0.323524,1.207407,
    zOff+0.000000
    ));
    Torus.projection[334] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[335] = new Triangle(new Point3D(-0.323524,1.207407,
    zOff+0.000000
    ), new Point3D(-0.163158,1.239306,
    zOff+0.000000
    ), new Point3D(-0.158786,1.206099,
    zOff-0.125000
    ));
    Torus.projection[335] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[336] = new Triangle(new Point3D(-0.323524,1.207407,
    zOff+0.000000
    ), new Point3D(-0.478354,1.154849,
    zOff+0.000000
    ), new Point3D(-0.465537,1.123905,
    zOff+0.125000
    ));
    Torus.projection[336] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[337] = new Triangle(new Point3D(-0.465537,1.123905,
    zOff+0.125000
    ), new Point3D(-0.314855,1.175055,
    zOff+0.125000
    ), new Point3D(-0.323524,1.207407,
    zOff+0.000000
    ));
    Torus.projection[337] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[338] = new Triangle(new Point3D(-0.314855,1.175055,
    zOff+0.125000
    ), new Point3D(-0.465537,1.123905,
    zOff+0.125000
    ), new Point3D(-0.430519,1.039364,
    zOff+0.216506
    ));
    Torus.projection[338] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[339] = new Triangle(new Point3D(-0.430519,1.039364,
    zOff+0.216506
    ), new Point3D(-0.291171,1.086667,
    zOff+0.216506
    ), new Point3D(-0.314855,1.175055,
    zOff+0.125000
    ));
    Torus.projection[339] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[340] = new Triangle(new Point3D(-0.291171,1.086667,
    zOff+0.216506
    ), new Point3D(-0.430519,1.039364,
    zOff+0.216506
    ), new Point3D(-0.382684,0.923880,
    zOff+0.250000
    ));
    Torus.projection[340] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[341] = new Triangle(new Point3D(-0.382684,0.923880,
    zOff+0.250000
    ), new Point3D(-0.258819,0.965926,
    zOff+0.250000
    ), new Point3D(-0.291171,1.086667,
    zOff+0.216506
    ));
    Torus.projection[341] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[342] = new Triangle(new Point3D(-0.258819,0.965926,
    zOff+0.250000
    ), new Point3D(-0.382684,0.923880,
    zOff+0.250000
    ), new Point3D(-0.334848,0.808395,
    zOff+0.216506
    ));
    Torus.projection[342] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[343] = new Triangle(new Point3D(-0.334848,0.808395,
    zOff+0.216506
    ), new Point3D(-0.226467,0.845185,
    zOff+0.216506
    ), new Point3D(-0.258819,0.965926,
    zOff+0.250000
    ));
    Torus.projection[343] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[344] = new Triangle(new Point3D(-0.226467,0.845185,
    zOff+0.216506
    ), new Point3D(-0.334848,0.808395,
    zOff+0.216506
    ), new Point3D(-0.299830,0.723854,
    zOff+0.125000
    ));
    Torus.projection[344] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[345] = new Triangle(new Point3D(-0.299830,0.723854,
    zOff+0.125000
    ), new Point3D(-0.202783,0.756797,
    zOff+0.125000
    ), new Point3D(-0.226467,0.845185,
    zOff+0.216506
    ));
    Torus.projection[345] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[346] = new Triangle(new Point3D(-0.202783,0.756797,
    zOff+0.125000
    ), new Point3D(-0.299830,0.723854,
    zOff+0.125000
    ), new Point3D(-0.287013,0.692910,
    zOff+0.000000
    ));
    Torus.projection[346] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[347] = new Triangle(new Point3D(-0.287013,0.692910,
    zOff+0.000000
    ), new Point3D(-0.194114,0.724444,
    zOff+0.000000
    ), new Point3D(-0.202783,0.756797,
    zOff+0.125000
    ));
    Torus.projection[347] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[348] = new Triangle(new Point3D(-0.194114,0.724444,
    zOff+0.000000
    ), new Point3D(-0.287013,0.692910,
    zOff+0.000000
    ), new Point3D(-0.299830,0.723854,
    zOff-0.125000
    ));
    Torus.projection[348] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[349] = new Triangle(new Point3D(-0.299830,0.723854,
    zOff-0.125000
    ), new Point3D(-0.202783,0.756797,
    zOff-0.125000
    ), new Point3D(-0.194114,0.724444,
    zOff+0.000000
    ));
    Torus.projection[349] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[350] = new Triangle(new Point3D(-0.202783,0.756797,
    zOff-0.125000
    ), new Point3D(-0.299830,0.723854,
    zOff-0.125000
    ), new Point3D(-0.334848,0.808395,
    zOff-0.216506
    ));
    Torus.projection[350] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[351] = new Triangle(new Point3D(-0.334848,0.808395,
    zOff-0.216506
    ), new Point3D(-0.226467,0.845185,
    zOff-0.216506
    ), new Point3D(-0.202783,0.756797,
    zOff-0.125000
    ));
    Torus.projection[351] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[352] = new Triangle(new Point3D(-0.226467,0.845185,
    zOff-0.216506
    ), new Point3D(-0.334848,0.808395,
    zOff-0.216506
    ), new Point3D(-0.382684,0.923880,
    zOff-0.250000
    ));
    Torus.projection[352] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[353] = new Triangle(new Point3D(-0.382684,0.923880,
    zOff-0.250000
    ), new Point3D(-0.258819,0.965926,
    zOff-0.250000
    ), new Point3D(-0.226467,0.845185,
    zOff-0.216506
    ));
    Torus.projection[353] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[354] = new Triangle(new Point3D(-0.258819,0.965926,
    zOff-0.250000
    ), new Point3D(-0.382684,0.923880,
    zOff-0.250000
    ), new Point3D(-0.430519,1.039364,
    zOff-0.216506
    ));
    Torus.projection[354] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[355] = new Triangle(new Point3D(-0.430519,1.039364,
    zOff-0.216506
    ), new Point3D(-0.291171,1.086667,
    zOff-0.216506
    ), new Point3D(-0.258819,0.965926,
    zOff-0.250000
    ));
    Torus.projection[355] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[356] = new Triangle(new Point3D(-0.291171,1.086667,
    zOff-0.216506
    ), new Point3D(-0.430519,1.039364,
    zOff-0.216506
    ), new Point3D(-0.465537,1.123905,
    zOff-0.125000
    ));
    Torus.projection[356] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[357] = new Triangle(new Point3D(-0.465537,1.123905,
    zOff-0.125000
    ), new Point3D(-0.314855,1.175055,
    zOff-0.125000
    ), new Point3D(-0.291171,1.086667,
    zOff-0.216506
    ));
    Torus.projection[357] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[358] = new Triangle(new Point3D(-0.314855,1.175055,
    zOff-0.125000
    ), new Point3D(-0.465537,1.123905,
    zOff-0.125000
    ), new Point3D(-0.478354,1.154849,
    zOff+0.000000
    ));
    Torus.projection[358] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[359] = new Triangle(new Point3D(-0.478354,1.154849,
    zOff+0.000000
    ), new Point3D(-0.323524,1.207407,
    zOff+0.000000
    ), new Point3D(-0.314855,1.175055,
    zOff-0.125000
    ));
    Torus.projection[359] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[360] = new Triangle(new Point3D(-0.478354,1.154849,
    zOff+0.000000
    ), new Point3D(-0.625000,1.082532,
    zOff+0.000000
    ), new Point3D(-0.608253,1.053526,
    zOff+0.125000
    ));
    Torus.projection[360] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[361] = new Triangle(new Point3D(-0.608253,1.053526,
    zOff+0.125000
    ), new Point3D(-0.465537,1.123905,
    zOff+0.125000
    ), new Point3D(-0.478354,1.154849,
    zOff+0.000000
    ));
    Torus.projection[361] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[362] = new Triangle(new Point3D(-0.465537,1.123905,
    zOff+0.125000
    ), new Point3D(-0.608253,1.053526,
    zOff+0.125000
    ), new Point3D(-0.562500,0.974279,
    zOff+0.216506
    ));
    Torus.projection[362] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[363] = new Triangle(new Point3D(-0.562500,0.974279,
    zOff+0.216506
    ), new Point3D(-0.430519,1.039364,
    zOff+0.216506
    ), new Point3D(-0.465537,1.123905,
    zOff+0.125000
    ));
    Torus.projection[363] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[364] = new Triangle(new Point3D(-0.430519,1.039364,
    zOff+0.216506
    ), new Point3D(-0.562500,0.974279,
    zOff+0.216506
    ), new Point3D(-0.500000,0.866026,
    zOff+0.250000
    ));
    Torus.projection[364] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[365] = new Triangle(new Point3D(-0.500000,0.866026,
    zOff+0.250000
    ), new Point3D(-0.382684,0.923880,
    zOff+0.250000
    ), new Point3D(-0.430519,1.039364,
    zOff+0.216506
    ));
    Torus.projection[365] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[366] = new Triangle(new Point3D(-0.382684,0.923880,
    zOff+0.250000
    ), new Point3D(-0.500000,0.866026,
    zOff+0.250000
    ), new Point3D(-0.437500,0.757772,
    zOff+0.216506
    ));
    Torus.projection[366] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[367] = new Triangle(new Point3D(-0.437500,0.757772,
    zOff+0.216506
    ), new Point3D(-0.334848,0.808395,
    zOff+0.216506
    ), new Point3D(-0.382684,0.923880,
    zOff+0.250000
    ));
    Torus.projection[367] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[368] = new Triangle(new Point3D(-0.334848,0.808395,
    zOff+0.216506
    ), new Point3D(-0.437500,0.757772,
    zOff+0.216506
    ), new Point3D(-0.391747,0.678525,
    zOff+0.125000
    ));
    Torus.projection[368] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[369] = new Triangle(new Point3D(-0.391747,0.678525,
    zOff+0.125000
    ), new Point3D(-0.299830,0.723854,
    zOff+0.125000
    ), new Point3D(-0.334848,0.808395,
    zOff+0.216506
    ));
    Torus.projection[369] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[370] = new Triangle(new Point3D(-0.299830,0.723854,
    zOff+0.125000
    ), new Point3D(-0.391747,0.678525,
    zOff+0.125000
    ), new Point3D(-0.375000,0.649519,
    zOff+0.000000
    ));
    Torus.projection[370] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[371] = new Triangle(new Point3D(-0.375000,0.649519,
    zOff+0.000000
    ), new Point3D(-0.287013,0.692910,
    zOff+0.000000
    ), new Point3D(-0.299830,0.723854,
    zOff+0.125000
    ));
    Torus.projection[371] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[372] = new Triangle(new Point3D(-0.287013,0.692910,
    zOff+0.000000
    ), new Point3D(-0.375000,0.649519,
    zOff+0.000000
    ), new Point3D(-0.391747,0.678525,
    zOff-0.125000
    ));
    Torus.projection[372] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[373] = new Triangle(new Point3D(-0.391747,0.678525,
    zOff-0.125000
    ), new Point3D(-0.299830,0.723854,
    zOff-0.125000
    ), new Point3D(-0.287013,0.692910,
    zOff+0.000000
    ));
    Torus.projection[373] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[374] = new Triangle(new Point3D(-0.299830,0.723854,
    zOff-0.125000
    ), new Point3D(-0.391747,0.678525,
    zOff-0.125000
    ), new Point3D(-0.437500,0.757772,
    zOff-0.216506
    ));
    Torus.projection[374] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[375] = new Triangle(new Point3D(-0.437500,0.757772,
    zOff-0.216506
    ), new Point3D(-0.334848,0.808395,
    zOff-0.216506
    ), new Point3D(-0.299830,0.723854,
    zOff-0.125000
    ));
    Torus.projection[375] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[376] = new Triangle(new Point3D(-0.334848,0.808395,
    zOff-0.216506
    ), new Point3D(-0.437500,0.757772,
    zOff-0.216506
    ), new Point3D(-0.500000,0.866026,
    zOff-0.250000
    ));
    Torus.projection[376] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[377] = new Triangle(new Point3D(-0.500000,0.866026,
    zOff-0.250000
    ), new Point3D(-0.382684,0.923880,
    zOff-0.250000
    ), new Point3D(-0.334848,0.808395,
    zOff-0.216506
    ));
    Torus.projection[377] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[378] = new Triangle(new Point3D(-0.382684,0.923880,
    zOff-0.250000
    ), new Point3D(-0.500000,0.866026,
    zOff-0.250000
    ), new Point3D(-0.562500,0.974279,
    zOff-0.216506
    ));
    Torus.projection[378] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[379] = new Triangle(new Point3D(-0.562500,0.974279,
    zOff-0.216506
    ), new Point3D(-0.430519,1.039364,
    zOff-0.216506
    ), new Point3D(-0.382684,0.923880,
    zOff-0.250000
    ));
    Torus.projection[379] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[380] = new Triangle(new Point3D(-0.430519,1.039364,
    zOff-0.216506
    ), new Point3D(-0.562500,0.974279,
    zOff-0.216506
    ), new Point3D(-0.608253,1.053526,
    zOff-0.125000
    ));
    Torus.projection[380] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[381] = new Triangle(new Point3D(-0.608253,1.053526,
    zOff-0.125000
    ), new Point3D(-0.465537,1.123905,
    zOff-0.125000
    ), new Point3D(-0.430519,1.039364,
    zOff-0.216506
    ));
    Torus.projection[381] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[382] = new Triangle(new Point3D(-0.465537,1.123905,
    zOff-0.125000
    ), new Point3D(-0.608253,1.053526,
    zOff-0.125000
    ), new Point3D(-0.625000,1.082532,
    zOff+0.000000
    ));
    Torus.projection[382] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[383] = new Triangle(new Point3D(-0.625000,1.082532,
    zOff+0.000000
    ), new Point3D(-0.478354,1.154849,
    zOff+0.000000
    ), new Point3D(-0.465537,1.123905,
    zOff-0.125000
    ));
    Torus.projection[383] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[384] = new Triangle(new Point3D(-0.625000,1.082532,
    zOff+0.000000
    ), new Point3D(-0.760952,0.991692,
    zOff+0.000000
    ), new Point3D(-0.740562,0.965119,
    zOff+0.125000
    ));
    Torus.projection[384] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[385] = new Triangle(new Point3D(-0.740562,0.965119,
    zOff+0.125000
    ), new Point3D(-0.608253,1.053526,
    zOff+0.125000
    ), new Point3D(-0.625000,1.082532,
    zOff+0.000000
    ));
    Torus.projection[385] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[386] = new Triangle(new Point3D(-0.608253,1.053526,
    zOff+0.125000
    ), new Point3D(-0.740562,0.965119,
    zOff+0.125000
    ), new Point3D(-0.684857,0.892522,
    zOff+0.216506
    ));
    Torus.projection[386] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[387] = new Triangle(new Point3D(-0.684857,0.892522,
    zOff+0.216506
    ), new Point3D(-0.562500,0.974279,
    zOff+0.216506
    ), new Point3D(-0.608253,1.053526,
    zOff+0.125000
    ));
    Torus.projection[387] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[388] = new Triangle(new Point3D(-0.562500,0.974279,
    zOff+0.216506
    ), new Point3D(-0.684857,0.892522,
    zOff+0.216506
    ), new Point3D(-0.608761,0.793353,
    zOff+0.250000
    ));
    Torus.projection[388] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[389] = new Triangle(new Point3D(-0.608761,0.793353,
    zOff+0.250000
    ), new Point3D(-0.500000,0.866026,
    zOff+0.250000
    ), new Point3D(-0.562500,0.974279,
    zOff+0.216506
    ));
    Torus.projection[389] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[390] = new Triangle(new Point3D(-0.500000,0.866026,
    zOff+0.250000
    ), new Point3D(-0.608761,0.793353,
    zOff+0.250000
    ), new Point3D(-0.532666,0.694184,
    zOff+0.216506
    ));
    Torus.projection[390] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[391] = new Triangle(new Point3D(-0.532666,0.694184,
    zOff+0.216506
    ), new Point3D(-0.437500,0.757772,
    zOff+0.216506
    ), new Point3D(-0.500000,0.866026,
    zOff+0.250000
    ));
    Torus.projection[391] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[392] = new Triangle(new Point3D(-0.437500,0.757772,
    zOff+0.216506
    ), new Point3D(-0.532666,0.694184,
    zOff+0.216506
    ), new Point3D(-0.476961,0.621587,
    zOff+0.125000
    ));
    Torus.projection[392] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[393] = new Triangle(new Point3D(-0.476961,0.621587,
    zOff+0.125000
    ), new Point3D(-0.391747,0.678525,
    zOff+0.125000
    ), new Point3D(-0.437500,0.757772,
    zOff+0.216506
    ));
    Torus.projection[393] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[394] = new Triangle(new Point3D(-0.391747,0.678525,
    zOff+0.125000
    ), new Point3D(-0.476961,0.621587,
    zOff+0.125000
    ), new Point3D(-0.456571,0.595015,
    zOff+0.000000
    ));
    Torus.projection[394] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[395] = new Triangle(new Point3D(-0.456571,0.595015,
    zOff+0.000000
    ), new Point3D(-0.375000,0.649519,
    zOff+0.000000
    ), new Point3D(-0.391747,0.678525,
    zOff+0.125000
    ));
    Torus.projection[395] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[396] = new Triangle(new Point3D(-0.375000,0.649519,
    zOff+0.000000
    ), new Point3D(-0.456571,0.595015,
    zOff+0.000000
    ), new Point3D(-0.476961,0.621587,
    zOff-0.125000
    ));
    Torus.projection[396] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[397] = new Triangle(new Point3D(-0.476961,0.621587,
    zOff-0.125000
    ), new Point3D(-0.391747,0.678525,
    zOff-0.125000
    ), new Point3D(-0.375000,0.649519,
    zOff+0.000000
    ));
    Torus.projection[397] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[398] = new Triangle(new Point3D(-0.391747,0.678525,
    zOff-0.125000
    ), new Point3D(-0.476961,0.621587,
    zOff-0.125000
    ), new Point3D(-0.532666,0.694184,
    zOff-0.216506
    ));
    Torus.projection[398] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[399] = new Triangle(new Point3D(-0.532666,0.694184,
    zOff-0.216506
    ), new Point3D(-0.437500,0.757772,
    zOff-0.216506
    ), new Point3D(-0.391747,0.678525,
    zOff-0.125000
    ));
    Torus.projection[399] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[400] = new Triangle(new Point3D(-0.437500,0.757772,
    zOff-0.216506
    ), new Point3D(-0.532666,0.694184,
    zOff-0.216506
    ), new Point3D(-0.608761,0.793353,
    zOff-0.250000
    ));
    Torus.projection[400] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[401] = new Triangle(new Point3D(-0.608761,0.793353,
    zOff-0.250000
    ), new Point3D(-0.500000,0.866026,
    zOff-0.250000
    ), new Point3D(-0.437500,0.757772,
    zOff-0.216506
    ));
    Torus.projection[401] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[402] = new Triangle(new Point3D(-0.500000,0.866026,
    zOff-0.250000
    ), new Point3D(-0.608761,0.793353,
    zOff-0.250000
    ), new Point3D(-0.684857,0.892522,
    zOff-0.216506
    ));
    Torus.projection[402] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[403] = new Triangle(new Point3D(-0.684857,0.892522,
    zOff-0.216506
    ), new Point3D(-0.562500,0.974279,
    zOff-0.216506
    ), new Point3D(-0.500000,0.866026,
    zOff-0.250000
    ));
    Torus.projection[403] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[404] = new Triangle(new Point3D(-0.562500,0.974279,
    zOff-0.216506
    ), new Point3D(-0.684857,0.892522,
    zOff-0.216506
    ), new Point3D(-0.740562,0.965119,
    zOff-0.125000
    ));
    Torus.projection[404] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[405] = new Triangle(new Point3D(-0.740562,0.965119,
    zOff-0.125000
    ), new Point3D(-0.608253,1.053526,
    zOff-0.125000
    ), new Point3D(-0.562500,0.974279,
    zOff-0.216506
    ));
    Torus.projection[405] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[406] = new Triangle(new Point3D(-0.608253,1.053526,
    zOff-0.125000
    ), new Point3D(-0.740562,0.965119,
    zOff-0.125000
    ), new Point3D(-0.760952,0.991692,
    zOff+0.000000
    ));
    Torus.projection[406] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[407] = new Triangle(new Point3D(-0.760952,0.991692,
    zOff+0.000000
    ), new Point3D(-0.625000,1.082532,
    zOff+0.000000
    ), new Point3D(-0.608253,1.053526,
    zOff-0.125000
    ));
    Torus.projection[407] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[408] = new Triangle(new Point3D(-0.760952,0.991692,
    zOff+0.000000
    ), new Point3D(-0.883884,0.883883,
    zOff+0.000000
    ), new Point3D(-0.860200,0.860200,
    zOff+0.125000
    ));
    Torus.projection[408] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[409] = new Triangle(new Point3D(-0.860200,0.860200,
    zOff+0.125000
    ), new Point3D(-0.740562,0.965119,
    zOff+0.125000
    ), new Point3D(-0.760952,0.991692,
    zOff+0.000000
    ));
    Torus.projection[409] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[410] = new Triangle(new Point3D(-0.740562,0.965119,
    zOff+0.125000
    ), new Point3D(-0.860200,0.860200,
    zOff+0.125000
    ), new Point3D(-0.795495,0.795495,
    zOff+0.216506
    ));
    Torus.projection[410] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[411] = new Triangle(new Point3D(-0.795495,0.795495,
    zOff+0.216506
    ), new Point3D(-0.684857,0.892522,
    zOff+0.216506
    ), new Point3D(-0.740562,0.965119,
    zOff+0.125000
    ));
    Torus.projection[411] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[412] = new Triangle(new Point3D(-0.684857,0.892522,
    zOff+0.216506
    ), new Point3D(-0.795495,0.795495,
    zOff+0.216506
    ), new Point3D(-0.707107,0.707107,
    zOff+0.250000
    ));
    Torus.projection[412] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[413] = new Triangle(new Point3D(-0.707107,0.707107,
    zOff+0.250000
    ), new Point3D(-0.608761,0.793353,
    zOff+0.250000
    ), new Point3D(-0.684857,0.892522,
    zOff+0.216506
    ));
    Torus.projection[413] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[414] = new Triangle(new Point3D(-0.608761,0.793353,
    zOff+0.250000
    ), new Point3D(-0.707107,0.707107,
    zOff+0.250000
    ), new Point3D(-0.618719,0.618718,
    zOff+0.216506
    ));
    Torus.projection[414] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[415] = new Triangle(new Point3D(-0.618719,0.618718,
    zOff+0.216506
    ), new Point3D(-0.532666,0.694184,
    zOff+0.216506
    ), new Point3D(-0.608761,0.793353,
    zOff+0.250000
    ));
    Torus.projection[415] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[416] = new Triangle(new Point3D(-0.532666,0.694184,
    zOff+0.216506
    ), new Point3D(-0.618719,0.618718,
    zOff+0.216506
    ), new Point3D(-0.554014,0.554013,
    zOff+0.125000
    ));
    Torus.projection[416] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[417] = new Triangle(new Point3D(-0.554014,0.554013,
    zOff+0.125000
    ), new Point3D(-0.476961,0.621587,
    zOff+0.125000
    ), new Point3D(-0.532666,0.694184,
    zOff+0.216506
    ));
    Torus.projection[417] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[418] = new Triangle(new Point3D(-0.476961,0.621587,
    zOff+0.125000
    ), new Point3D(-0.554014,0.554013,
    zOff+0.125000
    ), new Point3D(-0.530330,0.530330,
    zOff+0.000000
    ));
    Torus.projection[418] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[419] = new Triangle(new Point3D(-0.530330,0.530330,
    zOff+0.000000
    ), new Point3D(-0.456571,0.595015,
    zOff+0.000000
    ), new Point3D(-0.476961,0.621587,
    zOff+0.125000
    ));
    Torus.projection[419] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[420] = new Triangle(new Point3D(-0.456571,0.595015,
    zOff+0.000000
    ), new Point3D(-0.530330,0.530330,
    zOff+0.000000
    ), new Point3D(-0.554014,0.554013,
    zOff-0.125000
    ));
    Torus.projection[420] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[421] = new Triangle(new Point3D(-0.554014,0.554013,
    zOff-0.125000
    ), new Point3D(-0.476961,0.621587,
    zOff-0.125000
    ), new Point3D(-0.456571,0.595015,
    zOff+0.000000
    ));
    Torus.projection[421] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[422] = new Triangle(new Point3D(-0.476961,0.621587,
    zOff-0.125000
    ), new Point3D(-0.554014,0.554013,
    zOff-0.125000
    ), new Point3D(-0.618719,0.618718,
    zOff-0.216506
    ));
    Torus.projection[422] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[423] = new Triangle(new Point3D(-0.618719,0.618718,
    zOff-0.216506
    ), new Point3D(-0.532666,0.694184,
    zOff-0.216506
    ), new Point3D(-0.476961,0.621587,
    zOff-0.125000
    ));
    Torus.projection[423] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[424] = new Triangle(new Point3D(-0.532666,0.694184,
    zOff-0.216506
    ), new Point3D(-0.618719,0.618718,
    zOff-0.216506
    ), new Point3D(-0.707107,0.707107,
    zOff-0.250000
    ));
    Torus.projection[424] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[425] = new Triangle(new Point3D(-0.707107,0.707107,
    zOff-0.250000
    ), new Point3D(-0.608761,0.793353,
    zOff-0.250000
    ), new Point3D(-0.532666,0.694184,
    zOff-0.216506
    ));
    Torus.projection[425] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[426] = new Triangle(new Point3D(-0.608761,0.793353,
    zOff-0.250000
    ), new Point3D(-0.707107,0.707107,
    zOff-0.250000
    ), new Point3D(-0.795495,0.795495,
    zOff-0.216506
    ));
    Torus.projection[426] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[427] = new Triangle(new Point3D(-0.795495,0.795495,
    zOff-0.216506
    ), new Point3D(-0.684857,0.892522,
    zOff-0.216506
    ), new Point3D(-0.608761,0.793353,
    zOff-0.250000
    ));
    Torus.projection[427] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[428] = new Triangle(new Point3D(-0.684857,0.892522,
    zOff-0.216506
    ), new Point3D(-0.795495,0.795495,
    zOff-0.216506
    ), new Point3D(-0.860200,0.860200,
    zOff-0.125000
    ));
    Torus.projection[428] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[429] = new Triangle(new Point3D(-0.860200,0.860200,
    zOff-0.125000
    ), new Point3D(-0.740562,0.965119,
    zOff-0.125000
    ), new Point3D(-0.684857,0.892522,
    zOff-0.216506
    ));
    Torus.projection[429] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[430] = new Triangle(new Point3D(-0.740562,0.965119,
    zOff-0.125000
    ), new Point3D(-0.860200,0.860200,
    zOff-0.125000
    ), new Point3D(-0.883884,0.883883,
    zOff+0.000000
    ));
    Torus.projection[430] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[431] = new Triangle(new Point3D(-0.883884,0.883883,
    zOff+0.000000
    ), new Point3D(-0.760952,0.991692,
    zOff+0.000000
    ), new Point3D(-0.740562,0.965119,
    zOff-0.125000
    ));
    Torus.projection[431] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[432] = new Triangle(new Point3D(-0.883884,0.883883,
    zOff+0.000000
    ), new Point3D(-0.991692,0.760952,
    zOff+0.000000
    ), new Point3D(-0.965119,0.740562,
    zOff+0.125000
    ));
    Torus.projection[432] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[433] = new Triangle(new Point3D(-0.965119,0.740562,
    zOff+0.125000
    ), new Point3D(-0.860200,0.860200,
    zOff+0.125000
    ), new Point3D(-0.883884,0.883883,
    zOff+0.000000
    ));
    Torus.projection[433] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[434] = new Triangle(new Point3D(-0.860200,0.860200,
    zOff+0.125000
    ), new Point3D(-0.965119,0.740562,
    zOff+0.125000
    ), new Point3D(-0.892522,0.684857,
    zOff+0.216506
    ));
    Torus.projection[434] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[435] = new Triangle(new Point3D(-0.892522,0.684857,
    zOff+0.216506
    ), new Point3D(-0.795495,0.795495,
    zOff+0.216506
    ), new Point3D(-0.860200,0.860200,
    zOff+0.125000
    ));
    Torus.projection[435] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[436] = new Triangle(new Point3D(-0.795495,0.795495,
    zOff+0.216506
    ), new Point3D(-0.892522,0.684857,
    zOff+0.216506
    ), new Point3D(-0.793353,0.608761,
    zOff+0.250000
    ));
    Torus.projection[436] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[437] = new Triangle(new Point3D(-0.793353,0.608761,
    zOff+0.250000
    ), new Point3D(-0.707107,0.707107,
    zOff+0.250000
    ), new Point3D(-0.795495,0.795495,
    zOff+0.216506
    ));
    Torus.projection[437] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[438] = new Triangle(new Point3D(-0.707107,0.707107,
    zOff+0.250000
    ), new Point3D(-0.793353,0.608761,
    zOff+0.250000
    ), new Point3D(-0.694184,0.532666,
    zOff+0.216506
    ));
    Torus.projection[438] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[439] = new Triangle(new Point3D(-0.694184,0.532666,
    zOff+0.216506
    ), new Point3D(-0.618719,0.618718,
    zOff+0.216506
    ), new Point3D(-0.707107,0.707107,
    zOff+0.250000
    ));
    Torus.projection[439] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[440] = new Triangle(new Point3D(-0.618719,0.618718,
    zOff+0.216506
    ), new Point3D(-0.694184,0.532666,
    zOff+0.216506
    ), new Point3D(-0.621587,0.476961,
    zOff+0.125000
    ));
    Torus.projection[440] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[441] = new Triangle(new Point3D(-0.621587,0.476961,
    zOff+0.125000
    ), new Point3D(-0.554014,0.554013,
    zOff+0.125000
    ), new Point3D(-0.618719,0.618718,
    zOff+0.216506
    ));
    Torus.projection[441] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[442] = new Triangle(new Point3D(-0.554014,0.554013,
    zOff+0.125000
    ), new Point3D(-0.621587,0.476961,
    zOff+0.125000
    ), new Point3D(-0.595015,0.456571,
    zOff+0.000000
    ));
    Torus.projection[442] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[443] = new Triangle(new Point3D(-0.595015,0.456571,
    zOff+0.000000
    ), new Point3D(-0.530330,0.530330,
    zOff+0.000000
    ), new Point3D(-0.554014,0.554013,
    zOff+0.125000
    ));
    Torus.projection[443] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[444] = new Triangle(new Point3D(-0.530330,0.530330,
    zOff+0.000000
    ), new Point3D(-0.595015,0.456571,
    zOff+0.000000
    ), new Point3D(-0.621587,0.476961,
    zOff-0.125000
    ));
    Torus.projection[444] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[445] = new Triangle(new Point3D(-0.621587,0.476961,
    zOff-0.125000
    ), new Point3D(-0.554014,0.554013,
    zOff-0.125000
    ), new Point3D(-0.530330,0.530330,
    zOff+0.000000
    ));
    Torus.projection[445] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[446] = new Triangle(new Point3D(-0.554014,0.554013,
    zOff-0.125000
    ), new Point3D(-0.621587,0.476961,
    zOff-0.125000
    ), new Point3D(-0.694184,0.532666,
    zOff-0.216506
    ));
    Torus.projection[446] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[447] = new Triangle(new Point3D(-0.694184,0.532666,
    zOff-0.216506
    ), new Point3D(-0.618719,0.618718,
    zOff-0.216506
    ), new Point3D(-0.554014,0.554013,
    zOff-0.125000
    ));
    Torus.projection[447] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[448] = new Triangle(new Point3D(-0.618719,0.618718,
    zOff-0.216506
    ), new Point3D(-0.694184,0.532666,
    zOff-0.216506
    ), new Point3D(-0.793353,0.608761,
    zOff-0.250000
    ));
    Torus.projection[448] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[449] = new Triangle(new Point3D(-0.793353,0.608761,
    zOff-0.250000
    ), new Point3D(-0.707107,0.707107,
    zOff-0.250000
    ), new Point3D(-0.618719,0.618718,
    zOff-0.216506
    ));
    Torus.projection[449] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[450] = new Triangle(new Point3D(-0.707107,0.707107,
    zOff-0.250000
    ), new Point3D(-0.793353,0.608761,
    zOff-0.250000
    ), new Point3D(-0.892522,0.684857,
    zOff-0.216506
    ));
    Torus.projection[450] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[451] = new Triangle(new Point3D(-0.892522,0.684857,
    zOff-0.216506
    ), new Point3D(-0.795495,0.795495,
    zOff-0.216506
    ), new Point3D(-0.707107,0.707107,
    zOff-0.250000
    ));
    Torus.projection[451] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[452] = new Triangle(new Point3D(-0.795495,0.795495,
    zOff-0.216506
    ), new Point3D(-0.892522,0.684857,
    zOff-0.216506
    ), new Point3D(-0.965119,0.740562,
    zOff-0.125000
    ));
    Torus.projection[452] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[453] = new Triangle(new Point3D(-0.965119,0.740562,
    zOff-0.125000
    ), new Point3D(-0.860200,0.860200,
    zOff-0.125000
    ), new Point3D(-0.795495,0.795495,
    zOff-0.216506
    ));
    Torus.projection[453] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[454] = new Triangle(new Point3D(-0.860200,0.860200,
    zOff-0.125000
    ), new Point3D(-0.965119,0.740562,
    zOff-0.125000
    ), new Point3D(-0.991692,0.760952,
    zOff+0.000000
    ));
    Torus.projection[454] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[455] = new Triangle(new Point3D(-0.991692,0.760952,
    zOff+0.000000
    ), new Point3D(-0.883884,0.883883,
    zOff+0.000000
    ), new Point3D(-0.860200,0.860200,
    zOff-0.125000
    ));
    Torus.projection[455] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[456] = new Triangle(new Point3D(-0.991692,0.760952,
    zOff+0.000000
    ), new Point3D(-1.082532,0.625000,
    zOff+0.000000
    ), new Point3D(-1.053525,0.608253,
    zOff+0.125000
    ));
    Torus.projection[456] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[457] = new Triangle(new Point3D(-1.053525,0.608253,
    zOff+0.125000
    ), new Point3D(-0.965119,0.740562,
    zOff+0.125000
    ), new Point3D(-0.991692,0.760952,
    zOff+0.000000
    ));
    Torus.projection[457] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[458] = new Triangle(new Point3D(-0.965119,0.740562,
    zOff+0.125000
    ), new Point3D(-1.053525,0.608253,
    zOff+0.125000
    ), new Point3D(-0.974278,0.562500,
    zOff+0.216506
    ));
    Torus.projection[458] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[459] = new Triangle(new Point3D(-0.974278,0.562500,
    zOff+0.216506
    ), new Point3D(-0.892522,0.684857,
    zOff+0.216506
    ), new Point3D(-0.965119,0.740562,
    zOff+0.125000
    ));
    Torus.projection[459] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[460] = new Triangle(new Point3D(-0.892522,0.684857,
    zOff+0.216506
    ), new Point3D(-0.974278,0.562500,
    zOff+0.216506
    ), new Point3D(-0.866025,0.500000,
    zOff+0.250000
    ));
    Torus.projection[460] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[461] = new Triangle(new Point3D(-0.866025,0.500000,
    zOff+0.250000
    ), new Point3D(-0.793353,0.608761,
    zOff+0.250000
    ), new Point3D(-0.892522,0.684857,
    zOff+0.216506
    ));
    Torus.projection[461] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[462] = new Triangle(new Point3D(-0.793353,0.608761,
    zOff+0.250000
    ), new Point3D(-0.866025,0.500000,
    zOff+0.250000
    ), new Point3D(-0.757772,0.437500,
    zOff+0.216506
    ));
    Torus.projection[462] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[463] = new Triangle(new Point3D(-0.757772,0.437500,
    zOff+0.216506
    ), new Point3D(-0.694184,0.532666,
    zOff+0.216506
    ), new Point3D(-0.793353,0.608761,
    zOff+0.250000
    ));
    Torus.projection[463] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[464] = new Triangle(new Point3D(-0.694184,0.532666,
    zOff+0.216506
    ), new Point3D(-0.757772,0.437500,
    zOff+0.216506
    ), new Point3D(-0.678525,0.391747,
    zOff+0.125000
    ));
    Torus.projection[464] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[465] = new Triangle(new Point3D(-0.678525,0.391747,
    zOff+0.125000
    ), new Point3D(-0.621587,0.476961,
    zOff+0.125000
    ), new Point3D(-0.694184,0.532666,
    zOff+0.216506
    ));
    Torus.projection[465] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[466] = new Triangle(new Point3D(-0.621587,0.476961,
    zOff+0.125000
    ), new Point3D(-0.678525,0.391747,
    zOff+0.125000
    ), new Point3D(-0.649519,0.375000,
    zOff+0.000000
    ));
    Torus.projection[466] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[467] = new Triangle(new Point3D(-0.649519,0.375000,
    zOff+0.000000
    ), new Point3D(-0.595015,0.456571,
    zOff+0.000000
    ), new Point3D(-0.621587,0.476961,
    zOff+0.125000
    ));
    Torus.projection[467] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[468] = new Triangle(new Point3D(-0.595015,0.456571,
    zOff+0.000000
    ), new Point3D(-0.649519,0.375000,
    zOff+0.000000
    ), new Point3D(-0.678525,0.391747,
    zOff-0.125000
    ));
    Torus.projection[468] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[469] = new Triangle(new Point3D(-0.678525,0.391747,
    zOff-0.125000
    ), new Point3D(-0.621587,0.476961,
    zOff-0.125000
    ), new Point3D(-0.595015,0.456571,
    zOff+0.000000
    ));
    Torus.projection[469] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[470] = new Triangle(new Point3D(-0.621587,0.476961,
    zOff-0.125000
    ), new Point3D(-0.678525,0.391747,
    zOff-0.125000
    ), new Point3D(-0.757772,0.437500,
    zOff-0.216506
    ));
    Torus.projection[470] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[471] = new Triangle(new Point3D(-0.757772,0.437500,
    zOff-0.216506
    ), new Point3D(-0.694184,0.532666,
    zOff-0.216506
    ), new Point3D(-0.621587,0.476961,
    zOff-0.125000
    ));
    Torus.projection[471] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[472] = new Triangle(new Point3D(-0.694184,0.532666,
    zOff-0.216506
    ), new Point3D(-0.757772,0.437500,
    zOff-0.216506
    ), new Point3D(-0.866025,0.500000,
    zOff-0.250000
    ));
    Torus.projection[472] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[473] = new Triangle(new Point3D(-0.866025,0.500000,
    zOff-0.250000
    ), new Point3D(-0.793353,0.608761,
    zOff-0.250000
    ), new Point3D(-0.694184,0.532666,
    zOff-0.216506
    ));
    Torus.projection[473] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[474] = new Triangle(new Point3D(-0.793353,0.608761,
    zOff-0.250000
    ), new Point3D(-0.866025,0.500000,
    zOff-0.250000
    ), new Point3D(-0.974278,0.562500,
    zOff-0.216506
    ));
    Torus.projection[474] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[475] = new Triangle(new Point3D(-0.974278,0.562500,
    zOff-0.216506
    ), new Point3D(-0.892522,0.684857,
    zOff-0.216506
    ), new Point3D(-0.793353,0.608761,
    zOff-0.250000
    ));
    Torus.projection[475] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[476] = new Triangle(new Point3D(-0.892522,0.684857,
    zOff-0.216506
    ), new Point3D(-0.974278,0.562500,
    zOff-0.216506
    ), new Point3D(-1.053525,0.608253,
    zOff-0.125000
    ));
    Torus.projection[476] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[477] = new Triangle(new Point3D(-1.053525,0.608253,
    zOff-0.125000
    ), new Point3D(-0.965119,0.740562,
    zOff-0.125000
    ), new Point3D(-0.892522,0.684857,
    zOff-0.216506
    ));
    Torus.projection[477] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[478] = new Triangle(new Point3D(-0.965119,0.740562,
    zOff-0.125000
    ), new Point3D(-1.053525,0.608253,
    zOff-0.125000
    ), new Point3D(-1.082532,0.625000,
    zOff+0.000000
    ));
    Torus.projection[478] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[479] = new Triangle(new Point3D(-1.082532,0.625000,
    zOff+0.000000
    ), new Point3D(-0.991692,0.760952,
    zOff+0.000000
    ), new Point3D(-0.965119,0.740562,
    zOff-0.125000
    ));
    Torus.projection[479] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[480] = new Triangle(new Point3D(-1.082532,0.625000,
    zOff+0.000000
    ), new Point3D(-1.154849,0.478354,
    zOff+0.000000
    ), new Point3D(-1.123905,0.465537,
    zOff+0.125000
    ));
    Torus.projection[480] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[481] = new Triangle(new Point3D(-1.123905,0.465537,
    zOff+0.125000
    ), new Point3D(-1.053525,0.608253,
    zOff+0.125000
    ), new Point3D(-1.082532,0.625000,
    zOff+0.000000
    ));
    Torus.projection[481] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[482] = new Triangle(new Point3D(-1.053525,0.608253,
    zOff+0.125000
    ), new Point3D(-1.123905,0.465537,
    zOff+0.125000
    ), new Point3D(-1.039364,0.430519,
    zOff+0.216506
    ));
    Torus.projection[482] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[483] = new Triangle(new Point3D(-1.039364,0.430519,
    zOff+0.216506
    ), new Point3D(-0.974278,0.562500,
    zOff+0.216506
    ), new Point3D(-1.053525,0.608253,
    zOff+0.125000
    ));
    Torus.projection[483] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[484] = new Triangle(new Point3D(-0.974278,0.562500,
    zOff+0.216506
    ), new Point3D(-1.039364,0.430519,
    zOff+0.216506
    ), new Point3D(-0.923880,0.382683,
    zOff+0.250000
    ));
    Torus.projection[484] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[485] = new Triangle(new Point3D(-0.923880,0.382683,
    zOff+0.250000
    ), new Point3D(-0.866025,0.500000,
    zOff+0.250000
    ), new Point3D(-0.974278,0.562500,
    zOff+0.216506
    ));
    Torus.projection[485] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[486] = new Triangle(new Point3D(-0.866025,0.500000,
    zOff+0.250000
    ), new Point3D(-0.923880,0.382683,
    zOff+0.250000
    ), new Point3D(-0.808395,0.334848,
    zOff+0.216506
    ));
    Torus.projection[486] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[487] = new Triangle(new Point3D(-0.808395,0.334848,
    zOff+0.216506
    ), new Point3D(-0.757772,0.437500,
    zOff+0.216506
    ), new Point3D(-0.866025,0.500000,
    zOff+0.250000
    ));
    Torus.projection[487] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[488] = new Triangle(new Point3D(-0.757772,0.437500,
    zOff+0.216506
    ), new Point3D(-0.808395,0.334848,
    zOff+0.216506
    ), new Point3D(-0.723854,0.299830,
    zOff+0.125000
    ));
    Torus.projection[488] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[489] = new Triangle(new Point3D(-0.723854,0.299830,
    zOff+0.125000
    ), new Point3D(-0.678525,0.391747,
    zOff+0.125000
    ), new Point3D(-0.757772,0.437500,
    zOff+0.216506
    ));
    Torus.projection[489] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[490] = new Triangle(new Point3D(-0.678525,0.391747,
    zOff+0.125000
    ), new Point3D(-0.723854,0.299830,
    zOff+0.125000
    ), new Point3D(-0.692910,0.287013,
    zOff+0.000000
    ));
    Torus.projection[490] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[491] = new Triangle(new Point3D(-0.692910,0.287013,
    zOff+0.000000
    ), new Point3D(-0.649519,0.375000,
    zOff+0.000000
    ), new Point3D(-0.678525,0.391747,
    zOff+0.125000
    ));
    Torus.projection[491] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[492] = new Triangle(new Point3D(-0.649519,0.375000,
    zOff+0.000000
    ), new Point3D(-0.692910,0.287013,
    zOff+0.000000
    ), new Point3D(-0.723854,0.299830,
    zOff-0.125000
    ));
    Torus.projection[492] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[493] = new Triangle(new Point3D(-0.723854,0.299830,
    zOff-0.125000
    ), new Point3D(-0.678525,0.391747,
    zOff-0.125000
    ), new Point3D(-0.649519,0.375000,
    zOff+0.000000
    ));
    Torus.projection[493] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[494] = new Triangle(new Point3D(-0.678525,0.391747,
    zOff-0.125000
    ), new Point3D(-0.723854,0.299830,
    zOff-0.125000
    ), new Point3D(-0.808395,0.334848,
    zOff-0.216506
    ));
    Torus.projection[494] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[495] = new Triangle(new Point3D(-0.808395,0.334848,
    zOff-0.216506
    ), new Point3D(-0.757772,0.437500,
    zOff-0.216506
    ), new Point3D(-0.678525,0.391747,
    zOff-0.125000
    ));
    Torus.projection[495] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[496] = new Triangle(new Point3D(-0.757772,0.437500,
    zOff-0.216506
    ), new Point3D(-0.808395,0.334848,
    zOff-0.216506
    ), new Point3D(-0.923880,0.382683,
    zOff-0.250000
    ));
    Torus.projection[496] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[497] = new Triangle(new Point3D(-0.923880,0.382683,
    zOff-0.250000
    ), new Point3D(-0.866025,0.500000,
    zOff-0.250000
    ), new Point3D(-0.757772,0.437500,
    zOff-0.216506
    ));
    Torus.projection[497] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[498] = new Triangle(new Point3D(-0.866025,0.500000,
    zOff-0.250000
    ), new Point3D(-0.923880,0.382683,
    zOff-0.250000
    ), new Point3D(-1.039364,0.430519,
    zOff-0.216506
    ));
    Torus.projection[498] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[499] = new Triangle(new Point3D(-1.039364,0.430519,
    zOff-0.216506
    ), new Point3D(-0.974278,0.562500,
    zOff-0.216506
    ), new Point3D(-0.866025,0.500000,
    zOff-0.250000
    ));
    Torus.projection[499] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[500] = new Triangle(new Point3D(-0.974278,0.562500,
    zOff-0.216506
    ), new Point3D(-1.039364,0.430519,
    zOff-0.216506
    ), new Point3D(-1.123905,0.465537,
    zOff-0.125000
    ));
    Torus.projection[500] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[501] = new Triangle(new Point3D(-1.123905,0.465537,
    zOff-0.125000
    ), new Point3D(-1.053525,0.608253,
    zOff-0.125000
    ), new Point3D(-0.974278,0.562500,
    zOff-0.216506
    ));
    Torus.projection[501] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[502] = new Triangle(new Point3D(-1.053525,0.608253,
    zOff-0.125000
    ), new Point3D(-1.123905,0.465537,
    zOff-0.125000
    ), new Point3D(-1.154849,0.478354,
    zOff+0.000000
    ));
    Torus.projection[502] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[503] = new Triangle(new Point3D(-1.154849,0.478354,
    zOff+0.000000
    ), new Point3D(-1.082532,0.625000,
    zOff+0.000000
    ), new Point3D(-1.053525,0.608253,
    zOff-0.125000
    ));
    Torus.projection[503] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[504] = new Triangle(new Point3D(-1.154849,0.478354,
    zOff+0.000000
    ), new Point3D(-1.207407,0.323524,
    zOff+0.000000
    ), new Point3D(-1.175055,0.314855,
    zOff+0.125000
    ));
    Torus.projection[504] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[505] = new Triangle(new Point3D(-1.175055,0.314855,
    zOff+0.125000
    ), new Point3D(-1.123905,0.465537,
    zOff+0.125000
    ), new Point3D(-1.154849,0.478354,
    zOff+0.000000
    ));
    Torus.projection[505] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[506] = new Triangle(new Point3D(-1.123905,0.465537,
    zOff+0.125000
    ), new Point3D(-1.175055,0.314855,
    zOff+0.125000
    ), new Point3D(-1.086667,0.291171,
    zOff+0.216506
    ));
    Torus.projection[506] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[507] = new Triangle(new Point3D(-1.086667,0.291171,
    zOff+0.216506
    ), new Point3D(-1.039364,0.430519,
    zOff+0.216506
    ), new Point3D(-1.123905,0.465537,
    zOff+0.125000
    ));
    Torus.projection[507] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[508] = new Triangle(new Point3D(-1.039364,0.430519,
    zOff+0.216506
    ), new Point3D(-1.086667,0.291171,
    zOff+0.216506
    ), new Point3D(-0.965926,0.258819,
    zOff+0.250000
    ));
    Torus.projection[508] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[509] = new Triangle(new Point3D(-0.965926,0.258819,
    zOff+0.250000
    ), new Point3D(-0.923880,0.382683,
    zOff+0.250000
    ), new Point3D(-1.039364,0.430519,
    zOff+0.216506
    ));
    Torus.projection[509] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[510] = new Triangle(new Point3D(-0.923880,0.382683,
    zOff+0.250000
    ), new Point3D(-0.965926,0.258819,
    zOff+0.250000
    ), new Point3D(-0.845185,0.226467,
    zOff+0.216506
    ));
    Torus.projection[510] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[511] = new Triangle(new Point3D(-0.845185,0.226467,
    zOff+0.216506
    ), new Point3D(-0.808395,0.334848,
    zOff+0.216506
    ), new Point3D(-0.923880,0.382683,
    zOff+0.250000
    ));
    Torus.projection[511] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[512] = new Triangle(new Point3D(-0.808395,0.334848,
    zOff+0.216506
    ), new Point3D(-0.845185,0.226467,
    zOff+0.216506
    ), new Point3D(-0.756797,0.202783,
    zOff+0.125000
    ));
    Torus.projection[512] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[513] = new Triangle(new Point3D(-0.756797,0.202783,
    zOff+0.125000
    ), new Point3D(-0.723854,0.299830,
    zOff+0.125000
    ), new Point3D(-0.808395,0.334848,
    zOff+0.216506
    ));
    Torus.projection[513] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[514] = new Triangle(new Point3D(-0.723854,0.299830,
    zOff+0.125000
    ), new Point3D(-0.756797,0.202783,
    zOff+0.125000
    ), new Point3D(-0.724444,0.194114,
    zOff+0.000000
    ));
    Torus.projection[514] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[515] = new Triangle(new Point3D(-0.724444,0.194114,
    zOff+0.000000
    ), new Point3D(-0.692910,0.287013,
    zOff+0.000000
    ), new Point3D(-0.723854,0.299830,
    zOff+0.125000
    ));
    Torus.projection[515] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[516] = new Triangle(new Point3D(-0.692910,0.287013,
    zOff+0.000000
    ), new Point3D(-0.724444,0.194114,
    zOff+0.000000
    ), new Point3D(-0.756797,0.202783,
    zOff-0.125000
    ));
    Torus.projection[516] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[517] = new Triangle(new Point3D(-0.756797,0.202783,
    zOff-0.125000
    ), new Point3D(-0.723854,0.299830,
    zOff-0.125000
    ), new Point3D(-0.692910,0.287013,
    zOff+0.000000
    ));
    Torus.projection[517] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[518] = new Triangle(new Point3D(-0.723854,0.299830,
    zOff-0.125000
    ), new Point3D(-0.756797,0.202783,
    zOff-0.125000
    ), new Point3D(-0.845185,0.226467,
    zOff-0.216506
    ));
    Torus.projection[518] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[519] = new Triangle(new Point3D(-0.845185,0.226467,
    zOff-0.216506
    ), new Point3D(-0.808395,0.334848,
    zOff-0.216506
    ), new Point3D(-0.723854,0.299830,
    zOff-0.125000
    ));
    Torus.projection[519] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[520] = new Triangle(new Point3D(-0.808395,0.334848,
    zOff-0.216506
    ), new Point3D(-0.845185,0.226467,
    zOff-0.216506
    ), new Point3D(-0.965926,0.258819,
    zOff-0.250000
    ));
    Torus.projection[520] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[521] = new Triangle(new Point3D(-0.965926,0.258819,
    zOff-0.250000
    ), new Point3D(-0.923880,0.382683,
    zOff-0.250000
    ), new Point3D(-0.808395,0.334848,
    zOff-0.216506
    ));
    Torus.projection[521] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[522] = new Triangle(new Point3D(-0.923880,0.382683,
    zOff-0.250000
    ), new Point3D(-0.965926,0.258819,
    zOff-0.250000
    ), new Point3D(-1.086667,0.291171,
    zOff-0.216506
    ));
    Torus.projection[522] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[523] = new Triangle(new Point3D(-1.086667,0.291171,
    zOff-0.216506
    ), new Point3D(-1.039364,0.430519,
    zOff-0.216506
    ), new Point3D(-0.923880,0.382683,
    zOff-0.250000
    ));
    Torus.projection[523] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[524] = new Triangle(new Point3D(-1.039364,0.430519,
    zOff-0.216506
    ), new Point3D(-1.086667,0.291171,
    zOff-0.216506
    ), new Point3D(-1.175055,0.314855,
    zOff-0.125000
    ));
    Torus.projection[524] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[525] = new Triangle(new Point3D(-1.175055,0.314855,
    zOff-0.125000
    ), new Point3D(-1.123905,0.465537,
    zOff-0.125000
    ), new Point3D(-1.039364,0.430519,
    zOff-0.216506
    ));
    Torus.projection[525] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[526] = new Triangle(new Point3D(-1.123905,0.465537,
    zOff-0.125000
    ), new Point3D(-1.175055,0.314855,
    zOff-0.125000
    ), new Point3D(-1.207407,0.323524,
    zOff+0.000000
    ));
    Torus.projection[526] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[527] = new Triangle(new Point3D(-1.207407,0.323524,
    zOff+0.000000
    ), new Point3D(-1.154849,0.478354,
    zOff+0.000000
    ), new Point3D(-1.123905,0.465537,
    zOff-0.125000
    ));
    Torus.projection[527] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[528] = new Triangle(new Point3D(-1.207407,0.323524,
    zOff+0.000000
    ), new Point3D(-1.239306,0.163158,
    zOff+0.000000
    ), new Point3D(-1.206099,0.158786,
    zOff+0.125000
    ));
    Torus.projection[528] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[529] = new Triangle(new Point3D(-1.206099,0.158786,
    zOff+0.125000
    ), new Point3D(-1.175055,0.314855,
    zOff+0.125000
    ), new Point3D(-1.207407,0.323524,
    zOff+0.000000
    ));
    Torus.projection[529] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[530] = new Triangle(new Point3D(-1.175055,0.314855,
    zOff+0.125000
    ), new Point3D(-1.206099,0.158786,
    zOff+0.125000
    ), new Point3D(-1.115375,0.146842,
    zOff+0.216506
    ));
    Torus.projection[530] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[531] = new Triangle(new Point3D(-1.115375,0.146842,
    zOff+0.216506
    ), new Point3D(-1.086667,0.291171,
    zOff+0.216506
    ), new Point3D(-1.175055,0.314855,
    zOff+0.125000
    ));
    Torus.projection[531] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[532] = new Triangle(new Point3D(-1.086667,0.291171,
    zOff+0.216506
    ), new Point3D(-1.115375,0.146842,
    zOff+0.216506
    ), new Point3D(-0.991445,0.130526,
    zOff+0.250000
    ));
    Torus.projection[532] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[533] = new Triangle(new Point3D(-0.991445,0.130526,
    zOff+0.250000
    ), new Point3D(-0.965926,0.258819,
    zOff+0.250000
    ), new Point3D(-1.086667,0.291171,
    zOff+0.216506
    ));
    Torus.projection[533] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[534] = new Triangle(new Point3D(-0.965926,0.258819,
    zOff+0.250000
    ), new Point3D(-0.991445,0.130526,
    zOff+0.250000
    ), new Point3D(-0.867514,0.114211,
    zOff+0.216506
    ));
    Torus.projection[534] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[535] = new Triangle(new Point3D(-0.867514,0.114211,
    zOff+0.216506
    ), new Point3D(-0.845185,0.226467,
    zOff+0.216506
    ), new Point3D(-0.965926,0.258819,
    zOff+0.250000
    ));
    Torus.projection[535] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[536] = new Triangle(new Point3D(-0.845185,0.226467,
    zOff+0.216506
    ), new Point3D(-0.867514,0.114211,
    zOff+0.216506
    ), new Point3D(-0.776791,0.102267,
    zOff+0.125000
    ));
    Torus.projection[536] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[537] = new Triangle(new Point3D(-0.776791,0.102267,
    zOff+0.125000
    ), new Point3D(-0.756797,0.202783,
    zOff+0.125000
    ), new Point3D(-0.845185,0.226467,
    zOff+0.216506
    ));
    Torus.projection[537] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[538] = new Triangle(new Point3D(-0.756797,0.202783,
    zOff+0.125000
    ), new Point3D(-0.776791,0.102267,
    zOff+0.125000
    ), new Point3D(-0.743584,0.097895,
    zOff+0.000000
    ));
    Torus.projection[538] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[539] = new Triangle(new Point3D(-0.743584,0.097895,
    zOff+0.000000
    ), new Point3D(-0.724444,0.194114,
    zOff+0.000000
    ), new Point3D(-0.756797,0.202783,
    zOff+0.125000
    ));
    Torus.projection[539] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[540] = new Triangle(new Point3D(-0.724444,0.194114,
    zOff+0.000000
    ), new Point3D(-0.743584,0.097895,
    zOff+0.000000
    ), new Point3D(-0.776791,0.102267,
    zOff-0.125000
    ));
    Torus.projection[540] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[541] = new Triangle(new Point3D(-0.776791,0.102267,
    zOff-0.125000
    ), new Point3D(-0.756797,0.202783,
    zOff-0.125000
    ), new Point3D(-0.724444,0.194114,
    zOff+0.000000
    ));
    Torus.projection[541] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[542] = new Triangle(new Point3D(-0.756797,0.202783,
    zOff-0.125000
    ), new Point3D(-0.776791,0.102267,
    zOff-0.125000
    ), new Point3D(-0.867514,0.114211,
    zOff-0.216506
    ));
    Torus.projection[542] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[543] = new Triangle(new Point3D(-0.867514,0.114211,
    zOff-0.216506
    ), new Point3D(-0.845185,0.226467,
    zOff-0.216506
    ), new Point3D(-0.756797,0.202783,
    zOff-0.125000
    ));
    Torus.projection[543] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[544] = new Triangle(new Point3D(-0.845185,0.226467,
    zOff-0.216506
    ), new Point3D(-0.867514,0.114211,
    zOff-0.216506
    ), new Point3D(-0.991445,0.130526,
    zOff-0.250000
    ));
    Torus.projection[544] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[545] = new Triangle(new Point3D(-0.991445,0.130526,
    zOff-0.250000
    ), new Point3D(-0.965926,0.258819,
    zOff-0.250000
    ), new Point3D(-0.845185,0.226467,
    zOff-0.216506
    ));
    Torus.projection[545] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[546] = new Triangle(new Point3D(-0.965926,0.258819,
    zOff-0.250000
    ), new Point3D(-0.991445,0.130526,
    zOff-0.250000
    ), new Point3D(-1.115375,0.146842,
    zOff-0.216506
    ));
    Torus.projection[546] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[547] = new Triangle(new Point3D(-1.115375,0.146842,
    zOff-0.216506
    ), new Point3D(-1.086667,0.291171,
    zOff-0.216506
    ), new Point3D(-0.965926,0.258819,
    zOff-0.250000
    ));
    Torus.projection[547] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[548] = new Triangle(new Point3D(-1.086667,0.291171,
    zOff-0.216506
    ), new Point3D(-1.115375,0.146842,
    zOff-0.216506
    ), new Point3D(-1.206099,0.158786,
    zOff-0.125000
    ));
    Torus.projection[548] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[549] = new Triangle(new Point3D(-1.206099,0.158786,
    zOff-0.125000
    ), new Point3D(-1.175055,0.314855,
    zOff-0.125000
    ), new Point3D(-1.086667,0.291171,
    zOff-0.216506
    ));
    Torus.projection[549] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[550] = new Triangle(new Point3D(-1.175055,0.314855,
    zOff-0.125000
    ), new Point3D(-1.206099,0.158786,
    zOff-0.125000
    ), new Point3D(-1.239306,0.163158,
    zOff+0.000000
    ));
    Torus.projection[550] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[551] = new Triangle(new Point3D(-1.239306,0.163158,
    zOff+0.000000
    ), new Point3D(-1.207407,0.323524,
    zOff+0.000000
    ), new Point3D(-1.175055,0.314855,
    zOff-0.125000
    ));
    Torus.projection[551] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[552] = new Triangle(new Point3D(-1.239306,0.163158,
    zOff+0.000000
    ), new Point3D(-1.250000,0.000000,
    zOff+0.000000
    ), new Point3D(-1.216506,0.000000,
    zOff+0.125000
    ));
    Torus.projection[552] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[553] = new Triangle(new Point3D(-1.216506,0.000000,
    zOff+0.125000
    ), new Point3D(-1.206099,0.158786,
    zOff+0.125000
    ), new Point3D(-1.239306,0.163158,
    zOff+0.000000
    ));
    Torus.projection[553] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[554] = new Triangle(new Point3D(-1.206099,0.158786,
    zOff+0.125000
    ), new Point3D(-1.216506,0.000000,
    zOff+0.125000
    ), new Point3D(-1.125000,0.000000,
    zOff+0.216506
    ));
    Torus.projection[554] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[555] = new Triangle(new Point3D(-1.125000,0.000000,
    zOff+0.216506
    ), new Point3D(-1.115375,0.146842,
    zOff+0.216506
    ), new Point3D(-1.206099,0.158786,
    zOff+0.125000
    ));
    Torus.projection[555] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[556] = new Triangle(new Point3D(-1.115375,0.146842,
    zOff+0.216506
    ), new Point3D(-1.125000,0.000000,
    zOff+0.216506
    ), new Point3D(-1.000000,0.000000,
    zOff+0.250000
    ));
    Torus.projection[556] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[557] = new Triangle(new Point3D(-1.000000,0.000000,
    zOff+0.250000
    ), new Point3D(-0.991445,0.130526,
    zOff+0.250000
    ), new Point3D(-1.115375,0.146842,
    zOff+0.216506
    ));
    Torus.projection[557] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[558] = new Triangle(new Point3D(-0.991445,0.130526,
    zOff+0.250000
    ), new Point3D(-1.000000,0.000000,
    zOff+0.250000
    ), new Point3D(-0.875000,0.000000,
    zOff+0.216506
    ));
    Torus.projection[558] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[559] = new Triangle(new Point3D(-0.875000,0.000000,
    zOff+0.216506
    ), new Point3D(-0.867514,0.114211,
    zOff+0.216506
    ), new Point3D(-0.991445,0.130526,
    zOff+0.250000
    ));
    Torus.projection[559] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[560] = new Triangle(new Point3D(-0.867514,0.114211,
    zOff+0.216506
    ), new Point3D(-0.875000,0.000000,
    zOff+0.216506
    ), new Point3D(-0.783494,0.000000,
    zOff+0.125000
    ));
    Torus.projection[560] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[561] = new Triangle(new Point3D(-0.783494,0.000000,
    zOff+0.125000
    ), new Point3D(-0.776791,0.102267,
    zOff+0.125000
    ), new Point3D(-0.867514,0.114211,
    zOff+0.216506
    ));
    Torus.projection[561] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[562] = new Triangle(new Point3D(-0.776791,0.102267,
    zOff+0.125000
    ), new Point3D(-0.783494,0.000000,
    zOff+0.125000
    ), new Point3D(-0.750000,0.000000,
    zOff+0.000000
    ));
    Torus.projection[562] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[563] = new Triangle(new Point3D(-0.750000,0.000000,
    zOff+0.000000
    ), new Point3D(-0.743584,0.097895,
    zOff+0.000000
    ), new Point3D(-0.776791,0.102267,
    zOff+0.125000
    ));
    Torus.projection[563] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[564] = new Triangle(new Point3D(-0.743584,0.097895,
    zOff+0.000000
    ), new Point3D(-0.750000,0.000000,
    zOff+0.000000
    ), new Point3D(-0.783494,0.000000,
    zOff-0.125000
    ));
    Torus.projection[564] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[565] = new Triangle(new Point3D(-0.783494,0.000000,
    zOff-0.125000
    ), new Point3D(-0.776791,0.102267,
    zOff-0.125000
    ), new Point3D(-0.743584,0.097895,
    zOff+0.000000
    ));
    Torus.projection[565] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[566] = new Triangle(new Point3D(-0.776791,0.102267,
    zOff-0.125000
    ), new Point3D(-0.783494,0.000000,
    zOff-0.125000
    ), new Point3D(-0.875000,0.000000,
    zOff-0.216506
    ));
    Torus.projection[566] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[567] = new Triangle(new Point3D(-0.875000,0.000000,
    zOff-0.216506
    ), new Point3D(-0.867514,0.114211,
    zOff-0.216506
    ), new Point3D(-0.776791,0.102267,
    zOff-0.125000
    ));
    Torus.projection[567] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[568] = new Triangle(new Point3D(-0.867514,0.114211,
    zOff-0.216506
    ), new Point3D(-0.875000,0.000000,
    zOff-0.216506
    ), new Point3D(-1.000000,0.000000,
    zOff-0.250000
    ));
    Torus.projection[568] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[569] = new Triangle(new Point3D(-1.000000,0.000000,
    zOff-0.250000
    ), new Point3D(-0.991445,0.130526,
    zOff-0.250000
    ), new Point3D(-0.867514,0.114211,
    zOff-0.216506
    ));
    Torus.projection[569] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[570] = new Triangle(new Point3D(-0.991445,0.130526,
    zOff-0.250000
    ), new Point3D(-1.000000,0.000000,
    zOff-0.250000
    ), new Point3D(-1.125000,0.000000,
    zOff-0.216506
    ));
    Torus.projection[570] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[571] = new Triangle(new Point3D(-1.125000,0.000000,
    zOff-0.216506
    ), new Point3D(-1.115375,0.146842,
    zOff-0.216506
    ), new Point3D(-0.991445,0.130526,
    zOff-0.250000
    ));
    Torus.projection[571] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[572] = new Triangle(new Point3D(-1.115375,0.146842,
    zOff-0.216506
    ), new Point3D(-1.125000,0.000000,
    zOff-0.216506
    ), new Point3D(-1.216506,0.000000,
    zOff-0.125000
    ));
    Torus.projection[572] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[573] = new Triangle(new Point3D(-1.216506,0.000000,
    zOff-0.125000
    ), new Point3D(-1.206099,0.158786,
    zOff-0.125000
    ), new Point3D(-1.115375,0.146842,
    zOff-0.216506
    ));
    Torus.projection[573] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[574] = new Triangle(new Point3D(-1.206099,0.158786,
    zOff-0.125000
    ), new Point3D(-1.216506,0.000000,
    zOff-0.125000
    ), new Point3D(-1.250000,0.000000,
    zOff+0.000000
    ));
    Torus.projection[574] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[575] = new Triangle(new Point3D(-1.250000,0.000000,
    zOff+0.000000
    ), new Point3D(-1.239306,0.163158,
    zOff+0.000000
    ), new Point3D(-1.206099,0.158786,
    zOff-0.125000
    ));
    Torus.projection[575] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[576] = new Triangle(new Point3D(-1.250000,0.000000,
    zOff+0.000000
    ), new Point3D(-1.239306,-0.163158,
    zOff+0.000000
    ), new Point3D(-1.206099,-0.158786,
    zOff+0.125000
    ));
    Torus.projection[576] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[577] = new Triangle(new Point3D(-1.206099,-0.158786,
    zOff+0.125000
    ), new Point3D(-1.216506,0.000000,
    zOff+0.125000
    ), new Point3D(-1.250000,0.000000,
    zOff+0.000000
    ));
    Torus.projection[577] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[578] = new Triangle(new Point3D(-1.216506,0.000000,
    zOff+0.125000
    ), new Point3D(-1.206099,-0.158786,
    zOff+0.125000
    ), new Point3D(-1.115375,-0.146842,
    zOff+0.216506
    ));
    Torus.projection[578] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[579] = new Triangle(new Point3D(-1.115375,-0.146842,
    zOff+0.216506
    ), new Point3D(-1.125000,0.000000,
    zOff+0.216506
    ), new Point3D(-1.216506,0.000000,
    zOff+0.125000
    ));
    Torus.projection[579] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[580] = new Triangle(new Point3D(-1.125000,0.000000,
    zOff+0.216506
    ), new Point3D(-1.115375,-0.146842,
    zOff+0.216506
    ), new Point3D(-0.991445,-0.130526,
    zOff+0.250000
    ));
    Torus.projection[580] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[581] = new Triangle(new Point3D(-0.991445,-0.130526,
    zOff+0.250000
    ), new Point3D(-1.000000,0.000000,
    zOff+0.250000
    ), new Point3D(-1.125000,0.000000,
    zOff+0.216506
    ));
    Torus.projection[581] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[582] = new Triangle(new Point3D(-1.000000,0.000000,
    zOff+0.250000
    ), new Point3D(-0.991445,-0.130526,
    zOff+0.250000
    ), new Point3D(-0.867514,-0.114211,
    zOff+0.216506
    ));
    Torus.projection[582] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[583] = new Triangle(new Point3D(-0.867514,-0.114211,
    zOff+0.216506
    ), new Point3D(-0.875000,0.000000,
    zOff+0.216506
    ), new Point3D(-1.000000,0.000000,
    zOff+0.250000
    ));
    Torus.projection[583] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[584] = new Triangle(new Point3D(-0.875000,0.000000,
    zOff+0.216506
    ), new Point3D(-0.867514,-0.114211,
    zOff+0.216506
    ), new Point3D(-0.776791,-0.102267,
    zOff+0.125000
    ));
    Torus.projection[584] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[585] = new Triangle(new Point3D(-0.776791,-0.102267,
    zOff+0.125000
    ), new Point3D(-0.783494,0.000000,
    zOff+0.125000
    ), new Point3D(-0.875000,0.000000,
    zOff+0.216506
    ));
    Torus.projection[585] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[586] = new Triangle(new Point3D(-0.783494,0.000000,
    zOff+0.125000
    ), new Point3D(-0.776791,-0.102267,
    zOff+0.125000
    ), new Point3D(-0.743584,-0.097895,
    zOff+0.000000
    ));
    Torus.projection[586] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[587] = new Triangle(new Point3D(-0.743584,-0.097895,
    zOff+0.000000
    ), new Point3D(-0.750000,0.000000,
    zOff+0.000000
    ), new Point3D(-0.783494,0.000000,
    zOff+0.125000
    ));
    Torus.projection[587] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[588] = new Triangle(new Point3D(-0.750000,0.000000,
    zOff+0.000000
    ), new Point3D(-0.743584,-0.097895,
    zOff+0.000000
    ), new Point3D(-0.776791,-0.102267,
    zOff-0.125000
    ));
    Torus.projection[588] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[589] = new Triangle(new Point3D(-0.776791,-0.102267,
    zOff-0.125000
    ), new Point3D(-0.783494,0.000000,
    zOff-0.125000
    ), new Point3D(-0.750000,0.000000,
    zOff+0.000000
    ));
    Torus.projection[589] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[590] = new Triangle(new Point3D(-0.783494,0.000000,
    zOff-0.125000
    ), new Point3D(-0.776791,-0.102267,
    zOff-0.125000
    ), new Point3D(-0.867514,-0.114211,
    zOff-0.216506
    ));
    Torus.projection[590] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[591] = new Triangle(new Point3D(-0.867514,-0.114211,
    zOff-0.216506
    ), new Point3D(-0.875000,0.000000,
    zOff-0.216506
    ), new Point3D(-0.783494,0.000000,
    zOff-0.125000
    ));
    Torus.projection[591] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[592] = new Triangle(new Point3D(-0.875000,0.000000,
    zOff-0.216506
    ), new Point3D(-0.867514,-0.114211,
    zOff-0.216506
    ), new Point3D(-0.991445,-0.130526,
    zOff-0.250000
    ));
    Torus.projection[592] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[593] = new Triangle(new Point3D(-0.991445,-0.130526,
    zOff-0.250000
    ), new Point3D(-1.000000,0.000000,
    zOff-0.250000
    ), new Point3D(-0.875000,0.000000,
    zOff-0.216506
    ));
    Torus.projection[593] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[594] = new Triangle(new Point3D(-1.000000,0.000000,
    zOff-0.250000
    ), new Point3D(-0.991445,-0.130526,
    zOff-0.250000
    ), new Point3D(-1.115375,-0.146842,
    zOff-0.216506
    ));
    Torus.projection[594] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[595] = new Triangle(new Point3D(-1.115375,-0.146842,
    zOff-0.216506
    ), new Point3D(-1.125000,0.000000,
    zOff-0.216506
    ), new Point3D(-1.000000,0.000000,
    zOff-0.250000
    ));
    Torus.projection[595] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[596] = new Triangle(new Point3D(-1.125000,0.000000,
    zOff-0.216506
    ), new Point3D(-1.115375,-0.146842,
    zOff-0.216506
    ), new Point3D(-1.206099,-0.158786,
    zOff-0.125000
    ));
    Torus.projection[596] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[597] = new Triangle(new Point3D(-1.206099,-0.158786,
    zOff-0.125000
    ), new Point3D(-1.216506,0.000000,
    zOff-0.125000
    ), new Point3D(-1.125000,0.000000,
    zOff-0.216506
    ));
    Torus.projection[597] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[598] = new Triangle(new Point3D(-1.216506,0.000000,
    zOff-0.125000
    ), new Point3D(-1.206099,-0.158786,
    zOff-0.125000
    ), new Point3D(-1.239306,-0.163158,
    zOff+0.000000
    ));
    Torus.projection[598] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[599] = new Triangle(new Point3D(-1.239306,-0.163158,
    zOff+0.000000
    ), new Point3D(-1.250000,0.000000,
    zOff+0.000000
    ), new Point3D(-1.216506,0.000000,
    zOff-0.125000
    ));
    Torus.projection[599] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[600] = new Triangle(new Point3D(-1.239306,-0.163158,
    zOff+0.000000
    ), new Point3D(-1.207407,-0.323524,
    zOff+0.000000
    ), new Point3D(-1.175055,-0.314855,
    zOff+0.125000
    ));
    Torus.projection[600] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[601] = new Triangle(new Point3D(-1.175055,-0.314855,
    zOff+0.125000
    ), new Point3D(-1.206099,-0.158786,
    zOff+0.125000
    ), new Point3D(-1.239306,-0.163158,
    zOff+0.000000
    ));
    Torus.projection[601] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[602] = new Triangle(new Point3D(-1.206099,-0.158786,
    zOff+0.125000
    ), new Point3D(-1.175055,-0.314855,
    zOff+0.125000
    ), new Point3D(-1.086667,-0.291171,
    zOff+0.216506
    ));
    Torus.projection[602] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[603] = new Triangle(new Point3D(-1.086667,-0.291171,
    zOff+0.216506
    ), new Point3D(-1.115375,-0.146842,
    zOff+0.216506
    ), new Point3D(-1.206099,-0.158786,
    zOff+0.125000
    ));
    Torus.projection[603] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[604] = new Triangle(new Point3D(-1.115375,-0.146842,
    zOff+0.216506
    ), new Point3D(-1.086667,-0.291171,
    zOff+0.216506
    ), new Point3D(-0.965926,-0.258819,
    zOff+0.250000
    ));
    Torus.projection[604] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[605] = new Triangle(new Point3D(-0.965926,-0.258819,
    zOff+0.250000
    ), new Point3D(-0.991445,-0.130526,
    zOff+0.250000
    ), new Point3D(-1.115375,-0.146842,
    zOff+0.216506
    ));
    Torus.projection[605] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[606] = new Triangle(new Point3D(-0.991445,-0.130526,
    zOff+0.250000
    ), new Point3D(-0.965926,-0.258819,
    zOff+0.250000
    ), new Point3D(-0.845185,-0.226467,
    zOff+0.216506
    ));
    Torus.projection[606] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[607] = new Triangle(new Point3D(-0.845185,-0.226467,
    zOff+0.216506
    ), new Point3D(-0.867514,-0.114211,
    zOff+0.216506
    ), new Point3D(-0.991445,-0.130526,
    zOff+0.250000
    ));
    Torus.projection[607] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[608] = new Triangle(new Point3D(-0.867514,-0.114211,
    zOff+0.216506
    ), new Point3D(-0.845185,-0.226467,
    zOff+0.216506
    ), new Point3D(-0.756797,-0.202783,
    zOff+0.125000
    ));
    Torus.projection[608] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[609] = new Triangle(new Point3D(-0.756797,-0.202783,
    zOff+0.125000
    ), new Point3D(-0.776791,-0.102267,
    zOff+0.125000
    ), new Point3D(-0.867514,-0.114211,
    zOff+0.216506
    ));
    Torus.projection[609] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[610] = new Triangle(new Point3D(-0.776791,-0.102267,
    zOff+0.125000
    ), new Point3D(-0.756797,-0.202783,
    zOff+0.125000
    ), new Point3D(-0.724444,-0.194114,
    zOff+0.000000
    ));
    Torus.projection[610] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[611] = new Triangle(new Point3D(-0.724444,-0.194114,
    zOff+0.000000
    ), new Point3D(-0.743584,-0.097895,
    zOff+0.000000
    ), new Point3D(-0.776791,-0.102267,
    zOff+0.125000
    ));
    Torus.projection[611] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[612] = new Triangle(new Point3D(-0.743584,-0.097895,
    zOff+0.000000
    ), new Point3D(-0.724444,-0.194114,
    zOff+0.000000
    ), new Point3D(-0.756797,-0.202783,
    zOff-0.125000
    ));
    Torus.projection[612] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[613] = new Triangle(new Point3D(-0.756797,-0.202783,
    zOff-0.125000
    ), new Point3D(-0.776791,-0.102267,
    zOff-0.125000
    ), new Point3D(-0.743584,-0.097895,
    zOff+0.000000
    ));
    Torus.projection[613] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[614] = new Triangle(new Point3D(-0.776791,-0.102267,
    zOff-0.125000
    ), new Point3D(-0.756797,-0.202783,
    zOff-0.125000
    ), new Point3D(-0.845185,-0.226467,
    zOff-0.216506
    ));
    Torus.projection[614] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[615] = new Triangle(new Point3D(-0.845185,-0.226467,
    zOff-0.216506
    ), new Point3D(-0.867514,-0.114211,
    zOff-0.216506
    ), new Point3D(-0.776791,-0.102267,
    zOff-0.125000
    ));
    Torus.projection[615] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[616] = new Triangle(new Point3D(-0.867514,-0.114211,
    zOff-0.216506
    ), new Point3D(-0.845185,-0.226467,
    zOff-0.216506
    ), new Point3D(-0.965926,-0.258819,
    zOff-0.250000
    ));
    Torus.projection[616] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[617] = new Triangle(new Point3D(-0.965926,-0.258819,
    zOff-0.250000
    ), new Point3D(-0.991445,-0.130526,
    zOff-0.250000
    ), new Point3D(-0.867514,-0.114211,
    zOff-0.216506
    ));
    Torus.projection[617] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[618] = new Triangle(new Point3D(-0.991445,-0.130526,
    zOff-0.250000
    ), new Point3D(-0.965926,-0.258819,
    zOff-0.250000
    ), new Point3D(-1.086667,-0.291171,
    zOff-0.216506
    ));
    Torus.projection[618] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[619] = new Triangle(new Point3D(-1.086667,-0.291171,
    zOff-0.216506
    ), new Point3D(-1.115375,-0.146842,
    zOff-0.216506
    ), new Point3D(-0.991445,-0.130526,
    zOff-0.250000
    ));
    Torus.projection[619] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[620] = new Triangle(new Point3D(-1.115375,-0.146842,
    zOff-0.216506
    ), new Point3D(-1.086667,-0.291171,
    zOff-0.216506
    ), new Point3D(-1.175055,-0.314855,
    zOff-0.125000
    ));
    Torus.projection[620] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[621] = new Triangle(new Point3D(-1.175055,-0.314855,
    zOff-0.125000
    ), new Point3D(-1.206099,-0.158786,
    zOff-0.125000
    ), new Point3D(-1.115375,-0.146842,
    zOff-0.216506
    ));
    Torus.projection[621] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[622] = new Triangle(new Point3D(-1.206099,-0.158786,
    zOff-0.125000
    ), new Point3D(-1.175055,-0.314855,
    zOff-0.125000
    ), new Point3D(-1.207407,-0.323524,
    zOff+0.000000
    ));
    Torus.projection[622] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[623] = new Triangle(new Point3D(-1.207407,-0.323524,
    zOff+0.000000
    ), new Point3D(-1.239306,-0.163158,
    zOff+0.000000
    ), new Point3D(-1.206099,-0.158786,
    zOff-0.125000
    ));
    Torus.projection[623] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[624] = new Triangle(new Point3D(-1.207407,-0.323524,
    zOff+0.000000
    ), new Point3D(-1.154850,-0.478354,
    zOff+0.000000
    ), new Point3D(-1.123906,-0.465536,
    zOff+0.125000
    ));
    Torus.projection[624] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[625] = new Triangle(new Point3D(-1.123906,-0.465536,
    zOff+0.125000
    ), new Point3D(-1.175055,-0.314855,
    zOff+0.125000
    ), new Point3D(-1.207407,-0.323524,
    zOff+0.000000
    ));
    Torus.projection[625] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[626] = new Triangle(new Point3D(-1.175055,-0.314855,
    zOff+0.125000
    ), new Point3D(-1.123906,-0.465536,
    zOff+0.125000
    ), new Point3D(-1.039365,-0.430518,
    zOff+0.216506
    ));
    Torus.projection[626] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[627] = new Triangle(new Point3D(-1.039365,-0.430518,
    zOff+0.216506
    ), new Point3D(-1.086667,-0.291171,
    zOff+0.216506
    ), new Point3D(-1.175055,-0.314855,
    zOff+0.125000
    ));
    Torus.projection[627] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[628] = new Triangle(new Point3D(-1.086667,-0.291171,
    zOff+0.216506
    ), new Point3D(-1.039365,-0.430518,
    zOff+0.216506
    ), new Point3D(-0.923880,-0.382683,
    zOff+0.250000
    ));
    Torus.projection[628] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[629] = new Triangle(new Point3D(-0.923880,-0.382683,
    zOff+0.250000
    ), new Point3D(-0.965926,-0.258819,
    zOff+0.250000
    ), new Point3D(-1.086667,-0.291171,
    zOff+0.216506
    ));
    Torus.projection[629] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[630] = new Triangle(new Point3D(-0.965926,-0.258819,
    zOff+0.250000
    ), new Point3D(-0.923880,-0.382683,
    zOff+0.250000
    ), new Point3D(-0.808395,-0.334848,
    zOff+0.216506
    ));
    Torus.projection[630] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[631] = new Triangle(new Point3D(-0.808395,-0.334848,
    zOff+0.216506
    ), new Point3D(-0.845185,-0.226467,
    zOff+0.216506
    ), new Point3D(-0.965926,-0.258819,
    zOff+0.250000
    ));
    Torus.projection[631] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[632] = new Triangle(new Point3D(-0.845185,-0.226467,
    zOff+0.216506
    ), new Point3D(-0.808395,-0.334848,
    zOff+0.216506
    ), new Point3D(-0.723854,-0.299830,
    zOff+0.125000
    ));
    Torus.projection[632] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[633] = new Triangle(new Point3D(-0.723854,-0.299830,
    zOff+0.125000
    ), new Point3D(-0.756797,-0.202783,
    zOff+0.125000
    ), new Point3D(-0.845185,-0.226467,
    zOff+0.216506
    ));
    Torus.projection[633] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[634] = new Triangle(new Point3D(-0.756797,-0.202783,
    zOff+0.125000
    ), new Point3D(-0.723854,-0.299830,
    zOff+0.125000
    ), new Point3D(-0.692910,-0.287012,
    zOff+0.000000
    ));
    Torus.projection[634] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[635] = new Triangle(new Point3D(-0.692910,-0.287012,
    zOff+0.000000
    ), new Point3D(-0.724444,-0.194114,
    zOff+0.000000
    ), new Point3D(-0.756797,-0.202783,
    zOff+0.125000
    ));
    Torus.projection[635] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[636] = new Triangle(new Point3D(-0.724444,-0.194114,
    zOff+0.000000
    ), new Point3D(-0.692910,-0.287012,
    zOff+0.000000
    ), new Point3D(-0.723854,-0.299830,
    zOff-0.125000
    ));
    Torus.projection[636] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[637] = new Triangle(new Point3D(-0.723854,-0.299830,
    zOff-0.125000
    ), new Point3D(-0.756797,-0.202783,
    zOff-0.125000
    ), new Point3D(-0.724444,-0.194114,
    zOff+0.000000
    ));
    Torus.projection[637] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[638] = new Triangle(new Point3D(-0.756797,-0.202783,
    zOff-0.125000
    ), new Point3D(-0.723854,-0.299830,
    zOff-0.125000
    ), new Point3D(-0.808395,-0.334848,
    zOff-0.216506
    ));
    Torus.projection[638] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[639] = new Triangle(new Point3D(-0.808395,-0.334848,
    zOff-0.216506
    ), new Point3D(-0.845185,-0.226467,
    zOff-0.216506
    ), new Point3D(-0.756797,-0.202783,
    zOff-0.125000
    ));
    Torus.projection[639] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[640] = new Triangle(new Point3D(-0.845185,-0.226467,
    zOff-0.216506
    ), new Point3D(-0.808395,-0.334848,
    zOff-0.216506
    ), new Point3D(-0.923880,-0.382683,
    zOff-0.250000
    ));
    Torus.projection[640] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[641] = new Triangle(new Point3D(-0.923880,-0.382683,
    zOff-0.250000
    ), new Point3D(-0.965926,-0.258819,
    zOff-0.250000
    ), new Point3D(-0.845185,-0.226467,
    zOff-0.216506
    ));
    Torus.projection[641] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[642] = new Triangle(new Point3D(-0.965926,-0.258819,
    zOff-0.250000
    ), new Point3D(-0.923880,-0.382683,
    zOff-0.250000
    ), new Point3D(-1.039365,-0.430518,
    zOff-0.216506
    ));
    Torus.projection[642] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[643] = new Triangle(new Point3D(-1.039365,-0.430518,
    zOff-0.216506
    ), new Point3D(-1.086667,-0.291171,
    zOff-0.216506
    ), new Point3D(-0.965926,-0.258819,
    zOff-0.250000
    ));
    Torus.projection[643] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[644] = new Triangle(new Point3D(-1.086667,-0.291171,
    zOff-0.216506
    ), new Point3D(-1.039365,-0.430518,
    zOff-0.216506
    ), new Point3D(-1.123906,-0.465536,
    zOff-0.125000
    ));
    Torus.projection[644] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[645] = new Triangle(new Point3D(-1.123906,-0.465536,
    zOff-0.125000
    ), new Point3D(-1.175055,-0.314855,
    zOff-0.125000
    ), new Point3D(-1.086667,-0.291171,
    zOff-0.216506
    ));
    Torus.projection[645] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[646] = new Triangle(new Point3D(-1.175055,-0.314855,
    zOff-0.125000
    ), new Point3D(-1.123906,-0.465536,
    zOff-0.125000
    ), new Point3D(-1.154850,-0.478354,
    zOff+0.000000
    ));
    Torus.projection[646] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[647] = new Triangle(new Point3D(-1.154850,-0.478354,
    zOff+0.000000
    ), new Point3D(-1.207407,-0.323524,
    zOff+0.000000
    ), new Point3D(-1.175055,-0.314855,
    zOff-0.125000
    ));
    Torus.projection[647] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[648] = new Triangle(new Point3D(-1.154850,-0.478354,
    zOff+0.000000
    ), new Point3D(-1.082532,-0.625000,
    zOff+0.000000
    ), new Point3D(-1.053526,-0.608253,
    zOff+0.125000
    ));
    Torus.projection[648] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[649] = new Triangle(new Point3D(-1.053526,-0.608253,
    zOff+0.125000
    ), new Point3D(-1.123906,-0.465536,
    zOff+0.125000
    ), new Point3D(-1.154850,-0.478354,
    zOff+0.000000
    ));
    Torus.projection[649] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[650] = new Triangle(new Point3D(-1.123906,-0.465536,
    zOff+0.125000
    ), new Point3D(-1.053526,-0.608253,
    zOff+0.125000
    ), new Point3D(-0.974279,-0.562500,
    zOff+0.216506
    ));
    Torus.projection[650] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[651] = new Triangle(new Point3D(-0.974279,-0.562500,
    zOff+0.216506
    ), new Point3D(-1.039365,-0.430518,
    zOff+0.216506
    ), new Point3D(-1.123906,-0.465536,
    zOff+0.125000
    ));
    Torus.projection[651] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[652] = new Triangle(new Point3D(-1.039365,-0.430518,
    zOff+0.216506
    ), new Point3D(-0.974279,-0.562500,
    zOff+0.216506
    ), new Point3D(-0.866026,-0.500000,
    zOff+0.250000
    ));
    Torus.projection[652] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[653] = new Triangle(new Point3D(-0.866026,-0.500000,
    zOff+0.250000
    ), new Point3D(-0.923880,-0.382683,
    zOff+0.250000
    ), new Point3D(-1.039365,-0.430518,
    zOff+0.216506
    ));
    Torus.projection[653] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[654] = new Triangle(new Point3D(-0.923880,-0.382683,
    zOff+0.250000
    ), new Point3D(-0.866026,-0.500000,
    zOff+0.250000
    ), new Point3D(-0.757772,-0.437500,
    zOff+0.216506
    ));
    Torus.projection[654] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[655] = new Triangle(new Point3D(-0.757772,-0.437500,
    zOff+0.216506
    ), new Point3D(-0.808395,-0.334848,
    zOff+0.216506
    ), new Point3D(-0.923880,-0.382683,
    zOff+0.250000
    ));
    Torus.projection[655] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[656] = new Triangle(new Point3D(-0.808395,-0.334848,
    zOff+0.216506
    ), new Point3D(-0.757772,-0.437500,
    zOff+0.216506
    ), new Point3D(-0.678525,-0.391747,
    zOff+0.125000
    ));
    Torus.projection[656] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[657] = new Triangle(new Point3D(-0.678525,-0.391747,
    zOff+0.125000
    ), new Point3D(-0.723854,-0.299830,
    zOff+0.125000
    ), new Point3D(-0.808395,-0.334848,
    zOff+0.216506
    ));
    Torus.projection[657] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[658] = new Triangle(new Point3D(-0.723854,-0.299830,
    zOff+0.125000
    ), new Point3D(-0.678525,-0.391747,
    zOff+0.125000
    ), new Point3D(-0.649519,-0.375000,
    zOff+0.000000
    ));
    Torus.projection[658] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[659] = new Triangle(new Point3D(-0.649519,-0.375000,
    zOff+0.000000
    ), new Point3D(-0.692910,-0.287012,
    zOff+0.000000
    ), new Point3D(-0.723854,-0.299830,
    zOff+0.125000
    ));
    Torus.projection[659] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[660] = new Triangle(new Point3D(-0.692910,-0.287012,
    zOff+0.000000
    ), new Point3D(-0.649519,-0.375000,
    zOff+0.000000
    ), new Point3D(-0.678525,-0.391747,
    zOff-0.125000
    ));
    Torus.projection[660] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[661] = new Triangle(new Point3D(-0.678525,-0.391747,
    zOff-0.125000
    ), new Point3D(-0.723854,-0.299830,
    zOff-0.125000
    ), new Point3D(-0.692910,-0.287012,
    zOff+0.000000
    ));
    Torus.projection[661] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[662] = new Triangle(new Point3D(-0.723854,-0.299830,
    zOff-0.125000
    ), new Point3D(-0.678525,-0.391747,
    zOff-0.125000
    ), new Point3D(-0.757772,-0.437500,
    zOff-0.216506
    ));
    Torus.projection[662] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[663] = new Triangle(new Point3D(-0.757772,-0.437500,
    zOff-0.216506
    ), new Point3D(-0.808395,-0.334848,
    zOff-0.216506
    ), new Point3D(-0.723854,-0.299830,
    zOff-0.125000
    ));
    Torus.projection[663] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[664] = new Triangle(new Point3D(-0.808395,-0.334848,
    zOff-0.216506
    ), new Point3D(-0.757772,-0.437500,
    zOff-0.216506
    ), new Point3D(-0.866026,-0.500000,
    zOff-0.250000
    ));
    Torus.projection[664] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[665] = new Triangle(new Point3D(-0.866026,-0.500000,
    zOff-0.250000
    ), new Point3D(-0.923880,-0.382683,
    zOff-0.250000
    ), new Point3D(-0.808395,-0.334848,
    zOff-0.216506
    ));
    Torus.projection[665] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[666] = new Triangle(new Point3D(-0.923880,-0.382683,
    zOff-0.250000
    ), new Point3D(-0.866026,-0.500000,
    zOff-0.250000
    ), new Point3D(-0.974279,-0.562500,
    zOff-0.216506
    ));
    Torus.projection[666] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[667] = new Triangle(new Point3D(-0.974279,-0.562500,
    zOff-0.216506
    ), new Point3D(-1.039365,-0.430518,
    zOff-0.216506
    ), new Point3D(-0.923880,-0.382683,
    zOff-0.250000
    ));
    Torus.projection[667] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[668] = new Triangle(new Point3D(-1.039365,-0.430518,
    zOff-0.216506
    ), new Point3D(-0.974279,-0.562500,
    zOff-0.216506
    ), new Point3D(-1.053526,-0.608253,
    zOff-0.125000
    ));
    Torus.projection[668] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[669] = new Triangle(new Point3D(-1.053526,-0.608253,
    zOff-0.125000
    ), new Point3D(-1.123906,-0.465536,
    zOff-0.125000
    ), new Point3D(-1.039365,-0.430518,
    zOff-0.216506
    ));
    Torus.projection[669] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[670] = new Triangle(new Point3D(-1.123906,-0.465536,
    zOff-0.125000
    ), new Point3D(-1.053526,-0.608253,
    zOff-0.125000
    ), new Point3D(-1.082532,-0.625000,
    zOff+0.000000
    ));
    Torus.projection[670] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[671] = new Triangle(new Point3D(-1.082532,-0.625000,
    zOff+0.000000
    ), new Point3D(-1.154850,-0.478354,
    zOff+0.000000
    ), new Point3D(-1.123906,-0.465536,
    zOff-0.125000
    ));
    Torus.projection[671] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[672] = new Triangle(new Point3D(-1.082532,-0.625000,
    zOff+0.000000
    ), new Point3D(-0.991692,-0.760952,
    zOff+0.000000
    ), new Point3D(-0.965119,-0.740562,
    zOff+0.125000
    ));
    Torus.projection[672] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[673] = new Triangle(new Point3D(-0.965119,-0.740562,
    zOff+0.125000
    ), new Point3D(-1.053526,-0.608253,
    zOff+0.125000
    ), new Point3D(-1.082532,-0.625000,
    zOff+0.000000
    ));
    Torus.projection[673] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[674] = new Triangle(new Point3D(-1.053526,-0.608253,
    zOff+0.125000
    ), new Point3D(-0.965119,-0.740562,
    zOff+0.125000
    ), new Point3D(-0.892522,-0.684857,
    zOff+0.216506
    ));
    Torus.projection[674] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[675] = new Triangle(new Point3D(-0.892522,-0.684857,
    zOff+0.216506
    ), new Point3D(-0.974279,-0.562500,
    zOff+0.216506
    ), new Point3D(-1.053526,-0.608253,
    zOff+0.125000
    ));
    Torus.projection[675] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[676] = new Triangle(new Point3D(-0.974279,-0.562500,
    zOff+0.216506
    ), new Point3D(-0.892522,-0.684857,
    zOff+0.216506
    ), new Point3D(-0.793353,-0.608761,
    zOff+0.250000
    ));
    Torus.projection[676] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[677] = new Triangle(new Point3D(-0.793353,-0.608761,
    zOff+0.250000
    ), new Point3D(-0.866026,-0.500000,
    zOff+0.250000
    ), new Point3D(-0.974279,-0.562500,
    zOff+0.216506
    ));
    Torus.projection[677] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[678] = new Triangle(new Point3D(-0.866026,-0.500000,
    zOff+0.250000
    ), new Point3D(-0.793353,-0.608761,
    zOff+0.250000
    ), new Point3D(-0.694184,-0.532666,
    zOff+0.216506
    ));
    Torus.projection[678] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[679] = new Triangle(new Point3D(-0.694184,-0.532666,
    zOff+0.216506
    ), new Point3D(-0.757772,-0.437500,
    zOff+0.216506
    ), new Point3D(-0.866026,-0.500000,
    zOff+0.250000
    ));
    Torus.projection[679] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[680] = new Triangle(new Point3D(-0.757772,-0.437500,
    zOff+0.216506
    ), new Point3D(-0.694184,-0.532666,
    zOff+0.216506
    ), new Point3D(-0.621587,-0.476961,
    zOff+0.125000
    ));
    Torus.projection[680] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[681] = new Triangle(new Point3D(-0.621587,-0.476961,
    zOff+0.125000
    ), new Point3D(-0.678525,-0.391747,
    zOff+0.125000
    ), new Point3D(-0.757772,-0.437500,
    zOff+0.216506
    ));
    Torus.projection[681] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[682] = new Triangle(new Point3D(-0.678525,-0.391747,
    zOff+0.125000
    ), new Point3D(-0.621587,-0.476961,
    zOff+0.125000
    ), new Point3D(-0.595015,-0.456571,
    zOff+0.000000
    ));
    Torus.projection[682] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[683] = new Triangle(new Point3D(-0.595015,-0.456571,
    zOff+0.000000
    ), new Point3D(-0.649519,-0.375000,
    zOff+0.000000
    ), new Point3D(-0.678525,-0.391747,
    zOff+0.125000
    ));
    Torus.projection[683] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[684] = new Triangle(new Point3D(-0.649519,-0.375000,
    zOff+0.000000
    ), new Point3D(-0.595015,-0.456571,
    zOff+0.000000
    ), new Point3D(-0.621587,-0.476961,
    zOff-0.125000
    ));
    Torus.projection[684] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[685] = new Triangle(new Point3D(-0.621587,-0.476961,
    zOff-0.125000
    ), new Point3D(-0.678525,-0.391747,
    zOff-0.125000
    ), new Point3D(-0.649519,-0.375000,
    zOff+0.000000
    ));
    Torus.projection[685] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[686] = new Triangle(new Point3D(-0.678525,-0.391747,
    zOff-0.125000
    ), new Point3D(-0.621587,-0.476961,
    zOff-0.125000
    ), new Point3D(-0.694184,-0.532666,
    zOff-0.216506
    ));
    Torus.projection[686] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[687] = new Triangle(new Point3D(-0.694184,-0.532666,
    zOff-0.216506
    ), new Point3D(-0.757772,-0.437500,
    zOff-0.216506
    ), new Point3D(-0.678525,-0.391747,
    zOff-0.125000
    ));
    Torus.projection[687] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[688] = new Triangle(new Point3D(-0.757772,-0.437500,
    zOff-0.216506
    ), new Point3D(-0.694184,-0.532666,
    zOff-0.216506
    ), new Point3D(-0.793353,-0.608761,
    zOff-0.250000
    ));
    Torus.projection[688] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[689] = new Triangle(new Point3D(-0.793353,-0.608761,
    zOff-0.250000
    ), new Point3D(-0.866026,-0.500000,
    zOff-0.250000
    ), new Point3D(-0.757772,-0.437500,
    zOff-0.216506
    ));
    Torus.projection[689] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[690] = new Triangle(new Point3D(-0.866026,-0.500000,
    zOff-0.250000
    ), new Point3D(-0.793353,-0.608761,
    zOff-0.250000
    ), new Point3D(-0.892522,-0.684857,
    zOff-0.216506
    ));
    Torus.projection[690] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[691] = new Triangle(new Point3D(-0.892522,-0.684857,
    zOff-0.216506
    ), new Point3D(-0.974279,-0.562500,
    zOff-0.216506
    ), new Point3D(-0.866026,-0.500000,
    zOff-0.250000
    ));
    Torus.projection[691] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[692] = new Triangle(new Point3D(-0.974279,-0.562500,
    zOff-0.216506
    ), new Point3D(-0.892522,-0.684857,
    zOff-0.216506
    ), new Point3D(-0.965119,-0.740562,
    zOff-0.125000
    ));
    Torus.projection[692] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[693] = new Triangle(new Point3D(-0.965119,-0.740562,
    zOff-0.125000
    ), new Point3D(-1.053526,-0.608253,
    zOff-0.125000
    ), new Point3D(-0.974279,-0.562500,
    zOff-0.216506
    ));
    Torus.projection[693] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[694] = new Triangle(new Point3D(-1.053526,-0.608253,
    zOff-0.125000
    ), new Point3D(-0.965119,-0.740562,
    zOff-0.125000
    ), new Point3D(-0.991692,-0.760952,
    zOff+0.000000
    ));
    Torus.projection[694] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[695] = new Triangle(new Point3D(-0.991692,-0.760952,
    zOff+0.000000
    ), new Point3D(-1.082532,-0.625000,
    zOff+0.000000
    ), new Point3D(-1.053526,-0.608253,
    zOff-0.125000
    ));
    Torus.projection[695] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[696] = new Triangle(new Point3D(-0.991692,-0.760952,
    zOff+0.000000
    ), new Point3D(-0.883884,-0.883883,
    zOff+0.000000
    ), new Point3D(-0.860200,-0.860200,
    zOff+0.125000
    ));
    Torus.projection[696] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[697] = new Triangle(new Point3D(-0.860200,-0.860200,
    zOff+0.125000
    ), new Point3D(-0.965119,-0.740562,
    zOff+0.125000
    ), new Point3D(-0.991692,-0.760952,
    zOff+0.000000
    ));
    Torus.projection[697] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[698] = new Triangle(new Point3D(-0.965119,-0.740562,
    zOff+0.125000
    ), new Point3D(-0.860200,-0.860200,
    zOff+0.125000
    ), new Point3D(-0.795495,-0.795495,
    zOff+0.216506
    ));
    Torus.projection[698] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[699] = new Triangle(new Point3D(-0.795495,-0.795495,
    zOff+0.216506
    ), new Point3D(-0.892522,-0.684857,
    zOff+0.216506
    ), new Point3D(-0.965119,-0.740562,
    zOff+0.125000
    ));
    Torus.projection[699] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[700] = new Triangle(new Point3D(-0.892522,-0.684857,
    zOff+0.216506
    ), new Point3D(-0.795495,-0.795495,
    zOff+0.216506
    ), new Point3D(-0.707107,-0.707107,
    zOff+0.250000
    ));
    Torus.projection[700] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[701] = new Triangle(new Point3D(-0.707107,-0.707107,
    zOff+0.250000
    ), new Point3D(-0.793353,-0.608761,
    zOff+0.250000
    ), new Point3D(-0.892522,-0.684857,
    zOff+0.216506
    ));
    Torus.projection[701] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[702] = new Triangle(new Point3D(-0.793353,-0.608761,
    zOff+0.250000
    ), new Point3D(-0.707107,-0.707107,
    zOff+0.250000
    ), new Point3D(-0.618719,-0.618718,
    zOff+0.216506
    ));
    Torus.projection[702] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[703] = new Triangle(new Point3D(-0.618719,-0.618718,
    zOff+0.216506
    ), new Point3D(-0.694184,-0.532666,
    zOff+0.216506
    ), new Point3D(-0.793353,-0.608761,
    zOff+0.250000
    ));
    Torus.projection[703] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[704] = new Triangle(new Point3D(-0.694184,-0.532666,
    zOff+0.216506
    ), new Point3D(-0.618719,-0.618718,
    zOff+0.216506
    ), new Point3D(-0.554014,-0.554013,
    zOff+0.125000
    ));
    Torus.projection[704] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[705] = new Triangle(new Point3D(-0.554014,-0.554013,
    zOff+0.125000
    ), new Point3D(-0.621587,-0.476961,
    zOff+0.125000
    ), new Point3D(-0.694184,-0.532666,
    zOff+0.216506
    ));
    Torus.projection[705] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[706] = new Triangle(new Point3D(-0.621587,-0.476961,
    zOff+0.125000
    ), new Point3D(-0.554014,-0.554013,
    zOff+0.125000
    ), new Point3D(-0.530330,-0.530330,
    zOff+0.000000
    ));
    Torus.projection[706] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[707] = new Triangle(new Point3D(-0.530330,-0.530330,
    zOff+0.000000
    ), new Point3D(-0.595015,-0.456571,
    zOff+0.000000
    ), new Point3D(-0.621587,-0.476961,
    zOff+0.125000
    ));
    Torus.projection[707] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[708] = new Triangle(new Point3D(-0.595015,-0.456571,
    zOff+0.000000
    ), new Point3D(-0.530330,-0.530330,
    zOff+0.000000
    ), new Point3D(-0.554014,-0.554013,
    zOff-0.125000
    ));
    Torus.projection[708] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[709] = new Triangle(new Point3D(-0.554014,-0.554013,
    zOff-0.125000
    ), new Point3D(-0.621587,-0.476961,
    zOff-0.125000
    ), new Point3D(-0.595015,-0.456571,
    zOff+0.000000
    ));
    Torus.projection[709] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[710] = new Triangle(new Point3D(-0.621587,-0.476961,
    zOff-0.125000
    ), new Point3D(-0.554014,-0.554013,
    zOff-0.125000
    ), new Point3D(-0.618719,-0.618718,
    zOff-0.216506
    ));
    Torus.projection[710] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[711] = new Triangle(new Point3D(-0.618719,-0.618718,
    zOff-0.216506
    ), new Point3D(-0.694184,-0.532666,
    zOff-0.216506
    ), new Point3D(-0.621587,-0.476961,
    zOff-0.125000
    ));
    Torus.projection[711] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[712] = new Triangle(new Point3D(-0.694184,-0.532666,
    zOff-0.216506
    ), new Point3D(-0.618719,-0.618718,
    zOff-0.216506
    ), new Point3D(-0.707107,-0.707107,
    zOff-0.250000
    ));
    Torus.projection[712] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[713] = new Triangle(new Point3D(-0.707107,-0.707107,
    zOff-0.250000
    ), new Point3D(-0.793353,-0.608761,
    zOff-0.250000
    ), new Point3D(-0.694184,-0.532666,
    zOff-0.216506
    ));
    Torus.projection[713] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[714] = new Triangle(new Point3D(-0.793353,-0.608761,
    zOff-0.250000
    ), new Point3D(-0.707107,-0.707107,
    zOff-0.250000
    ), new Point3D(-0.795495,-0.795495,
    zOff-0.216506
    ));
    Torus.projection[714] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[715] = new Triangle(new Point3D(-0.795495,-0.795495,
    zOff-0.216506
    ), new Point3D(-0.892522,-0.684857,
    zOff-0.216506
    ), new Point3D(-0.793353,-0.608761,
    zOff-0.250000
    ));
    Torus.projection[715] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[716] = new Triangle(new Point3D(-0.892522,-0.684857,
    zOff-0.216506
    ), new Point3D(-0.795495,-0.795495,
    zOff-0.216506
    ), new Point3D(-0.860200,-0.860200,
    zOff-0.125000
    ));
    Torus.projection[716] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[717] = new Triangle(new Point3D(-0.860200,-0.860200,
    zOff-0.125000
    ), new Point3D(-0.965119,-0.740562,
    zOff-0.125000
    ), new Point3D(-0.892522,-0.684857,
    zOff-0.216506
    ));
    Torus.projection[717] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[718] = new Triangle(new Point3D(-0.965119,-0.740562,
    zOff-0.125000
    ), new Point3D(-0.860200,-0.860200,
    zOff-0.125000
    ), new Point3D(-0.883884,-0.883883,
    zOff+0.000000
    ));
    Torus.projection[718] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[719] = new Triangle(new Point3D(-0.883884,-0.883883,
    zOff+0.000000
    ), new Point3D(-0.991692,-0.760952,
    zOff+0.000000
    ), new Point3D(-0.965119,-0.740562,
    zOff-0.125000
    ));
    Torus.projection[719] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[720] = new Triangle(new Point3D(-0.883884,-0.883883,
    zOff+0.000000
    ), new Point3D(-0.760952,-0.991691,
    zOff+0.000000
    ), new Point3D(-0.740563,-0.965119,
    zOff+0.125000
    ));
    Torus.projection[720] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[721] = new Triangle(new Point3D(-0.740563,-0.965119,
    zOff+0.125000
    ), new Point3D(-0.860200,-0.860200,
    zOff+0.125000
    ), new Point3D(-0.883884,-0.883883,
    zOff+0.000000
    ));
    Torus.projection[721] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[722] = new Triangle(new Point3D(-0.860200,-0.860200,
    zOff+0.125000
    ), new Point3D(-0.740563,-0.965119,
    zOff+0.125000
    ), new Point3D(-0.684857,-0.892522,
    zOff+0.216506
    ));
    Torus.projection[722] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[723] = new Triangle(new Point3D(-0.684857,-0.892522,
    zOff+0.216506
    ), new Point3D(-0.795495,-0.795495,
    zOff+0.216506
    ), new Point3D(-0.860200,-0.860200,
    zOff+0.125000
    ));
    Torus.projection[723] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[724] = new Triangle(new Point3D(-0.795495,-0.795495,
    zOff+0.216506
    ), new Point3D(-0.684857,-0.892522,
    zOff+0.216506
    ), new Point3D(-0.608762,-0.793353,
    zOff+0.250000
    ));
    Torus.projection[724] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[725] = new Triangle(new Point3D(-0.608762,-0.793353,
    zOff+0.250000
    ), new Point3D(-0.707107,-0.707107,
    zOff+0.250000
    ), new Point3D(-0.795495,-0.795495,
    zOff+0.216506
    ));
    Torus.projection[725] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[726] = new Triangle(new Point3D(-0.707107,-0.707107,
    zOff+0.250000
    ), new Point3D(-0.608762,-0.793353,
    zOff+0.250000
    ), new Point3D(-0.532667,-0.694184,
    zOff+0.216506
    ));
    Torus.projection[726] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[727] = new Triangle(new Point3D(-0.532667,-0.694184,
    zOff+0.216506
    ), new Point3D(-0.618719,-0.618718,
    zOff+0.216506
    ), new Point3D(-0.707107,-0.707107,
    zOff+0.250000
    ));
    Torus.projection[727] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[728] = new Triangle(new Point3D(-0.618719,-0.618718,
    zOff+0.216506
    ), new Point3D(-0.532667,-0.694184,
    zOff+0.216506
    ), new Point3D(-0.476961,-0.621587,
    zOff+0.125000
    ));
    Torus.projection[728] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[729] = new Triangle(new Point3D(-0.476961,-0.621587,
    zOff+0.125000
    ), new Point3D(-0.554014,-0.554013,
    zOff+0.125000
    ), new Point3D(-0.618719,-0.618718,
    zOff+0.216506
    ));
    Torus.projection[729] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[730] = new Triangle(new Point3D(-0.554014,-0.554013,
    zOff+0.125000
    ), new Point3D(-0.476961,-0.621587,
    zOff+0.125000
    ), new Point3D(-0.456571,-0.595015,
    zOff+0.000000
    ));
    Torus.projection[730] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[731] = new Triangle(new Point3D(-0.456571,-0.595015,
    zOff+0.000000
    ), new Point3D(-0.530330,-0.530330,
    zOff+0.000000
    ), new Point3D(-0.554014,-0.554013,
    zOff+0.125000
    ));
    Torus.projection[731] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[732] = new Triangle(new Point3D(-0.530330,-0.530330,
    zOff+0.000000
    ), new Point3D(-0.456571,-0.595015,
    zOff+0.000000
    ), new Point3D(-0.476961,-0.621587,
    zOff-0.125000
    ));
    Torus.projection[732] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[733] = new Triangle(new Point3D(-0.476961,-0.621587,
    zOff-0.125000
    ), new Point3D(-0.554014,-0.554013,
    zOff-0.125000
    ), new Point3D(-0.530330,-0.530330,
    zOff+0.000000
    ));
    Torus.projection[733] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[734] = new Triangle(new Point3D(-0.554014,-0.554013,
    zOff-0.125000
    ), new Point3D(-0.476961,-0.621587,
    zOff-0.125000
    ), new Point3D(-0.532667,-0.694184,
    zOff-0.216506
    ));
    Torus.projection[734] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[735] = new Triangle(new Point3D(-0.532667,-0.694184,
    zOff-0.216506
    ), new Point3D(-0.618719,-0.618718,
    zOff-0.216506
    ), new Point3D(-0.554014,-0.554013,
    zOff-0.125000
    ));
    Torus.projection[735] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[736] = new Triangle(new Point3D(-0.618719,-0.618718,
    zOff-0.216506
    ), new Point3D(-0.532667,-0.694184,
    zOff-0.216506
    ), new Point3D(-0.608762,-0.793353,
    zOff-0.250000
    ));
    Torus.projection[736] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[737] = new Triangle(new Point3D(-0.608762,-0.793353,
    zOff-0.250000
    ), new Point3D(-0.707107,-0.707107,
    zOff-0.250000
    ), new Point3D(-0.618719,-0.618718,
    zOff-0.216506
    ));
    Torus.projection[737] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[738] = new Triangle(new Point3D(-0.707107,-0.707107,
    zOff-0.250000
    ), new Point3D(-0.608762,-0.793353,
    zOff-0.250000
    ), new Point3D(-0.684857,-0.892522,
    zOff-0.216506
    ));
    Torus.projection[738] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[739] = new Triangle(new Point3D(-0.684857,-0.892522,
    zOff-0.216506
    ), new Point3D(-0.795495,-0.795495,
    zOff-0.216506
    ), new Point3D(-0.707107,-0.707107,
    zOff-0.250000
    ));
    Torus.projection[739] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[740] = new Triangle(new Point3D(-0.795495,-0.795495,
    zOff-0.216506
    ), new Point3D(-0.684857,-0.892522,
    zOff-0.216506
    ), new Point3D(-0.740563,-0.965119,
    zOff-0.125000
    ));
    Torus.projection[740] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[741] = new Triangle(new Point3D(-0.740563,-0.965119,
    zOff-0.125000
    ), new Point3D(-0.860200,-0.860200,
    zOff-0.125000
    ), new Point3D(-0.795495,-0.795495,
    zOff-0.216506
    ));
    Torus.projection[741] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[742] = new Triangle(new Point3D(-0.860200,-0.860200,
    zOff-0.125000
    ), new Point3D(-0.740563,-0.965119,
    zOff-0.125000
    ), new Point3D(-0.760952,-0.991691,
    zOff+0.000000
    ));
    Torus.projection[742] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[743] = new Triangle(new Point3D(-0.760952,-0.991691,
    zOff+0.000000
    ), new Point3D(-0.883884,-0.883883,
    zOff+0.000000
    ), new Point3D(-0.860200,-0.860200,
    zOff-0.125000
    ));
    Torus.projection[743] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[744] = new Triangle(new Point3D(-0.760952,-0.991691,
    zOff+0.000000
    ), new Point3D(-0.625000,-1.082532,
    zOff+0.000000
    ), new Point3D(-0.608253,-1.053526,
    zOff+0.125000
    ));
    Torus.projection[744] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[745] = new Triangle(new Point3D(-0.608253,-1.053526,
    zOff+0.125000
    ), new Point3D(-0.740563,-0.965119,
    zOff+0.125000
    ), new Point3D(-0.760952,-0.991691,
    zOff+0.000000
    ));
    Torus.projection[745] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[746] = new Triangle(new Point3D(-0.740563,-0.965119,
    zOff+0.125000
    ), new Point3D(-0.608253,-1.053526,
    zOff+0.125000
    ), new Point3D(-0.562500,-0.974279,
    zOff+0.216506
    ));
    Torus.projection[746] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[747] = new Triangle(new Point3D(-0.562500,-0.974279,
    zOff+0.216506
    ), new Point3D(-0.684857,-0.892522,
    zOff+0.216506
    ), new Point3D(-0.740563,-0.965119,
    zOff+0.125000
    ));
    Torus.projection[747] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[748] = new Triangle(new Point3D(-0.684857,-0.892522,
    zOff+0.216506
    ), new Point3D(-0.562500,-0.974279,
    zOff+0.216506
    ), new Point3D(-0.500000,-0.866026,
    zOff+0.250000
    ));
    Torus.projection[748] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[749] = new Triangle(new Point3D(-0.500000,-0.866026,
    zOff+0.250000
    ), new Point3D(-0.608762,-0.793353,
    zOff+0.250000
    ), new Point3D(-0.684857,-0.892522,
    zOff+0.216506
    ));
    Torus.projection[749] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[750] = new Triangle(new Point3D(-0.608762,-0.793353,
    zOff+0.250000
    ), new Point3D(-0.500000,-0.866026,
    zOff+0.250000
    ), new Point3D(-0.437500,-0.757772,
    zOff+0.216506
    ));
    Torus.projection[750] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[751] = new Triangle(new Point3D(-0.437500,-0.757772,
    zOff+0.216506
    ), new Point3D(-0.532667,-0.694184,
    zOff+0.216506
    ), new Point3D(-0.608762,-0.793353,
    zOff+0.250000
    ));
    Torus.projection[751] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[752] = new Triangle(new Point3D(-0.532667,-0.694184,
    zOff+0.216506
    ), new Point3D(-0.437500,-0.757772,
    zOff+0.216506
    ), new Point3D(-0.391747,-0.678525,
    zOff+0.125000
    ));
    Torus.projection[752] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[753] = new Triangle(new Point3D(-0.391747,-0.678525,
    zOff+0.125000
    ), new Point3D(-0.476961,-0.621587,
    zOff+0.125000
    ), new Point3D(-0.532667,-0.694184,
    zOff+0.216506
    ));
    Torus.projection[753] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[754] = new Triangle(new Point3D(-0.476961,-0.621587,
    zOff+0.125000
    ), new Point3D(-0.391747,-0.678525,
    zOff+0.125000
    ), new Point3D(-0.375000,-0.649519,
    zOff+0.000000
    ));
    Torus.projection[754] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[755] = new Triangle(new Point3D(-0.375000,-0.649519,
    zOff+0.000000
    ), new Point3D(-0.456571,-0.595015,
    zOff+0.000000
    ), new Point3D(-0.476961,-0.621587,
    zOff+0.125000
    ));
    Torus.projection[755] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[756] = new Triangle(new Point3D(-0.456571,-0.595015,
    zOff+0.000000
    ), new Point3D(-0.375000,-0.649519,
    zOff+0.000000
    ), new Point3D(-0.391747,-0.678525,
    zOff-0.125000
    ));
    Torus.projection[756] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[757] = new Triangle(new Point3D(-0.391747,-0.678525,
    zOff-0.125000
    ), new Point3D(-0.476961,-0.621587,
    zOff-0.125000
    ), new Point3D(-0.456571,-0.595015,
    zOff+0.000000
    ));
    Torus.projection[757] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[758] = new Triangle(new Point3D(-0.476961,-0.621587,
    zOff-0.125000
    ), new Point3D(-0.391747,-0.678525,
    zOff-0.125000
    ), new Point3D(-0.437500,-0.757772,
    zOff-0.216506
    ));
    Torus.projection[758] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[759] = new Triangle(new Point3D(-0.437500,-0.757772,
    zOff-0.216506
    ), new Point3D(-0.532667,-0.694184,
    zOff-0.216506
    ), new Point3D(-0.476961,-0.621587,
    zOff-0.125000
    ));
    Torus.projection[759] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[760] = new Triangle(new Point3D(-0.532667,-0.694184,
    zOff-0.216506
    ), new Point3D(-0.437500,-0.757772,
    zOff-0.216506
    ), new Point3D(-0.500000,-0.866026,
    zOff-0.250000
    ));
    Torus.projection[760] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[761] = new Triangle(new Point3D(-0.500000,-0.866026,
    zOff-0.250000
    ), new Point3D(-0.608762,-0.793353,
    zOff-0.250000
    ), new Point3D(-0.532667,-0.694184,
    zOff-0.216506
    ));
    Torus.projection[761] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[762] = new Triangle(new Point3D(-0.608762,-0.793353,
    zOff-0.250000
    ), new Point3D(-0.500000,-0.866026,
    zOff-0.250000
    ), new Point3D(-0.562500,-0.974279,
    zOff-0.216506
    ));
    Torus.projection[762] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[763] = new Triangle(new Point3D(-0.562500,-0.974279,
    zOff-0.216506
    ), new Point3D(-0.684857,-0.892522,
    zOff-0.216506
    ), new Point3D(-0.608762,-0.793353,
    zOff-0.250000
    ));
    Torus.projection[763] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[764] = new Triangle(new Point3D(-0.684857,-0.892522,
    zOff-0.216506
    ), new Point3D(-0.562500,-0.974279,
    zOff-0.216506
    ), new Point3D(-0.608253,-1.053526,
    zOff-0.125000
    ));
    Torus.projection[764] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[765] = new Triangle(new Point3D(-0.608253,-1.053526,
    zOff-0.125000
    ), new Point3D(-0.740563,-0.965119,
    zOff-0.125000
    ), new Point3D(-0.684857,-0.892522,
    zOff-0.216506
    ));
    Torus.projection[765] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[766] = new Triangle(new Point3D(-0.740563,-0.965119,
    zOff-0.125000
    ), new Point3D(-0.608253,-1.053526,
    zOff-0.125000
    ), new Point3D(-0.625000,-1.082532,
    zOff+0.000000
    ));
    Torus.projection[766] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[767] = new Triangle(new Point3D(-0.625000,-1.082532,
    zOff+0.000000
    ), new Point3D(-0.760952,-0.991691,
    zOff+0.000000
    ), new Point3D(-0.740563,-0.965119,
    zOff-0.125000
    ));
    Torus.projection[767] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[768] = new Triangle(new Point3D(-0.625000,-1.082532,
    zOff+0.000000
    ), new Point3D(-0.478354,-1.154849,
    zOff+0.000000
    ), new Point3D(-0.465537,-1.123905,
    zOff+0.125000
    ));
    Torus.projection[768] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[769] = new Triangle(new Point3D(-0.465537,-1.123905,
    zOff+0.125000
    ), new Point3D(-0.608253,-1.053526,
    zOff+0.125000
    ), new Point3D(-0.625000,-1.082532,
    zOff+0.000000
    ));
    Torus.projection[769] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[770] = new Triangle(new Point3D(-0.608253,-1.053526,
    zOff+0.125000
    ), new Point3D(-0.465537,-1.123905,
    zOff+0.125000
    ), new Point3D(-0.430519,-1.039364,
    zOff+0.216506
    ));
    Torus.projection[770] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[771] = new Triangle(new Point3D(-0.430519,-1.039364,
    zOff+0.216506
    ), new Point3D(-0.562500,-0.974279,
    zOff+0.216506
    ), new Point3D(-0.608253,-1.053526,
    zOff+0.125000
    ));
    Torus.projection[771] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[772] = new Triangle(new Point3D(-0.562500,-0.974279,
    zOff+0.216506
    ), new Point3D(-0.430519,-1.039364,
    zOff+0.216506
    ), new Point3D(-0.382684,-0.923880,
    zOff+0.250000
    ));
    Torus.projection[772] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[773] = new Triangle(new Point3D(-0.382684,-0.923880,
    zOff+0.250000
    ), new Point3D(-0.500000,-0.866026,
    zOff+0.250000
    ), new Point3D(-0.562500,-0.974279,
    zOff+0.216506
    ));
    Torus.projection[773] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[774] = new Triangle(new Point3D(-0.500000,-0.866026,
    zOff+0.250000
    ), new Point3D(-0.382684,-0.923880,
    zOff+0.250000
    ), new Point3D(-0.334848,-0.808395,
    zOff+0.216506
    ));
    Torus.projection[774] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[775] = new Triangle(new Point3D(-0.334848,-0.808395,
    zOff+0.216506
    ), new Point3D(-0.437500,-0.757772,
    zOff+0.216506
    ), new Point3D(-0.500000,-0.866026,
    zOff+0.250000
    ));
    Torus.projection[775] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[776] = new Triangle(new Point3D(-0.437500,-0.757772,
    zOff+0.216506
    ), new Point3D(-0.334848,-0.808395,
    zOff+0.216506
    ), new Point3D(-0.299830,-0.723854,
    zOff+0.125000
    ));
    Torus.projection[776] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[777] = new Triangle(new Point3D(-0.299830,-0.723854,
    zOff+0.125000
    ), new Point3D(-0.391747,-0.678525,
    zOff+0.125000
    ), new Point3D(-0.437500,-0.757772,
    zOff+0.216506
    ));
    Torus.projection[777] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[778] = new Triangle(new Point3D(-0.391747,-0.678525,
    zOff+0.125000
    ), new Point3D(-0.299830,-0.723854,
    zOff+0.125000
    ), new Point3D(-0.287013,-0.692910,
    zOff+0.000000
    ));
    Torus.projection[778] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[779] = new Triangle(new Point3D(-0.287013,-0.692910,
    zOff+0.000000
    ), new Point3D(-0.375000,-0.649519,
    zOff+0.000000
    ), new Point3D(-0.391747,-0.678525,
    zOff+0.125000
    ));
    Torus.projection[779] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[780] = new Triangle(new Point3D(-0.375000,-0.649519,
    zOff+0.000000
    ), new Point3D(-0.287013,-0.692910,
    zOff+0.000000
    ), new Point3D(-0.299830,-0.723854,
    zOff-0.125000
    ));
    Torus.projection[780] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[781] = new Triangle(new Point3D(-0.299830,-0.723854,
    zOff-0.125000
    ), new Point3D(-0.391747,-0.678525,
    zOff-0.125000
    ), new Point3D(-0.375000,-0.649519,
    zOff+0.000000
    ));
    Torus.projection[781] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[782] = new Triangle(new Point3D(-0.391747,-0.678525,
    zOff-0.125000
    ), new Point3D(-0.299830,-0.723854,
    zOff-0.125000
    ), new Point3D(-0.334848,-0.808395,
    zOff-0.216506
    ));
    Torus.projection[782] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[783] = new Triangle(new Point3D(-0.334848,-0.808395,
    zOff-0.216506
    ), new Point3D(-0.437500,-0.757772,
    zOff-0.216506
    ), new Point3D(-0.391747,-0.678525,
    zOff-0.125000
    ));
    Torus.projection[783] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[784] = new Triangle(new Point3D(-0.437500,-0.757772,
    zOff-0.216506
    ), new Point3D(-0.334848,-0.808395,
    zOff-0.216506
    ), new Point3D(-0.382684,-0.923880,
    zOff-0.250000
    ));
    Torus.projection[784] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[785] = new Triangle(new Point3D(-0.382684,-0.923880,
    zOff-0.250000
    ), new Point3D(-0.500000,-0.866026,
    zOff-0.250000
    ), new Point3D(-0.437500,-0.757772,
    zOff-0.216506
    ));
    Torus.projection[785] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[786] = new Triangle(new Point3D(-0.500000,-0.866026,
    zOff-0.250000
    ), new Point3D(-0.382684,-0.923880,
    zOff-0.250000
    ), new Point3D(-0.430519,-1.039364,
    zOff-0.216506
    ));
    Torus.projection[786] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[787] = new Triangle(new Point3D(-0.430519,-1.039364,
    zOff-0.216506
    ), new Point3D(-0.562500,-0.974279,
    zOff-0.216506
    ), new Point3D(-0.500000,-0.866026,
    zOff-0.250000
    ));
    Torus.projection[787] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[788] = new Triangle(new Point3D(-0.562500,-0.974279,
    zOff-0.216506
    ), new Point3D(-0.430519,-1.039364,
    zOff-0.216506
    ), new Point3D(-0.465537,-1.123905,
    zOff-0.125000
    ));
    Torus.projection[788] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[789] = new Triangle(new Point3D(-0.465537,-1.123905,
    zOff-0.125000
    ), new Point3D(-0.608253,-1.053526,
    zOff-0.125000
    ), new Point3D(-0.562500,-0.974279,
    zOff-0.216506
    ));
    Torus.projection[789] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[790] = new Triangle(new Point3D(-0.608253,-1.053526,
    zOff-0.125000
    ), new Point3D(-0.465537,-1.123905,
    zOff-0.125000
    ), new Point3D(-0.478354,-1.154849,
    zOff+0.000000
    ));
    Torus.projection[790] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[791] = new Triangle(new Point3D(-0.478354,-1.154849,
    zOff+0.000000
    ), new Point3D(-0.625000,-1.082532,
    zOff+0.000000
    ), new Point3D(-0.608253,-1.053526,
    zOff-0.125000
    ));
    Torus.projection[791] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[792] = new Triangle(new Point3D(-0.478354,-1.154849,
    zOff+0.000000
    ), new Point3D(-0.323524,-1.207407,
    zOff+0.000000
    ), new Point3D(-0.314855,-1.175055,
    zOff+0.125000
    ));
    Torus.projection[792] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[793] = new Triangle(new Point3D(-0.314855,-1.175055,
    zOff+0.125000
    ), new Point3D(-0.465537,-1.123905,
    zOff+0.125000
    ), new Point3D(-0.478354,-1.154849,
    zOff+0.000000
    ));
    Torus.projection[793] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[794] = new Triangle(new Point3D(-0.465537,-1.123905,
    zOff+0.125000
    ), new Point3D(-0.314855,-1.175055,
    zOff+0.125000
    ), new Point3D(-0.291172,-1.086666,
    zOff+0.216506
    ));
    Torus.projection[794] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[795] = new Triangle(new Point3D(-0.291172,-1.086666,
    zOff+0.216506
    ), new Point3D(-0.430519,-1.039364,
    zOff+0.216506
    ), new Point3D(-0.465537,-1.123905,
    zOff+0.125000
    ));
    Torus.projection[795] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[796] = new Triangle(new Point3D(-0.430519,-1.039364,
    zOff+0.216506
    ), new Point3D(-0.291172,-1.086666,
    zOff+0.216506
    ), new Point3D(-0.258819,-0.965926,
    zOff+0.250000
    ));
    Torus.projection[796] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[797] = new Triangle(new Point3D(-0.258819,-0.965926,
    zOff+0.250000
    ), new Point3D(-0.382684,-0.923880,
    zOff+0.250000
    ), new Point3D(-0.430519,-1.039364,
    zOff+0.216506
    ));
    Torus.projection[797] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[798] = new Triangle(new Point3D(-0.382684,-0.923880,
    zOff+0.250000
    ), new Point3D(-0.258819,-0.965926,
    zOff+0.250000
    ), new Point3D(-0.226467,-0.845185,
    zOff+0.216506
    ));
    Torus.projection[798] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[799] = new Triangle(new Point3D(-0.226467,-0.845185,
    zOff+0.216506
    ), new Point3D(-0.334848,-0.808395,
    zOff+0.216506
    ), new Point3D(-0.382684,-0.923880,
    zOff+0.250000
    ));
    Torus.projection[799] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[800] = new Triangle(new Point3D(-0.334848,-0.808395,
    zOff+0.216506
    ), new Point3D(-0.226467,-0.845185,
    zOff+0.216506
    ), new Point3D(-0.202783,-0.756797,
    zOff+0.125000
    ));
    Torus.projection[800] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[801] = new Triangle(new Point3D(-0.202783,-0.756797,
    zOff+0.125000
    ), new Point3D(-0.299830,-0.723854,
    zOff+0.125000
    ), new Point3D(-0.334848,-0.808395,
    zOff+0.216506
    ));
    Torus.projection[801] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[802] = new Triangle(new Point3D(-0.299830,-0.723854,
    zOff+0.125000
    ), new Point3D(-0.202783,-0.756797,
    zOff+0.125000
    ), new Point3D(-0.194115,-0.724444,
    zOff+0.000000
    ));
    Torus.projection[802] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[803] = new Triangle(new Point3D(-0.194115,-0.724444,
    zOff+0.000000
    ), new Point3D(-0.287013,-0.692910,
    zOff+0.000000
    ), new Point3D(-0.299830,-0.723854,
    zOff+0.125000
    ));
    Torus.projection[803] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[804] = new Triangle(new Point3D(-0.287013,-0.692910,
    zOff+0.000000
    ), new Point3D(-0.194115,-0.724444,
    zOff+0.000000
    ), new Point3D(-0.202783,-0.756797,
    zOff-0.125000
    ));
    Torus.projection[804] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[805] = new Triangle(new Point3D(-0.202783,-0.756797,
    zOff-0.125000
    ), new Point3D(-0.299830,-0.723854,
    zOff-0.125000
    ), new Point3D(-0.287013,-0.692910,
    zOff+0.000000
    ));
    Torus.projection[805] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[806] = new Triangle(new Point3D(-0.299830,-0.723854,
    zOff-0.125000
    ), new Point3D(-0.202783,-0.756797,
    zOff-0.125000
    ), new Point3D(-0.226467,-0.845185,
    zOff-0.216506
    ));
    Torus.projection[806] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[807] = new Triangle(new Point3D(-0.226467,-0.845185,
    zOff-0.216506
    ), new Point3D(-0.334848,-0.808395,
    zOff-0.216506
    ), new Point3D(-0.299830,-0.723854,
    zOff-0.125000
    ));
    Torus.projection[807] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[808] = new Triangle(new Point3D(-0.334848,-0.808395,
    zOff-0.216506
    ), new Point3D(-0.226467,-0.845185,
    zOff-0.216506
    ), new Point3D(-0.258819,-0.965926,
    zOff-0.250000
    ));
    Torus.projection[808] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[809] = new Triangle(new Point3D(-0.258819,-0.965926,
    zOff-0.250000
    ), new Point3D(-0.382684,-0.923880,
    zOff-0.250000
    ), new Point3D(-0.334848,-0.808395,
    zOff-0.216506
    ));
    Torus.projection[809] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[810] = new Triangle(new Point3D(-0.382684,-0.923880,
    zOff-0.250000
    ), new Point3D(-0.258819,-0.965926,
    zOff-0.250000
    ), new Point3D(-0.291172,-1.086666,
    zOff-0.216506
    ));
    Torus.projection[810] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[811] = new Triangle(new Point3D(-0.291172,-1.086666,
    zOff-0.216506
    ), new Point3D(-0.430519,-1.039364,
    zOff-0.216506
    ), new Point3D(-0.382684,-0.923880,
    zOff-0.250000
    ));
    Torus.projection[811] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[812] = new Triangle(new Point3D(-0.430519,-1.039364,
    zOff-0.216506
    ), new Point3D(-0.291172,-1.086666,
    zOff-0.216506
    ), new Point3D(-0.314855,-1.175055,
    zOff-0.125000
    ));
    Torus.projection[812] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[813] = new Triangle(new Point3D(-0.314855,-1.175055,
    zOff-0.125000
    ), new Point3D(-0.465537,-1.123905,
    zOff-0.125000
    ), new Point3D(-0.430519,-1.039364,
    zOff-0.216506
    ));
    Torus.projection[813] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[814] = new Triangle(new Point3D(-0.465537,-1.123905,
    zOff-0.125000
    ), new Point3D(-0.314855,-1.175055,
    zOff-0.125000
    ), new Point3D(-0.323524,-1.207407,
    zOff+0.000000
    ));
    Torus.projection[814] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[815] = new Triangle(new Point3D(-0.323524,-1.207407,
    zOff+0.000000
    ), new Point3D(-0.478354,-1.154849,
    zOff+0.000000
    ), new Point3D(-0.465537,-1.123905,
    zOff-0.125000
    ));
    Torus.projection[815] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[816] = new Triangle(new Point3D(-0.323524,-1.207407,
    zOff+0.000000
    ), new Point3D(-0.163158,-1.239306,
    zOff+0.000000
    ), new Point3D(-0.158787,-1.206099,
    zOff+0.125000
    ));
    Torus.projection[816] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[817] = new Triangle(new Point3D(-0.158787,-1.206099,
    zOff+0.125000
    ), new Point3D(-0.314855,-1.175055,
    zOff+0.125000
    ), new Point3D(-0.323524,-1.207407,
    zOff+0.000000
    ));
    Torus.projection[817] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[818] = new Triangle(new Point3D(-0.314855,-1.175055,
    zOff+0.125000
    ), new Point3D(-0.158787,-1.206099,
    zOff+0.125000
    ), new Point3D(-0.146843,-1.115375,
    zOff+0.216506
    ));
    Torus.projection[818] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[819] = new Triangle(new Point3D(-0.146843,-1.115375,
    zOff+0.216506
    ), new Point3D(-0.291172,-1.086666,
    zOff+0.216506
    ), new Point3D(-0.314855,-1.175055,
    zOff+0.125000
    ));
    Torus.projection[819] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[820] = new Triangle(new Point3D(-0.291172,-1.086666,
    zOff+0.216506
    ), new Point3D(-0.146843,-1.115375,
    zOff+0.216506
    ), new Point3D(-0.130527,-0.991445,
    zOff+0.250000
    ));
    Torus.projection[820] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[821] = new Triangle(new Point3D(-0.130527,-0.991445,
    zOff+0.250000
    ), new Point3D(-0.258819,-0.965926,
    zOff+0.250000
    ), new Point3D(-0.291172,-1.086666,
    zOff+0.216506
    ));
    Torus.projection[821] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[822] = new Triangle(new Point3D(-0.258819,-0.965926,
    zOff+0.250000
    ), new Point3D(-0.130527,-0.991445,
    zOff+0.250000
    ), new Point3D(-0.114211,-0.867514,
    zOff+0.216506
    ));
    Torus.projection[822] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[823] = new Triangle(new Point3D(-0.114211,-0.867514,
    zOff+0.216506
    ), new Point3D(-0.226467,-0.845185,
    zOff+0.216506
    ), new Point3D(-0.258819,-0.965926,
    zOff+0.250000
    ));
    Torus.projection[823] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[824] = new Triangle(new Point3D(-0.226467,-0.845185,
    zOff+0.216506
    ), new Point3D(-0.114211,-0.867514,
    zOff+0.216506
    ), new Point3D(-0.102267,-0.776791,
    zOff+0.125000
    ));
    Torus.projection[824] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[825] = new Triangle(new Point3D(-0.102267,-0.776791,
    zOff+0.125000
    ), new Point3D(-0.202783,-0.756797,
    zOff+0.125000
    ), new Point3D(-0.226467,-0.845185,
    zOff+0.216506
    ));
    Torus.projection[825] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[826] = new Triangle(new Point3D(-0.202783,-0.756797,
    zOff+0.125000
    ), new Point3D(-0.102267,-0.776791,
    zOff+0.125000
    ), new Point3D(-0.097895,-0.743584,
    zOff+0.000000
    ));
    Torus.projection[826] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[827] = new Triangle(new Point3D(-0.097895,-0.743584,
    zOff+0.000000
    ), new Point3D(-0.194115,-0.724444,
    zOff+0.000000
    ), new Point3D(-0.202783,-0.756797,
    zOff+0.125000
    ));
    Torus.projection[827] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[828] = new Triangle(new Point3D(-0.194115,-0.724444,
    zOff+0.000000
    ), new Point3D(-0.097895,-0.743584,
    zOff+0.000000
    ), new Point3D(-0.102267,-0.776791,
    zOff-0.125000
    ));
    Torus.projection[828] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[829] = new Triangle(new Point3D(-0.102267,-0.776791,
    zOff-0.125000
    ), new Point3D(-0.202783,-0.756797,
    zOff-0.125000
    ), new Point3D(-0.194115,-0.724444,
    zOff+0.000000
    ));
    Torus.projection[829] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[830] = new Triangle(new Point3D(-0.202783,-0.756797,
    zOff-0.125000
    ), new Point3D(-0.102267,-0.776791,
    zOff-0.125000
    ), new Point3D(-0.114211,-0.867514,
    zOff-0.216506
    ));
    Torus.projection[830] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[831] = new Triangle(new Point3D(-0.114211,-0.867514,
    zOff-0.216506
    ), new Point3D(-0.226467,-0.845185,
    zOff-0.216506
    ), new Point3D(-0.202783,-0.756797,
    zOff-0.125000
    ));
    Torus.projection[831] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[832] = new Triangle(new Point3D(-0.226467,-0.845185,
    zOff-0.216506
    ), new Point3D(-0.114211,-0.867514,
    zOff-0.216506
    ), new Point3D(-0.130527,-0.991445,
    zOff-0.250000
    ));
    Torus.projection[832] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[833] = new Triangle(new Point3D(-0.130527,-0.991445,
    zOff-0.250000
    ), new Point3D(-0.258819,-0.965926,
    zOff-0.250000
    ), new Point3D(-0.226467,-0.845185,
    zOff-0.216506
    ));
    Torus.projection[833] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[834] = new Triangle(new Point3D(-0.258819,-0.965926,
    zOff-0.250000
    ), new Point3D(-0.130527,-0.991445,
    zOff-0.250000
    ), new Point3D(-0.146843,-1.115375,
    zOff-0.216506
    ));
    Torus.projection[834] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[835] = new Triangle(new Point3D(-0.146843,-1.115375,
    zOff-0.216506
    ), new Point3D(-0.291172,-1.086666,
    zOff-0.216506
    ), new Point3D(-0.258819,-0.965926,
    zOff-0.250000
    ));
    Torus.projection[835] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[836] = new Triangle(new Point3D(-0.291172,-1.086666,
    zOff-0.216506
    ), new Point3D(-0.146843,-1.115375,
    zOff-0.216506
    ), new Point3D(-0.158787,-1.206099,
    zOff-0.125000
    ));
    Torus.projection[836] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[837] = new Triangle(new Point3D(-0.158787,-1.206099,
    zOff-0.125000
    ), new Point3D(-0.314855,-1.175055,
    zOff-0.125000
    ), new Point3D(-0.291172,-1.086666,
    zOff-0.216506
    ));
    Torus.projection[837] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[838] = new Triangle(new Point3D(-0.314855,-1.175055,
    zOff-0.125000
    ), new Point3D(-0.158787,-1.206099,
    zOff-0.125000
    ), new Point3D(-0.163158,-1.239306,
    zOff+0.000000
    ));
    Torus.projection[838] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[839] = new Triangle(new Point3D(-0.163158,-1.239306,
    zOff+0.000000
    ), new Point3D(-0.323524,-1.207407,
    zOff+0.000000
    ), new Point3D(-0.314855,-1.175055,
    zOff-0.125000
    ));
    Torus.projection[839] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[840] = new Triangle(new Point3D(-0.163158,-1.239306,
    zOff+0.000000
    ), new Point3D(0.000000,-1.250000,
    zOff+0.000000
    ), new Point3D(0.000000,-1.216506,
    zOff+0.125000
    ));
    Torus.projection[840] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[841] = new Triangle(new Point3D(0.000000,-1.216506,
    zOff+0.125000
    ), new Point3D(-0.158787,-1.206099,
    zOff+0.125000
    ), new Point3D(-0.163158,-1.239306,
    zOff+0.000000
    ));
    Torus.projection[841] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[842] = new Triangle(new Point3D(-0.158787,-1.206099,
    zOff+0.125000
    ), new Point3D(0.000000,-1.216506,
    zOff+0.125000
    ), new Point3D(0.000000,-1.125000,
    zOff+0.216506
    ));
    Torus.projection[842] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[843] = new Triangle(new Point3D(0.000000,-1.125000,
    zOff+0.216506
    ), new Point3D(-0.146843,-1.115375,
    zOff+0.216506
    ), new Point3D(-0.158787,-1.206099,
    zOff+0.125000
    ));
    Torus.projection[843] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[844] = new Triangle(new Point3D(-0.146843,-1.115375,
    zOff+0.216506
    ), new Point3D(0.000000,-1.125000,
    zOff+0.216506
    ), new Point3D(0.000000,-1.000000,
    zOff+0.250000
    ));
    Torus.projection[844] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[845] = new Triangle(new Point3D(0.000000,-1.000000,
    zOff+0.250000
    ), new Point3D(-0.130527,-0.991445,
    zOff+0.250000
    ), new Point3D(-0.146843,-1.115375,
    zOff+0.216506
    ));
    Torus.projection[845] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[846] = new Triangle(new Point3D(-0.130527,-0.991445,
    zOff+0.250000
    ), new Point3D(0.000000,-1.000000,
    zOff+0.250000
    ), new Point3D(0.000000,-0.875000,
    zOff+0.216506
    ));
    Torus.projection[846] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[847] = new Triangle(new Point3D(0.000000,-0.875000,
    zOff+0.216506
    ), new Point3D(-0.114211,-0.867514,
    zOff+0.216506
    ), new Point3D(-0.130527,-0.991445,
    zOff+0.250000
    ));
    Torus.projection[847] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[848] = new Triangle(new Point3D(-0.114211,-0.867514,
    zOff+0.216506
    ), new Point3D(0.000000,-0.875000,
    zOff+0.216506
    ), new Point3D(0.000000,-0.783494,
    zOff+0.125000
    ));
    Torus.projection[848] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[849] = new Triangle(new Point3D(0.000000,-0.783494,
    zOff+0.125000
    ), new Point3D(-0.102267,-0.776791,
    zOff+0.125000
    ), new Point3D(-0.114211,-0.867514,
    zOff+0.216506
    ));
    Torus.projection[849] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[850] = new Triangle(new Point3D(-0.102267,-0.776791,
    zOff+0.125000
    ), new Point3D(0.000000,-0.783494,
    zOff+0.125000
    ), new Point3D(0.000000,-0.750000,
    zOff+0.000000
    ));
    Torus.projection[850] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[851] = new Triangle(new Point3D(0.000000,-0.750000,
    zOff+0.000000
    ), new Point3D(-0.097895,-0.743584,
    zOff+0.000000
    ), new Point3D(-0.102267,-0.776791,
    zOff+0.125000
    ));
    Torus.projection[851] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[852] = new Triangle(new Point3D(-0.097895,-0.743584,
    zOff+0.000000
    ), new Point3D(0.000000,-0.750000,
    zOff+0.000000
    ), new Point3D(0.000000,-0.783494,
    zOff-0.125000
    ));
    Torus.projection[852] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[853] = new Triangle(new Point3D(0.000000,-0.783494,
    zOff-0.125000
    ), new Point3D(-0.102267,-0.776791,
    zOff-0.125000
    ), new Point3D(-0.097895,-0.743584,
    zOff+0.000000
    ));
    Torus.projection[853] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[854] = new Triangle(new Point3D(-0.102267,-0.776791,
    zOff-0.125000
    ), new Point3D(0.000000,-0.783494,
    zOff-0.125000
    ), new Point3D(0.000000,-0.875000,
    zOff-0.216506
    ));
    Torus.projection[854] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[855] = new Triangle(new Point3D(0.000000,-0.875000,
    zOff-0.216506
    ), new Point3D(-0.114211,-0.867514,
    zOff-0.216506
    ), new Point3D(-0.102267,-0.776791,
    zOff-0.125000
    ));
    Torus.projection[855] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[856] = new Triangle(new Point3D(-0.114211,-0.867514,
    zOff-0.216506
    ), new Point3D(0.000000,-0.875000,
    zOff-0.216506
    ), new Point3D(0.000000,-1.000000,
    zOff-0.250000
    ));
    Torus.projection[856] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[857] = new Triangle(new Point3D(0.000000,-1.000000,
    zOff-0.250000
    ), new Point3D(-0.130527,-0.991445,
    zOff-0.250000
    ), new Point3D(-0.114211,-0.867514,
    zOff-0.216506
    ));
    Torus.projection[857] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[858] = new Triangle(new Point3D(-0.130527,-0.991445,
    zOff-0.250000
    ), new Point3D(0.000000,-1.000000,
    zOff-0.250000
    ), new Point3D(0.000000,-1.125000,
    zOff-0.216506
    ));
    Torus.projection[858] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[859] = new Triangle(new Point3D(0.000000,-1.125000,
    zOff-0.216506
    ), new Point3D(-0.146843,-1.115375,
    zOff-0.216506
    ), new Point3D(-0.130527,-0.991445,
    zOff-0.250000
    ));
    Torus.projection[859] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[860] = new Triangle(new Point3D(-0.146843,-1.115375,
    zOff-0.216506
    ), new Point3D(0.000000,-1.125000,
    zOff-0.216506
    ), new Point3D(0.000000,-1.216506,
    zOff-0.125000
    ));
    Torus.projection[860] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[861] = new Triangle(new Point3D(0.000000,-1.216506,
    zOff-0.125000
    ), new Point3D(-0.158787,-1.206099,
    zOff-0.125000
    ), new Point3D(-0.146843,-1.115375,
    zOff-0.216506
    ));
    Torus.projection[861] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[862] = new Triangle(new Point3D(-0.158787,-1.206099,
    zOff-0.125000
    ), new Point3D(0.000000,-1.216506,
    zOff-0.125000
    ), new Point3D(0.000000,-1.250000,
    zOff+0.000000
    ));
    Torus.projection[862] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[863] = new Triangle(new Point3D(0.000000,-1.250000,
    zOff+0.000000
    ), new Point3D(-0.163158,-1.239306,
    zOff+0.000000
    ), new Point3D(-0.158787,-1.206099,
    zOff-0.125000
    ));
    Torus.projection[863] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[864] = new Triangle(new Point3D(0.000000,-1.250000,
    zOff+0.000000
    ), new Point3D(0.163158,-1.239306,
    zOff+0.000000
    ), new Point3D(0.158786,-1.206099,
    zOff+0.125000
    ));
    Torus.projection[864] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[865] = new Triangle(new Point3D(0.158786,-1.206099,
    zOff+0.125000
    ), new Point3D(0.000000,-1.216506,
    zOff+0.125000
    ), new Point3D(0.000000,-1.250000,
    zOff+0.000000
    ));
    Torus.projection[865] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[866] = new Triangle(new Point3D(0.000000,-1.216506,
    zOff+0.125000
    ), new Point3D(0.158786,-1.206099,
    zOff+0.125000
    ), new Point3D(0.146842,-1.115376,
    zOff+0.216506
    ));
    Torus.projection[866] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[867] = new Triangle(new Point3D(0.146842,-1.115376,
    zOff+0.216506
    ), new Point3D(0.000000,-1.125000,
    zOff+0.216506
    ), new Point3D(0.000000,-1.216506,
    zOff+0.125000
    ));
    Torus.projection[867] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[868] = new Triangle(new Point3D(0.000000,-1.125000,
    zOff+0.216506
    ), new Point3D(0.146842,-1.115376,
    zOff+0.216506
    ), new Point3D(0.130526,-0.991445,
    zOff+0.250000
    ));
    Torus.projection[868] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[869] = new Triangle(new Point3D(0.130526,-0.991445,
    zOff+0.250000
    ), new Point3D(0.000000,-1.000000,
    zOff+0.250000
    ), new Point3D(0.000000,-1.125000,
    zOff+0.216506
    ));
    Torus.projection[869] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[870] = new Triangle(new Point3D(0.000000,-1.000000,
    zOff+0.250000
    ), new Point3D(0.130526,-0.991445,
    zOff+0.250000
    ), new Point3D(0.114210,-0.867514,
    zOff+0.216506
    ));
    Torus.projection[870] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[871] = new Triangle(new Point3D(0.114210,-0.867514,
    zOff+0.216506
    ), new Point3D(0.000000,-0.875000,
    zOff+0.216506
    ), new Point3D(0.000000,-1.000000,
    zOff+0.250000
    ));
    Torus.projection[871] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[872] = new Triangle(new Point3D(0.000000,-0.875000,
    zOff+0.216506
    ), new Point3D(0.114210,-0.867514,
    zOff+0.216506
    ), new Point3D(0.102266,-0.776791,
    zOff+0.125000
    ));
    Torus.projection[872] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[873] = new Triangle(new Point3D(0.102266,-0.776791,
    zOff+0.125000
    ), new Point3D(0.000000,-0.783494,
    zOff+0.125000
    ), new Point3D(0.000000,-0.875000,
    zOff+0.216506
    ));
    Torus.projection[873] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[874] = new Triangle(new Point3D(0.000000,-0.783494,
    zOff+0.125000
    ), new Point3D(0.102266,-0.776791,
    zOff+0.125000
    ), new Point3D(0.097895,-0.743584,
    zOff+0.000000
    ));
    Torus.projection[874] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[875] = new Triangle(new Point3D(0.097895,-0.743584,
    zOff+0.000000
    ), new Point3D(0.000000,-0.750000,
    zOff+0.000000
    ), new Point3D(0.000000,-0.783494,
    zOff+0.125000
    ));
    Torus.projection[875] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[876] = new Triangle(new Point3D(0.000000,-0.750000,
    zOff+0.000000
    ), new Point3D(0.097895,-0.743584,
    zOff+0.000000
    ), new Point3D(0.102266,-0.776791,
    zOff-0.125000
    ));
    Torus.projection[876] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[877] = new Triangle(new Point3D(0.102266,-0.776791,
    zOff-0.125000
    ), new Point3D(0.000000,-0.783494,
    zOff-0.125000
    ), new Point3D(0.000000,-0.750000,
    zOff+0.000000
    ));
    Torus.projection[877] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[878] = new Triangle(new Point3D(0.000000,-0.783494,
    zOff-0.125000
    ), new Point3D(0.102266,-0.776791,
    zOff-0.125000
    ), new Point3D(0.114210,-0.867514,
    zOff-0.216506
    ));
    Torus.projection[878] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[879] = new Triangle(new Point3D(0.114210,-0.867514,
    zOff-0.216506
    ), new Point3D(0.000000,-0.875000,
    zOff-0.216506
    ), new Point3D(0.000000,-0.783494,
    zOff-0.125000
    ));
    Torus.projection[879] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[880] = new Triangle(new Point3D(0.000000,-0.875000,
    zOff-0.216506
    ), new Point3D(0.114210,-0.867514,
    zOff-0.216506
    ), new Point3D(0.130526,-0.991445,
    zOff-0.250000
    ));
    Torus.projection[880] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[881] = new Triangle(new Point3D(0.130526,-0.991445,
    zOff-0.250000
    ), new Point3D(0.000000,-1.000000,
    zOff-0.250000
    ), new Point3D(0.000000,-0.875000,
    zOff-0.216506
    ));
    Torus.projection[881] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[882] = new Triangle(new Point3D(0.000000,-1.000000,
    zOff-0.250000
    ), new Point3D(0.130526,-0.991445,
    zOff-0.250000
    ), new Point3D(0.146842,-1.115376,
    zOff-0.216506
    ));
    Torus.projection[882] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[883] = new Triangle(new Point3D(0.146842,-1.115376,
    zOff-0.216506
    ), new Point3D(0.000000,-1.125000,
    zOff-0.216506
    ), new Point3D(0.000000,-1.000000,
    zOff-0.250000
    ));
    Torus.projection[883] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[884] = new Triangle(new Point3D(0.000000,-1.125000,
    zOff-0.216506
    ), new Point3D(0.146842,-1.115376,
    zOff-0.216506
    ), new Point3D(0.158786,-1.206099,
    zOff-0.125000
    ));
    Torus.projection[884] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[885] = new Triangle(new Point3D(0.158786,-1.206099,
    zOff-0.125000
    ), new Point3D(0.000000,-1.216506,
    zOff-0.125000
    ), new Point3D(0.000000,-1.125000,
    zOff-0.216506
    ));
    Torus.projection[885] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[886] = new Triangle(new Point3D(0.000000,-1.216506,
    zOff-0.125000
    ), new Point3D(0.158786,-1.206099,
    zOff-0.125000
    ), new Point3D(0.163158,-1.239306,
    zOff+0.000000
    ));
    Torus.projection[886] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[887] = new Triangle(new Point3D(0.163158,-1.239306,
    zOff+0.000000
    ), new Point3D(0.000000,-1.250000,
    zOff+0.000000
    ), new Point3D(0.000000,-1.216506,
    zOff-0.125000
    ));
    Torus.projection[887] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[888] = new Triangle(new Point3D(0.163158,-1.239306,
    zOff+0.000000
    ), new Point3D(0.323523,-1.207407,
    zOff+0.000000
    ), new Point3D(0.314854,-1.175055,
    zOff+0.125000
    ));
    Torus.projection[888] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[889] = new Triangle(new Point3D(0.314854,-1.175055,
    zOff+0.125000
    ), new Point3D(0.158786,-1.206099,
    zOff+0.125000
    ), new Point3D(0.163158,-1.239306,
    zOff+0.000000
    ));
    Torus.projection[889] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[890] = new Triangle(new Point3D(0.158786,-1.206099,
    zOff+0.125000
    ), new Point3D(0.314854,-1.175055,
    zOff+0.125000
    ), new Point3D(0.291171,-1.086667,
    zOff+0.216506
    ));
    Torus.projection[890] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[891] = new Triangle(new Point3D(0.291171,-1.086667,
    zOff+0.216506
    ), new Point3D(0.146842,-1.115376,
    zOff+0.216506
    ), new Point3D(0.158786,-1.206099,
    zOff+0.125000
    ));
    Torus.projection[891] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[892] = new Triangle(new Point3D(0.146842,-1.115376,
    zOff+0.216506
    ), new Point3D(0.291171,-1.086667,
    zOff+0.216506
    ), new Point3D(0.258819,-0.965926,
    zOff+0.250000
    ));
    Torus.projection[892] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[893] = new Triangle(new Point3D(0.258819,-0.965926,
    zOff+0.250000
    ), new Point3D(0.130526,-0.991445,
    zOff+0.250000
    ), new Point3D(0.146842,-1.115376,
    zOff+0.216506
    ));
    Torus.projection[893] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[894] = new Triangle(new Point3D(0.130526,-0.991445,
    zOff+0.250000
    ), new Point3D(0.258819,-0.965926,
    zOff+0.250000
    ), new Point3D(0.226466,-0.845185,
    zOff+0.216506
    ));
    Torus.projection[894] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[895] = new Triangle(new Point3D(0.226466,-0.845185,
    zOff+0.216506
    ), new Point3D(0.114210,-0.867514,
    zOff+0.216506
    ), new Point3D(0.130526,-0.991445,
    zOff+0.250000
    ));
    Torus.projection[895] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[896] = new Triangle(new Point3D(0.114210,-0.867514,
    zOff+0.216506
    ), new Point3D(0.226466,-0.845185,
    zOff+0.216506
    ), new Point3D(0.202783,-0.756797,
    zOff+0.125000
    ));
    Torus.projection[896] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[897] = new Triangle(new Point3D(0.202783,-0.756797,
    zOff+0.125000
    ), new Point3D(0.102266,-0.776791,
    zOff+0.125000
    ), new Point3D(0.114210,-0.867514,
    zOff+0.216506
    ));
    Torus.projection[897] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[898] = new Triangle(new Point3D(0.102266,-0.776791,
    zOff+0.125000
    ), new Point3D(0.202783,-0.756797,
    zOff+0.125000
    ), new Point3D(0.194114,-0.724444,
    zOff+0.000000
    ));
    Torus.projection[898] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[899] = new Triangle(new Point3D(0.194114,-0.724444,
    zOff+0.000000
    ), new Point3D(0.097895,-0.743584,
    zOff+0.000000
    ), new Point3D(0.102266,-0.776791,
    zOff+0.125000
    ));
    Torus.projection[899] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[900] = new Triangle(new Point3D(0.097895,-0.743584,
    zOff+0.000000
    ), new Point3D(0.194114,-0.724444,
    zOff+0.000000
    ), new Point3D(0.202783,-0.756797,
    zOff-0.125000
    ));
    Torus.projection[900] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[901] = new Triangle(new Point3D(0.202783,-0.756797,
    zOff-0.125000
    ), new Point3D(0.102266,-0.776791,
    zOff-0.125000
    ), new Point3D(0.097895,-0.743584,
    zOff+0.000000
    ));
    Torus.projection[901] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[902] = new Triangle(new Point3D(0.102266,-0.776791,
    zOff-0.125000
    ), new Point3D(0.202783,-0.756797,
    zOff-0.125000
    ), new Point3D(0.226466,-0.845185,
    zOff-0.216506
    ));
    Torus.projection[902] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[903] = new Triangle(new Point3D(0.226466,-0.845185,
    zOff-0.216506
    ), new Point3D(0.114210,-0.867514,
    zOff-0.216506
    ), new Point3D(0.102266,-0.776791,
    zOff-0.125000
    ));
    Torus.projection[903] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[904] = new Triangle(new Point3D(0.114210,-0.867514,
    zOff-0.216506
    ), new Point3D(0.226466,-0.845185,
    zOff-0.216506
    ), new Point3D(0.258819,-0.965926,
    zOff-0.250000
    ));
    Torus.projection[904] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[905] = new Triangle(new Point3D(0.258819,-0.965926,
    zOff-0.250000
    ), new Point3D(0.130526,-0.991445,
    zOff-0.250000
    ), new Point3D(0.114210,-0.867514,
    zOff-0.216506
    ));
    Torus.projection[905] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[906] = new Triangle(new Point3D(0.130526,-0.991445,
    zOff-0.250000
    ), new Point3D(0.258819,-0.965926,
    zOff-0.250000
    ), new Point3D(0.291171,-1.086667,
    zOff-0.216506
    ));
    Torus.projection[906] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[907] = new Triangle(new Point3D(0.291171,-1.086667,
    zOff-0.216506
    ), new Point3D(0.146842,-1.115376,
    zOff-0.216506
    ), new Point3D(0.130526,-0.991445,
    zOff-0.250000
    ));
    Torus.projection[907] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[908] = new Triangle(new Point3D(0.146842,-1.115376,
    zOff-0.216506
    ), new Point3D(0.291171,-1.086667,
    zOff-0.216506
    ), new Point3D(0.314854,-1.175055,
    zOff-0.125000
    ));
    Torus.projection[908] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[909] = new Triangle(new Point3D(0.314854,-1.175055,
    zOff-0.125000
    ), new Point3D(0.158786,-1.206099,
    zOff-0.125000
    ), new Point3D(0.146842,-1.115376,
    zOff-0.216506
    ));
    Torus.projection[909] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[910] = new Triangle(new Point3D(0.158786,-1.206099,
    zOff-0.125000
    ), new Point3D(0.314854,-1.175055,
    zOff-0.125000
    ), new Point3D(0.323523,-1.207407,
    zOff+0.000000
    ));
    Torus.projection[910] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[911] = new Triangle(new Point3D(0.323523,-1.207407,
    zOff+0.000000
    ), new Point3D(0.163158,-1.239306,
    zOff+0.000000
    ), new Point3D(0.158786,-1.206099,
    zOff-0.125000
    ));
    Torus.projection[911] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[912] = new Triangle(new Point3D(0.323523,-1.207407,
    zOff+0.000000
    ), new Point3D(0.478355,-1.154849,
    zOff+0.000000
    ), new Point3D(0.465537,-1.123905,
    zOff+0.125000
    ));
    Torus.projection[912] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[913] = new Triangle(new Point3D(0.465537,-1.123905,
    zOff+0.125000
    ), new Point3D(0.314854,-1.175055,
    zOff+0.125000
    ), new Point3D(0.323523,-1.207407,
    zOff+0.000000
    ));
    Torus.projection[913] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[914] = new Triangle(new Point3D(0.314854,-1.175055,
    zOff+0.125000
    ), new Point3D(0.465537,-1.123905,
    zOff+0.125000
    ), new Point3D(0.430519,-1.039364,
    zOff+0.216506
    ));
    Torus.projection[914] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[915] = new Triangle(new Point3D(0.430519,-1.039364,
    zOff+0.216506
    ), new Point3D(0.291171,-1.086667,
    zOff+0.216506
    ), new Point3D(0.314854,-1.175055,
    zOff+0.125000
    ));
    Torus.projection[915] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[916] = new Triangle(new Point3D(0.291171,-1.086667,
    zOff+0.216506
    ), new Point3D(0.430519,-1.039364,
    zOff+0.216506
    ), new Point3D(0.382684,-0.923879,
    zOff+0.250000
    ));
    Torus.projection[916] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[917] = new Triangle(new Point3D(0.382684,-0.923879,
    zOff+0.250000
    ), new Point3D(0.258819,-0.965926,
    zOff+0.250000
    ), new Point3D(0.291171,-1.086667,
    zOff+0.216506
    ));
    Torus.projection[917] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[918] = new Triangle(new Point3D(0.258819,-0.965926,
    zOff+0.250000
    ), new Point3D(0.382684,-0.923879,
    zOff+0.250000
    ), new Point3D(0.334848,-0.808394,
    zOff+0.216506
    ));
    Torus.projection[918] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[919] = new Triangle(new Point3D(0.334848,-0.808394,
    zOff+0.216506
    ), new Point3D(0.226466,-0.845185,
    zOff+0.216506
    ), new Point3D(0.258819,-0.965926,
    zOff+0.250000
    ));
    Torus.projection[919] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[920] = new Triangle(new Point3D(0.226466,-0.845185,
    zOff+0.216506
    ), new Point3D(0.334848,-0.808394,
    zOff+0.216506
    ), new Point3D(0.299830,-0.723854,
    zOff+0.125000
    ));
    Torus.projection[920] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[921] = new Triangle(new Point3D(0.299830,-0.723854,
    zOff+0.125000
    ), new Point3D(0.202783,-0.756797,
    zOff+0.125000
    ), new Point3D(0.226466,-0.845185,
    zOff+0.216506
    ));
    Torus.projection[921] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[922] = new Triangle(new Point3D(0.202783,-0.756797,
    zOff+0.125000
    ), new Point3D(0.299830,-0.723854,
    zOff+0.125000
    ), new Point3D(0.287013,-0.692910,
    zOff+0.000000
    ));
    Torus.projection[922] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[923] = new Triangle(new Point3D(0.287013,-0.692910,
    zOff+0.000000
    ), new Point3D(0.194114,-0.724444,
    zOff+0.000000
    ), new Point3D(0.202783,-0.756797,
    zOff+0.125000
    ));
    Torus.projection[923] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[924] = new Triangle(new Point3D(0.194114,-0.724444,
    zOff+0.000000
    ), new Point3D(0.287013,-0.692910,
    zOff+0.000000
    ), new Point3D(0.299830,-0.723854,
    zOff-0.125000
    ));
    Torus.projection[924] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[925] = new Triangle(new Point3D(0.299830,-0.723854,
    zOff-0.125000
    ), new Point3D(0.202783,-0.756797,
    zOff-0.125000
    ), new Point3D(0.194114,-0.724444,
    zOff+0.000000
    ));
    Torus.projection[925] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[926] = new Triangle(new Point3D(0.202783,-0.756797,
    zOff-0.125000
    ), new Point3D(0.299830,-0.723854,
    zOff-0.125000
    ), new Point3D(0.334848,-0.808394,
    zOff-0.216506
    ));
    Torus.projection[926] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[927] = new Triangle(new Point3D(0.334848,-0.808394,
    zOff-0.216506
    ), new Point3D(0.226466,-0.845185,
    zOff-0.216506
    ), new Point3D(0.202783,-0.756797,
    zOff-0.125000
    ));
    Torus.projection[927] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[928] = new Triangle(new Point3D(0.226466,-0.845185,
    zOff-0.216506
    ), new Point3D(0.334848,-0.808394,
    zOff-0.216506
    ), new Point3D(0.382684,-0.923879,
    zOff-0.250000
    ));
    Torus.projection[928] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[929] = new Triangle(new Point3D(0.382684,-0.923879,
    zOff-0.250000
    ), new Point3D(0.258819,-0.965926,
    zOff-0.250000
    ), new Point3D(0.226466,-0.845185,
    zOff-0.216506
    ));
    Torus.projection[929] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[930] = new Triangle(new Point3D(0.258819,-0.965926,
    zOff-0.250000
    ), new Point3D(0.382684,-0.923879,
    zOff-0.250000
    ), new Point3D(0.430519,-1.039364,
    zOff-0.216506
    ));
    Torus.projection[930] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[931] = new Triangle(new Point3D(0.430519,-1.039364,
    zOff-0.216506
    ), new Point3D(0.291171,-1.086667,
    zOff-0.216506
    ), new Point3D(0.258819,-0.965926,
    zOff-0.250000
    ));
    Torus.projection[931] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[932] = new Triangle(new Point3D(0.291171,-1.086667,
    zOff-0.216506
    ), new Point3D(0.430519,-1.039364,
    zOff-0.216506
    ), new Point3D(0.465537,-1.123905,
    zOff-0.125000
    ));
    Torus.projection[932] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[933] = new Triangle(new Point3D(0.465537,-1.123905,
    zOff-0.125000
    ), new Point3D(0.314854,-1.175055,
    zOff-0.125000
    ), new Point3D(0.291171,-1.086667,
    zOff-0.216506
    ));
    Torus.projection[933] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[934] = new Triangle(new Point3D(0.314854,-1.175055,
    zOff-0.125000
    ), new Point3D(0.465537,-1.123905,
    zOff-0.125000
    ), new Point3D(0.478355,-1.154849,
    zOff+0.000000
    ));
    Torus.projection[934] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[935] = new Triangle(new Point3D(0.478355,-1.154849,
    zOff+0.000000
    ), new Point3D(0.323523,-1.207407,
    zOff+0.000000
    ), new Point3D(0.314854,-1.175055,
    zOff-0.125000
    ));
    Torus.projection[935] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[936] = new Triangle(new Point3D(0.478355,-1.154849,
    zOff+0.000000
    ), new Point3D(0.625000,-1.082532,
    zOff+0.000000
    ), new Point3D(0.608253,-1.053525,
    zOff+0.125000
    ));
    Torus.projection[936] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[937] = new Triangle(new Point3D(0.608253,-1.053525,
    zOff+0.125000
    ), new Point3D(0.465537,-1.123905,
    zOff+0.125000
    ), new Point3D(0.478355,-1.154849,
    zOff+0.000000
    ));
    Torus.projection[937] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[938] = new Triangle(new Point3D(0.465537,-1.123905,
    zOff+0.125000
    ), new Point3D(0.608253,-1.053525,
    zOff+0.125000
    ), new Point3D(0.562500,-0.974279,
    zOff+0.216506
    ));
    Torus.projection[938] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[939] = new Triangle(new Point3D(0.562500,-0.974279,
    zOff+0.216506
    ), new Point3D(0.430519,-1.039364,
    zOff+0.216506
    ), new Point3D(0.465537,-1.123905,
    zOff+0.125000
    ));
    Torus.projection[939] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[940] = new Triangle(new Point3D(0.430519,-1.039364,
    zOff+0.216506
    ), new Point3D(0.562500,-0.974279,
    zOff+0.216506
    ), new Point3D(0.500000,-0.866025,
    zOff+0.250000
    ));
    Torus.projection[940] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[941] = new Triangle(new Point3D(0.500000,-0.866025,
    zOff+0.250000
    ), new Point3D(0.382684,-0.923879,
    zOff+0.250000
    ), new Point3D(0.430519,-1.039364,
    zOff+0.216506
    ));
    Torus.projection[941] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[942] = new Triangle(new Point3D(0.382684,-0.923879,
    zOff+0.250000
    ), new Point3D(0.500000,-0.866025,
    zOff+0.250000
    ), new Point3D(0.437500,-0.757772,
    zOff+0.216506
    ));
    Torus.projection[942] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[943] = new Triangle(new Point3D(0.437500,-0.757772,
    zOff+0.216506
    ), new Point3D(0.334848,-0.808394,
    zOff+0.216506
    ), new Point3D(0.382684,-0.923879,
    zOff+0.250000
    ));
    Torus.projection[943] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[944] = new Triangle(new Point3D(0.334848,-0.808394,
    zOff+0.216506
    ), new Point3D(0.437500,-0.757772,
    zOff+0.216506
    ), new Point3D(0.391747,-0.678525,
    zOff+0.125000
    ));
    Torus.projection[944] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[945] = new Triangle(new Point3D(0.391747,-0.678525,
    zOff+0.125000
    ), new Point3D(0.299830,-0.723854,
    zOff+0.125000
    ), new Point3D(0.334848,-0.808394,
    zOff+0.216506
    ));
    Torus.projection[945] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[946] = new Triangle(new Point3D(0.299830,-0.723854,
    zOff+0.125000
    ), new Point3D(0.391747,-0.678525,
    zOff+0.125000
    ), new Point3D(0.375000,-0.649519,
    zOff+0.000000
    ));
    Torus.projection[946] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[947] = new Triangle(new Point3D(0.375000,-0.649519,
    zOff+0.000000
    ), new Point3D(0.287013,-0.692910,
    zOff+0.000000
    ), new Point3D(0.299830,-0.723854,
    zOff+0.125000
    ));
    Torus.projection[947] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[948] = new Triangle(new Point3D(0.287013,-0.692910,
    zOff+0.000000
    ), new Point3D(0.375000,-0.649519,
    zOff+0.000000
    ), new Point3D(0.391747,-0.678525,
    zOff-0.125000
    ));
    Torus.projection[948] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[949] = new Triangle(new Point3D(0.391747,-0.678525,
    zOff-0.125000
    ), new Point3D(0.299830,-0.723854,
    zOff-0.125000
    ), new Point3D(0.287013,-0.692910,
    zOff+0.000000
    ));
    Torus.projection[949] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[950] = new Triangle(new Point3D(0.299830,-0.723854,
    zOff-0.125000
    ), new Point3D(0.391747,-0.678525,
    zOff-0.125000
    ), new Point3D(0.437500,-0.757772,
    zOff-0.216506
    ));
    Torus.projection[950] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[951] = new Triangle(new Point3D(0.437500,-0.757772,
    zOff-0.216506
    ), new Point3D(0.334848,-0.808394,
    zOff-0.216506
    ), new Point3D(0.299830,-0.723854,
    zOff-0.125000
    ));
    Torus.projection[951] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[952] = new Triangle(new Point3D(0.334848,-0.808394,
    zOff-0.216506
    ), new Point3D(0.437500,-0.757772,
    zOff-0.216506
    ), new Point3D(0.500000,-0.866025,
    zOff-0.250000
    ));
    Torus.projection[952] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[953] = new Triangle(new Point3D(0.500000,-0.866025,
    zOff-0.250000
    ), new Point3D(0.382684,-0.923879,
    zOff-0.250000
    ), new Point3D(0.334848,-0.808394,
    zOff-0.216506
    ));
    Torus.projection[953] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[954] = new Triangle(new Point3D(0.382684,-0.923879,
    zOff-0.250000
    ), new Point3D(0.500000,-0.866025,
    zOff-0.250000
    ), new Point3D(0.562500,-0.974279,
    zOff-0.216506
    ));
    Torus.projection[954] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[955] = new Triangle(new Point3D(0.562500,-0.974279,
    zOff-0.216506
    ), new Point3D(0.430519,-1.039364,
    zOff-0.216506
    ), new Point3D(0.382684,-0.923879,
    zOff-0.250000
    ));
    Torus.projection[955] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[956] = new Triangle(new Point3D(0.430519,-1.039364,
    zOff-0.216506
    ), new Point3D(0.562500,-0.974279,
    zOff-0.216506
    ), new Point3D(0.608253,-1.053525,
    zOff-0.125000
    ));
    Torus.projection[956] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[957] = new Triangle(new Point3D(0.608253,-1.053525,
    zOff-0.125000
    ), new Point3D(0.465537,-1.123905,
    zOff-0.125000
    ), new Point3D(0.430519,-1.039364,
    zOff-0.216506
    ));
    Torus.projection[957] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[958] = new Triangle(new Point3D(0.465537,-1.123905,
    zOff-0.125000
    ), new Point3D(0.608253,-1.053525,
    zOff-0.125000
    ), new Point3D(0.625000,-1.082532,
    zOff+0.000000
    ));
    Torus.projection[958] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[959] = new Triangle(new Point3D(0.625000,-1.082532,
    zOff+0.000000
    ), new Point3D(0.478355,-1.154849,
    zOff+0.000000
    ), new Point3D(0.465537,-1.123905,
    zOff-0.125000
    ));
    Torus.projection[959] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[960] = new Triangle(new Point3D(0.625000,-1.082532,
    zOff+0.000000
    ), new Point3D(0.760952,-0.991692,
    zOff+0.000000
    ), new Point3D(0.740562,-0.965120,
    zOff+0.125000
    ));
    Torus.projection[960] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[961] = new Triangle(new Point3D(0.740562,-0.965120,
    zOff+0.125000
    ), new Point3D(0.608253,-1.053525,
    zOff+0.125000
    ), new Point3D(0.625000,-1.082532,
    zOff+0.000000
    ));
    Torus.projection[961] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[962] = new Triangle(new Point3D(0.608253,-1.053525,
    zOff+0.125000
    ), new Point3D(0.740562,-0.965120,
    zOff+0.125000
    ), new Point3D(0.684856,-0.892523,
    zOff+0.216506
    ));
    Torus.projection[962] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[963] = new Triangle(new Point3D(0.684856,-0.892523,
    zOff+0.216506
    ), new Point3D(0.562500,-0.974279,
    zOff+0.216506
    ), new Point3D(0.608253,-1.053525,
    zOff+0.125000
    ));
    Torus.projection[963] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[964] = new Triangle(new Point3D(0.562500,-0.974279,
    zOff+0.216506
    ), new Point3D(0.684856,-0.892523,
    zOff+0.216506
    ), new Point3D(0.608761,-0.793353,
    zOff+0.250000
    ));
    Torus.projection[964] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[965] = new Triangle(new Point3D(0.608761,-0.793353,
    zOff+0.250000
    ), new Point3D(0.500000,-0.866025,
    zOff+0.250000
    ), new Point3D(0.562500,-0.974279,
    zOff+0.216506
    ));
    Torus.projection[965] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[966] = new Triangle(new Point3D(0.500000,-0.866025,
    zOff+0.250000
    ), new Point3D(0.608761,-0.793353,
    zOff+0.250000
    ), new Point3D(0.532666,-0.694184,
    zOff+0.216506
    ));
    Torus.projection[966] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[967] = new Triangle(new Point3D(0.532666,-0.694184,
    zOff+0.216506
    ), new Point3D(0.437500,-0.757772,
    zOff+0.216506
    ), new Point3D(0.500000,-0.866025,
    zOff+0.250000
    ));
    Torus.projection[967] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[968] = new Triangle(new Point3D(0.437500,-0.757772,
    zOff+0.216506
    ), new Point3D(0.532666,-0.694184,
    zOff+0.216506
    ), new Point3D(0.476961,-0.621587,
    zOff+0.125000
    ));
    Torus.projection[968] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[969] = new Triangle(new Point3D(0.476961,-0.621587,
    zOff+0.125000
    ), new Point3D(0.391747,-0.678525,
    zOff+0.125000
    ), new Point3D(0.437500,-0.757772,
    zOff+0.216506
    ));
    Torus.projection[969] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[970] = new Triangle(new Point3D(0.391747,-0.678525,
    zOff+0.125000
    ), new Point3D(0.476961,-0.621587,
    zOff+0.125000
    ), new Point3D(0.456571,-0.595015,
    zOff+0.000000
    ));
    Torus.projection[970] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[971] = new Triangle(new Point3D(0.456571,-0.595015,
    zOff+0.000000
    ), new Point3D(0.375000,-0.649519,
    zOff+0.000000
    ), new Point3D(0.391747,-0.678525,
    zOff+0.125000
    ));
    Torus.projection[971] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[972] = new Triangle(new Point3D(0.375000,-0.649519,
    zOff+0.000000
    ), new Point3D(0.456571,-0.595015,
    zOff+0.000000
    ), new Point3D(0.476961,-0.621587,
    zOff-0.125000
    ));
    Torus.projection[972] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[973] = new Triangle(new Point3D(0.476961,-0.621587,
    zOff-0.125000
    ), new Point3D(0.391747,-0.678525,
    zOff-0.125000
    ), new Point3D(0.375000,-0.649519,
    zOff+0.000000
    ));
    Torus.projection[973] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[974] = new Triangle(new Point3D(0.391747,-0.678525,
    zOff-0.125000
    ), new Point3D(0.476961,-0.621587,
    zOff-0.125000
    ), new Point3D(0.532666,-0.694184,
    zOff-0.216506
    ));
    Torus.projection[974] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[975] = new Triangle(new Point3D(0.532666,-0.694184,
    zOff-0.216506
    ), new Point3D(0.437500,-0.757772,
    zOff-0.216506
    ), new Point3D(0.391747,-0.678525,
    zOff-0.125000
    ));
    Torus.projection[975] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[976] = new Triangle(new Point3D(0.437500,-0.757772,
    zOff-0.216506
    ), new Point3D(0.532666,-0.694184,
    zOff-0.216506
    ), new Point3D(0.608761,-0.793353,
    zOff-0.250000
    ));
    Torus.projection[976] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[977] = new Triangle(new Point3D(0.608761,-0.793353,
    zOff-0.250000
    ), new Point3D(0.500000,-0.866025,
    zOff-0.250000
    ), new Point3D(0.437500,-0.757772,
    zOff-0.216506
    ));
    Torus.projection[977] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[978] = new Triangle(new Point3D(0.500000,-0.866025,
    zOff-0.250000
    ), new Point3D(0.608761,-0.793353,
    zOff-0.250000
    ), new Point3D(0.684856,-0.892523,
    zOff-0.216506
    ));
    Torus.projection[978] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[979] = new Triangle(new Point3D(0.684856,-0.892523,
    zOff-0.216506
    ), new Point3D(0.562500,-0.974279,
    zOff-0.216506
    ), new Point3D(0.500000,-0.866025,
    zOff-0.250000
    ));
    Torus.projection[979] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[980] = new Triangle(new Point3D(0.562500,-0.974279,
    zOff-0.216506
    ), new Point3D(0.684856,-0.892523,
    zOff-0.216506
    ), new Point3D(0.740562,-0.965120,
    zOff-0.125000
    ));
    Torus.projection[980] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[981] = new Triangle(new Point3D(0.740562,-0.965120,
    zOff-0.125000
    ), new Point3D(0.608253,-1.053525,
    zOff-0.125000
    ), new Point3D(0.562500,-0.974279,
    zOff-0.216506
    ));
    Torus.projection[981] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[982] = new Triangle(new Point3D(0.608253,-1.053525,
    zOff-0.125000
    ), new Point3D(0.740562,-0.965120,
    zOff-0.125000
    ), new Point3D(0.760952,-0.991692,
    zOff+0.000000
    ));
    Torus.projection[982] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[983] = new Triangle(new Point3D(0.760952,-0.991692,
    zOff+0.000000
    ), new Point3D(0.625000,-1.082532,
    zOff+0.000000
    ), new Point3D(0.608253,-1.053525,
    zOff-0.125000
    ));
    Torus.projection[983] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[984] = new Triangle(new Point3D(0.760952,-0.991692,
    zOff+0.000000
    ), new Point3D(0.883883,-0.883884,
    zOff+0.000000
    ), new Point3D(0.860199,-0.860200,
    zOff+0.125000
    ));
    Torus.projection[984] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[985] = new Triangle(new Point3D(0.860199,-0.860200,
    zOff+0.125000
    ), new Point3D(0.740562,-0.965120,
    zOff+0.125000
    ), new Point3D(0.760952,-0.991692,
    zOff+0.000000
    ));
    Torus.projection[985] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[986] = new Triangle(new Point3D(0.740562,-0.965120,
    zOff+0.125000
    ), new Point3D(0.860199,-0.860200,
    zOff+0.125000
    ), new Point3D(0.795495,-0.795496,
    zOff+0.216506
    ));
    Torus.projection[986] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[987] = new Triangle(new Point3D(0.795495,-0.795496,
    zOff+0.216506
    ), new Point3D(0.684856,-0.892523,
    zOff+0.216506
    ), new Point3D(0.740562,-0.965120,
    zOff+0.125000
    ));
    Torus.projection[987] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[988] = new Triangle(new Point3D(0.684856,-0.892523,
    zOff+0.216506
    ), new Point3D(0.795495,-0.795496,
    zOff+0.216506
    ), new Point3D(0.707106,-0.707107,
    zOff+0.250000
    ));
    Torus.projection[988] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[989] = new Triangle(new Point3D(0.707106,-0.707107,
    zOff+0.250000
    ), new Point3D(0.608761,-0.793353,
    zOff+0.250000
    ), new Point3D(0.684856,-0.892523,
    zOff+0.216506
    ));
    Torus.projection[989] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[990] = new Triangle(new Point3D(0.608761,-0.793353,
    zOff+0.250000
    ), new Point3D(0.707106,-0.707107,
    zOff+0.250000
    ), new Point3D(0.618718,-0.618719,
    zOff+0.216506
    ));
    Torus.projection[990] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[991] = new Triangle(new Point3D(0.618718,-0.618719,
    zOff+0.216506
    ), new Point3D(0.532666,-0.694184,
    zOff+0.216506
    ), new Point3D(0.608761,-0.793353,
    zOff+0.250000
    ));
    Torus.projection[991] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[992] = new Triangle(new Point3D(0.532666,-0.694184,
    zOff+0.216506
    ), new Point3D(0.618718,-0.618719,
    zOff+0.216506
    ), new Point3D(0.554013,-0.554014,
    zOff+0.125000
    ));
    Torus.projection[992] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[993] = new Triangle(new Point3D(0.554013,-0.554014,
    zOff+0.125000
    ), new Point3D(0.476961,-0.621587,
    zOff+0.125000
    ), new Point3D(0.532666,-0.694184,
    zOff+0.216506
    ));
    Torus.projection[993] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[994] = new Triangle(new Point3D(0.476961,-0.621587,
    zOff+0.125000
    ), new Point3D(0.554013,-0.554014,
    zOff+0.125000
    ), new Point3D(0.530330,-0.530330,
    zOff+0.000000
    ));
    Torus.projection[994] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[995] = new Triangle(new Point3D(0.530330,-0.530330,
    zOff+0.000000
    ), new Point3D(0.456571,-0.595015,
    zOff+0.000000
    ), new Point3D(0.476961,-0.621587,
    zOff+0.125000
    ));
    Torus.projection[995] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[996] = new Triangle(new Point3D(0.456571,-0.595015,
    zOff+0.000000
    ), new Point3D(0.530330,-0.530330,
    zOff+0.000000
    ), new Point3D(0.554013,-0.554014,
    zOff-0.125000
    ));
    Torus.projection[996] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[997] = new Triangle(new Point3D(0.554013,-0.554014,
    zOff-0.125000
    ), new Point3D(0.476961,-0.621587,
    zOff-0.125000
    ), new Point3D(0.456571,-0.595015,
    zOff+0.000000
    ));
    Torus.projection[997] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[998] = new Triangle(new Point3D(0.476961,-0.621587,
    zOff-0.125000
    ), new Point3D(0.554013,-0.554014,
    zOff-0.125000
    ), new Point3D(0.618718,-0.618719,
    zOff-0.216506
    ));
    Torus.projection[998] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[999] = new Triangle(new Point3D(0.618718,-0.618719,
    zOff-0.216506
    ), new Point3D(0.532666,-0.694184,
    zOff-0.216506
    ), new Point3D(0.476961,-0.621587,
    zOff-0.125000
    ));
    Torus.projection[999] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1000] = new Triangle(new Point3D(0.532666,-0.694184,
    zOff-0.216506
    ), new Point3D(0.618718,-0.618719,
    zOff-0.216506
    ), new Point3D(0.707106,-0.707107,
    zOff-0.250000
    ));
    Torus.projection[1000] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1001] = new Triangle(new Point3D(0.707106,-0.707107,
    zOff-0.250000
    ), new Point3D(0.608761,-0.793353,
    zOff-0.250000
    ), new Point3D(0.532666,-0.694184,
    zOff-0.216506
    ));
    Torus.projection[1001] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1002] = new Triangle(new Point3D(0.608761,-0.793353,
    zOff-0.250000
    ), new Point3D(0.707106,-0.707107,
    zOff-0.250000
    ), new Point3D(0.795495,-0.795496,
    zOff-0.216506
    ));
    Torus.projection[1002] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1003] = new Triangle(new Point3D(0.795495,-0.795496,
    zOff-0.216506
    ), new Point3D(0.684856,-0.892523,
    zOff-0.216506
    ), new Point3D(0.608761,-0.793353,
    zOff-0.250000
    ));
    Torus.projection[1003] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1004] = new Triangle(new Point3D(0.684856,-0.892523,
    zOff-0.216506
    ), new Point3D(0.795495,-0.795496,
    zOff-0.216506
    ), new Point3D(0.860199,-0.860200,
    zOff-0.125000
    ));
    Torus.projection[1004] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1005] = new Triangle(new Point3D(0.860199,-0.860200,
    zOff-0.125000
    ), new Point3D(0.740562,-0.965120,
    zOff-0.125000
    ), new Point3D(0.684856,-0.892523,
    zOff-0.216506
    ));
    Torus.projection[1005] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1006] = new Triangle(new Point3D(0.740562,-0.965120,
    zOff-0.125000
    ), new Point3D(0.860199,-0.860200,
    zOff-0.125000
    ), new Point3D(0.883883,-0.883884,
    zOff+0.000000
    ));
    Torus.projection[1006] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1007] = new Triangle(new Point3D(0.883883,-0.883884,
    zOff+0.000000
    ), new Point3D(0.760952,-0.991692,
    zOff+0.000000
    ), new Point3D(0.740562,-0.965120,
    zOff-0.125000
    ));
    Torus.projection[1007] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1008] = new Triangle(new Point3D(0.883883,-0.883884,
    zOff+0.000000
    ), new Point3D(0.991692,-0.760952,
    zOff+0.000000
    ), new Point3D(0.965119,-0.740562,
    zOff+0.125000
    ));
    Torus.projection[1008] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1009] = new Triangle(new Point3D(0.965119,-0.740562,
    zOff+0.125000
    ), new Point3D(0.860199,-0.860200,
    zOff+0.125000
    ), new Point3D(0.883883,-0.883884,
    zOff+0.000000
    ));
    Torus.projection[1009] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1010] = new Triangle(new Point3D(0.860199,-0.860200,
    zOff+0.125000
    ), new Point3D(0.965119,-0.740562,
    zOff+0.125000
    ), new Point3D(0.892523,-0.684856,
    zOff+0.216506
    ));
    Torus.projection[1010] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1011] = new Triangle(new Point3D(0.892523,-0.684856,
    zOff+0.216506
    ), new Point3D(0.795495,-0.795496,
    zOff+0.216506
    ), new Point3D(0.860199,-0.860200,
    zOff+0.125000
    ));
    Torus.projection[1011] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1012] = new Triangle(new Point3D(0.795495,-0.795496,
    zOff+0.216506
    ), new Point3D(0.892523,-0.684856,
    zOff+0.216506
    ), new Point3D(0.793353,-0.608761,
    zOff+0.250000
    ));
    Torus.projection[1012] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1013] = new Triangle(new Point3D(0.793353,-0.608761,
    zOff+0.250000
    ), new Point3D(0.707106,-0.707107,
    zOff+0.250000
    ), new Point3D(0.795495,-0.795496,
    zOff+0.216506
    ));
    Torus.projection[1013] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1014] = new Triangle(new Point3D(0.707106,-0.707107,
    zOff+0.250000
    ), new Point3D(0.793353,-0.608761,
    zOff+0.250000
    ), new Point3D(0.694184,-0.532666,
    zOff+0.216506
    ));
    Torus.projection[1014] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1015] = new Triangle(new Point3D(0.694184,-0.532666,
    zOff+0.216506
    ), new Point3D(0.618718,-0.618719,
    zOff+0.216506
    ), new Point3D(0.707106,-0.707107,
    zOff+0.250000
    ));
    Torus.projection[1015] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1016] = new Triangle(new Point3D(0.618718,-0.618719,
    zOff+0.216506
    ), new Point3D(0.694184,-0.532666,
    zOff+0.216506
    ), new Point3D(0.621587,-0.476961,
    zOff+0.125000
    ));
    Torus.projection[1016] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1017] = new Triangle(new Point3D(0.621587,-0.476961,
    zOff+0.125000
    ), new Point3D(0.554013,-0.554014,
    zOff+0.125000
    ), new Point3D(0.618718,-0.618719,
    zOff+0.216506
    ));
    Torus.projection[1017] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1018] = new Triangle(new Point3D(0.554013,-0.554014,
    zOff+0.125000
    ), new Point3D(0.621587,-0.476961,
    zOff+0.125000
    ), new Point3D(0.595015,-0.456571,
    zOff+0.000000
    ));
    Torus.projection[1018] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1019] = new Triangle(new Point3D(0.595015,-0.456571,
    zOff+0.000000
    ), new Point3D(0.530330,-0.530330,
    zOff+0.000000
    ), new Point3D(0.554013,-0.554014,
    zOff+0.125000
    ));
    Torus.projection[1019] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1020] = new Triangle(new Point3D(0.530330,-0.530330,
    zOff+0.000000
    ), new Point3D(0.595015,-0.456571,
    zOff+0.000000
    ), new Point3D(0.621587,-0.476961,
    zOff-0.125000
    ));
    Torus.projection[1020] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1021] = new Triangle(new Point3D(0.621587,-0.476961,
    zOff-0.125000
    ), new Point3D(0.554013,-0.554014,
    zOff-0.125000
    ), new Point3D(0.530330,-0.530330,
    zOff+0.000000
    ));
    Torus.projection[1021] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1022] = new Triangle(new Point3D(0.554013,-0.554014,
    zOff-0.125000
    ), new Point3D(0.621587,-0.476961,
    zOff-0.125000
    ), new Point3D(0.694184,-0.532666,
    zOff-0.216506
    ));
    Torus.projection[1022] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1023] = new Triangle(new Point3D(0.694184,-0.532666,
    zOff-0.216506
    ), new Point3D(0.618718,-0.618719,
    zOff-0.216506
    ), new Point3D(0.554013,-0.554014,
    zOff-0.125000
    ));
    Torus.projection[1023] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1024] = new Triangle(new Point3D(0.618718,-0.618719,
    zOff-0.216506
    ), new Point3D(0.694184,-0.532666,
    zOff-0.216506
    ), new Point3D(0.793353,-0.608761,
    zOff-0.250000
    ));
    Torus.projection[1024] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1025] = new Triangle(new Point3D(0.793353,-0.608761,
    zOff-0.250000
    ), new Point3D(0.707106,-0.707107,
    zOff-0.250000
    ), new Point3D(0.618718,-0.618719,
    zOff-0.216506
    ));
    Torus.projection[1025] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1026] = new Triangle(new Point3D(0.707106,-0.707107,
    zOff-0.250000
    ), new Point3D(0.793353,-0.608761,
    zOff-0.250000
    ), new Point3D(0.892523,-0.684856,
    zOff-0.216506
    ));
    Torus.projection[1026] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1027] = new Triangle(new Point3D(0.892523,-0.684856,
    zOff-0.216506
    ), new Point3D(0.795495,-0.795496,
    zOff-0.216506
    ), new Point3D(0.707106,-0.707107,
    zOff-0.250000
    ));
    Torus.projection[1027] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1028] = new Triangle(new Point3D(0.795495,-0.795496,
    zOff-0.216506
    ), new Point3D(0.892523,-0.684856,
    zOff-0.216506
    ), new Point3D(0.965119,-0.740562,
    zOff-0.125000
    ));
    Torus.projection[1028] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1029] = new Triangle(new Point3D(0.965119,-0.740562,
    zOff-0.125000
    ), new Point3D(0.860199,-0.860200,
    zOff-0.125000
    ), new Point3D(0.795495,-0.795496,
    zOff-0.216506
    ));
    Torus.projection[1029] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1030] = new Triangle(new Point3D(0.860199,-0.860200,
    zOff-0.125000
    ), new Point3D(0.965119,-0.740562,
    zOff-0.125000
    ), new Point3D(0.991692,-0.760952,
    zOff+0.000000
    ));
    Torus.projection[1030] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1031] = new Triangle(new Point3D(0.991692,-0.760952,
    zOff+0.000000
    ), new Point3D(0.883883,-0.883884,
    zOff+0.000000
    ), new Point3D(0.860199,-0.860200,
    zOff-0.125000
    ));
    Torus.projection[1031] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1032] = new Triangle(new Point3D(0.991692,-0.760952,
    zOff+0.000000
    ), new Point3D(1.082532,-0.625000,
    zOff+0.000000
    ), new Point3D(1.053525,-0.608253,
    zOff+0.125000
    ));
    Torus.projection[1032] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1033] = new Triangle(new Point3D(1.053525,-0.608253,
    zOff+0.125000
    ), new Point3D(0.965119,-0.740562,
    zOff+0.125000
    ), new Point3D(0.991692,-0.760952,
    zOff+0.000000
    ));
    Torus.projection[1033] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1034] = new Triangle(new Point3D(0.965119,-0.740562,
    zOff+0.125000
    ), new Point3D(1.053525,-0.608253,
    zOff+0.125000
    ), new Point3D(0.974279,-0.562500,
    zOff+0.216506
    ));
    Torus.projection[1034] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1035] = new Triangle(new Point3D(0.974279,-0.562500,
    zOff+0.216506
    ), new Point3D(0.892523,-0.684856,
    zOff+0.216506
    ), new Point3D(0.965119,-0.740562,
    zOff+0.125000
    ));
    Torus.projection[1035] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1036] = new Triangle(new Point3D(0.892523,-0.684856,
    zOff+0.216506
    ), new Point3D(0.974279,-0.562500,
    zOff+0.216506
    ), new Point3D(0.866025,-0.500000,
    zOff+0.250000
    ));
    Torus.projection[1036] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1037] = new Triangle(new Point3D(0.866025,-0.500000,
    zOff+0.250000
    ), new Point3D(0.793353,-0.608761,
    zOff+0.250000
    ), new Point3D(0.892523,-0.684856,
    zOff+0.216506
    ));
    Torus.projection[1037] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1038] = new Triangle(new Point3D(0.793353,-0.608761,
    zOff+0.250000
    ), new Point3D(0.866025,-0.500000,
    zOff+0.250000
    ), new Point3D(0.757772,-0.437500,
    zOff+0.216506
    ));
    Torus.projection[1038] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1039] = new Triangle(new Point3D(0.757772,-0.437500,
    zOff+0.216506
    ), new Point3D(0.694184,-0.532666,
    zOff+0.216506
    ), new Point3D(0.793353,-0.608761,
    zOff+0.250000
    ));
    Torus.projection[1039] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1040] = new Triangle(new Point3D(0.694184,-0.532666,
    zOff+0.216506
    ), new Point3D(0.757772,-0.437500,
    zOff+0.216506
    ), new Point3D(0.678525,-0.391747,
    zOff+0.125000
    ));
    Torus.projection[1040] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1041] = new Triangle(new Point3D(0.678525,-0.391747,
    zOff+0.125000
    ), new Point3D(0.621587,-0.476961,
    zOff+0.125000
    ), new Point3D(0.694184,-0.532666,
    zOff+0.216506
    ));
    Torus.projection[1041] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1042] = new Triangle(new Point3D(0.621587,-0.476961,
    zOff+0.125000
    ), new Point3D(0.678525,-0.391747,
    zOff+0.125000
    ), new Point3D(0.649519,-0.375000,
    zOff+0.000000
    ));
    Torus.projection[1042] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1043] = new Triangle(new Point3D(0.649519,-0.375000,
    zOff+0.000000
    ), new Point3D(0.595015,-0.456571,
    zOff+0.000000
    ), new Point3D(0.621587,-0.476961,
    zOff+0.125000
    ));
    Torus.projection[1043] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1044] = new Triangle(new Point3D(0.595015,-0.456571,
    zOff+0.000000
    ), new Point3D(0.649519,-0.375000,
    zOff+0.000000
    ), new Point3D(0.678525,-0.391747,
    zOff-0.125000
    ));
    Torus.projection[1044] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1045] = new Triangle(new Point3D(0.678525,-0.391747,
    zOff-0.125000
    ), new Point3D(0.621587,-0.476961,
    zOff-0.125000
    ), new Point3D(0.595015,-0.456571,
    zOff+0.000000
    ));
    Torus.projection[1045] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1046] = new Triangle(new Point3D(0.621587,-0.476961,
    zOff-0.125000
    ), new Point3D(0.678525,-0.391747,
    zOff-0.125000
    ), new Point3D(0.757772,-0.437500,
    zOff-0.216506
    ));
    Torus.projection[1046] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1047] = new Triangle(new Point3D(0.757772,-0.437500,
    zOff-0.216506
    ), new Point3D(0.694184,-0.532666,
    zOff-0.216506
    ), new Point3D(0.621587,-0.476961,
    zOff-0.125000
    ));
    Torus.projection[1047] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1048] = new Triangle(new Point3D(0.694184,-0.532666,
    zOff-0.216506
    ), new Point3D(0.757772,-0.437500,
    zOff-0.216506
    ), new Point3D(0.866025,-0.500000,
    zOff-0.250000
    ));
    Torus.projection[1048] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1049] = new Triangle(new Point3D(0.866025,-0.500000,
    zOff-0.250000
    ), new Point3D(0.793353,-0.608761,
    zOff-0.250000
    ), new Point3D(0.694184,-0.532666,
    zOff-0.216506
    ));
    Torus.projection[1049] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1050] = new Triangle(new Point3D(0.793353,-0.608761,
    zOff-0.250000
    ), new Point3D(0.866025,-0.500000,
    zOff-0.250000
    ), new Point3D(0.974279,-0.562500,
    zOff-0.216506
    ));
    Torus.projection[1050] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1051] = new Triangle(new Point3D(0.974279,-0.562500,
    zOff-0.216506
    ), new Point3D(0.892523,-0.684856,
    zOff-0.216506
    ), new Point3D(0.793353,-0.608761,
    zOff-0.250000
    ));
    Torus.projection[1051] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1052] = new Triangle(new Point3D(0.892523,-0.684856,
    zOff-0.216506
    ), new Point3D(0.974279,-0.562500,
    zOff-0.216506
    ), new Point3D(1.053525,-0.608253,
    zOff-0.125000
    ));
    Torus.projection[1052] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1053] = new Triangle(new Point3D(1.053525,-0.608253,
    zOff-0.125000
    ), new Point3D(0.965119,-0.740562,
    zOff-0.125000
    ), new Point3D(0.892523,-0.684856,
    zOff-0.216506
    ));
    Torus.projection[1053] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1054] = new Triangle(new Point3D(0.965119,-0.740562,
    zOff-0.125000
    ), new Point3D(1.053525,-0.608253,
    zOff-0.125000
    ), new Point3D(1.082532,-0.625000,
    zOff+0.000000
    ));
    Torus.projection[1054] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1055] = new Triangle(new Point3D(1.082532,-0.625000,
    zOff+0.000000
    ), new Point3D(0.991692,-0.760952,
    zOff+0.000000
    ), new Point3D(0.965119,-0.740562,
    zOff-0.125000
    ));
    Torus.projection[1055] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1056] = new Triangle(new Point3D(1.082532,-0.625000,
    zOff+0.000000
    ), new Point3D(1.154849,-0.478355,
    zOff+0.000000
    ), new Point3D(1.123905,-0.465537,
    zOff+0.125000
    ));
    Torus.projection[1056] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1057] = new Triangle(new Point3D(1.123905,-0.465537,
    zOff+0.125000
    ), new Point3D(1.053525,-0.608253,
    zOff+0.125000
    ), new Point3D(1.082532,-0.625000,
    zOff+0.000000
    ));
    Torus.projection[1057] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1058] = new Triangle(new Point3D(1.053525,-0.608253,
    zOff+0.125000
    ), new Point3D(1.123905,-0.465537,
    zOff+0.125000
    ), new Point3D(1.039364,-0.430519,
    zOff+0.216506
    ));
    Torus.projection[1058] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1059] = new Triangle(new Point3D(1.039364,-0.430519,
    zOff+0.216506
    ), new Point3D(0.974279,-0.562500,
    zOff+0.216506
    ), new Point3D(1.053525,-0.608253,
    zOff+0.125000
    ));
    Torus.projection[1059] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1060] = new Triangle(new Point3D(0.974279,-0.562500,
    zOff+0.216506
    ), new Point3D(1.039364,-0.430519,
    zOff+0.216506
    ), new Point3D(0.923879,-0.382684,
    zOff+0.250000
    ));
    Torus.projection[1060] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1061] = new Triangle(new Point3D(0.923879,-0.382684,
    zOff+0.250000
    ), new Point3D(0.866025,-0.500000,
    zOff+0.250000
    ), new Point3D(0.974279,-0.562500,
    zOff+0.216506
    ));
    Torus.projection[1061] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1062] = new Triangle(new Point3D(0.866025,-0.500000,
    zOff+0.250000
    ), new Point3D(0.923879,-0.382684,
    zOff+0.250000
    ), new Point3D(0.808394,-0.334848,
    zOff+0.216506
    ));
    Torus.projection[1062] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1063] = new Triangle(new Point3D(0.808394,-0.334848,
    zOff+0.216506
    ), new Point3D(0.757772,-0.437500,
    zOff+0.216506
    ), new Point3D(0.866025,-0.500000,
    zOff+0.250000
    ));
    Torus.projection[1063] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1064] = new Triangle(new Point3D(0.757772,-0.437500,
    zOff+0.216506
    ), new Point3D(0.808394,-0.334848,
    zOff+0.216506
    ), new Point3D(0.723854,-0.299830,
    zOff+0.125000
    ));
    Torus.projection[1064] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1065] = new Triangle(new Point3D(0.723854,-0.299830,
    zOff+0.125000
    ), new Point3D(0.678525,-0.391747,
    zOff+0.125000
    ), new Point3D(0.757772,-0.437500,
    zOff+0.216506
    ));
    Torus.projection[1065] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1066] = new Triangle(new Point3D(0.678525,-0.391747,
    zOff+0.125000
    ), new Point3D(0.723854,-0.299830,
    zOff+0.125000
    ), new Point3D(0.692910,-0.287013,
    zOff+0.000000
    ));
    Torus.projection[1066] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1067] = new Triangle(new Point3D(0.692910,-0.287013,
    zOff+0.000000
    ), new Point3D(0.649519,-0.375000,
    zOff+0.000000
    ), new Point3D(0.678525,-0.391747,
    zOff+0.125000
    ));
    Torus.projection[1067] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1068] = new Triangle(new Point3D(0.649519,-0.375000,
    zOff+0.000000
    ), new Point3D(0.692910,-0.287013,
    zOff+0.000000
    ), new Point3D(0.723854,-0.299830,
    zOff-0.125000
    ));
    Torus.projection[1068] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1069] = new Triangle(new Point3D(0.723854,-0.299830,
    zOff-0.125000
    ), new Point3D(0.678525,-0.391747,
    zOff-0.125000
    ), new Point3D(0.649519,-0.375000,
    zOff+0.000000
    ));
    Torus.projection[1069] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1070] = new Triangle(new Point3D(0.678525,-0.391747,
    zOff-0.125000
    ), new Point3D(0.723854,-0.299830,
    zOff-0.125000
    ), new Point3D(0.808394,-0.334848,
    zOff-0.216506
    ));
    Torus.projection[1070] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1071] = new Triangle(new Point3D(0.808394,-0.334848,
    zOff-0.216506
    ), new Point3D(0.757772,-0.437500,
    zOff-0.216506
    ), new Point3D(0.678525,-0.391747,
    zOff-0.125000
    ));
    Torus.projection[1071] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1072] = new Triangle(new Point3D(0.757772,-0.437500,
    zOff-0.216506
    ), new Point3D(0.808394,-0.334848,
    zOff-0.216506
    ), new Point3D(0.923879,-0.382684,
    zOff-0.250000
    ));
    Torus.projection[1072] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1073] = new Triangle(new Point3D(0.923879,-0.382684,
    zOff-0.250000
    ), new Point3D(0.866025,-0.500000,
    zOff-0.250000
    ), new Point3D(0.757772,-0.437500,
    zOff-0.216506
    ));
    Torus.projection[1073] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1074] = new Triangle(new Point3D(0.866025,-0.500000,
    zOff-0.250000
    ), new Point3D(0.923879,-0.382684,
    zOff-0.250000
    ), new Point3D(1.039364,-0.430519,
    zOff-0.216506
    ));
    Torus.projection[1074] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1075] = new Triangle(new Point3D(1.039364,-0.430519,
    zOff-0.216506
    ), new Point3D(0.974279,-0.562500,
    zOff-0.216506
    ), new Point3D(0.866025,-0.500000,
    zOff-0.250000
    ));
    Torus.projection[1075] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1076] = new Triangle(new Point3D(0.974279,-0.562500,
    zOff-0.216506
    ), new Point3D(1.039364,-0.430519,
    zOff-0.216506
    ), new Point3D(1.123905,-0.465537,
    zOff-0.125000
    ));
    Torus.projection[1076] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1077] = new Triangle(new Point3D(1.123905,-0.465537,
    zOff-0.125000
    ), new Point3D(1.053525,-0.608253,
    zOff-0.125000
    ), new Point3D(0.974279,-0.562500,
    zOff-0.216506
    ));
    Torus.projection[1077] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1078] = new Triangle(new Point3D(1.053525,-0.608253,
    zOff-0.125000
    ), new Point3D(1.123905,-0.465537,
    zOff-0.125000
    ), new Point3D(1.154849,-0.478355,
    zOff+0.000000
    ));
    Torus.projection[1078] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1079] = new Triangle(new Point3D(1.154849,-0.478355,
    zOff+0.000000
    ), new Point3D(1.082532,-0.625000,
    zOff+0.000000
    ), new Point3D(1.053525,-0.608253,
    zOff-0.125000
    ));
    Torus.projection[1079] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1080] = new Triangle(new Point3D(1.154849,-0.478355,
    zOff+0.000000
    ), new Point3D(1.207407,-0.323523,
    zOff+0.000000
    ), new Point3D(1.175055,-0.314855,
    zOff+0.125000
    ));
    Torus.projection[1080] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1081] = new Triangle(new Point3D(1.175055,-0.314855,
    zOff+0.125000
    ), new Point3D(1.123905,-0.465537,
    zOff+0.125000
    ), new Point3D(1.154849,-0.478355,
    zOff+0.000000
    ));
    Torus.projection[1081] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1082] = new Triangle(new Point3D(1.123905,-0.465537,
    zOff+0.125000
    ), new Point3D(1.175055,-0.314855,
    zOff+0.125000
    ), new Point3D(1.086667,-0.291171,
    zOff+0.216506
    ));
    Torus.projection[1082] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1083] = new Triangle(new Point3D(1.086667,-0.291171,
    zOff+0.216506
    ), new Point3D(1.039364,-0.430519,
    zOff+0.216506
    ), new Point3D(1.123905,-0.465537,
    zOff+0.125000
    ));
    Torus.projection[1083] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1084] = new Triangle(new Point3D(1.039364,-0.430519,
    zOff+0.216506
    ), new Point3D(1.086667,-0.291171,
    zOff+0.216506
    ), new Point3D(0.965926,-0.258819,
    zOff+0.250000
    ));
    Torus.projection[1084] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1085] = new Triangle(new Point3D(0.965926,-0.258819,
    zOff+0.250000
    ), new Point3D(0.923879,-0.382684,
    zOff+0.250000
    ), new Point3D(1.039364,-0.430519,
    zOff+0.216506
    ));
    Torus.projection[1085] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1086] = new Triangle(new Point3D(0.923879,-0.382684,
    zOff+0.250000
    ), new Point3D(0.965926,-0.258819,
    zOff+0.250000
    ), new Point3D(0.845185,-0.226466,
    zOff+0.216506
    ));
    Torus.projection[1086] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1087] = new Triangle(new Point3D(0.845185,-0.226466,
    zOff+0.216506
    ), new Point3D(0.808394,-0.334848,
    zOff+0.216506
    ), new Point3D(0.923879,-0.382684,
    zOff+0.250000
    ));
    Torus.projection[1087] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1088] = new Triangle(new Point3D(0.808394,-0.334848,
    zOff+0.216506
    ), new Point3D(0.845185,-0.226466,
    zOff+0.216506
    ), new Point3D(0.756797,-0.202783,
    zOff+0.125000
    ));
    Torus.projection[1088] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1089] = new Triangle(new Point3D(0.756797,-0.202783,
    zOff+0.125000
    ), new Point3D(0.723854,-0.299830,
    zOff+0.125000
    ), new Point3D(0.808394,-0.334848,
    zOff+0.216506
    ));
    Torus.projection[1089] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1090] = new Triangle(new Point3D(0.723854,-0.299830,
    zOff+0.125000
    ), new Point3D(0.756797,-0.202783,
    zOff+0.125000
    ), new Point3D(0.724444,-0.194114,
    zOff+0.000000
    ));
    Torus.projection[1090] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1091] = new Triangle(new Point3D(0.724444,-0.194114,
    zOff+0.000000
    ), new Point3D(0.692910,-0.287013,
    zOff+0.000000
    ), new Point3D(0.723854,-0.299830,
    zOff+0.125000
    ));
    Torus.projection[1091] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1092] = new Triangle(new Point3D(0.692910,-0.287013,
    zOff+0.000000
    ), new Point3D(0.724444,-0.194114,
    zOff+0.000000
    ), new Point3D(0.756797,-0.202783,
    zOff-0.125000
    ));
    Torus.projection[1092] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1093] = new Triangle(new Point3D(0.756797,-0.202783,
    zOff-0.125000
    ), new Point3D(0.723854,-0.299830,
    zOff-0.125000
    ), new Point3D(0.692910,-0.287013,
    zOff+0.000000
    ));
    Torus.projection[1093] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1094] = new Triangle(new Point3D(0.723854,-0.299830,
    zOff-0.125000
    ), new Point3D(0.756797,-0.202783,
    zOff-0.125000
    ), new Point3D(0.845185,-0.226466,
    zOff-0.216506
    ));
    Torus.projection[1094] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1095] = new Triangle(new Point3D(0.845185,-0.226466,
    zOff-0.216506
    ), new Point3D(0.808394,-0.334848,
    zOff-0.216506
    ), new Point3D(0.723854,-0.299830,
    zOff-0.125000
    ));
    Torus.projection[1095] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1096] = new Triangle(new Point3D(0.808394,-0.334848,
    zOff-0.216506
    ), new Point3D(0.845185,-0.226466,
    zOff-0.216506
    ), new Point3D(0.965926,-0.258819,
    zOff-0.250000
    ));
    Torus.projection[1096] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1097] = new Triangle(new Point3D(0.965926,-0.258819,
    zOff-0.250000
    ), new Point3D(0.923879,-0.382684,
    zOff-0.250000
    ), new Point3D(0.808394,-0.334848,
    zOff-0.216506
    ));
    Torus.projection[1097] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1098] = new Triangle(new Point3D(0.923879,-0.382684,
    zOff-0.250000
    ), new Point3D(0.965926,-0.258819,
    zOff-0.250000
    ), new Point3D(1.086667,-0.291171,
    zOff-0.216506
    ));
    Torus.projection[1098] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1099] = new Triangle(new Point3D(1.086667,-0.291171,
    zOff-0.216506
    ), new Point3D(1.039364,-0.430519,
    zOff-0.216506
    ), new Point3D(0.923879,-0.382684,
    zOff-0.250000
    ));
    Torus.projection[1099] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1100] = new Triangle(new Point3D(1.039364,-0.430519,
    zOff-0.216506
    ), new Point3D(1.086667,-0.291171,
    zOff-0.216506
    ), new Point3D(1.175055,-0.314855,
    zOff-0.125000
    ));
    Torus.projection[1100] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1101] = new Triangle(new Point3D(1.175055,-0.314855,
    zOff-0.125000
    ), new Point3D(1.123905,-0.465537,
    zOff-0.125000
    ), new Point3D(1.039364,-0.430519,
    zOff-0.216506
    ));
    Torus.projection[1101] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1102] = new Triangle(new Point3D(1.123905,-0.465537,
    zOff-0.125000
    ), new Point3D(1.175055,-0.314855,
    zOff-0.125000
    ), new Point3D(1.207407,-0.323523,
    zOff+0.000000
    ));
    Torus.projection[1102] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1103] = new Triangle(new Point3D(1.207407,-0.323523,
    zOff+0.000000
    ), new Point3D(1.154849,-0.478355,
    zOff+0.000000
    ), new Point3D(1.123905,-0.465537,
    zOff-0.125000
    ));
    Torus.projection[1103] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1104] = new Triangle(new Point3D(1.207407,-0.323523,
    zOff+0.000000
    ), new Point3D(1.239306,-0.163158,
    zOff+0.000000
    ), new Point3D(1.206099,-0.158786,
    zOff+0.125000
    ));
    Torus.projection[1104] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1105] = new Triangle(new Point3D(1.206099,-0.158786,
    zOff+0.125000
    ), new Point3D(1.175055,-0.314855,
    zOff+0.125000
    ), new Point3D(1.207407,-0.323523,
    zOff+0.000000
    ));
    Torus.projection[1105] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1106] = new Triangle(new Point3D(1.175055,-0.314855,
    zOff+0.125000
    ), new Point3D(1.206099,-0.158786,
    zOff+0.125000
    ), new Point3D(1.115376,-0.146842,
    zOff+0.216506
    ));
    Torus.projection[1106] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1107] = new Triangle(new Point3D(1.115376,-0.146842,
    zOff+0.216506
    ), new Point3D(1.086667,-0.291171,
    zOff+0.216506
    ), new Point3D(1.175055,-0.314855,
    zOff+0.125000
    ));
    Torus.projection[1107] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1108] = new Triangle(new Point3D(1.086667,-0.291171,
    zOff+0.216506
    ), new Point3D(1.115376,-0.146842,
    zOff+0.216506
    ), new Point3D(0.991445,-0.130526,
    zOff+0.250000
    ));
    Torus.projection[1108] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1109] = new Triangle(new Point3D(0.991445,-0.130526,
    zOff+0.250000
    ), new Point3D(0.965926,-0.258819,
    zOff+0.250000
    ), new Point3D(1.086667,-0.291171,
    zOff+0.216506
    ));
    Torus.projection[1109] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1110] = new Triangle(new Point3D(0.965926,-0.258819,
    zOff+0.250000
    ), new Point3D(0.991445,-0.130526,
    zOff+0.250000
    ), new Point3D(0.867514,-0.114210,
    zOff+0.216506
    ));
    Torus.projection[1110] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1111] = new Triangle(new Point3D(0.867514,-0.114210,
    zOff+0.216506
    ), new Point3D(0.845185,-0.226466,
    zOff+0.216506
    ), new Point3D(0.965926,-0.258819,
    zOff+0.250000
    ));
    Torus.projection[1111] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1112] = new Triangle(new Point3D(0.845185,-0.226466,
    zOff+0.216506
    ), new Point3D(0.867514,-0.114210,
    zOff+0.216506
    ), new Point3D(0.776791,-0.102266,
    zOff+0.125000
    ));
    Torus.projection[1112] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1113] = new Triangle(new Point3D(0.776791,-0.102266,
    zOff+0.125000
    ), new Point3D(0.756797,-0.202783,
    zOff+0.125000
    ), new Point3D(0.845185,-0.226466,
    zOff+0.216506
    ));
    Torus.projection[1113] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1114] = new Triangle(new Point3D(0.756797,-0.202783,
    zOff+0.125000
    ), new Point3D(0.776791,-0.102266,
    zOff+0.125000
    ), new Point3D(0.743584,-0.097895,
    zOff+0.000000
    ));
    Torus.projection[1114] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1115] = new Triangle(new Point3D(0.743584,-0.097895,
    zOff+0.000000
    ), new Point3D(0.724444,-0.194114,
    zOff+0.000000
    ), new Point3D(0.756797,-0.202783,
    zOff+0.125000
    ));
    Torus.projection[1115] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1116] = new Triangle(new Point3D(0.724444,-0.194114,
    zOff+0.000000
    ), new Point3D(0.743584,-0.097895,
    zOff+0.000000
    ), new Point3D(0.776791,-0.102266,
    zOff-0.125000
    ));
    Torus.projection[1116] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1117] = new Triangle(new Point3D(0.776791,-0.102266,
    zOff-0.125000
    ), new Point3D(0.756797,-0.202783,
    zOff-0.125000
    ), new Point3D(0.724444,-0.194114,
    zOff+0.000000
    ));
    Torus.projection[1117] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1118] = new Triangle(new Point3D(0.756797,-0.202783,
    zOff-0.125000
    ), new Point3D(0.776791,-0.102266,
    zOff-0.125000
    ), new Point3D(0.867514,-0.114210,
    zOff-0.216506
    ));
    Torus.projection[1118] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1119] = new Triangle(new Point3D(0.867514,-0.114210,
    zOff-0.216506
    ), new Point3D(0.845185,-0.226466,
    zOff-0.216506
    ), new Point3D(0.756797,-0.202783,
    zOff-0.125000
    ));
    Torus.projection[1119] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1120] = new Triangle(new Point3D(0.845185,-0.226466,
    zOff-0.216506
    ), new Point3D(0.867514,-0.114210,
    zOff-0.216506
    ), new Point3D(0.991445,-0.130526,
    zOff-0.250000
    ));
    Torus.projection[1120] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1121] = new Triangle(new Point3D(0.991445,-0.130526,
    zOff-0.250000
    ), new Point3D(0.965926,-0.258819,
    zOff-0.250000
    ), new Point3D(0.845185,-0.226466,
    zOff-0.216506
    ));
    Torus.projection[1121] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1122] = new Triangle(new Point3D(0.965926,-0.258819,
    zOff-0.250000
    ), new Point3D(0.991445,-0.130526,
    zOff-0.250000
    ), new Point3D(1.115376,-0.146842,
    zOff-0.216506
    ));
    Torus.projection[1122] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1123] = new Triangle(new Point3D(1.115376,-0.146842,
    zOff-0.216506
    ), new Point3D(1.086667,-0.291171,
    zOff-0.216506
    ), new Point3D(0.965926,-0.258819,
    zOff-0.250000
    ));
    Torus.projection[1123] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1124] = new Triangle(new Point3D(1.086667,-0.291171,
    zOff-0.216506
    ), new Point3D(1.115376,-0.146842,
    zOff-0.216506
    ), new Point3D(1.206099,-0.158786,
    zOff-0.125000
    ));
    Torus.projection[1124] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1125] = new Triangle(new Point3D(1.206099,-0.158786,
    zOff-0.125000
    ), new Point3D(1.175055,-0.314855,
    zOff-0.125000
    ), new Point3D(1.086667,-0.291171,
    zOff-0.216506
    ));
    Torus.projection[1125] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1126] = new Triangle(new Point3D(1.175055,-0.314855,
    zOff-0.125000
    ), new Point3D(1.206099,-0.158786,
    zOff-0.125000
    ), new Point3D(1.239306,-0.163158,
    zOff+0.000000
    ));
    Torus.projection[1126] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1127] = new Triangle(new Point3D(1.239306,-0.163158,
    zOff+0.000000
    ), new Point3D(1.207407,-0.323523,
    zOff+0.000000
    ), new Point3D(1.175055,-0.314855,
    zOff-0.125000
    ));
    Torus.projection[1127] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1128] = new Triangle(new Point3D(1.239306,-0.163158,
    zOff+0.000000
    ), new Point3D(1.250000,0.000000,
    zOff+0.000000
    ), new Point3D(1.216506,0.000000,
    zOff+0.125000
    ));
    Torus.projection[1128] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1129] = new Triangle(new Point3D(1.216506,0.000000,
    zOff+0.125000
    ), new Point3D(1.206099,-0.158786,
    zOff+0.125000
    ), new Point3D(1.239306,-0.163158,
    zOff+0.000000
    ));
    Torus.projection[1129] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1130] = new Triangle(new Point3D(1.206099,-0.158786,
    zOff+0.125000
    ), new Point3D(1.216506,0.000000,
    zOff+0.125000
    ), new Point3D(1.125000,0.000000,
    zOff+0.216506
    ));
    Torus.projection[1130] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1131] = new Triangle(new Point3D(1.125000,0.000000,
    zOff+0.216506
    ), new Point3D(1.115376,-0.146842,
    zOff+0.216506
    ), new Point3D(1.206099,-0.158786,
    zOff+0.125000
    ));
    Torus.projection[1131] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1132] = new Triangle(new Point3D(1.115376,-0.146842,
    zOff+0.216506
    ), new Point3D(1.125000,0.000000,
    zOff+0.216506
    ), new Point3D(1.000000,0.000000,
    zOff+0.250000
    ));
    Torus.projection[1132] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1133] = new Triangle(new Point3D(1.000000,0.000000,
    zOff+0.250000
    ), new Point3D(0.991445,-0.130526,
    zOff+0.250000
    ), new Point3D(1.115376,-0.146842,
    zOff+0.216506
    ));
    Torus.projection[1133] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1134] = new Triangle(new Point3D(0.991445,-0.130526,
    zOff+0.250000
    ), new Point3D(1.000000,0.000000,
    zOff+0.250000
    ), new Point3D(0.875000,0.000000,
    zOff+0.216506
    ));
    Torus.projection[1134] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1135] = new Triangle(new Point3D(0.875000,0.000000,
    zOff+0.216506
    ), new Point3D(0.867514,-0.114210,
    zOff+0.216506
    ), new Point3D(0.991445,-0.130526,
    zOff+0.250000
    ));
    Torus.projection[1135] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1136] = new Triangle(new Point3D(0.867514,-0.114210,
    zOff+0.216506
    ), new Point3D(0.875000,0.000000,
    zOff+0.216506
    ), new Point3D(0.783494,0.000000,
    zOff+0.125000
    ));
    Torus.projection[1136] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1137] = new Triangle(new Point3D(0.783494,0.000000,
    zOff+0.125000
    ), new Point3D(0.776791,-0.102266,
    zOff+0.125000
    ), new Point3D(0.867514,-0.114210,
    zOff+0.216506
    ));
    Torus.projection[1137] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1138] = new Triangle(new Point3D(0.776791,-0.102266,
    zOff+0.125000
    ), new Point3D(0.783494,0.000000,
    zOff+0.125000
    ), new Point3D(0.750000,0.000000,
    zOff+0.000000
    ));
    Torus.projection[1138] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1139] = new Triangle(new Point3D(0.750000,0.000000,
    zOff+0.000000
    ), new Point3D(0.743584,-0.097895,
    zOff+0.000000
    ), new Point3D(0.776791,-0.102266,
    zOff+0.125000
    ));
    Torus.projection[1139] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1140] = new Triangle(new Point3D(0.743584,-0.097895,
    zOff+0.000000
    ), new Point3D(0.750000,0.000000,
    zOff+0.000000
    ), new Point3D(0.783494,0.000000,
    zOff-0.125000
    ));
    Torus.projection[1140] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1141] = new Triangle(new Point3D(0.783494,0.000000,
    zOff-0.125000
    ), new Point3D(0.776791,-0.102266,
    zOff-0.125000
    ), new Point3D(0.743584,-0.097895,
    zOff+0.000000
    ));
    Torus.projection[1141] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1142] = new Triangle(new Point3D(0.776791,-0.102266,
    zOff-0.125000
    ), new Point3D(0.783494,0.000000,
    zOff-0.125000
    ), new Point3D(0.875000,0.000000,
    zOff-0.216506
    ));
    Torus.projection[1142] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1143] = new Triangle(new Point3D(0.875000,0.000000,
    zOff-0.216506
    ), new Point3D(0.867514,-0.114210,
    zOff-0.216506
    ), new Point3D(0.776791,-0.102266,
    zOff-0.125000
    ));
    Torus.projection[1143] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1144] = new Triangle(new Point3D(0.867514,-0.114210,
    zOff-0.216506
    ), new Point3D(0.875000,0.000000,
    zOff-0.216506
    ), new Point3D(1.000000,0.000000,
    zOff-0.250000
    ));
    Torus.projection[1144] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1145] = new Triangle(new Point3D(1.000000,0.000000,
    zOff-0.250000
    ), new Point3D(0.991445,-0.130526,
    zOff-0.250000
    ), new Point3D(0.867514,-0.114210,
    zOff-0.216506
    ));
    Torus.projection[1145] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1146] = new Triangle(new Point3D(0.991445,-0.130526,
    zOff-0.250000
    ), new Point3D(1.000000,0.000000,
    zOff-0.250000
    ), new Point3D(1.125000,0.000000,
    zOff-0.216506
    ));
    Torus.projection[1146] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1147] = new Triangle(new Point3D(1.125000,0.000000,
    zOff-0.216506
    ), new Point3D(1.115376,-0.146842,
    zOff-0.216506
    ), new Point3D(0.991445,-0.130526,
    zOff-0.250000
    ));
    Torus.projection[1147] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1148] = new Triangle(new Point3D(1.115376,-0.146842,
    zOff-0.216506
    ), new Point3D(1.125000,0.000000,
    zOff-0.216506
    ), new Point3D(1.216506,0.000000,
    zOff-0.125000
    ));
    Torus.projection[1148] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1149] = new Triangle(new Point3D(1.216506,0.000000,
    zOff-0.125000
    ), new Point3D(1.206099,-0.158786,
    zOff-0.125000
    ), new Point3D(1.115376,-0.146842,
    zOff-0.216506
    ));
    Torus.projection[1149] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1150] = new Triangle(new Point3D(1.250000,0.000000,
    zOff+0.000000
    ), new Point3D(1.239306,-0.163158,
    zOff+0.000000
    ), new Point3D(1.206099,-0.158786,
    zOff-0.125000
    ));
    Torus.projection[1150] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Torus.triangles[1151] = new Triangle(new Point3D(1.206099,-0.158786,
    zOff-0.125000
    ), new Point3D(1.216506,0.000000,
    zOff-0.125000
    ), new Point3D(1.250000,0.000000,
    zOff+0.000000
    ));
    Torus.projection[1151] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    
export default Torus