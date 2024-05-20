import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = 'RainonMo';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'ainav',
          title: 'Ai大模型应用导航',
          href: 'http://rainonmo.cn',
          blankTarget: true,
        },
        // {
        //   key: 'Ant Design',
        //   title: '编程宝典',
        //   href: 'https://codefather.cn',
        //   blankTarget: true,
        // },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> Github
            </>
          ),
          href: 'https://github.com/rainonmo',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
