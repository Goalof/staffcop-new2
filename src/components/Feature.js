import React from "react";
import { useOverrides, Override, StackItem, Stack, Section } from "@quarkly/components";
import { Text, Span, Box, Link, Image } from "@quarkly/widgets";
const defaultProps = {
	"padding": "70px 0 124px 0",
	"lg-padding": "70px 0 70px 0"
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
			"overflow-y": "hidden"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "100%",
			"display": "flex",
			"padding": "16px 16px 16px 16px",
			"background": "#F7F7F7",
			"border-radius": "6px",
			"border-color": "rgba(246, 246, 246, 1)",
			"border-width": "1px",
			"border-style": "solid"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"justify-content": "center",
			"position": "relative",
			"z-index": "2",
			"flex-direction": "column",
			"padding": "80px 0px 190px 0px",
			"lg-padding": "80px 0px 50px 0px",
			"sm-padding": "50px 0px 50px 0px",
			"md-padding": "50px 0px 50px 0px",
			"lg-width": "100%"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--headline2",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"color": "#13212A",
			"text-align": "center",
			"width": "80%",
			"lg-width": "90%",
			"md-font": "normal 700 30px/40px Inter, sans-serif",
			"sm-font": "normal 700 20px/30px Inter, sans-serif",
			"lg-font": "normal 700 36px/40px Inter, sans-serif",
			"children": <>
				<Span color="--primary">
					Feature-rich
				</Span>
				, affordable with monthly and annual licensin goptions
			</>
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"margin": "42px 0px 67px 0px",
			"display": "flex",
			"children": <Link
				href="/request-demo/"
				padding="16px 38px 16px 38px"
				border-radius="40px"
				border-color="--color-primary"
				border-width="2px"
				border-style="solid"
				text-decoration-line="initial"
				color="#ffffff"
				font="--menu"
				hover-background="#409EEB"
				transition="-webkit-transition: all .3s;  transition: all .3s"
				margin="0px 0px 0px 0px"
				box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
				background="--color-primary"
				position="relative"
				z-index="4"
				md-padding="16px 24px 16px 24px"
				sm-padding="17px 20px 17px 20px"
				sm-font="500 15px/22px Inter, sans-serif"
			>
				Request demo
			</Link>
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "830px",
			"src": "https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/asdasdasdasd.svg?v=2020-10-16T19:04:50.914Z",
			"position": "absolute",
			"bottom": "-430px",
			"height": "705.625px",
			"left": "auto",
			"right": "auto",
			"top": "auto",
			"transition": " -webkit-transition: all .6s;  transition: all .6s",
			"lg-width": "586px",
			"lg-bottom": "-306px",
			"lg-height": "413.625px",
			"lg-left": "auto",
			"lg-right": "auto",
			"lg-top": "auto",
			"z-index": "2",
			"md-top": "auto",
			"md-width": "80%",
			"md-bottom": "-282px",
			"sm-bottom": "-240px"
		}
	}
};

const Feature = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" max-width="1170px" align-items="center" />
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				{"        "}
				<Text {...override("text")} />
				<Box {...override("box")} />
				<Image {...override("image")} />
				{"    "}
			</StackItem>
			{"    "}
		</Stack>
		{children}
	</Section>;
};

Object.assign(Feature, { ...Section,
	defaultProps,
	overrides
});
export default Feature;