import React from "react";
import { NavLink } from "react-router-dom";
import { Message, Button } from "semantic-ui-react";

export default function Login2() {

  return (
    <div>
      <br/><br/><br/><br/><br/><br/>
        <Message
        success
        header="İŞ ARAYAN GİRİŞİ İÇİN"
        content="Hesabına giriş yapmak için tıkla!"
      />
      <Button color="green" as={NavLink} to="/loginjobseeker">GİRİŞ</Button>
    </div>
  );
}
