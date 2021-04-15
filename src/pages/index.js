import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box, Span, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Section, StackItem, Stack, SocialMedia } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				StaffCop Enterprise
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
		<Components.Header />
		<Components.EmbedHTML />
		<Section
			padding="180px 0 100px 0"
			background="linear-gradient(180deg,rgba(2, 2, 2, 0.22) 0%,rgba(02, 02, 02, 0.35) 46.88%,#020202 100%),#020202 url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/ebuchayasetka.svg?v=2020-10-21T00:06:31.897Z) center -693px/cover repeat"
			hd-background="#020202 url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/ebuchayasetka.svg?v=2020-10-21T00:06:31.897Z) center -693px/2060px repeat"
			width="100%"
			lg-padding="140px 0 70px 0"
			md-padding="120px 0 40px 0"
		>
			<Override slot="SectionContent" max-width="1200px" align-items="center" position="relative" />
			<Text font="--menu" color="#1767FF" margin="0px 0px 10px 0px" text-align="center">
				StaffCop Enterprise
			</Text>
			<Components.TextBeghtml
				margin="16px 0px 16px 0px"
				font="normal bold 66px/1.2 --fontFamily-googleInter"
				color="#ffffff !IMPORTANT"
				md-font="normal bold 40px/1.2 --fontFamily-googleInter"
				sm-font="normal bold 24px/1.2 --fontFamily-googleInter"
				position="relative"
				z-index="3"
			/>
			<Components.TextBegJs />
			<Text
				font="normal 300 18px/160% --fontFamily-googleInter"
				color="#ffffff"
				letter-spacing="-0.01em"
				margin="8px 0px 16px 0px"
				text-align="center"
				width="49%"
				md-width="80%"
				sm-font="normal 300 16px/140% --fontFamily-googleInter"
			>
				Activity Monitoring, User Behavior Analytics, Productivity Optimization & Insider Threat Detection in a Single Platform
			</Text>
			<Link
				href="/request-demo/"
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
				sm-padding="16px 20px 16px 20px"
				border-color="#2165FF"
				md-margin="20px 0px 55px 0px"
			>
				Free trial 15 days
			</Link>
			<Image
				loading="lazy"
				width="90%"
				src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/migalkiauf.svg?v=2020-10-20T11:13:38.372Z"
				position="absolute"
				z-index="1"
				left="auto"
				top="auto"
				right="auto"
				bottom="-15px"
			/>
			<Image
				loading="lazy"
				src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/newposteres.png?v=2020-12-14T13:27:25.853Z"
				md-width="80%"
				position="relative"
				z-index="2"
				sm-width="100%"
			/>
		</Section>
		<Section background="#020202">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%">
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#ffffff"
						letter-spacing="-2%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
					>
						Productivity tracking
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="1px 0px 0px 0px"
						display="inline-block"
						color="#ffffff"
						text-align="right"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
					>
						Activity Monitoring, User Behavior Analytics, Productivity Optimization & Insider Threat Detection in a Single Platform
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#020202" border-color="#161616">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="6px"
						padding="0px 0px 0px 0px"
						border-width="1px"
						border-style="solid"
						background="#0D0D0D"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						border-color="#161616"
						display="flex"
						flex-direction="column"
					>
						<Link href="/features/user-card/" padding="20px 36px 20px 36px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/icons1.svg?v=2020-11-30T14:42:32.054Z"
								object-position="0% 0%"
								margin="10px 0px 20px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="--headline3"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								User Activity Monitoring
							</Text>
							<Text
								font="--lead"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Monitor and control user activity to ensure compliance with internal security policies and regulatory requirements
								<br />
							</Text>
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="6px"
						padding="0px 0px 0px 0px"
						border-width="1px"
						border-style="solid"
						background="#0D0D0D"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						border-color="#161616"
						display="flex"
						flex-direction="column"
					>
						<Link href="/features/application-usage-monitoring" padding="20px 36px 20px 36px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/icoasd2.svg?v=2020-11-30T14:43:23.306Z"
								object-position="0% 0%"
								margin="10px 0px 20px -3px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="--headline3"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								User Behavior Analytics
							</Text>
							<Text
								font="--lead"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Identify behavior anomalies and uncover potential threats in real time. Get fully customizable alerts with full audit trail and video recording of all user actions
							</Text>
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="6px"
						padding="0px 0px 0px 0px"
						border-width="1px"
						border-style="solid"
						background="#0D0D0D"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						border-color="#161616"
						display="flex"
						flex-direction="column"
					>
						<Link href="/monitoring" padding="20px 36px 20px 36px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/icosdasd3.svg?v=2020-11-30T14:43:48.102Z"
								object-position="0% 0%"
								margin="10px 0px 20px -1px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="--headline3"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Employee Monitoring
							</Text>
							<Text
								font="--lead"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Monitor employee activity with customizable reports to identify team, department, individual level productivity, social media use, time spent on projects, apps, and more.
								<br />
								<br />
							</Text>
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="6px"
						padding="0px 0px 0px 0px"
						border-width="1px"
						border-style="solid"
						background="#0D0D0D"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						border-color="#161616"
						display="flex"
						flex-direction="column"
					>
						<Link href="/security" padding="20px 36px 20px 36px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/icoasdas4.svg?v=2020-11-30T14:44:23.174Z"
								object-position="0% 0%"
								margin="10px 0px 20px -1px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="--headline3"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Data Loss Prevention
							</Text>
							<Text
								font="--lead"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Identify behavior anomalies and uncover potential threats in real time. Get fully customizable alerts with full audit trail and video recording of all user actions
								<br />
								<br />
							</Text>
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="6px"
						padding="0px 0px 0px 0px"
						border-width="1px"
						border-style="solid"
						background="#0D0D0D"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						border-color="#161616"
						display="flex"
						flex-direction="column"
					>
						<Link href="/compliance-management-auditing-and-monitoring" padding="20px 36px 20px 36px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/icosna5.svg?v=2020-11-30T14:45:02.994Z"
								object-position="0% 0%"
								margin="10px 0px 20px -1px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="--headline3"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Compliance & Audit
							</Text>
							<Text
								font="--lead"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Ensure ongoing compliance for GDPR, HIPAA, PCI and much more by identifying and alerting user to non-compliant actions with real time alerts
								<br />
							</Text>
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="6px"
						padding="0px 0px 0px 0px"
						border-width="1px"
						border-style="solid"
						background="#0D0D0D"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						border-color="#161616"
						display="flex"
						flex-direction="column"
					>
						<Link href="/insider-threat-detection-and-prevention" padding="20px 36px 20px 36px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/icosadf6.svg?v=2020-11-30T14:45:13.084Z"
								object-position="0% 0%"
								margin="10px 0px 20px -1px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="--headline3"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Insider Threat Prevention
							</Text>
							<Text
								font="--lead"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Automate risk detection and block unwanted employee behavior. StaffCop uses smart rules & alerts to always keep your organization safe
							</Text>
						</Link>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#020202" padding="70px 0 70px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Text
				font="--headline2"
				margin="0px 0px 50px 0px"
				display="inline-block"
				color="#ffffff"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				md-margin="0px 0px 20px 0px"
				sm-font="normal 700 24px/30px Inter, sans-serif"
			>
				<Span
					color="--primary"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Advantages
				</Span>
				{" "}of our product
			</Text>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="center"
						padding="68px 25px 0px 36px"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/charles-deluvio-pjAH2Ax4uWk-unsplash.png?v=2020-12-14T13:27:25.854Z) 0% 0% /cover no-repeat scroll padding-box"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						sm-padding="38px 10px 30px 20px"
						border-width="1px"
						border-style="solid"
						border-color="#161616"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="48px"
							height="48px"
							transform="translateY(10px)"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="flex"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-15px)"
						/>
						<Override
							slot="Link"
							border-radius="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							padding="0px 0px 0px 0px"
							href="/privileged-user-monitoring/"
						/>
						<Override slot="Before Text">
							TheTheTheTheTheTheTheTheTheTheTheTheTheTheTheThe
						</Override>
						<Override
							slot="Before Text2"
							color="#ffffff"
							font="normal 500 24px/29px --fontFamily-googleInter"
							margin="16px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							width="65%"
						>
							Helps reduce the risks of data leakage and loss of reputation
						</Override>
						<Override slot="Before Text2 :default" transform="translateY(20px)">
							Helps reduce the risks of data leakage and loss of reputationHelps reduce the risks of data leakage and loss of reputation
						</Override>
						<Override slot="Before Text2 :hover" transform="translateY(-25px)" />
						<Override slot="image" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z" width="7px" height="12px" />
						<Override
							slot="Before image"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z"
							width="7px"
							height="12px"
							min-width="none"
							min-height="none"
						/>
						<Override slot="Before image :default" display="none" />
					</Components.Knopka>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka
						height="100%"
						display="flex"
						flex-direction="column"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/kaitlyn-baker-vZJdYl5JVXY-unsplash%201.png?v=2020-12-14T13:27:25.855Z) 0% 0% /cover no-repeat scroll padding-box"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						sm-padding="38px 10px 30px 20px"
						padding="68px 150px 0px 36px"
						justify-content="flex-end"
						border-width="1px"
						border-style="solid"
						border-color="#161616"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="48px"
							height="48px"
							transform="translateY(10px)"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="flex"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-15px)"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							display="flex"
							align-items="center"
							justify-content="center"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							href="/third-party-vendor-management/"
						/>
						<Override
							slot="Before Text2"
							color="#ffffff"
							font="normal 500 24px/29px --fontFamily-googleInter"
							margin="16px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							width="65%"
						>
							Gives transparency in the workflow
						</Override>
						<Override slot="Before Text2 :default" transform="translateY(20px)" />
						<Override slot="Before Text2 :hover" transform="translateY(-25px)" />
						<Override
							slot="Before image"
							height="12px"
							min-height="none"
							min-width="none"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z"
							width="7px"
						/>
						<Override slot="Before image :default" display="none" />
					</Components.Knopka>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="center"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/kaitlyn.png?v=2020-12-14T13:27:25.851Z) 0% 0% /cover no-repeat scroll padding-box"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						sm-padding="38px 10px 30px 20px"
						padding="68px 130px 0px 36px"
						border-width="1px"
						border-style="solid"
						border-color="#161616"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="48px"
							height="48px"
							transform="translateY(10px)"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="flex"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-15px)"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							display="flex"
							align-items="center"
							justify-content="center"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							href="/remote-employee-monitoring/"
						/>
						<Override
							slot="Before Text2"
							color="#ffffff"
							font="normal 500 24px/29px --fontFamily-googleInter"
							margin="16px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							width="65%"
						>
							Allows you to track employees working remotely from home
						</Override>
						<Override slot="Before Text2 :default" transform="translateY(20px)">
							Allows you to see your business processes in reality 1999Allows you to see your business processes in reality 1999
						</Override>
						<Override slot="Before Text2 :hover" transform="translateY(-25px)" />
						<Override
							slot="Before image"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z"
							width="7px"
							height="12px"
							min-width="none"
							min-height="none"
						/>
						<Override slot="Before image :default" display="none" />
					</Components.Knopka>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="center"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/kaitlyn-baker-vZJdYl.png?v=2020-12-14T13:27:25.851Z) 0% 0% /cover no-repeat scroll padding-box"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						sm-padding="38px 10px 30px 20px"
						padding="68px 150px 3px 36px"
						border-width="1px"
						border-style="solid"
						border-color="#161616"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="48px"
							height="48px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="flex"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-15px)"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							display="flex"
							align-items="center"
							justify-content="center"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							href="/features/employee-productivity-tracking"
						/>
						<Override
							slot="Before Text2"
							color="#ffffff"
							font="normal 500 24px/29px --fontFamily-googleInter"
							margin="16px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							width="65%"
						>
							Allows you to see your business processes in reality
						</Override>
						<Override slot="Before Text2 :default" transform="translateY(20px)">
							Test
						</Override>
						<Override slot="Before Text2 :hover" transform="translateY(-25px)" />
						<Override
							slot="Before image"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z"
							width="7px"
							height="12px"
							min-width="none"
							min-height="none"
						/>
						<Override slot="Before image :default" display="none" />
					</Components.Knopka>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="70px 0 70px 0" background="#020202" md-padding="30px 0 30px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				font="--headline2"
				margin="0px 0px 50px 0px"
				display="inline-block"
				color="#ffffff"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
			>
				The Right Employee{" "}
				<br />
				Monitoring and DLP Solution{" "}
				<br />
				for{" "}
				<Span
					color="--primary"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Every Need
				</Span>
			</Text>
			<Stack margin="0px 0px 0px 0px" width="100%">
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						border-width="1px"
						border-style="solid"
						flex-direction="column"
						align-items="flex-start"
						justify-content="space-between"
						background="#0D0D0D"
						padding="20px 36px 42px 36px"
						lg-align-items="center"
						border-color="#161616"
					/>
					{"        "}
					<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/vtorya2.svg?v=2020-11-16T21:37:03.195Z" object-position="0% 0%" margin="0px 0px 10px -10px" />
					<Box lg-display="flex" lg-flex-direction="column" lg-align-items="center">
						<Text
							font="--headline3"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="#ffffff"
							lg-text-align="center"
						>
							Information Security
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 36px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
						>
							Receive the required data “on the fly”. Search
by keywords and regular expressions. Record sound from microphones to hear what was happening at the moment of interest.
						</Text>
					</Box>
					<Link
						href="/security/"
						padding="13px 29px 13px 29px"
						border-color="--color-primary"
						border-radius="40px"
						border-width="2px"
						border-style="solid"
						text-decoration-line="initial"
						color="#ffffff"
						font="--menu"
						hover-background="--color-primary"
						transition="-webkit-transition: all .3s;  transition: all .3s"
					>
						Learn more
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="20px 36px 42px 36px"
						border-radius="8px"
						border-width="1px"
						border-style="solid"
						flex-direction="column"
						align-items="flex-start"
						justify-content="space-between"
						background="#0D0D0D"
						lg-align-items="center"
						border-color="#161616"
					/>
					{"        "}
					<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/pervaya1.svg?v=2020-11-16T21:36:47.681Z" object-position="0% 0%" margin="0px 0px 10px -10px" />
					<Text font="--headline3" margin="0px 0px 18px 0px" display="inline-block" color="#ffffff">
						Remote Administration
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 36px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-text-align="center"
					>
						View remote desktop without being notices. Take control over
a workstation. 
Full picture of software and hardware usage. Intensity of usage
and registry of states.
					</Text>
					<Link
						href="/administration/"
						padding="13px 29px 13px 29px"
						border-radius="40px"
						border-color="--color-primary"
						border-width="2px"
						border-style="solid"
						text-decoration-line="initial"
						color="#ffffff"
						font="--menu"
						hover-background="--color-primary"
						transition="-webkit-transition: all .3s;  transition: all .3s"
					>
						Learn more
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						padding="20px 36px 42px 36px"
						border-radius="8px"
						border-width="1px"
						border-style="solid"
						flex-direction="column"
						align-items="flex-start"
						justify-content="space-between"
						background="#1465FF"
						position="relative"
						lg-align-items="center"
					/>
					{"        "}
					<Text
						border-radius="8px"
						border-width="1px"
						border-style="solid"
						padding="8px 13px 8px 13px"
						margin="0px 0px 0px 0px"
						font="600 14px/14px --fontFamily-googleInter"
						color="#ffffff"
						background="#4AC62B"
						position="absolute"
						right="18px"
						left="auto"
						bottom="auto"
						top="18px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
					>
						Recommend
					</Text>
					<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/treriya3.svg?v=2020-11-16T21:37:12.931Z" object-position="0% 0%" margin="0px 0px 10px -10px" />
					<Text font="--headline3" margin="0px 0px 18px 0px" display="inline-block" color="#ffffff">
						Employee Monitoring
					</Text>
					<Text font="--lead" margin="0px 0px 36px 0px" display="inline-block" color="rgba(255, 255, 255, 0.6)">
						Categorize applications and web-sites into productive
and unproductive. Set up different configurations for particular
users, groups and departments. Compare results.
					</Text>
					<Link
						href="/monitoring/"
						padding="13px 29px 13px 29px"
						border-radius="40px"
						border-color="#ffffff"
						border-width="2px"
						border-style="solid"
						text-decoration-line="initial"
						color="--primary"
						font="--menu"
						hover-background="#0D0D0D"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						background="#ffffff"
						hover-border-color="#0D0D0D"
						hover-color="#ffffff"
					>
						Learn more
					</Link>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section padding="30px 0 70px 0" background="#020202" lg-padding="30px 0 30px 0" md-padding="30px 0 10px 0">
			<Override
				slot="SectionContent"
				max-width="1170px"
				align-items="center"
				padding="76px 0px 0px 0px"
				background="#0D0D0D"
				border-radius="6px"
				border-width="1px"
				border-style="solid"
				border-color="#161616"
			/>
			<Text
				font="--headline2"
				margin="0px 0px 50px 0px"
				display="inline-block"
				color="#ffffff"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				width="50%"
			>
				A solution for your
				<br />
				<Span
					color="--primary"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					every task
				</Span>
			</Text>
			<Stack
				margin="0px 0px 0px 0px"
				width="100%"
				gap="0px"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(255, 255, 255, 0.05)"
			>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						md-align-items="center"
					/>
					{"        "}
					<Image loading="lazy" width="90%" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/022222202%201.png?v=2020-10-15T22:52:40.753Z" md-width="80%" />
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 50px 0px 50px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
					/>
					{"        "}
					<Text
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="#ffffff"
						margin="-50px 0px 24px 0px"
						lg-font="normal 700 30px/43px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
					>
						Information Security
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-font="normal 400 15px/160% Inter, sans-serif"
					>
						StaffCop provides a unique, fully integrated solution that focuses on detection and response to insider threats through a combination of advanced behavioral analysis and context-rich logging of insider activity.
						<br />
					</Text>
					<Link
						href="/security/"
						font="--menu"
						color="--primary"
						text-decoration-line="initial"
						lg-margin="0px 0px 20px 0px"
						sm-margin="0px 0px 40px 0px"
						md-margin="0px 0px 30px 0px"
						hover-color="#409EEB"
						transition="-webkit-transition: all .3s;  transition: all .3s"
					>
						More details ❯
					</Link>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				margin="70px 0px 0px 0px"
				width="100%"
				gap="0px"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				border-color="rgba(255, 255, 255, 0.05)"
			>
				<StackItem width="50%" display="flex" md-width="100%" md-order="1">
					<Override
						slot="StackItemContent"
						padding="0px 50px 0px 60px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-end"
						justify-content="center"
						lg-padding="0 30px 0 50px"
						sm-margin="20px 0px 0px 0px"
					/>
					{"        "}
					<Text
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="#ffffff"
						margin="-50px 0px 24px 0px"
						lg-font="normal 700 30px/43px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
					>
						Employee Monitoring
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						text-align="right"
						lg-font="normal 400 15px/160% Inter, sans-serif"
					>
						StaffCop Enterprise logs the beginning and the end of each employee’s workday, including lunch and coffee breaks, etc. It enables executives and employees, themselves, to improve discipline at the workplace and reduce idle periods.
						<br />
					</Text>
					<Link
						href="/monitoring/"
						font="--menu"
						color="--primary"
						text-decoration-line="initial"
						lg-margin="0px 0px 20px 0px"
						sm-margin="0px 0px 40px 0px"
						md-margin="0px 0px 30px 0px"
						hover-color="#409EEB"
						transition="-webkit-transition: all .3s;  transition: all .3s"
					>
						More details ❯
					</Link>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						md-align-items="center"
					/>
					{"        "}
					<Image
						loading="lazy"
						width="90%"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/3213123123.png?v=2020-10-15T23:20:36.211Z"
						md-width="80%"
						margin="0px 0px 0px 0px"
					/>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				margin="70px 0px 0px 0px"
				width="100%"
				gap="0px"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				border-color="rgba(255, 255, 255, 0.05)"
			>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						md-align-items="center"
					/>
					{"        "}
					<Image loading="lazy" width="90%" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/45654645.png?v=2020-10-15T23:21:36.301Z" md-width="80%" />
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 50px 0px 50px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						lg-padding="0 30px 0 50px"
						sm-margin="20px 0px 0px 0px"
					/>
					{"        "}
					<Text
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="#ffffff"
						margin="-50px 0px 24px 0px"
						lg-font="normal 700 30px/43px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
					>
						Remote Administration
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-font="normal 400 15px/160% Inter, sans-serif"
					>
						Monitor processes and applications, system events,
and remote desktop connection makes StaffCop a must-have tool for an IT specialist. Monitor and analyze user actions on workstations with X-Windows window nanager as well as in terminal mode.
					</Text>
					<Link
						href="/administration/"
						font="--menu"
						color="--primary"
						text-decoration-line="initial"
						lg-margin="0px 0px 20px 0px"
						sm-margin="0px 0px 40px 0px"
						md-margin="0px 0px 30px 0px"
						hover-color="#409EEB"
						transition="-webkit-transition: all .3s;  transition: all .3s"
					>
						More details ❯
					</Link>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				margin="90px 0px 60px 0px"
				width="100%"
				gap="0px"
				border-width="0px"
				border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
			>
				<StackItem width="49%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 60px 0px 60px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						lg-align-items="center"
						sm-padding="0px 10px 0px 10px"
					/>
					{"        "}
					<Text
						font="normal 700 36px/45.57px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#ffffff"
						letter-spacing="-2%"
						lg-margin="0px 0px 20px 0px"
						lg-text-align="center"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-font="normal 700 24px/30px Inter, sans-serif"
						sm-width="100%"
					>
						92% of companies detect serious violations when testing StaffCop
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="51%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 0px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
						lg-align-items="center"
					/>
					<Stack
						width="90%"
						margin="0px 0px 0px 0px"
						gap="12px"
						sm-align-items="center"
						sm-justify-content="center"
					>
						{"    "}
						<StackItem width="33.3333%" display="flex" sm-width="50%">
							<Override
								slot="StackItemContent"
								border-radius="8px"
								border-width="0px"
								border-style="solid"
								flex-direction="column"
								align-items="center"
								justify-content="center"
								padding="0px 0px 0px 0px"
							/>
							{"        "}
							<Link
								href="https://www.capterra.com/reviews/183561/StaffCop?utm_source=vendor&utm_medium=badge&utm_campaign=capterra_reviews_badge"
								target="_blank"
								text-decoration-line="initial"
								hover-transform="translateY(-10px)"
								transition=" all .3s;  transition: all .3s"
							>
								<Image
									loading="lazy"
									src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/pershildik.svg?v=2020-10-21T00:30:19.423Z"
									object-position="0% 0%"
									margin="25px 0px 25px 0px"
									width="100%"
									sm-margin="0px 0px 0px 0px"
								/>
							</Link>
							{"    "}
						</StackItem>
						<StackItem width="33.3333%" display="flex" sm-width="50%">
							<Override
								slot="StackItemContent"
								border-radius="8px"
								border-width="0px"
								border-style="solid"
								flex-direction="column"
								align-items="center"
								justify-content="center"
								padding="0px 0px 0px 0px"
							/>
							{"        "}
							<Link
								href="https://sourceforge.net/software/product/StaffCop/?pk_campaign=badge&pk_source=vendor"
								target="_blank"
								text-decoration-line="initial"
								hover-transform="translateY(-10px)"
								transition=" all .3s;  transition: all .3s"
							>
								<Image
									loading="lazy"
									src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/dvashildik.svg?v=2020-10-21T00:31:29.773Z"
									object-position="0% 0%"
									margin="25px 0px 25px 0px"
									width="100%"
									sm-margin="0px 0px 0px 0px"
								/>
							</Link>
							{"    "}
						</StackItem>
						<StackItem width="33.3333%" display="flex" sm-width="50%">
							<Override
								slot="StackItemContent"
								border-radius="8px"
								border-width="0px"
								border-style="solid"
								flex-direction="column"
								align-items="center"
								justify-content="center"
								padding="0px 0px 0px 0px"
							/>
							{"        "}
							<Link
								href="https://www.serchen.com/category/employee-monitoring/"
								target="_blank"
								text-decoration-line="initial"
								hover-transform="translateY(-10px)"
								transition=" all .3s;  transition: all .3s"
							>
								<Image
									loading="lazy"
									src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/treeshildik.svg?v=2020-10-21T00:31:37.419Z"
									object-position="0% 0%"
									margin="25px 0px 25px 0px"
									width="100%"
									sm-margin="0px 0px 0px 0px"
								/>
							</Link>
							{"    "}
						</StackItem>
						{"    "}
					</Stack>
					{"            "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section
			background="#020202"
			padding="24px 0 70px 0"
			md-padding="24px 0 40px 0"
			border-style="solid"
			border-color="rgba(255, 255, 255, 0.05)"
			border-width="0px 0px 1px 0px"
		>
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				font="--headline2"
				margin="0px 0px 50px 0px"
				display="inline-block"
				color="#ffffff"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				md-margin="0px 0px 20px 0px"
				sm-font="normal 700 24px/30px Inter, sans-serif"
			>
				<Span
					color="--primary"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Advantages
				</Span>
				{" "}of our product
			</Text>
			<Stack margin="0px 0px 40px 0px" width="100%">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="flex-end"
						padding="68px 150px 0px 36px"
						background="linear-gradient(180deg,rgba(0, 0, 0, 0) 83.3%,rgba(0, 0, 0, 0.6) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fghgfhfg.png?v=2020-12-14T13:27:25.854Z) 0% 0% /cover no-repeat scroll padding-box"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						min-height="242px"
						border-width="1px"
						border-color="#161616"
						border-style="solid"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="48px"
							height="48px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="flex"
							height="48px"
							justify-content="center"
							background="#1465FF"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							text-align="center"
							transform="translateY(-30px)"
						/>
						<Override
							slot="Link"
							border-radius="50px"
							display="flex"
							align-items="center"
							justify-content="center"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							href="/for-hipaa/"
						/>
						<Override slot="Before Text2" font="normal 500 24px/29px --fontFamily-googleInter" margin="0px 0px 0px 0px" transition="-webkit-transition: all .5s;  transition: all .5s">
							For healthcare
						</Override>
						<Override slot="Before Text2 :default">
							For healthcare
						</Override>
						<Override slot="Before Text2 :hover" transform="translateY(-50px)" />
						<Override
							slot="Before image"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z"
							width="7px"
							height="12px"
							min-width="none"
							min-height="none"
						/>
						<Override slot="Before image :default" display="none" />
					</Components.Knopka>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Stack flex-direction="column">
						{"        "}
						<StackItem width="100%" display="flex" md-width="100%">
							<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
							{"        "}
							<Components.Knopka
								height="100%"
								display="flex"
								flex-direction="column"
								justify-content="flex-end"
								padding="68px 150px 0px 36px"
								background="linear-gradient(180deg,rgba(0, 0, 0, 0) 83.3%,rgba(0, 0, 0, 0.6) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/tyreterter-min.png?v=2020-12-14T13:57:23.882Z) 0% 0% /cover no-repeat scroll padding-box"
								transition="-webkit-transition: all .3s;  transition: all .3s"
								border-radius="6px"
								lg-padding="68px 36px 30px 36px"
								min-height="242px"
								border-width="1px"
								border-color="#161616"
								border-style="solid"
							>
								<Override
									slot="Link :default"
									text-decoration-line="initial"
									color="rgba(0, 0, 238, 0)"
									width="48px"
									height="48px"
								/>
								<Override
									slot="Link :hover"
									width="48px"
									align-items="center"
									display="flex"
									height="48px"
									justify-content="center"
									background="#1465FF"
									box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
									text-align="center"
									transform="translateY(-30px)"
								/>
								<Override
									slot="Link"
									border-radius="50px"
									display="flex"
									align-items="center"
									justify-content="center"
									transition="-webkit-transition: all .3s;  transition: all .3s"
									font="600 18px --fontFamily-googleInter"
									color="#ffffff"
									text-decoration-line="initial"
									href="/government-and-public-sector-cyber-security/"
								/>
								<Override slot="Before Text2" font="normal 500 24px/29px --fontFamily-googleInter" margin="0px 0px 0px 0px" transition="-webkit-transition: all .5s;  transition: all .5s">
									For government
								</Override>
								<Override slot="Before Text2 :default">
									For government
								</Override>
								<Override slot="Before Text2 :hover" transform="translateY(-50px)" />
								<Override
									slot="Before image"
									src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z"
									width="7px"
									height="12px"
									min-width="none"
									min-height="none"
								/>
								<Override slot="Before image :default" display="none" />
							</Components.Knopka>
							{"    "}
						</StackItem>
						<StackItem width="100%" display="flex" md-width="100%">
							<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
							{"        "}
							<Components.Knopka
								height="100%"
								display="flex"
								flex-direction="column"
								justify-content="flex-end"
								padding="68px 150px 0px 36px"
								background="linear-gradient(180deg,rgba(0, 0, 0, 0) 83.3%,rgba(0, 0, 0, 0.6) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/cxvxcvcxv-min.png?v=2020-12-14T13:57:11.309Z) 0% 0% /cover no-repeat scroll padding-box"
								transition="-webkit-transition: all .3s;  transition: all .3s"
								border-radius="6px"
								lg-padding="68px 36px 30px 36px"
								min-height="242px"
								border-width="1px"
								border-color="#161616"
								border-style="solid"
							>
								<Override
									slot="Link :default"
									text-decoration-line="initial"
									color="rgba(0, 0, 238, 0)"
									width="48px"
									height="48px"
								/>
								<Override
									slot="Link :hover"
									width="48px"
									align-items="center"
									display="flex"
									height="48px"
									justify-content="center"
									background="#1465FF"
									box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
									text-align="center"
									transform="translateY(-30px)"
								/>
								<Override
									slot="Link"
									border-radius="50px"
									display="flex"
									align-items="center"
									justify-content="center"
									transition="-webkit-transition: all .3s;  transition: all .3s"
									font="600 18px --fontFamily-googleInter"
									color="#ffffff"
									text-decoration-line="initial"
									href="/for-financial-sector/"
								/>
								<Override slot="Before Text2" font="normal 500 24px/29px --fontFamily-googleInter" margin="0px 0px 0px 0px" transition="-webkit-transition: all .5s;  transition: all .5s">
									For financial services
								</Override>
								<Override slot="Before Text2 :default">
									For financial services
								</Override>
								<Override slot="Before Text2 :hover" transform="translateY(-50px)" />
								<Override
									slot="Before image"
									src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z"
									width="7px"
									height="12px"
									min-width="none"
									min-height="none"
								/>
								<Override slot="Before image :default" display="none" />
							</Components.Knopka>
							{"    "}
						</StackItem>
					</Stack>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Link
				href="/cases/"
				padding="13px 29px 13px 29px"
				border-radius="40px"
				border-color="--color-primary"
				border-width="2px"
				border-style="solid"
				text-decoration-line="initial"
				color="#ffffff"
				font="--menu"
				hover-background="--color-primary"
				transition="-webkit-transition: all .3s;  transition: all .3s"
			>
				More use cases
			</Link>
		</Section>
		<Section padding="0px 0 0px 0" background="#020202">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Section padding="70px 0 40px 0" lg-padding="70px 0 50px 0">
				<Override slot="SectionContent" max-width="1200px" align-items="center" />
				<Text
					font="--headline2"
					margin="0px 0px 50px 0px"
					display="inline-block"
					color="#ffffff"
					letter-spacing="-2%"
					text-align="center"
					md-font="normal 700 30px/40px Inter, sans-serif"
					sm-font="normal 700 24px/30px Inter, sans-serif"
				>
					How can I get{" "}
					<Span color="--primary">
						started
					</Span>
					?
				</Text>
				<Stack width="100%" margin="0px 0px 0px 0px" position="relative" justify-content="center">
					{"    "}
					<Hr
						width="70%"
						opacity="0.08"
						position="absolute"
						bottom="auto"
						left="auto"
						right="auto"
						top="82px"
						z-index="1"
						border-width="2px 0 0 0"
						lg-display="none"
						nout-display="none"
					/>
					<StackItem width="25%" display="flex" lg-width="50%" sm-width="100%">
						<Override
							slot="StackItemContent"
							align-items="center"
							justify-content="flex-start"
							flex-direction="column"
							padding="10px 10px 10px 10px"
						/>
						{"        "}
						<Box
							width="120px"
							height="120px"
							display="flex"
							align-items="center"
							justify-content="center"
							position="relative"
							z-index="2"
							background="#020202"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Laptop%201.svg?v=2020-11-16T15:16:18.655Z" object-fit="contain" margin="20px 0px 0px 0px" />
						</Box>
						<Text
							font="--headline3"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 1)"
							text-align="center"
						>
							Install StaffCop{" "}
						</Text>
						<Text
							font="--lead"
							margin="12px 0px 24px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							text-align="center"
						>
							Install StaffCop on-premises or on private cloud (AWS, Google Cloud)
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="25%" display="flex" lg-width="50%" sm-width="100%">
						<Override
							slot="StackItemContent"
							align-items="center"
							justify-content="flex-start"
							flex-direction="column"
							padding="10px 10px 10px 10px"
						/>
						{"        "}
						<Box
							width="120px"
							height="120px"
							display="flex"
							align-items="flex-start"
							justify-content="center"
							position="relative"
							z-index="2"
							background="#020202"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Server,%20Databases,%20Download%201.svg?v=2020-11-16T15:16:18.649Z" object-fit="contain" margin="0px 0px 0px 0px" />
						</Box>
						<Text
							font="--headline3"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 1)"
							text-align="center"
						>
							Install Agents
						</Text>
						<Text
							font="--lead"
							margin="12px 0px 24px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							text-align="center"
						>
							Install the agents on the machines you wish to monitor.
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="25%" display="flex" lg-width="50%" sm-width="100%">
						<Override
							slot="StackItemContent"
							align-items="center"
							justify-content="flex-start"
							flex-direction="column"
							padding="10px 10px 10px 10px"
						/>
						{"        "}
						<Box
							width="120px"
							height="120px"
							display="flex"
							align-items="center"
							justify-content="center"
							position="relative"
							z-index="2"
						>
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/settings.4%201.svg?v=2020-11-16T15:16:18.648Z"
								object-fit="contain"
								background="#020202"
								margin="25px 0px 0px 0px"
							/>
						</Box>
						<Text
							font="--headline3"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 1)"
							text-align="center"
						>
							Customize Settings
						</Text>
						<Text
							font="--lead"
							margin="12px 0px 24px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							text-align="center"
						>
							Customize our pre-defined rules for your use-case
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="25%" display="flex" lg-width="50%" sm-width="100%">
						<Override
							slot="StackItemContent"
							align-items="center"
							justify-content="flex-start"
							flex-direction="column"
							padding="10px 10px 10px 10px"
						/>
						{"        "}
						<Box
							width="120px"
							height="120px"
							display="flex"
							align-items="center"
							justify-content="center"
							background="#020202"
							position="relative"
							z-index="2"
						>
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/settings.4%202.svg?v=2020-11-16T15:16:18.649Z"
								object-fit="contain"
								margin="10px 0px 0px 0px"
								background="#020202"
							/>
						</Box>
						<Text
							font="--headline3"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 1)"
							text-align="center"
						>
							Take Control!
						</Text>
						<Text
							font="--lead"
							margin="12px 0px 24px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							text-align="center"
						>
							Start using the dashboard to secure your domain and gain insight into users' activities.
						</Text>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
			</Section>
			<Section padding="50px 0 112px 0" lg-padding="70px 0 70px 0">
				<Override slot="SectionContent" max-width="1200px" align-items="center" />
				<Stack
					width="100%"
					margin="0px 0px 0px 0px"
					background="rgba(6, 6, 6, 1)"
					position="relative"
					align-items="center"
					justify-content="center"
					overflow-y="hidden"
					gap="0px"
					border-radius="6px"
					border-color="#161616"
					border-width="1px"
					border-style="solid"
				>
					{"    "}
					<Box
						width="70%"
						height="100%"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Groupoba.svg?v=2020-10-17T19:56:21.221Z) center center/cover no-repeat scroll padding-box"
						position="absolute"
						bottom="auto"
						left="auto"
						right="auto"
						top="-170px"
						z-index="1"
						lg-width="80%"
						md-top="-115px"
						sm-width="70%"
						sm-height="300px"
						sm-top="-70px"
						sm-display="none"
					/>
					<StackItem width="100%" display="flex" padding="16px 16px 16px 16px">
						<Override
							slot="StackItemContent"
							align-items="center"
							justify-content="center"
							position="relative"
							z-index="2"
							flex-direction="column"
							padding="60px 0px 0px 0px"
							lg-padding="80px 0px 0px 0px"
							sm-padding="50px 0px 0px 0px"
							md-padding="50px 0px 0px 0px"
							lg-width="100%"
							border-radius="6px"
							border-width="0px"
						/>
						{"        "}
						<Text
							font="--headline2"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#ffffff"
							text-align="center"
							width="70%"
							lg-width="90%"
							md-font="normal 700 30px/40px Inter, sans-serif"
							sm-font="normal 700 20px/30px Inter, sans-serif"
						>
							Cutting-edge technologies for cybersecurity, threat detection and alerting
						</Text>
						<Box
							margin="42px 0px 67px 0px"
							display="flex"
							sm-flex-direction="column"
							sm-align-items="center"
							sm-justify-content="center"
						>
							<Link
								href="/request-demo/"
								padding="16px 38px 16px 38px"
								border-radius="40px"
								border-color="--color-primary"
								border-width="1px"
								border-style="solid"
								text-decoration-line="initial"
								color="#ffffff"
								font="--menu"
								hover-background="#409EEB"
								transition="-webkit-transition: all .3s;  transition: all .3s"
								margin="0px 18px 0px 0px"
								box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
								background="--color-primary"
								position="relative"
								z-index="4"
								md-padding="16px 20px 16px 20px"
								sm-padding="16px 12px 16px 12px"
								sm-font="500 15px/22px Inter, sans-serif"
								sm-margin="0px 0px 18px 0px"
							>
								Request demo
							</Link>
							<Link
								href="/purchase/"
								padding="16px 68px 16px 68px"
								border-radius="40px"
								border-color="--color-primary"
								border-width="2px"
								border-style="solid"
								text-decoration-line="initial"
								color="#ffffff"
								font="--menu"
								hover-background="--color-primary"
								transition="-webkit-transition: all .3s;  transition: all .3s"
								text-align="center"
								position="relative"
								z-index="4"
								md-padding="16px 40px 16px 40px"
								sm-padding="16px 34px 16px 34px"
								sm-font="500 15px/22px Inter, sans-serif"
							>
								Pricing
							</Link>
						</Box>
						<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/rezhevmasdas.png?v=2020-10-21T15:09:40.369Z" width="736px" nout-width="70%" />
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
			</Section>
			<Section padding="50px 0 60px 0" lg-padding="50px 0 20px 0">
				<Override slot="SectionContent" max-width="1200px" align-items="center" />
				<Stack width="100%" margin="0px 0px 0px 0px">
					{"    "}
					<StackItem
						width="35%"
						display="flex"
						lg-width="100%"
						lg-align-items="center"
						lg-justify-content="center"
					>
						<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" />
						{"        "}
						<Image loading="lazy" width="250px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/blackilogo.svg?v=2020-10-20T20:25:32.090Z" />
						<Text
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="31px 0px 24px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							md-text-align="center"
						>
							Russia, Novosibirsk, Koptug Road 4,{" "}
							<br />
							Sobolev Institute of Mathematics
						</Text>
						<SocialMedia
							facebook="https://www.facebook.com/quarklyapp/"
							twitter="https://twitter.com/quarklyapp"
							youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
							vkontakte="https://vk.com/quarklyapp"
							telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
							align-items="center"
							justify-content="flex-start"
							background="rgba(0, 0, 0, 0)"
							lg-justify-content="center"
						>
							<Override
								slot="link"
								background="rgba(237, 242, 246, 0)"
								color="#ffffff"
								hover-background="--color-primary"
								hover-border-radius="40px"
							/>
							<Override slot="link-telegram" display="none" />
							<Override slot="link-vkontakte" display="none" />
						</SocialMedia>
						{"    "}
					</StackItem>
					<StackItem width="20%" display="flex" lg-width="33.333%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" />
						{"        "}
						<Text font="normal 700 18px/160% --fontFamily-googleInter" margin="0px 0px 27px 0px" display="inline-block" color="rgba(255, 255, 255,1)">
							SOLUTIONS
						</Text>
						<Link
							href="/administration/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							Remote Administration
						</Link>
						<Link
							href="/monitoring/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							Employee Monitoring
						</Link>
						<Link
							href="/security/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
							md-text-align="center"
						>
							Information Security
						</Link>
						{"    "}
					</StackItem>
					<StackItem
						width="15%"
						display="flex"
						lg-width="33.333%"
						md-width="50%"
						sm-width="100%"
					>
						<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" />
						{"        "}
						<Text font="normal 700 18px/160% --fontFamily-googleInter" margin="0px 0px 27px 0px" display="inline-block" color="rgba(255, 255, 255,1)">
							ABOUT
						</Text>
						<Link
							href="/about-us/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							Company
						</Link>
						<Link
							href="/why-us/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							Why StaffCop?
						</Link>
						<Link
							href="/white-papers/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							White Papers
						</Link>
						{"    "}
					</StackItem>
					<StackItem
						width="15%"
						display="flex"
						lg-width="33.333%"
						md-width="50%"
						sm-width="100%"
					>
						<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" />
						{"        "}
						<Text font="normal 700 18px/160% --fontFamily-googleInter" margin="0px 0px 27px 0px" display="inline-block" color="rgba(255, 255, 255,1)">
							LEARN
						</Text>
						<Link
							href="https://docs.staffcop.com/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							Documentation
						</Link>
						<Link
							href="/cases/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							Use cases
						</Link>
						<Link
							href="/features/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							Features
						</Link>
						{"    "}
					</StackItem>
					<StackItem
						width="15%"
						display="flex"
						lg-width="33.333%"
						md-width="50%"
						sm-width="100%"
					>
						<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" />
						{"        "}
						<Text font="normal 700 18px/160% --fontFamily-googleInter" margin="0px 0px 27px 0px" display="inline-block" color="rgba(255, 255, 255,1)">
							CONTACT
						</Text>
						<Link
							href="/purchase/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							Purchase
						</Link>
						<Link
							href="/support/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							Support
						</Link>
						<Link
							href="/partners/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 10px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							Distributors
						</Link>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
			</Section>
		</Section>
		<Section
			background="#020202"
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
						color="rgba(255, 255, 255, 0.26)"
						md-font="normal 400 13px/22px --fontFamily-googleInter"
						sm-font="normal 400 12px/17px --fontFamily-googleInter"
					>
						© Atom Security LLC, 2001–2020. All rights reserved. All trademarks are the property of their respective owners.{"\n\n\n        "}
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
						<Image
							loading="lazy"
							width="18px"
							height="18px"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Icon.svg?v=2020-10-21T00:34:26.772Z"
							padding="12px 13px 14px 13px"
						/>
					</Link>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Components.GoogleAnalytics1 />
		<Components.GoogleAnalytics2 />
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