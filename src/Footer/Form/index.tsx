import { Button, Form, Input } from "antd";
import React, { useCallback, useState } from "react";

import { FormProps } from "antd/es/form";
const { TextArea } = Input;

interface IWrappedFormUtils {
  setFieldsValue(obj: object, callback?: () => void): void;
  validateFields(
    fieldNames: string[],
    callback: <V>(errors: any, values: V) => void
  ): void;
  getFieldDecorator<T extends object = {}>(
    id: keyof T,
    options?: object
  ): (node: React.ReactNode) => React.ReactNode;
}

const MessageForm: React.FC<FormProps> = ({ form }) => {
  const [success, setSuccess] = useState<boolean>(false);

  const {
    getFieldDecorator,
    validateFields,
    setFieldsValue
  } = form as IWrappedFormUtils;

  const handleSubmit = useCallback(ev => {
    ev.preventDefault();
    const waitForASecond = (callback: () => void) => {
      setTimeout(() => {
        callback();
      }, 1000);
    };

    // check input rules
    validateFields(["name", "email", "message"], (error: any) => {
      if (!error) {
        // send form data
        const messageForm = ev.target as HTMLFormElement;
        const data = new FormData(messageForm);
        const xhr = new XMLHttpRequest();
        xhr.open(messageForm.method, messageForm.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) {
            return;
          }
          if (xhr.status === 200) {
            setSuccess(true);
            waitForASecond(() => {
              setFieldsValue({ name: "", email: "", message: "" });
              setSuccess(false);
            });
          } else {
            console.error("sent message failed");
          }
        };
        xhr.send(data);
      }
    });
  }, []);

  return (
    <Form
      onSubmit={handleSubmit}
      action="https://formspree.io/xbjylbaj"
      method="post"
      className="footer-flex"
    >
      <div className="row">
        <Form.Item className="form-item">
          {getFieldDecorator("name", {
            rules: [{ required: true, message: "required" }]
          })(<Input placeholder="Name" name="name" />)}
        </Form.Item>
        <Form.Item className="form-item">
          {getFieldDecorator("email", {
            rules: [
              { required: true, message: "invalid", pattern: /\S+@\S+\.\S+/ }
            ]
          })(<Input placeholder="Email" name="email"></Input>)}
        </Form.Item>
      </div>
      <div className="row">
        <Form.Item className="form-item message">
          {getFieldDecorator("message", {
            rules: [{ required: true, message: "required" }]
          })(<TextArea placeholder="Message" name="message"></TextArea>)}
        </Form.Item>
      </div>
      <div className="row center">
        <Button className="button" htmlType="submit">
          {success ? "Sent!" : "Send Message"}
        </Button>
      </div>
    </Form>
  );
};

const WrappedForm = Form.create()(MessageForm);
export { WrappedForm };
