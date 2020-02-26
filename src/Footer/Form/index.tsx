import { Button, Form as AntForm, Input } from "antd";
import React, { useCallback, useState } from "react";

import { FormProps } from "antd/lib/form";

const { TextArea } = Input;

const MessageForm: React.FC<FormProps> = ({ form }) => {
  const [success, setSuccess] = useState<boolean>(false);

  const { getFieldDecorator, validateFields, setFieldsValue } = form;

  const handleSubmit = useCallback((ev: React.FormEvent) => {
    ev.preventDefault();
    const waitForASecond = (callback: () => void) => {
      setTimeout(() => {
        callback();
      }, 1000);
    };

    // check input rules
    validateFields(["name", "email", "message"], (error: React.ErrorInfo) => {
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
    <AntForm
      onSubmit={handleSubmit}
      action="https://formspree.io/xbjylbaj"
      method="post"
      className="footer-flex"
    >
      <div className="row">
        <AntForm.Item className="form-item">
          {getFieldDecorator("name", {
            rules: [{ required: true, message: "required" }]
          })(<Input placeholder="Name" name="name" />)}
        </AntForm.Item>
        <AntForm.Item className="form-item">
          {getFieldDecorator("email", {
            rules: [
              { required: true, message: "invalid", pattern: /\S+@\S+\.\S+/ }
            ]
          })(<Input placeholder="Email" name="email"></Input>)}
        </AntForm.Item>
      </div>
      <div className="row">
        <AntForm.Item className="form-item message">
          {getFieldDecorator("message", {
            rules: [{ required: true, message: "required" }]
          })(<TextArea placeholder="Message" name="message"></TextArea>)}
        </AntForm.Item>
      </div>
      <div className="row center">
        <Button className="button" htmlType="submit">
          {success ? "Sent!" : "Send Message"}
        </Button>
      </div>
    </AntForm>
  );
};

const Form = AntForm.create()(MessageForm);
export default Form;
