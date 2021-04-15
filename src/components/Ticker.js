import React, { useEffect, useState, useRef } from 'react';
import Ticker from 'react-ticker';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import { Box } from '@quarkly/widgets';

const Item = props => <Box
	mih="0"
	miw="0"
	bg="#FFFFFF"
	width="170px"
	height="96px"
	box-shadow="0px 30px 40px rgba(212, 217, 232, 0.2)"
	border-radius="16px"
	margin-right="24px"
	display="flex"
	align-items="center"
	justify-content="center"
	{...props}
/>;

const Img = atomize.img``;
const overrides = {
	Wrapper: {
		kind: 'Box'
	}
};

const TickerText = ({
	speed,
	direction,
	mode,
	move,
	...props
}) => {
	const requestRef = useRef();
	const containerRef = useRef();
	const childrenRef = useRef();
	const mainRef = useRef();
	const {
		children,
		override,
		rest
	} = useOverrides(props, overrides);
	const [trf, setTrf] = useState(0);
	const [genChildren, setGenChildren] = useState(null);
	const [start, setStart] = useState(performance.now());
	const [update, setUpdate] = useState(false);
	const duration = 2000;

	const animate = now => {
		const rect = containerRef.current.getBoundingClientRect();
		const offset = rect.width;
		setTrf(x => {
			return x >= offset ? x - offset : x + 1;
		});
		requestRef.current = requestAnimationFrame(animate);
	};

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	useEffect(() => {
		if (!update) return;
		console.log('Children update', new Date());
		const object = mainRef.current.getBoundingClientRect();
		const rect = childrenRef.current.getBoundingClientRect();
		console.log(object.width, rect.width);

		if (rect.width === 0) {
			return;
		}

		const N = Math.round(object.width / rect.width);
		console.log(N);
		let data = [];

		for (let i = 0; i < N; i++) {
			data = [...data, ...React.Children.toArray(children).filter(x => {
				return x?.props?.text !== 'child placeholder';
			})];
		}

		console.log(data);
		setGenChildren(data);
		setUpdate(false);
	}, [JSON.stringify(children), update]);

	const callback = function (mutationsList, observer) {
		// Use traditional 'for loops' for IE 11
		for (const mutation of mutationsList) {
			if (mutation.type === 'childList') {
				setUpdate(true);
			}
		}
	};

	useEffect(() => {
		const observer = new MutationObserver(callback);
		observer.observe(childrenRef.current, {
			childList: true
		});
		console.log(' requestRef.current = requestAnimationFrame(animate)');
		requestRef.current = requestAnimationFrame(animate);
		return function cleanup() {
			console.log('Cleanup');
			cancelAnimationFrame(requestRef.current);
			observer.disconnect();
		};
	}, []);
	return <Box
		ref={mainRef}
		d="inline-flex"
		overflow="hidden"
		width="100%"
		{...rest}
	>
		      
		<Box ref={containerRef} miw="auto" display="inline-flex" style={{
			transform: `translate(-${trf}px, 0)`,
			willChange: 'transform'
		}}>
			        
			<Box miw="auto" display="inline-flex" ref={childrenRef}>
				          
				{children}
				        
			</Box>
			        
			{genChildren}
			      
		</Box>
		    
	</Box>;
};

const propInfo = {
	speed: {
		title: 'Speed:',
		control: 'number',
		type: 'number',
		category: 'Main',
		weight: 1
	},
	direction: {
		title: 'Direction:',
		control: 'select',
		variants: ['toLeft', 'toRight'],
		type: 'string',
		category: 'Main',
		weight: 1
	},
	mode: {
		title: 'Mode:',
		control: 'select',
		variants: ['chain', 'await', 'smooth'],
		type: 'string',
		category: 'Main',
		weight: 1
	},
	move: {
		title: 'Move:',
		control: 'radio-group',
		variants: ['enable', 'disable'],
		type: 'text',
		category: 'Main',
		weight: 1
	}
};
const defaultProps = {
	speed: '5',
	direction: 'toLeft',
	mode: 'chain',
	move: 'enable'
};
export default atomize(TickerText)({
	name: 'Ticker',
	description: {
		en: 'Ticker'
	},
	propInfo
}, defaultProps);