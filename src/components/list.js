import react from 'react';
import fetch from 'dva/fetch';

const data = {};

fetch('/data', {
  method: 'GET',
  body: data
}).then((res)=>{
  console.info(res);
});
