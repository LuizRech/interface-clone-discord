import React from 'react';

import {Container, Role, User, Avatar} from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
  nickname,
  isBot
}) => {
  return (
  <User>
    <Avatar className={isBot ? 'bot' : ''}/> {/* Se o cidadao for bot, coloca a classe bot pra cair os efeitos de bot no css, onde sao aplicados ao .bot */}
    <strong>{nickname}</strong>

    {isBot &&<span>BOT</span>}
  </User>
  )
}

const UserList: React.FC = () => {
  return(
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Luiz Rech" />
      
      <Role>Offline - 12</Role>
      <UserRow nickname="DjMusic" isBot />
      <UserRow nickname="João" />
      <UserRow nickname="Maria" />
      <UserRow nickname="Pedro" />
      <UserRow nickname="José" />
      <UserRow nickname="Paulo" />
      <UserRow nickname="Marcia" />
      <UserRow nickname="Carol" />
      <UserRow nickname="Roberto" />
      <UserRow nickname="Mateus" />
      <UserRow nickname="Rodrigo" />
      <UserRow nickname="Toni" />
      <UserRow nickname="Rafa" />
    </Container>
  );
}

export default UserList;