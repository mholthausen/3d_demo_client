define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./IndexDatatype-53503fee","./createTaskProcessorWorker"],(function(e,t,r,n,o,a,i,u){"use strict";var s;function c(t,r,n){var o,i=t.num_points(),u=n.num_components(),c=new s.AttributeQuantizationTransform;if(c.InitFromAttribute(n)){for(var d=new Array(u),y=0;y<u;++y)d[y]=c.min_value(y);o={quantizationBits:c.quantization_bits(),minValues:d,range:c.range(),octEncoded:!1}}return s.destroy(c),(c=new s.AttributeOctahedronTransform).InitFromAttribute(n)&&(o={quantizationBits:c.quantization_bits(),octEncoded:!0}),s.destroy(c),i*=u,{array:r=e.defined(o)?function(e,t,r,n,o){var a,i;n.quantizationBits<=8?(i=new s.DracoUInt8Array,a=new Uint8Array(o),t.GetAttributeUInt8ForAllPoints(e,r,i)):(i=new s.DracoUInt16Array,a=new Uint16Array(o),t.GetAttributeUInt16ForAllPoints(e,r,i));for(var u=0;u<o;++u)a[u]=i.GetValue(u);return s.destroy(i),a}(t,r,n,o,i):function(e,t,r,n){var o,a;switch(r.data_type()){case 1:case 11:a=new s.DracoInt8Array,o=new Int8Array(n),t.GetAttributeInt8ForAllPoints(e,r,a);break;case 2:a=new s.DracoUInt8Array,o=new Uint8Array(n),t.GetAttributeUInt8ForAllPoints(e,r,a);break;case 3:a=new s.DracoInt16Array,o=new Int16Array(n),t.GetAttributeInt16ForAllPoints(e,r,a);break;case 4:a=new s.DracoUInt16Array,o=new Uint16Array(n),t.GetAttributeUInt16ForAllPoints(e,r,a);break;case 5:case 7:a=new s.DracoInt32Array,o=new Int32Array(n),t.GetAttributeInt32ForAllPoints(e,r,a);break;case 6:case 8:a=new s.DracoUInt32Array,o=new Uint32Array(n),t.GetAttributeUInt32ForAllPoints(e,r,a);break;case 9:case 10:a=new s.DracoFloat32Array,o=new Float32Array(n),t.GetAttributeFloatForAllPoints(e,r,a)}for(var i=0;i<n;++i)o[i]=a.GetValue(i);return s.destroy(a),o}(t,r,n,i),data:{componentsPerAttribute:u,componentDatatype:i=a.ComponentDatatype.fromTypedArray(r),byteOffset:n.byte_offset(),byteStride:a.ComponentDatatype.getSizeInBytes(i)*u,normalized:n.normalized(),quantization:o}}}function d(e){var t=new s.Decoder,r=["POSITION","NORMAL","COLOR","TEX_COORD"];if(e.dequantizeInShader)for(var o=0;o<r.length;++o)t.SkipAttributeTransform(s[r[o]]);var a=e.bufferView,u=new s.DecoderBuffer;if(u.Init(e.array,a.byteLength),t.GetEncodedGeometryType(u)!==s.TRIANGULAR_MESH)throw new n.RuntimeError("Unsupported draco mesh geometry type.");var d=new s.Mesh;if(!(a=t.DecodeBufferToMesh(u,d)).ok()||0===d.ptr)throw new n.RuntimeError("Error decoding draco mesh geometry: "+a.error_msg());s.destroy(u);var y,f,A={},m=e.compressedAttributes;for(y in m)m.hasOwnProperty(y)&&(f=m[y],f=t.GetAttributeByUniqueId(d,f),A[y]=c(d,t,f));return e={indexArray:function(e,t){for(var r=e.num_points(),n=e.num_faces(),o=new s.DracoInt32Array,a=3*n,u=i.IndexDatatype.createTypedArray(r,a),c=0,d=0;d<n;++d)t.GetFaceFromMesh(e,d,o),u[c+0]=o.GetValue(0),u[c+1]=o.GetValue(1),u[c+2]=o.GetValue(2),c+=3;return s.destroy(o),{typedArray:u,numberOfIndices:a}}(d,t),attributeData:A},s.destroy(d),s.destroy(t),e}function y(t){return(e.defined(t.primitive)?d:function(e){var t=new s.Decoder;e.dequantizeInShader&&(t.SkipAttributeTransform(s.POSITION),t.SkipAttributeTransform(s.NORMAL));var r=new s.DecoderBuffer;if(r.Init(e.buffer,e.buffer.length),t.GetEncodedGeometryType(r)!==s.POINT_CLOUD)throw new n.RuntimeError("Draco geometry type must be POINT_CLOUD.");var o=new s.PointCloud,a=t.DecodeBufferToPointCloud(r,o);if(!a.ok()||0===o.ptr)throw new n.RuntimeError("Error decoding draco point cloud: "+a.error_msg());s.destroy(r);var i,u,d={},y=e.properties;for(i in y)y.hasOwnProperty(i)&&(u=y[i],u=t.GetAttributeByUniqueId(o,u),d[i]=c(o,t,u));return s.destroy(o),s.destroy(t),d})(t)}function f(e){s=e,self.onmessage=u(y),self.postMessage(!0)}return function(t){var r=t.data.webAssemblyConfig;if(e.defined(r))return require([r.modulePath],(function(t){e.defined(r.wasmBinaryFile)?(e.defined(t)||(t=self.DracoDecoderModule),t(r).then((function(e){f(e)}))):f(t())}))}}));