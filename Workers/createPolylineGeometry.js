define(["./when-54c2dc71","./Cartesian2-49b1de22","./ArcType-dc1c5aee","./arrayRemoveDuplicates-216006b0","./Transforms-e9dbfb40","./Color-91231c89","./ComponentDatatype-6d99a1ee","./Check-6c0211bc","./GeometryAttribute-669569db","./GeometryAttributes-4fcfcf40","./IndexDatatype-46306178","./Math-44e92d6b","./PolylinePipeline-eb80587e","./VertexFormat-7572c785","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./EllipsoidGeodesic-a2d57ae0","./EllipsoidRhumbLine-9b557f71","./IntersectionTests-6ead8677","./Plane-8f7e53d1"],(function(e,t,r,a,o,n,i,l,s,p,c,d,u,y,m,h,f,C,v,g){"use strict";var _=[];function A(a){var o=(a=e.defaultValue(a,e.defaultValue.EMPTY_OBJECT)).positions,i=a.colors,l=e.defaultValue(a.width,1),s=e.defaultValue(a.colorsPerVertex,!1);this._positions=o,this._colors=i,this._width=l,this._colorsPerVertex=s,this._vertexFormat=y.VertexFormat.clone(e.defaultValue(a.vertexFormat,y.VertexFormat.DEFAULT)),this._arcType=e.defaultValue(a.arcType,r.ArcType.GEODESIC),this._granularity=e.defaultValue(a.granularity,d.CesiumMath.RADIANS_PER_DEGREE),this._ellipsoid=t.Ellipsoid.clone(e.defaultValue(a.ellipsoid,t.Ellipsoid.WGS84)),this._workerName="createPolylineGeometry",o=1+o.length*t.Cartesian3.packedLength,o+=e.defined(i)?1+i.length*n.Color.packedLength:1,this.packedLength=o+t.Ellipsoid.packedLength+y.VertexFormat.packedLength+4}A.pack=function(r,a,o){var i;o=e.defaultValue(o,0);var l=r._positions,s=l.length;for(a[o++]=s,i=0;i<s;++i,o+=t.Cartesian3.packedLength)t.Cartesian3.pack(l[i],a,o);var p=r._colors;for(s=e.defined(p)?p.length:0,a[o++]=s,i=0;i<s;++i,o+=n.Color.packedLength)n.Color.pack(p[i],a,o);return t.Ellipsoid.pack(r._ellipsoid,a,o),o+=t.Ellipsoid.packedLength,y.VertexFormat.pack(r._vertexFormat,a,o),o+=y.VertexFormat.packedLength,a[o++]=r._width,a[o++]=r._colorsPerVertex?1:0,a[o++]=r._arcType,a[o]=r._granularity,a};var b=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),E=new y.VertexFormat,P={positions:void 0,colors:void 0,ellipsoid:b,vertexFormat:E,width:void 0,colorsPerVertex:void 0,arcType:void 0,granularity:void 0};A.unpack=function(r,a,o){a=e.defaultValue(a,0);for(var i=r[a++],l=new Array(i),s=0;s<i;++s,a+=t.Cartesian3.packedLength)l[s]=t.Cartesian3.unpack(r,a);var p=0<(i=r[a++])?new Array(i):void 0;for(s=0;s<i;++s,a+=n.Color.packedLength)p[s]=n.Color.unpack(r,a);var c=t.Ellipsoid.unpack(r,a,b);a+=t.Ellipsoid.packedLength;var d=y.VertexFormat.unpack(r,a,E);a+=y.VertexFormat.packedLength;var u=r[a++],m=1===r[a++],h=r[a++],f=r[a];return e.defined(o)?(o._positions=l,o._colors=p,o._ellipsoid=t.Ellipsoid.clone(c,o._ellipsoid),o._vertexFormat=y.VertexFormat.clone(d,o._vertexFormat),o._width=u,o._colorsPerVertex=m,o._arcType=h,o._granularity=f,o):(P.positions=l,P.colors=p,P.width=u,P.colorsPerVertex=m,P.arcType=h,P.granularity=f,new A(P))};var w=new t.Cartesian3,T=new t.Cartesian3,x=new t.Cartesian3,k=new t.Cartesian3;return A.createGeometry=function(l){var y=l._width,m=l._vertexFormat,h=l._colors,f=l._colorsPerVertex,C=l._arcType,v=l._granularity,g=l._ellipsoid,A=a.arrayRemoveDuplicates(l._positions,t.Cartesian3.equalsEpsilon),b=A.length;if(!(b<2||y<=0)){if(C===r.ArcType.GEODESIC||C===r.ArcType.RHUMB){var E,P=C===r.ArcType.GEODESIC?(E=d.CesiumMath.chordLength(v,g.maximumRadius),u.PolylinePipeline.numberOfPoints):(E=v,u.PolylinePipeline.numberOfPointsRhumbLine),D=u.PolylinePipeline.extractHeights(A,g);if(e.defined(h)){for(var V=1,L=0;L<b-1;++L)V+=P(A[L],A[L+1],E);var F=new Array(V),G=0;for(L=0;L<b-1;++L){var O=A[L],R=A[L+1],I=h[L],S=P(O,R,E);if(f&&L<V)for(var B=function(e,t,r){var a=_;a.length=r;var o=e.red,i=e.green,l=e.blue,s=e.alpha,p=t.red,c=t.green,d=t.blue,u=t.alpha;if(n.Color.equals(e,t)){for(C=0;C<r;C++)a[C]=n.Color.clone(e);return a}for(var y=(p-o)/r,m=(c-i)/r,h=(d-l)/r,f=(u-s)/r,C=0;C<r;C++)a[C]=new n.Color(o+C*y,i+C*m,l+C*h,s+C*f);return a}(I,h[L+1],S),U=B.length,N=0;N<U;++N)F[G++]=B[N];else for(N=0;N<S;++N)F[G++]=n.Color.clone(I)}F[G]=n.Color.clone(h[h.length-1]),h=F,_.length=0}A=C===r.ArcType.GEODESIC?u.PolylinePipeline.generateCartesianArc({positions:A,minDistance:E,ellipsoid:g,height:D}):u.PolylinePipeline.generateCartesianRhumbArc({positions:A,granularity:E,ellipsoid:g,height:D})}g=4*(b=A.length)-4;var M,H,W,Y=new Float64Array(3*g),q=new Float64Array(3*g),z=new Float64Array(3*g),J=new Float32Array(2*g),j=m.st?new Float32Array(2*g):void 0,K=e.defined(h)?new Uint8Array(4*g):void 0,Q=0,X=0,Z=0,$=0;for(N=0;N<b;++N){0===N?(M=w,t.Cartesian3.subtract(A[0],A[1],M),t.Cartesian3.add(A[0],M,M)):M=A[N-1],t.Cartesian3.clone(M,x),t.Cartesian3.clone(A[N],T),N===b-1?(M=w,t.Cartesian3.subtract(A[b-1],A[b-2],M),t.Cartesian3.add(A[b-1],M,M)):M=A[N+1],t.Cartesian3.clone(M,k),e.defined(K)&&(H=0===N||f?h[N]:h[N-1],N!==b-1&&(W=h[N]));for(var ee=N===b-1?2:4,te=0===N?2:0;te<ee;++te){t.Cartesian3.pack(T,Y,Q),t.Cartesian3.pack(x,q,Q),t.Cartesian3.pack(k,z,Q),Q+=3;var re=te-2<0?-1:1;J[X++]=te%2*2-1,J[X++]=re*y,m.st&&(j[Z++]=N/(b-1),j[Z++]=Math.max(J[X-2],0)),e.defined(K)&&(re=te<2?H:W,K[$++]=n.Color.floatToByte(re.red),K[$++]=n.Color.floatToByte(re.green),K[$++]=n.Color.floatToByte(re.blue),K[$++]=n.Color.floatToByte(re.alpha))}}(D=new p.GeometryAttributes).position=new s.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:Y}),D.prevPosition=new s.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:q}),D.nextPosition=new s.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:z}),D.expandAndWidth=new s.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:J}),m.st&&(D.st=new s.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:j})),e.defined(K)&&(D.color=new s.GeometryAttribute({componentDatatype:i.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:4,values:K,normalize:!0}));var ae=c.IndexDatatype.createTypedArray(g,6*b-6),oe=0,ne=0,ie=b-1;for(N=0;N<ie;++N)ae[ne++]=oe,ae[ne++]=oe+2,ae[ne++]=oe+1,ae[ne++]=oe+1,ae[ne++]=oe+2,ae[ne++]=oe+3,oe+=4;return new s.Geometry({attributes:D,indices:ae,primitiveType:s.PrimitiveType.TRIANGLES,boundingSphere:o.BoundingSphere.fromPoints(A),geometryType:s.GeometryType.POLYLINES})}},function(r,a){return(r=e.defined(a)?A.unpack(r,a):r)._ellipsoid=t.Ellipsoid.clone(r._ellipsoid),A.createGeometry(r)}}));