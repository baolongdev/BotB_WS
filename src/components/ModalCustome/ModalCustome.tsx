import { setDataStore } from '@redux/features/dataStore/dataStoreSlice';
import { AppDispatch, RootState } from '@redux/types/types';
import { Form, message, Modal } from 'antd';
import React, { Fragment, ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import onFinishFailed from './onFinishFailed';

export default function ModalCustome() {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();
    const dispatch = useDispatch<AppDispatch>();
    const dataStore = useSelector((state: RootState) => state.dataStore.dataStore);
    const [modalController, setModalController] = useState({
        isModalOpen: false,
        title: '',
        children: <Fragment></Fragment>,
        data: {
            folderId: "",
            onFinish: (params: { values: any, form: any, folderId: string }) => { },
        }
    });

    const handleOk = async () => {
        try {
            setConfirmLoading(true)
        } catch (error) {
            setConfirmLoading(false);
            message.error('Validation failed. Please check your inputs.');
        }
    };

    const handleCancel = () => {
        dispatch(setDataStore([
            {
                modalController: {
                    ...modalController,
                    isModalOpen: false
                }
            }
        ]));
    };

    const handleFinish = async (values: any) => {
        setConfirmLoading(false);
        dispatch(setDataStore([
            {
                modalController: {
                    ...modalController,
                    isModalOpen: false
                }
            }
        ]));
    };

    useEffect(() => {
        if (dataStore?.modalController) {
            setModalController(dataStore.modalController);
        }
    }, [dataStore]);


    return (
        <Modal
            width='90%'
            title={modalController.title}
            centered
            okText=""
            // cancelText="Cancel"
            open={modalController.isModalOpen}
            onOk={handleOk}
            // onCancel={handleCancel}
            okButtonProps={{ autoFocus: true, htmlType: 'submit' }}
            destroyOnClose
            confirmLoading={confirmLoading}
            modalRender={(dom) => (
                <Form
                    form={form}
                    name="file_upload_form"
                    initialValues={{ modifier: 'public' }}
                    onFinish={handleFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                >
                    {dom}

                </Form>
            )}
        >
            {modalController.children}
        </Modal>
    );
}
