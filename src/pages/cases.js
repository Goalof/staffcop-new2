import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"cases"} />
		<Helmet>
			<title>
				Solutions
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
			<Override slot="link2" color="--primary" />
		</Components.Header>
		<Section padding="150px 0 60px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)" lg-padding="120px 0 60px 0" md-padding="120px 0 30px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Text
				font="--headline2"
				margin="0px 0px 50px 20px"
				display="inline-block"
				letter-spacing="-2%"
				md-font="normal 700 30px/40px Inter, sans-serif"
				md-margin="0px 0px 20px 17px"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				color="rgba(19, 33, 42, 1)"
			>
				Cases
			</Text>
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
						href="/remote-employee-monitoring/"
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
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(10).svg?v=2020-10-28T15:43:13.518Z" margin="0px 0px 20px 0px" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 12px 0px"
								display="inline-block"
								color="--primary"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Remote employee monitoring{"\n\n"}
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
						href="/insider-threat-detection-and-prevention/"
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
							width="100%"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(11).svg?v=2020-10-28T18:13:46.820Z" margin="0px 0px 20px 0px" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 12px 0px"
								display="inline-block"
								color="--primary"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Insider threat detection{"\n\n"}
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
						href="/privileged-user-monitoring/"
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
							width="100%"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(9).svg?v=2020-10-28T15:43:13.527Z" margin="0px 0px 20px -4px" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 12px 0px"
								display="inline-block"
								color="--primary"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Privileged user monitoring{"\n\n"}
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
						href="/productivity-optimization/"
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
							width="100%"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(14).svg?v=2020-10-28T18:13:46.836Z" margin="10px 0px 30px 0px" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 12px 0px"
								display="inline-block"
								color="--primary"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Productivity optimization{"\n\n"}
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
						href="/third-party-vendor-management/"
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
							width="100%"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Groupqwewqewq.svg?v=2020-10-28T19:39:04.928Z" margin="10px 0px 48px 0px" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 12px 0px"
								display="inline-block"
								color="--primary"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Vendor management{"\n\n"}
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
						href="/compliance-management-auditing-and-monitoring/"
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
							width="100%"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Groupasdsadsadas.svg?v=2020-10-28T19:39:04.934Z" margin="0px 0px 39px -4px" />
							<Text
								font="normal 700 24px/140% --fontFamily-googleInter"
								margin="0px 0px 12px 0px"
								display="inline-block"
								color="--primary"
								sm-font="normal 600 20px/140% Inter, sans-serif"
							>
								Compliance{"\n\n"}
							</Text>
						</Box>
						{"    "}
					</Link>
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section padding="24px 0 24px 0" md-padding="24px 0 40px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				font="--headline2"
				margin="0px 0px 50px 0px"
				display="inline-block"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				md-margin="0px 0px 20px 0px"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				color="rgba(19, 33, 42, 1)"
			>
				By Industry
			</Text>
			<Stack margin="0px 0px 0px 0px" width="100%">
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
						background="linear-gradient(180deg,rgba(0, 0, 0, 0) 83.3%,rgba(0, 0, 0, 0.6) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fghgfhfg.png?v=2020-10-16T10:19:49.175Z) 0% 0% /cover no-repeat scroll padding-box"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						min-height="242px"
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
						<Override
							slot="Before image :hover"
							width="7px"
							height="12px"
							min-width="none"
							min-height="none"
						/>
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
								background="linear-gradient(180deg,rgba(0, 0, 0, 0) 83.3%,rgba(0, 0, 0, 0.6) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/tyreterter.png?v=2020-10-16T10:20:03.901Z) 0% 0% /cover no-repeat scroll padding-box"
								transition="-webkit-transition: all .3s;  transition: all .3s"
								border-radius="6px"
								lg-padding="68px 36px 30px 36px"
								min-height="242px"
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
									height="12px"
									width="7px"
									min-width="none"
									min-height="none"
								/>
								<Override slot="Before image :default" width="7px" height="12px" display="none" />
								<Override
									slot="Before image :hover"
									height="12px"
									width="7px"
									min-width="none"
									min-height="none"
								/>
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
								background="linear-gradient(180deg,rgba(0, 0, 0, 0) 83.3%,rgba(0, 0, 0, 0.6) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/cxvxcvcxv.png?v=2020-10-16T10:21:28.600Z) 0% 0% /cover no-repeat scroll padding-box"
								transition="-webkit-transition: all .3s;  transition: all .3s"
								border-radius="6px"
								lg-padding="68px 36px 30px 36px"
								min-height="242px"
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
								<Override
									slot="Before image :hover"
									width="7px"
									height="12px"
									min-width="none"
									min-height="none"
								/>
							</Components.Knopka>
							{"    "}
						</StackItem>
					</Stack>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 40px 0px" width="100%">
				{"    "}
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
								background="linear-gradient(180deg,rgba(0, 0, 0, 0) 83.3%,rgba(0, 0, 0, 0.6) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/wewtrthgbn.png?v=2020-10-28T19:23:40.105Z) 0% 0% /cover no-repeat scroll padding-box"
								transition="-webkit-transition: all .3s;  transition: all .3s"
								border-radius="6px"
								lg-padding="68px 36px 30px 36px"
								min-height="242px"
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
									href="/energy-and-utilities-sector-cyber-security/"
								/>
								<Override slot="Before Text2" font="normal 500 24px/29px --fontFamily-googleInter" margin="0px 0px 0px 0px" transition="-webkit-transition: all .5s;  transition: all .5s">
									Energy
								</Override>
								<Override slot="Before Text2 :default">
									Energy
								</Override>
								<Override slot="Before Text2 :hover" transform="translateY(-50px)" />
								<Override
									slot="Before image"
									src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z"
									height="12px"
									width="7px"
									min-width="none"
									min-height="none"
								/>
								<Override
									slot="Before image :default"
									height="12px"
									width="7px"
									min-width="0px"
									min-height="0px"
									display="none"
								/>
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
								background="linear-gradient(180deg,rgba(0, 0, 0, 0) 83.3%,rgba(0, 0, 0, 0.6) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/asdasdasdasdas.png?v=2020-10-28T19:23:50.030Z) 0% 0% /cover no-repeat scroll padding-box"
								transition="-webkit-transition: all .3s;  transition: all .3s"
								border-radius="6px"
								lg-padding="68px 36px 30px 36px"
								min-height="242px"
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
									href="/retail-and-ecommerce-cyber-security/"
								/>
								<Override slot="Before Text2" font="normal 500 24px/29px --fontFamily-googleInter" margin="0px 0px 0px 0px" transition="-webkit-transition: all .5s;  transition: all .5s">
									Retail & Ecommerce
								</Override>
								<Override slot="Before Text2 :default">
									Retail & Ecommerce
								</Override>
								<Override slot="Before Text2 :hover" transform="translateY(-50px)" />
								<Override
									slot="Before image"
									src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z"
									width="7px"
									height="12px"
									min-width="0px"
									min-height="0px"
								/>
								<Override slot="Before image :default" display="none" />
							</Components.Knopka>
							{"    "}
						</StackItem>
					</Stack>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="flex-end"
						padding="68px 150px 0px 36px"
						background="linear-gradient(180deg,rgba(0, 0, 0, 0) 83.3%,rgba(0, 0, 0, 0.6) 100%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/charlesasdasde.png?v=2020-10-28T19:24:02.171Z) 0% 0% /cover no-repeat scroll padding-box"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						min-height="242px"
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
							href="/for-legal/"
						/>
						<Override slot="Before Text2" font="normal 500 24px/29px --fontFamily-googleInter" margin="0px 0px 0px 0px" transition="-webkit-transition: all .5s;  transition: all .5s">
							Legal
						</Override>
						<Override slot="Before Text2 :default">
							Legal
						</Override>
						<Override slot="Before Text2 :hover" transform="translateY(-50px)" />
						<Override
							slot="Before image"
							height="12px"
							width="7px"
							min-width="0px"
							min-height="0px"
							src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z"
						/>
						<Override slot="Before image :default" display="none" />
					</Components.Knopka>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
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