define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-6f81ad4c","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-700c1da0","./GeometryAttributes-4fcfcf40","./AttributeCompression-9fc99391","./GeometryPipeline-e6a15a43","./EncodedCartesian3-4df2eabb","./IndexDatatype-53503fee","./IntersectionTests-7f3bcd5c","./Plane-b6058d9b","./GeometryOffsetAttribute-7350d9af","./VertexFormat-7572c785","./EllipseGeometryLibrary-8006bb76","./GeometryInstance-bee96382","./EllipseGeometry-363eca1c"],(function(e,t,i,r,o,n,a,s,l,d,m,c,u,p,y,_,h,G,x,f,g){"use strict";function b(t){var i=(t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT)).radius;t={center:t.center,semiMajorAxis:i,semiMinorAxis:i,ellipsoid:t.ellipsoid,height:t.height,extrudedHeight:t.extrudedHeight,granularity:t.granularity,vertexFormat:t.vertexFormat,stRotation:t.stRotation,shadowVolume:t.shadowVolume},this._ellipseGeometry=new g.EllipseGeometry(t),this._workerName="createCircleGeometry"}b.packedLength=g.EllipseGeometry.packedLength,b.pack=function(e,t,i){return g.EllipseGeometry.pack(e._ellipseGeometry,t,i)};var E=new g.EllipseGeometry({center:new r.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),v={center:new r.Cartesian3,radius:void 0,ellipsoid:r.Ellipsoid.clone(r.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new G.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return b.unpack=function(t,i,o){return i=g.EllipseGeometry.unpack(t,i,E),v.center=r.Cartesian3.clone(i._center,v.center),v.ellipsoid=r.Ellipsoid.clone(i._ellipsoid,v.ellipsoid),v.height=i._height,v.extrudedHeight=i._extrudedHeight,v.granularity=i._granularity,v.vertexFormat=G.VertexFormat.clone(i._vertexFormat,v.vertexFormat),v.stRotation=i._stRotation,v.shadowVolume=i._shadowVolume,e.defined(o)?(v.semiMajorAxis=i._semiMajorAxis,v.semiMinorAxis=i._semiMinorAxis,o._ellipseGeometry=new g.EllipseGeometry(v),o):(v.radius=i._semiMajorAxis,new b(v))},b.createGeometry=function(e){return g.EllipseGeometry.createGeometry(e._ellipseGeometry)},b.createShadowVolume=function(e,t,i){var r=e._ellipseGeometry._granularity,o=e._ellipseGeometry._ellipsoid;return t=t(r,o),i=i(r,o),new b({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:o,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:t,height:i,vertexFormat:G.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(b.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(t,i){return e.defined(i)&&(t=b.unpack(t,i)),t._ellipseGeometry._center=r.Cartesian3.clone(t._ellipseGeometry._center),t._ellipseGeometry._ellipsoid=r.Ellipsoid.clone(t._ellipseGeometry._ellipsoid),b.createGeometry(t)}}));