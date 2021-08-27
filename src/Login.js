import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Message } from "semantic-ui-react";

export default function Login() {

  return (
    <div>
      <br/><br/><br/><br/><br/><br/>
      <Message
        success
        header="İŞVEREN GİRİŞİ İÇİN"
        content="Hesabına giriş yapmak için tıkla!"
      />
      <Button color="orange" as={NavLink} to="/loginemployer">GİRİŞ</Button>
    </div>
  );
}
