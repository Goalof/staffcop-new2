import React, { useState, useCallback } from 'react';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import { Link, Icon } from '@quarkly/widgets';
import { MdKeyboardArrowDown } from "react-icons/md";
const overrides = {
	'Item': {},
	'Item :active': {},
	'Link': {
		kind: 'Link',
		props: {
			color: '--primary'
		}
	},
	'Link :active': {
		kind: 'Link',
		props: {
			color: '--dark'
		}
	},
	'Icon': {
		kind: 'Icon'
	},
	'Icon :active': {
		kind: 'Icon'
	},
	'Icon :open': {
		kind: 'Icon'
	},
	'Icon :closed': {
		kind: 'Icon'
	},
	'Sub': {
		kind: 'Box'
	},
	'Sub :collapse': {
		props: {
			'background-color': 'white',
			position: 'absolute'
		}
	},
	'Sub :open': {
		props: {
			display: 'block'
		}
	},
	'Sub :open': {
		props: {
			display: 'block'
		}
	},
	'Sub :open': {
		props: {
			display: 'block'
		}
	},
	'Sub :open': {
		props: {
			display: 'block'
		}
	},
	'Sub :closed': {
		props: {
			display: 'none'
		}
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

const getParent = (pages, pageId) => {
	if (!pageId || !pages[pageId]) return null;
	return Object.values(pages).find(({
		children = []
	}) => children && Array.isArray(children) && children.includes(pageId));
};

const getOS = () => {
	const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : 'SSR',
	      platform = typeof window !== 'undefined' ? window.navigator.platform : 'SSR',
	      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
	      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
	      iosPlatforms = ['iPhone', 'iPad', 'iPod'];
	let os = null;

	if (macosPlatforms.indexOf(platform) !== -1) {
		os = 'Mac OS';
	} else if (iosPlatforms.indexOf(platform) !== -1) {
		os = 'iOS';
	} else if (windowsPlatforms.indexOf(platform) !== -1) {
		os = 'Windows';
	} else if (/Android/.test(userAgent)) {
		os = 'Android';
	} else if (!os && /Linux/.test(platform)) {
		os = 'Linux';
	}

	return os;
};

const Ul = atomize.ul();
const Li = atomize.li();

const Item = ({
	id,
	name,
	pageUrl,
	path = [],
	children = [],
	pages,
	exact = false,
	collapse,
	depth = 0,
	level = 0,
	override
}) => {
	const hasSub = !!(children.length && level < depth);
	const common = {
		pages,
		depth,
		override,
		level
	};
	const pagePath = [...path, pageUrl];
	const href = `/${pagePath.join('/')}`;
	const {
		projectType
	} = getAPI() || {};
	let match = null; // if (projectType === "gatsby") {
	//   match = useMatch(href) || null;
	// } else {
	//   match = useRouteMatch({ path: href, exact }) || null;
	// }

	let itemProps = override('Item', `Item-${pageUrl}`, match && 'Item :active');
	let linkProps = override('Link', `Link-${pageUrl}`, match && 'Link :active');
	let iconProps = override('Icon', `Icon-${pageUrl}`, match && 'Icon :active');
	let subProps = override('Sub', `Sub-${pageUrl}`);
	let onSubOpen, onSubClose, onSubToggleMobile, onSubToggleDesktop;
	const os = getOS();
	const isMobile = os === 'Android' || os === 'iOS'; // if (hasSub) {
	// 	const [isOpen, setOpen] = useState({
	// 		open: false,
	// 		touch: false
	// 	});
	// 	onSubOpen = () => {
	// 		if (isMobile) return;
	// 		setOpen({
	// 			open: true,
	// 			touch: false
	// 		});
	// 	};
	// 	onSubClose = () => {
	// 		if (isMobile || isOpen.touch) return;
	// 		setOpen({
	// 			open: false,
	// 			touch: isOpen.touch
	// 		});
	// 	};
	// 	onSubToggleMobile = useCallback(() => {
	// 		if (!isMobile) return;
	// 		setOpen({
	// 			open: !isOpen.open,
	// 			touch: true
	// 		});
	// 	}, [isOpen]);
	// 	onSubToggleDesktop = useCallback(() => {
	// 		if (isMobile) return;
	// 		setOpen({
	// 			open: !isOpen.open,
	// 			touch: true
	// 		});
	// 	}, [isOpen]);
	// 	itemProps = override('Item', `Item-${pageUrl}`, match && 'Item :active', `Item ${isOpen.open ? ':open' : ':closed'}`);
	// 	linkProps = override('Link', `Link-${pageUrl}`, match && 'Link :active', `Link ${isOpen.open ? ':open' : ':closed'}`);
	// 	iconProps = override('Icon', `Icon-${pageUrl}`, match && 'Icon :active', `Icon ${isOpen.open ? ':open' : ':closed'}`);
	// 	subProps = override('Sub', `Sub-${pageUrl}`, `Sub ${collapse && ':collapse'}`, `Sub ${isOpen.open ? ':open' : ':closed'}`);
	// }

	return <Li
		margin="0px"
		padding="6px 12px"
		position="relative"
		onMouseEnter={hasSub && onSubOpen}
		onMouseLeave={hasSub && onSubClose}
		onTouchStart={hasSub && onSubToggleMobile}
		onClick={hasSub && onSubToggleDesktop}
		{...itemProps}
	>
		      
		<Link
			white-space="nowrap"
			align-items="center"
			display="flex"
			href={!(hasSub && collapse) && href}
			{...linkProps}
		>
			        
			{linkProps.children || name}
			        
			{hasSub && collapse && <Icon
				category="md"
				icon={MdKeyboardArrowDown}
				size="16px"
				color="inherit"
				{...iconProps}
			/>}
			      
		</Link>
		      
		{hasSub && <Wrapper
			margin="0px"
			padding="6px 0px"
			list-style="none"
			rootId={id}
			path={pagePath}
			{...common}
			{...subProps}
		/>}
		    
	</Li>;
};

const Wrapper = ({
	pages,
	rootId,
	override,
	depth,
	collapse,
	level = 0,
	path,
	exact,
	...rest
}) => {
	const rootPage = pages?.[rootId];
	const common = {
		pages,
		override,
		depth,
		collapse,
		path,
		exact
	};
	const list = rootPage?.children?.map(id => pages[id]) ?? [];
	return <Ul margin="0px" padding="6px 0px" list-style="none" {...rest}>
		      
		{list.map(item => <Item key={item.id} level={level + 1} {...item} {...common} />)}
		    
	</Ul>;
};

const Menu = ({
	depth,
	collapse,
	rootId,
	exact,
	...props
}) => {
	const {
		override,
		rest
	} = useOverrides(props, overrides, defaultProps);
	const pages = getAPI().pages || {};
	let path = [];

	if (rootId !== 'root') {
		let parent = pages[rootId];

		while (parent && parent.id !== 'root') {
			path = [parent.pageUrl, ...path];
			parent = getParent(pages, parent?.id);
		}
	}

	return <Wrapper
		flex-wrap="wrap"
		display="flex"
		position="relative"
		z-index="10"
		rootId={rootId}
		path={path}
		pages={pages}
		depth={depth}
		collapse={collapse}
		exact={exact}
		override={override}
		{...rest}
	/>;
};

const propInfo = {
	depth: {
		title: 'Depth',
		control: 'input',
		category: 'Main',
		weight: 1
	},
	collapse: {
		title: 'Collapse nested',
		control: 'checkbox',
		category: 'Main',
		weight: 1
	},
	rootId: {
		title: 'Root ID',
		control: 'input',
		category: 'Main',
		weight: 1
	},
	exact: {
		title: 'Exact active match',
		control: 'checkbox',
		category: 'Main',
		weight: 1
	}
};
const defaultProps = {
	rootId: 'root',
	depth: 1
};
export default Object.assign(Menu, {
	propInfo,
	defaultProps,
	overrides
});
;