define(["./arrayRemoveDuplicates-216006b0","./BoundingRectangle-95b9a92c","./Transforms-e9dbfb40","./Cartesian2-49b1de22","./Check-6c0211bc","./ComponentDatatype-6d99a1ee","./CoplanarPolygonGeometryLibrary-f7abbc89","./when-54c2dc71","./GeometryAttribute-669569db","./GeometryAttributes-4fcfcf40","./GeometryInstance-6d66d24e","./GeometryPipeline-39e647e8","./IndexDatatype-46306178","./Math-44e92d6b","./PolygonGeometryLibrary-2ed36c92","./PolygonPipeline-72c97573","./VertexFormat-7572c785","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./OrientedBoundingBox-3669ebd4","./EllipsoidTangentPlane-c4704d0f","./IntersectionTests-6ead8677","./Plane-8f7e53d1","./AttributeCompression-8ecc041c","./EncodedCartesian3-7ff81df8","./ArcType-dc1c5aee","./EllipsoidRhumbLine-9b557f71"],(function(e,t,n,a,r,o,i,l,s,p,c,y,m,u,d,g,b,h,C,f,v,x,P,w,A,F,G){"use strict";var L=new a.Cartesian3,E=new t.BoundingRectangle,T=new a.Cartesian2,D=new a.Cartesian2,_=new a.Cartesian3,k=new a.Cartesian3,V=new a.Cartesian3,R=new a.Cartesian3,I=new a.Cartesian3,M=new a.Cartesian3,H=new n.Quaternion,B=new n.Matrix3,O=new n.Matrix3,z=new a.Cartesian3;function S(e){var t=(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).polygonHierarchy,n=l.defaultValue(e.vertexFormat,b.VertexFormat.DEFAULT);this._vertexFormat=b.VertexFormat.clone(n),this._polygonHierarchy=t,this._stRotation=l.defaultValue(e.stRotation,0),this._ellipsoid=a.Ellipsoid.clone(l.defaultValue(e.ellipsoid,a.Ellipsoid.WGS84)),this._workerName="createCoplanarPolygonGeometry",this.packedLength=d.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+b.VertexFormat.packedLength+a.Ellipsoid.packedLength+2}S.fromPositions=function(e){return new S({polygonHierarchy:{positions:(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).positions},vertexFormat:e.vertexFormat,stRotation:e.stRotation,ellipsoid:e.ellipsoid})},S.pack=function(e,t,n){return n=l.defaultValue(n,0),n=d.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,n),a.Ellipsoid.pack(e._ellipsoid,t,n),n+=a.Ellipsoid.packedLength,b.VertexFormat.pack(e._vertexFormat,t,n),n+=b.VertexFormat.packedLength,t[n++]=e._stRotation,t[n]=e.packedLength,t};var N=a.Ellipsoid.clone(a.Ellipsoid.UNIT_SPHERE),Q=new b.VertexFormat,j={polygonHierarchy:{}};return S.unpack=function(e,t,n){t=l.defaultValue(t,0);var r=d.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=r.startingIndex,delete r.startingIndex;var o=a.Ellipsoid.unpack(e,t,N);t+=a.Ellipsoid.packedLength;var i=b.VertexFormat.unpack(e,t,Q);t+=b.VertexFormat.packedLength;var s=e[t++];return t=e[t],(n=l.defined(n)?n:new S(j))._polygonHierarchy=r,n._ellipsoid=a.Ellipsoid.clone(o,n._ellipsoid),n._vertexFormat=b.VertexFormat.clone(i,n._vertexFormat),n._stRotation=s,n.packedLength=t,n},S.createGeometry=function(t){var r=t._vertexFormat,l=t._polygonHierarchy,b=t._stRotation,h=l.positions;if(!((h=e.arrayRemoveDuplicates(h,a.Cartesian3.equalsEpsilon,!0)).length<3)){var C=_,f=k,v=V,x=I,P=M;if(i.CoplanarPolygonGeometryLibrary.computeProjectTo2DArguments(h,R,x,P)){C=a.Cartesian3.cross(x,P,C),C=a.Cartesian3.normalize(C,C),a.Cartesian3.equalsEpsilon(R,a.Cartesian3.ZERO,u.CesiumMath.EPSILON6)||(w=t._ellipsoid.geodeticSurfaceNormal(R,z),a.Cartesian3.dot(C,w)<0&&(C=a.Cartesian3.negate(C,C),x=a.Cartesian3.negate(x,x)));var w=i.CoplanarPolygonGeometryLibrary.createProjectPointsTo2DFunction(R,x,P),A=i.CoplanarPolygonGeometryLibrary.createProjectPointTo2DFunction(R,x,P);r.tangent&&(f=a.Cartesian3.clone(x,f)),r.bitangent&&(v=a.Cartesian3.clone(P,v)),w=(l=d.PolygonGeometryLibrary.polygonsFromHierarchy(l,w,!1)).hierarchy;var F=l.polygons;if(0!==w.length){h=w[0].outerRing,l=n.BoundingSphere.fromPoints(h);for(var G=d.PolygonGeometryLibrary.computeBoundingRectangle(C,A,h,b,E),S=[],N=0;N<F.length;N++){var Q=new c.GeometryInstance({geometry:function(e,t,r,i,l,c,y,d){var b=e.positions,h=g.PolygonPipeline.triangulate(e.positions2D,e.holes);h.length<3&&(h=[0,1,2]),(e=m.IndexDatatype.createTypedArray(b.length,h.length)).set(h);var C=B;0!==i?(h=n.Quaternion.fromAxisAngle(c,i,H),C=n.Matrix3.fromQuaternion(h,C),(t.tangent||t.bitangent)&&(h=n.Quaternion.fromAxisAngle(c,-i,H),x=n.Matrix3.fromQuaternion(h,O),y=a.Cartesian3.normalize(n.Matrix3.multiplyByVector(x,y,y),y),t.bitangent&&(d=a.Cartesian3.normalize(a.Cartesian3.cross(c,y,d),d)))):C=n.Matrix3.clone(n.Matrix3.IDENTITY,C);var f=D;t.st&&(f.x=r.x,f.y=r.y);for(var v=b.length,x=3*v,P=new Float64Array(x),w=t.normal?new Float32Array(x):void 0,A=t.tangent?new Float32Array(x):void 0,F=t.bitangent?new Float32Array(x):void 0,G=t.st?new Float32Array(2*v):void 0,E=0,_=0,k=0,V=0,R=0,I=0;I<v;I++){var M,z=b[I];P[E++]=z.x,P[E++]=z.y,P[E++]=z.z,t.st&&(M=l(n.Matrix3.multiplyByVector(C,z,L),T),a.Cartesian2.subtract(M,f,M),z=u.CesiumMath.clamp(M.x/r.width,0,1),M=u.CesiumMath.clamp(M.y/r.height,0,1),G[R++]=z,G[R++]=M),t.normal&&(w[_++]=c.x,w[_++]=c.y,w[_++]=c.z),t.tangent&&(A[V++]=y.x,A[V++]=y.y,A[V++]=y.z),t.bitangent&&(F[k++]=d.x,F[k++]=d.y,F[k++]=d.z)}return x=new p.GeometryAttributes,t.position&&(x.position=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:P})),t.normal&&(x.normal=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:w})),t.tangent&&(x.tangent=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:A})),t.bitangent&&(x.bitangent=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:F})),t.st&&(x.st=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:G})),new s.Geometry({attributes:x,indices:e,primitiveType:s.PrimitiveType.TRIANGLES})}(F[N],r,G,b,A,C,f,v)});S.push(Q)}return(w=y.GeometryPipeline.combineInstances(S)[0]).attributes.position.values=new Float64Array(w.attributes.position.values),w.indices=m.IndexDatatype.createTypedArray(w.attributes.position.values.length/3,w.indices),h=w.attributes,r.position||delete h.position,new s.Geometry({attributes:h,indices:w.indices,primitiveType:w.primitiveType,boundingSphere:l})}}}},function(e,t){return l.defined(t)&&(e=S.unpack(e,t)),S.createGeometry(e)}}));