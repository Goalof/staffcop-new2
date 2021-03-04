import React from "react";
import theme from "theme";
import { Theme, Link, Text, Input, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"demo-request"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<meta name={"msapplication-TileColor"} content={"#1465FF"} />
		</Helmet>
		<Components.EmbedHTML />
		<Components.Header />
		<Section
			padding="140px 0 70px 0"
			lg-padding="120px 0 40px 0px"
			font="600 18px/22px --fontFamily-googleInter"
			sm-padding="90px 0 40px 0px"
			lg-margin="0px 0px 0px 0px"
		>
			<Override slot="SectionContent" max-width="1165px" align-items="center" />
			<Stack
				width="100%"
				margin="0px 0px 0px 0px"
				position="relative"
				align-items="center"
				justify-content="center"
				overflow-y="hidden"
				flex-direction="row"
				background="#F7F7F7"
				gap="0px"
				border-radius="6px"
			>
				{"    "}
				<StackItem
					width="50%"
					display="flex"
					padding="16px 16px 16px 16px"
					border-radius="6px"
					border-color="rgba(246, 246, 246, 1)"
					border-width="1px"
					border-style="solid"
					lg-width="100%"
				>
					<Override
						slot="StackItemContent"
						position="relative"
						z-index="2"
						flex-direction="column"
						padding="54px 50px 54px 60px"
						sm-padding="20px 0px 20px 0px"
						lg-width="100%"
						justify-content="center"
						sm-align-items="center"
					/>
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 31px 0px"
						display="inline-block"
						color="#13212A"
						lg-width="90%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-font="normal 700 20px/30px Inter, sans-serif"
						lg-font="normal 700 36px/40px Inter, sans-serif"
					>
						Start free trial
					</Text>
					<Formspree
						errorMessage="Something went wrong"
						completeText="Success"
						endpoint="https://formspree.io/f/xeqpgrlv"
						display="flex"
						flex-direction="column"
						sm-width="90%"
					>
						<Input
							name="Name"
							placeholder="Name"
							margin-right="4px"
							width="100%"
							padding="11px 18px 11px 18px"
							border-width="1px"
							border-color="#E4E4E4"
							border-radius="6px"
							margin="0px 4px 18px 0px"
							type="text"
							hover-border-color="--color-primary"
						/>
						<Input
							name="email"
							placeholder="Email"
							width="100%"
							padding="11px 18px 11px 18px"
							border-width="1px"
							border-color="#E4E4E4"
							border-radius="6px"
							margin="0px 4px 18px 0px"
							type="email"
							hover-border-color="--color-primary"
						/>
						<Input
							name="Company"
							placeholder="Company"
							width="100%"
							padding="11px 18px 11px 18px"
							border-width="1px"
							border-color="#E4E4E4"
							border-radius="6px"
							margin="0px 4px 18px 0px"
							type="text"
							hover-border-color="--color-primary"
						/>
						<Input
							name="Number of users"
							placeholder="Number of users"
							width="100%"
							padding="11px 18px 11px 18px"
							border-width="1px"
							border-color="#E4E4E4"
							border-radius="6px"
							margin="0px 4px 18px 0px"
							type="number"
							hover-border-color="--color-primary"
						/>
						<Input
							name="tel"
							placeholder="+1"
							width="100%"
							padding="11px 18px 11px 18px"
							border-width="1px"
							border-color="#E4E4E4"
							border-radius="6px"
							margin="0px 4px 36px 0px"
							type="tel"
							hover-border-color="--color-primary"
						/>
						<Components.ButtonGoal>
							<Override
								slot="Button"
								font="600 18px/22px --fontFamily-googleInter"
								box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
								padding="16px 38px 16px 38px"
								border-radius="40px"
							>
								Send
							</Override>
						</Components.ButtonGoal>
					</Formspree>
					{"    "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					padding="16px 16px 16px 16px"
					border-radius="6px"
					border-color="rgba(246, 246, 246, 1)"
					border-width="1px"
					border-style="solid"
					lg-width="100%"
					lg-display="none"
				>
					<Override
						slot="StackItemContent"
						align-items="flex-end"
						justify-content="flex-end"
						position="relative"
						z-index="2"
						flex-direction="column"
						padding="54px 0px 0px 0px"
						lg-padding="80px 0px 50px 0px"
						sm-padding="50px 0px 50px 0px"
						md-padding="50px 0px 50px 0px"
						lg-width="100%"
					/>
					{"        "}
					<Image
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/monitorform.svg?v=2020-10-22T22:52:50.969Z"
						bottom="-430px"
						left="auto"
						right="auto"
						top="auto"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						lg-bottom="-306px"
						lg-left="auto"
						lg-right="auto"
						lg-top="auto"
						z-index="2"
						md-top="auto"
						md-width="80%"
						md-bottom="-282px"
						sm-bottom="-240px"
						width="85%"
					/>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Components.Footer />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<script place={"endOfBody"} rawKey={"602addb1c8a45a16c77f897e"}>
				{"\t(function (i, s, o, g, r, a, m) {\n\t\ti['GoogleAnalyticsObject'] = r;\n\t\ti[r] = i[r] || function () {\n\t\t\t(i[r].q = i[r].q || []).push(arguments);\n\t\t}, i[r].l = 1 * new Date();\n\t\t\n\t\ta = s.createElement(o),\n\t\t\tm = s.getElementsByTagName(o)[0];\n\t\ta.async = 1;\n\t\ta.src = g;\n\t\tm.parentNode.insertBefore(a, m);\n\t})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');\n\tga('create', 'UA-6450776-3', 'auto');\n\tga('send', 'pageview');"}
			</script>
			<style place={"endOfHead"} rawKey={"602ae6625a167a1bb9dbc787"}>
				{"section#shapka {\n    -webkit-animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\n    animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\n}\n.wrap-calc {\n    border-radius: 6px;\n}\na.menu-trigger:hover {\n    color: #1465FF;\n}\n.munecontainer a:hover {\n    text-decoration: underline;\n}\n.munecontainer li { \npadding: 5px; \nfont: normal 600 14px/1.5 var(--qtheme-fontFamily-googleSourceSansPro);\ntext-align: center !important;\n}\n.munecontainer a {\ncolor: rgba(19, 33, 42, 1);\nfont: 400 18px/28px var(--qtheme-fontFamily-googleInter);\ntext-align: center !important;\n}\na.menu-trigger {\n    padding: 33px 15px 30px 15px;\n}\n.munecontainer ul {\n    background: #ffffff;\n    list-style: none;\n    padding-inline-start: 0px;\n    padding: 10px;\n    width: 220px;\n    text-align: center;\n    position: relative;\n    top: -16px;\n    z-index: 9;\n    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14);\n    border-radius: 6px;\n}\ntd:nth-child(1) {\n    font-weight: 600;\n}\nnav {\n    position: relative;\n}\nnav a {\n    display: flex;\n    text-decoration: none;\n        font: var(--qtheme-font-menu);\n    color: #020202;\n}\n.munecontainer {\n    position: absolute;\n}\nli:hover {\n    background: #FAFAFA;\n    color: rgb(23, 103, 255);\n}\n.munecontainer a:hover {\n    background: #FAFAFA;\n    color: rgb(23, 103, 255);\n    text-decoration: none;\n}  \n.menuopen[display=\"block\"] {\n  -webkit-transform: scaleY(1);\n  -moz-transform: scaleY(1);\n  transform: scaleY(1);\n  -webkit-transition-duration: 0.3s;\n  -moz-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transform-origin: 100% 0%;\n  transform-origin: 100% 0%;\n  opacity: 1;\n  pointer-events: all;\n}\n\n.menuopen[display=\"none\"] {\n    z-index: 1 !important;\n    -webkit-transition-duration: 0.3s;\n    -moz-transition-duration: 0.3s;\n    transition-duration: 0.3s;\n    opacity: 0;\n    -webkit-transform: scaleY(0);\n    transform: scaleY(0);\n    -webkit-transform-origin: 100% 0%;\n    transform-origin: 100% 0%;\n    display: block;\n    margin-top: -20px;\n}\n\n.munecontainer ul {\n  border-top-left-radius: 0px !important;\n  border-top-right-radius: 0px !important;\n}\n\na.menu-trigger:hover~.munecontainer {\n  pointer-events: all;\n}\n\n.munecontainer {\n  pointer-events: none;\n}"}
			</style>
			<script place={"endOfBody"} rawKey={"6036af4a8bcc719b09a29177"}>
				{"function ready() {\n    require(['jquery'], function($) {\n$('#button-11').attr({'onsubmit':'ga(\"send\", \"event\", \"preorder\")'})\n    });\n} \ndocument.addEventListener(\"DOMContentLoaded\", ready);"}
			</script>
			<link href={"http://kalyan-tay.ukit.me/js/lib/requirejs.min.js"} place={"endOfBody"} rawKey={"6036c4ad41cac81d90782665"} />
		</RawHtml>
	</Theme>;
});