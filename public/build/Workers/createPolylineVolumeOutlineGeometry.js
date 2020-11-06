define(["./when-cbf8cd21","./Check-35e1a91d","./Math-e66fad2a","./Cartesian2-44433f55","./Transforms-d9350502","./RuntimeError-f4c64df1","./WebGLConstants-95ceb4e9","./ComponentDatatype-7ee14e67","./GeometryAttribute-424f2c6a","./GeometryAttributes-90846c5f","./IndexDatatype-66caba23","./IntersectionTests-d04ec592","./Plane-94f78648","./arrayRemoveDuplicates-b817241d","./BoundingRectangle-d1dbcdbd","./EllipsoidTangentPlane-d3a474ef","./EllipsoidRhumbLine-862a2df4","./PolygonPipeline-94be9b1d","./PolylineVolumeGeometryLibrary-0c589756","./EllipsoidGeodesic-7779e55a","./PolylinePipeline-8808402a"],function(d,e,a,c,y,i,n,h,f,g,m,t,r,o,l,s,p,u,v,E,P){"use strict";function _(e){var i=(e=d.defaultValue(e,d.defaultValue.EMPTY_OBJECT)).polylinePositions,n=e.shapePositions;this._positions=i,this._shape=n,this._ellipsoid=c.Ellipsoid.clone(d.defaultValue(e.ellipsoid,c.Ellipsoid.WGS84)),this._cornerType=d.defaultValue(e.cornerType,v.CornerType.ROUNDED),this._granularity=d.defaultValue(e.granularity,a.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeOutlineGeometry";var t=1+i.length*c.Cartesian3.packedLength;t+=1+n.length*c.Cartesian2.packedLength,this.packedLength=t+c.Ellipsoid.packedLength+2}_.pack=function(e,i,n){var t;n=d.defaultValue(n,0);var a=e._positions,r=a.length;for(i[n++]=r,t=0;t<r;++t,n+=c.Cartesian3.packedLength)c.Cartesian3.pack(a[t],i,n);var o=e._shape,r=o.length;for(i[n++]=r,t=0;t<r;++t,n+=c.Cartesian2.packedLength)c.Cartesian2.pack(o[t],i,n);return c.Ellipsoid.pack(e._ellipsoid,i,n),n+=c.Ellipsoid.packedLength,i[n++]=e._cornerType,i[n]=e._granularity,i};var k=c.Ellipsoid.clone(c.Ellipsoid.UNIT_SPHERE),C={polylinePositions:void 0,shapePositions:void 0,ellipsoid:k,height:void 0,cornerType:void 0,granularity:void 0};_.unpack=function(e,i,n){i=d.defaultValue(i,0);for(var t=e[i++],a=new Array(t),r=0;r<t;++r,i+=c.Cartesian3.packedLength)a[r]=c.Cartesian3.unpack(e,i);t=e[i++];var o=new Array(t);for(r=0;r<t;++r,i+=c.Cartesian2.packedLength)o[r]=c.Cartesian2.unpack(e,i);var l=c.Ellipsoid.unpack(e,i,k);i+=c.Ellipsoid.packedLength;var s=e[i++],p=e[i];return d.defined(n)?(n._positions=a,n._shape=o,n._ellipsoid=c.Ellipsoid.clone(l,n._ellipsoid),n._cornerType=s,n._granularity=p,n):(C.polylinePositions=a,C.shapePositions=o,C.cornerType=s,C.granularity=p,new _(C))};var b=new l.BoundingRectangle;return _.createGeometry=function(e){var i=e._positions,n=o.arrayRemoveDuplicates(i,c.Cartesian3.equalsEpsilon),t=e._shape,t=v.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(t);if(!(n.length<2||t.length<3)){u.PolygonPipeline.computeWindingOrder2D(t)===u.WindingOrder.CLOCKWISE&&t.reverse();var a=l.BoundingRectangle.fromPoints(t,b);return function(e,i){var n=new g.GeometryAttributes;n.position=new f.GeometryAttribute({componentDatatype:h.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e});var t=i.length,a=n.position.values.length/3,r=e.length/3/t,o=m.IndexDatatype.createTypedArray(a,2*t*(1+r)),l=0,s=0,p=s*t;for(u=0;u<t-1;u++)o[l++]=u+p,o[l++]=u+p+1;for(o[l++]=t-1+p,o[l++]=p,p=(s=r-1)*t,u=0;u<t-1;u++)o[l++]=u+p,o[l++]=u+p+1;for(o[l++]=t-1+p,o[l++]=p,s=0;s<r-1;s++)for(var d=t*s,c=d+t,u=0;u<t;u++)o[l++]=u+d,o[l++]=u+c;return new f.Geometry({attributes:n,indices:m.IndexDatatype.createTypedArray(a,o),boundingSphere:y.BoundingSphere.fromVertices(e),primitiveType:f.PrimitiveType.LINES})}(v.PolylineVolumeGeometryLibrary.computePositions(n,t,a,e,!1),t)}},function(e,i){return d.defined(i)&&(e=_.unpack(e,i)),e._ellipsoid=c.Ellipsoid.clone(e._ellipsoid),_.createGeometry(e)}});