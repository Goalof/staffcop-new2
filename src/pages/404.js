import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				404 - Not page
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
		<Components.Header>
			<Override slot="link2">
				Cases
			</Override>
		</Components.Header>
		<Section
			padding="180px 0 100px 0"
			background="linear-gradient(180deg,rgba(2, 2, 2, 0.22) 0%,rgba(02, 02, 02, 0.35) 46.88%,#020202 100%),#020202 url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/ebuchayasetka.svg?v=2020-10-21T00:06:31.897Z) center -693px/cover repeat"
			hd-background="#020202 url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/ebuchayasetka.svg?v=2020-10-21T00:06:31.897Z) center -693px/2060px repeat"
			width="100%"
			overflow-y="hidden"
			overflow-x="hidden"
			sm-padding="70px 0 70px 0"
		>
			<Override slot="SectionContent" max-width="1200px" align-items="center" position="relative" />
			<Stack width="100%">
				{"    "}
				<StackItem
					width="40%"
					display="flex"
					margin="0px 10% 0px 5%"
					sm-width="100%"
					sm-order="2"
				>
					<Override slot="StackItemContent" position="relative" sm-align-items="center" sm-justify-content="center" />
					<Image
						width="200%"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/migalkiauf.svg?v=2020-10-20T11:13:38.372Z"
						position="absolute"
						z-index="1"
						left="-250px"
						top="-70px"
						right="auto"
						bottom="auto"
						transform="rotateZ(45deg)"
						nout-left="-150px"
						nout-top="-47px"
						md-left="-100px"
						md-top="-20px"
						sm-top="0px"
					/>
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/robocop_PNG28%201.png?v=2020-11-04T16:31:28.931Z" md-width="100%" position="relative" z-index="2" />
					{"        "}{"    "}
				</StackItem>
				{"    "}
				<StackItem width="45%" display="flex" sm-width="100%" sm-order="1">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						sm-align-items="center"
					/>
					<Text
						font="--headline1"
						color="#ffffff"
						letter-spacing="-0.01em"
						margin="8px 0px 16px 0px"
						md-width="80%"
						md-font="normal 700 110px/169px Inter, sans-serif"
						sm-font="normal 700 70px/169px Inter, sans-serif"
						sm-text-align="center"
					>
						404{"\n\n"}
					</Text>
					<Text
						font="--headline3"
						color="#ffffff"
						letter-spacing="-0.01em"
						margin="8px 0px 0px 0px"
						md-width="80%"
						sm-font="normal 300 16px/140% --fontFamily-googleInter"
						sm-text-align="center"
					>
						That page can't be found{"\n\n"}
					</Text>
					<Text
						font="normal 300 18px/160% --fontFamily-googleInter"
						color="#ffffff"
						letter-spacing="-0.01em"
						margin="8px 0px 16px 0px"
						md-width="80%"
						sm-font="normal 300 16px/140% --fontFamily-googleInter"
						sm-text-align="center"
					>
						Let's get you back somewhere safe{"\n\n"}
					</Text>
					<Link
						href="#"
						position="relative"
						z-index="2"
						color="#ffffff"
						font="600 18px/22px --fontFamily-googleInter"
						text-decoration-line="initial"
						padding="16px 38px 16px 38px"
						box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						border-radius="40px"
						background="--color-primary"
						border-width="1px"
						border-style="solid"
						margin="20px 0px 115px 0px"
						hover-background="#409EEB"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						sm-font="600 16px/22px --fontFamily-googleInter"
						sm-padding="16px 10px 16px 10px"
						border-color="#2165FF"
						sm-text-align="center"
						sm-margin="20px 0px 0px 0px"
					>
						Take me home
					</Link>
					{"        "}{"    "}
				</StackItem>
			</Stack>
		</Section>
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