import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Image, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"white-papers"} />
		<Helmet>
			<title>
				White Papers
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
		<Components.Header />
		<Section
			padding="103px 0 18px 0"
			lg-width="95%"
			lg-padding="100px 2.5% 18px 2.5%"
			lg-border-radius="6px"
			sm-padding="80px 2.5% 18px 2.5%"
		>
			<Override
				slot="SectionContent"
				max-width="1100px"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectanglcghjkj.png?v=2020-11-04T02:10:23.597Z) 100% 100% /cover no-repeat scroll padding-box"
				padding="59px 0px 66px 72px"
				width="100%"
				border-radius="6px"
				justify-content="flex-end"
				max-height="392px"
				height="267px"
				md-padding="0px 0px 50px 0px"
				lg-border-radius="6px"
				hd-border-radius="0px"
				lg-width="100%"
				lg-padding="59px 40px 66px 40px"
			/>
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem
					width="60%"
					display="flex"
					sm-align-items="center"
					sm-width="100%"
					lg-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
						lg-align-items="center"
					/>
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 0px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						lg-text-align="center"
						color="#ffffff"
					>
						White Papers
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section background="#FFFFFF" padding="24px 0 70px 0" sm-padding="24px 0 50px 0" lg-padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Text font="normal 700 32px/38px --fontFamily-googleInter" letter-spacing="-1%" margin="16px 0px 16px 15px" width="70%">
				Download presentations, white papers and other marketing materials in PDF
			</Text>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					width="33.333%"
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
						justify-content="space-between"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-radius="6px"
						border-width="1px"
						border-color="rgba(255, 255, 255, 0.05)"
						border-style="solid"
						padding="42px 37px 42px 37px"
					/>
					{"        "}
					<Text
						font="normal 700 24px/140% --fontFamily-googleInter"
						margin="0px 0px 12px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						sm-font="normal 600 20px/140% Inter, sans-serif"
					>
						About "atom security" llc.{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						sm-font="normal 400 16px/140% Inter, sans-serif"
					>
						1.23 Mb
						<br />
						{"\n\n"}
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Link
							href="#"
							color="#1465FF"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="flex"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Arrow,%20Download,%20Save,%20Upload%201.svg?v=2020-11-04T02:18:51.068Z" margin="0px 10px 0px 0px" />
							Download
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="33.333%"
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
						justify-content="space-between"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-radius="6px"
						border-width="1px"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
					/>
					{"        "}
					<Text
						font="normal 700 24px/140% --fontFamily-googleInter"
						margin="0px 0px 12px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						sm-font="normal 600 20px/140% Inter, sans-serif"
					>
						Security audit with staffcop{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						sm-font="normal 400 16px/140% Inter, sans-serif"
					>
						4.56 Mb{"\n\n"}
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Link
							href="#"
							color="#1465FF"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="flex"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Arrow,%20Download,%20Save,%20Upload%201.svg?v=2020-11-04T02:18:51.068Z" margin="0px 10px 0px 0px" />
							Download
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="33.333%"
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
						justify-content="space-between"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-radius="6px"
						border-width="1px"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
					/>
					{"        "}
					<Text
						font="normal 700 24px/140% --fontFamily-googleInter"
						margin="0px 0px 12px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						sm-font="normal 600 20px/140% Inter, sans-serif"
					>
						Staffcop datasheet{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						sm-font="normal 400 16px/140% Inter, sans-serif"
					>
						6.55 Mb
						<br />
						{"\n\n"}
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Link
							href="#"
							color="#1465FF"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="flex"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Arrow,%20Download,%20Save,%20Upload%201.svg?v=2020-11-04T02:18:51.068Z" margin="0px 10px 0px 0px" />
							Download
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="33.333%"
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
						justify-content="space-between"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-radius="6px"
						border-width="1px"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
					/>
					{"        "}
					<Text
						font="normal 700 24px/140% --fontFamily-googleInter"
						margin="0px 0px 12px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						sm-font="normal 600 20px/140% Inter, sans-serif"
					>
						Staffcop presentation{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						sm-font="normal 400 16px/140% Inter, sans-serif"
					>
						3.63 Mb
						<br />
						{"\n\n"}
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Link
							href="#"
							color="#1465FF"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="flex"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Arrow,%20Download,%20Save,%20Upload%201.svg?v=2020-11-04T02:18:51.068Z" margin="0px 10px 0px 0px" />
							Download
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="33.333%"
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
						justify-content="space-between"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-radius="6px"
						border-width="1px"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
					/>
					{"        "}
					<Text
						font="normal 700 24px/140% --fontFamily-googleInter"
						margin="0px 0px 12px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						sm-font="normal 600 20px/140% Inter, sans-serif"
					>
						For information security{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						sm-font="normal 400 16px/140% Inter, sans-serif"
					>
						4.69 Mb
						<br />
						{"\n\n"}
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Link
							href="#"
							color="#1465FF"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="flex"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Arrow,%20Download,%20Save,%20Upload%201.svg?v=2020-11-04T02:18:51.068Z" margin="0px 10px 0px 0px" />
							Download
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="33.333%"
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
						justify-content="space-between"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-radius="6px"
						border-width="1px"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
					/>
					{"        "}
					<Text
						font="normal 700 24px/140% --fontFamily-googleInter"
						margin="0px 0px 12px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						sm-font="normal 600 20px/140% Inter, sans-serif"
					>
						for it department{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						sm-font="normal 400 16px/140% Inter, sans-serif"
					>
						1.85 Mb
						<br />
						{"\n\n"}
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Link
							href="#"
							color="#1465FF"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="flex"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Arrow,%20Download,%20Save,%20Upload%201.svg?v=2020-11-04T02:18:51.068Z" margin="0px 10px 0px 0px" />
							Download
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="33.333%"
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
						justify-content="space-between"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-radius="6px"
						border-width="1px"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
					/>
					{"        "}
					<Text
						font="normal 700 24px/140% --fontFamily-googleInter"
						margin="0px 0px 12px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						sm-font="normal 600 20px/140% Inter, sans-serif"
					>
						Staffcop on mac{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						sm-font="normal 400 16px/140% Inter, sans-serif"
					>
						1.34 Mb
						<br />
						{"\n\n"}
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Link
							href="#"
							color="#1465FF"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="flex"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Arrow,%20Download,%20Save,%20Upload%201.svg?v=2020-11-04T02:18:51.068Z" margin="0px 10px 0px 0px" />
							Download
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="33.333%"
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
						justify-content="space-between"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-radius="6px"
						border-width="1px"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
					/>
					{"        "}
					<Text
						font="normal 700 24px/140% --fontFamily-googleInter"
						margin="0px 0px 12px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						sm-font="normal 600 20px/140% Inter, sans-serif"
					>
						Techical and commercial offer{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						sm-font="normal 400 16px/140% Inter, sans-serif"
					>
						4.69 Mb{"\n\n"}
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Link
							href="#"
							color="#1465FF"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="flex"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Arrow,%20Download,%20Save,%20Upload%201.svg?v=2020-11-04T02:18:51.068Z" margin="0px 10px 0px 0px" />
							Download
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="33.333%"
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
						justify-content="space-between"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-radius="6px"
						border-width="1px"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0.05)"
						padding="42px 37px 42px 37px"
					/>
					{"        "}
					<Text
						font="normal 700 24px/140% --fontFamily-googleInter"
						margin="0px 0px 12px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						sm-font="normal 600 20px/140% Inter, sans-serif"
					>
						Use cases{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						sm-font="normal 400 16px/140% Inter, sans-serif"
					>
						4.00 Mb
						<br />
						{"\n\n"}
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Link
							href="#"
							color="#1465FF"
							text-decoration-line="initial"
							font="normal 300 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="flex"
						>
							<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Arrow,%20Download,%20Save,%20Upload%201.svg?v=2020-11-04T02:18:51.068Z" margin="0px 10px 0px 0px" />
							Download
						</Link>
					</Box>
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