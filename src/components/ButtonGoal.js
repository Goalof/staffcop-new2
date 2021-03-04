import React from 'react';
import ReactGA from 'react-ga';
import { useOverrides } from '@quarkly/components';
import { Box, Button } from '@quarkly/widgets';
const overrides = {
	'Button': {
		kind: 'Button'
	}
};

const getAPI = () => {
	if (typeof window !== "undefined") {
		return window.QAPI || {};
	}

	if (typeof global !== "undefined") {
		return global.QAPI || {};
	}

	return {};
};

const isProd = getAPI().mode === 'production';

if (isProd) {
	ReactGA.initialize('UA-6450776-3', {
		titleCase: false,
		gaOptions: {
			name: 'myTracker',
			category: 'preorder',
			userId: 123
		}
	});
}

const GaButton = ({
	pageName,
	...props
}) => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	const gaPageview = isProd ? ReactGA.pageview(pageName) : () => {};
	const ga = isProd ? ReactGA.ga() : () => {};

	const pageview = () => {
		console.log('Clicked on "send event preorder"');
		ga('send', 'event', 'preorder');
	};

	return <Box {...rest}>
		      
		<Button onClick={pageview} {...override('Button')}>
			        
			{override('Button').children || 'Some Text'}
			      
		</Button>
		    
	</Box>;
};

export default Object.assign(GaButton, {
	propInfo: {
		pageName: {
			control: 'input'
		}
	},
	overrides
});
;