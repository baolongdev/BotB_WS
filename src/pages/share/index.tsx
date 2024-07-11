import { InboxOutlined } from '@ant-design/icons';
import { Button, Form, Image, Input, Typography, Upload } from 'antd'
import React, { useState } from 'react'
import Dashboard from '@layouts/Dashboard';
import { useProcessFileMutation } from '@redux/service/GoogleApi';
import { onFinish, normFile, onFinishFailed } from '../../view/Share/ImageFileUploadForm/constant';

const { Text, Title, Link } = Typography;
export default function index() {
    const [form] = Form.useForm();
    const [processFile] = useProcessFileMutation();


    return (
        <Dashboard>
            <Title style={{ margin: 0, textAlign: 'center' }}>Chia sẽ khoản khắc với BotB </Title>
            <Form
                form={form}
                name="file_upload_form"
                initialValues={{ modifier: 'public' }}
                onFinish={(e) => {
                    // console.log(e);
                    onFinish({ values: e, form: form, folderId: '1yBhx0qv10oBgn-ruC4Xim-2VqDdrmR8z', processFile: processFile })
                }}
                onFinishFailed={onFinishFailed}
                layout="vertical"
            >
                <Form.Item
                    label="Name (Optional)"
                    name="name"
                    rules={[{ whitespace: true }]}
                >
                    <Input placeholder="Enter your name" />
                </Form.Item>

                <Form.Item label="Feedback (Optional)" name="feedback">
                    <Input.TextArea
                        placeholder="Enter your feedback"
                        autoSize={{ minRows: 3, maxRows: 6 }}
                    />
                </Form.Item>
                <Form.Item
                    label="File List"
                    name="fileList"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    rules={[{ required: true, message: 'Please upload at least one image' }]}
                >
                    <Upload.Dragger
                        listType="picture-card"
                        name="files" multiple >
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                    </Upload.Dragger>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Dashboard>
    )
}
