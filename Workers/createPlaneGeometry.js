define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-6f81ad4c","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-700c1da0","./GeometryAttributes-4fcfcf40","./VertexFormat-7572c785"],(function(e,t,r,n,a,o,m,i,u,c,p){"use strict";function y(t){t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT),t=e.defaultValue(t.vertexFormat,p.VertexFormat.DEFAULT),this._vertexFormat=t,this._workerName="createPlaneGeometry"}y.packedLength=p.VertexFormat.packedLength,y.pack=function(t,r,n){return n=e.defaultValue(n,0),p.VertexFormat.pack(t._vertexFormat,r,n),r};var s=new p.VertexFormat,A={vertexFormat:s};y.unpack=function(t,r,n){return r=e.defaultValue(r,0),r=p.VertexFormat.unpack(t,r,s),e.defined(n)?(n._vertexFormat=p.VertexFormat.clone(r,n._vertexFormat),n):new y(A)};var l=new n.Cartesian3(-.5,-.5,0),F=new n.Cartesian3(.5,.5,0);return y.createGeometry=function(e){var t,r,o=e._vertexFormat,m=new c.GeometryAttributes;return o.position&&((e=new Float64Array(12))[0]=l.x,e[1]=l.y,e[2]=0,e[3]=F.x,e[4]=l.y,e[5]=0,e[6]=F.x,e[7]=F.y,e[8]=0,e[9]=l.x,e[10]=F.y,e[11]=0,m.position=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e}),o.normal&&((e=new Float32Array(12))[0]=0,e[1]=0,e[2]=1,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=1,e[9]=0,e[10]=0,e[11]=1,m.normal=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e})),o.st&&((t=new Float32Array(8))[0]=0,t[1]=0,t[2]=1,t[3]=0,t[4]=1,t[5]=1,t[6]=0,t[7]=1,m.st=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:t})),o.tangent&&((t=new Float32Array(12))[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=1,t[7]=0,t[8]=0,t[9]=1,t[10]=0,t[11]=0,m.tangent=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:t})),o.bitangent&&((r=new Float32Array(12))[0]=0,r[1]=1,r[2]=0,r[3]=0,r[4]=1,r[5]=0,r[6]=0,r[7]=1,r[8]=0,r[9]=0,r[10]=1,r[11]=0,m.bitangent=new u.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:r})),(r=new Uint16Array(6))[0]=0,r[1]=1,r[2]=2,r[3]=0,r[4]=2,r[5]=3),new u.Geometry({attributes:m,indices:r,primitiveType:u.PrimitiveType.TRIANGLES,boundingSphere:new a.BoundingSphere(n.Cartesian3.ZERO,Math.sqrt(2))})},function(t,r){return e.defined(r)&&(t=y.unpack(t,r)),y.createGeometry(t)}}));