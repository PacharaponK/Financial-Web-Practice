import React, { useState, useEffect } from 'react';
import { Form, Button, Modal, form,Select,Input, InputNumber } from 'antd';
export default function EditButton(props) {
    // console.log(props);
    const [form] = Form.useForm()
    const [isModalOpen, setIsModalOpen] = useState(props.setmodal);

    const handleOk = () => {
        setIsModalOpen(() => props.setnull());
        form.validateFields().then(formData => {
            props.onItemEdited({ ...props.item,...formData})
        })
    };

    const handleCancel = () => {
        setIsModalOpen(() => props.setnull());
    };

    useEffect(() => {
        form.setFieldsValue(props.item)
    })
    // console.log(props.item);
    return (
        <>
            <Modal title="Edit Transaction" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form form={form} onFinish={(data) => {
                    props.onItemAdded(data);
                    form.resetFields();
                }}>
                    <Form.Item
                        name="type"
                        label="ชนิด"
                        rules={[{ required: true }]}
                    >
                        <Select
                            allowClear
                            style={{ width: "100px" }}
                            options={[
                                {
                                    value: 'income',
                                    label: 'รายรับ',
                                },
                                {
                                    value: 'expense',
                                    label: 'รายจ่าย',
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item
                        name="amount"
                        label="จำนวนเงิน"
                        rules={[{ required: true }]}>
                        <InputNumber placeholder='amount' />
                    </Form.Item>
                    <Form.Item
                        name="note"
                        label="หมายเหตุ"
                        rules={[{ required: true }]}>
                        <Input placeholder="Note" />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
