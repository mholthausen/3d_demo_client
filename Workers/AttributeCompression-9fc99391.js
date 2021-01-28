define(["exports","./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162"],(function(t,o,e,n,a){"use strict";var c={octEncodeInRange:function(t,o,e){var a;return e.x=t.x/(Math.abs(t.x)+Math.abs(t.y)+Math.abs(t.z)),e.y=t.y/(Math.abs(t.x)+Math.abs(t.y)+Math.abs(t.z)),t.z<0&&(a=e.x,t=e.y,e.x=(1-Math.abs(t))*n.CesiumMath.signNotZero(a),e.y=(1-Math.abs(a))*n.CesiumMath.signNotZero(t)),e.x=n.CesiumMath.toSNorm(e.x,o),e.y=n.CesiumMath.toSNorm(e.y,o),e},octEncode:function(t,o){return c.octEncodeInRange(t,255,o)}},r=new a.Cartesian2,i=new Uint8Array(1);function u(t){return i[0]=t,i[0]}c.octEncodeToCartesian4=function(t,o){return c.octEncodeInRange(t,65535,r),o.x=u(r.x*(1/256)),o.y=u(r.x),o.z=u(r.y*(1/256)),o.w=u(r.y),o},c.octDecodeInRange=function(t,o,e,c){return c.x=n.CesiumMath.fromSNorm(t,e),c.y=n.CesiumMath.fromSNorm(o,e),c.z=1-(Math.abs(c.x)+Math.abs(c.y)),c.z<0&&(e=c.x,c.x=(1-Math.abs(c.y))*n.CesiumMath.signNotZero(e),c.y=(1-Math.abs(e))*n.CesiumMath.signNotZero(c.y)),a.Cartesian3.normalize(c,c)},c.octDecode=function(t,o,e){return c.octDecodeInRange(t,o,255,e)},c.octDecodeFromCartesian4=function(t,o){var e=256*t.x+t.y;return t=256*t.z+t.w,c.octDecodeInRange(e,t,65535,o)},c.octPackFloat=function(t){return 256*t.x+t.y};var s=new a.Cartesian2;function d(t){return t>>1^-(1&t)}c.octEncodeFloat=function(t){return c.octEncode(t,s),c.octPackFloat(s)},c.octDecodeFloat=function(t,o){var e=256*((e=t/256)-(t=Math.floor(e)));return c.octDecode(t,e,o)},c.octPack=function(t,o,e,n){return t=c.octEncodeFloat(t),o=c.octEncodeFloat(o),e=c.octEncode(e,s),n.x=65536*e.x+t,n.y=65536*e.y+o,n},c.octUnpack=function(t,o,e,n){var a=t.x/65536,r=Math.floor(a),i=65536*(a-r);a=65536*((a=t.y/65536)-(t=Math.floor(a))),c.octDecodeFloat(i,o),c.octDecodeFloat(a,e),c.octDecode(r,t,n)},c.compressTextureCoordinates=function(t){return 4096*(4095*t.x|0)+(4095*t.y|0)},c.decompressTextureCoordinates=function(t,o){var e=t/4096;return e=Math.floor(e),o.x=e/4095,o.y=(t-4096*e)/4095,o},c.zigZagDeltaDecode=function(t,e,n){for(var a=t.length,c=0,r=0,i=0,u=0;u<a;++u)c+=d(t[u]),r+=d(e[u]),t[u]=c,e[u]=r,o.defined(n)&&(i+=d(n[u]),n[u]=i)},t.AttributeCompression=c}));