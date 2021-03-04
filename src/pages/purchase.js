import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"purchase"} />
		<Helmet>
			<title>
				Purchase
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2020-11-28T11:58:11.223Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<meta name={"msapplication-TileColor"} content={"#1465FF"} />
		</Helmet>
		<Components.EmbedHTML />
		<Components.Header />
		<Section padding="100px 0 0px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)" md-padding="110px 0 30px 0" lg-padding="140px 0 70px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					width="50%"
					display="flex"
					sm-align-items="center"
					sm-width="100%"
					md-width="100%"
					md-order="1"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
						position="relative"
					/>
					<Image width="100%" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/korobka.png?v=2020-11-27T08:42:39.604Z" md-max-height="500px" />
					<Image
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/logoocenka2.png?v=2020-11-27T08:42:39.555Z"
						position="absolute"
						top="19%"
						left="0px"
						right="auto"
						bottom="auto"
						nout-height="100px"
						hd-max-height="133px"
						lg-max-height="80px"
						md-max-height="100px"
						md-left="20%"
						sm-left="0px"
						sm-max-height="80px"
					/>
					<Image
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/logoocenka3.png?v=2020-11-27T08:42:39.558Z"
						position="absolute"
						top="53%"
						left="0px"
						right="auto"
						bottom="auto"
						nout-height="100px"
						nout-top="52%"
						hd-height="133px"
						lg-max-height="80px"
						md-max-height="100px"
						md-top="61%"
						md-left="20%"
						sm-left="0px"
						sm-max-height="80px"
						sm-top="57%"
					/>
					<Image
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/logoocenka22.png?v=2020-11-27T08:42:39.562Z"
						position="absolute"
						top="36%"
						left="0px"
						right="auto"
						bottom="auto"
						nout-top="36%"
						nout-height="100px"
						hd-max-height="133px"
						lg-max-height="80px"
						md-max-height="100px"
						md-top="40%"
						md-left="20%"
						sm-left="0px"
						sm-max-height="80px"
						sm-top="38%"
					/>
					{"            "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					sm-align-items="center"
					sm-width="100%"
					md-width="100%"
					md-order="0"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
						padding="0px 30px 0px 40px"
						md-align-items="center"
						md-padding="0px 20px 0px 20px"
					/>
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 16px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
					>
						Purchase
					</Text>
					<Text
						font="normal 400 18px/160% --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="#555"
						md-font="normal 400 16px/140% --fontFamily-googleInter"
						sm-text-align="center"
						md-text-align="center"
					>
						StaffCop provides a unique, fully integrated solution that focuses on detection and response to insider threats through a combination of advanced behavioral analysis and context-rich logging of insider activity.
					</Text>
					<Text
						font="normal 400 18px/160% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#555"
						md-font="normal 400 16px/140% --fontFamily-googleInter"
						sm-text-align="center"
					>
						from{" "}
						<Span
							font="normal 700 60px/72px --fontFamily-googleInter"
							color="#000000"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							49$
						</Span>
					</Text>
					{"    "}
					<Link
						href="/request-demo"
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
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						margin="36px 0px 0px 0px"
						hover-background="#409EEB"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						sm-font="600 16px/22px --fontFamily-googleInter"
						sm-padding="16px 20px 16px 20px"
						md-padding="16px 26px 16px 26px"
					>
						Buy now
					</Link>
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="0px 0 40px 0" md-padding="30px 0 30px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#13212A"
						letter-spacing="-0.01em"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-font="normal 700 24px/30px Inter, sans-serif"
						lg-font="normal 700 36px/58px Inter, sans-serif"
						lg-margin="0px 0px 30px 0px"
					>
						Reviews
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" width="100%">
				<StackItem
					width="33.3333%"
					display="flex"
					lg-width="50%"
					md-width="100%"
					nout-width="50%"
				>
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						border-radius="8px"
						border-width="1px"
						border-style="solid"
						flex-direction="column"
						align-items="flex-start"
						justify-content="space-between"
						background=" linear-gradient(180deg, #FFFFFF 31.77%, #F7F7F7 47.4%, #FCFCFC 85.42%);"
						padding="38px 36px 42px 36px"
						lg-align-items="center"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
					/>
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/polkovnik.svg?v=2020-11-27T08:02:44.118Z" object-position="0% 0%" margin="0px 0px 25px 0px" lg-margin="0px 0px 47px 0px" />
					<Text
						font="--headline3"
						margin="0px 0px 18px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						lg-text-align="center"
					>
						Very robust software but can be unwieldy
					</Text>
					<Text
						font="normal 400 18px/160% --fontFamily-googleInter"
						margin="0px 0px 36px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						lg-text-align="center"
					>
						Overall: Overall it was a good experience as getting the system running was fairly straight forward if you don't mind referencing the Admin guide. Default options didn't like being changed, but once everything was setup...
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
					</Text>
					<Link
						href="/starter/"
						padding="13px 29px 13px 29px"
						border-color="--color-primary"
						border-radius="40px"
						border-width="2px"
						border-style="solid"
						text-decoration-line="initial"
						color="--primary"
						font="--menu"
						hover-background="--color-primary"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						hover-color="#fff"
					>
						More reviews
					</Link>
					{"    "}
				</StackItem>
				<StackItem
					width="33.3333%"
					display="flex"
					lg-width="50%"
					md-width="100%"
					nout-width="50%"
				>
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						border-radius="8px"
						border-width="1px"
						border-style="solid"
						flex-direction="column"
						align-items="flex-start"
						justify-content="space-between"
						background=" linear-gradient(180deg, #FFFFFF 31.77%, #F7F7F7 47.4%, #FCFCFC 85.42%);"
						padding="38px 36px 42px 36px"
						lg-align-items="center"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
					/>
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/polkovnik.svg?v=2020-11-27T08:02:44.118Z" object-position="0% 0%" margin="0px 0px 25px 0px" lg-margin="0px 0px 47px 0px" />
					<Text
						font="--headline3"
						margin="0px 0px 18px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						lg-text-align="center"
					>
						“Good Software, Very Versatile, Very Detailed”
					</Text>
					<Text
						font="normal 400 18px/160% --fontFamily-googleInter"
						margin="0px 0px 36px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						lg-text-align="center"
					>
						Overall: Very Good.
						<br />
						Pros: The Software is fairly price effective and very versatile. once setup - its convenient and gives good detailed reports
						<br />
						Cons: Its a little tough to set up. Requires more effort to put...
					</Text>
					<Link
						href="/starter/"
						padding="13px 29px 13px 29px"
						border-color="--color-primary"
						border-radius="40px"
						border-width="2px"
						border-style="solid"
						text-decoration-line="initial"
						color="--primary"
						font="--menu"
						hover-background="--color-primary"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						hover-color="#fff"
					>
						More reviews
					</Link>
					{"    "}
				</StackItem>
				<StackItem
					width="33.3333%"
					display="flex"
					lg-width="50%"
					md-width="100%"
					nout-width="50%"
				>
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						border-radius="8px"
						border-width="1px"
						border-style="solid"
						flex-direction="column"
						align-items="flex-start"
						justify-content="space-between"
						background=" linear-gradient(180deg, #FFFFFF 31.77%, #F7F7F7 47.4%, #FCFCFC 85.42%);"
						padding="38px 36px 42px 36px"
						lg-align-items="center"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
					/>
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/polkovnik.svg?v=2020-11-27T08:02:44.118Z" object-position="0% 0%" margin="0px 0px 25px 0px" lg-margin="0px 0px 47px 0px" />
					<Text
						font="--headline3"
						margin="0px 0px 18px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						lg-text-align="center"
					>
						StaffCop
					</Text>
					<Text
						font="normal 400 18px/160% --fontFamily-googleInter"
						margin="0px 0px 36px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						lg-text-align="center"
					>
						Overall: very good value software.
						<br />
						Pros: Great monitoring software. Good value. Highly recommended.
						<br />
						Cons: no osx support, unable to wipe remote computer
					</Text>
					<Link
						href="/starter/"
						padding="13px 29px 13px 29px"
						border-color="--color-primary"
						border-radius="40px"
						border-width="2px"
						border-style="solid"
						text-decoration-line="initial"
						color="--primary"
						font="--menu"
						hover-background="--color-primary"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						hover-color="#fff"
					>
						More reviews
					</Link>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Components.FormGa />
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