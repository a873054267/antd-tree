import Mock from 'mockjs';

const Random = Mock.Random;

Mock.mock('/data', {
  list: [
    {
      name: 333,
      email: ()=>{
        return Random.email('123.com')
      }
    },
    {name: 444},
  ]
});
