define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-6f81ad4c","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-700c1da0","./GeometryAttributes-4fcfcf40","./AttributeCompression-9fc99391","./GeometryPipeline-e6a15a43","./EncodedCartesian3-4df2eabb","./IndexDatatype-53503fee","./IntersectionTests-7f3bcd5c","./Plane-b6058d9b","./PrimitivePipeline-6fc2e482","./WebMercatorProjection-df58d479","./createTaskProcessorWorker"],(function(e,r,t,n,o,a,i,c,s,f,d,u,b,m,p,l,y,P,k){"use strict";var C={};return k((function(r,t){for(var n=r.subTasks,o=n.length,a=new Array(o),i=0;i<o;i++){var c=n[i],s=c.geometry,f=c.moduleName;e.defined(f)?(f=function(r){var t=C[r];return e.defined(t)||("object"==typeof exports?C[t]=t=require("Workers/"+r):require(["Workers/"+r],(function(e){C[t=e]=e}))),t}(f),a[i]=f(s,c.offset)):a[i]=s}return e.when.all(a,(function(e){return y.PrimitivePipeline.packCreateGeometryResults(e,t)}))}))}));