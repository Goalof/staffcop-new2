import React, { useState } from 'react';
import { Box } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import YouTubePlayer from './YouTubePlayer';
const overrides = {
	'YouTubePlayer': {
		kind: 'YouTubePlayer'
	}
};

const Video = ({
	videoId,
	...props
}) => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	const [player, setPlayer] = useState(<Box padding-top="56.25%" min-height="0" height="0" position="relative" />);
	setTimeout(() => {
		setPlayer(<YouTubePlayer videoId={videoId} {...override('YouTubePlayer')} />);
	}, 2500);
	return <Box {...rest}>
		{player}
	</Box>;
};

export default Object.assign(Video, {
	title: 'YouTubePlayer',
	propInfo: {
		videoId: {
			control: 'input',
			weight: 1
		}
	},
	defaultProps: {
		videoId: 'Rzgdz1mbLbE'
	},
	overrides
});