import React from "react";
import theme from "theme";
import { Theme, Link, Text, Span, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"for-hipaa"} />
		<Helmet>
			<title>
				For HIPAA
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
		<Section padding="103px 0 18px 0" lg-padding="100px 0 20px 0" sm-padding="80px 0 20px 0">
			<Override slot="SectionContent" max-width="1170px" background="linear-gradient(0deg, rgba(0, 9, 27, 0.5), rgba(0, 9, 27, 0.5)),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%D1%8Bavcxzvczxc.png?v=2020-11-01T20:00:20.262Z) 0% 0% /auto repeat scroll padding-box" border-radius="6px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="100%" display="flex" sm-align-items="center" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
						padding="80px 0px 80px 80px"
						sm-padding="50px 20px 50px 20px"
						md-padding="40px 40px 40px 40px"
						md-align-items="center"
					/>
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 0px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						color="#ffffff"
						md-text-align="center"
					>
						For HIPAA
					</Text>
					<Text
						font="--lead"
						margin="30px 0px 0px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						color="#EDEDED"
						sm-text-align="center"
						md-text-align="center"
					>
						Identify, Protect, Detect, Respond & Report on Healthcare Data Breaches
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
						margin="30px 0px 0px 0px"
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
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section background="#FFFFFF" padding="24px 0 0px 0">
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
						HIPAA compliance and data protection{" "}
						<br />
						on a unified platform
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
						HIPAA is designed to facilitate the efficient flow of healthcare data and to protect patient’s Protected Health Information (PHI). As such, the law necessitates that CSOs, CIOs and security officers be ever vigilant in guarding protected health information in their healthcare delivery organizations (HDOs).
						<br />
						While there are many ways data breaches occur,{" "}
						<Span color="--primary">
							according to Gartner
						</Span>
						, the most common cause of PHI breaches is people not following proper procedures when accessing and sharing PHI.
					</Text>
					<Text
						font="700 18px/28px --fontFamily-googleInter"
						margin="1px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						Teramind has been helping thousands of organizations in healthcare, financial services, government and other industries protect their PII, PFI, PHI and other sensitive data. Teramind for HIPAA is built on these years of experience and expertise.
						<br />
						With a unified data loss prevention, user activity monitoring, reporting and forensics platform, Teramind for HIPAA addresses the complex needs of security, privacy and compliance of today’s healthcare organizations.
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
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Administrative safeguards
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Built-in templates to identify and classify PII and PHI automatically. Real-time staff activity monitoring prevents accidental or malicious data exfiltration.
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
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Technical safeguards
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Identity authentication and segregated access control for both viewing and editing of PHI. Risk assessment and analytics. Protection for data-at-rest and data-in-motion.
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
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Security Standards
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Enforce behavior-based activity and content security rules for websites, apps, network, emails, files etc. Automatically warn, block or lock-out user if any anomaly is detected.
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
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Compliance reviews
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Intuitive policy editor, pre-built templates and automated rules make reviewing process easy. Built-in reports for data breach and compliance violation incidents.
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
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Burden of proof
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							-Teramind tracks all activities that take place on the system. Detailed session recordings, alerts and immutable logs to support HIPAA record keeping and documentation requirements.
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
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Staff awareness and training
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Use Teramind’s built-in messaging and reporting tools to train staff on proper PHI procedures, provide feedback and follow up.
							<br />
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#F8F8F9" padding="24px 0 70px 0" sm-padding="24px 0 50px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				font="--headline2"
				margin="0px 0px 30px 0px"
				display="inline-block"
				color="#13212A"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 36px/40px Inter, sans-serif"
				width="75%"
			>
				Effective, End-to-End Security for{" "}
				<Span color="--primary">
					Your Healthcare Data
				</Span>
			</Text>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					width="100%"
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
						padding="30px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
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
					>
						<Image width="64px" height="64px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/lockasdsadsavcxv.svg?v=2020-10-30T01:47:13.604Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Identify
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Leveraging advanced fingerprinting, OCR and tagging technology, Teramind identifies personal and sensitive data in structured and unstructured information across organization data stores.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="100%"
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
						padding="30px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
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
					>
						<Image width="64px" height="64px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/shield-protected-circle%201.svg?v=2020-10-30T01:49:23.222Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Protect
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Teramind leverages its activity monitoring and data loss prevention capabilities to defend confidential and private information from unauthorized access, sharing, attack and misuse.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="100%"
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
						padding="30px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
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
					>
						<Image width="64px" height="64px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/detectore.svg?v=2020-10-30T02:12:10.433Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Detect{"   "}
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Teramind’s powerful behavior-based policy and rules engine casts a strong detection net over the entire organization, allowing for quick detection of insider threats and data breach incidents before it happens.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="100%"
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
						padding="30px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
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
					>
						<Image width="64px" height="64px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/bell-notification-circle%202.svg?v=2020-10-30T02:15:27.985Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Responde
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Real-time notification and immediate actions proactively defend against data exfiltration, malicious or accidental insider threats and data breaches. In case of an incident, pinpoint the exact cause and source of the incident with readily available audit and forensic data.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="100%"
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
						padding="30px 37px 42px 37px"
						border-width="1px"
						border-style="solid"
						background="#FFFFFF"
						height="100%"
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
					>
						<Image width="64px" height="64px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/folder-circle.1%201%20(1).svg?v=2020-10-30T02:15:40.681Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Report
						</Text>
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Meet GDPR record keeping requirements with detailed incident reports, alerts and session recordings. Exportable reports can be shared with the Controller, DPO, auditors and other members of the compliance team.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="40px 0 70px 0" background="#F8F8F9" lg-padding="30px 0 30px 0" md-padding="30px 0 10px 0">
			<Override
				slot="SectionContent"
				border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
				max-width="1170px"
				align-items="center"
				padding="60px 0px 0px 0px"
				background="#ffffff"
				border-radius="6px"
				border-width="1px"
				border-style="solid"
				box-shadow=" 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14)"
				border-color="#ffffff"
			/>
			<Stack
				margin="0px 0px 0px 0px"
				width="100%"
				gap="--cmp-stack-gap-default"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
			>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						md-align-items="center"
					/>
					{"        "}
					<Image width="82%" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%201.png?v=2020-10-19T22:24:26.269Z" md-width="80%" />
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 60px 0px 20px"
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
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
					>
						Principles relating to processing of personal data (GDPR Article 5)
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#555"
						lg-font="normal 400 15px/160% Inter, sans-serif"
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
					>
						Teramind for GDPR can ensure data is processed lawfully and not exfiltrated to unauthorized systems and mediums. Data classification can be set to identify personal data and then policies and rules can be created using advanced OCR and fingerprinting features to detect and restrict access to such data automatically.
					</Text>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				margin="0px 0px 0px 0px"
				width="100%"
				gap="--cmp-stack-gap-default"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
			>
				<StackItem width="50%" display="flex" md-width="100%" md-order="1">
					<Override
						slot="StackItemContent"
						padding="0px 20px 0px 60px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						justify-content="center"
						md-order="1"
					/>
					{"        "}
					<Text
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						text-align="right"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
					>
						Processing of special categories of personal data (GDPR Article 9)
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#555"
						lg-font="normal 400 15px/160% Inter, sans-serif"
						text-align="right"
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
					>
						Article 9 lays out further requirements for special categories of personal data. For example, Member States may maintain or introduce further conditions, including limitations, with regard to the processing of genetic data, biometric data or data concerning health.
						<br />
						Teramind for GDPR features built-in classifications for health-related data such as DNA profiles, National Health Services numbers, disease and drug names, and more. Custom data types can be created for your unique needs.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						md-align-items="center"
					/>
					{"        "}
					<Image width="100%" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%204.png?v=2020-10-19T22:32:34.380Z" md-width="80%" object-fit="contain" />
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				margin="0px 0px 0px 0px"
				width="100%"
				gap="--cmp-stack-gap-default"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
			>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						md-align-items="center"
					/>
					{"        "}
					<Image width="90%" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%205.png?v=2020-10-19T22:35:48.644Z" md-width="80%" />
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="20px 60px 0px 20px"
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
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
					>
						Data protection and design by default (GDPR Article 25)
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#555"
						lg-font="normal 400 15px/160% Inter, sans-serif"
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
					>
						eramind for GDPR can ensure data is processed only in the context it is required to be processed. Monitoring settings can be configured to only record the necessary information. For example, keystrokes or screen capture can be disabled when a user enters their personal banking site or personal emails.
						<br />
						Organizations can implement Teramind for GDPR with specific monitoring features and recording of events only at policy violations, narrowing the scope of user activity recording and ensuring a privacy-friendly implementation. ​ Administrators' privileges can be limited with tiered access to only​ view ​specific sets of data. Custom alerts and prompts can be set up to inform users what data is collected and allow them to acknowledge any action being taken.
					</Text>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				margin="0px 0px 0px 0px"
				width="100%"
				gap="--cmp-stack-gap-default"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
			>
				<StackItem width="50%" display="flex" md-width="100%" md-order="1">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 50px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-start"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						justify-content="center"
					/>
					{"        "}
					<Text
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						text-align="right"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
					>
						Record of processing activities (GDPR Article 30)
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#555"
						lg-font="normal 400 15px/160% Inter, sans-serif"
						text-align="right"
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
					>
						GDPR requires organizations to maintain an up-to-date record of the locations and usage of personal information and product/demonstrate safeguards used to protect the data. This could be information in files, databases, email, unstructured data, backups, DMS, knowledge bases, or anything else that houses data.
						<br />
						Teramind for GDPR can help the Controller and the CDO identify this information and record who’s accessing what data, how the data is flowing through the organization and then create perimeter rules to safeguard their access or usage
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						md-align-items="center"
					/>
					{"        "}
					<Image width="90%" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%206.png?v=2020-10-19T22:39:56.097Z" md-width="80%" object-fit="contain" />
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				margin="0px 0px 0px 0px"
				width="100%"
				gap="--cmp-stack-gap-default"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
			>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						md-align-items="center"
					/>
					{"        "}
					<Image width="90%" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%207.png?v=2020-10-19T22:40:56.844Z" md-width="80%" />
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="20px 60px 0px 20px"
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
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
					>
						Security of processing (GDPR Article 32)
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#555"
						lg-font="normal 400 15px/160% Inter, sans-serif"
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
					>
						Part of Article 32 states that the Controller and the Processor shall implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk.
						<br />
						Teramind for GDPR is well suited to help implement many of these security requirements. For example: implement access profiles for each staff, restrict or block sharing of encrypted content, limit use of FTP/Cloud sharing sites, prevent the viewing of sensitive data by employees, prevent unauthorized decryption operations on files and more.
					</Text>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				margin="0px 0px 0px 0px"
				width="100%"
				gap="--cmp-stack-gap-default"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
			>
				<StackItem width="50%" display="flex" md-width="100%" md-order="1">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 50px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-end"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						justify-content="center"
					/>
					{"        "}
					<Text
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 30px/43px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						text-align="right"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
					>
						Notification of a data breach (GDPR Article 33)
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#555"
						lg-font="normal 400 15px/160% Inter, sans-serif"
						text-align="right"
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
					>
						Teramind for GDPR can provide full forensics with respect to a data incident, and a video recording of the event. Detailed alert reports can be exported including any security incidents and what actions were taken in minutes superseding the 72 hour limit set by GDPR. Session recordings and history playback can be used to provide proof for further forensic investigation.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						md-align-items="center"
					/>
					{"        "}
					<Image width="90%" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22:41:42.492Z" md-width="80%" object-fit="contain" />
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				margin="0px 0px 0px 0px"
				width="100%"
				gap="--cmp-stack-gap-default"
				border-width="0px 0px 1px 0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
			>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						md-align-items="center"
					/>
					{"        "}
					<Image width="90%" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%207.png?v=2020-10-19T22:40:56.844Z" md-width="80%" />
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="20px 60px 0px 20px"
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
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 24px/33px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
					>
						Supporting the data protection officer (GDPR Article 38)
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#555"
						lg-font="normal 400 15px/160% Inter, sans-serif"
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
					>
						Some key responsibilities of the DPO is advising the Controller on various GDPR initiatives and monitor the effectiveness of the compliance measures and identify any risk associated with data processing operations.
						<br />
						<br />
						To help the DPO with their role, Teramind for GDPR has a role-based access management system ensuring that both internal and external users are monitored and audited properly. Additionally, there’s a Risk dashboard that identifies policies, rules, personnel and system objects that are at risk.
					</Text>
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
			<Stack
				margin="0px 0px 0px 0px"
				width="100%"
				gap="--cmp-stack-gap-default"
				border-width="0px"
				border-style="solid"
				lg-margin="50px 0px 0px 0px"
				border-color="rgba(19, 33, 42, 0.05)"
			>
				<StackItem width="50%" display="flex" md-width="100%" md-order="1">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 50px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="flex-end"
						lg-padding="0px 30px 0px 50px"
						sm-margin="20px 0px 0px 0px"
						justify-content="center"
					/>
					{"        "}
					<Text
						font="normal 700 36px/43px --fontFamily-googleInter"
						color="Monitor Employee Activity in Real-Time"
						margin="0px 0px 18px 0px"
						lg-font="normal 700 30px/43px --fontFamily-googleInter"
						md-margin="0px 0px 24px 0px"
						text-align="right"
						nout-font="normal 700 30px/43px --fontFamily-googleInter"
						sm-text-align="center"
					>
						Monitoring of approved codes of conduct (GDPR Article 41)
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 24px 0px"
						display="inline-block"
						color="#555"
						lg-font="normal 400 15px/160% Inter, sans-serif"
						text-align="right"
						nout-font="normal 400 16px/160% Inter, sans-serif"
						sm-text-align="center"
					>
						Teramind for GDPR monitors all employee, contractor and third-party vendor activity including file access, apps and website usage and all other interactions within the local, network or Cloud environments. Business etiquette rules can be created to train the users about nonconformity and influence corrective behavior..
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						padding="0px 0px 0px 20px"
						border-radius="0px"
						border-width="0px"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						md-align-items="center"
					/>
					{"        "}
					<Image width="90%" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/00%D1%8B%D1%84%D1%8B%D1%84%D1%8B1%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%D1%8B%208.png?v=2020-10-19T22:41:42.492Z" md-width="80%" object-fit="contain" />
					{"    "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Components.BlockNeed>
			<Override slot="text1">
				Information Security
			</Override>
			<Override slot="text2">
				Receive the required data “on the fly”. Search by keywords and regular expressions. Record sound from microphones to hear what was happening at the moment of interest.
			</Override>
			<Override slot="text3">
				Remote Administration
			</Override>
			<Override slot="text4">
				View remote desktop without being notices. Take control over a workstation. Full picture of software and hardware usage. Intensity of usage and registry of states.
			</Override>
			<Override slot="text6">
				Employee Monitoring
			</Override>
			<Override slot="text7">
				Categorize applications and web-sites into productive and unproductive. Set up different configurations for particular users, groups and departments. Compare results.
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
			</Override>
		</Components.BlockNeed>
		<Section
			background="#ffffff"
			padding="70px 0 20px 0"
			md-padding="24px 0 40px 0"
			border-width="0px 0px 1px 0px"
			border-style="solid"
			border-color="rgba(255, 255, 255, 0.05)"
		>
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				font="--headline2"
				margin="0px 0px 70px 0px"
				display="inline-block"
				color="#13212A"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				md-margin="0px 0px 20px 0px"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 36px/58px Inter, sans-serif"
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
					Flexible
				</Span>
				{" "}Deployment Options
			</Text>
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
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
						<Image width="60px" height="60px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/papaplo.svg?v=2020-10-19T23:24:47.217Z" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Bare Metal
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Install on bare metal from our ISO image containing Ubuntu 18.04 and StaffCop or install StaffCop packages on existing Ubuntu 18.04.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="50%" md-width="100%">
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
						<Image width="60px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/zamolk.svg?v=2020-10-19T23:25:24.891Z" height="60px" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Virtual Machine
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Install on any OS as a virtual machine from our ISO image, use Virtual Box, VMWare, Hyper-V or any other virtualization system. Easy administrating without risking the host machine.
						</Text>
					</Box>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" lg-width="100%" md-width="100%">
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
						<Image width="60px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/cloudd.svg?v=2020-10-19T23:25:21.625Z" height="60px" />
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Private Cloud
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Use your own secure, scalable private cloud implementation including AWS, Google Cloud, Azure and more
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Components.Company />
		</Section>
		<Section padding="0px 0 0px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -346px/3610px no-repeat">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Components.Feature />
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