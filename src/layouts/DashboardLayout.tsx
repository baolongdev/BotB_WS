import React, { ReactNode, useState } from 'react'
import { Layout, Menu, Typography, theme, Image } from 'antd';
// import ModalCustome from '@components/ModalCustome/ModalCustome';
const { Header, Sider, Content, Footer } = Layout;
const { Text } = Typography;

export default function DashboardLayout({ children, menu }: { children: ReactNode, menu: ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState('default');
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
                style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
            >
                <Image
                    alt='Logo Image'
                    width={collapsed ? 80 : 200}
                    height={collapsed ? 80 : 200}
                    src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                    preview={false}
                />
                {menu}
            </Sider>
            <Content style={{ marginLeft: collapsed ? 80 : 200 }}>
                <Header style={{ padding: 0 }}>
                    <div
                        style={{
                            padding: '0 0 0 32px',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Text strong>Welcome back ✨</Text>
                    </div>
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content >
                <Footer style={{ textAlign: 'center' }}>
                    {`Admin Panel ©${new Date().getFullYear()} Created by Blong12`}
                </Footer>
            </Content >
            {/* <ModalCustome /> */}
        </Layout >
    )
}
