import { setDataStore } from '@redux/features/dataStore/dataStoreSlice';
import { AppDispatch } from '@redux/types/types';
import { Avatar, Button, Carousel, Divider, Flex, Image, message, Popover, Segmented, SegmentedProps, Typography } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux';
import Iframe from 'react-iframe'

const { Link, Title } = Typography;
const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function HomeView() {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            <Flex gap="middle" align="center" vertical>
                <Flex justify={'center'} align={'center'} vertical>
                    <Title style={{ margin: 0, textAlign: 'center' }}>WORKSHOP ARDUINO: BẮT MẠCH</Title>
                    <Title level={5} style={{ textAlign: 'center' }}>NƠI BẠN NẮM BẮT NHỮNG BOARD MẠCH ĐIỆN TỬ</Title>
                </Flex>
                <Flex gap="middle" justify={'center'} align={'flex-start'}>
                    <Popover content={
                        <Button type="link">
                            <Link href='https://www.facebook.com/BotBrainiacs' target='_blank'>
                                CLB BotBrainiacs
                            </Link>
                        </Button>
                    } title="Thông tin">
                        <Avatar size={120} src={<Image src='/img/BotB_Logo.jpg' alt={'BotB_Logo'} preview={false} />} />
                    </Popover>
                    <Popover content={
                        <Button type="link">
                            <Link href='https://www.facebook.com/BotBrainiacs' target='_blank'>
                                Câu Lạc Bộ Vật Lý+ Trường THPT Chuyên Trần Đại Nghĩa
                            </Link>
                        </Button>
                    } title="Thông tin">
                        <Avatar size={120} src={<Image src='/img/VL_Logo.jpg' alt={'VL_Logo'} preview={false} />} />
                    </Popover>
                </Flex>
                <Divider dashed />
                <Flex gap="middle" justify={'center'} align={'flex-start'}>
                    <Button type="primary" size='large'
                        onClick={() => {
                            dispatch(setDataStore([{
                                modalController: {
                                    isModalOpen: true,
                                    title: `BOOKLET WORKSHOP ARDUINO: BẮT MẠCH`,
                                    children: <>
                                        <Iframe url={`https://drive.google.com/file/d/1W1BxaEpMtfWIz66PkNJj52Ew8EsfgcS1/preview`}
                                            width="100%"
                                            height="100%"
                                            display="block"
                                            position="relative"
                                            styles={{ minHeight: 450, margin: '8px 0 8px 0' }}
                                        />
                                    </>,
                                }
                            }]));
                        }}

                    >Workshop Arduino</Button>
                    <Button size='large' onClick={() => {
                        message.info("Recap Workshop sẽ sớm ra")
                    }}>Recap Workshop</Button>
                </Flex>
                <Button size='large'>
                    <Link href='./timeline' target='_parent'>
                        TIMELINE CHƯƠNG TRÌNH
                    </Link>
                </Button>
            </Flex>
            <Divider dashed />
            <Carousel arrows adaptiveHeight draggable>
                <Image preview={false} src='/img/banner1.jpg' />
                <Image preview={false} src='/img/banner2.jpg' />
                <video src='/img/video1.mp4' loop muted playsInline autoPlay width="100%" controls />
                <video src='/img/video2.mp4' loop muted playsInline autoPlay width="100%" controls />
                <video src='/img/video3.mp4' loop muted playsInline autoPlay width="100%" controls />
            </Carousel >

        </>
    )
}
