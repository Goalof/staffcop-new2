import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Menu, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"purchase"} />
		<Helmet>
			<title>
				Pricing
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
		<Section
			id="shapka"
			background="#ffffff"
			padding="0px 0 0px 0"
			sm-padding="10px 0 10px 0"
			lg-padding="15px 0 15px 0"
			border-width="0px 0px 1px 0px"
			border-style="solid"
			border-color="#EDEDED"
			position="fixed"
			z-index="9"
		>
			<Override slot="SectionContent" max-width="1170px" />
			<Stack gap="0px" width="100%">
				{"    "}
				<StackItem
					width="20%"
					display="flex"
					nout-width="18%"
					lg-width="40%"
					sm-width="50%"
				>
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Link href="/">
						<Image width="100%" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/staffcop_logo%20(2)%201.svg?v=2020-10-15T10:37:02.579Z" padding="2px 0px 0px 0px" />
						{"     "}
					</Link>
					{"       "}
				</StackItem>
				{"    "}
				<StackItem width="60%" display="flex" nout-width="64%" lg-display="none">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Components.MyNav />
					<Link
						href="/features/"
						text-decoration-line="initial"
						font="--menu"
						color="#020202"
						padding="30px 15px 30px 15px"
						hover-color="#000000"
					>
						Features
					</Link>
					<Link
						href="/solutions/"
						text-decoration-line="initial"
						font="--menu"
						color="#020202"
						padding="30px 15px 30px 15px"
						hover-color="#000000"
					>
						Solutions
					</Link>
					<Link
						text-decoration-line="initial"
						font="--menu"
						color="#020202"
						padding="30px 15px 30px 15px"
						hover-color="#000000"
						href="/pricing/"
					>
						Pricing
					</Link>
					<Components.MyNav2 />
					{"    "}
				</StackItem>
				<StackItem
					width="20%"
					display="flex"
					nout-width="18%"
					lg-width="50%"
					sm-width="50%"
					sm-display="none"
				>
					<Override slot="StackItemContent" justify-content="flex-end" align-items="center" />
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
				<StackItem
					width="100%"
					nout-width="18%"
					lg-width="10%"
					sm-width="50%"
					lg-display="flex"
					display="none"
				>
					<Override slot="StackItemContent" justify-content="flex-end" align-items="center" />
					<Components.MobileSide2
						flex="1 1 auto"
						lg-position="relative"
						lg-z-index="5"
						lg-display="flex"
						lg-justify-content="flex-end"
						lg-align-items="center"
					>
						<Override
							slot="Content"
							display="flex"
							align-items="center"
							lg-position="fixed"
							lg-top={0}
							lg-left={0}
							lg-z-index="1"
							lg-width="100%"
							lg-height="100%"
							lg-background="white"
							lg-flex-direction="column"
						/>
						<Override
							slot="Button"
							display="none"
							lg-display="block"
							lg-width="44px"
							lg-height="28px"
							lg-position="relative"
							lg-z-index="6"
							lg-box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Override slot="Button Line" lg-background="black" lg-min-height="4px" lg-position="absolute" />
						<Override slot="Button Line1" lg-width="44px" lg-top="0px" lg-right="0px" />
						<Override slot="Button Line2" lg-top="12px" lg-right="0px" />
						<Override slot="Button Line3" lg-top="24px" lg-right="0px" />
						<Override slot="Button Line1 :closed" lg-width="44px" />
						<Override slot="Button Line2 :closed" lg-width="32px" />
						<Override slot="Button Line3 :closed" lg-width="20px" />
						<Override slot="Button Line2 :open" lg-opacity="0" lg-width="32px" />
						<Override slot="Button Line1 :open" lg-width="36px" lg-transform="translateY(12px) rotate(225deg)" />
						<Override slot="Button Line3 :open" lg-width="36px" lg-transform="translateY(-12px) rotate(135deg)" />
						<Override slot="Content :closed" lg-opacity="0" lg-transition="transform --transitionDuration-normal step-end 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut" lg-transform="translateY(-100%)" />
						<Override
							slot="Content :open"
							lg-position="fixed"
							lg-transform="translateY(0%)"
							lg-transition="transform --transitionDuration-normal step-start 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut"
							lg-opacity="1"
						/>
						<Override slot="Button :open" lg-position="fixed" />
						<Components.Menu2
							md-flex-direction="column"
							md-align-items="center"
							md-width="100%"
							lg-flex-direction="column"
							lg-align-items="center"
							lg-width="100%"
							lg-margin="10px 0px 0px 0px"
							collapse
							depth="10"
							display="none"
							lg-display="flex"
							lg-justify-content="center"
							lg-padding="6px 0px 40px 0px"
						>
							<Override
								slot="Item"
								md-padding="12px 12px 12px 12px"
								lg-padding="12px 0px 12px 0px"
								lg-font="500 20px/24px --fontFamily-googleInter"
								lg-width="100%"
								lg-text-align="center"
								lg-align-items="center"
								lg-margin="6px 0px 6px 0px"
							/>
							<Override slot="Item-404" md-display="none" lg-display="none" />
							<Override slot="Link-index">
								Home
							</Override>
							<Override
								slot="Link"
								lg-text-decoration-line="initial"
								lg-color="--darkL2"
								lg-text-align="right"
								lg-justify-content="center"
							/>
							<Override slot="Sub" z-index="5" lg-position="static" lg-width="100%" />
							<Override slot="Icon" lg-padding="4px 3px 0px 3px" />
							<Override slot="Item-request-demo" lg-display="none" />
							<Override slot="Item-leadership" lg-display="none" />
							<Override slot="Item-retail-and-ecommerce-cyber-security" lg-display="none" />
							<Override slot="Item-for-financial-sector" lg-display="none" />
							<Override slot="Item-energy-and-utilities-sector-cyber-security" lg-display="none" />
							<Override slot="Item-iso-27001-compliance" lg-display="none" />
							<Override slot="Item-for-legal" lg-display="none" />
							<Override slot="Item-government-and-public-sector-cyber-security" lg-display="none" />
							<Override slot="Item-pci-dss-compliance-and-certification" lg-display="none" />
							<Override slot="Item-for-hipaa" lg-display="none" />
							<Override slot="Item-gdpr-compliance" lg-display="none" />
							<Override slot="Item-compliance-management-auditing-and-monitoring" lg-display="none" />
							<Override slot="Item-third-party-vendor-management" lg-display="none" />
							<Override slot="Item-productivity-optimization" lg-display="none" />
							<Override slot="Item-privileged-user-monitoring" lg-display="none" />
							<Override slot="Item-remote-employee-monitoring" lg-display="none" />
							<Override slot="Item-insider-threat-detection-and-prevention" lg-display="none" />
							<Override slot="Item-live-employee-desktop" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-e-mail-monitoring" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-employee-internet-monitoring" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-keystroke-monitoring" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-file-activity-monitoring-software" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-printed-document-tracking" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-optical-character-recognition-ocr" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-smart-rules-and-alerts" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-productivity-monitoring" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-app-usageapplication-monitoring" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-network-user-activitymonitoring" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-instant-message-monitoring" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-social-media-monitoring" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-remote-desktop-control" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-active-vs-idle-time-analysis" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-employee-productivity-tracking" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-citrix-session-recording" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-employee-monitoring-software" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-nonproductive-activity-reporting" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-configurable-monitoring-profiles" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-template-based-scheduling" lg-font="500 16px/19px Inter, sans-serif" />
							<Override slot="Item-session-recording-and-metadata" lg-font="500 16px/19px Inter, sans-serif" />
						</Components.Menu2>
						<Menu
							flex="1 1 auto"
							display="none"
							align-items="center"
							justify-content="center"
							lg-flex="0 1 auto"
							lg-flex-direction="column"
							lg-margin="80px 0px 0px 0px"
							lg-display="none"
						>
							<Override slot="item-404" display="none" />
							<Override slot="item-index" display="none" />
							<Override
								slot="link"
								lg-font="500 20px/24px --fontFamily-googleInter"
								lg-text-decoration-line="initial"
								lg-color="#020202"
								lg-padding="6px 6px 6px 6px"
							/>
							<Override slot="link-active" lg-color="--primary" />
							<Override slot="item" lg-padding="14px 12px 14px 12px" />
						</Menu>
					</Components.MobileSide2>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="120px 0 40px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)" md-padding="100px 0 40px 0" sm-padding="80px 0 40px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					width="100%"
					display="flex"
					sm-align-items="center"
					sm-width="100%"
					lg-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="flex-start"
						align-items="flex-start"
						sm-align-items="center"
						lg-align-items="center"
					/>
					{"        "}
					<Text
						font="normal 700 48px/58px --fontFamily-googleInter"
						margin="0px 0px 36px 5px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 34px/30px Inter, sans-serif"
					>
						Purchase
					</Text>
					<Components.Calculator
						width="75%"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						nout-width="100%"
						border-radius="6px"
					/>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override
				slot="SectionContent"
				max-width="1170px"
				align-items="center"
				lg-overflow-x="scroll"
				lg-align-items="flex-start"
			/>
			<Box display="flex" width="100%" flex-direction="column" lg-width="1200px">
				<Box width="100%" display="flex">
					<StackItem width="20%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 10px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							Users to track
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 600 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 700 20px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							5-25
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 600 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 700 20px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							26-50
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 600 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 700 20px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							51-100
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 600 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 700 20px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							101-150
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 600 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 700 20px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							151-250
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 600 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 700 20px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							251-500
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 600 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 700 20px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							501-1000
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 600 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 700 20px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							1001+
						</Text>
						{"    "}
					</StackItem>
				</Box>
				<Hr width="100%" margin="24px 0px 20px 0px" border-color="rgba(237, 237, 237, 1)" />
				<Box width="100%" display="flex">
					<StackItem width="20%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 10px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							Perpetual{" "}
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 98
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 91
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 87
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 81
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 78
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 75
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 72
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 69
						</Text>
						{"    "}
					</StackItem>
				</Box>
				<Hr width="100%" margin="24px 0px 0px 0px" border-color="rgba(237, 237, 237, 1)" padding="0px 0px 0px 0px" />
				<Box width="100%" display="flex" background="#F9F9F9" padding="24px 0px 24px 0px">
					<StackItem width="20%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 10px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							12-months{" "}
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 70
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 65
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 62
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 57
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 56
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 53
							<br />
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 51
							<br />
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 49
						</Text>
						{"    "}
					</StackItem>
				</Box>
				<Hr width="100%" margin="0px 0px 20px 0px" border-color="rgba(237, 237, 237, 1)" />
				<Box width="100%" display="flex">
					<StackItem width="20%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 10px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							3-months{" "}
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 35
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 33
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 31
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 29
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 28
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 27
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 26
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 25
						</Text>
						{"    "}
					</StackItem>
				</Box>
				<Hr width="100%" margin="24px 0px 20px 0px" border-color="rgba(237, 237, 237, 1)" />
			</Box>
		</Section>
		<Section padding="0px 0 0px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -346px/3610px no-repeat">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Components.Form />
			<Components.Footer>
				<Override slot="text">
					Russia, Novosibirsk, Koptug Road 4, Sobolev Institute of Mathematics
				</Override>
			</Components.Footer>
		</Section>
		<Section
			background="#ffffff"
			padding="30px 0 30px 0"
			border-width="1px 0px 0px 0px"
			border-style="solid"
			border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
		>
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="53%" display="flex" lg-width="85%">
					{"        "}
					<Text
						font="normal 400 15px/24px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#999999"
						md-font="normal 400 13px/22px --fontFamily-googleInter"
						sm-font="normal 400 12px/17px --fontFamily-googleInter"
					>
						© Atom Security LLC, 2001–2020. All rights reserved. All trademarks are the property of their respective owners.{"\n\n\n\n\n        "}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="47%" display="flex" lg-width="15%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" md-justify-content="center" />
					{"        "}
					<Link
						id="gobot"
						href="#shapka"
						color="--primary"
						text-decoration-line="initial"
						padding="0px 0px 0px 0px"
						target="_blank"
						font="normal 600 25px/1.5 --fontFamily-sans"
						margin="0px 0px 0px 0px"
						display="flex"
						lg-font="normal 400 24px/1.5 --fontFamily-sans"
						sm-width="auto"
						sm-text-align="center"
						border-radius="40px"
						text-align="center"
						transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
						hover-box-shadow="0 10px 10px -6px rgba(0,0,0,.24)"
						hover-transform="translateY(-2px)"
						cursor="pointer"
						align-items="center"
						border-width="2px"
						border-style="solid"
						border-color="--color-primary"
						md-padding="0px 0px 0px 0px"
					>
						<Image width="18px" height="18px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Icon.svg?v=2020-10-21T00:34:26.772Z" padding="12px 13px 14px 13px" />
					</Link>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section padding="0px 0 0px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -346px/3610px no-repeat">
			<Override slot="SectionContent" max-width="none" width="100%" />
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