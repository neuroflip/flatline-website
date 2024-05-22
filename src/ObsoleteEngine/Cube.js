import Util from "./Util";
import Point3D from "./Point3D";
import Point2D from "./Point2D";
import Triangle from "./Triangle";

const Cube = {
        triangles: Util.createArray(12),
        projection: Util.createArray(12)
    }, zOff = 10;
    Cube.triangles[0] = new Triangle(new Point3D(-50.000000,-50.000000,
    zOff-50.000000
    ), new Point3D(-50.000000,-50.000000,
    zOff+50.000000
    ), new Point3D(-50.000000,50.000000,
    zOff+50.000000
    ));
    Cube.projection[0] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Cube.triangles[1] = new Triangle(new Point3D(-50.000000,50.000000,
    zOff+50.000000
    ), new Point3D(-50.000000,50.000000,
    zOff-50.000000
    ), new Point3D(-50.000000,-50.000000,
    zOff-50.000000
    ));
    Cube.projection[1] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Cube.triangles[2] = new Triangle(new Point3D(-50.000000,50.000000,
    zOff-50.000000
    ), new Point3D(-50.000000,50.000000,
    zOff+50.000000
    ), new Point3D(50.000000,50.000000,
    zOff+50.000000
    ));
    Cube.projection[2] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Cube.triangles[3] = new Triangle(new Point3D(50.000000,50.000000,
    zOff+50.000000
    ), new Point3D(50.000000,50.000000,
    zOff-50.000000
    ), new Point3D(-50.000000,50.000000,
    zOff-50.000000
    ));
    Cube.projection[3] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Cube.triangles[4] = new Triangle(new Point3D(50.000000,50.000000,
    zOff-50.000000
    ), new Point3D(50.000000,50.000000,
    zOff+50.000000
    ), new Point3D(50.000000,-50.000000,
    zOff+50.000000
    ));
    Cube.projection[4] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Cube.triangles[5] = new Triangle(new Point3D(50.000000,-50.000000,
    zOff+50.000000
    ), new Point3D(50.000000,-50.000000,
    zOff-50.000000
    ), new Point3D(50.000000,50.000000,
    zOff-50.000000
    ));
    Cube.projection[5] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Cube.triangles[6] = new Triangle(new Point3D(-50.000000,-50.000000,
    zOff+50.000000
    ), new Point3D(-50.000000,-50.000000,
    zOff-50.000000
    ), new Point3D(50.000000,-50.000000,
    zOff-50.000000
    ));
    Cube.projection[6] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Cube.triangles[7] = new Triangle(new Point3D(50.000000,-50.000000,
    zOff-50.000000
    ), new Point3D(50.000000,-50.000000,
    zOff+50.000000
    ), new Point3D(-50.000000,-50.000000,
    zOff+50.000000
    ));
    Cube.projection[7] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Cube.triangles[8] = new Triangle(new Point3D(50.000000,-50.000000,
    zOff-50.000000
    ), new Point3D(-50.000000,-50.000000,
    zOff-50.000000
    ), new Point3D(-50.000000,50.000000,
    zOff-50.000000
    ));
    Cube.projection[8] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Cube.triangles[9] = new Triangle(new Point3D(-50.000000,50.000000,
    zOff-50.000000
    ), new Point3D(50.000000,50.000000,
    zOff-50.000000
    ), new Point3D(50.000000,-50.000000,
    zOff-50.000000
    ));
    Cube.projection[9] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Cube.triangles[10] = new Triangle(new Point3D(50.000000,50.000000,
    zOff+50.000000
    ), new Point3D(-50.000000,50.000000,
    zOff+50.000000
    ), new Point3D(-50.000000,-50.000000,
    zOff+50.000000
    ));
    Cube.projection[10] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));
    Cube.triangles[11] = new Triangle(new Point3D(-50.000000,-50.000000,
    zOff+50.000000
    ), new Point3D(50.000000,-50.000000,
    zOff+50.000000
    ), new Point3D(50.000000,50.000000,
    zOff+50.000000
    ));
    Cube.projection[11] = new Triangle(new Point2D(0,0), new Point2D(0,0), new Point2D(0,0));

    
export default Cube;
    