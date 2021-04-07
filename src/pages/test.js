import React from "react";
import theme from "theme";
import { Theme, Link, Box, Image, Text, Icon, Span, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Menu, Stack, Section, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { GoPrimitiveDot } from "react-icons/go";
import { FaRegLifeRing } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"test"} />
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
		<Box
			position="absolute"
			width="100%"
			height="1800px"
			background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonstar.png?v=2021-04-05T13:14:22.721Z) 0% 0% /cover no-repeat scroll padding-box"
			z-index="3"
			bottom="auto"
			left="auto"
			right="auto"
			top="0px"
		/>
		<Box
			position="absolute"
			width="100%"
			height="1300px"
			background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonbuble.png?v=2021-04-05T13:38:55.532Z) center center/90% no-repeat"
			z-index="3"
			right="0px"
			bottom="auto"
			left="auto"
			filter="blur(154px)"
			margin="350px 0px 0px 0px"
		/>
		<Section
			background="#020202  url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonstar.png?v=2021-04-05T13:14:22.721Z) 0% 0% /cover no-repeat scroll padding-box"
			padding="15px 0 10px 0"
			sm-padding="12px 0 12px 0"
			lg-padding="15px 0 15px 0"
			position="fixed"
			z-index="6"
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
			padding="170px 0 30px 0"
			background="linear-gradient(180deg,rgba(2, 2, 2, 0.22) 0%,rgba(02, 02, 02, 0.35) 46.88%,#020202 100%),#000000 url() center -693px/cover repeat"
			hd-background="#020202 url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/ebuchayasetka.svg?v=2020-10-21T00:06:31.897Z) center -693px/2060px repeat"
			width="100%"
			lg-padding="140px 0 70px 0"
			md-padding="120px 0 40px 0"
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
			<Text font="normal bold 66px/1.2 --fontFamily-googleInter" color="#ffffff" margin="0px 0px 10px 0px" text-align="center">
				For the banking and
				<br />
				{" "}financial sectors{"\n\n"}
			</Text>
			<Text
				font="normal 300 18px/160% --fontFamily-googleInter"
				color="#9B9FAA"
				letter-spacing="-0.01em"
				margin="8px 0px 63px 0px"
				text-align="center"
				width="49%"
				md-width="80%"
				sm-font="normal 300 16px/140% --fontFamily-googleInter"
			>
				A soware package for
monitoring informaon,
user acons and system events on workcomputers
and terminal servers{"\n\n\n"}
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
			/>
			<Text font="normal bold 66px/1.2 --fontFamily-googleInter" color="#ffffff" margin="0px 0px 10px 0px" text-align="center">
				Monitoring. Analysis.{" "}
				<br />
				Notification. Blocking.{"\n\n"}
			</Text>
			<Text
				font="normal 300 18px/160% --fontFamily-googleInter"
				color="#9B9FAA"
				letter-spacing="-0.01em"
				margin="8px 0px 83px 0px"
				text-align="center"
				width="49%"
				md-width="80%"
				sm-font="normal 300 16px/140% --fontFamily-googleInter"
			>
				To ensure integrity of business flows and informaon{"\n"}
				<br />
				security for banks and financial organizaons{"\n\n"}
			</Text>
			<Text
				font="normal 700 34px/45px --fontFamily-googleInter"
				color="#ffffff"
				letter-spacing="-0.01em"
				margin="8px 0px 0px 0px"
				text-align="center"
				md-width="80%"
				sm-font="normal 300 16px/140% --fontFamily-googleInter"
			>
				A software package for monitoring information,{" "}
				<br />
				user actions and system events on work{" "}
				<br />
				computers and terminal servers{"\n\n\n"}
			</Text>
		</Section>
		<Section background="#000000 url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonchik2.png?v=2021-04-06T20:27:06.978Z) center center/cover no-repeat" border-color="#161616" padding="24px 0 90px 0">
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
						sm-padding="10px 20px 20px 20px"
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
								Early detection of information security threats{"\n\n"}
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Early detection of information security threats{"\n\n"}
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
						sm-padding="10px 20px 20px 20px"
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
								Investigation of incidents{"\n\n"}
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
								of me{"\n\n"}
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
						sm-padding="10px 20px 20px 20px"
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
								Work time tracking Monitoring user activity on a PC{"\n\n"}
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								To ensure integrity of business flows and informaon security for banks and financial organizaons.{"\n\n"}
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
						sm-padding="10px 20px 20px 20px"
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
analysis{"\n\n"}
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								To ensure integrity of business flows and informaon security for banks and financial organizaons.{"\n\n"}
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
						sm-padding="10px 20px 20px 20px"
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
								Remote administration with or without{"\n"}
								<br />
								notice to the user Remote PC control{"\n\n"}
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
								of me{"\n\n"}
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
						sm-padding="10px 20px 20px 20px"
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
								Assessment of employee productivity{"\n\n"}
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								To ensure integrity of business flows and informaon security for banks and financial organizaons.{"\n\n"}
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
						sm-padding="10px 20px 20px 20px"
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
								Keylogger and registering bash commands{"\n\n"}
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								StaffCop supports intercepon of keystrokes at the core level to control the terminal of servers, as well as intercepon of X-sessions keyboard.{"\n\n"}
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
						sm-padding="10px 20px 20px 20px"
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
								Monitoring configurable log files usage{"\n\n"}
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Registraon of facts and duraon of calls, intercepon of SMS-messages.{"\n\n"}
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
						sm-padding="10px 20px 20px 20px"
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
								Microphone recording{"\n\n"}
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Environment recording from microphones, desktop video, screenshots of screens and snapshots from webcam.{"\n\n"}
							</Text>
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<Link
					href="/third-party-vendor-management/"
					padding="24px 36px 24px 36px"
					border-radius="40px"
					border-color="rgba(255, 255, 255, 0.1)"
					border-width="2px"
					border-style="solid"
					text-decoration-line="initial"
					color="#ffffff"
					font="--menu"
					hover-background="--color-primary"
					transition="-webkit-transition: all .3s;  transition: all .3s"
					position="relative"
					z-index="4"
					margin="-30px 0px 0px 0px"
				>
					Show more advantages{"\n\n\n\n"}
				</Link>
				{"    "}
			</Stack>
			<Box
				position="absolute"
				bottom="0px"
				left="auto"
				background="linear-gradient(180deg,rgba(0, 0, 0, 0) 1.09%,rgba(0, 0, 0, 0) 16.2%,#000000 60.5%)"
				width="100%"
				height="450px"
				z-index="3"
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
			>
				Compliance{"\n\n"}
			</Text>
			<Text
				font="normal 400 18px/160% --fontFamily-googleInter"
				color="#9B9FAA"
				letter-spacing="-0.01em"
				margin="8px 0px 60px 0px"
				text-align="center"
				width="55%"
				md-width="80%"
				sm-font="normal 300 16px/140% --fontFamily-googleInter"
			>
				Compliance is an increasingly complex task, requiring organizaons to manage mulple riskfactors across an evolving technology landscape, while also ensuring appropriate user behavior to meet the stringent requirements of today’s widely-accepted regulatory standards, such as GDPR, HIPAA, PCI DSS, ISO 27001, NIST and others.{"\n\n"}
			</Text>
		</Section>
		<Section padding="70px 0 70px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonchikblue.png?v=2021-04-06T00:09:01.506Z) no-repeat,#000000" md-padding="30px 0 30px 0">
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
			>
				Information security{"\n\n"}
			</Text>
			<Text
				font="normal 300 18px/160% --fontFamily-googleInter"
				color="#9B9FAA"
				letter-spacing="-0.01em"
				margin="8px 0px 60px 0px"
				text-align="center"
				width="49%"
				md-width="80%"
				sm-font="normal 300 16px/140% --fontFamily-googleInter"
			>
				StaffCop is built on modern data{"\n"}
				<br />
				intercepon and analysis technologies{"\n\n\n\n"}
			</Text>
			<Stack margin="0px 0px 0px 0px" width="100%">
				<StackItem width="45%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="space-between"
						padding="20px 42px 42px 42px"
						lg-align-items="center"
					/>
					{"        "}
					<Text
						font="normal 600 36px/45px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="#ffffff"
						lg-text-align="center"
					>
						Remote administration with or without notice to the user Remote PC control{"\n\n\n"}
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Icon category="go" icon={GoPrimitiveDot} color="--primary" size="16px" />
						<Text
							font="--lead"
							margin="0px 0px 0px 12px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
						>
							Document search by digital prints{"\n\n\n"}
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
						>
							Content analysis of documents{"\n\n"}
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
						>
							Searching through words and regular phrases{"\n\n\n"}
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
						>
							Morphology support{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" align-items="center" margin="0px 0px 43px 0px">
						<Icon category="go" icon={GoPrimitiveDot} color="--primary" size="16px" />
						<Text
							font="--lead"
							margin="0px 0px 0px 12px"
							display="inline-block"
							color="rgba(255, 255, 255, 0.6)"
							lg-text-align="center"
						>
							OCR – text recognion on images{"\n\n\n"}
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
						>
							Built-in and custom user diconaries{"\n\n\n"}
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
						>
							Definion of encrypted archives{"\n\n\n"}
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
						>
							Document search by digital prints{"\n\n\n\n"}
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
						>
							Mullevel interacve reports{"\n\n\n"}
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
						>
							Event Relaonship Graphs{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="55%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-radius="8px"
						flex-direction="column"
						align-items="flex-start"
						justify-content="space-between"
						padding="20px 42px 42px 42px"
						lg-align-items="center"
						position="relative"
					/>
					<Box
						width="100%"
						height="100%"
						position="absolute"
						top="0px"
						left="auto"
						right="auto"
						bottom="auto"
						background="linear-gradient(278.48deg,#000000 22.4%,rgba(0, 0, 0, 0.75) 41.4%,rgba(196, 196, 196, 0) 86.67%,rgba(126, 126, 126, 0.08) 116.62%)"
					/>
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/mokap1.png?v=2021-04-06T00:11:43.992Z" />
					{"        "}{"    "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section padding="70px 0 70px 0" background="#000000" md-padding="30px 0 30px 0">
			<Override slot="SectionContent" max-width="none" align-items="center" width="90%" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				<StackItem width="45%" display="flex" lg-width="50%" md-width="100%">
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
									width="64px"
									height="64px"
									src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Bell.svg?v=2021-04-07T01:09:17.281Z"
									padding="26px 27px 26px 27px"
									border-radius="60px"
								/>
							</Box>
						</Box>
					</Box>
					{"        "}{"    "}
				</StackItem>
				<StackItem width="45%" display="flex" lg-width="50%" md-width="100%">
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
						md-width="80%"
						sm-font="normal 300 16px/140% --fontFamily-googleInter"
					>
						StaffCop can nofy of violaon of security policies in the{"\n"}
						<br />
						admin panel and by e-mail. Analycal tables and graphs{"\n"}
						<br />
						Using the Filter Builder, it is easy to create a wide range{"\n"}
						<br />
						of bespoke policies that match your organizaon’s security{"\n"}
						<br />
						policies and assign alerts when they are triggered.{"\n\n"}
					</Text>
					{"        "}{"    "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section background="#000000 url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fonchik2.png?v=2021-04-06T20:27:06.978Z) center center/cover no-repeat" border-color="#161616" padding="24px 0 90px 0">
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
			>
				interception of all{"\n"}
				<br />
				channels and events{"\n\n"}
			</Text>
			<Text
				font="normal 400 18px/160% --fontFamily-googleInter"
				color="#9B9FAA"
				letter-spacing="-0.01em"
				margin="8px 0px 60px 0px"
				text-align="center"
				md-width="80%"
				sm-font="normal 300 16px/140% --fontFamily-googleInter"
				width="55%"
			>
				on workstaons and terminal servers{"\n\n"}
			</Text>
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
						sm-padding="10px 20px 20px 20px"
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
								Early detection of information security threats{"\n\n"}
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Early detection of information security threats{"\n\n"}
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
						sm-padding="10px 20px 20px 20px"
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
								Investigation of incidents{"\n\n"}
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
								of me{"\n\n"}
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
						sm-padding="10px 20px 20px 20px"
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
								Work time tracking Monitoring user activity on a PC{"\n\n"}
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								To ensure integrity of business flows and informaon security for banks and financial organizaons.{"\n\n"}
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
						sm-padding="10px 20px 20px 20px"
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
								User behavior analysis Automatic
analysis{"\n\n"}
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								To ensure integrity of business flows and informaon security for banks and financial organizaons.{"\n\n"}
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
						sm-padding="10px 20px 20px 20px"
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
								Remote administration with or without{"\n"}
								<br />
								notice to the user Remote PC control{"\n\n"}
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
								of me{"\n\n"}
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
						sm-padding="10px 20px 20px 20px"
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
								Assessment of employee productivity{"\n\n"}
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								To ensure integrity of business flows and informaon security for banks and financial organizaons.{"\n\n"}
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
						sm-padding="10px 20px 20px 20px"
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
								Keylogger and registering bash commands{"\n\n"}
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								StaffCop supports intercepon of keystrokes at the core level to control the terminal of servers, as well as intercepon of X-sessions keyboard.{"\n\n"}
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
						sm-padding="10px 20px 20px 20px"
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
								Monitoring configurable log files usage{"\n\n"}
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Registraon of facts and duraon of calls, intercepon of SMS-messages.{"\n\n"}
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
						sm-padding="10px 20px 20px 20px"
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
								Microphone recording{"\n\n"}
							</Text>
							<Text
								font="normal 400 18px/160% --fontFamily-googleInter"
								margin="0px 0px 0px 0px"
								display="inline-block"
								color="rgba(255, 255, 255, 0.6)"
								sm-font="normal 400 16px/140% Inter, sans-serif"
							>
								Environment recording from microphones, desktop video, screenshots of screens and snapshots from webcam.{"\n\n"}
							</Text>
						</Link>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
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
			<style place={"endOfHead"} rawKey={"606b01d8eaad287b684319f3"}>
				{".arrow-menu {\ncolor: #fff !important;\n}\n.menu-trigger {\ncolor: #fff !important;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});