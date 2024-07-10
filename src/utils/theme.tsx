import React from "react";
import { ConfigProvider } from "antd";
import viVN from 'antd/locale/vi_VN';


const withTheme = (node: JSX.Element) => (
    <>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#52C41A",
                },
            }}
        >
            <ConfigProvider
                theme={{
                    token: {
                        borderRadius: 16
                    },
                }}
                locale={viVN}
            >
                {node}
            </ConfigProvider>
        </ConfigProvider>
    </>
)

export default withTheme;