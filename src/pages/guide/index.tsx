import Dashboard from '@layouts/Dashboard'
import React from 'react'
import GuideView from '../../view/GuideView'
import { Button, Card, Flex, Image, Typography } from 'antd'
import Meta from 'antd/es/card/Meta';

const { Text, Title, Link } = Typography;
export default function index() {
    return (
        <Dashboard>
            <Flex gap="large" align="center" vertical>
                <Flex justify={'center'} align={'center'} vertical>
                    <Title style={{ margin: 0, textAlign: 'center' }}>Hướng dẫn </Title>
                </Flex>
                <Flex gap="large" justify={'center'} align={'center'}>
                    <Card
                        hoverable
                        style={{ height: 240 }}
                        cover={<Image preview={false} alt="example" src="/img/SmartBin.png" />}
                    >
                        <p>Xưởng SmartBin</p>
                        <Button type='primary'><Link href='./guide/SmartBin' target='_parent'>Tham gia</Link></Button>
                    </Card>
                    <Card
                        hoverable
                        style={{ height: 240 }}
                        cover={<Image preview={false} alt="example" src="/img/Switch.png" />}
                    >
                        <p>Xưởng motion Switch</p>
                        <Button type='primary'><Link href='./guide/Switch' target='_parent'>Tham gia</Link></Button>
                    </Card>

                </Flex>
            </Flex>
        </Dashboard>
    )
}
