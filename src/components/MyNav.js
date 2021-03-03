import React, { useState, useCallback, useEffect, useRef } from 'react';
import atomize from "@quarkly/atomize";
import { Icon, Box } from '@quarkly/widgets';
import { MdKeyboardArrowDown } from "react-icons/md";
const NavItems = atomize.div();

const MyNav = props => {
	const [isOpen, setOpen] = useState(false);
	const clickItemRef = useRef(null);

	const handlerOpen = () => setOpen(true);

	const handlerClose = () => setOpen(false);

	const updateDimensions = () => {
		console.log(clickItemRef);
	};

	useEffect(() => {
		window.addEventListener("resize", updateDimensions);
		return function cleanup() {
			window.removeEventListener("resize", updateDimensions);
		};
	}, []);
	return <nav onMouseEnter={handlerOpen} onMouseLeave={handlerClose}>
		            
		<a href="#" className="menu-trigger">
			Solutions 
			<Icon size="24px" category="md" icon={MdKeyboardArrowDown} color="#000" />
		</a>
		            
		<div className="munecontainer">
			            
			<NavItems className="menuopen" display={isOpen ? 'block' : 'none'}>
				                
				<ul ref={clickItemRef}>
					                    
					<li>
						<a href="/starter">
							Remote Administration
						</a>
					</li>
					                    
					<li>
						<a href="/UAM">
							Employee Monitoring
						</a>
					</li>
					                    
					<li>
						<a href="/DLP">
							Information Security
						</a>
					</li>
					                
				</ul>
				            
			</NavItems>
			            
		</div>
		        
	</nav>;
};

export default MyNav;