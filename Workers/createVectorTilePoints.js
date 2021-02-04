define(["./AttributeCompression-8ecc041c","./Cartesian2-49b1de22","./Math-44e92d6b","./createTaskProcessorWorker","./Check-6c0211bc","./when-54c2dc71"],(function(e,a,r,t,n,i){"use strict";var s=32767,o=new a.Cartographic,c=new a.Cartesian3,u=new a.Rectangle,p=new a.Ellipsoid,h={min:void 0,max:void 0};return t((function(t,n){var i=new Uint16Array(t.positions);!function(e){e=new Float64Array(e);var r=0;h.min=e[r++],h.max=e[r++],a.Rectangle.unpack(e,2,u),r+=a.Rectangle.packedLength,a.Ellipsoid.unpack(e,r,p)}(t.packedBuffer);var l=u,d=p,f=h.min,m=h.max,C=i.length/3,g=i.subarray(0,C),b=i.subarray(C,2*C),w=i.subarray(2*C,3*C);e.AttributeCompression.zigZagDeltaDecode(g,b,w);for(var k=new Float64Array(i.length),v=0;v<C;++v){var y=g[v],A=b[v],M=w[v];y=r.CesiumMath.lerp(l.west,l.east,y/s),A=r.CesiumMath.lerp(l.south,l.north,A/s),M=r.CesiumMath.lerp(f,m,M/s),M=a.Cartographic.fromRadians(y,A,M,o),M=d.cartographicToCartesian(M,c),a.Cartesian3.pack(M,k,3*v)}return n.push(k.buffer),{positions:k.buffer}}))}));