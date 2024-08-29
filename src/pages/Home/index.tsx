import React, {useEffect, useState} from 'react';
import {Card, Divider, List, message} from 'antd';
import {listNavVoByPageUsingPost} from "@/services/backend/navController";

const Home: React.FC = ()  => {

  // 列表数据
  const [list, setList] = useState<API.Nav[]>([]);
  // 加载状态
  const [loading, setLoading] = useState(false);

  // 定义异步加载数据的函数
  const loadData = async () => {
    // 开始加载数据，设置 loading 状态为 true
    console.log('正在加载数据');
    setLoading(true);
    try {
      // 调用接口获取数据
      const res = await listNavVoByPageUsingPost({});
      // 将请求返回的数据设置到列表数据状态中
      setList(res?.data?.records ?? []);
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
  }, []);

  const [searchEngine, setSearchEngine] = useState('https://www.baidu.com/s?wd=');

  const handleSearch = () => {
    const searchUrl = `${searchEngine}${document.getElementById('searchInput')?.value}`;
    window.open(searchUrl, '_blank');
  };

  const handleSearchEngineChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchEngine(event.target.value);
  };

  return (
    <div>
    <div style={containerStyle}>
      <div style={searchBarStyle}>
        <input type="text" id="searchInput" placeholder="请输入搜索内容" style={inputStyle} />
        <select style={dropdownStyle} onChange={handleSearchEngineChange}>
          <option value="https://www.baidu.com/s?wd=">百度</option>
          <option value="https://www.bing.com/search?q=">必应</option>
          <option value="https://www.so.com/s?q=">360</option>
        </select>
        <button onClick={handleSearch} style={buttonStyle}>搜索</button>
      </div>
    </div>

      <Divider />

      <List
        grid={{
          gutter: 16,
          xs: 2,
          sm: 3,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 6,
        }}
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.name}><a href={item.url} target="_blank" style={{
              display: 'flex',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}>{item.url}</a></Card>
          </List.Item>
        )}
      />
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const searchBarStyle = {
  display: 'flex',
  alignItems: 'center',
};

const dropdownStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px',
  marginRight: '10px',
};

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px',
  marginRight: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#007BFF',
  color: '#fff',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

export default Home;
