import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your JS here:

const customJs = `

document.getElementById('hider').onclick = function() {
    document.getElementById('content').hidden = true;
		document.getElementById('hider').hidden = true;
  }
document.getElementById('hider-1').onclick = function() {
    document.getElementById('content-1').hidden = true;
		document.getElementById('hider-1').hidden = true;
  }
`;

const EmbedJS = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		const script = document.createElement("script");
		script.innerHTML = customJs;
		ref.current.appendChild(script);
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedJS)({
	name: "EmbedJS",
	normalize: true,
	mixins: true
});