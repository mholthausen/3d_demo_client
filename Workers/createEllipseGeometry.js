define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-6f81ad4c","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-700c1da0","./GeometryAttributes-4fcfcf40","./AttributeCompression-9fc99391","./GeometryPipeline-e6a15a43","./EncodedCartesian3-4df2eabb","./IndexDatatype-53503fee","./IntersectionTests-7f3bcd5c","./Plane-b6058d9b","./GeometryOffsetAttribute-7350d9af","./VertexFormat-7572c785","./EllipseGeometryLibrary-8006bb76","./GeometryInstance-bee96382","./EllipseGeometry-363eca1c"],(function(e,t,r,n,c,a,i,o,s,d,b,f,l,m,p,y,u,G,C,E,A){"use strict";return function(t,r){return e.defined(r)&&(t=A.EllipseGeometry.unpack(t,r)),t._center=n.Cartesian3.clone(t._center),t._ellipsoid=n.Ellipsoid.clone(t._ellipsoid),A.EllipseGeometry.createGeometry(t)}}));