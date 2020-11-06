define(["exports","./when-cbf8cd21","./Check-35e1a91d","./Cartesian2-44433f55","./Transforms-d9350502","./ComponentDatatype-7ee14e67","./GeometryAttribute-424f2c6a","./GeometryAttributes-90846c5f","./GeometryOffsetAttribute-84f7eff3","./VertexFormat-cc24f342"],function(t,l,e,d,C,b,z,F,w,m){"use strict";var v=new d.Cartesian3;function u(t){var e=(t=l.defaultValue(t,l.defaultValue.EMPTY_OBJECT)).minimum,a=t.maximum,n=l.defaultValue(t.vertexFormat,m.VertexFormat.DEFAULT);this._minimum=d.Cartesian3.clone(e),this._maximum=d.Cartesian3.clone(a),this._vertexFormat=n,this._offsetAttribute=t.offsetAttribute,this._workerName="createBoxGeometry"}u.fromDimensions=function(t){var e=(t=l.defaultValue(t,l.defaultValue.EMPTY_OBJECT)).dimensions,a=d.Cartesian3.multiplyByScalar(e,.5,new d.Cartesian3);return new u({minimum:d.Cartesian3.negate(a,new d.Cartesian3),maximum:a,vertexFormat:t.vertexFormat,offsetAttribute:t.offsetAttribute})},u.fromAxisAlignedBoundingBox=function(t){return new u({minimum:t.minimum,maximum:t.maximum})},u.packedLength=2*d.Cartesian3.packedLength+m.VertexFormat.packedLength+1,u.pack=function(t,e,a){return a=l.defaultValue(a,0),d.Cartesian3.pack(t._minimum,e,a),d.Cartesian3.pack(t._maximum,e,a+d.Cartesian3.packedLength),m.VertexFormat.pack(t._vertexFormat,e,a+2*d.Cartesian3.packedLength),e[a+2*d.Cartesian3.packedLength+m.VertexFormat.packedLength]=l.defaultValue(t._offsetAttribute,-1),e};var a,s=new d.Cartesian3,y=new d.Cartesian3,p=new m.VertexFormat,x={minimum:s,maximum:y,vertexFormat:p,offsetAttribute:void 0};u.unpack=function(t,e,a){e=l.defaultValue(e,0);var n=d.Cartesian3.unpack(t,e,s),r=d.Cartesian3.unpack(t,e+d.Cartesian3.packedLength,y),i=m.VertexFormat.unpack(t,e+2*d.Cartesian3.packedLength,p),o=t[e+2*d.Cartesian3.packedLength+m.VertexFormat.packedLength];return l.defined(a)?(a._minimum=d.Cartesian3.clone(n,a._minimum),a._maximum=d.Cartesian3.clone(r,a._maximum),a._vertexFormat=m.VertexFormat.clone(i,a._vertexFormat),a._offsetAttribute=-1===o?void 0:o,a):(x.offsetAttribute=-1===o?void 0:o,new u(x))},u.createGeometry=function(t){var e=t._minimum,a=t._maximum,n=t._vertexFormat;if(!d.Cartesian3.equals(e,a)){var r,i,o,m,u,s,y=new F.GeometryAttributes;n.position&&(n.st||n.normal||n.tangent||n.bitangent)?(n.position&&((i=new Float64Array(72))[0]=e.x,i[1]=e.y,i[2]=a.z,i[3]=a.x,i[4]=e.y,i[5]=a.z,i[6]=a.x,i[7]=a.y,i[8]=a.z,i[9]=e.x,i[10]=a.y,i[11]=a.z,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=a.x,i[16]=e.y,i[17]=e.z,i[18]=a.x,i[19]=a.y,i[20]=e.z,i[21]=e.x,i[22]=a.y,i[23]=e.z,i[24]=a.x,i[25]=e.y,i[26]=e.z,i[27]=a.x,i[28]=a.y,i[29]=e.z,i[30]=a.x,i[31]=a.y,i[32]=a.z,i[33]=a.x,i[34]=e.y,i[35]=a.z,i[36]=e.x,i[37]=e.y,i[38]=e.z,i[39]=e.x,i[40]=a.y,i[41]=e.z,i[42]=e.x,i[43]=a.y,i[44]=a.z,i[45]=e.x,i[46]=e.y,i[47]=a.z,i[48]=e.x,i[49]=a.y,i[50]=e.z,i[51]=a.x,i[52]=a.y,i[53]=e.z,i[54]=a.x,i[55]=a.y,i[56]=a.z,i[57]=e.x,i[58]=a.y,i[59]=a.z,i[60]=e.x,i[61]=e.y,i[62]=e.z,i[63]=a.x,i[64]=e.y,i[65]=e.z,i[66]=a.x,i[67]=e.y,i[68]=a.z,i[69]=e.x,i[70]=e.y,i[71]=a.z,y.position=new z.GeometryAttribute({componentDatatype:b.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:i})),n.normal&&((o=new Float32Array(72))[0]=0,o[1]=0,o[2]=1,o[3]=0,o[4]=0,o[5]=1,o[6]=0,o[7]=0,o[8]=1,o[9]=0,o[10]=0,o[11]=1,o[12]=0,o[13]=0,o[14]=-1,o[15]=0,o[16]=0,o[17]=-1,o[18]=0,o[19]=0,o[20]=-1,o[21]=0,o[22]=0,o[23]=-1,o[24]=1,o[25]=0,o[26]=0,o[27]=1,o[28]=0,o[29]=0,o[30]=1,o[31]=0,o[32]=0,o[33]=1,o[34]=0,o[35]=0,o[36]=-1,o[37]=0,o[38]=0,o[39]=-1,o[40]=0,o[41]=0,o[42]=-1,o[43]=0,o[44]=0,o[45]=-1,o[46]=0,o[47]=0,o[48]=0,o[49]=1,o[50]=0,o[51]=0,o[52]=1,o[53]=0,o[54]=0,o[55]=1,o[56]=0,o[57]=0,o[58]=1,o[59]=0,o[60]=0,o[61]=-1,o[62]=0,o[63]=0,o[64]=-1,o[65]=0,o[66]=0,o[67]=-1,o[68]=0,o[69]=0,o[70]=-1,o[71]=0,y.normal=new z.GeometryAttribute({componentDatatype:b.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:o})),n.st&&((m=new Float32Array(48))[0]=0,m[1]=0,m[2]=1,m[3]=0,m[4]=1,m[5]=1,m[6]=0,m[7]=1,m[8]=1,m[9]=0,m[10]=0,m[11]=0,m[12]=0,m[13]=1,m[14]=1,m[15]=1,m[16]=0,m[17]=0,m[18]=1,m[19]=0,m[20]=1,m[21]=1,m[22]=0,m[23]=1,m[24]=1,m[25]=0,m[26]=0,m[27]=0,m[28]=0,m[29]=1,m[30]=1,m[31]=1,m[32]=1,m[33]=0,m[34]=0,m[35]=0,m[36]=0,m[37]=1,m[38]=1,m[39]=1,m[40]=0,m[41]=0,m[42]=1,m[43]=0,m[44]=1,m[45]=1,m[46]=0,m[47]=1,y.st=new z.GeometryAttribute({componentDatatype:b.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:m})),n.tangent&&((u=new Float32Array(72))[0]=1,u[1]=0,u[2]=0,u[3]=1,u[4]=0,u[5]=0,u[6]=1,u[7]=0,u[8]=0,u[9]=1,u[10]=0,u[11]=0,u[12]=-1,u[13]=0,u[14]=0,u[15]=-1,u[16]=0,u[17]=0,u[18]=-1,u[19]=0,u[20]=0,u[21]=-1,u[22]=0,u[23]=0,u[24]=0,u[25]=1,u[26]=0,u[27]=0,u[28]=1,u[29]=0,u[30]=0,u[31]=1,u[32]=0,u[33]=0,u[34]=1,u[35]=0,u[36]=0,u[37]=-1,u[38]=0,u[39]=0,u[40]=-1,u[41]=0,u[42]=0,u[43]=-1,u[44]=0,u[45]=0,u[46]=-1,u[47]=0,u[48]=-1,u[49]=0,u[50]=0,u[51]=-1,u[52]=0,u[53]=0,u[54]=-1,u[55]=0,u[56]=0,u[57]=-1,u[58]=0,u[59]=0,u[60]=1,u[61]=0,u[62]=0,u[63]=1,u[64]=0,u[65]=0,u[66]=1,u[67]=0,u[68]=0,u[69]=1,u[70]=0,u[71]=0,y.tangent=new z.GeometryAttribute({componentDatatype:b.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:u})),n.bitangent&&((s=new Float32Array(72))[0]=0,s[1]=1,s[2]=0,s[3]=0,s[4]=1,s[5]=0,s[6]=0,s[7]=1,s[8]=0,s[9]=0,s[10]=1,s[11]=0,s[12]=0,s[13]=1,s[14]=0,s[15]=0,s[16]=1,s[17]=0,s[18]=0,s[19]=1,s[20]=0,s[21]=0,s[22]=1,s[23]=0,s[24]=0,s[25]=0,s[26]=1,s[27]=0,s[28]=0,s[29]=1,s[30]=0,s[31]=0,s[32]=1,s[33]=0,s[34]=0,s[35]=1,s[36]=0,s[37]=0,s[38]=1,s[39]=0,s[40]=0,s[41]=1,s[42]=0,s[43]=0,s[44]=1,s[45]=0,s[46]=0,s[47]=1,s[48]=0,s[49]=0,s[50]=1,s[51]=0,s[52]=0,s[53]=1,s[54]=0,s[55]=0,s[56]=1,s[57]=0,s[58]=0,s[59]=1,s[60]=0,s[61]=0,s[62]=1,s[63]=0,s[64]=0,s[65]=1,s[66]=0,s[67]=0,s[68]=1,s[69]=0,s[70]=0,s[71]=1,y.bitangent=new z.GeometryAttribute({componentDatatype:b.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:s})),(r=new Uint16Array(36))[0]=0,r[1]=1,r[2]=2,r[3]=0,r[4]=2,r[5]=3,r[6]=6,r[7]=5,r[8]=4,r[9]=7,r[10]=6,r[11]=4,r[12]=8,r[13]=9,r[14]=10,r[15]=8,r[16]=10,r[17]=11,r[18]=14,r[19]=13,r[20]=12,r[21]=15,r[22]=14,r[23]=12,r[24]=18,r[25]=17,r[26]=16,r[27]=19,r[28]=18,r[29]=16,r[30]=20,r[31]=21,r[32]=22,r[33]=20,r[34]=22,r[35]=23):((i=new Float64Array(24))[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=a.x,i[4]=e.y,i[5]=e.z,i[6]=a.x,i[7]=a.y,i[8]=e.z,i[9]=e.x,i[10]=a.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=a.z,i[15]=a.x,i[16]=e.y,i[17]=a.z,i[18]=a.x,i[19]=a.y,i[20]=a.z,i[21]=e.x,i[22]=a.y,i[23]=a.z,y.position=new z.GeometryAttribute({componentDatatype:b.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:i}),(r=new Uint16Array(36))[0]=4,r[1]=5,r[2]=6,r[3]=4,r[4]=6,r[5]=7,r[6]=1,r[7]=0,r[8]=3,r[9]=1,r[10]=3,r[11]=2,r[12]=1,r[13]=6,r[14]=5,r[15]=1,r[16]=2,r[17]=6,r[18]=2,r[19]=3,r[20]=7,r[21]=2,r[22]=7,r[23]=6,r[24]=3,r[25]=0,r[26]=4,r[27]=3,r[28]=4,r[29]=7,r[30]=0,r[31]=1,r[32]=5,r[33]=0,r[34]=5,r[35]=4);var p,x,f,c=d.Cartesian3.subtract(a,e,v),A=.5*d.Cartesian3.magnitude(c);return l.defined(t._offsetAttribute)&&(p=i.length,x=new Uint8Array(p/3),f=t._offsetAttribute===w.GeometryOffsetAttribute.NONE?0:1,w.arrayFill(x,f),y.applyOffset=new z.GeometryAttribute({componentDatatype:b.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:x})),new z.Geometry({attributes:y,indices:r,primitiveType:z.PrimitiveType.TRIANGLES,boundingSphere:new C.BoundingSphere(d.Cartesian3.ZERO,A),offsetAttribute:t._offsetAttribute})}},u.getUnitBox=function(){return l.defined(a)||(a=u.createGeometry(u.fromDimensions({dimensions:new d.Cartesian3(1,1,1),vertexFormat:m.VertexFormat.POSITION_ONLY}))),a},t.BoxGeometry=u});