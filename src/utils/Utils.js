Date.prototype.Format = function (fmt) { // author: meizz
  var o = {
    "M+": this.getMonth() + 1, // 月份
    "d+": this.getDate(), // 日
    "h+": this.getHours(), // 小时
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    "S": this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
Number.prototype.add = function (arg) {
  return accAdd(arg, this);
};
Number.prototype.sub = function (arg) {
  return subtr(this, arg);
};
function subtr(arg1, arg2) {
  var r1, r2, m, n;
  try {
    r1 = arg1.toString().split(".")[1].length;
  }
  catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  }
  catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  //last modify by deeka
  //动态控制精度长度
  n = (r1 >= r2) ? r1 : r2;
  return parseFloat(((arg1 * m - arg2 * m) / m).toFixed(n));
}
function accAdd(arg1, arg2) {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  }
  catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  }
  catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  let v= Math.ceil((arg1 * m + arg2 * m))
  return v / m;
}
function Utils() {

}
Utils.calculateCenter =function (arr) {
  let minx=9999999999,miny=9999999999,minz=9999999999,maxx=-9999999999,maxy=-9999999999,maxz=-9999999999
  arr.map(v => {
    if(v.x<minx){
      minx = v.x;
    }
    if(v.x>maxx){
      maxx =v.x;
    }

    if(v.y<miny){
      miny = v.y;
    }
    if(v.y>maxy){
      maxy =v.y;
    }

    if(v.z<minz){
      minz = v.z;
    }
    if(v.z>maxz){
      maxz =v.z;
    }

  })
  return [{x:minx,y:miny,z:minz},{x:maxx,y:maxy,z:maxz}]

}

Utils.createGuid= function() {
  // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0;
    var v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
Utils.getJsonTree =  (json) => {
  let tree = []
  for(var key in json ){
    let obj ={}
    //既不是object 也不是array
    if(  typeof(json[key]) == "number" || typeof(json[key]) == "string"){
      obj.title = key;
      obj.key = Utils.createGuid();
      obj.value = json[key];
    }
    else if(json[key] instanceof Array){
      json[key].map( v => {
        v.title = v.name
      })
      obj.title = key
      obj.key = Utils.createGuid();
      obj.children = json[key]
    }
    else{
      obj.title = key
      obj.key = Utils.createGuid();
      obj.children = Utils.getJsonTree(json[key])
    }
    tree.push(obj)
  }
  return tree
}

Utils.getSearchKeyByName = (json,name) => {
  let highLightKeys = [];
  function getkey( json,name) {
    if(json.title.includes(name)){
      highLightKeys.push(json.key)
    }
    if(json.children && json.children.length>0){
      json.children.map(
        v => {
          getkey(v,name)
        });
    }
  }
  getkey(json,name);
  return highLightKeys;
}
Utils.getSearchExpandKeyByName = (json,name) => {
  let highLightKeys = [];
  function getkey( json,name) {
    if(json.title.includes(name)){
      //highLightKeys.push(json.key)
    }
    if(json.children && json.children.length>0){
      highLightKeys.push(json.key)
      json.children.map(
        v => {
          getkey(v,name)
        });
    }
  }
  getkey(json,name);
  return highLightKeys;
}
Utils.getchildName = (json) => {
  let titles = []
  function getName(json) {
    if(json.children && json.children.length>0){
      json.children.map(
        v => {
          getName(v.props)
        });
    }
    else{
      titles.push(json.title)
    }
  }
  getName(json);
  return titles
}
Utils.getParentKey = ( key, tree) =>  {
  let parentKey
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some((item) => item.key === key)) {
        parentKey = node.key;
      } else if (Utils.getParentKey(key, node.children)) {
        parentKey = Utils.getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
}
export default  Utils
