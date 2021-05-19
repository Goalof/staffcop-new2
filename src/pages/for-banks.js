import React from "react";
import theme from "theme";
import { Theme, Link, Box, Image, Section, Text, Button, Icon, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Menu, Stack, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { GoPrimitiveDot } from "react-icons/go";
import { FaRegLifeRing } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"for-banks"} />
		<Helmet>
			<title>
				StaffCop Enterprise
			</title>
			<meta name={"description"} content={"StaffCop provides a unique, fully integrated solution that focuses on detection and response to insider threats through a combination of advanced behavioral analysis and context-rich logging of insider activity.\n\n"} />
			<meta property={"og:title"} content={"StaffCop Enterprise"} />
			<meta property={"og:description"} content={"StaffCop provides a unique, fully integrated solution that focuses on detection and response to insider threats through a combination of advanced behavioral analysis and context-rich logging of insider activity.\n\n"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/gfjkjkljkl.nbmbv.png?v=2020-11-04T15:35:13.162Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<meta name={"msapplication-TileColor"} content={"#1465FF"} />
		</Helmet>
		<Box
			position="absolute"
			width="100%"
			height="1800px"
			background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonstar.png?v=2021-04-29T08:32:07.628Z) 0% 0% /cover no-repeat scroll padding-box"
			z-index="3"
			bottom="auto"
			left="auto"
			right="auto"
			top="0px"
			lg-height="1500px"
			sm-height="1000px"
		/>
		<Box
			position="absolute"
			width="100%"
			height="1300px"
			background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonbuble.png?v=2021-04-29T08:29:19.945Z) center center/90% no-repeat"
			z-index="3"
			right="0px"
			bottom="auto"
			left="auto"
			filter="blur(154px)"
			margin="350px 0px 0px 0px"
			sm-height="600px"
		/>
		<Section
			background="linear-gradient(180deg,rgba(0, 0, 0, 0.98) 60.5%,rgba(0, 0, 0, 0) 100%)"
			padding="15px 0 10px 0"
			sm-padding="12px 0 12px 0"
			lg-padding="15px 0 15px 0"
			position="fixed"
			z-index="6"
			opacity=".98"
		>
			<Override slot="SectionContent" max-width="1170px" position="relative" z-index="5" />
			<Stack gap="0px" width="100%">
				{"    "}
				<StackItem
					width="20%"
					display="flex"
					nout-width="18%"
					lg-width="40%"
					sm-width="70%"
				>
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						sm-align-items="center"
						sm-justify-content="flex-start"
					/>
					<Link href="/" sm-margin="4px 0px 0px 0px">
						<Image width="100%" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/logoblack.svg?v=2021-04-05T12:18:51.158Z" padding="2px 0px 0px 0px" />
						{"     "}
					</Link>
					{"       "}
				</StackItem>
				<StackItem
					width="60%"
					display="flex"
					nout-width="64%"
					lg-display="none"
					sm-width="32%"
				>
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Components.MyNav />
					<Link
						href="/features/"
						text-decoration-line="initial"
						font="--menu"
						color="#ffffff"
						padding="30px 15px 30px 15px"
						hover-color="--primary"
					>
						Features
					</Link>
					<Link
						href="/solutions/"
						text-decoration-line="initial"
						font="--menu"
						color="#ffffff"
						padding="30px 15px 30px 15px"
						hover-color="--primary"
					>
						Cases
					</Link>
					<Link
						text-decoration-line="initial"
						font="--menu"
						color="#ffffff"
						padding="30px 15px 30px 15px"
						hover-color="--primary"
						href="/purchase/"
					>
						Purchase
					</Link>
					<Components.MyNav2 />
					{"    "}
				</StackItem>
				{"    "}
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
					sm-width="30%"
					lg-display="flex"
					display="none"
				>
					<Override slot="StackItemContent" justify-content="flex-end" align-items="center" lg-justify-content="center" />
					<Components.MobileSide2
						flex="1 1 auto"
						lg-position="relative"
						lg-z-index="5"
						lg-display="flex"
						lg-justify-content="center"
						lg-align-items="center"
						sm-align-items="center"
						sm-justify-content="flex-end"
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
							lg-overflow-y="scroll"
						/>
						<Override
							slot="Button"
							display="none"
							lg-display="block"
							lg-width="28px"
							lg-height="28px"
							lg-position="relative"
							lg-z-index="6"
							lg-box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							lg-background="--color-primary"
							lg-padding="9px 10px 10px 10px"
							lg-top="4px"
							lg-border-radius="1000%"
						/>
						<Override
							slot="Button Line"
							lg-width="100%"
							lg-left="auto"
							lg-right="auto"
							lg-bottom="auto"
							lg-top="22px"
							lg-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/palki.svg?v=2020-12-01T12:31:09.963Z) center center/cover no-repeat scroll padding-box"
						/>
						<Override slot="Button Line1" lg-width="44px" lg-top="0px" lg-right="0px" />
						<Override slot="Button Line2" lg-top="12px" lg-right="0px" />
						<Override slot="Button Line3" lg-top="24px" lg-right="0px" lg-width="100%" />
						<Override
							slot="Button Line1 :closed"
							lg-width="80%"
							lg-top="12px"
							lg-bottom="auto"
							lg-left="auto"
							lg-right="auto"
							lg-height="30.99px"
						/>
						<Override
							slot="Button Line2 :closed"
							lg-width="50%"
							lg-background="#ffffff"
							lg-left="auto"
							lg-right="auto"
							lg-bottom="auto"
							lg-top="21px"
							lg-display="none"
						/>
						<Override
							slot="Button Line3 :closed"
							lg-width="50%"
							lg-background="#ffffff"
							lg-left="auto"
							lg-right="auto"
							lg-bottom="auto"
							lg-top="30px"
							lg-display="none"
						/>
						<Override slot="Button Line2 :open" lg-opacity="0" lg-width="32px" lg-display="none" />
						<Override
							slot="Button Line1 :open"
							lg-width="70%"
							lg-left="auto"
							lg-right="auto"
							lg-bottom="auto"
							lg-top="9px"
							lg-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/krestiiki.svg?v=2020-12-01T12:34:09.363Z) center center/cover no-repeat scroll padding-box"
							lg-height="80%"
						/>
						<Override
							slot="Button Line3 :open"
							lg-width="36px"
							lg-transform="translateY(-12px) rotate(135deg)"
							lg-left="auto"
							lg-right="auto"
							lg-top="35px"
							lg-bottom="auto"
							lg-display="none"
						/>
						<Override slot="Content :closed" lg-opacity="0" lg-transition="transform --transitionDuration-normal step-end 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut" lg-transform="translateY(-100%)" />
						<Override
							slot="Content :open"
							lg-position="fixed"
							lg-transform="translateY(0%)"
							lg-transition="transform --transitionDuration-normal step-start 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut"
							lg-opacity="1"
						/>
						<Override
							slot="Button :open"
							lg-position="fixed"
							lg-top="18px"
							lg-width="32.99px"
							lg-display="flex"
							lg-align-items="center"
							lg-justify-content="center"
							lg-padding="10px 6px 9px 6px"
							lg-height="25.986px"
						/>
						<Override
							slot="Button :closed"
							lg-align-items="center"
							lg-justify-content="center"
							md-top="0px"
							lg-top="0px"
							lg-display="flex"
							lg-padding="9px 9px 9px 9px"
						/>
						<Components.NestedMenu
							lg-flex-direction="column"
							lg-align-items="center"
							lg-margin="16px 0px 0px 0px"
							collapse
							depth="2"
							lg-width="100%"
							lg-right="auto"
							lg-left="auto"
						>
							<Override slot="Item-404" lg-display="none" />
							<Override slot="Link-index">
								Home
							</Override>
							<Override
								slot="Item"
								lg-padding="14px 0px 14px 0px"
								lg-box-shadow="none"
								lg-width="100%"
								lg-text-align="center"
								lg-display="flex"
								lg-align-items="center"
								lg-justify-content="center"
							/>
							<Override
								slot="Link"
								lg-box-shadow="none"
								lg-font="--menu"
								lg-color="--darkL1"
								lg-text-decoration-line="initial"
								lg-padding="5px 0px 5px 0px"
								lg-text-align="center"
								sm-padding="5px 5px 5px 5px"
								white-space="pre-wrap"
							/>
							<Override slot="Icon" lg-box-shadow="none" lg-padding="4px 0px 0px 4px" />
							<Override
								slot="Sub"
								lg-width="100%"
								lg-left="auto"
								lg-right="auto"
								lg-bottom="auto"
								lg-padding="1px 0px 1px 0px"
							/>
						</Components.NestedMenu>
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
		<Components.EmbedHTML />
		<Section
			padding="170px 0 0px 0"
			hd-background="#020202 url() center -693px/2060px repeat"
			width="100%"
			background="#000"
			sm-padding="140px 0 0px 0"
		>
			<Override
				slot="SectionContent"
				max-width="1200px"
				align-items="center"
				position="relative"
				z-index="5"
			/>
			<Text font="--menu" color="#1767FF" margin="0px 0px 17px 0px" text-align="center">
				StaffCop Enterprise
			</Text>
			<Text
				font="normal bold 66px/1.2 --fontFamily-googleInter"
				color="#ffffff"
				margin="0px 0px 10px 0px"
				text-align="center"
				lg-font="normal bold 52px/1.2 --fontFamily-googleInter"
				sm-font="normal bold 32px/1.2 --fontFamily-googleInter"
			>
				For the banking and
				<br />
				{" "}financial sectors
			</Text>
			<Text
				font="normal 300 18px/160% --fontFamily-googleInter"
				color="#9B9FAA"
				letter-spacing="-0.01em"
				margin="8px 0px 63px 0px"
				text-align="center"
				width="49%"
				md-width="80%"
				sm-font="normal 400 16px/140% --fontFamily-googleInter"
			>
				A soware package for
monitoring informaon,
user acons and system events on workcomputers
and terminal servers
			</Text>
			<Image
				loading="lazy"
				src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/videoimg.png?v=2021-04-05T12:06:12.324Z"
				md-width="80%"
				position="relative"
				z-index="5"
				sm-width="100%"
				margin="0px 0px 141px 0px"
				width="100%"
				height="auto"
				display="none"
			/>
		</Section>
		<Section padding="0px 0 30px 0" hd-background="#020202 url() center -693px/2060px repeat" width="100%" background="#000">
			<Override
				slot="SectionContent"
				max-width="1200px"
				align-items="center"
				position="relative"
				z-index="5"
			/>
			<Components.Video width="100%" videoId="ClICMvGh5bI">
				<Override slot="YouTubePlayer" width="100%" margin="0px 0px 140px 0px" md-margin="0px 0px 60px 0px" />
			</Components.Video>
			<Image
				loading="lazy"
				src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/videoimg.png?v=2021-04-05T12:06:12.324Z"
				md-width="80%"
				position="relative"
				z-index="5"
				sm-width="100%"
				margin="0px 0px 141px 0px"
				width="100%"
				height="auto"
				display="none"
			/>
			<Text
				font="normal bold 66px/1.2 --fontFamily-googleInter"
				color="#ffffff"
				margin="0px 0px 10px 0px"
				text-align="center"
				lg-font="normal bold 52px/1.2 --fontFamily-googleInter"
				md-font="normal bold 48px/1.2 --fontFamily-googleInter"
				sm-font="normal bold 26px/1.2 --fontFamily-googleInter"
			>
				Monitoring. Analysis.{" "}
				<br />
				Notification. Blocking.
			</Text>
			<Text
				font="normal 300 18px/160% --fontFamily-googleInter"
				color="#9B9FAA"
				letter-spacing="-0.01em"
				margin="8px 0px 83px 0px"
				text-align="center"
				width="49%"
				md-width="80%"
				sm-font="normal 400 16px/140% --fontFamily-googleInter"
				sm-margin="8px 0px 23px 0px"
			>
				To ensure integrity of business flows and informaon
				<br />
				security for banks and financial organizaons
			</Text>
			<Text
				font="normal 700 34px/45px --fontFamily-googleInter"
				color="#ffffff"
				letter-spacing="-0.01em"
				margin="8px 0px 0px 0px"
				text-align="center"
				md-width="80%"
				sm-font="normal 400 16px/140% --fontFamily-googleInter"
				lg-font="normal 700 30px/35px --fontFamily-googleInter"
			>
				A software package for monitoring information,{" "}
				<br />
				user actions and system events on work{" "}
				<br />
				computers and terminal servers
			</Text>
		</Section>
		<Section background="#000000 url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonchik2.png?v=2021-04-29T08:30:36.568Z) center center/80% no-repeat" border-color="#161616" padding="48px 0 110px 0">
			<Override slot="SectionContent" max-width="1200px" position="relative" />
			<Stack margin="0px 0px 0px 0px" justify-content="center">
				{"    "}
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="24px"
						padding="0px 0px 0px 0px"
						border-width="1px"
						border-style="solid"
						background="#030303"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 0px 20px 0px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
					>
						<Link href="/features/productivity-monitoring" padding="42px 42px 42px 42px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/search-radar-location.2%203.svg?v=2021-04-05T16:16:38.983Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Early detection of information security threats
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Early detection of information security threats
							</Text>
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="24px"
						padding="0px 0px 0px 0px"
						border-width="1px"
						border-style="solid"
						background="#030303"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 0px 20px 0px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
					>
						<Link href="/features/productivity-monitoring" padding="42px 42px 42px 42px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/search.5%201.svg?v=2021-04-07T01:20:06.389Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Investigation of incidents
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								StaffCop is a me machine! At any me, you can go back and see what this or that employee was doing in the specified period
								<br />
								of me
							</Text>
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="24px"
						padding="0px 0px 0px 0px"
						border-width="1px"
						border-style="solid"
						background="#030303"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 0px 20px 0px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
					>
						<Link href="/features/productivity-monitoring" padding="42px 42px 42px 42px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/timer-clock-fast%201.svg?v=2021-04-07T01:20:14.866Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Work time tracking Monitoring user activity on a PC
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								To ensure integrity of business flows and informaon security for banks and financial organizaons.
							</Text>
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="24px"
						padding="0px 0px 0px 0px"
						border-width="1px"
						border-style="solid"
						background="#030303"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 0px 20px 0px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
					>
						<Link href="/features/productivity-monitoring" padding="42px 42px 42px 42px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/statistics-analytics-square%201.svg?v=2021-04-07T01:20:27.505Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								User behavior analysis Automatic
analysis
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								To ensure integrity of business flows and informaon security for banks and financial organizaons.
							</Text>
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="24px"
						padding="0px 0px 0px 0px"
						border-width="1px"
						border-style="solid"
						background="#030303"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 0px 20px 0px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
					>
						<Link href="/features/productivity-monitoring" padding="42px 42px 42px 42px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/programming-code-monitor%201.svg?v=2021-04-07T01:20:40.099Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Remote administration with or without
								<br />
								notice to the user Remote PC control
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								StaffCop is a me machine! At any me, you can go back and see what this or that employee was doing in the specified period
								<br />
								of me
							</Text>
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="24px"
						padding="0px 0px 0px 0px"
						border-width="1px"
						border-style="solid"
						background="#030303"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 0px 20px 0px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
					>
						<Link href="/features/productivity-monitoring" padding="42px 42px 42px 42px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/User,Profile.13%202.svg?v=2021-04-07T01:20:47.899Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Assessment of employee productivity
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								To ensure integrity of business flows and informaon security for banks and financial organizaons.
							</Text>
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="24px"
						padding="0px 0px 0px 0px"
						border-width="1px"
						border-style="solid"
						background="#030303"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 0px 20px 0px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
					>
						<Link href="/features/productivity-monitoring" padding="42px 42px 42px 42px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/input-password-protection%201.svg?v=2021-04-05T16:39:40.231Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Keylogger and registering bash commands
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								StaffCop supports intercepon of keystrokes at the core level to control the terminal of servers, as well as intercepon of X-sessions keyboard.
							</Text>
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="24px"
						padding="0px 0px 0px 0px"
						border-width="1px"
						border-style="solid"
						background="#030303"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 0px 20px 0px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
					>
						<Link href="/features/productivity-monitoring" padding="42px 42px 42px 42px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/business-chart-search%201.svg?v=2021-04-05T16:39:53.468Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Monitoring configurable log files usage
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Registraon of facts and duraon of calls, intercepon of SMS-messages.
							</Text>
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="24px"
						padding="0px 0px 0px 0px"
						border-width="1px"
						border-style="solid"
						background="#030303"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 0px 20px 0px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
					>
						<Link href="/features/productivity-monitoring" padding="42px 42px 42px 42px" height="100%">
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mic-rec%201.svg?v=2021-04-05T16:40:07.054Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Microphone recording
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Environment recording from microphones, desktop video, screenshots of screens and snapshots from webcam.
							</Text>
						</Link>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
				<Button
					id="hider-1"
					position="relative"
					z-index="9"
					type="button"
					background="rgba(17, 74, 202, 0)"
					border-color="rgba(255, 255, 255, 0.1)"
					border-width="2px"
					border-style="solid"
					border-radius="40px"
					font="--menu"
					padding="24px 36px 24px 36px"
					transition="-webkit-transition: all .3s;  transition: all .3s"
					hover-background="--color-primary"
					margin="-90px 0px 0px 0px"
					max-height="74px"
					lg-display="none"
				>
					Show more advantages
				</Button>
			</Stack>
			<Box
				id="content-1"
				position="absolute"
				bottom="0px"
				left="auto"
				background="linear-gradient(180deg,rgba(0, 0, 0, 0) 1.09%,rgba(0, 0, 0, 0) 16.2%,#000000 60.5%)"
				width="100%"
				height="450px"
				z-index="3"
				lg-display="none"
			/>
		</Section>
		<Section padding="70px 0 70px 0" background="#000000" md-padding="30px 0 30px 0">
			<Override slot="SectionContent" max-width="none" align-items="center" width="90%" />
			<Text
				font="normal 700 72px/72px --fontFamily-googleInter"
				margin="0px 0px 18px 0px"
				display="inline-block"
				color="#ffffff"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 48px/72px --fontFamily-googleInter"
			>
				Compliance
			</Text>
			<Text
				font="normal 400 18px/160% --fontFamily-googleInter"
				color="#9B9FAA"
				letter-spacing="-0.01em"
				margin="8px 0px 60px 0px"
				text-align="center"
				width="55%"
				md-width="80%"
				sm-font="normal 400 16px/140% --fontFamily-googleInter"
			>
				Compliance is an increasingly complex task, requiring organizaons to manage mulple riskfactors across an evolving technology landscape, while also ensuring appropriate user behavior to meet the stringent requirements of today’s widely-accepted regulatory standards, such as GDPR, HIPAA, PCI DSS, ISO 27001, NIST and others.
			</Text>
		</Section>
		<Section padding="70px 0 20px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonchikblue-min.png?v=2021-04-29T08:47:28.245Z) no-repeat,#000000" md-padding="30px 0 30px 0" md-background="#000,url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonchikblue.png?v=2021-04-06T00:09:01.506Z) center center no-repeat">
			<Override slot="SectionContent" max-width="1300px" align-items="center" width="90%" />
			<Text
				font="normal 700 72px/72px --fontFamily-googleInter"
				margin="0px 0px 18px 0px"
				display="inline-block"
				color="#ffffff"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 48px/72px --fontFamily-googleInter"
			>
				Information security
			</Text>
			<Text
				font="normal 300 18px/160% --fontFamily-googleInter"
				color="#9B9FAA"
				letter-spacing="-0.01em"
				margin="8px 0px 60px 0px"
				text-align="center"
				width="49%"
				md-width="80%"
				sm-font="normal 400 16px/140% --fontFamily-googleInter"
			>
				StaffCop is built on modern data
				<br />
				intercepon and analysis technologies
			</Text>
			<Stack margin="0px 0px 0px 0px" width="100%">
				<StackItem width="45%" display="flex" lg-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="space-between"
						padding="20px 42px 42px 42px"
						lg-align-items="center"
						sm-padding="20px 0px 42px 0px"
						sm-justify-content="flex-start"
						sm-align-items="flex-start"
					/>
					{"        "}
					<Text
						font="normal 600 36px/45px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="#ffffff"
						lg-text-align="center"
						sm-font="normal 600 24px/30px --fontFamily-googleInter"
						sm-width="100%"
					>
						Remote administration with or without notice to the user Remote PC control
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Icon category="go" icon={GoPrimitiveDot} color="--primary" size="16px" />
						<Text
							font="--lead"
							margin="0px 0px 0px 12px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
							sm-text-align="left"
						>
							Document search by digital prints
						</Text>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Icon category="go" icon={GoPrimitiveDot} color="--primary" size="16px" />
						<Text
							font="--lead"
							margin="0px 0px 0px 12px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
							sm-text-align="left"
						>
							Content analysis of documents
						</Text>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Icon category="go" icon={GoPrimitiveDot} color="--primary" size="16px" />
						<Text
							font="--lead"
							margin="0px 0px 0px 12px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
							sm-text-align="left"
						>
							Searching through words and regular phrases
						</Text>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Icon category="go" icon={GoPrimitiveDot} color="--primary" size="16px" />
						<Text
							font="--lead"
							margin="0px 0px 0px 12px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
							sm-text-align="left"
						>
							Morphology support
						</Text>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Icon category="go" icon={GoPrimitiveDot} color="--primary" size="16px" />
						<Text
							font="--lead"
							margin="0px 0px 0px 12px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
							sm-text-align="left"
						>
							OCR – text recognion on images
						</Text>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Icon category="go" icon={GoPrimitiveDot} color="--primary" size="16px" />
						<Text
							font="--lead"
							margin="0px 0px 0px 12px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
							sm-text-align="left"
						>
							Built-in and custom user diconaries
						</Text>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Icon category="go" icon={GoPrimitiveDot} color="--primary" size="16px" />
						<Text
							font="--lead"
							margin="0px 0px 0px 12px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
							sm-text-align="left"
						>
							Definion of encrypted archives
						</Text>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Icon category="go" icon={GoPrimitiveDot} color="--primary" size="16px" />
						<Text
							font="--lead"
							margin="0px 0px 0px 12px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
							sm-text-align="left"
						>
							Document search by digital prints
						</Text>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Icon category="go" icon={GoPrimitiveDot} color="--primary" size="16px" />
						<Text
							font="--lead"
							margin="0px 0px 0px 12px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
							sm-text-align="left"
						>
							Mullevel interacve reports
						</Text>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Icon category="go" icon={GoPrimitiveDot} color="--primary" size="16px" />
						<Text
							font="--lead"
							margin="0px 0px 0px 12px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
							sm-text-align="left"
						>
							Event Relaonship Graphs
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="55%" display="flex" lg-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="space-between"
						padding="0px 0px 0px 0px"
						lg-align-items="center"
						position="relative"
					/>
					<Box
						width="100%"
						height="100%"
						position="absolute"
						top="0px"
						left="auto"
						bottom="auto"
						background="linear-gradient(278.48deg,#000000 22.4%,rgba(0, 0, 0, 0.75) 41.4%,rgba(196, 196, 196, 0) 86.67%,rgba(126, 126, 126, 0.08) 116.62%)"
						right="auto"
					/>
					<Image
						loading="lazy"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mokap1.png?v=2021-04-29T08:35:58.235Z"
						width="100%"
						height="auto"
						margin="0px 0px 0px -2px"
						padding="0px 0px 0px 0px"
						max-height="592px"
					/>
					{"            "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section padding="10px 0 70px 0" background="#000000" md-padding="30px 0 30px 0" lg-padding="70px 0 70px 0">
			<Override slot="SectionContent" max-width="none" align-items="center" width="90%" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				<StackItem width="40%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-end"
						justify-content="center"
						padding="0px 0px 0px 0px"
						lg-align-items="center"
					/>
					<Box
						padding="35px 35px 35px 35px"
						border-color="rgba(255, 255, 255, 0.04)"
						border-width="1px"
						border-style="solid"
						border-radius="50%"
						position="relative"
						margin="0px -18px 0px 0px"
					>
						<Box
							position="absolute"
							width="100%"
							height="100%"
							left="0px"
							right="0px"
							top="0px"
							bottom="0px"
							background="rgba(28, 99, 248, 0.1)"
							filter="blur(24px)"
							transform="matrix(-0.03, 1, 1, 0.03, 0, 0)"
							border-radius="50%"
							margin="0px 0px 0px 0px"
						/>
						<Box
							padding="28px 28px 28px 28px"
							border-color="rgba(255, 255, 255, 0.1)"
							border-width="1px"
							border-style="solid"
							border-radius="50%"
						>
							<Box background="#1C63F8" border-radius="50%">
								<Image
									loading="lazy"
									width="64px"
									height="64px"
									src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Bell.svg?v=2021-04-07T01:09:17.281Z"
									padding="26px 27px 26px 27px"
									border-radius="60px"
								/>
							</Box>
						</Box>
					</Box>
					{"            "}
				</StackItem>
				<StackItem width="60%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						padding="0px 0px 0px 0px"
						lg-align-items="center"
					/>
					<Text
						font="normal 400 18px/160% --fontFamily-googleInter"
						color="#9B9FAA"
						letter-spacing="-0.01em"
						margin="0px 0px 0px -18px"
						md-width="100%"
						sm-font="normal 400 16px/140% --fontFamily-googleInter"
						md-text-align="center"
					>
						StaffCop can nofy of violaon of security policies in the
						<br />
						admin panel and by e-mail. Analycal tables and graphs
						<br />
						Using the Filter Builder, it is easy to create a wide range
						<br />
						of bespoke policies that match your organizaon’s security
						<br />
						policies and assign alerts when they are triggered.
					</Text>
					{"            "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section background="#000000 url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonchik2.png?v=2021-04-29T08:30:36.568Z) center center/80% no-repeat" border-color="#161616" padding="24px 0 90px 0">
			<Override slot="SectionContent" max-width="1200px" position="relative" align-items="center" />
			<Text
				font="normal 700 72px/72px --fontFamily-googleInter"
				margin="0px 0px 18px 0px"
				display="inline-block"
				color="#ffffff"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 48px/72px --fontFamily-googleInter"
			>
				interception of all
				<br />
				channels and events
			</Text>
			<Text
				font="normal 400 18px/160% --fontFamily-googleInter"
				color="#9B9FAA"
				letter-spacing="-0.01em"
				margin="8px 0px 60px 0px"
				text-align="center"
				md-width="80%"
				sm-font="normal 400 16px/140% --fontFamily-googleInter"
				width="55%"
			>
				on workstaons and terminal servers
			</Text>
			<Stack margin="0px 0px 0px 0px" justify-content="center">
				{"    "}
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="24px"
						padding="42px 42px 60px 42px"
						border-width="1px"
						border-style="solid"
						background="#030303"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
					>
						<Image
							loading="lazy"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Server,%20Databases,%20Connect.1%201.svg?v=2021-04-07T14:18:05.786Z"
							object-position="0% 0%"
							margin="10px 0px 30px -9px"
							filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
						/>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="#ffffff"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Postal protocols
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							IMAP, SMTP, MAPI, POP3 and their encrypted analogues. Control the sending of messages and transferring of files through web-based e-mail services.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="24px"
						padding="42px 42px 60px 42px"
						border-width="1px"
						border-style="solid"
						background="#030303"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
					>
						<Image
							loading="lazy"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Skype%201.svg?v=2021-04-07T14:21:17.624Z"
							object-position="0% 0%"
							margin="10px 0px 30px -9px"
							filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
						/>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="#ffffff"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Messengers
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Skype, ICQ, Jabber (XMPP), MSN and others.Using the keylogger – applicaon/site – screenshot link, you can track the correspondence of any instant messengers, chats and other communicaons over the Internet.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="24px"
						padding="42px 42px 60px 42px"
						border-width="1px"
						border-style="solid"
						background="#030303"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
					>
						<Image
							loading="lazy"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/monitor-camera%201.svg?v=2021-04-07T15:13:35.532Z"
							object-position="0% 0%"
							margin="10px 0px 30px -9px"
							filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
						/>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="#ffffff"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Applications
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Facts about installing and launching applicaons, duraon of use, screenshots of the screen when changing the window focus. Blocking the launch of processes and applicaons
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="24px"
						padding="42px 42px 60px 42px"
						border-width="1px"
						border-style="solid"
						background="#030303"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
					>
						<Image
							loading="lazy"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Folder,%20Eye%201.svg?v=2021-04-07T15:14:44.811Z"
							object-position="0% 0%"
							margin="10px 0px 30px -9px"
							filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
						/>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="#ffffff"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Files
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Registraon of all operaons with files and folders, including network files. Creaon of shadow copies of files sent outside the organizaon.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="24px"
						padding="42px 42px 60px 42px"
						border-width="1px"
						border-style="solid"
						background="#030303"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
					>
						<Image
							loading="lazy"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/usb-cable%201.svg?v=2021-04-07T20:46:03.028Z"
							object-position="0% 0%"
							margin="10px 0px 30px -9px"
							filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
						/>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="#ffffff"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							USB ports
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Monitoring of operaons with removable media. Blocking USB devices by class and Hardware ID. Restricng recording on USB and CD.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="24px"
						padding="42px 42px 60px 42px"
						border-width="1px"
						border-style="solid"
						background="#030303"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
					>
						<Image
							loading="lazy"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/document-printer%201.svg?v=2021-04-07T15:14:34.584Z"
							object-position="0% 0%"
							margin="10px 0px 30px -9px"
							filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
						/>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="#ffffff"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Printing
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Registraon of print facts: user, me, computer, number of pages, etc. Creaon of shadow copies of printed files.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="24px"
						padding="42px 42px 60px 42px"
						border-width="1px"
						border-style="solid"
						background="#030303"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
					>
						<Image
							loading="lazy"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Servers,%20Databases,%20Network%201.svg?v=2021-04-07T20:55:21.807Z"
							object-position="0% 0%"
							margin="10px 0px 30px -9px"
							filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
						/>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="#ffffff"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Network acvity
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Registraon of network connecons and control of encrypted traffic, website visits, and user searches.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="24px"
						padding="42px 42px 60px 42px"
						border-width="1px"
						border-style="solid"
						background="#030303"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
					>
						<Image
							loading="lazy"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Phone,%20Call.3%201.svg?v=2021-04-07T20:55:43.837Z"
							object-position="0% 0%"
							margin="10px 0px 30px -9px"
							filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
						/>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="#ffffff"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							SIP telephony
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Registraon of facts and duraon of calls, intercepon of SMS-messages.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
					{"        "}
					<Box
						border-radius="24px"
						padding="42px 42px 60px 42px"
						border-width="1px"
						border-style="solid"
						background="#030303"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="10px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
					>
						<Image
							loading="lazy"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Webcam%201.svg?v=2021-04-07T20:56:08.549Z"
							object-position="0% 0%"
							margin="10px 0px 30px -9px"
							filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
						/>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="#ffffff"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Audio and video registraon
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Environment recording from microphones, desktop video, screenshots of screens and snapshots from webcam.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#000000" padding="36px 0 68px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text
				font="normal 700 72px/73px --fontFamily-googleInter"
				margin="0px 0px 0px 0px"
				display="inline-block"
				color="#ffffff"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				width="50%"
				lg-font="normal 700 48px/73px --fontFamily-googleInter"
			>
				Investigation of incidents
			</Text>
		</Section>
		<Section padding="90px 0 90px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonleft-min.png?v=2021-04-29T08:46:33.454Z) left 20%/35% no-repeat,#000000" md-padding="30px 0 30px 0">
			<Override slot="SectionContent" max-width="1300px" align-items="center" width="90%" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				<StackItem width="45%" display="flex" lg-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						padding="20px 42px 42px 42px"
						lg-align-items="center"
						sm-padding="20px 0px 42px 0px"
					/>
					{"        "}
					<Text
						font="normal 600 36px/45px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#ffffff"
						lg-text-align="center"
						sm-font="normal 600 32px/35px --fontFamily-googleInter"
					>
						StaffCop is a me machine!
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-text-align="center"
					>
						You can refer back to any point in time, to view the actions of an employee at the specified time and what events led to the possibility of an incident
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-text-align="center"
					>
						The mullevel report designer allows you to get the required data set “on the go”. Searching for keywords and regular phrases will reduce the invesgaon me from the computer microphone to a minimum and will also allow you to hear what was happening at the right moment.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="55%" display="flex" lg-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="space-between"
						padding="0px 0px 0px 0px"
						lg-align-items="center"
						position="relative"
					/>
					<Box
						width="100%"
						position="absolute"
						top="0px"
						left="auto"
						bottom="auto"
						background="linear-gradient(278.48deg,#000000 22.4%,rgba(0, 0, 0, 0.75) 41.4%,rgba(196, 196, 196, 0) 86.67%,rgba(126, 126, 126, 0.08) 116.62%)"
						right="auto"
						height="100%"
					/>
					<Image
						loading="lazy"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/staticphoto.png?v=2021-04-29T08:36:55.625Z"
						width="100%"
						height="auto"
						margin="0px 0px 0px -2px"
						padding="0px 0px 0px 0px"
						max-height="592px"
					/>
					{"            "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section padding="90px 0 90px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonright-min.png?v=2021-04-29T08:46:23.538Z) right 20%/35% no-repeat,#000000" md-padding="30px 0 30px 0">
			<Override slot="SectionContent" max-width="1300px" align-items="center" width="90%" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				<StackItem
					width="55%"
					display="flex"
					lg-width="100%"
					md-width="100%"
					lg-order="1"
				>
					<Override
						slot="StackItemContent"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-end"
						justify-content="flex-end"
						padding="0px 0px 0px 0px"
						lg-align-items="center"
						position="relative"
					/>
					<Box
						width="100%"
						position="absolute"
						top="0px"
						left="0px"
						bottom="auto"
						background="linear-gradient(278.46deg,rgba(126, 126, 126, 0) 0%,rgba(196, 196, 196, 0) 47.1%,rgba(0, 0, 0, 0.75) 69.5%,#000000 85.2%)"
						right="auto"
						height="100%"
					/>
					<Image
						loading="lazy"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/quisc.png?v=2021-04-29T08:36:44.700Z"
						width="100%"
						height="auto"
						margin="0px -2px 0px 0px"
						padding="0px 0px 0px 0px"
						max-height="592px"
					/>
					{"            "}
				</StackItem>
				<StackItem width="45%" display="flex" lg-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						padding="20px 42px 42px 42px"
						lg-align-items="center"
						sm-padding="20px 0px 42px 0px"
					/>
					{"        "}
					<Text
						font="normal 600 36px/45px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#ffffff"
						lg-text-align="center"
					>
						Quick! Even with big data
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-text-align="center"
					>
						You can refer back to any point in time, to view the actions of an employee at the specified time and what events led to the possibility of an incident
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-text-align="center"
					>
						The unique combinaon of PostgreSQL and ClickHouse provides tremendous data processing speed. You don’t need to set the report generaon overnight, only to find out that there was nothing you need – invesgate here and now!
					</Text>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section padding="90px 0 90px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonleft-min.png?v=2021-04-29T08:46:33.454Z) left 20%/35% no-repeat,#000000" md-padding="30px 0 30px 0">
			<Override slot="SectionContent" max-width="1300px" align-items="center" width="90%" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				<StackItem width="45%" display="flex" lg-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						padding="20px 42px 42px 42px"
						lg-align-items="center"
						sm-padding="20px 0px 42px 0px"
					/>
					{"        "}
					<Text
						font="normal 600 36px/45px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#ffffff"
						lg-text-align="center"
					>
						Relaonship graphs
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 42px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-text-align="center"
					>
						A clear view of the communicaons between employees and their nature. A scheme for migrang files within an organizaon and transferring them outside.
					</Text>
					<Text
						font="normal 600 36px/45px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#ffffff"
						lg-text-align="center"
					>
						Anomaly detecon
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-text-align="center"
					>
						Linear, pie, histograms and analycal tables, to help present the data in a convenient form.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="55%" display="flex" lg-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="space-between"
						padding="0px 0px 0px 0px"
						lg-align-items="center"
						position="relative"
					/>
					<Box
						width="100%"
						position="absolute"
						top="0px"
						left="auto"
						bottom="auto"
						background="linear-gradient(278.48deg,#000000 22.4%,rgba(0, 0, 0, 0.75) 41.4%,rgba(196, 196, 196, 0) 86.67%,rgba(126, 126, 126, 0.08) 116.62%)"
						right="auto"
						height="100%"
					/>
					<Image
						loading="lazy"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mokap1.png?v=2021-04-29T08:35:58.235Z"
						width="100%"
						height="auto"
						margin="0px 0px 0px -2px"
						padding="0px 0px 0px 0px"
						max-height="592px"
					/>
					{"            "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section padding="90px 0 90px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonright-min.png?v=2021-04-29T08:46:23.538Z) right 20%/35% no-repeat,#000000" md-padding="30px 0 30px 0">
			<Override slot="SectionContent" max-width="1300px" align-items="center" width="90%" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				<StackItem
					width="55%"
					display="flex"
					lg-width="100%"
					md-width="100%"
					lg-order="1"
				>
					<Override
						slot="StackItemContent"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-end"
						justify-content="flex-end"
						padding="0px 0px 0px 0px"
						lg-align-items="center"
						position="relative"
					/>
					<Box
						width="100%"
						position="absolute"
						top="0px"
						left="0px"
						bottom="auto"
						background="linear-gradient(278.46deg,rgba(126, 126, 126, 0) 0%,rgba(196, 196, 196, 0) 47.1%,rgba(0, 0, 0, 0.75) 69.5%,#000000 85.2%)"
						right="auto"
						height="100%"
					/>
					<Image
						loading="lazy"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/diagrama.png?v=2021-04-29T08:35:43.745Z"
						width="100%"
						height="auto"
						margin="0px -2px 0px 0px"
						padding="0px 0px 0px 0px"
						max-height="592px"
					/>
					{"            "}
				</StackItem>
				<StackItem width="45%" display="flex" lg-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						padding="20px 42px 42px 42px"
						lg-align-items="center"
						sm-padding="20px 0px 42px 0px"
					/>
					{"        "}
					<Text
						font="normal 600 36px/45px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#ffffff"
						lg-text-align="center"
					>
						Thermal diagrams
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 47px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-text-align="center"
					>
						Convenient for determining the intensity of acvity and events concerning employees.
					</Text>
					<Text
						font="normal 600 36px/45px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#ffffff"
						lg-text-align="center"
					>
						Dimension cards
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 42px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-text-align="center"
					>
						Summary reports displaying the characteriscs of the subject and the events associated with it. Employee, file, site cards, etc
					</Text>
					<Text
						font="normal 600 36px/45px --fontFamily-googleInter"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#ffffff"
						lg-text-align="center"
					>
						Data export and prinng
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(255, 255, 255, 0.6)"
						lg-text-align="center"
					>
						Summary reports displaying the characteriscs of the subject and the events associated with it. Employee, file, site cards, etc
					</Text>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section padding="70px 0 52px 0" background="#000000" md-padding="30px 0 30px 0">
			<Override slot="SectionContent" max-width="none" align-items="center" width="90%" />
			<Text
				font="normal 700 72px/72px --fontFamily-googleInter"
				margin="0px 0px 18px 0px"
				display="inline-block"
				color="#ffffff"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				width="65%"
				lg-font="normal 700 48px/52px --fontFamily-googleInter"
			>
				Remote administration and it audit
			</Text>
			<Text
				font="normal 400 18px/160% --fontFamily-googleInter"
				color="#9B9FAA"
				letter-spacing="-0.01em"
				margin="8px 0px 0px 0px"
				text-align="center"
				width="50%"
				md-width="80%"
				sm-font="normal 400 16px/140% --fontFamily-googleInter"
			>
				Monitoring processes and applicaons, system events and connecng to a remote desktop make StaffCopEnterprise an indispensable assistant for an IT specialist.
			</Text>
		</Section>
		<Section padding="0px 0 0px 0" background="#000000">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Section padding="30px 0 90px 0" lg-padding="70px 0 70px 0">
				<Override slot="SectionContent" max-width="1200px" align-items="center" />
				<Stack
					width="100%"
					margin="0px 0px 0px 0px"
					background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/greenfonm-min.png?v=2021-04-29T08:46:12.583Z) center/cover no-repeat,#030303"
					position="relative"
					align-items="center"
					justify-content="center"
					overflow-y="hidden"
					gap="0px"
					border-radius="30px"
					border-color="rgba(255, 255, 255, 0.05"
					border-width="1px"
					border-style="solid"
				>
					{"    "}
					<Box
						width="100%"
						position="absolute"
						bottom="0px"
						top="auto"
						height="100%"
						background="linear-gradient(20deg,#000000 0%,rgba(0, 0, 0, 0.75) 43.8%,rgba(196, 196, 196, 0) 79.1%,rgba(126, 126, 126, 0) 111.17%)"
						left="auto"
						right="auto"
						z-index="5"
						max-height="285px"
						max-width="768px"
						border-radius="15px 0px 0px 0px"
						lg-display="none"
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
							sm-padding="20px 0px 0px 0px"
							md-padding="50px 0px 0px 0px"
							lg-width="100%"
							border-radius="6px"
							border-width="0px"
						/>
						{"        "}
						<Text
							font="normal 700 45px/56px --fontFamily-googleInter"
							margin="0px 0px 54px 0px"
							display="inline-block"
							color="#ffffff"
							text-align="center"
							width="70%"
							lg-width="90%"
							md-font="normal 700 30px/40px Inter, sans-serif"
							sm-font="normal 700 20px/30px Inter, sans-serif"
							lg-font="normal 700 40px/46px --fontFamily-googleInter"
							sm-margin="0px 0px 24px 0px"
						>
							All data is consolidated in one place, no more wasted me with logs and proxies
						</Text>
						<Box
							margin="0px 0px 67px 0px"
							display="flex"
							sm-flex-direction="column"
							sm-align-items="center"
							sm-justify-content="center"
							sm-margin="0px 0px 27px 0px"
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
								href="/pricing/"
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
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							color="#ffffff"
							letter-spacing="-0.01em"
							margin="8px 0px 55px 0px"
							text-align="center"
							width="50%"
							md-width="80%"
							sm-font="normal 300 16px/140% --fontFamily-googleInter"
							sm-margin="0px 0px 55px 0px"
						>
							Register and block the connecon of USB devices by device class. Control of fil  operaons and shadow copies of files copied to USB, read-only mode for removable
						</Text>
						<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/bottomimg.png?v=2021-04-07T22:06:29.089Z" nout-width="70%" />
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
			</Section>
			<Section background="#000000 url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonchikgren.png?v=2021-04-29T08:29:09.007Z) center center/cover no-repeat" border-color="#161616" padding="48px 0 90px 0">
				<Override slot="SectionContent" max-width="1200px" position="relative" align-items="center" />
				<Text
					font="normal 700 72px/73px --fontFamily-googleInter"
					margin="0px 0px 60px 0px"
					display="inline-block"
					color="#ffffff"
					letter-spacing="-2%"
					text-align="center"
					md-font="normal 700 30px/40px Inter, sans-serif"
					sm-font="normal 700 24px/30px Inter, sans-serif"
					lg-font="normal 700 48px/73px --fontFamily-googleInter"
				>
					Controllingemployees on GNY/Linux
				</Text>
				<Stack margin="0px 0px 0px 0px" justify-content="center">
					{"    "}
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrow-circle-login%201.svg?v=2021-04-07T23:15:44.596Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Login registration
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Users are registered by the system each me they log in and log out. The log includes users who log in locally and remotely, including SSH connecons.
							</Text>
						</Box>
						{"    "}
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/usb-flash-drive-1%201.svg?v=2021-04-07T23:17:03.245Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Registering USB Devices
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Flash drives, printers and any other peripheral devices are registered into the log. The administrator can analyze where and when the media was connected and track which computers the devices of interest were connected to.
							</Text>
						</Box>
						{"    "}
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Panorama,%20Photo,%20Image%201.svg?v=2021-04-07T23:17:38.631Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Screenshots
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								To ensure integrity of business flows and informaon security for banks and financial organizaons.
							</Text>
						</Box>
						{"    "}
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Chrome%201.svg?v=2021-04-07T23:24:47.950Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								History and mes of website visits
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								The system registers website visits in tabs of Chrome, Firefox and browsers based on them. In addion, the system calculates the me spent on websites.
							</Text>
						</Box>
						{"    "}
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/programming-code-folder%201.svg?v=2021-04-07T23:25:03.065Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								File operaons
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								StaffCop registers file operaons: read, write, delete, create and rename. Creaon of shadow copies.
							</Text>
						</Box>
						{"    "}
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/clock-time%201.svg?v=2021-04-07T23:25:16.779Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Applicaon Acvity Time
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								The system records the user’s upme in applicaons. From the collected data, a report on the producvity of employees is generated according to the specified criteria. The report data is compared with screenshots by me stamps...
							</Text>
						</Box>
						{"    "}
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/input-password-protectionnnn.svg?v=2021-04-07T23:27:24.867Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Keylogger and registering bash commands
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								StaffCop supports intercepon of keystrokes at the core level to control the terminal of servers, as well as intercepon of X-sessions keyboard.
							</Text>
						</Box>
						{"    "}
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/business-chart-searchhhh.svg?v=2021-04-07T23:27:48.920Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Monitoring configurable log files usage
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Registraon of facts and duraon of calls, intercepon of SMS-messages.
							</Text>
						</Box>
						{"    "}
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mic-recccccc.svg?v=2021-04-07T23:27:35.842Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Microphone recording
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Environment recording from microphones, desktop video, screenshots of screens and snapshots from webcam.
							</Text>
						</Box>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
				<Button
					id="hider"
					position="relative"
					z-index="9"
					type="button"
					background="rgba(17, 74, 202, 0)"
					border-color="rgba(255, 255, 255, 0.1)"
					border-width="2px"
					border-style="solid"
					border-radius="40px"
					font="--menu"
					padding="24px 36px 24px 36px"
					transition="-webkit-transition: all .3s;  transition: all .3s"
					hover-background="--color-primary"
					margin="-90px 0px 0px 0px"
				>
					Show more advantages
				</Button>
				<Box
					id="content"
					position="absolute"
					bottom="0px"
					left="auto"
					background="linear-gradient(180deg,rgba(0, 0, 0, 0) 1.09%,rgba(0, 0, 0, 0) 16.2%,#000000 71.4%)"
					width="100%"
					height="750px"
					z-index="3"
					top="auto"
					right="auto"
				/>
			</Section>
			<Section padding="70px 0 70px 0">
				<Override slot="SectionContent" max-width="1200px" background="#FAFCFF" border-radius="30px" />
				<Stack margin="0px 0px 0px 0px" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/backborder-min.png?v=2021-04-29T08:55:12.041Z) right/auto no-repeat scroll padding-box">
					{"    "}
					<StackItem width="56%" display="flex" md-width="80%" sm-width="100%">
						<Override
							slot="StackItemContent"
							align-items="center"
							padding="0px 0px 0px 90px"
							md-padding="0px 0px 0px 20px"
							sm-padding="0px 0px 0px 0px"
						/>
						{"        "}
						<Text
							font="normal 700 24px/28px --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							md-font="normal 700 20px/28px --fontFamily-googleInter"
							sm-text-align="center"
						>
							<Span color="#E87F1F">
								Astra Linux Special Editon
							</Span>
							{" "}special purpose operang system compability cerficate Included in The Unified Register of Russian Soware under No. 3337
						</Text>
						{"    "}
					</StackItem>
					{"    "}
					<StackItem width="44%" display="flex" md-width="20%" sm-width="100%">
						<Override slot="StackItemContent" justify-content="center" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/lunix.svg?v=2021-04-07T23:50:08.727Z" margin="0px 0px 0px -10px" />
						{"            "}
					</StackItem>
				</Stack>
			</Section>
			<Section background="#000000 url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/redbakcground.png?v=2021-04-29T08:31:38.223Z) center center/80% no-repeat" border-color="#161616" padding="70px 0 70px 0">
				<Override slot="SectionContent" max-width="1200px" position="relative" align-items="center" />
				<Text
					font="normal 700 72px/73px --fontFamily-googleInter"
					margin="0px 0px 21px 0px"
					display="inline-block"
					color="#ffffff"
					letter-spacing="-2%"
					text-align="center"
					md-font="normal 700 30px/40px Inter, sans-serif"
					sm-font="normal 700 24px/30px Inter, sans-serif"
					lg-font="normal 700 48px/52px --fontFamily-googleInter"
				>
					9 important reasons
					<br />
					to choose staffcop
				</Text>
				<Text
					font="normal 400 18px/160% --fontFamily-googleInter"
					color="#9B9FAA"
					letter-spacing="-0.01em"
					margin="8px 0px 70px 0px"
					text-align="center"
					width="50%"
					md-width="80%"
					sm-font="normal 400 16px/140% --fontFamily-googleInter"
				>
					To ensure integrity of business flows and informaon
					<br />
					security for banks and financial organizaons
				</Text>
				<Stack margin="0px 0px 0px 0px" justify-content="center">
					{"    "}
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/media-library-folder%203.svg?v=2021-04-08T00:08:36.544Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Users are registered by the system each me they log in and log out. The log includes users who log in locally and remotely, including SSH connecons.
							</Text>
						</Box>
						{"    "}
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Speedometer%202.svg?v=2021-04-08T00:08:44.977Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Fast work on large amounts of data using modern ClickHouse and PostgreSQL databases based on OLAP cubes technology
							</Text>
						</Box>
						{"    "}
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/monitor-list-hand-select%201.svg?v=2021-04-08T00:08:53.758Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Monitoring and managing workplaces from a single web interface, the ability to simply and safely organize access from anywhere on the Internet.
							</Text>
						</Box>
						{"    "}
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/headphones-support%201.svg?v=2021-04-08T00:19:43.953Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Detailed documentaon, prompt and competent technical support. The project team provides full support from the inial tesng phase.
							</Text>
						</Box>
						{"    "}
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Servers,%20Databases,%20Computer%201.svg?v=2021-04-08T00:19:55.231Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Work in any network infrastructure – suitable for monitoring a distributed branch network, remote offices and employees.
							</Text>
						</Box>
						{"    "}
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/settings-select%201.svg?v=2021-04-08T00:20:04.915Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Possibility of customizaon to specific requirements, integraon with other systems and customer’s business processes.
							</Text>
						</Box>
						{"    "}
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/linux%201.svg?v=2021-04-08T00:24:59.937Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Unique monitoring funcons of workstaons and terminals of servers running MacOS, GNU/Linux systems – expands the control capabilies.
							</Text>
						</Box>
						{"    "}
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Servers,%20Databases,%20Computer%201.svg?v=2021-04-08T00:19:55.231Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Work in any network infrastructure – suitable for monitoring a distributed branch network, remote offices and employees.
							</Text>
						</Box>
						{"    "}
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/money-bag-percent%201.svg?v=2021-04-08T00:25:13.688Z"
								object-position="0% 0%"
								margin="10px 0px 30px -9px"
								filter="drop-shadow(0px 5px 17px rgba(28, 102, 244, 0.69))"
							/>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Minimal hardware requirements, reasonable cost, and perpetual licenses, resulng in low acquision, implementaon and operang costs.
							</Text>
						</Box>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
			</Section>
			<Section border-color="#161616" padding="70px 0 70px 0" background="#000000">
				<Override slot="SectionContent" max-width="1200px" position="relative" align-items="center" />
				<Text
					font="normal 700 72px/73px --fontFamily-googleInter"
					margin="0px 0px 70px 0px"
					display="inline-block"
					color="#ffffff"
					letter-spacing="-2%"
					text-align="center"
					md-font="normal 700 30px/40px Inter, sans-serif"
					sm-font="normal 700 24px/30px Inter, sans-serif"
					lg-font="normal 700 48px/73px --fontFamily-googleInter"
				>
					Pilot project
				</Text>
				<Stack margin="0px 0px 0px 0px" justify-content="center">
					{"    "}
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Speedometer%202.svg?v=2021-04-08T00:08:44.977Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Fast
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Users are registered by the system each me they log in
								<br />
								and log out. The log includes users who log in locally and
								<br />
								remotely, including SSH connecons.
							</Text>
						</Box>
						{"    "}
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Cursor,%20Select,%20Hand,%20Double%20Click%201.svg?v=2021-04-08T00:30:56.465Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Easy
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Skype, ICQ, Jabber (XMPP), MSN and others.Using the keylogger – applicaon/site – screenshot link, you can track the correspondence of any instant messengers, chats and other communicaons over the Internet.
							</Text>
						</Box>
						{"    "}
					</StackItem>
					<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="flex-start" />
						{"        "}
						<Box
							border-radius="24px"
							padding="42px 42px 42px 42px"
							border-width="1px"
							border-style="solid"
							background="#030303"
							height="100%"
							transition=" -webkit-transition: all .6s;  transition: all .6s"
							hover-transform="translateY(-10px)"
							md-display="flex"
							md-flex-direction="column"
							sm-padding="10px 20px 20px 20px"
							border-color="rgba(255, 255, 255, 0.05)"
							display="flex"
							flex-direction="column"
							align-items="flex-start"
						>
							<Image loading="lazy" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/group-elements-ticket%201.svg?v=2021-04-08T00:31:05.109Z" object-position="0% 0%" margin="10px 0px 30px -9px" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 18px 0px"
								display="inline-block"
								color="#ffffff"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Empowering
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								You will be able to immediately evaluate the whole range of tasks to be solved and make the right decision.
							</Text>
						</Box>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
			</Section>
			<Section padding="30px 0 112px 0" lg-padding="70px 0 70px 0">
				<Override slot="SectionContent" max-width="1200px" align-items="center" />
				<Stack
					width="100%"
					margin="0px 0px 0px 0px"
					position="relative"
					overflow-y="hidden"
					gap="0px"
					border-radius="30px"
					border-color="rgba(255, 255, 255, 0.05"
					border-width="1px"
					border-style="solid"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonrainbow-min.webp?v=2021-04-29T08:55:34.005Z) 0% 0% /auto repeat scroll padding-box"
					lg-overflow-x="hidden"
				>
					{"    "}
					<StackItem width="50%" display="flex" padding="16px 16px 16px 16px" lg-width="100%">
						<Override
							slot="StackItemContent"
							align-items="flex-start"
							justify-content="center"
							position="relative"
							z-index="2"
							flex-direction="column"
							padding="108px 0px 108px 78px"
							lg-padding="40px 0px 40px 40px"
							sm-padding="30px 30px 30px 30px"
							md-padding="40px 0px 40px 26px"
							lg-width="100%"
							border-radius="6px"
							border-width="0px"
							sm-text-align="center"
						/>
						{"        "}
						<Text
							font="normal 700 45px/56px --fontFamily-googleInter"
							margin="0px 0px 24px 0px"
							display="inline-block"
							color="#ffffff"
							lg-width="90%"
							md-font="normal 700 30px/40px Inter, sans-serif"
							sm-font="normal 700 20px/30px Inter, sans-serif"
							sm-text-align="center"
							sm-width="100%"
						>
							Test for free for up to 3 months on any number of stations
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							color="#9B9FAA"
							letter-spacing="-0.01em"
							margin="8px 0px 48px 0px"
							md-width="80%"
							sm-font="normal 300 16px/140% --fontFamily-googleInter"
							lg-margin="8px 0px 98px 0px"
							md-margin="8px 0px 55px 0px"
							sm-text-align="center"
							sm-width="100%"
							sm-margin="8px 0px 24px 0px"
						>
							Fully funconal version. Technical support throughout the full project duraon
						</Text>
						<Box
							margin="0px 0px 0px 0px"
							display="flex"
							sm-flex-direction="column"
							sm-align-items="center"
							sm-justify-content="center"
						>
							<Link
								href="/request-demo/"
								padding="16px 38px 16px 38px"
								border-radius="40px"
								text-decoration-line="initial"
								color="#111111"
								font="600 18px/22px --fontFamily-googleInter"
								hover-background="#409EEB"
								transition="-webkit-transition: all .3s;  transition: all .3s"
								margin="0px 18px 0px 0px"
								position="relative"
								z-index="4"
								md-padding="16px 20px 16px 20px"
								sm-padding="16px 12px 16px 12px"
								sm-font="500 15px/22px Inter, sans-serif"
								sm-margin="0px 0px 18px 0px"
								background="#ffffff"
							>
								Request demo
							</Link>
							<Link
								href="/pricing/"
								padding="16px 68px 16px 68px"
								border-radius="40px"
								border-color="#ffffff"
								border-width="2px"
								border-style="solid"
								text-decoration-line="initial"
								color="#ffffff"
								font="600 18px/22px --fontFamily-googleInter"
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
						{"    "}
					</StackItem>
					<StackItem
						width="50%"
						display="flex"
						padding="16px 16px 16px 16px"
						lg-width="40%"
						lg-position="absolute"
						lg-bottom="0px"
						lg-right="-8px"
						lg-left="auto"
						lg-top="auto"
						sm-width="60%"
					>
						<Override
							slot="StackItemContent"
							align-items="flex-end"
							justify-content="flex-end"
							position="relative"
							z-index="2"
							flex-direction="column"
							padding="0px 0px 0px 0px"
							lg-padding="80px 0px 0px 0px"
							sm-padding="50px 0px 0px 0px"
							md-padding="50px 0px 0px 0px"
							lg-width="100%"
							border-radius="6px"
							border-width="0px"
							height="100%"
						/>
						{"        "}
						<Image
							loading="lazy"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/lastimg.png?v=2021-04-08T00:44:51.033Z"
							width="100%"
							nout-width="70%"
							margin="0px 7px 0px 0px"
						/>
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
						width="36%"
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
					<StackItem width="21.3%" display="flex" lg-width="33.333%" md-width="100%">
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
							margin="0px 0px 21px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							Company
						</Link>
						<Link
							href="/pricing/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 21px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							Pricing
						</Link>
						<Link
							href="/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 21px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
							md-text-align="center"
						>
							Leadership Team
						</Link>
						<Link
							href="/why-us/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 21px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							Why Staffcop?
						</Link>
						<Link
							href="/partners/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 21px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							Our Partners
						</Link>
						<Link
							href="/white-papers/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 21px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							White Papers
						</Link>
						{"    "}
					</StackItem>
					<StackItem
						width="21.3%"
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
							href="https://docs.staffcop.ru/en/"
							color="rgba(255, 255, 255, 0.6)"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 21px 0px"
							hover-color="#ffffff"
							transition="all 1s ease 0s"
						>
							Documentation
						</Link>
						{"    "}
					</StackItem>
					<StackItem
						width="21.3%"
						display="flex"
						lg-width="33.333%"
						md-width="50%"
						sm-width="100%"
					>
						<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" />
						{"        "}
						<Text font="normal 700 18px/160% --fontFamily-googleInter" margin="0px 0px 27px 0px" display="inline-block" color="rgba(255, 255, 255,1)">
							SUPPORT
						</Text>
						<Box display="flex" align-items="center">
							<Icon category="fa" icon={FaRegLifeRing} color="rgba(255, 255, 255, 0.6)" margin="0px 10px 0px 0px" />
							<Link
								href="/support/"
								color="rgba(255, 255, 255, 0.6)"
								text-decoration-line="initial"
								font="normal 300 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								hover-color="#ffffff"
								transition="all 1s ease 0s"
							>
								Support Center
							</Link>
						</Box>
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
		<Components.ShowBox />
		<Components.GoogleAnalytics1 />
		<Components.GoogleAnalytics2 />
		<Components.Video />
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
			<style place={"endOfHead"} rawKey={"606b01d8eaad287b684319f3"}>
				{".arrow-menu {\ncolor: #fff !important;\n}\n.menu-trigger {\ncolor: #fff !important;\n}"}
			</style>
			<script place={"endOfBody"} rawKey={"608468b60e18e2b62399f34c"} />
		</RawHtml>
	</Theme>;
});