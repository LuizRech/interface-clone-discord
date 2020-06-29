import React, { useRef, useEffect } from 'react';

import {Container, Messages, InputWrapper, Input, InputIcon} from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  
  useEffect(() => {
    const div = messageRef.current;

    if(div){
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);
  return(
    <Container>
      <Messages ref={messageRef}>

        { Array.from(Array(14).keys()).map((n) => (
          <ChannelMessage 
            key={n}
            author="Luiz Rech"
            date="29/06/2020"
            content="Olá xD"
          />
        ))}
        
        <ChannelMessage 
          author="João"
          date="29/06/2020"
          content={
            <>
            <Mention>Luiz Rech</Mention>, gostei do seu clone do Discord!
            </>
          }
          hasMention
        />

        <ChannelMessage
          author="DjMusic"
          date="29/06/2020"
          content="Tocando agora Dani California - Red Hot Chili Peppers"
          isBot
        />  
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;