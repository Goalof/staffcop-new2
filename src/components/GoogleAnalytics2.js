import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your JS here:

const customJs = `
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-6450776-3');
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