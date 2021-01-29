define(["exports","./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5"],(function(e,t,n,a){"use strict";function i(e,n,a){this.x=t.defaultValue(e,0),this.y=t.defaultValue(n,0),this.z=t.defaultValue(a,0)}i.fromSpherical=function(e,n){t.defined(n)||(n=new i);var a=e.clock,r=e.cone,u=t.defaultValue(e.magnitude,1);return e=u*Math.sin(r),n.x=e*Math.cos(a),n.y=e*Math.sin(a),n.z=u*Math.cos(r),n},i.fromElements=function(e,n,a,r){return t.defined(r)?(r.x=e,r.y=n,r.z=a,r):new i(e,n,a)},i.fromCartesian4=i.clone=function(e,n){if(t.defined(e))return t.defined(n)?(n.x=e.x,n.y=e.y,n.z=e.z,n):new i(e.x,e.y,e.z)},i.packedLength=3,i.pack=function(e,n,a){return a=t.defaultValue(a,0),n[a++]=e.x,n[a++]=e.y,n[a]=e.z,n},i.unpack=function(e,n,a){return n=t.defaultValue(n,0),t.defined(a)||(a=new i),a.x=e[n++],a.y=e[n++],a.z=e[n],a},i.packArray=function(e,a){var r=e.length,u=3*r;if(t.defined(a)){if(!Array.isArray(a)&&a.length!==u)throw new n.DeveloperError("If result is a typed array, it must have exactly array.length * 3 elements");a.length!==u&&(a.length=u)}else a=new Array(u);for(var o=0;o<r;++o)i.pack(e[o],a,3*o);return a},i.unpackArray=function(e,n){var a=e.length;t.defined(n)?n.length=a/3:n=new Array(a/3);for(var r=0;r<a;r+=3){var u=r/3;n[u]=i.unpack(e,r,n[u])}return n},i.fromArray=i.unpack,i.maximumComponent=function(e){return Math.max(e.x,e.y,e.z)},i.minimumComponent=function(e){return Math.min(e.x,e.y,e.z)},i.minimumByComponent=function(e,t,n){return n.x=Math.min(e.x,t.x),n.y=Math.min(e.y,t.y),n.z=Math.min(e.z,t.z),n},i.maximumByComponent=function(e,t,n){return n.x=Math.max(e.x,t.x),n.y=Math.max(e.y,t.y),n.z=Math.max(e.z,t.z),n},i.magnitudeSquared=function(e){return e.x*e.x+e.y*e.y+e.z*e.z},i.magnitude=function(e){return Math.sqrt(i.magnitudeSquared(e))};var r=new i;i.distance=function(e,t){return i.subtract(e,t,r),i.magnitude(r)},i.distanceSquared=function(e,t){return i.subtract(e,t,r),i.magnitudeSquared(r)},i.normalize=function(e,t){var n=i.magnitude(e);return t.x=e.x/n,t.y=e.y/n,t.z=e.z/n,t},i.dot=function(e,t){return e.x*t.x+e.y*t.y+e.z*t.z},i.multiplyComponents=function(e,t,n){return n.x=e.x*t.x,n.y=e.y*t.y,n.z=e.z*t.z,n},i.divideComponents=function(e,t,n){return n.x=e.x/t.x,n.y=e.y/t.y,n.z=e.z/t.z,n},i.add=function(e,t,n){return n.x=e.x+t.x,n.y=e.y+t.y,n.z=e.z+t.z,n},i.subtract=function(e,t,n){return n.x=e.x-t.x,n.y=e.y-t.y,n.z=e.z-t.z,n},i.multiplyByScalar=function(e,t,n){return n.x=e.x*t,n.y=e.y*t,n.z=e.z*t,n},i.divideByScalar=function(e,t,n){return n.x=e.x/t,n.y=e.y/t,n.z=e.z/t,n},i.negate=function(e,t){return t.x=-e.x,t.y=-e.y,t.z=-e.z,t},i.abs=function(e,t){return t.x=Math.abs(e.x),t.y=Math.abs(e.y),t.z=Math.abs(e.z),t};var u=new i;i.lerp=function(e,t,n,a){return i.multiplyByScalar(t,n,u),a=i.multiplyByScalar(e,1-n,a),i.add(u,a,a)};var o=new i,d=new i;i.angleBetween=function(e,t){return i.normalize(e,o),i.normalize(t,d),e=i.dot(o,d),t=i.magnitude(i.cross(o,d,o)),Math.atan2(t,e)};var s=new i;i.mostOrthogonalAxis=function(e,t){return e=i.normalize(e,s),i.abs(e,e),e.x<=e.y?e.x<=e.z?i.clone(i.UNIT_X,t):i.clone(i.UNIT_Z,t):e.y<=e.z?i.clone(i.UNIT_Y,t):i.clone(i.UNIT_Z,t)},i.projectVector=function(e,t,n){return e=i.dot(e,t)/i.dot(t,t),i.multiplyByScalar(t,e,n)},i.equals=function(e,n){return e===n||t.defined(e)&&t.defined(n)&&e.x===n.x&&e.y===n.y&&e.z===n.z},i.equalsArray=function(e,t,n){return e.x===t[n]&&e.y===t[n+1]&&e.z===t[n+2]},i.equalsEpsilon=function(e,n,i,r){return e===n||t.defined(e)&&t.defined(n)&&a.CesiumMath.equalsEpsilon(e.x,n.x,i,r)&&a.CesiumMath.equalsEpsilon(e.y,n.y,i,r)&&a.CesiumMath.equalsEpsilon(e.z,n.z,i,r)},i.cross=function(e,t,n){var a=e.x,i=e.y,r=e.z,u=t.x,o=t.y;return t=i*(e=t.z)-r*o,e=r*u-a*e,u=a*o-i*u,n.x=t,n.y=e,n.z=u,n},i.midpoint=function(e,t,n){return n.x=.5*(e.x+t.x),n.y=.5*(e.y+t.y),n.z=.5*(e.z+t.z),n},i.fromDegrees=function(e,t,n,r,u){return e=a.CesiumMath.toRadians(e),t=a.CesiumMath.toRadians(t),i.fromRadians(e,t,n,r,u)};var h=new i,l=new i,f=new i(40680631590769,40680631590769,40408299984661.445);i.fromRadians=function(e,n,a,r,u){a=t.defaultValue(a,0);var o=t.defined(r)?r.radiiSquared:f;return r=Math.cos(n),h.x=r*Math.cos(e),h.y=r*Math.sin(e),h.z=Math.sin(n),h=i.normalize(h,h),i.multiplyComponents(o,h,l),o=Math.sqrt(i.dot(h,l)),l=i.divideByScalar(l,o,l),h=i.multiplyByScalar(h,a,h),t.defined(u)||(u=new i),i.add(l,h,u)},i.fromDegreesArray=function(e,n,a){var r=e.length;t.defined(a)?a.length=r/2:a=new Array(r/2);for(var u=0;u<r;u+=2){var o=e[u],d=e[u+1],s=u/2;a[s]=i.fromDegrees(o,d,0,n,a[s])}return a},i.fromRadiansArray=function(e,n,a){var r=e.length;t.defined(a)?a.length=r/2:a=new Array(r/2);for(var u=0;u<r;u+=2){var o=e[u],d=e[u+1],s=u/2;a[s]=i.fromRadians(o,d,0,n,a[s])}return a},i.fromDegreesArrayHeights=function(e,n,a){var r=e.length;t.defined(a)?a.length=r/3:a=new Array(r/3);for(var u=0;u<r;u+=3){var o=e[u],d=e[u+1],s=e[u+2],h=u/3;a[h]=i.fromDegrees(o,d,s,n,a[h])}return a},i.fromRadiansArrayHeights=function(e,n,a){var r=e.length;t.defined(a)?a.length=r/3:a=new Array(r/3);for(var u=0;u<r;u+=3){var o=e[u],d=e[u+1],s=e[u+2],h=u/3;a[h]=i.fromRadians(o,d,s,n,a[h])}return a},i.ZERO=Object.freeze(new i(0,0,0)),i.UNIT_X=Object.freeze(new i(1,0,0)),i.UNIT_Y=Object.freeze(new i(0,1,0)),i.UNIT_Z=Object.freeze(new i(0,0,1)),i.prototype.clone=function(e){return i.clone(this,e)},i.prototype.equals=function(e){return i.equals(this,e)},i.prototype.equalsEpsilon=function(e,t,n){return i.equalsEpsilon(this,e,t,n)},i.prototype.toString=function(){return"("+this.x+", "+this.y+", "+this.z+")"};var c=new i,m=new i;function y(e,n,r,u,o){var d=e.x,s=e.y,h=e.z,l=d*d*(p=n.x)*p,f=s*s*(g=n.y)*g,y=h*h*(n=n.z)*n,p=l+f+y,g=Math.sqrt(1/p);if(n=i.multiplyByScalar(e,g,c),p<u)return isFinite(g)?i.clone(n,o):void 0;var M=r.x,x=r.y,w=r.z;(r=m).x=n.x*M*2,r.y=n.y*x*2,r.z=n.z*w*2;var v,_,C,z,S,q,O,T=(1-g)*i.magnitude(e)/(.5*i.magnitude(r)),A=0;do{A=(v=l*(S=(_=1/(1+(T-=A)*M))*_)+f*(q=(C=1/(1+T*x))*C)+y*(O=(z=1/(1+T*w))*z)-1)/(-2*(l*(S*_)*M+f*(q*C)*x+y*(O*z)*w))}while(Math.abs(v)>a.CesiumMath.EPSILON12);return t.defined(o)?(o.x=d*_,o.y=s*C,o.z=h*z,o):new i(d*_,s*C,h*z)}function p(e,n,a){this.longitude=t.defaultValue(e,0),this.latitude=t.defaultValue(n,0),this.height=t.defaultValue(a,0)}p.fromRadians=function(e,n,a,i){return a=t.defaultValue(a,0),t.defined(i)?(i.longitude=e,i.latitude=n,i.height=a,i):new p(e,n,a)},p.fromDegrees=function(e,t,n,i){return e=a.CesiumMath.toRadians(e),t=a.CesiumMath.toRadians(t),p.fromRadians(e,t,n,i)};var g=new i,M=new i,x=new i,w=new i(1/6378137,1/6378137,1/6356752.314245179),v=new i(1/40680631590769,1/40680631590769,1/40408299984661.445),_=a.CesiumMath.EPSILON1;function C(e,n,r,u){n=t.defaultValue(n,0),r=t.defaultValue(r,0),u=t.defaultValue(u,0),e._radii=new i(n,r,u),e._radiiSquared=new i(n*n,r*r,u*u),e._radiiToTheFourth=new i(n*n*n*n,r*r*r*r,u*u*u*u),e._oneOverRadii=new i(0===n?0:1/n,0===r?0:1/r,0===u?0:1/u),e._oneOverRadiiSquared=new i(0===n?0:1/(n*n),0===r?0:1/(r*r),0===u?0:1/(u*u)),e._minimumRadius=Math.min(n,r,u),e._maximumRadius=Math.max(n,r,u),e._centerToleranceSquared=a.CesiumMath.EPSILON1,0!==e._radiiSquared.z&&(e._squaredXOverSquaredZ=e._radiiSquared.x/e._radiiSquared.z)}function z(e,t,n){this._radii=void 0,this._radiiSquared=void 0,this._radiiToTheFourth=void 0,this._oneOverRadii=void 0,this._oneOverRadiiSquared=void 0,this._minimumRadius=void 0,this._maximumRadius=void 0,this._centerToleranceSquared=void 0,this._squaredXOverSquaredZ=void 0,C(this,e,t,n)}p.fromCartesian=function(e,n,r){var u=t.defined(n)?n.oneOverRadii:w,o=t.defined(n)?n.oneOverRadiiSquared:v;if(u=y(e,u,o,t.defined(n)?n._centerToleranceSquared:_,M),t.defined(u))return n=i.multiplyComponents(u,o,g),n=i.normalize(n,n),o=i.subtract(e,u,x),u=Math.atan2(n.y,n.x),n=Math.asin(n.z),o=a.CesiumMath.sign(i.dot(o,e))*i.magnitude(o),t.defined(r)?(r.longitude=u,r.latitude=n,r.height=o,r):new p(u,n,o)},p.toCartesian=function(e,t,n){return i.fromRadians(e.longitude,e.latitude,e.height,t,n)},p.clone=function(e,n){if(t.defined(e))return t.defined(n)?(n.longitude=e.longitude,n.latitude=e.latitude,n.height=e.height,n):new p(e.longitude,e.latitude,e.height)},p.equals=function(e,n){return e===n||t.defined(e)&&t.defined(n)&&e.longitude===n.longitude&&e.latitude===n.latitude&&e.height===n.height},p.equalsEpsilon=function(e,n,a){return a=t.defaultValue(a,0),e===n||t.defined(e)&&t.defined(n)&&Math.abs(e.longitude-n.longitude)<=a&&Math.abs(e.latitude-n.latitude)<=a&&Math.abs(e.height-n.height)<=a},p.ZERO=Object.freeze(new p(0,0,0)),p.prototype.clone=function(e){return p.clone(this,e)},p.prototype.equals=function(e){return p.equals(this,e)},p.prototype.equalsEpsilon=function(e,t){return p.equalsEpsilon(this,e,t)},p.prototype.toString=function(){return"("+this.longitude+", "+this.latitude+", "+this.height+")"},Object.defineProperties(z.prototype,{radii:{get:function(){return this._radii}},radiiSquared:{get:function(){return this._radiiSquared}},radiiToTheFourth:{get:function(){return this._radiiToTheFourth}},oneOverRadii:{get:function(){return this._oneOverRadii}},oneOverRadiiSquared:{get:function(){return this._oneOverRadiiSquared}},minimumRadius:{get:function(){return this._minimumRadius}},maximumRadius:{get:function(){return this._maximumRadius}}}),z.clone=function(e,n){if(t.defined(e)){var a=e._radii;return t.defined(n)?(i.clone(a,n._radii),i.clone(e._radiiSquared,n._radiiSquared),i.clone(e._radiiToTheFourth,n._radiiToTheFourth),i.clone(e._oneOverRadii,n._oneOverRadii),i.clone(e._oneOverRadiiSquared,n._oneOverRadiiSquared),n._minimumRadius=e._minimumRadius,n._maximumRadius=e._maximumRadius,n._centerToleranceSquared=e._centerToleranceSquared,n):new z(a.x,a.y,a.z)}},z.fromCartesian3=function(e,n){return t.defined(n)||(n=new z),t.defined(e)&&C(n,e.x,e.y,e.z),n},z.WGS84=Object.freeze(new z(6378137,6378137,6356752.314245179)),z.UNIT_SPHERE=Object.freeze(new z(1,1,1)),z.MOON=Object.freeze(new z(a.CesiumMath.LUNAR_RADIUS,a.CesiumMath.LUNAR_RADIUS,a.CesiumMath.LUNAR_RADIUS)),z.prototype.clone=function(e){return z.clone(this,e)},z.packedLength=i.packedLength,z.pack=function(e,n,a){return a=t.defaultValue(a,0),i.pack(e._radii,n,a),n},z.unpack=function(e,n,a){return n=t.defaultValue(n,0),n=i.unpack(e,n),z.fromCartesian3(n,a)},z.prototype.geocentricSurfaceNormal=i.normalize,z.prototype.geodeticSurfaceNormalCartographic=function(e,n){var a=e.longitude,r=e.latitude,u=Math.cos(r);return e=u*Math.cos(a),a=u*Math.sin(a),r=Math.sin(r),t.defined(n)||(n=new i),n.x=e,n.y=a,n.z=r,i.normalize(n,n)},z.prototype.geodeticSurfaceNormal=function(e,n){if(!i.equalsEpsilon(e,i.ZERO,a.CesiumMath.EPSILON14))return t.defined(n)||(n=new i),n=i.multiplyComponents(e,this._oneOverRadiiSquared,n),i.normalize(n,n)};var S=new i,q=new i;z.prototype.cartographicToCartesian=function(e,n){var a=S,r=q;this.geodeticSurfaceNormalCartographic(e,a),i.multiplyComponents(this._radiiSquared,a,r);var u=Math.sqrt(i.dot(a,r));return i.divideByScalar(r,u,r),i.multiplyByScalar(a,e.height,a),t.defined(n)||(n=new i),i.add(r,a,n)},z.prototype.cartographicArrayToCartesianArray=function(e,n){var a=e.length;t.defined(n)?n.length=a:n=new Array(a);for(var i=0;i<a;i++)n[i]=this.cartographicToCartesian(e[i],n[i]);return n};var O=new i,T=new i,A=new i;z.prototype.cartesianToCartographic=function(e,n){var r=this.scaleToGeodeticSurface(e,T);if(t.defined(r)){var u=this.geodeticSurfaceNormal(r,O),o=i.subtract(e,r,A);return r=Math.atan2(u.y,u.x),u=Math.asin(u.z),o=a.CesiumMath.sign(i.dot(o,e))*i.magnitude(o),t.defined(n)?(n.longitude=r,n.latitude=u,n.height=o,n):new p(r,u,o)}},z.prototype.cartesianArrayToCartographicArray=function(e,n){var a=e.length;t.defined(n)?n.length=a:n=new Array(a);for(var i=0;i<a;++i)n[i]=this.cartesianToCartographic(e[i],n[i]);return n},z.prototype.scaleToGeodeticSurface=function(e,t){return y(e,this._oneOverRadii,this._oneOverRadiiSquared,this._centerToleranceSquared,t)},z.prototype.scaleToGeocentricSurface=function(e,n){t.defined(n)||(n=new i);var a=e.x,r=e.y,u=e.z,o=this._oneOverRadiiSquared;return o=1/Math.sqrt(a*a*o.x+r*r*o.y+u*u*o.z),i.multiplyByScalar(e,o,n)},z.prototype.transformPositionToScaledSpace=function(e,n){return t.defined(n)||(n=new i),i.multiplyComponents(e,this._oneOverRadii,n)},z.prototype.transformPositionFromScaledSpace=function(e,n){return t.defined(n)||(n=new i),i.multiplyComponents(e,this._radii,n)},z.prototype.equals=function(e){return this===e||t.defined(e)&&i.equals(this._radii,e._radii)},z.prototype.toString=function(){return this._radii.toString()},z.prototype.getSurfaceNormalIntersectionWithZAxis=function(e,n,a){n=t.defaultValue(n,0);var r=this._squaredXOverSquaredZ;if(t.defined(a)||(a=new i),a.x=0,a.y=0,a.z=e.z*(1-r),!(Math.abs(a.z)>=this._radii.z-n))return a};var R=[.14887433898163,.43339539412925,.67940956829902,.86506336668898,.97390652851717,0],V=[.29552422471475,.26926671930999,.21908636251598,.14945134915058,.066671344308684,0];function b(e,t,n){for(var a=.5*(t+e),i=.5*(t-e),r=0,u=0;u<5;u++){var o=i*R[u];r+=V[u]*(n(a+o)+n(a-o))}return r*i}function I(e,n,a,i){this.west=t.defaultValue(e,0),this.south=t.defaultValue(n,0),this.east=t.defaultValue(a,0),this.north=t.defaultValue(i,0)}z.prototype.surfaceArea=function(e){for(var t=e.west,n=e.east,i=e.south,r=e.north;n<t;)n+=a.CesiumMath.TWO_PI;var u=(e=this._radiiSquared).x,o=e.y,d=e.z,s=u*o;return b(i,r,(function(e){var a=Math.cos(e),i=Math.sin(e);return Math.cos(e)*b(t,n,(function(e){var t=Math.cos(e);return e=Math.sin(e),Math.sqrt(s*i*i+d*(o*t*t+u*e*e)*a*a)}))}))},Object.defineProperties(I.prototype,{width:{get:function(){return I.computeWidth(this)}},height:{get:function(){return I.computeHeight(this)}}}),I.packedLength=4,I.pack=function(e,n,a){return a=t.defaultValue(a,0),n[a++]=e.west,n[a++]=e.south,n[a++]=e.east,n[a]=e.north,n},I.unpack=function(e,n,a){return n=t.defaultValue(n,0),t.defined(a)||(a=new I),a.west=e[n++],a.south=e[n++],a.east=e[n++],a.north=e[n],a},I.computeWidth=function(e){var t=e.east;return t<(e=e.west)&&(t+=a.CesiumMath.TWO_PI),t-e},I.computeHeight=function(e){return e.north-e.south},I.fromDegrees=function(e,n,i,r,u){return e=a.CesiumMath.toRadians(t.defaultValue(e,0)),n=a.CesiumMath.toRadians(t.defaultValue(n,0)),i=a.CesiumMath.toRadians(t.defaultValue(i,0)),r=a.CesiumMath.toRadians(t.defaultValue(r,0)),t.defined(u)?(u.west=e,u.south=n,u.east=i,u.north=r,u):new I(e,n,i,r)},I.fromRadians=function(e,n,a,i,r){return t.defined(r)?(r.west=t.defaultValue(e,0),r.south=t.defaultValue(n,0),r.east=t.defaultValue(a,0),r.north=t.defaultValue(i,0),r):new I(e,n,a,i)},I.fromCartographicArray=function(e,n){for(var i=Number.MAX_VALUE,r=-Number.MAX_VALUE,u=Number.MAX_VALUE,o=-Number.MAX_VALUE,d=Number.MAX_VALUE,s=-Number.MAX_VALUE,h=0,l=e.length;h<l;h++){var f=e[h];i=Math.min(i,f.longitude),r=Math.max(r,f.longitude),d=Math.min(d,f.latitude),s=Math.max(s,f.latitude),f=0<=f.longitude?f.longitude:f.longitude+a.CesiumMath.TWO_PI,u=Math.min(u,f),o=Math.max(o,f)}return o-u<r-i&&(i=u,(r=o)>a.CesiumMath.PI&&(r-=a.CesiumMath.TWO_PI),i>a.CesiumMath.PI&&(i-=a.CesiumMath.TWO_PI)),t.defined(n)?(n.west=i,n.south=d,n.east=r,n.north=s,n):new I(i,d,r,s)},I.fromCartesianArray=function(e,n,i){n=t.defaultValue(n,z.WGS84);for(var r=Number.MAX_VALUE,u=-Number.MAX_VALUE,o=Number.MAX_VALUE,d=-Number.MAX_VALUE,s=Number.MAX_VALUE,h=-Number.MAX_VALUE,l=0,f=e.length;l<f;l++){var c=n.cartesianToCartographic(e[l]);r=Math.min(r,c.longitude),u=Math.max(u,c.longitude),s=Math.min(s,c.latitude),h=Math.max(h,c.latitude),c=0<=c.longitude?c.longitude:c.longitude+a.CesiumMath.TWO_PI,o=Math.min(o,c),d=Math.max(d,c)}return d-o<u-r&&(r=o,(u=d)>a.CesiumMath.PI&&(u-=a.CesiumMath.TWO_PI),r>a.CesiumMath.PI&&(r-=a.CesiumMath.TWO_PI)),t.defined(i)?(i.west=r,i.south=s,i.east=u,i.north=h,i):new I(r,s,u,h)},I.clone=function(e,n){if(t.defined(e))return t.defined(n)?(n.west=e.west,n.south=e.south,n.east=e.east,n.north=e.north,n):new I(e.west,e.south,e.east,e.north)},I.equalsEpsilon=function(e,n,a){return a=t.defaultValue(a,0),e===n||t.defined(e)&&t.defined(n)&&Math.abs(e.west-n.west)<=a&&Math.abs(e.south-n.south)<=a&&Math.abs(e.east-n.east)<=a&&Math.abs(e.north-n.north)<=a},I.prototype.clone=function(e){return I.clone(this,e)},I.prototype.equals=function(e){return I.equals(this,e)},I.equals=function(e,n){return e===n||t.defined(e)&&t.defined(n)&&e.west===n.west&&e.south===n.south&&e.east===n.east&&e.north===n.north},I.prototype.equalsEpsilon=function(e,t){return I.equalsEpsilon(this,e,t)},I.validate=function(e){},I.southwest=function(e,n){return t.defined(n)?(n.longitude=e.west,n.latitude=e.south,n.height=0,n):new p(e.west,e.south)},I.northwest=function(e,n){return t.defined(n)?(n.longitude=e.west,n.latitude=e.north,n.height=0,n):new p(e.west,e.north)},I.northeast=function(e,n){return t.defined(n)?(n.longitude=e.east,n.latitude=e.north,n.height=0,n):new p(e.east,e.north)},I.southeast=function(e,n){return t.defined(n)?(n.longitude=e.east,n.latitude=e.south,n.height=0,n):new p(e.east,e.south)},I.center=function(e,n){var i=e.east,r=e.west;return i<r&&(i+=a.CesiumMath.TWO_PI),i=a.CesiumMath.negativePiToPi(.5*(r+i)),e=.5*(e.south+e.north),t.defined(n)?(n.longitude=i,n.latitude=e,n.height=0,n):new p(i,e)},I.intersection=function(e,n,i){var r=e.east,u=e.west,o=n.east,d=n.west;if(r<u&&0<o?r+=a.CesiumMath.TWO_PI:o<d&&0<r&&(o+=a.CesiumMath.TWO_PI),r<u&&d<0?d+=a.CesiumMath.TWO_PI:o<d&&u<0&&(u+=a.CesiumMath.TWO_PI),d=a.CesiumMath.negativePiToPi(Math.max(u,d)),r=a.CesiumMath.negativePiToPi(Math.min(r,o)),!((e.west<e.east||n.west<n.east)&&r<=d||(o=Math.max(e.south,n.south),(n=Math.min(e.north,n.north))<=o)))return t.defined(i)?(i.west=d,i.south=o,i.east=r,i.north=n,i):new I(d,o,r,n)},I.simpleIntersection=function(e,n,a){var i=Math.max(e.west,n.west),r=Math.max(e.south,n.south),u=Math.min(e.east,n.east);if(!((n=Math.min(e.north,n.north))<=r||u<=i))return t.defined(a)?(a.west=i,a.south=r,a.east=u,a.north=n,a):new I(i,r,u,n)},I.union=function(e,n,i){t.defined(i)||(i=new I);var r=e.east,u=e.west,o=n.east,d=n.west;return r<u&&0<o?r+=a.CesiumMath.TWO_PI:o<d&&0<r&&(o+=a.CesiumMath.TWO_PI),r<u&&d<0?d+=a.CesiumMath.TWO_PI:o<d&&u<0&&(u+=a.CesiumMath.TWO_PI),d=a.CesiumMath.convertLongitudeRange(Math.min(u,d)),o=a.CesiumMath.convertLongitudeRange(Math.max(r,o)),i.west=d,i.south=Math.min(e.south,n.south),i.east=o,i.north=Math.max(e.north,n.north),i},I.expand=function(e,n,a){return t.defined(a)||(a=new I),a.west=Math.min(e.west,n.longitude),a.south=Math.min(e.south,n.latitude),a.east=Math.max(e.east,n.longitude),a.north=Math.max(e.north,n.latitude),a},I.contains=function(e,t){var n=t.longitude,i=t.latitude,r=e.west;return(t=e.east)<r&&(t+=a.CesiumMath.TWO_PI,n<0&&(n+=a.CesiumMath.TWO_PI)),(r<n||a.CesiumMath.equalsEpsilon(n,r,a.CesiumMath.EPSILON14))&&(n<t||a.CesiumMath.equalsEpsilon(n,t,a.CesiumMath.EPSILON14))&&i>=e.south&&i<=e.north};var E=new p;function P(e,n){this.x=t.defaultValue(e,0),this.y=t.defaultValue(n,0)}I.subsample=function(e,n,i,r){n=t.defaultValue(n,z.WGS84),i=t.defaultValue(i,0),t.defined(r)||(r=[]);var u=0,o=e.north,d=e.south,s=e.east,h=e.west,l=E;l.height=i,l.longitude=h,l.latitude=o,r[u]=n.cartographicToCartesian(l,r[u]),u++,l.longitude=s,r[u]=n.cartographicToCartesian(l,r[u]),u++,l.latitude=d,r[u]=n.cartographicToCartesian(l,r[u]),u++,l.longitude=h,r[u]=n.cartographicToCartesian(l,r[u]),u++,l.latitude=o<0?o:0<d?d:0;for(var f=1;f<8;++f)l.longitude=-Math.PI+f*a.CesiumMath.PI_OVER_TWO,I.contains(e,l)&&(r[u]=n.cartographicToCartesian(l,r[u]),u++);return 0===l.latitude&&(l.longitude=h,r[u]=n.cartographicToCartesian(l,r[u]),u++,l.longitude=s,r[u]=n.cartographicToCartesian(l,r[u]),u++),r.length=u,r},I.MAX_VALUE=Object.freeze(new I(-Math.PI,-a.CesiumMath.PI_OVER_TWO,Math.PI,a.CesiumMath.PI_OVER_TWO)),P.fromElements=function(e,n,a){return t.defined(a)?(a.x=e,a.y=n,a):new P(e,n)},P.fromCartesian3=P.clone=function(e,n){if(t.defined(e))return t.defined(n)?(n.x=e.x,n.y=e.y,n):new P(e.x,e.y)},P.fromCartesian4=P.clone,P.packedLength=2,P.pack=function(e,n,a){return a=t.defaultValue(a,0),n[a++]=e.x,n[a]=e.y,n},P.unpack=function(e,n,a){return n=t.defaultValue(n,0),t.defined(a)||(a=new P),a.x=e[n++],a.y=e[n],a},P.packArray=function(e,a){var i=e.length,r=2*i;if(t.defined(a)){if(!Array.isArray(a)&&a.length!==r)throw new n.DeveloperError("If result is a typed array, it must have exactly array.length * 2 elements");a.length!==r&&(a.length=r)}else a=new Array(r);for(var u=0;u<i;++u)P.pack(e[u],a,2*u);return a},P.unpackArray=function(e,n){var a=e.length;t.defined(n)?n.length=a/2:n=new Array(a/2);for(var i=0;i<a;i+=2){var r=i/2;n[r]=P.unpack(e,i,n[r])}return n},P.fromArray=P.unpack,P.maximumComponent=function(e){return Math.max(e.x,e.y)},P.minimumComponent=function(e){return Math.min(e.x,e.y)},P.minimumByComponent=function(e,t,n){return n.x=Math.min(e.x,t.x),n.y=Math.min(e.y,t.y),n},P.maximumByComponent=function(e,t,n){return n.x=Math.max(e.x,t.x),n.y=Math.max(e.y,t.y),n},P.magnitudeSquared=function(e){return e.x*e.x+e.y*e.y},P.magnitude=function(e){return Math.sqrt(P.magnitudeSquared(e))};var N=new P;P.distance=function(e,t){return P.subtract(e,t,N),P.magnitude(N)},P.distanceSquared=function(e,t){return P.subtract(e,t,N),P.magnitudeSquared(N)},P.normalize=function(e,t){var n=P.magnitude(e);return t.x=e.x/n,t.y=e.y/n,t},P.dot=function(e,t){return e.x*t.x+e.y*t.y},P.multiplyComponents=function(e,t,n){return n.x=e.x*t.x,n.y=e.y*t.y,n},P.divideComponents=function(e,t,n){return n.x=e.x/t.x,n.y=e.y/t.y,n},P.add=function(e,t,n){return n.x=e.x+t.x,n.y=e.y+t.y,n},P.subtract=function(e,t,n){return n.x=e.x-t.x,n.y=e.y-t.y,n},P.multiplyByScalar=function(e,t,n){return n.x=e.x*t,n.y=e.y*t,n},P.divideByScalar=function(e,t,n){return n.x=e.x/t,n.y=e.y/t,n},P.negate=function(e,t){return t.x=-e.x,t.y=-e.y,t},P.abs=function(e,t){return t.x=Math.abs(e.x),t.y=Math.abs(e.y),t};var U=new P;P.lerp=function(e,t,n,a){return P.multiplyByScalar(t,n,U),a=P.multiplyByScalar(e,1-n,a),P.add(U,a,a)};var L=new P,W=new P;P.angleBetween=function(e,t){return P.normalize(e,L),P.normalize(t,W),a.CesiumMath.acosClamped(P.dot(L,W))};var k=new P;P.mostOrthogonalAxis=function(e,t){return e=P.normalize(e,k),P.abs(e,e),e.x<=e.y?P.clone(P.UNIT_X,t):P.clone(P.UNIT_Y,t)},P.equals=function(e,n){return e===n||t.defined(e)&&t.defined(n)&&e.x===n.x&&e.y===n.y},P.equalsArray=function(e,t,n){return e.x===t[n]&&e.y===t[n+1]},P.equalsEpsilon=function(e,n,i,r){return e===n||t.defined(e)&&t.defined(n)&&a.CesiumMath.equalsEpsilon(e.x,n.x,i,r)&&a.CesiumMath.equalsEpsilon(e.y,n.y,i,r)},P.ZERO=Object.freeze(new P(0,0)),P.UNIT_X=Object.freeze(new P(1,0)),P.UNIT_Y=Object.freeze(new P(0,1)),P.prototype.clone=function(e){return P.clone(this,e)},P.prototype.equals=function(e){return P.equals(this,e)},P.prototype.equalsEpsilon=function(e,t,n){return P.equalsEpsilon(this,e,t,n)},P.prototype.toString=function(){return"("+this.x+", "+this.y+")"},e.Cartesian2=P,e.Cartesian3=i,e.Cartographic=p,e.Ellipsoid=z,e.Rectangle=I}));