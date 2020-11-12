export default{
  treeInfo:"treeInfo/data/",
  getTreeInfo:"modelkey/data/?fileKey=",  //get请求，
  getFileKey:(dbkey,modelkey) => {
    //k3e7b4b6873945aeb5298333996b931a,M1603353511318
      return `modelkey/api/${dbkey}/trees/list?modelKey=${modelkey}`
  },

}
