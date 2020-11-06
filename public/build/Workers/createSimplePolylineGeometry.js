define(["./when-cbf8cd21","./Check-35e1a91d","./Math-e66fad2a","./Cartesian2-44433f55","./Transforms-d9350502","./RuntimeError-f4c64df1","./WebGLConstants-95ceb4e9","./ComponentDatatype-7ee14e67","./GeometryAttribute-424f2c6a","./GeometryAttributes-90846c5f","./IndexDatatype-66caba23","./IntersectionTests-d04ec592","./Plane-94f78648","./ArcType-2b58731c","./EllipsoidRhumbLine-862a2df4","./EllipsoidGeodesic-7779e55a","./PolylinePipeline-8808402a","./Color-3f0a3f96"],function(S,e,I,R,O,o,r,M,U,N,F,t,a,H,l,i,W,Y){"use strict";function f(e){var o=(e=S.defaultValue(e,S.defaultValue.EMPTY_OBJECT)).positions,r=e.colors,t=S.defaultValue(e.colorsPerVertex,!1);this._positions=o,this._colors=r,this._colorsPerVertex=t,this._arcType=S.defaultValue(e.arcType,H.ArcType.GEODESIC),this._granularity=S.defaultValue(e.granularity,I.CesiumMath.RADIANS_PER_DEGREE),this._ellipsoid=S.defaultValue(e.ellipsoid,R.Ellipsoid.WGS84),this._workerName="createSimplePolylineGeometry";var a=1+o.length*R.Cartesian3.packedLength;a+=S.defined(r)?1+r.length*Y.Color.packedLength:1,this.packedLength=a+R.Ellipsoid.packedLength+3}f.pack=function(e,o,r){var t;r=S.defaultValue(r,0);var a=e._positions,l=a.length;for(o[r++]=l,t=0;t<l;++t,r+=R.Cartesian3.packedLength)R.Cartesian3.pack(a[t],o,r);var i=e._colors,l=S.defined(i)?i.length:0;for(o[r++]=l,t=0;t<l;++t,r+=Y.Color.packedLength)Y.Color.pack(i[t],o,r);return R.Ellipsoid.pack(e._ellipsoid,o,r),r+=R.Ellipsoid.packedLength,o[r++]=e._colorsPerVertex?1:0,o[r++]=e._arcType,o[r]=e._granularity,o},f.unpack=function(e,o,r){o=S.defaultValue(o,0);for(var t=e[o++],a=new Array(t),l=0;l<t;++l,o+=R.Cartesian3.packedLength)a[l]=R.Cartesian3.unpack(e,o);var i=0<(t=e[o++])?new Array(t):void 0;for(l=0;l<t;++l,o+=Y.Color.packedLength)i[l]=Y.Color.unpack(e,o);var n=R.Ellipsoid.unpack(e,o);o+=R.Ellipsoid.packedLength;var s=1===e[o++],p=e[o++],d=e[o];return S.defined(r)?(r._positions=a,r._colors=i,r._ellipsoid=n,r._colorsPerVertex=s,r._arcType=p,r._granularity=d,r):new f({positions:a,colors:i,ellipsoid:n,colorsPerVertex:s,arcType:p,granularity:d})};var q=new Array(2),z=new Array(2),J={positions:q,height:z,ellipsoid:void 0,minDistance:void 0,granularity:void 0};return f.createGeometry=function(e){var o,r,t,a=e._positions,l=e._colors,i=e._colorsPerVertex,n=e._arcType,s=e._granularity,p=e._ellipsoid,d=I.CesiumMath.chordLength(s,p.maximumRadius),f=S.defined(l)&&!i,c=a.length,y=0;if(n===H.ArcType.GEODESIC||n===H.ArcType.RHUMB){var u,h,C=n===H.ArcType.GEODESIC?(u=I.CesiumMath.chordLength(s,p.maximumRadius),h=W.PolylinePipeline.numberOfPoints,W.PolylinePipeline.generateArc):(u=s,h=W.PolylinePipeline.numberOfPointsRhumbLine,W.PolylinePipeline.generateRhumbArc),T=W.PolylinePipeline.extractHeights(a,p),g=J;if(n===H.ArcType.GEODESIC?g.minDistance=d:g.granularity=s,g.ellipsoid=p,f){for(var m=0,v=0;v<c-1;v++)m+=h(a[v],a[v+1],u)+1;o=new Float64Array(3*m),t=new Uint8Array(4*m),g.positions=q,g.height=z;var P=0;for(v=0;v<c-1;++v){q[0]=a[v],q[1]=a[v+1],z[0]=T[v],z[1]=T[v+1];var _=C(g);if(S.defined(l))for(var B=_.length/3,A=l[v],E=0;E<B;++E)t[P++]=Y.Color.floatToByte(A.red),t[P++]=Y.Color.floatToByte(A.green),t[P++]=Y.Color.floatToByte(A.blue),t[P++]=Y.Color.floatToByte(A.alpha);o.set(_,y),y+=_.length}}else if(g.positions=a,g.height=T,o=new Float64Array(C(g)),S.defined(l)){for(t=new Uint8Array(o.length/3*4),v=0;v<c-1;++v)y=function(e,o,r,t,a,l,i){var n=W.PolylinePipeline.numberOfPoints(e,o,a),s=r.red,p=r.green,d=r.blue,f=r.alpha,c=t.red,y=t.green,u=t.blue,h=t.alpha;if(Y.Color.equals(r,t)){for(P=0;P<n;P++)l[i++]=Y.Color.floatToByte(s),l[i++]=Y.Color.floatToByte(p),l[i++]=Y.Color.floatToByte(d),l[i++]=Y.Color.floatToByte(f);return i}for(var C=(c-s)/n,T=(y-p)/n,g=(u-d)/n,m=(h-f)/n,v=i,P=0;P<n;P++)l[v++]=Y.Color.floatToByte(s+P*C),l[v++]=Y.Color.floatToByte(p+P*T),l[v++]=Y.Color.floatToByte(d+P*g),l[v++]=Y.Color.floatToByte(f+P*m);return v}(a[v],a[v+1],l[v],l[v+1],d,t,y);var b=l[c-1];t[y++]=Y.Color.floatToByte(b.red),t[y++]=Y.Color.floatToByte(b.green),t[y++]=Y.Color.floatToByte(b.blue),t[y++]=Y.Color.floatToByte(b.alpha)}}else{r=f?2*c-2:c,o=new Float64Array(3*r),t=S.defined(l)?new Uint8Array(4*r):void 0;var k=0,G=0;for(v=0;v<c;++v){var w=a[v];if(f&&0<v&&(R.Cartesian3.pack(w,o,k),k+=3,A=l[v-1],t[G++]=Y.Color.floatToByte(A.red),t[G++]=Y.Color.floatToByte(A.green),t[G++]=Y.Color.floatToByte(A.blue),t[G++]=Y.Color.floatToByte(A.alpha)),f&&v===c-1)break;R.Cartesian3.pack(w,o,k),k+=3,S.defined(l)&&(A=l[v],t[G++]=Y.Color.floatToByte(A.red),t[G++]=Y.Color.floatToByte(A.green),t[G++]=Y.Color.floatToByte(A.blue),t[G++]=Y.Color.floatToByte(A.alpha))}}var D=new N.GeometryAttributes;D.position=new U.GeometryAttribute({componentDatatype:M.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:o}),S.defined(l)&&(D.color=new U.GeometryAttribute({componentDatatype:M.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:4,values:t,normalize:!0}));var L=2*((r=o.length/3)-1),V=F.IndexDatatype.createTypedArray(r,L),x=0;for(v=0;v<r-1;++v)V[x++]=v,V[x++]=v+1;return new U.Geometry({attributes:D,indices:V,primitiveType:U.PrimitiveType.LINES,boundingSphere:O.BoundingSphere.fromPoints(a)})},function(e,o){return S.defined(o)&&(e=f.unpack(e,o)),e._ellipsoid=R.Ellipsoid.clone(e._ellipsoid),f.createGeometry(e)}});
