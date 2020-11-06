import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <Button>change0</Button>
      <Button>change1</Button>
{/*
      <h1 className={styles.title}>Yay!</h1>
*/}
      <ul className={styles.list}>
        <li>1.进入后加载mock数据（mock方法的默认调用即可）到store（调用mock.js</li>
        <li>2.页面需要同步更新store中的getAverage与getData</li>
        <li>3.完成store中getAverage方法，计算列表中data的平均值（例子：data:1,data:2, 平均值为1.5）保留两位小数</li>
        <li>4.完成点击《加载更多》按钮加载更多数据到store（每次数据量不限，但页数要连贯），并同步更新平均值</li>
        <li>5.把列表按照id: item.id, data: item.data, 下一列item.time排版，元素居中，有更好看到排版更佳</li>
        <li>6.自由发挥优化用户体验</li>
      </ul>
{/*
      <div className={styles.welcome} />
*/}
{/*      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        <li><a href={"data"}>Getting Link</a></li>
      </ul>*/}
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
