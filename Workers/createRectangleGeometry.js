define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-6f81ad4c","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-700c1da0","./GeometryAttributes-4fcfcf40","./AttributeCompression-9fc99391","./GeometryPipeline-e6a15a43","./EncodedCartesian3-4df2eabb","./IndexDatatype-53503fee","./IntersectionTests-7f3bcd5c","./Plane-b6058d9b","./GeometryOffsetAttribute-7350d9af","./VertexFormat-7572c785","./GeometryInstance-bee96382","./EllipsoidRhumbLine-c704bf4c","./PolygonPipeline-1aceedbc","./RectangleGeometryLibrary-db0b4615"],(function(t,e,a,r,n,i,o,s,l,u,c,m,d,p,g,y,f,h,b,v,_,A){"use strict";var x=new r.Cartesian3,w=new r.Cartesian3,C=new r.Cartesian3,R=new r.Cartesian3,E=new r.Rectangle,F=new r.Cartesian2,G=new n.BoundingSphere,P=new n.BoundingSphere;function V(t,e){var a=new l.Geometry({attributes:new u.GeometryAttributes,primitiveType:l.PrimitiveType.TRIANGLES});return a.attributes.position=new l.GeometryAttribute({componentDatatype:s.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e.positions}),t.normal&&(a.attributes.normal=new l.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.normals})),t.tangent&&(a.attributes.tangent=new l.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.tangents})),t.bitangent&&(a.attributes.bitangent=new l.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e.bitangents})),a}var L=new r.Cartesian3,D=new r.Cartesian3;function M(t,e){var a=t._vertexFormat,i=t._ellipsoid,o=e.height,u=e.width,c=e.northCap,m=e.southCap,d=0,g=o,y=o;t=0,c&&(--y,t+=d=1),m&&(--g,--y,t+=1),t+=u*y;for(var f=a.position?new Float64Array(3*t):void 0,h=a.st?new Float32Array(2*t):void 0,b=0,v=0,_=x,E=F,G=Number.MAX_VALUE,P=Number.MAX_VALUE,L=-Number.MAX_VALUE,D=-Number.MAX_VALUE,M=d;M<g;++M)for(var T=0;T<u;++T)A.RectangleGeometryLibrary.computePosition(e,i,a.st,M,T,_,E),f[b++]=_.x,f[b++]=_.y,f[b++]=_.z,a.st&&(h[v++]=E.x,h[v++]=E.y,G=Math.min(G,E.x),P=Math.min(P,E.y),L=Math.max(L,E.x),D=Math.max(D,E.y));if(c&&(A.RectangleGeometryLibrary.computePosition(e,i,a.st,0,0,_,E),f[b++]=_.x,f[b++]=_.y,f[b++]=_.z,a.st&&(h[v++]=E.x,h[v++]=E.y,G=E.x,P=E.y,L=E.x,D=E.y)),m&&(A.RectangleGeometryLibrary.computePosition(e,i,a.st,o-1,0,_,E),f[b++]=_.x,f[b++]=_.y,f[b]=_.z,a.st&&(h[v++]=E.x,h[v]=E.y,G=Math.min(G,E.x),P=Math.min(P,E.y),L=Math.max(L,E.x),D=Math.max(D,E.y))),a.st&&(G<0||P<0||1<L||1<D))for(var O=0;O<h.length;O+=2)h[O]=(h[O]-G)/(L-G),h[O+1]=(h[O+1]-P)/(D-P);d=function(t,e,a,i){var o=t.length,s=e.normal?new Float32Array(o):void 0,l=e.tangent?new Float32Array(o):void 0,u=e.bitangent?new Float32Array(o):void 0,c=0,m=R,d=C,p=w;if(e.normal||e.tangent||e.bitangent)for(var g=0;g<o;g+=3){var y=r.Cartesian3.fromArray(t,g,x),f=c+1,h=c+2;p=a.geodeticSurfaceNormal(y,p),(e.tangent||e.bitangent)&&(r.Cartesian3.cross(r.Cartesian3.UNIT_Z,p,d),n.Matrix3.multiplyByVector(i,d,d),r.Cartesian3.normalize(d,d),e.bitangent&&r.Cartesian3.normalize(r.Cartesian3.cross(p,d,m),m)),e.normal&&(s[c]=p.x,s[f]=p.y,s[h]=p.z),e.tangent&&(l[c]=d.x,l[f]=d.y,l[h]=d.z),e.bitangent&&(u[c]=m.x,u[f]=m.y,u[h]=m.z),c+=3}return V(e,{positions:t,normals:s,tangents:l,bitangents:u})}(f,a,i,e.tangentRotationMatrix),o=6*(u-1)*(y-1),c&&(o+=3*(u-1)),m&&(o+=3*(u-1));for(var N=p.IndexDatatype.createTypedArray(t,o),S=0,I=0,k=0;k<y-1;++k){for(var H=0;H<u-1;++H){var z=S+u,B=z+1,U=S+1;N[I++]=S,N[I++]=z,N[I++]=U,N[I++]=U,N[I++]=z,N[I++]=B,++S}++S}if(c||m){var Y,q,X=t-1,Q=t-1;if(c&&m&&(X=t-2),S=0,c)for(k=0;k<u-1;k++)q=(Y=S)+1,N[I++]=X,N[I++]=Y,N[I++]=q,++S;if(m)for(S=(y-1)*u,k=0;k<u-1;k++)q=(Y=S)+1,N[I++]=Y,N[I++]=Q,N[I++]=q,++S}return d.indices=N,a.st&&(d.attributes.st=new l.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:h})),d}function T(t,e,a,r,n){return t[e++]=r[a],t[e++]=r[a+1],t[e++]=r[a+2],t[e++]=n[a],t[e++]=n[a+1],t[e]=n[a+2],t}function O(t,e,a,r){return t[e++]=r[a],t[e++]=r[a+1],t[e++]=r[a],t[e]=r[a+1],t}var N=new h.VertexFormat,S=[new r.Cartesian3,new r.Cartesian3,new r.Cartesian3,new r.Cartesian3],I=new r.Cartographic,k=new r.Cartographic;function H(t,e,a,n,i){if(0===a)return r.Rectangle.clone(t,i);var o=A.RectangleGeometryLibrary.computeOptions(t,e,a,0,E,I);return t=o.height,e=o.width,a=S,A.RectangleGeometryLibrary.computePosition(o,n,!1,0,0,a[0]),A.RectangleGeometryLibrary.computePosition(o,n,!1,0,e-1,a[1]),A.RectangleGeometryLibrary.computePosition(o,n,!1,t-1,0,a[2]),A.RectangleGeometryLibrary.computePosition(o,n,!1,t-1,e-1,a[3]),r.Rectangle.fromCartesianArray(a,n,i)}function z(e){var n=(e=t.defaultValue(e,t.defaultValue.EMPTY_OBJECT)).rectangle,i=t.defaultValue(e.height,0),o=t.defaultValue(e.extrudedHeight,i);this._rectangle=r.Rectangle.clone(n),this._granularity=t.defaultValue(e.granularity,a.CesiumMath.RADIANS_PER_DEGREE),this._ellipsoid=r.Ellipsoid.clone(t.defaultValue(e.ellipsoid,r.Ellipsoid.WGS84)),this._surfaceHeight=Math.max(i,o),this._rotation=t.defaultValue(e.rotation,0),this._stRotation=t.defaultValue(e.stRotation,0),this._vertexFormat=h.VertexFormat.clone(t.defaultValue(e.vertexFormat,h.VertexFormat.DEFAULT)),this._extrudedHeight=Math.min(i,o),this._shadowVolume=t.defaultValue(e.shadowVolume,!1),this._workerName="createRectangleGeometry",this._offsetAttribute=e.offsetAttribute,this._rotatedRectangle=void 0,this._textureCoordinateRotationPoints=void 0}z.packedLength=r.Rectangle.packedLength+r.Ellipsoid.packedLength+h.VertexFormat.packedLength+7,z.pack=function(e,a,n){return n=t.defaultValue(n,0),r.Rectangle.pack(e._rectangle,a,n),n+=r.Rectangle.packedLength,r.Ellipsoid.pack(e._ellipsoid,a,n),n+=r.Ellipsoid.packedLength,h.VertexFormat.pack(e._vertexFormat,a,n),n+=h.VertexFormat.packedLength,a[n++]=e._granularity,a[n++]=e._surfaceHeight,a[n++]=e._rotation,a[n++]=e._stRotation,a[n++]=e._extrudedHeight,a[n++]=e._shadowVolume?1:0,a[n]=t.defaultValue(e._offsetAttribute,-1),a};var B=new r.Rectangle,U=r.Ellipsoid.clone(r.Ellipsoid.UNIT_SPHERE),Y={rectangle:B,ellipsoid:U,vertexFormat:N,granularity:void 0,height:void 0,rotation:void 0,stRotation:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};z.unpack=function(e,a,n){a=t.defaultValue(a,0);var i=r.Rectangle.unpack(e,a,B);a+=r.Rectangle.packedLength;var o=r.Ellipsoid.unpack(e,a,U);a+=r.Ellipsoid.packedLength;var s=h.VertexFormat.unpack(e,a,N);a+=h.VertexFormat.packedLength;var l=e[a++],u=e[a++],c=e[a++],m=e[a++],d=e[a++],p=1===e[a++];return a=e[a],t.defined(n)?(n._rectangle=r.Rectangle.clone(i,n._rectangle),n._ellipsoid=r.Ellipsoid.clone(o,n._ellipsoid),n._vertexFormat=h.VertexFormat.clone(s,n._vertexFormat),n._granularity=l,n._surfaceHeight=u,n._rotation=c,n._stRotation=m,n._extrudedHeight=d,n._shadowVolume=p,n._offsetAttribute=-1===a?void 0:a,n):(Y.granularity=l,Y.height=u,Y.rotation=c,Y.stRotation=m,Y.extrudedHeight=d,Y.shadowVolume=p,Y.offsetAttribute=-1===a?void 0:a,new z(Y))},z.computeRectangle=function(e,n){var i=(e=t.defaultValue(e,t.defaultValue.EMPTY_OBJECT)).rectangle,o=t.defaultValue(e.granularity,a.CesiumMath.RADIANS_PER_DEGREE),s=t.defaultValue(e.ellipsoid,r.Ellipsoid.WGS84);return H(i,o,t.defaultValue(e.rotation,0),s,n)};var q=new n.Matrix3,X=new n.Quaternion,Q=new r.Cartographic;z.createGeometry=function(e){if(!a.CesiumMath.equalsEpsilon(e._rectangle.north,e._rectangle.south,a.CesiumMath.EPSILON10)&&!a.CesiumMath.equalsEpsilon(e._rectangle.east,e._rectangle.west,a.CesiumMath.EPSILON10)){var i=e._rectangle,o=e._ellipsoid,u=e._rotation,c=e._stRotation,d=e._vertexFormat,g=A.RectangleGeometryLibrary.computeOptions(i,e._granularity,u,c,E,I,k),y=q;0!==c||0!==u?(S=r.Rectangle.center(i,Q),H=o.geodeticSurfaceNormalCartographic(S,L),n.Quaternion.fromAxisAngle(H,-c,X),n.Matrix3.fromQuaternion(X,y)):n.Matrix3.clone(n.Matrix3.IDENTITY,y);var v,F,S=e._surfaceHeight,H=e._extrudedHeight;return c=!a.CesiumMath.equalsEpsilon(S,H,0,a.CesiumMath.EPSILON2),g.lonScalar=1/e._rectangle.width,g.latScalar=1/e._rectangle.height,g.tangentRotationMatrix=y,i=e._rectangle,S=c?(F=function(e,n){var i=e._shadowVolume,o=e._offsetAttribute,u=e._vertexFormat,c=e._extrudedHeight,d=e._surfaceHeight,g=e._ellipsoid,y=n.height,v=n.width;i&&((H=h.VertexFormat.clone(u,N)).normal=!0,e._vertexFormat=H);var A=M(e,n);i&&(e._vertexFormat=u);var E=_.PolygonPipeline.scaleToGeodeticHeight(A.attributes.position.values,d,g,!1),F=2*(mt=(E=new Float64Array(E)).length),G=new Float64Array(F);G.set(E);var P=_.PolygonPipeline.scaleToGeodeticHeight(A.attributes.position.values,c,g);G.set(P,mt),A.attributes.position.values=G;var S,I,k,H=u.normal?new Float32Array(F):void 0;if(e=u.tangent?new Float32Array(F):void 0,d=u.bitangent?new Float32Array(F):void 0,c=u.st?new Float32Array(F/3*2):void 0,u.normal){for(I=A.attributes.normal.values,H.set(I),B=0;B<mt;B++)I[B]=-I[B];H.set(I,mt),A.attributes.normal.values=H}if(i){I=A.attributes.normal.values,u.normal||(A.attributes.normal=void 0);for(var z=new Float32Array(F),B=0;B<mt;B++)I[B]=-I[B];z.set(I,mt),A.attributes.extrudeDirection=new l.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:z})}if((G=t.defined(o))&&(H=mt/3*2,z=new Uint8Array(H),z=o===f.GeometryOffsetAttribute.TOP?f.arrayFill(z,1,0,H/2):(k=o===f.GeometryOffsetAttribute.NONE?0:1,f.arrayFill(z,k)),A.attributes.applyOffset=new l.GeometryAttribute({componentDatatype:s.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:z})),u.tangent){var U=A.attributes.tangent.values;for(e.set(U),B=0;B<mt;B++)U[B]=-U[B];e.set(U,mt),A.attributes.tangent.values=e}u.bitangent&&(W=A.attributes.bitangent.values,d.set(W),d.set(W,mt),A.attributes.bitangent.values=d),u.st&&(S=A.attributes.st.values,c.set(S),c.set(S,mt/3*2),A.attributes.st.values=c);var Y=A.indices,q=Y.length,X=mt/3,Q=p.IndexDatatype.createTypedArray(F/3,2*q);for(Q.set(Y),B=0;B<q;B+=3)Q[B+q]=Y[B+2]+X,Q[B+1+q]=Y[B+1]+X,Q[B+2+q]=Y[B]+X;A.indices=Q,e=n.northCap;var W=n.southCap;d=y,c=2,F=0,n=4,y=4,e&&(--c,--d,F+=1,n-=2,--y),W&&(--c,--d,F+=1,n-=2,--y),y=2*((F+=c*v+2*d-n)+y);var J=new Float64Array(3*y),j=i?new Float32Array(3*y):void 0,Z=G?new Uint8Array(y):void 0,K=u.st?new Float32Array(2*y):void 0,$=o===f.GeometryOffsetAttribute.TOP;G&&!$&&(k=o===f.GeometryOffsetAttribute.ALL?1:0,Z=f.arrayFill(Z,k));var tt=0,et=0,at=0,rt=0,nt=v*d;for(B=0;B<nt;B+=v)J=T(J,tt,ot=3*B,E,P),tt+=6,u.st&&(K=O(K,et,2*B,S),et+=4),i&&(at+=3,j[at++]=I[ot],j[at++]=I[ot+1],j[at++]=I[ot+2]),$&&(Z[rt++]=1,rt+=1);if(W){var it=e?1+nt:nt,ot=3*it;for(B=0;B<2;B++)J=T(J,tt,ot,E,P),tt+=6,u.st&&(K=O(K,et,2*it,S),et+=4),i&&(at+=3,j[at++]=I[ot],j[at++]=I[ot+1],j[at++]=I[ot+2]),$&&(Z[rt++]=1,rt+=1)}else for(B=nt-v;B<nt;B++)J=T(J,tt,ot=3*B,E,P),tt+=6,u.st&&(K=O(K,et,2*B,S),et+=4),i&&(at+=3,j[at++]=I[ot],j[at++]=I[ot+1],j[at++]=I[ot+2]),$&&(Z[rt++]=1,rt+=1);for(B=nt-1;0<B;B-=v)J=T(J,tt,ot=3*B,E,P),tt+=6,u.st&&(K=O(K,et,2*B,S),et+=4),i&&(at+=3,j[at++]=I[ot],j[at++]=I[ot+1],j[at++]=I[ot+2]),$&&(Z[rt++]=1,rt+=1);if(e){var st=nt;for(ot=3*st,B=0;B<2;B++)J=T(J,tt,ot,E,P),tt+=6,u.st&&(K=O(K,et,2*st,S),et+=4),i&&(at+=3,j[at++]=I[ot],j[at++]=I[ot+1],j[at++]=I[ot+2]),$&&(Z[rt++]=1,rt+=1)}else for(B=v-1;0<=B;B--)J=T(J,tt,ot=3*B,E,P),tt+=6,u.st&&(K=O(K,et,2*B,S),et+=4),i&&(at+=3,j[at++]=I[ot],j[at++]=I[ot+1],j[at++]=I[ot+2]),$&&(Z[rt++]=1,rt+=1);g=function(t,e,n){var i=t.length,o=e.normal?new Float32Array(i):void 0,s=e.tangent?new Float32Array(i):void 0,l=e.bitangent?new Float32Array(i):void 0,u=0,c=0,m=0,d=!0,p=R,g=C,y=w;if(e.normal||e.tangent||e.bitangent)for(var f=0;f<i;f+=6){var h,b=r.Cartesian3.fromArray(t,f,x),v=r.Cartesian3.fromArray(t,(f+6)%i,L);d&&(h=r.Cartesian3.fromArray(t,(f+3)%i,D),r.Cartesian3.subtract(v,b,v),r.Cartesian3.subtract(h,b,h),y=r.Cartesian3.normalize(r.Cartesian3.cross(h,v,y),y),d=!1),r.Cartesian3.equalsEpsilon(v,b,a.CesiumMath.EPSILON10)&&(d=!0),(e.tangent||e.bitangent)&&(p=n.geodeticSurfaceNormal(b,p),e.tangent&&(g=r.Cartesian3.normalize(r.Cartesian3.cross(p,y,g),g))),e.normal&&(o[u++]=y.x,o[u++]=y.y,o[u++]=y.z,o[u++]=y.x,o[u++]=y.y,o[u++]=y.z),e.tangent&&(s[c++]=g.x,s[c++]=g.y,s[c++]=g.z,s[c++]=g.x,s[c++]=g.y,s[c++]=g.z),e.bitangent&&(l[m++]=p.x,l[m++]=p.y,l[m++]=p.z,l[m++]=p.x,l[m++]=p.y,l[m++]=p.z)}return V(e,{positions:t,normals:o,tangents:s,bitangents:l})}(J,u,g),u.st&&(g.attributes.st=new l.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:K})),i&&(g.attributes.extrudeDirection=new l.GeometryAttribute({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:j})),G&&(g.attributes.applyOffset=new l.GeometryAttribute({componentDatatype:s.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:Z}));var lt,ut,ct=p.IndexDatatype.createTypedArray(y,6*F),mt=J.length/3,dt=0;for(B=0;B<mt-1;B+=2){ut=((lt=B)+2)%mt;var pt=r.Cartesian3.fromArray(J,3*lt,L),gt=r.Cartesian3.fromArray(J,3*ut,D);r.Cartesian3.equalsEpsilon(pt,gt,a.CesiumMath.EPSILON10)||(gt=(2+(pt=(lt+1)%mt))%mt,ct[dt++]=lt,ct[dt++]=pt,ct[dt++]=ut,ct[dt++]=ut,ct[dt++]=pt,ct[dt++]=gt)}return g.indices=ct,(g=m.GeometryPipeline.combineInstances([new b.GeometryInstance({geometry:A}),new b.GeometryInstance({geometry:g})]))[0]}(e,g),c=n.BoundingSphere.fromRectangle3D(i,o,S,P),v=n.BoundingSphere.fromRectangle3D(i,o,H,G),n.BoundingSphere.union(c,v)):((F=M(e,g)).attributes.position.values=_.PolygonPipeline.scaleToGeodeticHeight(F.attributes.position.values,S,o,!1),t.defined(e._offsetAttribute)&&(v=F.attributes.position.values.length,g=new Uint8Array(v/3),v=e._offsetAttribute===f.GeometryOffsetAttribute.NONE?0:1,f.arrayFill(g,v),F.attributes.applyOffset=new l.GeometryAttribute({componentDatatype:s.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:g})),n.BoundingSphere.fromRectangle3D(i,o,S)),d.position||delete F.attributes.position,new l.Geometry({attributes:F.attributes,indices:F.indices,primitiveType:F.primitiveType,boundingSphere:S,offsetAttribute:e._offsetAttribute})}},z.createShadowVolume=function(t,e,a){var r=t._granularity,n=t._ellipsoid;return e=e(r,n),a=a(r,n),new z({rectangle:t._rectangle,rotation:t._rotation,ellipsoid:n,stRotation:t._stRotation,granularity:r,extrudedHeight:a,height:e,vertexFormat:h.VertexFormat.POSITION_ONLY,shadowVolume:!0})};var W=new r.Rectangle,J=[new r.Cartesian2,new r.Cartesian2,new r.Cartesian2],j=new l.Matrix2,Z=new r.Cartographic;return Object.defineProperties(z.prototype,{rectangle:{get:function(){return t.defined(this._rotatedRectangle)||(this._rotatedRectangle=H(this._rectangle,this._granularity,this._rotation,this._ellipsoid)),this._rotatedRectangle}},textureCoordinateRotationPoints:{get:function(){return t.defined(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(t){if(0===t._stRotation)return[0,0,0,1,1,0];var e=r.Rectangle.clone(t._rectangle,W),a=t._granularity,n=t._ellipsoid,i=(e=H(e,a,t._rotation-t._stRotation,n,W),J);i[0].x=e.west,i[0].y=e.south,i[1].x=e.west,i[1].y=e.north,i[2].x=e.east,i[2].y=e.south;for(var o=t.rectangle,s=l.Matrix2.fromRotation(t._stRotation,j),u=r.Rectangle.center(o,Z),c=0;c<3;++c){var m=i[c];m.x-=u.longitude,m.y-=u.latitude,l.Matrix2.multiplyByVector(s,m,m),m.x+=u.longitude,m.y+=u.latitude,m.x=(m.x-o.west)/o.width,m.y=(m.y-o.south)/o.height}return a=i[0],n=i[1],e=i[2],t=new Array(6),r.Cartesian2.pack(a,t),r.Cartesian2.pack(n,t,2),r.Cartesian2.pack(e,t,4),t}(this)),this._textureCoordinateRotationPoints}}}),function(e,a){return t.defined(a)&&(e=z.unpack(e,a)),e._ellipsoid=r.Ellipsoid.clone(e._ellipsoid),e._rectangle=r.Rectangle.clone(e._rectangle),z.createGeometry(e)}}));