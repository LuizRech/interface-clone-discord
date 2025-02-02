import React from 'react';

import {Container, HashtagIcon, InviteIcon, SettingsIcon} from './styles';

export interface Props {
  channelName: String;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({
  channelName,
  selected
}) => {
  return(
    <Container className={selected ? 'active' : ''}>
      
      <div>
        <HashtagIcon />
        <span>{channelName}</span>  
      </div>
      
      
      <div className="leftIcons">
        <InviteIcon />
        <SettingsIcon />
      </div>
      
    </Container>
  );
}

export default ChannelButton;