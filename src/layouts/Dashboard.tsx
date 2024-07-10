import React, { ReactNode, useState } from 'react'
import { Layout, Typography, theme } from 'antd';
const { Content, Footer } = Layout;
const { Text, Link } = Typography;


export default function Dashboard({ children }: { children: ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState('default');
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout style={{
            minHeight: '100vh',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
        }}>
            <Content>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: '100vh',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content >
                <Footer style={{
                    textAlign: 'center',
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}>
                    VL+xBOTB ©{new Date().getFullYear()} Website created by <Link
                        href="https://www.facebook.com/blong1204"
                        target="_blank"
                        style={{ color: 'black', fontWeight: 'bold' }}
                    >Blong12</Link>
                </Footer>
            </Content >
        </Layout >
    )
}
