import React, { useState } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Link, Text } from '@quarkly/widgets';
const overrides = {
	'Link': {
		kind: 'Link'
	},
	'Link :default': {
		kind: 'Link'
	},
	'Link :hover': {
		kind: 'Link'
	},
	'Before Text': {
		kind: 'Text',
		props: {
			display: 'inline-block',
			color: 'red'
		}
	},
	'Before Text2': {
		kind: 'Text',
		props: {
			color: '#13212A'
		}
	},
	'Before Text2 :default': {
		kind: 'Text',
		props: {
			color: '#13212A'
		}
	},
	'Before Text2 :hover': {
		kind: 'Text',
		props: {
			color: '#13212A'
		}
	}
};

const CardHoverButton = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, {});
	const [isHover, setHover] = useState(false);

	const onCardEnter = () => {
		setHover(true);
	};

	const onCardLeave = () => {
		setHover(false);
	};

	return <Box onMouseEnter={onCardEnter} onMouseLeave={onCardLeave} {...rest}>
		      
		{children}
		      
		<Text {...override('Before Text2', `Before Text2 :${isHover ? 'hover' : 'default'}`)}>
			        
			{override('Before Text2').children || '❯'}
			      
		</Text>
		      
		<Link {...override('Link', `Link :${isHover ? 'hover' : 'default'}`)}>
			        
			{override('Link').children || '❯'}
			      
		</Link>
		    
	</Box>;
};

Object.assign(CardHoverButton, {
	overrides
});
export default CardHoverButton;