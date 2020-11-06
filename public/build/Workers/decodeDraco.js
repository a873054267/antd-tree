define(["./when-cbf8cd21","./Check-35e1a91d","./Math-e66fad2a","./RuntimeError-f4c64df1","./WebGLConstants-95ceb4e9","./ComponentDatatype-7ee14e67","./IndexDatatype-66caba23","./createTaskProcessorWorker"],function(T,e,r,y,t,p,a,n){"use strict";var w;function b(e,r,t){var a,n,o,i,f,s,u,c,A,d=e.num_points(),l=t.num_components(),y=d*l,b=new w.AttributeQuantizationTransform;if(b.InitFromAttribute(t)){for(var m=new Array(l),_=0;_<l;++_)m[_]=b.min_value(_);a={quantizationBits:b.quantization_bits(),minValues:m,range:b.range(),octEncoded:!1}}w.destroy(b),(b=new w.AttributeOctahedronTransform).InitFromAttribute(t)&&(a={quantizationBits:b.quantization_bits(),octEncoded:!0}),w.destroy(b),n=T.defined(a)?(o=e,i=r,f=t,s=y,A=a.quantizationBits<=8?(c=w._malloc(s),i.GetAttributeDataArrayForAllPoints(o,f,w.DT_UINT8,s,c),new Uint8Array(w.HEAPU8.buffer,c,s).slice()):(u=2*s,c=w._malloc(u),i.GetAttributeDataArrayForAllPoints(o,f,w.DT_UINT16,u,c),new Uint16Array(w.HEAPU16.buffer,c,s).slice()),w._free(c),A):function(e,r,t,a){var n;switch(t.data_type()){case 1:case 11:i=w._malloc(a),r.GetAttributeDataArrayForAllPoints(e,t,w.DT_INT8,a,i),n=new Int8Array(w.HEAP8.buffer,i,a).slice(),w._free(i);break;case 2:i=w._malloc(a),r.GetAttributeDataArrayForAllPoints(e,t,w.DT_UINT8,a,i),n=new Uint8Array(w.HEAPU8.buffer,i,a).slice(),w._free(i);break;case 3:var o=2*a,i=w._malloc(o);r.GetAttributeDataArrayForAllPoints(e,t,w.DT_INT16,o,i),n=new Int16Array(w.HEAP16.buffer,i,a).slice(),w._free(i);break;case 4:o=2*a;i=w._malloc(o),r.GetAttributeDataArrayForAllPoints(e,t,w.DT_UINT16,o,i),n=new Uint16Array(w.HEAPU16.buffer,i,a).slice(),w._free(i);break;case 5:case 7:o=4*a;i=w._malloc(o),r.GetAttributeDataArrayForAllPoints(e,t,w.DT_INT32,o,i),n=new Int32Array(w.HEAP32.buffer,i,a).slice(),w._free(i);break;case 6:case 8:o=4*a;i=w._malloc(o),r.GetAttributeDataArrayForAllPoints(e,t,w.DT_UINT32,o,i),n=new Uint32Array(w.HEAPU32.buffer,i,a).slice(),w._free(i);break;case 9:case 10:o=4*a;i=w._malloc(o),r.GetAttributeDataArrayForAllPoints(e,t,w.DT_FLOAT32,o,i),n=new Float32Array(w.HEAPF32.buffer,i,a).slice(),w._free(i)}return n}(e,r,t,y);var D=p.ComponentDatatype.fromTypedArray(n);return{array:n,data:{componentsPerAttribute:l,componentDatatype:D,byteOffset:t.byte_offset(),byteStride:p.ComponentDatatype.getSizeInBytes(D)*l,normalized:t.normalized(),quantization:a}}}function o(e){var r=new w.Decoder,t=["INVALID","POSITION","NORMAL","COLOR","TEX_COORD"];if(e.dequantizeInShader)for(var a=0;a<t.length;++a)r.SkipAttributeTransform(w[t[a]]);var n=e.bufferView,o=new w.DecoderBuffer;if(o.Init(e.array,n.byteLength),r.GetEncodedGeometryType(o)!==w.TRIANGULAR_MESH)throw new y.RuntimeError("Unsupported draco mesh geometry type.");var i=new w.Mesh,f=r.DecodeBufferToMesh(o,i);if(!f.ok()||0===i.ptr)throw new y.RuntimeError("Error decoding draco mesh geometry: "+f.error_msg());var s={},u=e.compressedAttributes;for(var c in u)if(u.hasOwnProperty(c)){var A=u[c];if(-1===A)continue;var d=r.GetAttribute(i,A);s[c]=b(i,r,d)}var l={indexArray:function(e,r){var t=3*e.num_faces(),a=4*t,n=w._malloc(a);r.GetTrianglesUInt32Array(e,a,n);var o=new Uint32Array(w.HEAPU32.buffer,n,t).slice();return w._free(n),{typedArray:o,numberOfIndices:t}}(i,r),attributeData:s};return w.destroy(o),w.destroy(i),w.destroy(r),l}function i(e){return(T.defined(e.primitive)?o:function(e){var r=new w.Decoder;e.dequantizeInShader&&(r.SkipAttributeTransform(w.POSITION),r.SkipAttributeTransform(w.NORMAL));var t=new w.DecoderBuffer;if(t.Init(e.buffer,e.buffer.length),r.GetEncodedGeometryType(t)!==w.POINT_CLOUD)throw new y.RuntimeError("Draco geometry type must be POINT_CLOUD.");var a=new w.PointCloud,n=r.DecodeBufferToPointCloud(t,a);if(!n.ok()||0===a.ptr)throw new y.RuntimeError("Error decoding draco point cloud: "+n.error_msg());w.destroy(t);var o,i,f={},s=e.properties;for(var u in s){s.hasOwnProperty(u)&&(o=s[u],i=r.GetAttributeByUniqueId(a,o),f[u]=b(a,r,i))}return w.destroy(a),w.destroy(r),f})(e)}function f(e){w=e,self.onmessage=n(i),self.postMessage(!0)}return function(e){var r=e.data.webAssemblyConfig;if(T.defined(r))return require([r.modulePath],function(e){T.defined(r.wasmBinaryFile)?(T.defined(e)||(e=self.DracoDecoderModule),e(r).then(function(e){f(e)})):f(e())})}});