import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Hr, Box, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"third-party-vendor-management"} />
		<Helmet>
			<title>
				Third Party Vendor Management
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
				<StackItem width="50%" display="flex" sm-align-items="center" sm-width="100%">
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
						Third Party Vendor Management
					</Text>
					<Text
						font="normal 400 18px/160% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#555"
						md-font="normal 400 16px/140% --fontFamily-googleInter"
						sm-text-align="center"
					>
						StaffCop provides third party vendor monitoring, threat detection and data loss prevention in a single platform
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
						Request demo
					</Link>
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%">
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
						The risk of third-party vendor access
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
						Third party vendors, partners, consultants and outsourced contractors often have privileged access to a company’s internal systems through root or domain administration rights. As privileged insiders, they can change system configuration, steal company data as well as sabotage critical infrastructure. Even with no malicious intent, an external vendor is a major security liability. There are also strict regulatory requirements for some industries like banking, healthcare etc. where vendor monitoring is mandatory to ensure privacy and protection while data is transferred or processed between two parties.
					</Text>
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
						For these reasons, an organization should setup a security perimeter when giving access to external vendors and contractors. It then needs a way to continuously monitor all vendor activity to ensure they conform to the company’s security policy and rules. Some compliance regulations also require organizations to keep a detailed record of any security, privacy or data breach incidents caused by a third-party.
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
						StaffCop Third Party Vendor Management: activity monitoring, threat detection and data loss prevention in a single platform
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
						With features like user activity monitoring, privileged user management, advanced authentication and access control, remote user monitoring and support for virtualization services, StaffCop offers an unrivaled platform to monitor, control and protect third party vendors to ensure access is only granted to systems needed, decrease the chances of accidental mistakes that can damage system settings, and help improve IT safety measures. In addition, StaffCop helps you meet many regulatory compliance requirements as it relates to third party vendor management with its extensive user activity monitoring, data exfiltration protection, audit, reporting and forensics capabilities.
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
							Real-Time Activity Monitoring
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Monitor all user activity covering 22+ system objects like: web pages, apps, email, file transfers, instant messaging, social media and more.
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
							Authentication and Access Control
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Identity based authentication and segregated access control prevent unauthorized access and sharing of sensitive systems and data by a third-party.
							<br />
							<br />
							<br />
							<br />
							<br />
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
							Intelligent Policy and Rules Engine
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Create monitoring profiles for individual vendor or groups. Configure rules for dangerous vendor behaviors like abnormal login, privilege escalation etc. with hundreds of pre-built rules or create your own with an intuitive, visual Policy and Rules Editor. Automatically warn or take control on detection of any rule violations or anomalies.
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
							Audit and Forensics
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Get access to seamless real-time streaming of a vendor’s screen and an extensive visual history of all actions. Immutable logs and reports provide a vast collection of investigation data in case of an incident.
							<br />
							<br />
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
							Vendor Risk Management
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Identify high risk vendors, policies and system components on a dedicated risk dashboard. Sophisticated risk scoring helps identify and focus on areas of vulnerabilities.
							<br />
							<br />
							<br />
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
							6
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Productivity & SLA
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Built-in productivity tools let you establish a continuous feedback loop with your vendor network. Refine and adjust your organizational workflow through tracking contract schedules, projects, budget and engagement rate to improve vendor SLA and QA.
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
							7
						</Text>
						<Text
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="30px 0px 12px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Compliance Management
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Conform with various compliance requirements in respect to third party monitoring. For example: implementing audit trails (GDPR), limiting unauthorized login (ISO 27001), prevent unencrypted file transfers (PCI DSS), reporting, and more.
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
			>
				Third Party Vendors: A Weak URL in{" "}
				<br />
				<Span color="--primary">
					Cyber Security Chain
				</Span>
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
						padding="36px 36px 36px 36px"
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
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							3rd-party incidents are a reality for many companies
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							In a 2016 global survey of 170 companies, Deloitte found that 87% have experienced an incident with a 3rd-party. Source: Deloitte.{" "}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							<Span
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								87%
							</Span>
							{" "}Suffered a Disruptive 3rd-Party Incident
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
						padding="36px 36px 36px 36px"
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
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							3rd-party vendors have access to critical systems
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							3rd-parties have to access many VPNs, networks, and platforms confirmed by 75% of organization leaders. Source: SOHA.{" "}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							<Span
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								75%
							</Span>
							{" "}Agree Third-Parties Have Access to Critical Systems
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
						padding="36px 36px 36px 36px"
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
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Organizations spend millions on 3rd-party breaches
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							On average, organizations spend $10+ million responding to 3rd-party breaches each year. Source: Riskonnect.{" "}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							<Span
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Avg. $10M+{" "}
							</Span>
							{" "}Spent on 3rd-Party Breaches by Organizations
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
						padding="36px 36px 36px 36px"
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
							font="normal 700 24px/140% --fontFamily-googleInter"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(19, 33, 42, 1)"
							sm-font="normal 600 20px/140% Inter, sans-serif"
						>
							Many companies lack 3rd-party security standards
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							In a global survey of companies, PwC found that only 52% have security standards in place for 3rd-parties. Source: PwC.
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							<Span
								font="700 18px/28.8px Inter, sans-serif"
								color="--primary"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								Only 52%
							</Span>
							{" "}of Organizations Consider 3rd-Party Security a Priority
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="70px 0 00px 0" lg-padding="70px 0 50px 0" color="rgba(85, 85, 85, 1)" background="#F8F8F9">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				font="--headline2"
				margin="0px 0px 50px 0px"
				display="inline-block"
				color="#13212A"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
			>
				How Third Party Vendors Cause{" "}
				<br />
				<Span color="--primary">
					Security Risks
				</Span>
				{"\n\n"}
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
					border-color="#000000"
				/>
				<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						padding="10px 60px 10px 60px"
						hd-padding="10px 50px 10px 50px"
						md-padding="10px 20px 10px 20px"
						lg-padding="10px 20px 10px 20px"
						nout-padding="10px 40px 10px 40px"
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
						background="#F8F8F9"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/cursor-click-select-circl421.svg?v=2020-10-29T01:42:01.440Z" object-fit="contain" margin="25px 0px 0px 0px" />
					</Box>
					<Text
						font="--headline3"
						margin="20px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						text-align="center"
					>
						Malware infection{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="12px 0px 24px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						text-align="center"
					>
						Opening an infected email or visiting a website with malware that can spread in an organization's system.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						padding="10px 60px 10px 60px"
						hd-padding="10px 50px 10px 50px"
						md-padding="10px 20px 10px 20px"
						lg-padding="10px 20px 10px 20px"
						nout-padding="10px 40px 10px 40px"
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
						background="#F8F8F9"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Server,%20Databases,%20Circleasdasd.svg?v=2020-10-29T01:42:01.447Z" object-fit="contain" margin="25px 0px 0px 0px" />
					</Box>
					<Text
						font="--headline3"
						margin="20px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						text-align="center"
					>
						Database access{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="12px 0px 24px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						text-align="center"
					>
						Attempting to log in to database servers during off-hours or after the completion of a project.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						padding="10px 60px 10px 60px"
						hd-padding="10px 50px 10px 50px"
						md-padding="10px 20px 10px 20px"
						lg-padding="10px 20px 10px 20px"
						nout-padding="10px 40px 10px 40px"
					/>
					{"        "}
					<Box
						width="120px"
						height="120px"
						display="flex"
						align-items="center"
						justify-content="center"
						background="#F8F8F9"
						position="relative"
						z-index="2"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/lockasdsad.svg?v=2020-10-29T01:42:01.441Z" object-fit="contain" margin="25px 0px 0px 0px" />
					</Box>
					<Text
						font="--headline3"
						margin="20px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						text-align="center"
					>
						Privilege elevation{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="12px 0px 24px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						text-align="center"
					>
						A vendor attempting to bypass security clearances and gain additional access by exploiting a bug, design flaw or configuration oversight in an operating system or software application.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="0px 0 24px 0" lg-padding="70px 0 50px 0" color="rgba(85, 85, 85, 1)" background="#F8F8F9">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
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
					border-color="#000000"
				/>
				<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						padding="10px 60px 10px 60px"
						hd-padding="10px 50px 10px 50px"
						md-padding="10px 20px 10px 20px"
						lg-padding="10px 20px 10px 20px"
						nout-padding="10px 40px 10px 40px"
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
						background="#F8F8F9"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/folder-circle12424.svg?v=2020-10-29T01:42:01.441Z" object-fit="contain" margin="25px 0px 0px 0px" />
					</Box>
					<Text
						font="--headline3"
						margin="20px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						text-align="center"
					>
						Data exfiltration{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="12px 0px 24px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						text-align="center"
					>
						A vendor abusing access within a system to view confidential customer and employee records.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						padding="10px 60px 10px 60px"
						hd-padding="10px 50px 10px 50px"
						md-padding="10px 20px 10px 20px"
						lg-padding="10px 20px 10px 20px"
						nout-padding="10px 40px 10px 40px"
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
						background="#F8F8F9"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/warningasdasd.svg?v=2020-10-29T01:42:01.446Z" object-fit="contain" margin="25px 0px 0px 0px" />
					</Box>
					<Text
						font="--headline3"
						margin="20px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						text-align="center"
					>
						Cloud security{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="12px 0px 24px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						text-align="center"
					>
						Any access to cloud-based storage services, which can lead to confidential information being transferred out of the system.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.333%" display="flex" lg-width="50%" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="flex-start"
						flex-direction="column"
						padding="10px 60px 10px 60px"
						hd-padding="10px 50px 10px 50px"
						md-padding="10px 20px 10px 20px"
						lg-padding="10px 20px 10px 20px"
						nout-padding="10px 40px 10px 40px"
					/>
					{"        "}
					<Box
						width="120px"
						height="120px"
						display="flex"
						align-items="center"
						justify-content="center"
						background="#F8F8F9"
						position="relative"
						z-index="2"
					>
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/tv-circle-monitorasdsadsa.svg?v=2020-10-29T01:42:01.571Z" object-fit="contain" margin="25px 0px 0px 0px" />
					</Box>
					<Text
						font="--headline3"
						margin="20px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						text-align="center"
					>
						Steganography{"\n\n"}
					</Text>
					<Text
						font="--lead"
						margin="12px 0px 24px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						text-align="center"
					>
						Utilizing screen-capturing software to share confidential files and security information with unauthorized sources outside the organization.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="34px 0 34px 0" lg-padding="70px 0 50px 0" color="rgba(85, 85, 85, 1)" background="#F8F8F9">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Text
				font="--headline2"
				margin="0px 0px 50px 0px"
				display="inline-block"
				color="#13212A"
				letter-spacing="-2%"
				text-align="center"
				md-font="normal 700 30px/40px Inter, sans-serif"
				sm-font="normal 700 24px/30px Inter, sans-serif"
				lg-font="normal 700 34px/42px Inter, sans-serif"
			>
				Third Party Vendor Management
				<br />
				<Span color="--primary">
					Use Cases
				</Span>
				{"\n\n"}
			</Text>
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectanglesadas.png?v=2020-10-29T01:54:18.349Z" max-height="372px" width="100%" border-radius="6px" />
					<Text
						font="normal 700 18px/28px --fontFamily-googleInter"
						margin="18px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						md-text-align="center"
					>
						IT Services{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						margin="0px 0px 0px 0px"
						padding="0px 0px 0px 25px"
						md-padding="0px 0px 0px 0px"
					/>
					{"        "}
					<Text
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						lg-font="normal 700 28px/35px --fontFamily-googleInter"
					>
						The risk of third-party vendor access{"\n\n"}
					</Text>
					<Text
						font="normal 400 18px/29px --fontFamily-googleInter"
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
					>
						IT services businesses, MSPs and hosting providers often need to monitor vendor activity in the company servers to enforce SLA and process billing. Another aspect of IT services is that, employees of third party professional services can access your organizational databases, configure servers and often setup IT security systems. They should be treated with same vigor as your other privileged employees and scrutinized for all their activity.{"\n\n"}
					</Text>
					<Text
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
					>
						Solution{"\n\n"}
					</Text>
					<Text
						font="normal 400 18px/29px --fontFamily-googleInter"
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
					>
						With StaffCop’s activity monitoring solution, it’s possible to quickly see (and prove) exactly who worked on the servers, when, for how long and what they did to ensure security and process accurate billing and SLAs.{"\n"}
						<br />
						In addition, StaffCop supports ISO 27001 compliance that further ensures an organization’s overall IT security measures are covered with a single solution.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Hr width="98%" margin="0px 0px 0px 0px" border-color="rgba(237, 237, 237, 1)" />
		</Section>
		<Section padding="34px 0 34px 0" lg-padding="70px 0 50px 0" color="rgba(85, 85, 85, 1)" background="#F8F8F9">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangleasdasd.png?v=2020-10-29T02:03:55.267Z" max-height="372px" width="100%" border-radius="6px" />
					<Text
						font="normal 700 18px/28px --fontFamily-googleInter"
						margin="18px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						md-text-align="center"
					>
						Financial Services{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						margin="0px 0px 0px 0px"
						padding="0px 0px 0px 25px"
						md-padding="0px 0px 0px 0px"
					/>
					{"        "}
					<Text
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						lg-font="normal 700 28px/35px --fontFamily-googleInter"
					>
						Industry challenge{"\n\n"}
					</Text>
					<Text
						font="normal 400 18px/29px --fontFamily-googleInter"
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
					>
						Banks and other financial institutions often outsource operational functions to contractors or use third parties to offer value added services. An increasing number of banks are also outsourcing core banking operations (i.e. accessing demand deposit accounts through bankcards) to third party vendors. This creates a new avenue of threats for both the banks and their customers. Regulations and laws are enacted to make sure banks held their vendors accountable for their activities. For example, Federal Financial Institutions Examination Council (FFIEC) recently released the Cybersecurity Assessment Tool that states, “Financial institutions must understand the complex nature of arrangements with outside parties and ensure adequate due diligence for the engagement of the relationships and ongoing monitoring.”{"\n\n"}
					</Text>
					<Text
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
					>
						StaffCop solution{"\n\n"}
					</Text>
					<Text
						font="normal 400 18px/29px --fontFamily-googleInter"
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
					>
						With StaffCop’s activity monitoring solution, it’s possible to quickly see (and prove) exactly who worked on the servers, when, for how long and what they did to ensure security and process accurate billing and SLAs.{"\n"}
						<br />
						StaffCop helps banks and financial institutions uncover potential cybersecurity weaknesses in their online banking system and develop threat intelligence with behavioral and content-based analysis of secure financial data. With continuous monitoring, a bank can prevent bad practices by its vendors and if necessary, conduct detailed file search to make sure vendors are using the right forms, following the agreement and addressing customer request on a prompt and responsive manner.
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Hr width="98%" margin="0px 0px 0px 0px" border-color="rgba(237, 237, 237, 1)" />
		</Section>
		<Section padding="34px 0 34px 0" lg-padding="70px 0 50px 0" color="rgba(85, 85, 85, 1)" background="#F8F8F9">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2097.png?v=2020-10-29T02:07:35.197Z" max-height="372px" width="100%" border-radius="6px" />
					<Text
						font="normal 700 18px/28px --fontFamily-googleInter"
						margin="18px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						md-text-align="center"
					>
						Retail / E-Commerce{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						margin="0px 0px 0px 0px"
						padding="0px 0px 0px 25px"
						md-padding="0px 0px 0px 0px"
					/>
					{"        "}
					<Text
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						lg-font="normal 700 28px/35px --fontFamily-googleInter"
					>
						Industry challenge{"\n\n"}
					</Text>
					<Text
						font="normal 400 18px/29px --fontFamily-googleInter"
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
					>
						Retails and e-commerce merchants and any business processing payment information must comply with PCI DSS. This entails stringent information security requirements for the merchants and their vendors while processing credit card transactions or dealing with customer data. For example, it’s on you, as a merchant to ensure that third party service providers (TPSPs)/vendors you do business with are also following the compliance protocol. You should be able to list each vendor your company does business with, confirm what services they provide, and make sure that each provider listed is compliant with the PCI DSS on an ongoing basis.{"\n\n"}
					</Text>
					<Text
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
					>
						StaffCop solution{"\n\n"}
					</Text>
					<Text
						font="normal 400 18px/29px --fontFamily-googleInter"
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
					>
						The simplest way to ensure PCI DSS compliance and proper auditing is to add third party vendors into your existing  monitoring and auditing system so that you both have a common, transparent, end-to-end auditing system.
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Hr width="98%" margin="0px 0px 0px 0px" border-color="rgba(237, 237, 237, 1)" />
		</Section>
		<Section padding="34px 0 34px 0" lg-padding="70px 0 50px 0" color="rgba(85, 85, 85, 1)" background="#F8F8F9">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2098.png?v=2020-10-29T02:08:17.558Z" max-height="372px" width="100%" border-radius="6px" />
					<Text
						font="normal 700 18px/28px --fontFamily-googleInter"
						margin="18px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						md-text-align="center"
					>
						Retail / E-Commerce{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						margin="0px 0px 0px 0px"
						padding="0px 0px 0px 25px"
						md-padding="0px 0px 0px 0px"
					/>
					{"        "}
					<Text
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						lg-font="normal 700 28px/35px --fontFamily-googleInter"
					>
						Industry challenge{"\n\n"}
					</Text>
					<Text
						font="normal 400 18px/29px --fontFamily-googleInter"
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
					>
						Health Insurance Portability and Accountability Act (HIPAA) is designed to facilitate efficient flow of the healthcare data and protect patient’s Personally Identifiable Information (PII), Personal Health Information (PHI) and Electronic Health Record (EHR) from fraud, theft or other misuse. HIPAA covered organizations must protect these data not just from their employees but ensure any contractors or Business Associates (BAs) has systems in place to comply with the regulation. There are even specific Administrative, Security and Technical Rules for such addressable implementation specifications.{"\n\n"}
					</Text>
					<Text
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
					>
						StaffCop solution{"\n\n"}
					</Text>
					<Text
						font="normal 400 18px/29px --fontFamily-googleInter"
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
					>
						StaffCop helps healthcare organizations conform with ongoing privacy and security requirements of HIPAA regulated PII, PHI and EHR data from both internal and external users.{"\n"}
						<br />
						With StaffCop, you can create security profiles for vendors allowing or restricting access to patient records on a need to know basis. Granular activity monitoring of all system objects like files, networks, websites, apps, emails etc. helps enforce privacy policy. Use instant alerts and audit trail to meet the HIPAA security review and reporting requirements.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Hr width="98%" margin="0px 0px 0px 0px" border-color="rgba(237, 237, 237, 1)" />
		</Section>
		<Section padding="34px 0 34px 0" lg-padding="70px 0 50px 0" color="rgba(85, 85, 85, 1)" background="#F8F8F9">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%2099.png?v=2020-10-29T02:09:14.578Z" max-height="372px" width="100%" border-radius="6px" />
					<Text
						font="normal 700 18px/28px --fontFamily-googleInter"
						margin="18px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						md-text-align="center"
					>
						Telecom{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						margin="0px 0px 0px 0px"
						padding="0px 0px 0px 25px"
						md-padding="0px 0px 0px 0px"
					/>
					{"        "}
					<Text
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						lg-font="normal 700 28px/35px --fontFamily-googleInter"
					>
						Industry challenge{"\n\n"}
					</Text>
					<Text
						font="normal 400 18px/29px --fontFamily-googleInter"
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
					>
						Telecommunications is a fundamental backbone in today’s world. Like utilities and other critical infrastructures, it touches everyone including people, businesses and government. This is why telecom operators and ISPs are often the primary target of cybercriminals. And these criminals are getting desperate. According to a telecom threat intelligent report by Kaspersky, cybercriminals are recruiting insiders including contractors and vendors to gain access to telecommunications networks and subscriber data. They blackmail the targeted insiders forcing them to handover credentials or distribute spear-phishing attacks on the criminal’s behalf.{"\n\n"}
					</Text>
					<Text
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
					>
						StaffCop solution{"\n\n"}
					</Text>
					<Text
						font="normal 400 18px/29px --fontFamily-googleInter"
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
					>
						With StaffCop’s privileged user monitoring and intelligent behavioral analysis, telecom providers can look out for compromised vendors who show abnormal signs, like: attempting to bypass security clearances and gain additional access, attempt to change system component etc.{"\n"}
						<br />
						Moreover, StaffCop’s granular activity monitoring and data loss prevention solution is designed for high-grade security standards like NERC-CIP, NIST-FISMA, ISO 27001 for critical infrastructure providers like telecom and utilities.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Hr width="98%" margin="0px 0px 0px 0px" border-color="rgba(237, 237, 237, 1)" />
		</Section>
		<Section padding="34px 0 34px 0" lg-padding="70px 0 50px 0" color="rgba(85, 85, 85, 1)" background="#F8F8F9">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangle%20100.png?v=2020-10-29T02:09:55.377Z" max-height="372px" width="100%" border-radius="6px" />
					<Text
						font="normal 700 18px/28px --fontFamily-googleInter"
						margin="18px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						md-text-align="center"
					>
						GDPR / Privacy Data Protection{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						margin="0px 0px 0px 0px"
						padding="0px 0px 0px 25px"
						md-padding="0px 0px 0px 0px"
					/>
					{"        "}
					<Text
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						lg-font="normal 700 28px/35px --fontFamily-googleInter"
					>
						Industry challenge{"\n\n"}
					</Text>
					<Text
						font="normal 400 18px/29px --fontFamily-googleInter"
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
					>
						Since May 2018, any organization handling EU citizens’ personal data has to comply with the GDPR law. Known as the Controller, these organizations also have to ensure the GDPR compliance for its Processors. A Processor is someone following instructions from the data controller to collect/process the personal data (PII), in other words a third party vendor. Any controlling organization employing a third party vendor to process EU citizens’ personal data, will be responsible for their GDPR compliance.{"\n\n"}
					</Text>
					<Text
						font="normal 700 32px/38px --fontFamily-googleInter"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
					>
						StaffCop solution{"\n\n"}
					</Text>
					<Text
						font="normal 400 18px/29px --fontFamily-googleInter"
						margin="0px 0px 60px 0px"
						display="inline-block"
						color="rgba(85, 85, 85, 1)"
						letter-spacing="-1%"
					>
						Third-party vendor management, access control and contractual oversight is required to make sure a GDPR Controller has implemented the right accountability procedures for its Processor(s).{"\n"}
						<br />
						StaffCop can ensure your third party is processing privacy data only in the context it is required to be processed. Additionally, the software can be configured with restricted feature sets allowing for further privacy of EU customers. Extensive reporting and forensic capability help you fulfill GDPR’s record keeping and breach reporting requirements.{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Hr width="98%" margin="0px 0px 0px 0px" border-color="rgba(237, 237, 237, 1)" />
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
						Authentication and Access Control{"\n\n"}
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
						Identity based authentication and segregated access control prevents unauthorized access or sharing of confidential data outside your organization. You can setup an access account for each vendor that is going to need authorized clearance and easily track what each vendor is doing at any given time. Create profiles for regular, privileged and contract/external users and then define what information and system resources each profile can access.{"\n\n"}
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
						Session Recording and Playback{"\n\n"}
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
						Live view and history playback provide seamless real-time streaming of third party vendor activity through the dashboard as well as an extensive visual history of all actions taken for both on-site and remote vendors. All actions can also be searched via metadata, regular expression and natural language. Recordings can be tagged by time and date highlighting any alerts and notification.{"\n\n"}
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
						Reduce Administrative Overhead{"\n\n"}
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
						StaffCop has a dedicated Risk dashboard where the supervisor can conduct organization-wide risk assessment. Risk can be profiled by vendors, departments responsible for the vendor or by system objects accessed by the vendor. Reports can be derived by severity of risks or by how many times security violations occurred. Unique Risk Scores helps you identify high-risk vendors or policies so that plans can be developed for treating the risks.{"\n\n"}
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
						Enterprise-Wide Monitoring and Tracking{"\n\n"}
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
						Setup specific monitoring profiles for vendors separate from your regular users. Define what actions and system resources the vendor will be monitored for, when and how. Set schedule for when vendors can log into systems and from which locations. Give access upon manual approval or limit their access within certain applications, networks, websites or by time slots{"\n\n"}
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
						Document Tracking{"\n\n"}
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
						Monitor the interactions between third-party vendors and your data including reports on: who accesses data, when the data is accessed, any changes, abnormal activity or any attempts made to alter the data. The document tracking ability can be configured to fit your policies. Some examples of the possibilities with document tracking are: documents transferred to emails as an attachment, USB, Dropbox, Google Drive, documents printed etc. The goal of document tracking is to supply organizations with a view into what interactions vendors are making with your data.{"\n\n"}
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
						Remote Desktop Control
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
						Remote contractors and vendors can enjoy the simplicity of tracking their project and time with StaffCop with the click of a mouse. Once the StaffCop agent is started, all actions and data are recorded. You can take control of an external vendor's desktop control and access at the first sign of malicious activity to eliminate threats of all kinds.
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
						Powerful Policy and Rules Editor{"\n\n"}
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
						A user's ability to access a desktop can be instantly taken away by putting StaffCop's remote control feature to use. Manually overriding an account removes the user from the equation, ensuring that activity is contained, and potential threats are eliminated. Remote control can be started by simply clicking on the remote icon on all live sessions. Override all manual inputs by a user to prevent sensitive data from being altered and data breaches from occurring.
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
						Integrated Threat Management
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
						Attain full knowledge of which vendors are accessing systems and network resources with in-depth activity reports. Receive real-time alerts for high-risk vendor behavior. Session logs, anomaly and risk analysis, incident reports make your findings and observations tasks easier by identifying where sensitive data is stored, who accessed it and how. Finally, event triggers and logs from StaffCop can be send to SIEM and other analytics tools for a holistic threat management system.
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
						Ensure Quality of Service
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
						Built-in productivity tools let you establish a continuous feedback loop with your vendor network. Refine and adjust your organizational workflow through tracking contract schedules, projects, budget and engagement rate to improve vendor SLA. If your vendors handle customer care services, you can monitor their performance and quality and if necessary, conduct detailed investigation to make sure vendors are using the right forms, following the agreement and addressing customer request on a prompt and responsive manner.
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
						Compliance Management
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
						Many organizations are required to follow several regulatory, cybersecurity, administrative and privacy standards that includes vendors accountability and liability protection. StaffCop has built-in support for many of these compliance standards including HIPAA, GDPR, PCI DSS, ISO 27001 etc. and can be adapted to support evolving compliance requirements with its powerful Policy & Rules editor and various monitoring and reporting capabilities.
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
			<Override slot="text6">
				Employee Monitoring
			</Override>
			<Override slot="text7">
				Categorize applications and web-sites into productive and unproductive. Set up different configurations for particular users, groups and departments. Compare results. ..
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
							Bare Metal{"\n\n"}
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