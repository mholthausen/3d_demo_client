define(["./AttributeCompression-8ecc041c","./Cartesian2-49b1de22","./IndexDatatype-46306178","./Math-44e92d6b","./createTaskProcessorWorker","./Check-6c0211bc","./when-54c2dc71","./WebGLConstants-76bb35d1"],(function(a,e,r,n,t,i,s,c){"use strict";var u=32767,o=new e.Cartographic,p=new e.Cartesian3,f=new e.Rectangle,C=new e.Ellipsoid,d=new e.Cartesian3,b={min:void 0,max:void 0},w=new e.Cartesian3,h=new e.Cartesian3,l=new e.Cartesian3,y=new e.Cartesian3,k=new e.Cartesian3;return t((function(t,i){var s=new Uint16Array(t.positions),c=new Uint16Array(t.widths),v=new Uint32Array(t.counts),A=new Uint16Array(t.batchIds);!function(a){a=new Float64Array(a);var r=0;b.min=a[r++],b.max=a[r++],e.Rectangle.unpack(a,2,f),r+=e.Rectangle.packedLength,e.Ellipsoid.unpack(a,r,C),r+=e.Ellipsoid.packedLength,e.Cartesian3.unpack(a,r,d)}(t.packedBuffer);for(var g=d,m=function(r,t,i,s,c){var f=r.length/3,C=r.subarray(0,f),d=r.subarray(f,2*f),b=r.subarray(2*f,3*f);a.AttributeCompression.zigZagDeltaDecode(C,d,b);for(var w=new Float64Array(r.length),h=0;h<f;++h){var l=C[h],y=d[h],k=b[h];l=n.CesiumMath.lerp(t.west,t.east,l/u),y=n.CesiumMath.lerp(t.south,t.north,y/u),k=n.CesiumMath.lerp(i,s,k/u),k=e.Cartographic.fromRadians(l,y,k,o),k=c.cartographicToCartesian(k,p),e.Cartesian3.pack(k,w,3*h)}return w}(s,f,b.min,b.max,C),x=(s=4*(t=m.length/3)-4,new Float32Array(3*s)),E=new Float32Array(3*s),D=new Float32Array(3*s),I=new Float32Array(2*s),T=new Uint16Array(s),U=0,F=0,N=0,R=0,M=v.length,P=0;P<M;++P){for(var L,S=v[P],_=c[P],G=A[P],W=0;W<S;++W){0===W?(z=e.Cartesian3.unpack(m,3*R,w),B=e.Cartesian3.unpack(m,3*(R+1),h),L=e.Cartesian3.subtract(z,B,l),e.Cartesian3.add(z,L,L)):L=e.Cartesian3.unpack(m,3*(R+W-1),l);var B,z,H,O=e.Cartesian3.unpack(m,3*(R+W),y);W===S-1?(B=e.Cartesian3.unpack(m,3*(R+S-1),w),z=e.Cartesian3.unpack(m,3*(R+S-2),h),H=e.Cartesian3.subtract(B,z,k),e.Cartesian3.add(B,H,H)):H=e.Cartesian3.unpack(m,3*(R+W+1),k),e.Cartesian3.subtract(L,g,L),e.Cartesian3.subtract(O,g,O),e.Cartesian3.subtract(H,g,H);for(var Y=W===S-1?2:4,Z=0===W?2:0;Z<Y;++Z){e.Cartesian3.pack(O,x,U),e.Cartesian3.pack(L,E,U),e.Cartesian3.pack(H,D,U),U+=3;var j=Z-2<0?-1:1;I[F++]=Z%2*2-1,I[F++]=j*_,T[N++]=G}}R+=S}var q=r.IndexDatatype.createTypedArray(s,6*t-6),J=0,K=0;for(M=t-1,P=0;P<M;++P)q[K++]=J,q[K++]=J+2,q[K++]=J+1,q[K++]=J+1,q[K++]=J+2,q[K++]=J+3,J+=4;return i.push(x.buffer,E.buffer,D.buffer),i.push(I.buffer,T.buffer,q.buffer),{indexDatatype:2===q.BYTES_PER_ELEMENT?r.IndexDatatype.UNSIGNED_SHORT:r.IndexDatatype.UNSIGNED_INT,currentPositions:x.buffer,previousPositions:E.buffer,nextPositions:D.buffer,expandAndWidth:I.buffer,batchIds:T.buffer,indices:q.buffer}}))}));