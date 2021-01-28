define(["exports","./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-6f81ad4c","./ComponentDatatype-6d99a1ee","./GeometryAttribute-700c1da0","./GeometryAttributes-4fcfcf40","./IndexDatatype-53503fee","./GeometryOffsetAttribute-7350d9af","./EllipseGeometryLibrary-8006bb76"],(function(e,t,i,r,a,n,o,s,u,l,d,p){"use strict";var c=new a.Cartesian3,f=new a.Cartesian3,m=new n.BoundingSphere,h=new n.BoundingSphere;function y(e){var i=(e=t.defaultValue(e,t.defaultValue.EMPTY_OBJECT)).center,n=t.defaultValue(e.ellipsoid,a.Ellipsoid.WGS84),o=e.semiMajorAxis,s=e.semiMinorAxis,u=t.defaultValue(e.granularity,r.CesiumMath.RADIANS_PER_DEGREE),l=t.defaultValue(e.height,0),d=t.defaultValue(e.extrudedHeight,l);this._center=a.Cartesian3.clone(i),this._semiMajorAxis=o,this._semiMinorAxis=s,this._ellipsoid=a.Ellipsoid.clone(n),this._rotation=t.defaultValue(e.rotation,0),this._height=Math.max(d,l),this._granularity=u,this._extrudedHeight=Math.min(d,l),this._numberOfVerticalLines=Math.max(t.defaultValue(e.numberOfVerticalLines,16),0),this._offsetAttribute=e.offsetAttribute,this._workerName="createEllipseOutlineGeometry"}y.packedLength=a.Cartesian3.packedLength+a.Ellipsoid.packedLength+8,y.pack=function(e,i,r){return r=t.defaultValue(r,0),a.Cartesian3.pack(e._center,i,r),r+=a.Cartesian3.packedLength,a.Ellipsoid.pack(e._ellipsoid,i,r),r+=a.Ellipsoid.packedLength,i[r++]=e._semiMajorAxis,i[r++]=e._semiMinorAxis,i[r++]=e._rotation,i[r++]=e._height,i[r++]=e._granularity,i[r++]=e._extrudedHeight,i[r++]=e._numberOfVerticalLines,i[r]=t.defaultValue(e._offsetAttribute,-1),i};var b=new a.Cartesian3,A=new a.Ellipsoid,_={center:b,ellipsoid:A,semiMajorAxis:void 0,semiMinorAxis:void 0,rotation:void 0,height:void 0,granularity:void 0,extrudedHeight:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};y.unpack=function(e,i,r){i=t.defaultValue(i,0);var n=a.Cartesian3.unpack(e,i,b);i+=a.Cartesian3.packedLength;var o=a.Ellipsoid.unpack(e,i,A);i+=a.Ellipsoid.packedLength;var s=e[i++],u=e[i++],l=e[i++],d=e[i++],p=e[i++],c=e[i++],f=e[i++];return i=e[i],t.defined(r)?(r._center=a.Cartesian3.clone(n,r._center),r._ellipsoid=a.Ellipsoid.clone(o,r._ellipsoid),r._semiMajorAxis=s,r._semiMinorAxis=u,r._rotation=l,r._height=d,r._granularity=p,r._extrudedHeight=c,r._numberOfVerticalLines=f,r._offsetAttribute=-1===i?void 0:i,r):(_.height=d,_.extrudedHeight=c,_.granularity=p,_.rotation=l,_.semiMajorAxis=s,_.semiMinorAxis=u,_.numberOfVerticalLines=f,_.offsetAttribute=-1===i?void 0:i,new y(_))},y.createGeometry=function(e){if(!(e._semiMajorAxis<=0||e._semiMinorAxis<=0)){var i,y=e._height,b=e._extrudedHeight,A=!r.CesiumMath.equalsEpsilon(y,b,0,r.CesiumMath.EPSILON2);return e._center=e._ellipsoid.scaleToGeodeticSurface(e._center,e._center),y={center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,ellipsoid:e._ellipsoid,rotation:e._rotation,height:y,granularity:e._granularity,numberOfVerticalLines:e._numberOfVerticalLines},A?(y.extrudedHeight=b,y.offsetAttribute=e._offsetAttribute,i=function(e){var i=e.center,f=e.ellipsoid,y=e.semiMajorAxis,b=a.Cartesian3.multiplyByScalar(f.geodeticSurfaceNormal(i,c),e.height,c);m.center=a.Cartesian3.add(i,b,m.center),m.radius=y,b=a.Cartesian3.multiplyByScalar(f.geodeticSurfaceNormal(i,b),e.extrudedHeight,b),h.center=a.Cartesian3.add(i,b,h.center),h.radius=y,i=p.EllipseGeometryLibrary.computeEllipsePositions(e,!1,!0).outerPositions,i=(b=new u.GeometryAttributes({position:new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:p.EllipseGeometryLibrary.raisePositionsToHeight(i,e,!0)})})).position.values,y=n.BoundingSphere.union(m,h);var A=i.length/3;t.defined(e.offsetAttribute)&&(_=new Uint8Array(A),_=e.offsetAttribute===d.GeometryOffsetAttribute.TOP?d.arrayFill(_,1,0,A/2):(i=e.offsetAttribute===d.GeometryOffsetAttribute.NONE?0:1,d.arrayFill(_,i)),b.applyOffset=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:_}));var _=t.defaultValue(e.numberOfVerticalLines,16),g=(_=r.CesiumMath.clamp(_,0,A/2),l.IndexDatatype.createTypedArray(A,2*A+2*_));A/=2;var x=0;for(M=0;M<A;++M)g[x++]=M,g[x++]=(M+1)%A,g[x++]=M+A,g[x++]=(M+1)%A+A;if(0<_){e=Math.min(_,A);for(var E=Math.round(A/e),v=Math.min(E*_,A),M=0;M<v;M+=E)g[x++]=M,g[x++]=M+A}return{boundingSphere:y,attributes:b,indices:g}}(y)):(i=function(e){var t=e.center;f=a.Cartesian3.multiplyByScalar(e.ellipsoid.geodeticSurfaceNormal(t,f),e.height,f),f=a.Cartesian3.add(t,f,f);for(var i=new n.BoundingSphere(f,e.semiMajorAxis),r=(t=p.EllipseGeometryLibrary.computeEllipsePositions(e,!1,!0).outerPositions,e=new u.GeometryAttributes({position:new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:p.EllipseGeometryLibrary.raisePositionsToHeight(t,e,!1)})}),t.length/3),d=l.IndexDatatype.createTypedArray(r,2*r),c=0,m=0;m<r;++m)d[c++]=m,d[c++]=(m+1)%r;return{boundingSphere:i,attributes:e,indices:d}}(y),t.defined(e._offsetAttribute)&&(b=i.attributes.position.values.length,y=new Uint8Array(b/3),b=e._offsetAttribute===d.GeometryOffsetAttribute.NONE?0:1,d.arrayFill(y,b),i.attributes.applyOffset=new s.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:y}))),new s.Geometry({attributes:i.attributes,indices:i.indices,primitiveType:s.PrimitiveType.LINES,boundingSphere:i.boundingSphere,offsetAttribute:e._offsetAttribute})}},e.EllipseOutlineGeometry=y}));