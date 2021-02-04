define(["exports","./Cartesian2-49b1de22","./Math-44e92d6b","./Transforms-e9dbfb40"],(function(a,e,r,t){"use strict";var i={},n=new e.Cartesian3,s=new e.Cartesian3,o=new t.Quaternion,l=new t.Matrix3;function C(a,r,i,C,y,u,m,h,c,x){return r=a+r,e.Cartesian3.multiplyByScalar(C,Math.cos(r),n),e.Cartesian3.multiplyByScalar(i,Math.sin(r),s),e.Cartesian3.add(n,s,n),r=Math.cos(a),r*=r,a=Math.sin(a),a*=a,a=u/Math.sqrt(m*r+y*a)/h,t.Quaternion.fromAxisAngle(n,a,o),t.Matrix3.fromQuaternion(o,l),t.Matrix3.multiplyByVector(l,c,x),e.Cartesian3.normalize(x,x),e.Cartesian3.multiplyByScalar(x,h,x),x}var y=new e.Cartesian3,u=new e.Cartesian3,m=new e.Cartesian3,h=new e.Cartesian3;i.raisePositionsToHeight=function(a,r,t){for(var i=r.ellipsoid,n=r.height,s=r.extrudedHeight,o=(r=t?a.length/3*2:a.length/3,new Float64Array(3*r)),l=a.length,C=t?l:0,c=0;c<l;c+=3){var x=c+1,M=c+2,f=e.Cartesian3.fromArray(a,c,y);i.scaleToGeodeticSurface(f,f);var z=e.Cartesian3.clone(f,u),d=i.geodeticSurfaceNormal(f,h),_=e.Cartesian3.multiplyByScalar(d,n,m);e.Cartesian3.add(f,_,f),t&&(e.Cartesian3.multiplyByScalar(d,s,_),e.Cartesian3.add(z,_,z),o[c+C]=z.x,o[x+C]=z.y,o[M+C]=z.z),o[c]=f.x,o[x]=f.y,o[M]=f.z}return o};var c=new e.Cartesian3,x=new e.Cartesian3,M=new e.Cartesian3;i.computeEllipsePositions=function(a,t,i){var n=a.semiMinorAxis,s=a.semiMajorAxis,o=a.rotation,l=a.center,h=(a=8*a.granularity,n*n),f=s*s,z=s*n,d=e.Cartesian3.magnitude(l),_=e.Cartesian3.normalize(l,c),O=e.Cartesian3.cross(e.Cartesian3.UNIT_Z,l,x),p=(O=e.Cartesian3.normalize(O,O),e.Cartesian3.cross(_,O,M)),w=1+Math.ceil(r.CesiumMath.PI_OVER_TWO/a),P=r.CesiumMath.PI_OVER_TWO/(w-1),T=r.CesiumMath.PI_OVER_TWO-w*P;T<0&&(w-=Math.ceil(Math.abs(T)/P));var I,g,v,E,V,A=t?new Array(w*(w+2)*2*3):void 0,R=0,W=y,S=u,b=(a=4*w*3)-1,B=0,Q=i?new Array(a):void 0;for(W=C(T=r.CesiumMath.PI_OVER_TWO,o,p,O,h,z,f,d,_,W),t&&(A[R++]=W.x,A[R++]=W.y,A[R++]=W.z),i&&(Q[b--]=W.z,Q[b--]=W.y,Q[b--]=W.x),T=r.CesiumMath.PI_OVER_TWO-P,I=1;I<w+1;++I){if(W=C(T,o,p,O,h,z,f,d,_,W),S=C(Math.PI-T,o,p,O,h,z,f,d,_,S),t){for(A[R++]=W.x,A[R++]=W.y,A[R++]=W.z,v=2*I+2,g=1;g<v-1;++g)E=g/(v-1),V=e.Cartesian3.lerp(W,S,E,m),A[R++]=V.x,A[R++]=V.y,A[R++]=V.z;A[R++]=S.x,A[R++]=S.y,A[R++]=S.z}i&&(Q[b--]=W.z,Q[b--]=W.y,Q[b--]=W.x,Q[B++]=S.x,Q[B++]=S.y,Q[B++]=S.z),T=r.CesiumMath.PI_OVER_TWO-(I+1)*P}for(I=w;1<I;--I){if(W=C(-(T=r.CesiumMath.PI_OVER_TWO-(I-1)*P),o,p,O,h,z,f,d,_,W),S=C(T+Math.PI,o,p,O,h,z,f,d,_,S),t){for(A[R++]=W.x,A[R++]=W.y,A[R++]=W.z,v=2*(I-1)+2,g=1;g<v-1;++g)E=g/(v-1),V=e.Cartesian3.lerp(W,S,E,m),A[R++]=V.x,A[R++]=V.y,A[R++]=V.z;A[R++]=S.x,A[R++]=S.y,A[R++]=S.z}i&&(Q[b--]=W.z,Q[b--]=W.y,Q[b--]=W.x,Q[B++]=S.x,Q[B++]=S.y,Q[B++]=S.z)}return W=C(-(T=r.CesiumMath.PI_OVER_TWO),o,p,O,h,z,f,d,_,W),a={},t&&(A[R++]=W.x,A[R++]=W.y,A[R++]=W.z,a.positions=A,a.numPts=w),i&&(Q[b--]=W.z,Q[b--]=W.y,Q[b--]=W.x,a.outerPositions=Q),a},a.EllipseGeometryLibrary=i}));