import React from "react";
import { useOverrides, Override, SocialMedia, StackItem, Stack, Section } from "@quarkly/components";
import { Image, Text, Link, Icon, Box, Hr } from "@quarkly/widgets";
import { FaRegLifeRing } from "react-icons/fa";
const defaultProps = {
	"padding": "50px 0 0px 0",
	"lg-padding": "50px 0 20px 0"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {
			"width": "100%",
			"margin": "0px 0px 0px 0px"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "40%",
			"display": "flex",
			"lg-width": "100%",
			"lg-align-items": "center",
			"lg-justify-content": "center"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"lg-align-items": "center"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"loading": "lazy",
			"width": "250px",
			"src": "https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/logoblack.svg?v=2020-10-19T23:35:03.557Z"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "normal 400 18px/160% --fontFamily-googleInter",
			"margin": "31px 0px 24px 0px",
			"display": "inline-block",
			"color": "#13212A",
			"md-text-align": "center",
			"opacity": "0.5",
			"children": "Russia, Novosibirsk, Koptug Road 4, Sobolev Institute of Mathematics"
		}
	},
	"socialMedia": {
		"kind": "SocialMedia",
		"props": {
			"facebook": "https://www.facebook.com/quarklyapp/",
			"twitter": "https://twitter.com/quarklyapp",
			"youtube": "https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw",
			"vkontakte": "https://vk.com/quarklyapp",
			"telegram": "https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ",
			"align-items": "center",
			"justify-content": "flex-start",
			"background": "rgba(0, 0, 0, 0)",
			"lg-justify-content": "center"
		}
	},
	"socialMediaOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"background": "rgba(237, 242, 246, 0)",
			"color": "#ffffff",
			"hover-border-radius": "40px",
			"hover-color": "--primary"
		}
	},
	"socialMediaOverride1": {
		"kind": "Override",
		"props": {
			"slot": "link-telegram",
			"display": "none"
		}
	},
	"socialMediaOverride2": {
		"kind": "Override",
		"props": {
			"slot": "link-vkontakte",
			"display": "none"
		}
	},
	"socialMediaOverride3": {
		"kind": "Override",
		"props": {
			"slot": "icon",
			"color": "#999999"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "20%",
			"display": "flex",
			"lg-width": "33.333%",
			"md-width": "100%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"lg-align-items": "center"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "normal 700 18px/160% --fontFamily-googleInter",
			"margin": "0px 0px 27px 0px",
			"display": "inline-block",
			"color": "#13212A",
			"children": "ABOUT"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/about-us/",
			"color": "#13212A",
			"text-decoration-line": "initial",
			"font": "normal 400 18px/160% --fontFamily-googleInter",
			"margin": "0px 0px 21px 0px",
			"hover-color": "--primary",
			"transition": "all 1s ease 0s",
			"opacity": "0.5",
			"hover-opacity": "1",
			"children": "Company"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"color": "#13212A",
			"text-decoration-line": "initial",
			"font": "normal 400 18px/160% --fontFamily-googleInter",
			"margin": "0px 0px 21px 0px",
			"hover-color": "--primary",
			"transition": "all 1s ease 0s",
			"opacity": "0.5",
			"href": "/pricing/",
			"hover-opacity": "1",
			"children": "Pricing"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "/leadership/",
			"color": "#13212A",
			"text-decoration-line": "initial",
			"font": "normal 400 18px/160% --fontFamily-googleInter",
			"margin": "0px 0px 21px 0px",
			"hover-color": "--primary",
			"transition": "all 1s ease 0s",
			"md-text-align": "center",
			"opacity": "0.5",
			"hover-opacity": "1",
			"children": "Leadership Team"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"href": "/why-us/",
			"color": "#13212A",
			"text-decoration-line": "initial",
			"font": "normal 400 18px/160% --fontFamily-googleInter",
			"margin": "0px 0px 21px 0px",
			"hover-color": "--primary",
			"transition": "all 1s ease 0s",
			"opacity": "0.5",
			"hover-opacity": "1",
			"children": "Why Staffcop?"
		}
	},
	"link4": {
		"kind": "Link",
		"props": {
			"href": "/partners/",
			"color": "#13212A",
			"text-decoration-line": "initial",
			"font": "normal 400 18px/160% --fontFamily-googleInter",
			"margin": "0px 0px 21px 0px",
			"hover-color": "--primary",
			"transition": "all 1s ease 0s",
			"opacity": "0.5",
			"hover-opacity": "1",
			"children": "Our Partners"
		}
	},
	"link5": {
		"kind": "Link",
		"props": {
			"href": "/white-papers/",
			"color": "#13212A",
			"text-decoration-line": "initial",
			"font": "normal 400 18px/160% --fontFamily-googleInter",
			"margin": "0px 0px 21px 0px",
			"hover-color": "--primary",
			"transition": "all 1s ease 0s",
			"opacity": "0.5",
			"hover-opacity": "1",
			"children": "White Papers"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "20%",
			"display": "flex",
			"lg-width": "33.333%",
			"md-width": "50%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"lg-align-items": "center"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "normal 700 18px/160% --fontFamily-googleInter",
			"margin": "0px 0px 27px 0px",
			"display": "inline-block",
			"color": "#13212A",
			"children": "LEARN"
		}
	},
	"link6": {
		"kind": "Link",
		"props": {
			"href": "https://docs.staffcop.ru/en/",
			"color": "#13212A",
			"text-decoration-line": "initial",
			"font": "normal 400 18px/160% --fontFamily-googleInter",
			"margin": "0px 0px 21px 0px",
			"hover-color": "--primary",
			"transition": "all 1s ease 0s",
			"opacity": "0.5",
			"hover-opacity": "1",
			"children": "Documentation"
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "20%",
			"display": "flex",
			"lg-width": "33.333%",
			"md-width": "50%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride3": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"lg-align-items": "center"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"font": "normal 700 18px/160% --fontFamily-googleInter",
			"margin": "0px 0px 27px 0px",
			"display": "inline-block",
			"color": "#13212A",
			"children": "SUPPORT"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"align-items": "center"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaRegLifeRing,
			"color": "#13212A",
			"margin": "0px 10px 0px 0px",
			"opacity": "0.5"
		}
	},
	"link7": {
		"kind": "Link",
		"props": {
			"href": "/support/",
			"color": "#13212A",
			"text-decoration-line": "initial",
			"font": "normal 400 18px/160% --fontFamily-googleInter",
			"margin": "0px 0px 0px 0px",
			"hover-color": "--primary",
			"transition": "all 1s ease 0s",
			"opacity": "0.5",
			"hover-opacity": "1",
			"children": "Support Center"
		}
	},
	"hr": {
		"kind": "Hr",
		"props": {
			"width": "98%",
			"margin": "50px 0px 0px 0px",
			"border-color": "rgba(237, 237, 237, 1)"
		}
	}
};

const Foooter = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" max-width="1200px" align-items="center" />
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				{"        "}
				<Image {...override("image")} />
				<Text {...override("text")} />
				<SocialMedia {...override("socialMedia")}>
					<Override {...override("socialMediaOverride")} />
					<Override {...override("socialMediaOverride1")} />
					<Override {...override("socialMediaOverride2")} />
					<Override {...override("socialMediaOverride3")} />
				</SocialMedia>
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				{"        "}
				<Text {...override("text1")} />
				<Link {...override("link")} />
				<Link {...override("link1")} />
				<Link {...override("link2")} />
				<Link {...override("link3")} />
				<Link {...override("link4")} />
				<Link {...override("link5")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem2")}>
				<Override {...override("stackItemOverride2")} />
				{"        "}
				<Text {...override("text2")} />
				<Link {...override("link6")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem3")}>
				<Override {...override("stackItemOverride3")} />
				{"        "}
				<Text {...override("text3")} />
				<Box {...override("box")}>
					<Icon {...override("icon")} />
					<Link {...override("link7")} />
				</Box>
				{"    "}
			</StackItem>
			{"    "}
		</Stack>
		<Hr {...override("hr")} />
		{children}
	</Section>;
};

Object.assign(Foooter, { ...Section,
	defaultProps,
	overrides
});
export default Foooter;