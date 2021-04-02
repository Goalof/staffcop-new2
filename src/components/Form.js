import React from "react";
import { useOverrides, Override, StackItem, Stack, Section } from "@quarkly/components";
import { Text, Image } from "@quarkly/widgets";
import FormBitrix from "./FormBitrix";
const defaultProps = {
	"padding": "70px 0 70px 0",
	"lg-padding": "120px 0 40px 0px",
	"font": "600 18px/22px --fontFamily-googleInter",
	"sm-padding": "90px 0 40px 0px",
	"lg-margin": "0px 0px 0px 0px"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {
			"width": "100%",
			"margin": "0px 0px 0px 0px",
			"position": "relative",
			"align-items": "center",
			"justify-content": "center",
			"overflow-y": "hidden",
			"flex-direction": "row",
			"background": "#F7F7F7",
			"gap": "0px",
			"border-radius": "6px"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex",
			"padding": "16px 16px 16px 16px",
			"border-radius": "6px",
			"border-color": "rgba(246, 246, 246, 1)",
			"border-width": "1px",
			"border-style": "solid",
			"lg-width": "100%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"position": "relative",
			"z-index": "2",
			"flex-direction": "column",
			"padding": "54px 50px 54px 60px",
			"sm-padding": "20px 0px 20px 0px",
			"lg-width": "100%",
			"justify-content": "center",
			"sm-align-items": "center"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--headline2",
			"margin": "0px 0px 31px 0px",
			"display": "inline-block",
			"color": "#13212A",
			"lg-width": "90%",
			"md-font": "normal 700 30px/40px Inter, sans-serif",
			"sm-font": "normal 700 20px/30px Inter, sans-serif",
			"lg-font": "normal 700 36px/40px Inter, sans-serif",
			"children": "Contact Us"
		}
	},
	"formBitrix": {
		"kind": "FormBitrix",
		"props": {
			"test": "none",
			"width": "100%",
			"sm-width": "80%"
		}
	},
	"formBitrixOverride": {
		"kind": "Override",
		"props": {
			"slot": "Input First Name",
			"name": " Name",
			"type": "text",
			"placeholder": " Name"
		}
	},
	"formBitrixOverride1": {
		"kind": "Override",
		"props": {
			"slot": "Input Last Name",
			"name": "Last name",
			"placeholder": "Last name",
			"type": "text",
			"display": "none"
		}
	},
	"formBitrixOverride2": {
		"kind": "Override",
		"props": {
			"slot": "Input Email Value",
			"required": true,
			"name": "E-mail",
			"placeholder": "E-mail *",
			"type": "email"
		}
	},
	"formBitrixOverride3": {
		"kind": "Override",
		"props": {
			"slot": "Input Email Type",
			"name": "Company",
			"placeholder": "Company",
			"type": "text"
		}
	},
	"formBitrixOverride4": {
		"kind": "Override",
		"props": {
			"slot": "Input Phone Value",
			"name": "+1",
			"placeholder": "+1",
			"type": "tel"
		}
	},
	"formBitrixOverride5": {
		"kind": "Override",
		"props": {
			"slot": "Input Phone Type",
			"name": "Number of users",
			"placeholder": "Number of users",
			"type": "number"
		}
	},
	"formBitrixOverride6": {
		"kind": "Override",
		"props": {
			"slot": "Input Title",
			"defaultValue": "Новый лид"
		}
	},
	"formBitrixOverride7": {
		"kind": "Override",
		"props": {
			"slot": "Title",
			"display": "none"
		}
	},
	"formBitrixOverride8": {
		"kind": "Override",
		"props": {
			"slot": "Input",
			"width": "100%",
			"padding": "10px 16px 10px 16px",
			"margin": "0px 0px 18px 0px",
			"border-width": "1px",
			"border-color": "#e4e4e4",
			"border-radius": "6px"
		}
	},
	"formBitrixOverride9": {
		"kind": "Override",
		"props": {
			"slot": "ButtonGoal",
			"sm-text-align": "center"
		}
	},
	"overrideOverride": {
		"kind": "Override",
		"props": {
			"slot": "Button",
			"font": "normal 600 18px/22px --fontFamily-googleInter",
			"box-shadow": "inset 0px 5px 17px rgba(255, 255, 255, 0.23)",
			"padding": "16px 38px 16px 38px",
			"border-radius": "40px",
			"margin": "18px 0px 0px 0px",
			"children": <>
				Send{"\n\n"}
			</>
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex",
			"padding": "16px 16px 16px 16px",
			"border-radius": "6px",
			"border-color": "rgba(246, 246, 246, 1)",
			"border-width": "1px",
			"border-style": "solid",
			"lg-width": "100%",
			"lg-display": "none"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "flex-end",
			"justify-content": "flex-end",
			"position": "relative",
			"z-index": "2",
			"flex-direction": "column",
			"padding": "54px 0px 0px 0px",
			"lg-padding": "80px 0px 50px 0px",
			"sm-padding": "50px 0px 50px 0px",
			"md-padding": "50px 0px 50px 0px",
			"lg-width": "100%"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/monitorform.svg?v=2020-10-22T22:52:50.969Z",
			"bottom": "-430px",
			"left": "auto",
			"right": "auto",
			"top": "auto",
			"transition": " -webkit-transition: all .6s;  transition: all .6s",
			"lg-bottom": "-306px",
			"lg-left": "auto",
			"lg-right": "auto",
			"lg-top": "auto",
			"z-index": "2",
			"md-top": "auto",
			"md-width": "80%",
			"md-bottom": "-282px",
			"sm-bottom": "-240px",
			"width": "85%"
		}
	}
};

const Frorrrrrrr = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" max-width="1165px" align-items="center" />
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				{"        "}
				<Text {...override("text")} />
				<FormBitrix {...override("formBitrix")}>
					<Override {...override("formBitrixOverride")} />
					<Override {...override("formBitrixOverride1")} />
					<Override {...override("formBitrixOverride2")} />
					<Override {...override("formBitrixOverride3")} />
					<Override {...override("formBitrixOverride4")} />
					<Override {...override("formBitrixOverride5")} />
					<Override {...override("formBitrixOverride6")} />
					<Override {...override("formBitrixOverride7")} />
					<Override {...override("formBitrixOverride8")} />
					<Override {...override("formBitrixOverride9")}>
						<Override {...override("overrideOverride")} />
					</Override>
				</FormBitrix>
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				{"        "}
				<Image {...override("image")} />
				{"    "}
			</StackItem>
			{"    "}
		</Stack>
		{children}
	</Section>;
};

Object.assign(Frorrrrrrr, { ...Section,
	defaultProps,
	overrides
});
export default Frorrrrrrr;