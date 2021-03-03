import React from "react";
import { useOverrides, Override, StackItem, Stack, Section } from "@quarkly/components";
import { Text, Span, Image, Link } from "@quarkly/widgets";
const defaultProps = {
	"padding": "50px 0 80px 0",
	"background": "#F8F8F9",
	"md-padding": "30px 0 30px 0"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "--headline2",
			"margin": "0px 0px 50px 0px",
			"display": "inline-block",
			"color": "#13212A",
			"letter-spacing": "-0.01em",
			"text-align": "center",
			"md-font": "normal 700 30px/40px Inter, sans-serif",
			"sm-font": "normal 700 24px/30px Inter, sans-serif",
			"lg-font": "normal 700 36px/58px Inter, sans-serif",
			"lg-margin": "0px 0px 30px 0px",
			"children": <>
				<Span color="--primary">
					Need a More
				</Span>
				<br />
				Comprehensive Solution?
			</>
		}
	},
	"stack": {
		"kind": "Stack",
		"props": {
			"margin": "0px 0px 0px 0px",
			"width": "100%"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "33.3333%",
			"display": "flex",
			"lg-width": "50%",
			"md-width": "100%",
			"nout-width": "50%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"border-image": "linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch",
			"border-radius": "8px",
			"border-width": "1px",
			"border-style": "solid",
			"flex-direction": "column",
			"align-items": "flex-start",
			"justify-content": "space-between",
			"background": " linear-gradient(180deg, #FFFFFF 31.77%, #F7F7F7 47.4%, #FCFCFC 85.42%);",
			"padding": "20px 36px 42px 36px",
			"lg-align-items": "center",
			"box-shadow": " 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"loading": "lazy",
			"src": "https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Frame.png.svg?v=2020-11-16T21:22:42.974Z",
			"object-position": "0% 0%",
			"margin": "0px 0px 47px -10px",
			"lg-margin": "0px 0px 47px 0px"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--headline3",
			"margin": "0px 0px 18px 0px",
			"display": "inline-block",
			"color": "rgba(19, 33, 42, 1)",
			"lg-text-align": "center",
			"children": "Starter"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "normal 400 18px/160% --fontFamily-googleInter",
			"margin": "0px 0px 36px 0px",
			"display": "inline-block",
			"color": "rgba(19, 33, 42, 1)",
			"lg-text-align": "center",
			"children": <>
				Screen Recording & live view, website and apps tracking
				<br />
				<Span
					color="rgba(255, 255, 255, 0)"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					.
				</Span>
			</>
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/starter/",
			"padding": "13px 29px 13px 29px",
			"border-color": "--color-primary",
			"border-radius": "40px",
			"border-width": "2px",
			"border-style": "solid",
			"text-decoration-line": "initial",
			"color": "--primary",
			"font": "--menu",
			"hover-background": "--color-primary",
			"transition": "-webkit-transition: all .3s;  transition: all .3s",
			"hover-color": "#fff",
			"children": "Try for free"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "33.3333%",
			"display": "flex",
			"lg-width": "50%",
			"md-width": "100%",
			"nout-width": "50%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"border-image": "linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch",
			"border-radius": "8px",
			"border-width": "1px",
			"border-style": "solid",
			"flex-direction": "column",
			"align-items": "flex-start",
			"justify-content": "space-between",
			"background": " linear-gradient(180deg, #FFFFFF 31.77%, #F7F7F7 47.4%, #FCFCFC 85.42%);",
			"padding": "20px 36px 42px 36px",
			"lg-align-items": "center",
			"box-shadow": " 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
		}
	},
	"image1": {
		"kind": "Image",
		"props": {
			"loading": "lazy",
			"src": "https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Frame2.png.svg?v=2020-11-16T21:22:42.967Z",
			"object-position": "0% 0%",
			"margin": "0px 0px 47px -10px",
			"lg-margin": "0px 0px 47px 0px"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"font": "--headline3",
			"margin": "0px 0px 18px 0px",
			"display": "inline-block",
			"color": "rgba(19, 33, 42, 1)",
			"lg-text-align": "center",
			"children": "UAM"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"font": "normal 400 18px/160% --fontFamily-googleInter",
			"margin": "0px 0px 36px 0px",
			"display": "inline-block",
			"color": "rgba(19, 33, 42, 1)",
			"lg-text-align": "center",
			"nout-margin": "0px 0px 63px 0px",
			"children": <>
				User activity monitoring, audit, forensics, UBA, policies and rules
				<br />
				<Span
					color="rgba(255, 255, 255, 0)"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					.
				</Span>
			</>
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "/uam/",
			"padding": "13px 29px 13px 29px",
			"border-color": "--color-primary",
			"border-radius": "40px",
			"border-width": "2px",
			"border-style": "solid",
			"text-decoration-line": "initial",
			"color": "--primary",
			"font": "--menu",
			"hover-background": "--color-primary",
			"transition": "-webkit-transition: all .3s;  transition: all .3s",
			"hover-color": "#fff",
			"children": "Try for free"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "33.3333%",
			"display": "flex",
			"lg-width": "100%",
			"nout-width": "100%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"border-image": "linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch",
			"padding": "20px 36px 42px 36px",
			"border-radius": "8px",
			"border-width": "1px",
			"border-style": "solid",
			"flex-direction": "column",
			"align-items": "flex-start",
			"justify-content": "space-between",
			"background": "#1465FF",
			"position": "relative",
			"lg-align-items": "center"
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"border-radius": "8px",
			"border-width": "1px",
			"border-style": "solid",
			"border-image": "linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch",
			"padding": "8px 13px 8px 13px",
			"margin": "0px 0px 0px 0px",
			"font": "600 14px/14px --fontFamily-googleInter",
			"color": "#ffffff",
			"background": "#4AC62B",
			"position": "absolute",
			"right": "18px",
			"left": "auto",
			"bottom": "auto",
			"top": "18px",
			"children": "Recommend"
		}
	},
	"image2": {
		"kind": "Image",
		"props": {
			"loading": "lazy",
			"src": "https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/treriya3.svg?v=2020-11-16T21:37:12.931Z",
			"object-position": "0% 0%",
			"margin": "0px 0px 20px -10px",
			"lg-margin": "0px 0px 20px 0px"
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"font": "--headline3",
			"margin": "0px 0px 18px 0px",
			"display": "inline-block",
			"color": "#ffffff",
			"children": "DLP"
		}
	},
	"text7": {
		"kind": "Text",
		"props": {
			"font": "normal 400 18px/160% --fontFamily-googleInter",
			"margin": "0px 0px 36px 0px",
			"display": "inline-block",
			"color": "rgba(255, 255, 255, 0.6)",
			"sm-text-align": "center",
			"children": <>
				Staffcop UAM plus content-based data exfiltration rules
				<br />
				<Span color="rgba(255, 255, 255, 0)">
					.
				</Span>
			</>
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "/dlp/",
			"padding": "13px 29px 13px 29px",
			"border-radius": "40px",
			"border-color": "#ffffff",
			"border-width": "2px",
			"border-style": "solid",
			"text-decoration-line": "initial",
			"color": "--primary",
			"font": "--menu",
			"transition": "-webkit-transition: all .3s;  transition: all .3s",
			"background": "#ffffff",
			"hover-border-color": "#0D0D0D",
			"hover-color": "#ffffff",
			"hover-background": "#0D0D0D",
			"children": "Try for free"
		}
	}
};

const Newblockned = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" max-width="1200px" align-items="center" />
		<Text {...override("text")} />
		<Stack {...override("stack")}>
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				{"        "}
				<Image {...override("image")} />
				<Text {...override("text1")} />
				<Text {...override("text2")} />
				<Link {...override("link")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				{"        "}
				<Image {...override("image1")} />
				<Text {...override("text3")} />
				<Text {...override("text4")} />
				<Link {...override("link1")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem2")}>
				<Override {...override("stackItemOverride2")} />
				{"        "}
				<Text {...override("text5")} />
				<Image {...override("image2")} />
				<Text {...override("text6")} />
				<Text {...override("text7")} />
				<Link {...override("link2")} />
				{"    "}
			</StackItem>
			{"        "}
		</Stack>
		{children}
	</Section>;
};

Object.assign(Newblockned, { ...Section,
	defaultProps,
	overrides
});
export default Newblockned;