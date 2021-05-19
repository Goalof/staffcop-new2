import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Section, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"features"} />
		<Helmet>
			<title>
				Features
			</title>
			<meta name={"description"} content={"StaffCop provides a unique, fully integrated solution that focuses on detection and response to insider threats through a combination of advanced behavioral analysis and context-rich logging of insider activity.\n\n"} />
			<meta property={"og:title"} content={"StaffCop Enterprise"} />
			<meta property={"og:description"} content={"StaffCop provides a unique, fully integrated solution that focuses on detection and response to insider threats through a combination of advanced behavioral analysis and context-rich logging of insider activity.\n\n"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/gfjkjkljkl.nbmbv.png?v=2020-11-04T15:35:13.162Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2020-11-28T11:58:11.223Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<meta name={"msapplication-TileColor"} content={"#1465FF"} />
		</Helmet>
		<Components.Header>
			<Override slot="link1" color="--primary" />
		</Components.Header>
		<Section padding="200px 0 140px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)" lg-padding="140px 0 70px 0" md-padding="100px 0 30px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" sm-align-items="center" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
					/>
					{"        "}
					<Text font="--headline2" margin="0px 0px 16px 0px" display="inline-block" md-font="normal 700 30px/40px Inter, sans-serif">
						Features
					</Text>
					<Text
						font="normal 400 18px/160% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#555"
						md-font="normal 400 16px/140% --fontFamily-googleInter"
						sm-text-align="center"
					>
						Activity Monitoring, User Behavior Analytics, Productivity Optimization & Insider Threat Detection in a Single Platform
					</Text>
					{"    "}
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
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						margin="36px 0px 0px 0px"
						hover-background="#409EEB"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						sm-font="600 16px/22px --fontFamily-googleInter"
						sm-padding="16px 20px 16px 20px"
						md-padding="16px 26px 16px 26px"
					>
						Request demo
					</Link>
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" position="relative" sm-align-items="center" sm-justify-content="center" />
					{"        "}
					<Image
						width="803px"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15:07:09.010Z"
						md-width="400px"
						position="absolute"
						right="-115px"
						left="auto"
						top="-115px"
						bottom="auto"
						lg-width="500px"
						lg-position="absolute"
						lg-top="-35px"
						lg-right="-50px"
						md-top="0px"
						md-right="-70px"
						sm-position="relative"
						sm-left="auto"
						sm-right="auto"
						sm-top="0px"
						sm-bottom="auto"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section padding="0px 0 0px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center 1300px/3610px no-repeat scroll padding-box">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Section padding="24px 0 124px 0" sm-padding="24px 0 50px 0">
				<Override slot="SectionContent" max-width="1200px" />
				<Stack margin="0px 0px 0px 0px">
					{"    "}
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="live-employee-desktop"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/browser-internet-web-network-window-app-icon%201%20(1).svg?v=2020-11-14T19:20:40.204Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Live Employee Desktop Monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Real-time streaming of user activity through the StaffCop admin panel
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="employee-internet-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/browser-internet-web-network-window-app-icon%201.svg?v=2020-11-14T11:50:25.162Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Employee internet monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Track all web activity including file uploads
									<br />
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="e-mail-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Postage,%20Stamp,%20Mail,%20Email%201.svg?v=2020-11-14T11:50:27.691Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									E-mail monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Monitor incoming and outgoing employee email
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="file-activity-monitoring-software"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="42px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/keyyyyyy.svg?v=2020-11-14T11:50:26.499Z" margin="0px 0px 8px 5px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									File activity monitoring software
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Track files on local drive or netwerk shares
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="printed-document-tracking"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/folder-circle.1%201s.svg?v=2020-11-14T11:50:28.922Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Printed document tracking
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									See what documents were sent to print
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="keystroke-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/printer-print-button-circle%201.svg?v=2020-11-14T11:50:27.692Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Keystroke Monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Track keyboard input including functional keys
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="optical-character-recognition-ocr"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/text-circle%201.svg?v=2020-11-14T11:50:28.847Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Optical character recognition
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Search with simple text, keyword, wildcard or RegEx to find the exact information you need.
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="smart-rules-and-alerts"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/bell-notification-circles.svg?v=2020-11-14T11:50:25.401Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Smart rules & alerts
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Configure an alert on any user behavior, including web, email, keystrokes, file transfers, instant messaging, and more
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="employee-productivity-tracking"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Graph%20,%20Analitycs%201.svg?v=2020-11-14T11:50:26.500Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Employee productivity tracking
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Employee Monitoring Software with Powerful Insider Threat Detection and Productivity Analysis Features
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="network-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/notebook-laptop-circle%201%20(1).svg?v=2020-11-14T12:10:38.775Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Network activity monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Monitor all network activity and view all connected computers, destinatio IP address, etc
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="application-usage-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/cursor-click-select-circle%202.svg?v=2020-11-14T12:10:38.785Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Applications usage monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Track time of applications usage, block apps by white and black lists
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="instant-message-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/user-circle%201.svg?v=2020-11-14T12:10:38.776Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Instant message monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Monitor and react to any chat conversation, whether on a web or application-based platform.
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="none"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="social-media-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="10px 20px 20px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/eye-circle%201.svg?v=2020-11-14T12:10:38.771Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Social media monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									View employee social media activities like posts, comments, updates
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="none"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="remote-desktop-control"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="10px 20px 20px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/notebook-laptop-circle%201%20(1).svg?v=2020-11-14T12:10:38.775Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Remote desktop control
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Control sessions from your browser or tablet. Instantly block a user's keyboard or mouse
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="none"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="active-vs-idle-time-analysis"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="10px 20px 20px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/user-circle%201.svg?v=2020-11-14T12:10:38.776Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									User & entity behavior analytics
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Real-time behavior anomaly and threat detection, privileged user monitoring, data loss prevention
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="remote-desktop-control"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/wifi-network-signal%201.svg?v=2020-11-14T12:10:38.775Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Remote Desktop Control
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Take control over remote mouse and keaboard
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="linux-terminal-capture"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/star-favorite-circle.1%201.svg?v=2020-11-14T12:10:38.774Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Linux terminal capture
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Privileged users have access to your core IT systems, network, applications and data.
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="active-vs-idle-time-analysis"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/search.1%202.svg?v=2020-11-14T12:10:38.775Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Activity vs. Idle Time analysis
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									See top performers and top laggards in your company
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="nonproductive-activity-reporting"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/power-turn-on%201.svg?v=2020-11-14T12:10:38.771Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Nonproductive activity reporting
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Customized lists of websites, activities, applications that fit into both productive and nonproductive categories.
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="custom-reports"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/setting-circle.4%201.svg?v=2020-11-14T12:10:38.773Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Custom reports
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Create your own reports with the help of report Constructor
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="session-recording-and-metadata"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/eye-circle%201.svg?v=2020-11-14T12:10:38.771Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Session recording & metadata
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									In addition to recording desktops as a video stream, StaffCop records and indexes applications used, websites visited, file activity, keystrokes, e-mails, and more
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					{"    "}
				</Stack>
				<Stack margin="0px 0px 0px 0px">
					{"    "}
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="user-card"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/browser-internet-web-network-window-app-icon%201%20(1).svg?v=2020-11-14T19:20:40.204Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									User card
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									See overview of employee activity, top used applications and websites
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="screen-capture"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/browser-internet-web-network-window-app-icon%201.svg?v=2020-11-14T11:50:25.162Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Screen capture
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									See and record all visual data happening on monitored workstation
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="webcam-snapshots"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Postage,%20Stamp,%20Mail,%20Email%201.svg?v=2020-11-14T11:50:27.691Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Webcam snapshots
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									See who is really beyond the screen
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="usb-device-control"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="42px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/keyyyyyy.svg?v=2020-11-14T11:50:26.499Z" margin="0px 0px 8px 5px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									USB device control
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Manage usage of external devices
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="dlp-features"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/folder-circle.1%201s.svg?v=2020-11-14T11:50:28.922Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									DLP features
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Prevent leakage of trade secret and other sensitive data
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="keystroke-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/printer-print-button-circle%201.svg?v=2020-11-14T11:50:27.692Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Keystroke Monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Track keyboard input including functional keys
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="voice-communication-recording"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/text-circle%201.svg?v=2020-11-14T11:50:28.847Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Voice communication recording
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Record sound from speakers and microphones
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="file-scanner"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/bell-notification-circles.svg?v=2020-11-14T11:50:25.401Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									File scanner
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Scan file system on the monitored PCs to get it in the tree form
								</Text>
							</Box>
							{"    "}
						</Link>
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
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="software-and-hardware-inventory"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="15px 20px 25px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Graph%20,%20Analitycs%201.svg?v=2020-11-14T11:50:26.500Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Software and Hardware inventory
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									What applications and devices are installed/uninstalled
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="none"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="social-media-monitoring"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="10px 20px 20px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/eye-circle%201.svg?v=2020-11-14T12:10:38.771Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Social media monitoring
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									View employee social media activities like posts, comments, updates
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="none"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="remote-desktop-control"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="10px 20px 20px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/notebook-laptop-circle%201%20(1).svg?v=2020-11-14T12:10:38.775Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									Remote desktop control
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Control sessions from your browser or tablet. Instantly block a user's keyboard or mouse
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					<StackItem
						width="33.3333%"
						display="none"
						lg-width="50%"
						md-width="100%"
						nout-width="50%"
					>
						<Override
							slot="StackItemContent"
							border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
							flex-direction="column"
							align-items="flex-start"
							justify-content="flex-start"
						/>
						{"        "}
						<Link
							href="active-vs-idle-time-analysis"
							width="100%"
							height="100%"
							text-decoration-line="initial"
							display="flex"
						>
							<Box
								border-radius="6px"
								padding="27px 37px 42px 37px"
								border-width="1px"
								border-style="solid"
								background="#FFFFFF"
								transition=" -webkit-transition: all .6s;  transition: all .6s"
								hover-transform="translateY(-10px)"
								md-display="flex"
								md-flex-direction="column"
								sm-padding="10px 20px 20px 20px"
								border-color="rgba(255, 255, 255, 0.05)"
								box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
								justify-content="flex-start"
								md-width="100%"
							>
								<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/user-circle%201.svg?v=2020-11-14T12:10:38.776Z" margin="0px 0px 20px 0px" />
								<Text
									font="normal 700 24px/140% --fontFamily-googleInter"
									margin="0px 0px 12px 0px"
									display="inline-block"
									color="--primary"
									sm-font="normal 600 20px/140% Inter, sans-serif"
								>
									User & entity behavior analytics
								</Text>
								<Text
									font="--lead"
									margin="0px 0px 0px 0px"
									display="inline-block"
									color="rgba(85, 85, 85, 1)"
									sm-font="normal 400 16px/140% Inter, sans-serif"
								>
									Real-time behavior anomaly and threat detection, privileged user monitoring, data loss prevention
								</Text>
							</Box>
							{"    "}
						</Link>
					</StackItem>
					{"    "}
				</Stack>
			</Section>
			<Components.Footer />
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