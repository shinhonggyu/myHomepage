import { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const Container = styled.div`
  background-color: white;
  position: relative;
  display: flex;
`;

const Bg = styled.div`
  height: 100%;
  width: 20px;
  background-color: #59b256;
  position: absolute;
`;

const Left = styled.div`
  flex: 1;
  padding: 50px 0 50px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 60px;
  width: 80%;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0;
  font-weight: 300;
  width: 70%;
`;

const Right = styled.div`
  flex: 1;
  padding: 50px 50px 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Desc = styled.p`
  font-weight: 200;
`;

const Form = styled.form`
  margin-top: 20px;
`;

const Input = styled.input`
  width: 50%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0;
  font-size: 14px;
  padding-left: 10px;

  &:focus {
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  margin: 10px 0;
  font-size: 14px;
  padding-left: 10px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  display: block;
  padding: 10px;
  background-color: #59b256;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
`;

const Span = styled.span`
  color: crimson;
`;

const Contact = () => {
  const [submit, setSubmit] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_abcstrm',
        'template_2nxxvuk',
        formRef.current,
        '"user_XcU4fP8YR9Z2jWolZClob"'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setSubmit(true);
  };

  return (
    <Container id="contact">
      <Bg />
      <Left>
        <Title>Let's discuss your project</Title>
        <Info>
          <InfoItem>
            <i
              style={{ fontSize: '30px', marginRight: '20px' }}
              className="fas fa-phone-volume"
            ></i>
            010-7673-6879
          </InfoItem>
          <InfoItem>
            <i
              style={{ fontSize: '30px', marginRight: '20px' }}
              className="far fa-envelope"
            ></i>
            zowoz8819@gmail.com
          </InfoItem>
          <InfoItem>
            <i
              style={{ fontSize: '30px', marginRight: '20px' }}
              className="fas fa-map-marker-alt"
            ></i>
            Korea somewhere..
          </InfoItem>
        </Info>
      </Left>
      <Right>
        <Desc>
          <b>What’s your story?</b> Get in touch. Always available for
          freelancing if the right project comes along. me.
        </Desc>
        <Form ref={formRef} onSubmit={sendEmail}>
          <Input type="text" placeholder="Name" name="user_name" />
          <Input type="text" placeholder="Subject" name="user_subject" />
          <Input type="email" placeholder="Email" name="user_email" />
          <Textarea rows="5" placeholder="Message" name="message" />
          <Button>Submit</Button>
        </Form>
        {submit && <Span>I'will Reply ASAP</Span>}
      </Right>
    </Container>
  );
};

export default Contact;
