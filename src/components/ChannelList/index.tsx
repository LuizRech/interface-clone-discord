import React from 'react';

import ChannelButton from '../ChannelButton';

import {Container, Category, AddCategoryIcon} from './styles';

const ChannelList: React.FC = () => {
  return(
    <Container>
      <Category>
          <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" selected/>
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="lolzinho" />
      <ChannelButton channelName="csgo" />
      <ChannelButton channelName="euro truck" />
    </Container>

  );
}

export default ChannelList;