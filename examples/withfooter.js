/* eslint-disable no-console,func-names,react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import Table from 'rc-table';
import 'rc-table/assets/index.less';

const columns = new Array(12).fill(1).map((a, i) => ({
  title: <div style={{width: 100, maxWidth: 100}}>{'title' + i}</div>,
  className:  'title' + i,
  dataIndex: 'a',
  key: Math.random().toString(),
  fixed: i > 1 ? '' : 'left',
  render: (value) => <div style={{width: 100, maxWidth: 100}}>{value}</div>
}));

const data = [
  { a: '123', b: 'xxxxxxxx xxxxxxxx', d: 3, key: '1' },
  { a: 'cdd', b: 'edd12221 edd12221', d: 3, key: '2' },
  { a: '133', c: 'edd12221 edd12221', d: 2, key: '3' },
  { a: '133', c: 'edd12221 edd12221', d: 2, key: '4' },
  { a: '133', c: 'edd12221 edd12221', d: 2, key: '5' },
  { a: '133', c: 'edd12221 edd12221', d: 2, key: '6' },
  { a: '133', c: 'edd12221 edd12221', d: 2, key: '7' },
  { a: '133', c: 'edd12221 edd12221', d: 2, key: '8' },
  { a: '133', c: 'edd12221 edd12221', d: 2, key: '9' },
];

ReactDOM.render(
  <div>
    <h2>simple table</h2>
    <Table
      columns={columns}
      footColumns={columns}
      data={data}
      style={{ width: 800 }}
      scroll={{ x: true, y: 300 }}
    />
  </div>,
  document.getElementById('__react-content')
);
