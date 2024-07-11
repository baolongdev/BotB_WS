import Dashboard from '@layouts/Dashboard';
import React, { useEffect, useState } from 'react';
import { Card, Segmented, Button, message, Space } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import router from 'next/router';

const GITHUB_API_URL = 'https://api.github.com/repos/baolongdev/BotBrainSmartBin/contents';

const fetchRepoFiles = async (path: string = '') => {
    const response = await fetch(`${GITHUB_API_URL}/${path}`);
    const data = await response.json();
    return data;
};

const fetchFileContent = async (url: string) => {
    const response = await fetch(url);
    const data = await response.text();
    return data;
};

export default function Index() {
    const [files, setFiles] = useState<{ name: string; content: string }[]>([]);
    const [selectedFileIndex, setSelectedFileIndex] = useState<number>(0);

    useEffect(() => {
        const getFiles = async () => {
            const repoFiles = await fetchRepoFiles();
            const filesWithContent = await Promise.all(repoFiles.map(async (file: any) => ({
                name: file.name,
                content: await fetchFileContent(file.download_url)
            })));
            // Sort files with .ino extension to the top
            filesWithContent.sort((a, b) => {
                if (a.name.endsWith('.ino') && !b.name.endsWith('.ino')) {
                    return -1;
                }
                if (!a.name.endsWith('.ino') && b.name.endsWith('.ino')) {
                    return 1;
                }
                return 0;
            });
            setFiles(filesWithContent);
        };

        getFiles();
    }, []);

    const handleCopy = () => {
        message.success('Code copied to clipboard!');
    };

    const handlePrev = () => {
        setSelectedFileIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : files.length - 1));
    };

    const handleNext = () => {
        setSelectedFileIndex((prevIndex) => (prevIndex < files.length - 1 ? prevIndex + 1 : 0));
    };
    const returnPage = () => {
        router.back()
    };

    const selectedFile = files[selectedFileIndex];

    return (
        <Dashboard>
            <Button onClick={returnPage} type='primary'>Trở về</Button>
            <div style={{ padding: 24 }}>
                <Segmented
                    options={files.map(file => ({
                        value: file.name,
                        label: file.name,
                        style: { color: file.name.endsWith('.ino') ? 'blue' : 'inherit' }
                    }))}
                    onChange={(value) => {
                        const newIndex = files.findIndex(file => file.name === value);
                        setSelectedFileIndex(newIndex);
                    }}
                    value={selectedFile?.name}
                />
                <Card
                    title={`Code for ${selectedFile?.name}`}
                    style={{ marginTop: 24 }}
                    extra={
                        <CopyToClipboard text={selectedFile?.content || ''} onCopy={handleCopy}>
                            <Button type="primary">Copy Code</Button>
                        </CopyToClipboard>
                    }
                >
                    <pre>
                        <code>
                            {selectedFile?.content}
                        </code>
                    </pre>
                    <Space style={{ marginTop: 16 }}>
                        <Button onClick={handlePrev}>Trở lại</Button>
                        <Button onClick={handleNext} type='primary'>Tiếp theo</Button>
                    </Space>
                </Card>
            </div>
        </Dashboard>
    );
}
