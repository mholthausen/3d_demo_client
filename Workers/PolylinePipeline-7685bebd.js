define(["exports","./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-6f81ad4c","./IntersectionTests-7f3bcd5c","./Plane-b6058d9b","./EllipsoidRhumbLine-c704bf4c","./EllipsoidGeodesic-30fae80b"],(function(a,e,r,t,n,i,o,s,c,l){"use strict";var u={numberOfPoints:function(a,e,r){return e=n.Cartesian3.distance(a,e),Math.ceil(e/r)},numberOfPointsRhumbLine:function(a,e,r){return e=Math.pow(a.longitude-e.longitude,2)+Math.pow(a.latitude-e.latitude,2),Math.max(1,Math.ceil(Math.sqrt(e/(r*r))))}},h=new n.Cartographic;u.extractHeights=function(a,e){for(var r=a.length,t=new Array(r),n=0;n<r;n++){var i=a[n];t[n]=e.cartesianToCartographic(i,h).height}return t};var f=new i.Matrix4,g=new n.Cartesian3,C=new n.Cartesian3,d=new s.Plane(n.Cartesian3.UNIT_X,0),p=new n.Cartesian3,m=new s.Plane(n.Cartesian3.UNIT_X,0),v=new n.Cartesian3,w=new n.Cartesian3,P=[];function T(a,e,r){var t=P;if(t.length=a,e===r){for(i=0;i<a;i++)t[i]=e;return t}for(var n=(r-e)/a,i=0;i<a;i++){var o=e+i*n;t[i]=o}return t}var y=new n.Cartographic,b=new n.Cartographic,A=new n.Cartesian3,E=new n.Cartesian3,R=new n.Cartesian3,M=new l.EllipsoidGeodesic,S=new c.EllipsoidRhumbLine;u.wrapLongitude=function(a,r){var t=[],c=[];if(e.defined(a)&&0<a.length){r=e.defaultValue(r,i.Matrix4.IDENTITY);var l=i.Matrix4.inverseTransformation(r,f),u=(r=i.Matrix4.multiplyByPoint(l,n.Cartesian3.ZERO,g),n.Cartesian3.normalize(i.Matrix4.multiplyByPointAsVector(l,n.Cartesian3.UNIT_Y,C),C)),h=s.Plane.fromPointNormal(r,u,d),P=(l=n.Cartesian3.normalize(i.Matrix4.multiplyByPointAsVector(l,n.Cartesian3.UNIT_X,p),p),s.Plane.fromPointNormal(r,l,m)),T=1;t.push(n.Cartesian3.clone(a[0]));for(var y=t[0],b=a.length,A=1;A<b;++A){var E,R,M=a[A];(s.Plane.getPointDistance(P,y)<0||s.Plane.getPointDistance(P,M)<0)&&(E=o.IntersectionTests.lineSegmentPlane(y,M,h,v),e.defined(E)&&(R=n.Cartesian3.multiplyByScalar(u,5e-9,w),s.Plane.getPointDistance(h,y)<0&&n.Cartesian3.negate(R,R),t.push(n.Cartesian3.add(E,R,new n.Cartesian3)),c.push(T+1),n.Cartesian3.negate(R,R),t.push(n.Cartesian3.add(E,R,new n.Cartesian3)),T=1)),t.push(n.Cartesian3.clone(a[A])),T++,y=M}c.push(T)}return{positions:t,lengths:c}},u.generateArc=function(a){e.defined(a)||(a={});var r=a.positions,i=r.length,o=e.defaultValue(a.ellipsoid,n.Ellipsoid.WGS84),s=e.defaultValue(a.height,0),c=Array.isArray(s);if(i<1)return[];if(1===i){var l,h=o.scaleToGeodeticSurface(r[0],E);return 0!==(s=c?s[0]:s)&&(l=o.geodeticSurfaceNormal(h,A),n.Cartesian3.multiplyByScalar(l,s,l),n.Cartesian3.add(h,l,h)),[h.x,h.y,h.z]}var f=a.minDistance;e.defined(f)||(m=e.defaultValue(a.granularity,t.CesiumMath.RADIANS_PER_DEGREE),f=t.CesiumMath.chordLength(m,o.maximumRadius));for(var g=0,C=0;C<i-1;C++)g+=u.numberOfPoints(r[C],r[C+1],f);a=3*(g+1);var d=new Array(a),p=0;for(C=0;C<i-1;C++)p=function(a,e,r,t,i,o,s,c){var l=t.scaleToGeodeticSurface(a,E),h=t.scaleToGeodeticSurface(e,R),f=u.numberOfPoints(a,e,r),g=(l=t.cartesianToCartographic(l,y),h=t.cartesianToCartographic(h,b),T(f,i,o));M.setEndPoints(l,h);var C=M.surfaceDistance/f,d=c;l.height=i;var p=t.cartographicToCartesian(l,A);n.Cartesian3.pack(p,s,d),d+=3;for(var m=1;m<f;m++){var v=M.interpolateUsingSurfaceDistance(m*C,b);v.height=g[m],p=t.cartographicToCartesian(v,A),n.Cartesian3.pack(p,s,d),d+=3}return d}(r[C],r[C+1],f,o,c?s[C]:s,c?s[C+1]:s,d,p);P.length=0;var m=r[i-1];return(m=o.cartesianToCartographic(m,y)).height=c?s[i-1]:s,m=o.cartographicToCartesian(m,A),n.Cartesian3.pack(m,d,a-3),d};var D=new n.Cartographic,x=new n.Cartographic;u.generateRhumbArc=function(a){e.defined(a)||(a={});var r=a.positions,i=r.length,o=e.defaultValue(a.ellipsoid,n.Ellipsoid.WGS84),s=e.defaultValue(a.height,0),l=Array.isArray(s);if(i<1)return[];if(1===i){var h,f=o.scaleToGeodeticSurface(r[0],E);return 0!==(s=l?s[0]:s)&&(h=o.geodeticSurfaceNormal(f,A),n.Cartesian3.multiplyByScalar(h,s,h),n.Cartesian3.add(f,h,f)),[f.x,f.y,f.z]}for(var g,C=e.defaultValue(a.granularity,t.CesiumMath.RADIANS_PER_DEGREE),d=0,p=o.cartesianToCartographic(r[0],D),m=0;m<i-1;m++)g=o.cartesianToCartographic(r[m+1],x),d+=u.numberOfPointsRhumbLine(p,g,C),p=n.Cartographic.clone(g,D);f=3*(d+1);var v=new Array(f),w=0;for(m=0;m<i-1;m++)w=function(a,e,r,t,i,o,s,l){a=t.cartesianToCartographic(a,y),e=t.cartesianToCartographic(e,b);var h=u.numberOfPointsRhumbLine(a,e,r);a.height=0,e.height=0;var f=T(h,i,o);S.ellipsoid.equals(t)||(S=new c.EllipsoidRhumbLine(void 0,void 0,t)),S.setEndPoints(a,e);var g=S.surfaceDistance/h,C=l;a.height=i;var d=t.cartographicToCartesian(a,A);n.Cartesian3.pack(d,s,C),C+=3;for(var p=1;p<h;p++){var m=S.interpolateUsingSurfaceDistance(p*g,b);m.height=f[p],d=t.cartographicToCartesian(m,A),n.Cartesian3.pack(d,s,C),C+=3}return C}(r[m],r[m+1],C,o,l?s[m]:s,l?s[m+1]:s,v,w);return P.length=0,a=r[i-1],(a=o.cartesianToCartographic(a,y)).height=l?s[i-1]:s,a=o.cartographicToCartesian(a,A),n.Cartesian3.pack(a,v,f-3),v},u.generateCartesianArc=function(a){for(var e=u.generateArc(a),r=e.length/3,t=new Array(r),i=0;i<r;i++)t[i]=n.Cartesian3.unpack(e,3*i);return t},u.generateCartesianRhumbArc=function(a){for(var e=u.generateRhumbArc(a),r=e.length/3,t=new Array(r),i=0;i<r;i++)t[i]=n.Cartesian3.unpack(e,3*i);return t},a.PolylinePipeline=u}));