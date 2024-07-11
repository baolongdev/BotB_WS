import { message } from "antd";
import router from "next/router";

export const getFileData = (file: Blob): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            if (event.target?.result) {
                const base64Data = event.target.result.toString().split(',')[1];
                resolve(base64Data);
            } else {
                reject(new Error('Failed to read file data'));
            }
        };
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
};

export const onFinish = async ({ values, form, processFile, folderId }: OnFinishProps) => {
    const { name, fileList, feedback } = values;
    const feedbackContent = `Name: ${name}\nFeedback: ${feedback}`;
    const feedbackFile = new File([feedbackContent], `feedback_${name}.txt`, {
        type: 'text/plain',
    });
    message.info('Đang trong quá trình thực hiện vui lòng chờ....');
    try {
        for (let file of fileList) {
            if (file.originFileObj instanceof Blob) {
                const fileName = `${name}_${file.name}`;
                const fileBlob = await getFileData(file.originFileObj);
                const uploadResult = await processFile({
                    folderId,
                    file: { ...file, name: fileName, data: fileBlob }
                });
                if (uploadResult.error) {
                    throw new Error(`Failed to upload file ${fileName}`);
                }
            } else {
                console.error('Item is not a Blob:', file);
            }
        }
        const feedbackFileBlob = await getFileData(feedbackFile);
        const feedbackUploadResult = await processFile({
            folderId,
            file: { ...feedbackFile, name: `feedback_${name}.txt`, data: feedbackFileBlob }
        });
        if (feedbackUploadResult.error) {
            throw new Error(`Failed to upload feedback file`);
        }
        form.resetFields();
        message.success('Tải lên hoàn tất.');
        setTimeout(() => {
            router.push('/thank-you'); // Replace with your actual thank-you page route
        }, 5000);
    } catch (error) {
        console.error('Failed to upload files:', error);
        message.error('Không thể tải tập tin lên. Vui lòng thử lại.');
    }
};

export const onFinishFailed = (errorInfo: any) => {
    console.error('Failed:', errorInfo);
};

export const normFile = (e: any) => {

    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};