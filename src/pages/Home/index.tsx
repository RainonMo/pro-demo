import React, { useEffect, useState } from 'react';

const Home: React.FC = ()  => {
  const [searchEngine, setSearchEngine] = useState('https://www.baidu.com/s?wd=');

  const handleSearch = () => {
    const searchUrl = `${searchEngine}${document.getElementById('searchInput')?.value}`;
    window.open(searchUrl, '_blank');
  };

  const handleSearchEngineChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchEngine(event.target.value);
  };

  return (
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
