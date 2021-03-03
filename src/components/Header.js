import React from "react";
import { useOverrides, Override, StackItem, Menu, Stack, Section } from "@quarkly/components";
import { Image, Link } from "@quarkly/widgets";
import MyNav from "./MyNav";
import MyNav2 from "./MyNav2";
import NestedMenu from "./NestedMenu";
import MobileSide2 from "./MobileSide2";
const defaultProps = {
	"background": "#ffffff",
	"padding": "0px 0 0px 0",
	"sm-padding": "12px 0 12px 0",
	"lg-padding": "15px 0 15px 0",
	"border-width": "0px 0px 1px 0px",
	"border-style": "solid",
	"border-color": "#EDEDED",
	"position": "fixed",
	"z-index": "9"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {
			"gap": "0px",
			"width": "100%"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "20%",
			"display": "flex",
			"nout-width": "18%",
			"lg-width": "40%",
			"sm-width": "70%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"justify-content": "center",
			"sm-align-items": "center",
			"sm-justify-content": "flex-start"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/",
			"sm-margin": "4px 0px 0px 0px"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "100%",
			"src": "https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/staffcop_logo%20(2)%201.svg?v=2020-10-15T10:37:02.579Z",
			"padding": "2px 0px 0px 0px"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "60%",
			"display": "flex",
			"nout-width": "64%",
			"lg-display": "none",
			"sm-width": "32%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"justify-content": "center"
		}
	},
	"myNav": {
		"kind": "MyNav",
		"props": {}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "/features/",
			"text-decoration-line": "initial",
			"font": "--menu",
			"color": "#020202",
			"padding": "30px 15px 30px 15px",
			"hover-color": "--primary",
			"children": "Features"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"href": "/solutions/",
			"text-decoration-line": "initial",
			"font": "--menu",
			"color": "#020202",
			"padding": "30px 15px 30px 15px",
			"hover-color": "--primary",
			"children": "Cases"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"text-decoration-line": "initial",
			"font": "--menu",
			"color": "#020202",
			"padding": "30px 15px 30px 15px",
			"hover-color": "--primary",
			"href": "/purchase/",
			"children": "Purchase"
		}
	},
	"myNav2": {
		"kind": "MyNav2",
		"props": {}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "20%",
			"display": "flex",
			"nout-width": "18%",
			"lg-width": "50%",
			"sm-width": "50%",
			"sm-display": "none"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"justify-content": "flex-end",
			"align-items": "center"
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "100%",
			"nout-width": "18%",
			"lg-width": "10%",
			"sm-width": "30%",
			"lg-display": "flex",
			"display": "none"
		}
	},
	"stackItemOverride3": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"justify-content": "flex-end",
			"align-items": "center",
			"lg-justify-content": "center"
		}
	},
	"mobileSide2": {
		"kind": "MobileSide2",
		"props": {
			"flex": "1 1 auto",
			"lg-position": "relative",
			"lg-z-index": "5",
			"lg-display": "flex",
			"lg-justify-content": "center",
			"lg-align-items": "center",
			"sm-align-items": "center",
			"sm-justify-content": "flex-end"
		}
	},
	"mobileSide2Override": {
		"kind": "Override",
		"props": {
			"slot": "Content",
			"display": "flex",
			"align-items": "center",
			"lg-position": "fixed",
			"lg-top": 0,
			"lg-left": 0,
			"lg-z-index": "1",
			"lg-width": "100%",
			"lg-height": "100%",
			"lg-background": "white",
			"lg-flex-direction": "column",
			"lg-overflow-y": "scroll"
		}
	},
	"mobileSide2Override1": {
		"kind": "Override",
		"props": {
			"slot": "Button",
			"display": "none",
			"lg-display": "block",
			"lg-width": "28px",
			"lg-height": "28px",
			"lg-position": "relative",
			"lg-z-index": "6",
			"lg-box-shadow": "inset 0px 5px 17px rgba(255, 255, 255, 0.23)",
			"lg-background": "--color-primary",
			"lg-padding": "9px 10px 10px 10px",
			"lg-top": "4px",
			"lg-border-radius": "1000%"
		}
	},
	"mobileSide2Override2": {
		"kind": "Override",
		"props": {
			"slot": "Button Line",
			"lg-width": "100%",
			"lg-left": "auto",
			"lg-right": "auto",
			"lg-bottom": "auto",
			"lg-top": "22px",
			"lg-background": "rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/palki.svg?v=2020-12-01T12:31:09.963Z) center center/cover no-repeat scroll padding-box"
		}
	},
	"mobileSide2Override3": {
		"kind": "Override",
		"props": {
			"slot": "Button Line1",
			"lg-width": "44px",
			"lg-top": "0px",
			"lg-right": "0px"
		}
	},
	"mobileSide2Override4": {
		"kind": "Override",
		"props": {
			"slot": "Button Line2",
			"lg-top": "12px",
			"lg-right": "0px"
		}
	},
	"mobileSide2Override5": {
		"kind": "Override",
		"props": {
			"slot": "Button Line3",
			"lg-top": "24px",
			"lg-right": "0px",
			"lg-width": "100%"
		}
	},
	"mobileSide2Override6": {
		"kind": "Override",
		"props": {
			"slot": "Button Line1 :closed",
			"lg-width": "80%",
			"lg-top": "12px",
			"lg-bottom": "auto",
			"lg-left": "auto",
			"lg-right": "auto",
			"lg-height": "30.99px"
		}
	},
	"mobileSide2Override7": {
		"kind": "Override",
		"props": {
			"slot": "Button Line2 :closed",
			"lg-width": "50%",
			"lg-background": "#ffffff",
			"lg-left": "auto",
			"lg-right": "auto",
			"lg-bottom": "auto",
			"lg-top": "21px",
			"lg-display": "none"
		}
	},
	"mobileSide2Override8": {
		"kind": "Override",
		"props": {
			"slot": "Button Line3 :closed",
			"lg-width": "50%",
			"lg-background": "#ffffff",
			"lg-left": "auto",
			"lg-right": "auto",
			"lg-bottom": "auto",
			"lg-top": "30px",
			"lg-display": "none"
		}
	},
	"mobileSide2Override9": {
		"kind": "Override",
		"props": {
			"slot": "Button Line2 :open",
			"lg-opacity": "0",
			"lg-width": "32px",
			"lg-display": "none"
		}
	},
	"mobileSide2Override10": {
		"kind": "Override",
		"props": {
			"slot": "Button Line1 :open",
			"lg-width": "70%",
			"lg-left": "auto",
			"lg-right": "auto",
			"lg-bottom": "auto",
			"lg-top": "9px",
			"lg-background": "rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/krestiiki.svg?v=2020-12-01T12:34:09.363Z) center center/cover no-repeat scroll padding-box",
			"lg-height": "80%"
		}
	},
	"mobileSide2Override11": {
		"kind": "Override",
		"props": {
			"slot": "Button Line3 :open",
			"lg-width": "36px",
			"lg-transform": "translateY(-12px) rotate(135deg)",
			"lg-left": "auto",
			"lg-right": "auto",
			"lg-top": "35px",
			"lg-bottom": "auto",
			"lg-display": "none"
		}
	},
	"mobileSide2Override12": {
		"kind": "Override",
		"props": {
			"slot": "Content :closed",
			"lg-opacity": "0",
			"lg-transition": "transform --transitionDuration-normal step-end 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut",
			"lg-transform": "translateY(-100%)"
		}
	},
	"mobileSide2Override13": {
		"kind": "Override",
		"props": {
			"slot": "Content :open",
			"lg-position": "fixed",
			"lg-transform": "translateY(0%)",
			"lg-transition": "transform --transitionDuration-normal step-start 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut",
			"lg-opacity": "1"
		}
	},
	"mobileSide2Override14": {
		"kind": "Override",
		"props": {
			"slot": "Button :open",
			"lg-position": "fixed",
			"lg-top": "18px",
			"lg-width": "32.99px",
			"lg-display": "flex",
			"lg-align-items": "center",
			"lg-justify-content": "center",
			"lg-padding": "10px 6px 9px 6px",
			"lg-height": "25.986px"
		}
	},
	"mobileSide2Override15": {
		"kind": "Override",
		"props": {
			"slot": "Button :closed",
			"lg-align-items": "center",
			"lg-justify-content": "center",
			"md-top": "0px",
			"lg-top": "0px",
			"lg-display": "flex",
			"lg-padding": "9px 9px 9px 9px"
		}
	},
	"nestedMenu": {
		"kind": "NestedMenu",
		"props": {
			"lg-flex-direction": "column",
			"lg-align-items": "center",
			"lg-margin": "16px 0px 0px 0px",
			"collapse": true,
			"depth": "2",
			"lg-width": "100%",
			"lg-right": "auto",
			"lg-left": "auto"
		}
	},
	"nestedMenuOverride": {
		"kind": "Override",
		"props": {
			"slot": "Item-404",
			"lg-display": "none"
		}
	},
	"nestedMenuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "Link-index",
			"children": "Home"
		}
	},
	"nestedMenuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "Item",
			"lg-padding": "14px 0px 14px 0px",
			"lg-box-shadow": "none",
			"lg-width": "100%",
			"lg-text-align": "center",
			"lg-display": "flex",
			"lg-align-items": "center",
			"lg-justify-content": "center"
		}
	},
	"nestedMenuOverride3": {
		"kind": "Override",
		"props": {
			"slot": "Link",
			"lg-box-shadow": "none",
			"lg-font": "--menu",
			"lg-color": "--darkL1",
			"lg-text-decoration-line": "initial",
			"lg-padding": "5px 0px 5px 0px",
			"lg-text-align": "center",
			"sm-padding": "5px 5px 5px 5px",
			"white-space": "pre-wrap"
		}
	},
	"nestedMenuOverride4": {
		"kind": "Override",
		"props": {
			"slot": "Icon",
			"lg-box-shadow": "none",
			"lg-padding": "4px 0px 0px 4px"
		}
	},
	"nestedMenuOverride5": {
		"kind": "Override",
		"props": {
			"slot": "Sub",
			"lg-width": "100%",
			"lg-left": "auto",
			"lg-right": "auto",
			"lg-bottom": "auto",
			"lg-padding": "1px 0px 1px 0px"
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {
			"flex": "1 1 auto",
			"display": "none",
			"align-items": "center",
			"justify-content": "center",
			"lg-flex": "0 1 auto",
			"lg-flex-direction": "column",
			"lg-margin": "80px 0px 0px 0px",
			"lg-display": "none"
		}
	},
	"menuOverride": {
		"kind": "Override",
		"props": {
			"slot": "item-404",
			"display": "none"
		}
	},
	"menuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "item-index",
			"display": "none"
		}
	},
	"menuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"lg-font": "500 20px/24px --fontFamily-googleInter",
			"lg-text-decoration-line": "initial",
			"lg-color": "#020202",
			"lg-padding": "6px 6px 6px 6px"
		}
	},
	"menuOverride3": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"lg-color": "--primary"
		}
	},
	"menuOverride4": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"lg-padding": "14px 12px 14px 12px"
		}
	}
};

const PurchaseHeader = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" max-width="1170px" />
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				<Link {...override("link")}>
					<Image {...override("image")} />
					{"     "}
				</Link>
				{"       "}
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				{"        "}
				<MyNav {...override("myNav")} />
				<Link {...override("link1")} />
				<Link {...override("link2")} />
				<Link {...override("link3")} />
				<MyNav2 {...override("myNav2")} />
				{"    "}
			</StackItem>
			{"    "}
			<StackItem {...override("stackItem2")}>
				<Override {...override("stackItemOverride2")} />
				<Link
					href="/request-demo/"
					font="600 18px/22px --fontFamily-googleInter"
					color="--primary"
					text-decoration-line="initial"
					padding="13px 29px 13px 29px"
					border-width="2px"
					border-style="solid"
					border-color="--color-primary"
					border-radius="40px"
					transition="-webkit-transition: all .3s;  transition: all .3s"
					hover-background="--color-primary"
					hover-color="#ffffff"
					text-align="center"
					nout-padding="13px 15px 13px 15px"
					lg-margin="0px 8px 0px 0px"
					sm-display="none"
				>
					Request demo
				</Link>
			</StackItem>
			<StackItem {...override("stackItem3")}>
				<Override {...override("stackItemOverride3")} />
				<MobileSide2 {...override("mobileSide2")}>
					<Override {...override("mobileSide2Override")} />
					<Override {...override("mobileSide2Override1")} />
					<Override {...override("mobileSide2Override2")} />
					<Override {...override("mobileSide2Override3")} />
					<Override {...override("mobileSide2Override4")} />
					<Override {...override("mobileSide2Override5")} />
					<Override {...override("mobileSide2Override6")} />
					<Override {...override("mobileSide2Override7")} />
					<Override {...override("mobileSide2Override8")} />
					<Override {...override("mobileSide2Override9")} />
					<Override {...override("mobileSide2Override10")} />
					<Override {...override("mobileSide2Override11")} />
					<Override {...override("mobileSide2Override12")} />
					<Override {...override("mobileSide2Override13")} />
					<Override {...override("mobileSide2Override14")} />
					<Override {...override("mobileSide2Override15")} />
					<NestedMenu {...override("nestedMenu")}>
						<Override {...override("nestedMenuOverride")} />
						<Override {...override("nestedMenuOverride1")} />
						<Override {...override("nestedMenuOverride2")} />
						<Override {...override("nestedMenuOverride3")} />
						<Override {...override("nestedMenuOverride4")} />
						<Override {...override("nestedMenuOverride5")} />
					</NestedMenu>
					<Menu {...override("menu")}>
						<Override {...override("menuOverride")} />
						<Override {...override("menuOverride1")} />
						<Override {...override("menuOverride2")} />
						<Override {...override("menuOverride3")} />
						<Override {...override("menuOverride4")} />
					</Menu>
				</MobileSide2>
				{"            "}
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(PurchaseHeader, { ...Section,
	defaultProps,
	overrides
});
export default PurchaseHeader;