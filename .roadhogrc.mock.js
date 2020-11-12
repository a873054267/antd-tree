import Mock from 'mockjs';
const Random = Mock.Random;

if (process.env.NODE_DEV === 'development') {
  // TO DO
}

const noProxy = process.env.NO_PROXY = 'true';

const proxy = {
  'GET /api/data': [
    { name: 555 },
    { name: 666 },
  ]
};

export default (noProxy ? {} : delay(proxy, 1000));
