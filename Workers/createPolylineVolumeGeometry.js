define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-6f81ad4c","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-700c1da0","./GeometryAttributes-4fcfcf40","./AttributeCompression-9fc99391","./GeometryPipeline-e6a15a43","./EncodedCartesian3-4df2eabb","./IndexDatatype-53503fee","./IntersectionTests-7f3bcd5c","./Plane-b6058d9b","./VertexFormat-7572c785","./arrayRemoveDuplicates-ebc732b0","./BoundingRectangle-4f9baeda","./EllipsoidTangentPlane-c3f203b0","./EllipsoidRhumbLine-c704bf4c","./PolygonPipeline-1aceedbc","./PolylineVolumeGeometryLibrary-0216ec14","./EllipsoidGeodesic-30fae80b","./PolylinePipeline-7685bebd"],(function(e,t,n,i,r,a,o,l,s,p,d,c,u,g,y,m,h,f,b,v,E,P,_,x,k){"use strict";var C={};function V(t,n){e.defined(C[t])||(C[t]=!0,console.warn(e.defaultValue(n,t)))}function L(t){var r=(t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT)).polylinePositions,a=t.shapePositions;this._positions=r,this._shape=a,this._ellipsoid=i.Ellipsoid.clone(e.defaultValue(t.ellipsoid,i.Ellipsoid.WGS84)),this._cornerType=e.defaultValue(t.cornerType,_.CornerType.ROUNDED),this._vertexFormat=h.VertexFormat.clone(e.defaultValue(t.vertexFormat,h.VertexFormat.DEFAULT)),this._granularity=e.defaultValue(t.granularity,n.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeGeometry",r=1+r.length*i.Cartesian3.packedLength,r+=1+a.length*i.Cartesian2.packedLength,this.packedLength=r+i.Ellipsoid.packedLength+h.VertexFormat.packedLength+2}V.geometryOutlines="Entity geometry outlines are unsupported on terrain. Outlines will be disabled. To enable outlines, disable geometry terrain clamping by explicitly setting height to 0.",V.geometryZIndex="Entity geometry with zIndex are unsupported when height or extrudedHeight are defined.  zIndex will be ignored",V.geometryHeightReference="Entity corridor, ellipse, polygon or rectangle with heightReference must also have a defined height.  heightReference will be ignored",V.geometryExtrudedHeightReference="Entity corridor, ellipse, polygon or rectangle with extrudedHeightReference must also have a defined extrudedHeight.  extrudedHeightReference will be ignored",L.pack=function(t,n,r){var a;r=e.defaultValue(r,0);var o=t._positions,l=o.length;for(n[r++]=l,a=0;a<l;++a,r+=i.Cartesian3.packedLength)i.Cartesian3.pack(o[a],n,r);var s=t._shape;for(l=s.length,n[r++]=l,a=0;a<l;++a,r+=i.Cartesian2.packedLength)i.Cartesian2.pack(s[a],n,r);return i.Ellipsoid.pack(t._ellipsoid,n,r),r+=i.Ellipsoid.packedLength,h.VertexFormat.pack(t._vertexFormat,n,r),r+=h.VertexFormat.packedLength,n[r++]=t._cornerType,n[r]=t._granularity,n};var w=i.Ellipsoid.clone(i.Ellipsoid.UNIT_SPHERE),F=new h.VertexFormat,T={polylinePositions:void 0,shapePositions:void 0,ellipsoid:w,vertexFormat:F,cornerType:void 0,granularity:void 0};L.unpack=function(t,n,r){n=e.defaultValue(n,0);for(var a=t[n++],o=new Array(a),l=0;l<a;++l,n+=i.Cartesian3.packedLength)o[l]=i.Cartesian3.unpack(t,n);a=t[n++];var s=new Array(a);for(l=0;l<a;++l,n+=i.Cartesian2.packedLength)s[l]=i.Cartesian2.unpack(t,n);var p=i.Ellipsoid.unpack(t,n,w);n+=i.Ellipsoid.packedLength;var d=h.VertexFormat.unpack(t,n,F);n+=h.VertexFormat.packedLength;var c=t[n++],u=t[n];return e.defined(r)?(r._positions=o,r._shape=s,r._ellipsoid=i.Ellipsoid.clone(p,r._ellipsoid),r._vertexFormat=h.VertexFormat.clone(d,r._vertexFormat),r._cornerType=c,r._granularity=u,r):(T.polylinePositions=o,T.shapePositions=s,T.cornerType=c,T.granularity=u,new L(T))};var G=new b.BoundingRectangle;return L.createGeometry=function(e){var t=e._positions,n=f.arrayRemoveDuplicates(t,i.Cartesian3.equalsEpsilon),a=e._shape;if(a=_.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(a),!(n.length<2||a.length<3))return P.PolygonPipeline.computeWindingOrder2D(a)===P.WindingOrder.CLOCKWISE&&a.reverse(),t=b.BoundingRectangle.fromPoints(a,G),function(e,t,n,i){var a=new p.GeometryAttributes;i.position&&(a.position=new s.GeometryAttribute({componentDatatype:l.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e}));var o,d,u,y,m,h=t.length,f=e.length/3,b=(f-2*h)/(2*h),v=P.PolygonPipeline.triangulate(t),E=(b-1)*h*6+2*v.length,_=g.IndexDatatype.createTypedArray(f,E),x=2*h,k=0;for(R=0;R<b-1;R++){for(o=0;o<h-1;o++)m=(d=2*o+R*h*2)+x,y=(u=d+1)+x,_[k++]=u,_[k++]=d,_[k++]=y,_[k++]=y,_[k++]=d,_[k++]=m;y=(u=1+(d=2*h-2+R*h*2))+x,m=d+x,_[k++]=u,_[k++]=d,_[k++]=y,_[k++]=y,_[k++]=d,_[k++]=m}if(i.st||i.tangent||i.bitangent){for(var C,L,w=new Float32Array(2*f),F=1/(b-1),T=1/n.height,G=n.height/2,A=0,R=0;R<b;R++){for(C=R*F,L=T*(t[0].y+G),w[A++]=C,w[A++]=L,o=1;o<h;o++)L=T*(t[o].y+G),w[A++]=C,w[A++]=L,w[A++]=C,w[A++]=L;L=T*(t[0].y+G),w[A++]=C,w[A++]=L}for(o=0;o<h;o++)C=0,L=T*(t[o].y+G),w[A++]=C,w[A++]=L;for(o=0;o<h;o++)C=(b-1)*F,L=T*(t[o].y+G),w[A++]=C,w[A++]=L;a.st=new s.GeometryAttribute({componentDatatype:l.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array(w)})}var D=f-2*h;for(R=0;R<v.length;R+=3){var I=v[R]+D,O=v[R+1]+D,S=v[R+2]+D;_[k++]=I,_[k++]=O,_[k++]=S,_[k++]=S+h,_[k++]=O+h,_[k++]=I+h}var B=new s.Geometry({attributes:a,indices:_,boundingSphere:r.BoundingSphere.fromVertices(e),primitiveType:s.PrimitiveType.TRIANGLES});if(i.normal&&(B=c.GeometryPipeline.computeNormal(B)),i.tangent||i.bitangent){try{B=c.GeometryPipeline.computeTangentAndBitangent(B)}catch(e){V("polyline-volume-tangent-bitangent","Unable to compute tangents and bitangents for polyline volume geometry")}i.tangent||(B.attributes.tangent=void 0),i.bitangent||(B.attributes.bitangent=void 0),i.st||(B.attributes.st=void 0)}return B}(_.PolylineVolumeGeometryLibrary.computePositions(n,a,t,e,!0),a,t,e._vertexFormat)},function(t,n){return e.defined(n)&&(t=L.unpack(t,n)),t._ellipsoid=i.Ellipsoid.clone(t._ellipsoid),L.createGeometry(t)}}));