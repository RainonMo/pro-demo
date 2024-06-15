import {Button, Card, List, message} from 'antd';
import React, {useEffect, useState} from 'react';

import Meta from "antd/es/card/Meta";
import {getDataUsingPost} from "@/services/backend/storeController";

const Store: React.FC = () => {
  // 使用 useState 和泛型来定义组件内的状态
  // 加载状态
  const [loading, setLoading] = useState(false);
  // 列表数据
  const [list, setList] = useState<API.BaseResponseJSONObject_[]>([]);
  // 总数
  const [total, setTotal] = useState<number>(0);
  // 当前点击tab
  const [curTab, setCurTab] = useState(0);

  function changeTab(index: number) {
    setCurTab(index);
  }

  // 定义异步加载数据的函数
  const loadData = async (pageId = 1, pageSize = 8) => {
    // 开始加载数据，设置 loading 状态为 true
    console.log('正在加载数据');
    setLoading(true);
    try {

      // 调用接口获取数据
      const res = await getDataUsingPost({
        pageId,
        pageSize
      });
      // 将请求返回的数据设置到列表数据状态中
      setList(res?.data.data?.list ?? []);
      // 将请求返回的总数设置到总数状态中
      setTotal(res?.data.data?.totalNum ?? 0);
      // 捕获请求失败的错误信息
    } catch (error: any) {
      // 请求失败时提示错误信息
      message.error('请求失败，' + error.message);
    }
    // 数据加载成功或失败后，设置 loading 状态为 false
    setLoading(false);
  };

  useEffect(() => {
    // 当curTab发生变化时，才重新执行加载数据的函数
    loadData();
  }, [curTab]);

  return (
    <div>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              style={{ width: '100%' }}
              cover={<img alt={item.desc} src={item.mainPic} />}
            >
              <Meta title={item.dtitle} description={item.specialText} />
              <p>原价：{item.originalPrice}</p>
              <p>券后价：{item.actualPrice}</p>
              <p>今日销量：{item.dailySales}</p>
              <Button type="primary" className="float-button" href={item.couponLink} target="_blank" >立即领券</Button>
            </Card>
          </List.Item>
        )}
        // 分页配置
        pagination={{
          // 自定义显示总数
          // showTotal(total: number) {
          //   return '总数：' + total;
          // },
          // 每页显示条数
          pageSize: 8,
          // 总数，从状态中获取
          total,
          // 切换页面触发的回调函数
          onChange(page, pageSize) {
            // 加载对应页面的数据
            loadData(page, pageSize);
          },
        }}
      />
    </div>
  );
};

export default Store;
