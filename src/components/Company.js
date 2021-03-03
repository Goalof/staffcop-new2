import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Text, Image, Link } from "@quarkly/widgets";
const defaultProps = {
	"margin": "70px 0px 60px 0px",
	"width": "97.3%",
	"gap": "--cmp-stack-gap-default",
	"border-width": "0px",
	"border-image": "linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch",
	"background": "--color-primary",
	"border-radius": "6px",
	"padding": "60px 0px 60px 0px"
};
const overrides = {
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "45%",
			"display": "flex",
			"lg-width": "100%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"padding": "0px 0px 0px 50px",
			"border-radius": "0px",
			"border-width": "0px",
			"flex-direction": "column",
			"align-items": "flex-start",
			"justify-content": "center",
			"lg-align-items": "center",
			"sm-padding": "0px 10px 0px 10px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "normal 700 36px/45.57px --fontFamily-googleInter",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"color": "#ffffff",
			"letter-spacing": "-2%",
			"lg-margin": "0px 0px 20px 0px",
			"lg-text-align": "center",
			"md-font": "normal 700 30px/40px Inter, sans-serif",
			"sm-font": "normal 700 24px/30px Inter, sans-serif",
			"sm-width": "100%",
			"children": "92% of companies detect serious violations when testing StaffCop"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "55%",
			"display": "flex",
			"lg-width": "100%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"padding": "0px 0px 0px 0px",
			"border-radius": "0px",
			"border-width": "0px",
			"flex-direction": "column",
			"align-items": "flex-start",
			"justify-content": "flex-start",
			"lg-align-items": "center"
		}
	},
	"stack": {
		"kind": "Stack",
		"props": {
			"width": "90%",
			"margin": "0px 0px 0px 0px",
			"gap": "0px",
			"sm-align-items": "center",
			"sm-justify-content": "center"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "33.3333%",
			"display": "flex",
			"sm-width": "100%",
			"md-margin": "0px 0px 10px 0px",
			"md-width": "50%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"border-radius": "8px",
			"flex-direction": "column",
			"justify-content": "center",
			"padding": "0px 0px 0px 0px",
			"align-items": "center"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "https://www.capterra.com/reviews/183561/StaffCop?utm_source=vendor&utm_medium=badge&utm_campaign=capterra_reviews_badge",
			"text-decoration-line": "initial",
			"transition": " all .3s;  transition: all .3s;",
			"hover-transform": "translateY(-10px)",
			"target": "_blank"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"loading": "lazy",
			"src": "https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group12311111111.svg?v=2020-10-21T21:21:17.189Z"
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "33.3333%",
			"display": "flex",
			"sm-width": "100%",
			"md-margin": "0px 0px 10px 0px",
			"md-width": "50%"
		}
	},
	"stackItemOverride3": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"border-radius": "8px",
			"flex-direction": "column",
			"justify-content": "center",
			"padding": "0px 0px 0px 0px",
			"align-items": "center"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "https://sourceforge.net/software/product/StaffCop/?pk_campaign=badge&pk_source=vendor",
			"text-decoration-line": "initial",
			"transition": " all .3s;  transition: all .3s;",
			"hover-transform": "translateY(-10px)",
			"target": "_blank"
		}
	},
	"image1": {
		"kind": "Image",
		"props": {
			"loading": "lazy",
			"src": "https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group222666.svg?v=2020-10-21T21:22:08.743Z"
		}
	},
	"stackItem4": {
		"kind": "StackItem",
		"props": {
			"width": "33.3333%",
			"display": "flex",
			"sm-width": "100%",
			"md-margin": "0px 0px 10px 0px",
			"md-width": "100%"
		}
	},
	"stackItemOverride4": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"border-radius": "8px",
			"flex-direction": "column",
			"justify-content": "center",
			"padding": "0px 0px 0px 0px",
			"align-items": "center"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "https://www.serchen.com/category/employee-monitoring/",
			"text-decoration-line": "initial",
			"transition": " all .3s;  transition: all .3s;",
			"hover-transform": "translateY(-10px)",
			"target": "_blank"
		}
	},
	"image2": {
		"kind": "Image",
		"props": {
			"loading": "lazy",
			"src": "https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Grou333385.svg?v=2020-10-21T21:22:37.813Z"
		}
	}
};

const CompanyNeW = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Stack {...rest}>
		<StackItem {...override("stackItem")}>
			<Override {...override("stackItemOverride")} />
			{"        "}
			<Text {...override("text")} />
			{"    "}
		</StackItem>
		<StackItem {...override("stackItem1")}>
			<Override {...override("stackItemOverride1")} />
			<Stack {...override("stack")}>
				{"    "}
				<StackItem {...override("stackItem2")}>
					<Override {...override("stackItemOverride2")} />
					<Link {...override("link")}>
						<Image {...override("image")} />
					</Link>
					{"         "}
				</StackItem>
				<StackItem {...override("stackItem3")}>
					<Override {...override("stackItemOverride3")} />
					<Link {...override("link1")}>
						<Image {...override("image1")} />
					</Link>
					{"         "}
				</StackItem>
				<StackItem {...override("stackItem4")}>
					<Override {...override("stackItemOverride4")} />
					<Link {...override("link2")}>
						<Image {...override("image2")} />
					</Link>
					{"         "}
				</StackItem>
				{"    "}
			</Stack>
			{"            "}
		</StackItem>
		{"        "}
		{children}
	</Stack>;
};

Object.assign(CompanyNeW, { ...Stack,
	defaultProps,
	overrides
});
export default CompanyNeW;