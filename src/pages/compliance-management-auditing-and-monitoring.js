import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Hr, Box, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"compliance-management-auditing-and-monitoring"} />
		<Helmet>
			<title>
				Compliance Management, Auditing & Monitoring
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
		<Section padding="180px 0 120px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)" lg-padding="120px 0 60px 0" md-padding="90px 0 30px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="55%" display="flex" sm-align-items="center" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
					/>
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 16px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
					>
						Compliance Management,
						<br />
						Auditing & Monitoring
					</Text>
					<Text
						font="normal 400 18px/160% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#555"
						md-font="normal 400 16px/140% --fontFamily-googleInter"
						sm-text-align="center"
					>
						Find Compliance Solutions with StaffCop
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
				<StackItem width="45%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" position="relative" />
					{"        "}
					<Image
						width="803px"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15:07:09.010Z"
						md-width="400px"
						position="absolute"
						right="-115px"
						left="auto"
						top="-110px"
						bottom="auto"
						lg-width="500px"
						lg-position="absolute"
						lg-top="-35px"
						lg-right="-50px"
						md-top="0px"
						md-right="-70px"
						sm-position="relative"
						sm-bottom="auto"
						sm-left="auto"
						sm-right="auto"
						sm-top="0px"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section background="#FFFFFF" padding="24px 0 0px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem width="70%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" sm-align-items="center" sm-justify-content="center" />
					{"        "}
					<Text
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
					>
						Compliance Management{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="70%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="1px 0px 30px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						Compliance is an increasingly complex task, requiring organizations to manage multiple risk factors across an evolving technology landscape, while also ensuring appropriate user behavior to meet the stringent requirements of today’s widely-accepted regulatory standards, such as GDPR, HIPAA, PCI DSS, ISO 27001, NIST and others. Failing to remain compliant exposes your organization to substantial financial and reputational risk. No matter which industry you are in, you need a solid compliance management solution that can help you achieve compliance and then assists you in staying compliant with continuous oversight. Finally, the solution should be able to provide you with burden of proof in case of an audit{"\n\n"}
					</Text>
					{"  "}
					<Hr width="98%" margin="50px 0px 0px 0px" border-color="rgba(237, 237, 237, 1)" />
					{"  "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 12px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" width="100%">
				{"    "}
				<StackItem width="70%" display="flex" sm-width="100%" nout-width="100%">
					{"        "}
					<Text
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
					>
						How StaffCop can help with your compliance requirements{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="70%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" align-items="center" flex-direction="column" />
					{"        "}
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						While many solutions are out there to ensure compliance with respect to various systems, the human elements in these data driven transactions remain difficult to oversee, mandate and manage.{"\n"}
						<br />
						With its Intelligent behavior analysis and user centric activity monitoring, StaffCop can identify the human factors in compliance like insider threats, errors or accidents allowing you to address critical data protection, security and audit requirements. No matter what your specific compliance requirements are, StaffCop can provide the control and peace of mind with its many features and benefits.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 70px 0" sm-padding="24px 0 50px 0">
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
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							justify-content="center"
							text-align="center"
							width="48px"
						>
							1
						</Text>
						<Text
							font="--lead"
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Non-intrusive, rules-driven user activity monitoring, insider threat detection and data loss prevention
							<br />
							<br />
							{"\n\n"}
						</Text>
					</Box>
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
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							justify-content="center"
							text-align="center"
							width="48px"
						>
							2
						</Text>
						<Text
							font="--lead"
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Assists organizations to achieve compliance and remain compliant with regulatory compliance standards
							<br />
							{"\n\n"}
						</Text>
					</Box>
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
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							padding="13px 0px 13px 0px"
							display="block"
							align-items="center"
							justify-content="center"
							width="48px"
							text-align="center"
						>
							3
						</Text>
						<Text
							font="--lead"
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Content and activity driven rules ensure compliant behavior with respect to employees, contractors and third party vendors handling data{"\n\n"}
						</Text>
					</Box>
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
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							justify-content="center"
							text-align="center"
							width="48px"
						>
							4
						</Text>
						<Text
							font="--lead"
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Focus on context with heavy emphasis on user behavior analytics to weed out false positives, and identify anomalous behavior{"\n\n"}
							<br />
						</Text>
					</Box>
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
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							justify-content="center"
							text-align="center"
							width="48px"
						>
							5
						</Text>
						<Text
							font="--lead"
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Immediate action (warn, block action, lock out user, etc.) to ensure data is safe
							<br />
							{"\n\n"}
						</Text>
					</Box>
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
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="42px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="700 18px/22px --fontFamily-googleInter"
							color="#ffffff"
							background="--color-primary"
							padding="13px 0px 13px 0px"
							border-radius="40px"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							border-width="1px"
							border-style="solid"
							border-color="rgba(255, 255, 255, 0.05)"
							align-items="center"
							display="block"
							justify-content="center"
							text-align="center"
							width="48px"
						>
							6
						</Text>
						<Text
							font="--lead"
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Recording of all violations for forensics, to assist with investigations, and to satisfy audit and breach reporting requirements
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#F8F8F9" padding="100px 0 70px 0" sm-padding="50px 0 30px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				font="--headline2"
				margin="0px 0px 45px 0px"
				display="inline-block"
				color="#13212A"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 36px/40px Inter, sans-serif"
				width="80%"
			>
				Compliance solutions for{" "}
				<Span color="--primary">
					various industries
				</Span>
				{"\n\n"}
			</Text>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="36px 36px 42px 36px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/lockasdsad.svg?v=2020-10-29T01:42:01.441Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="29px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Privacy data (GDPR){"\n\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 30px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							GDPR is a great regulatory framework to ensure general privacy and data protection. To achieve GDPR compliance, organizations require a plan to monitor and protect personal data and provide privacy for the residents in European Union and the European Economic Area (EEA). Teramid is perfectly suited for your GDPR requirements in several ways:{" \n"}
							<br />
							{"\n"}
							<br />
							– Support for GDPR Articles 25: Data protection and design by default, 30: Record of processing activities, 32: Security of processing, 33: Notification of a data breach and 38: Supporting the data protection officer.
							<br />
							{" \n"}
							<br />
							– Auto discovery of privacy related information in both structured and unstructured data leveraging fingerprinting and OCR.{" \n"}
							<br />
							{"\n"}
							<br />
							– Recording of data processing activity, updated in real-time to a granular level for all employees, contractors and third-party vendors.{" \n"}
							<br />
							{"\n"}
							<br />
							– StaffCop provides full forensics with respect to a data breaches, and a video recording of the event.{"\n\n"}
						</Text>
						<Link
							href="/gdpr-compliance/"
							text-decoration-line="initial"
							color="--primary"
							font="normal 500 18px/22px --fontFamily-googleInter"
							hover-color="rgba(19, 33, 42, 1)"
						>
							Read more ❯{" "}
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="36px 36px 42px 36px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/heart-circlesadasd.svg?v=2020-10-30T01:39:16.613Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="29px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Healthcare (HIPAA){"\n\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 30px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							All healthcare organizations need to comply with HIPAA requirements of privacy and safeguards for medical and patient information and protect them from data loss, insider threats, fraud and other misuses. With StaffCop, healthcare organizations can speed up HIPAA compliance implementation and auditing process:{" "}
							<br />
							{"\n"}
							<br />
							– Guard protected health information (PHI), claim, care and clinical data with ready to use HIPAA policy templates.{" \n"}
							<br />
							<br />
							– Identify employees and 3rd party vendors who fail to comply with activity monitoring and tracking of communication channels like file transfer, email, IM etc.{" \n"}
							<br />
							{"\n"}
							<br />
							– Use built-in session recording and risk reports to conduct compliance reviews, provide burden of proof and develop employee training programs.
							<br />
							<br />
							{"\n\n"}
						</Text>
						<Link
							href="/for-hipaa/"
							text-decoration-line="initial"
							color="--primary"
							font="normal 500 18px/22px --fontFamily-googleInter"
							hover-color="rgba(19, 33, 42, 1)"
						>
							Read more ❯{" "}
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="36px 36px 42px 36px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Bank,%20Circle%201.svg?v=2020-10-30T01:40:47.574Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="29px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Legal / law firms{"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 30px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Law firms are constantly faced with the ever evolving challenge of addressing insider threats as it pertains to securing attorney-client privileged information and client/matter data. StaffCop helps you address these threats, protect confidentiality and product/demonstrate effective oversight to compliance initiatives to your clients:{" \n"}
							<br />
							– Ensure safety of client/matter data and work-product stored in firm repositories, beyond the traditional access and identity management systems.{" \n"}
							<br />
							{"\n"}
							<br />
							– Oversight, audit and logs of all actions for all employees (or any subsection of users/departments) as it pertains to firm desktops, laptops and content.{" \n"}
							<br />
							{"\n"}
							<br />
							– Privileged user monitoring, session recording, with searchable logs, videos, and audit trail for forensics.{" \n"}
							<br />
							{"\n"}
							<br />
							– Demonstrating your firm’s ability to comply with AML/KYC, HIPAA, ISO27001/27002, GDPR and other regulatory standards and laws.
							<br />
							{"\n\n"}
						</Text>
						<Link
							href="/for-legal/"
							text-decoration-line="initial"
							color="--primary"
							font="normal 500 18px/22px --fontFamily-googleInter"
							hover-color="rgba(19, 33, 42, 1)"
						>
							Read more ❯{" "}
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="36px 36px 42px 36px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/pen-circle-1%201.svg?v=2020-10-30T01:42:16.653Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="29px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Government / public services{"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 30px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Government organizations can address data loss, cybersecurity and insider threats with StaffCop’s insider threat detection and data loss prevention solutions. StaffCop is an effective endpoint monitoring solution to ensure your adherence to regulatory compliance including NIST, FAR/DFARS, FDCC, FedRamp, FISMA and more:{" \n"}
							<br />
							{"\n"}
							<br />
							– Policies and anomaly rules to catch insider threats. Sophisticated risk algorithm identifies high risk users and system components.{" \n"}
							<br />
							{"\n"}
							<br />
							– Identity based authentication, privileged user monitoring and segregated access control to prevent unauthorized data access.{" \n"}
							<br />
							{"\n"}
							<br />
							– Forensic investigation and incident response with session recording, alerts and immutable logs. Locate the source and threat vectors with pinpoint accuracy.{" \n"}
							<br />
							{"\n"}
							<br />
							–Integrate with IDS/IPS and SIEM systems to create a cyber security perimeter, share threat intelligence and coordinate response.{" \n\n"}
						</Text>
						<Link
							href="/government-and-public-sector-cyber-security/"
							text-decoration-line="initial"
							color="--primary"
							font="normal 500 18px/22px --fontFamily-googleInter"
							hover-color="rgba(19, 33, 42, 1)"
						>
							Read more ❯{" "}
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="36px 36px 42px 36px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/bag-shopping-circle%201.svg?v=2020-10-30T01:45:05.593Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="29px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Retail / ecommerce (PCI DSS){"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 30px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							- StaffCop can be used for diversifying access to the cardholders’ data, which means that only authorized users will be able to work with files containing this kind of information.{"\n\n \n"}
							<br />
							{"\n"}
							<br />
							– Each user with authorized access to cardholders’ data will have a unique identification represented by its name. This is also true for the users of StaffCop – they can be assigned unique IDs and unique range of permissions.{"\n\n \n"}
							<br />
							{"\n"}
							<br />
							– StaffCop can protect cardholder data against leakage by blocking information channels through which it may leak. For example, the PC containing this type of information can have USB and CD drives or e-mail applications blocked.{"\n\n \n"}
							<br />
							{"\n"}
							<br />
							– StaffCop keeps track of all information associated with cardholder data and network resources and possesses all the instruments which may be used to prevent this data leakage, including the ability to instantly block the targeted PC. The card numbers are identified with the implementation of Luhn algorithm, so the administrator of the system will be timely notified about the actions with this data which gives him time to take preventive measures.
						</Text>
						<Link
							href="https://romantic-jang-bba117.netlify.app/retail-and-ecommerce-cyber-security/"
							text-decoration-line="initial"
							color="--primary"
							font="normal 500 18px/22px --fontFamily-googleInter"
							hover-color="rgba(19, 33, 42, 1)"
						>
							Read more ❯{" "}
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="36px 36px 42px 36px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/notebook-laptop-circle%201.svg?v=2020-10-30T01:46:14.076Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="29px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Information technology (ISO 27001){"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 30px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Many organizations in IT, finance, telecom etc. are beginning to see the value of ISO 27001 in information risk management. However, without access to the right tools, the certification process can be difficult. With Teramind’s help, meet the security and monitoring standards outlined in ISMS guidelines for ISO 27001:{" \n"}
							<br />
							{"\n"}
							<br />
							– Monitor and measure user activity and maintain both mandatory and supplemental records. View exceptions, security events and how they were handled.{" \n"}
							<br />
							{"\n"}
							<br />
							– Define security roles and responsibility, assess control of regular/privileged users and 3rd party vendors.{" \n"}
							<br />
							{"\n"}
							<br />
							– Assist in developing risk assessment and treatment plans with built-in Risk Management dashboard.{" \n"}
							<br />
							{"\n"}
							<br />
							– Implement training and awareness programs with session recording and playback features.{"\n\n"}
						</Text>
						<Link
							href="/iso-27001-compliance/"
							text-decoration-line="initial"
							color="--primary"
							font="normal 500 18px/22px --fontFamily-googleInter"
							hover-color="rgba(19, 33, 42, 1)"
						>
							Read more ❯{" "}
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="36px 36px 42px 36px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/lockasdsadsavcxv.svg?v=2020-10-30T01:47:13.604Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="29px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Public accounting (SOX){"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 30px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Public companies, investors, public accounting and management firms can meet several provisions of the Sarbanes–Oxley Act of 2002 (SOX) compliance requirements with StaffCop's rigorous fraud prevention, data protection and reporting capabilities:{" \n"}
							<br />
							{"\n"}
							<br />
							– User activity monitoring and recording prevents accounting frauds.{" \n"}
							<br />
							{"\n"}
							<br />
							– Content rules and access safeguards to prevent document/data tampering.{" \n"}
							<br />
							{"\n"}
							<br />
							– Verifiable controls to track data access, disclose data breaches, and export audit reports as CSV/Excel formats for feeding into ERP systems.{" \n"}
							<br />
							{"\n"}
							<br />
							– Historical logs and video records of all user activity to streamline any change management process.{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="36px 36px 42px 36px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Credit%20Cards,%20Circle%201.svg?v=2020-10-30T01:48:08.968Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="29px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Online banking (FFIEC){"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 30px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							FFIEC (Federal Financial Institutions Examination Council) compliance is a set of conformance standards for online banking. StaffCop helps banks and financial institutions uncover potential cybersecurity weaknesses and insider threats in their online banking system:{" \n"}
							<br />
							{"\n"}
							<br />
							– Develop threat intelligence with 22+ monitored objects, user activities and content sharing.{" \n"}
							<br />
							{"\n"}
							<br />
							– Implement ‘always on’ cyber security controls with automated monitoring rules.{" \n"}
							<br />
							{"\n"}
							<br />
							– External/third party vendor access and dependency management.{" \n"}
							<br />
							{"\n"}
							<br />
							– Assist with cybersecurity risk assessment and policy development with built-in Risk Analysis Dashboard that can identify vulnerable departments, employees and resources.
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="36px 36px 42px 36px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/programming-code%201.svg?v=2020-10-30T01:48:53.486Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="29px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Utilities (NERC){"\n\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 30px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							With nine standards and forty-five requirements, a single security solution may not be enough to achieve and maintain NERC-CIP security standards. StaffCop can assist registered utilities in meeting the plans several requirements:{" \n"}
							<br />
							{"\n"}
							<br />
							– Documented trail of user activities within a desktop or terminal server.{" \n"}
							<br />
							{"\n"}
							<br />
							– Real-time monitoring of critical systems and user workstations. Receive automated alerts for any system configurations changes.{" \n"}
							<br />
							{"\n"}
							<br />
							– Risk and vulnerability analysis of users, departments, policies or applications.{" \n"}
							<br />
							{"\n"}
							<br />
							– Develop mock audit programs and training plans with session recording, simulated incident detection and threat response.{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					/>
					{"        "}
					<Box
						border-radius="6px"
						padding="36px 36px 42px 36px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
						transition=" -webkit-transition: all .6s;  transition: all .6s"
						hover-transform="translateY(-10px)"
						md-display="flex"
						md-flex-direction="column"
						sm-padding="20px 20px 20px 20px"
						border-color="rgba(255, 255, 255, 0.05)"
						box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						justify-content="flex-start"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/shield-protected-circle%201.svg?v=2020-10-30T01:49:23.222Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="29px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Federal agencies (FISMA){"\n\n"}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 30px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Supplement your existing federal security implementation for NIST-FISMA with StaffCop’s comprehensive platform for risk management, information protection and confidentiality:{" \n"}
							<br />
							{"\n"}
							<br />
							– 24/7 continuous monitoring and real-time visual screen recording.{" \n"}
							<br />
							{"\n"}
							<br />
							– Risk categorization and configurable risk levels for departments, groups, even individual users.{" \n"}
							<br />
							{"\n"}
							<br />
							– Ensure the integrity, confidentiality and availability of sensitive information through OCR, fingerprinting and content sharing rules.{" \n"}
							<br />
							{"\n"}
							<br />
							– Track, document, and report security incidents with built in Session Recording, risk reports and immutable event logs.
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="0px 0 0px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -346px/3610px no-repeat">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Components.Feature>
				<Override slot="text">
					Feature-rich, affordable with annual and perpetual licensing options
				</Override>
			</Components.Feature>
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