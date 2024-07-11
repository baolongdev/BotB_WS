import Dashboard from '@layouts/Dashboard'
import { Button, Flex, Typography } from 'antd';
import React from 'react'

const { Text, Title, Link } = Typography;
export default function index() {
    return (
        <Dashboard>
            <Flex gap="small" align="center" vertical>
                <Title>Thank You!</Title>
                <Button type='primary'>
                    <Link href="https://www.facebook.com/blong1204" target="_blank" rel="noopener noreferrer">
                        BotB Facebook Page
                    </Link>
                </Button>
                <iframe src="https://giphy.com/embed/JlpjgShzDsrMIyFu5U" width="480" height="360" allowFullScreen style={{ pointerEvents: 'none' }}></iframe>
                <Text style={{ textAlign: 'center', fontSize: '16px', lineHeight: '1.6', maxWidth: '700px' }}>
                    Chúng tôi xin chân thành cảm ơn sự tham gia nhiệt tình của các bạn trong Workshop Arduino: Bắt Mạch vào ngày hôm nay. Sự hiện diện và đóng góp của các bạn đã làm cho sự kiện trở nên thành công và ý nghĩa hơn bao giờ hết. Qua các buổi thuyết trình, thực hành và giao lưu, chúng ta đã cùng nhau khám phá và trải nghiệm những ứng dụng thực tế của Arduino trong cuộc sống hàng ngày. Chúng ta không chỉ nâng cao kiến thức chuyên môn mà còn xây dựng được những mối quan hệ chặt chẽ, góp phần thúc đẩy sự phát triển của cộng đồng kỹ thuật số Việt Nam.
                    <br /><br />
                    Chúng tôi xin gửi lời cảm ơn đặc biệt tới các diễn giả và những người đã dành thời gian để chia sẻ kiến thức và kinh nghiệm của mình. Đó là những đóng góp vô cùng quý báu và sẽ tiếp tục lan tỏa giá trị trong công việc và học tập của mỗi người tham gia. Hy vọng rằng những gì chúng ta học được từ Workshop này sẽ trở thành nền tảng vững chắc cho sự nghiệp và sự phát triển cá nhân của các bạn trong tương lai.
                    <br /><br />
                    Một lần nữa, xin chân thành cảm ơn và hy vọng sớm gặp lại các bạn trong những sự kiện sắp tới.
                </Text>
            </Flex>
        </Dashboard>
    )
}
