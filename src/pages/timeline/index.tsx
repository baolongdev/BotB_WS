import Dashboard from '@layouts/Dashboard'
import { Button, Card, Divider, Flex, Timeline, Typography } from 'antd'
import React from 'react'

const { Text, Title, Link } = Typography;
export default function index() {
    return (
        <Dashboard>
            <Flex gap="middle" align="center" vertical>
                <Flex justify={'center'} align={'center'} vertical>
                    <Title style={{ margin: 0 }}>TIMELINE CHƯƠNG TRÌNH </Title>
                </Flex>
                <Button size='large' type='primary'>
                    <Link href='./' target='_parent'>
                        Trở về
                    </Link>
                </Button>
                <Card title={<Title style={{ textAlign: 'center', fontWeight: 'bold' }} level={5}>Thông tin Workshop Arduino: Bắt Mạch</Title>}
                    hoverable bordered={false} style={{ width: 1000 }}>
                    <Flex gap="large" justify={'center'} align={'flex-start'}>
                        <Timeline
                            // mode="alternate"
                            items={[
                                {
                                    dot: <Text>⌚</Text>,
                                    children: <>
                                        <p>Thời gian: ngày 12/7/2024</p>
                                        <p>Ca sáng: 8h00 - 11h30</p>
                                        <p>Ca chiều: 12h30 - 16h00</p>
                                    </>,
                                },
                                {
                                    dot: <Text>📍</Text>,
                                    children: <>
                                        <p>Địa điểm</p>
                                        <p>Khu B, Trường THPT chuyên Trần Đại Nghĩa <br />
                                            (Số 20, Lý Tự Trọng,phường Bến Nghé, Quận 1)
                                        </p>
                                    </>,
                                    color: 'green',
                                },
                            ]}
                        />
                        <div style={{ width: 24 }}></div>
                        <Timeline
                            items={[
                                {
                                    color: 'green',
                                    children: (
                                        <>
                                            <p>8h - 8h30 / 12h30 - 13h</p>
                                            <p>KHAI MẠC - Check-in</p>
                                        </>
                                    ),
                                },
                                {
                                    color: 'green',
                                    children: (
                                        <>
                                            <p>8h30 - 8h35 / 13h - 13h05</p>
                                            <p>Introduction</p>
                                        </>
                                    ),
                                },
                                {
                                    color: 'green',
                                    children: (
                                        <>
                                            <p>8h35 / 13h05</p>
                                            <p>Khai mạc workshop</p>
                                        </>
                                    ),
                                },
                                {
                                    color: 'green',
                                    children: (
                                        <>
                                            <p>8h35 - 8h45 / 13h05 - 13h15</p>
                                            <p>Giới thiệu sơ về Arduino</p>
                                        </>
                                    ),
                                },
                                {
                                    color: 'green',
                                    children: (
                                        <>
                                            <p>8h45 - 9h05 / 13h15 - 13h45</p>
                                            <p>Phần diễn giả của anh Pony Tom</p>
                                        </>
                                    ),
                                },
                                {
                                    color: 'green',
                                    children: (
                                        <>
                                            <p>9h15 - 9h40 / 13h45 - 14h10</p>
                                            <p>Tham quan các projects và Cyobot</p>
                                        </>
                                    ),
                                },
                                {
                                    color: 'green',
                                    children: (
                                        <>
                                            <p>9h40 - 11h / 14h10 - 15h30</p>
                                            <p>Tham gia lớp học (nâng cao và cơ bản)</p>
                                        </>
                                    ),
                                },
                                {
                                    color: 'green',
                                    children: (
                                        <>
                                            <p>11h - 11h10 / 15h30 - 15h40</p>
                                            <p>BẾ MẠC</p>
                                        </>
                                    ),
                                },
                                {
                                    color: 'green',
                                    children: (
                                        <>
                                            <p>11h10 - 11h15 / 15h40 - 15h45</p>
                                            <p>Tổng kết</p>
                                        </>
                                    ),
                                },
                                {
                                    color: 'green',
                                    children: (
                                        <>
                                            <p>11h15 - 11h25 / 15h45 - 15h55</p>
                                            <p>Chụp hình lưu niệm</p>
                                        </>
                                    ),
                                },
                                {
                                    color: '#00CCFF',
                                    dot: <>🤗</>,
                                    children: <p>End of Event</p>,
                                },
                            ]}
                        />
                    </Flex>
                </Card>
            </Flex>
        </Dashboard>
    )
}
