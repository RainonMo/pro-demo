import React, { useEffect, useState } from 'react';
import { queryCategoryListUsingPost,queryArticlePageListUsingPost } from '@/services/backend/blogController';
import { Avatar, Button, Card, Divider, Space, Input, List, message, Modal } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined,EyeTwoTone,EyeOutlined } from '@ant-design/icons';
import { initialButtonNames } from './constants';
import './index.less';

const Blog: React.FC = () => {
    const [buttonNames, setButtonNames] = useState(initialButtonNames);
    // 加载状态
    const [loading, setLoading] = useState(false);
    // 当前点击tab
    const [curTab, setCurTab] = useState(0);
    // 列表数据
    const [list, setList] = useState<API.TArticle[]>([]);
    // 总数
    const [total, setTotal] = useState<number>(0);
    const loadButtonData = async () => {
      try {
        const buttonNamesPesponse = await queryCategoryListUsingPost(); // 获取按钮名称列表
        const fetchedButtonNames = buttonNamesPesponse?.data || [];
        setButtonNames(initialButtonNames.concat(fetchedButtonNames));
      } catch (error: any) {
        // 请求失败时提示错误信息
        message.error('请求失败，' + error.message);
      }
    }
    // 定义异步加载数据的函数
    const loadData = async (current = 1, pageSize = 5) => {
        // 开始加载数据，设置 loading 状态为 true
        console.log('正在加载数据');
        setLoading(true);
        try {
         // 调用接口获取数据
         const res = await queryArticlePageListUsingPost({
            current,
            pageSize,
            name: curTab === 0 ? '' : buttonNames[curTab],
        });

         // 将请求返回的数据设置到列表数据状态中
         setList(res?.data?.records ?? []);
         // 将请求返回的总数设置到总数状态中
         setTotal(res?.data?.total ?? 0);

        // 捕获请求失败的错误信息
        } catch (error: any) {
          // 请求失败时提示错误信息
          message.error('请求失败，' + error.message);
        }
        // 数据加载成功或失败后，设置 loading 状态为 false
        setLoading(false);
    };
    function changeTab(index: number) {

        setCurTab(index);
    }

    useEffect(() => {
      // 当curTab发生变化时，才重新执行加载数据的函数
      loadButtonData();
    }, []);

    useEffect(() => {
        // 当curTab发生变化时，才重新执行加载数据的函数
        loadData();
    }, [curTab]);

    const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
        <Space>
          {React.createElement(icon)}
          {text}
        </Space>
    );

    return (
        <div>

            {/*<Button type="primary" className="float-button" href='/blog/add' target='/blog/add' >写文章</Button>*/}
            <Card className="peripheral-tab" bordered={false} style={{ background: 'transparent' }}>
                {/* 循环渲染按钮 */}
                {buttonNames.map((buttonName, index) => (
                <Button
                    type={index === curTab ? 'primary' : 'default'}
                    key={index}
                    style={{ marginTop: 2, marginRight: 24 }}
                    onClick={() => changeTab(index)}
                >
                    {buttonName}
                </Button>
                ))}

            </Card>
            <Divider />
            <List
                itemLayout="vertical"
                size="large"
                dataSource={list}
                renderItem={(item) => (
                <List.Item
                    key={item.title}
                    actions={[
                    <IconText icon={EyeOutlined} text="156" key="list-vertical-star-a" />,
                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                    <img
                        width={170}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                    }
                >
                    <List.Item.Meta
                    avatar={<Avatar src={item.title_image} />}
                    title={<a href='/blog/:id' target="_blank" >{item.title}</a>}
                    description={item.description}
                    />
                    {/* {item.content} */}
                </List.Item>
                )}
                // 分页配置
                pagination={{
                    // 自定义显示总数
                    showTotal(total: number) {
                        return '总数：' + total;
                    },
                    // 每页显示条数
                    pageSize: 5,
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
    )
};

export default Blog;
