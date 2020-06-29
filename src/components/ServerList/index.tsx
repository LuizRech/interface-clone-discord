import React from 'react';

import ServerButton from '../ServerButton';

import { Container , Separator} from './styles';

const ServerList: React.FC = () => {
	return (
		<Container>

			<ServerButton isHome />

			<Separator />

			<ServerButton selected/>
			<ServerButton hasNotifications />
			<ServerButton mentions={7} />
			<ServerButton hasNotifications />
			<ServerButton />
			<ServerButton />
			<ServerButton />
			<ServerButton hasNotifications mentions={12}/>
			<ServerButton />
			<ServerButton />
			<ServerButton mentions={3}/>


		</Container>
	)
}

export default ServerList;