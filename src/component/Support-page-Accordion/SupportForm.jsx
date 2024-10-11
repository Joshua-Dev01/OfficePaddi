import React from 'react';
import { Form, Input, Button } from 'antd';

export const SupportForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values from form: ', values);
    // Handle form submission logic here
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Support Form</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="space-y-4"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter your name!' }]}
        >
          <Input placeholder="Enter your name" className="p-2" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
        >
          <Input placeholder="Enter your email" className="p-2" />
        </Form.Item>

        <Form.Item
          name="message"
          label="Message"
          rules={[{ required: true, message: 'Please enter your message!' }]}
        >
          <Input.TextArea placeholder="Enter your message" rows={4} className="p-2" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
