define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-6f81ad4c","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-700c1da0","./GeometryAttributes-4fcfcf40","./AttributeCompression-9fc99391","./GeometryPipeline-e6a15a43","./EncodedCartesian3-4df2eabb","./IndexDatatype-53503fee","./IntersectionTests-7f3bcd5c","./Plane-b6058d9b","./GeometryOffsetAttribute-7350d9af","./GeometryInstance-bee96382","./arrayRemoveDuplicates-ebc732b0","./EllipsoidTangentPlane-c3f203b0","./ArcType-dc1c5aee","./EllipsoidRhumbLine-c704bf4c","./PolygonPipeline-1aceedbc","./PolygonGeometryLibrary-82c2c5a4"],(function(e,t,i,r,o,n,a,l,s,y,u,p,d,c,f,g,h,m,b,P,E,A,_,v){"use strict";var G=[],L=[];function T(t){var o,n=t.polygonHierarchy,a=e.defaultValue(t.ellipsoid,r.Ellipsoid.WGS84),l=e.defaultValue(t.granularity,i.CesiumMath.RADIANS_PER_DEGREE),s=e.defaultValue(t.perPositionHeight,!1),y=s&&e.defined(t.extrudedHeight),u=e.defaultValue(t.arcType,E.ArcType.GEODESIC),p=e.defaultValue(t.height,0),d=e.defaultValue(t.extrudedHeight,p);y||(o=Math.max(p,d),d=Math.min(p,d),p=o),this._ellipsoid=r.Ellipsoid.clone(a),this._granularity=l,this._height=p,this._extrudedHeight=d,this._arcType=u,this._polygonHierarchy=n,this._perPositionHeight=s,this._perPositionHeightExtrude=y,this._offsetAttribute=t.offsetAttribute,this._workerName="createPolygonOutlineGeometry",this.packedLength=v.PolygonGeometryLibrary.computeHierarchyPackedLength(n)+r.Ellipsoid.packedLength+8}T.pack=function(t,i,o){return o=e.defaultValue(o,0),o=v.PolygonGeometryLibrary.packPolygonHierarchy(t._polygonHierarchy,i,o),r.Ellipsoid.pack(t._ellipsoid,i,o),o+=r.Ellipsoid.packedLength,i[o++]=t._height,i[o++]=t._extrudedHeight,i[o++]=t._granularity,i[o++]=t._perPositionHeightExtrude?1:0,i[o++]=t._perPositionHeight?1:0,i[o++]=t._arcType,i[o++]=e.defaultValue(t._offsetAttribute,-1),i[o]=t.packedLength,i};var H=r.Ellipsoid.clone(r.Ellipsoid.UNIT_SPHERE),C={polygonHierarchy:{}};return T.unpack=function(t,i,o){i=e.defaultValue(i,0);var n=v.PolygonGeometryLibrary.unpackPolygonHierarchy(t,i);i=n.startingIndex,delete n.startingIndex;var a=r.Ellipsoid.unpack(t,i,H);i+=r.Ellipsoid.packedLength;var l=t[i++],s=t[i++],y=t[i++],u=1===t[i++],p=1===t[i++],d=t[i++],c=t[i++];return i=t[i],e.defined(o)||(o=new T(C)),o._polygonHierarchy=n,o._ellipsoid=r.Ellipsoid.clone(a,o._ellipsoid),o._height=l,o._extrudedHeight=s,o._granularity=y,o._perPositionHeight=p,o._perPositionHeightExtrude=u,o._arcType=d,o._offsetAttribute=-1===c?void 0:c,o.packedLength=i,o},T.fromPositions=function(t){return new T({polygonHierarchy:{positions:(t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT)).positions},height:t.height,extrudedHeight:t.extrudedHeight,ellipsoid:t.ellipsoid,granularity:t.granularity,perPositionHeight:t.perPositionHeight,arcType:t.arcType,offsetAttribute:t.offsetAttribute})},T.createGeometry=function(t){var r=t._ellipsoid,n=t._granularity,a=t._polygonHierarchy,u=t._perPositionHeight,d=t._arcType,f=v.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(a,!u,r);if(0!==f.length){var g,b,A,T,H,C,O=[],D=i.CesiumMath.chordLength(n,r.maximumRadius),x=t._height,I=t._extrudedHeight;if(t._perPositionHeightExtrude||!i.CesiumMath.equalsEpsilon(x,I,0,i.CesiumMath.EPSILON2))for(g=0;g<f.length;g++)(T=function(e,t,i,r,o){var n,a=P.EllipsoidTangentPlane.fromPoints(t,e).projectPointsOntoPlane(t,G);_.PolygonPipeline.computeWindingOrder2D(a)===_.WindingOrder.CLOCKWISE&&(a.reverse(),t=t.slice().reverse());var u=t.length,p=new Array(u),d=0;if(r)for(n=new Float64Array(2*u*3*2),O=0;O<u;++O){p[O]=d/3;var f=t[O],g=t[(O+1)%u];n[d++]=f.x,n[d++]=f.y,n[d++]=f.z,n[d++]=g.x,n[d++]=g.y,n[d++]=g.z}else{var h,b=0;if(o===E.ArcType.GEODESIC)for(O=0;O<u;O++)b+=v.PolygonGeometryLibrary.subdivideLineCount(t[O],t[(O+1)%u],i);else if(o===E.ArcType.RHUMB)for(O=0;O<u;O++)b+=v.PolygonGeometryLibrary.subdivideRhumbLineCount(e,t[O],t[(O+1)%u],i);for(n=new Float64Array(3*b*2),O=0;O<u;++O){p[O]=d/3,o===E.ArcType.GEODESIC?h=v.PolygonGeometryLibrary.subdivideLine(t[O],t[(O+1)%u],i,L):o===E.ArcType.RHUMB&&(h=v.PolygonGeometryLibrary.subdivideRhumbLine(e,t[O],t[(O+1)%u],i,L));for(var A=h.length,T=0;T<A;++T)n[d++]=h[T]}}u=n.length/6;for(var H=p.length,C=(r=2*(2*u+H),c.IndexDatatype.createTypedArray(u+H,r)),O=(d=0,0);O<u;++O)C[d++]=O,C[d++]=(O+1)%u,C[d++]=O+u,C[d++]=(O+1)%u+u;for(O=0;O<H;O++){var D=p[O];C[d++]=D,C[d++]=D+u}return new m.GeometryInstance({geometry:new s.Geometry({attributes:new y.GeometryAttributes({position:new s.GeometryAttribute({componentDatatype:l.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n})}),indices:C,primitiveType:s.PrimitiveType.LINES})})}(r,f[g],D,u,d)).geometry=v.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(T.geometry,x,I,r,u),e.defined(t._offsetAttribute)&&(b=T.geometry.attributes.position.values.length/3,A=new Uint8Array(b),A=t._offsetAttribute===h.GeometryOffsetAttribute.TOP?h.arrayFill(A,1,0,b/2):(C=t._offsetAttribute===h.GeometryOffsetAttribute.NONE?0:1,h.arrayFill(A,C)),T.geometry.attributes.applyOffset=new s.GeometryAttribute({componentDatatype:l.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:A})),O.push(T);else for(g=0;g<f.length;g++)(T=function(e,t,i,r,o){var n,a=P.EllipsoidTangentPlane.fromPoints(t,e).projectPointsOntoPlane(t,G);_.PolygonPipeline.computeWindingOrder2D(a)===_.WindingOrder.CLOCKWISE&&(a.reverse(),t=t.slice().reverse());var u=t.length,p=0;if(r)for(n=new Float64Array(2*u*3),H=0;H<u;H++){var d=t[H],f=t[(H+1)%u];n[p++]=d.x,n[p++]=d.y,n[p++]=d.z,n[p++]=f.x,n[p++]=f.y,n[p++]=f.z}else{var g,h=0;if(o===E.ArcType.GEODESIC)for(H=0;H<u;H++)h+=v.PolygonGeometryLibrary.subdivideLineCount(t[H],t[(H+1)%u],i);else if(o===E.ArcType.RHUMB)for(H=0;H<u;H++)h+=v.PolygonGeometryLibrary.subdivideRhumbLineCount(e,t[H],t[(H+1)%u],i);for(n=new Float64Array(3*h),H=0;H<u;H++){o===E.ArcType.GEODESIC?g=v.PolygonGeometryLibrary.subdivideLine(t[H],t[(H+1)%u],i,L):o===E.ArcType.RHUMB&&(g=v.PolygonGeometryLibrary.subdivideRhumbLine(e,t[H],t[(H+1)%u],i,L));for(var b=g.length,A=0;A<b;++A)n[p++]=g[A]}}r=2*(u=n.length/3);for(var T=c.IndexDatatype.createTypedArray(u,r),H=(p=0,0);H<u-1;H++)T[p++]=H,T[p++]=H+1;return T[p++]=u-1,T[p++]=0,new m.GeometryInstance({geometry:new s.Geometry({attributes:new y.GeometryAttributes({position:new s.GeometryAttribute({componentDatatype:l.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n})}),indices:T,primitiveType:s.PrimitiveType.LINES})})}(r,f[g],D,u,d)).geometry.attributes.position.values=_.PolygonPipeline.scaleToGeodeticHeight(T.geometry.attributes.position.values,x,r,!u),e.defined(t._offsetAttribute)&&(H=T.geometry.attributes.position.values.length,H=new Uint8Array(H/3),C=t._offsetAttribute===h.GeometryOffsetAttribute.NONE?0:1,h.arrayFill(H,C),T.geometry.attributes.applyOffset=new s.GeometryAttribute({componentDatatype:l.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:H})),O.push(T);return a=p.GeometryPipeline.combineInstances(O)[0],n=o.BoundingSphere.fromVertices(a.attributes.position.values),new s.Geometry({attributes:a.attributes,indices:a.indices,primitiveType:a.primitiveType,boundingSphere:n,offsetAttribute:t._offsetAttribute})}},function(t,i){return e.defined(i)&&(t=T.unpack(t,i)),t._ellipsoid=r.Ellipsoid.clone(t._ellipsoid),T.createGeometry(t)}}));