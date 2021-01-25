define(["exports","./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-6f81ad4c"],(function(n,e,a,t,r,i){"use strict";function s(n,e){this.normal=r.Cartesian3.clone(n),this.distance=e}s.fromPointNormal=function(n,a,t){return n=-r.Cartesian3.dot(a,n),e.defined(t)?(r.Cartesian3.clone(a,t.normal),t.distance=n,t):new s(a,n)};var c=new r.Cartesian3;s.fromCartesian4=function(n,a){var t=r.Cartesian3.fromCartesian4(n,c);return n=n.w,e.defined(a)?(r.Cartesian3.clone(t,a.normal),a.distance=n,a):new s(t,n)},s.getPointDistance=function(n,e){return r.Cartesian3.dot(n.normal,e)+n.distance};var o=new r.Cartesian3;s.projectPointOntoPlane=function(n,a,t){e.defined(t)||(t=new r.Cartesian3);var i=s.getPointDistance(n,a);return i=r.Cartesian3.multiplyByScalar(n.normal,i,o),r.Cartesian3.subtract(a,i,t)};var d=new i.Matrix4,f=new i.Cartesian4,l=new r.Cartesian3;s.transform=function(n,e,a){var t=n.normal;return n=n.distance,e=i.Matrix4.inverseTranspose(e,d),n=i.Cartesian4.fromElements(t.x,t.y,t.z,n,f),n=i.Matrix4.multiplyByVector(e,n,n),e=r.Cartesian3.fromCartesian4(n,l),n=i.Cartesian4.divideByScalar(n,r.Cartesian3.magnitude(e),n),s.fromCartesian4(n,a)},s.clone=function(n,a){return e.defined(a)?(r.Cartesian3.clone(n.normal,a.normal),a.distance=n.distance,a):new s(n.normal,n.distance)},s.equals=function(n,e){return n.distance===e.distance&&r.Cartesian3.equals(n.normal,e.normal)},s.ORIGIN_XY_PLANE=Object.freeze(new s(r.Cartesian3.UNIT_Z,0)),s.ORIGIN_YZ_PLANE=Object.freeze(new s(r.Cartesian3.UNIT_X,0)),s.ORIGIN_ZX_PLANE=Object.freeze(new s(r.Cartesian3.UNIT_Y,0)),n.Plane=s}));