define(["exports","./Math-44e92d6b"],(function(r,t){"use strict";var e={computePositions:function(r,e,a,i,n){for(var o=.5*r,s=-o,u=(r=i+i,new Float64Array(3*(n?2*r:r))),c=0,f=0,h=n?3*r:0,y=n?3*(r+i):3*i,M=0;M<i;M++){var d=M/i*t.CesiumMath.TWO_PI,m=(v=Math.cos(d))*a,v=(d=(b=Math.sin(d))*a,v*e),b=b*e;u[f+h]=m,u[f+h+1]=d,u[f+h+2]=s,u[f+y]=v,u[f+y+1]=b,u[f+y+2]=o,f+=3,n&&(u[c++]=m,u[c++]=d,u[c++]=s,u[c++]=v,u[c++]=b,u[c++]=o)}return u}};r.CylinderGeometryLibrary=e}));