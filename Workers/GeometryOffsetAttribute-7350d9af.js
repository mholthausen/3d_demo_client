define(["exports","./when-54c2dc71","./Check-6c0211bc"],(function(e,t,a){"use strict";var f=Object.freeze({NONE:0,TOP:1,ALL:2});e.GeometryOffsetAttribute=f,e.arrayFill=function(e,a,f,r){if("function"==typeof e.fill)return e.fill(a,f,r);for(var n=e.length>>>0,i=(f=t.defaultValue(f,0))<0?Math.max(n+f,0):Math.min(f,n),l=(r=t.defaultValue(r,n))<0?Math.max(n+r,0):Math.min(r,n);i<l;)e[i]=a,i++;return e}}));