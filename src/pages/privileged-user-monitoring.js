import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Span, Hr, Icon, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { BsFillCircleFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"privileged-user-monitoring"} />
		<Helmet>
			<title>
				Privileged User Monitoring
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
		<Section padding="180px 0 120px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)" lg-padding="140px 0 60px 0" md-padding="90px 0 30px 0">
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
						Privileged User Monitoring
					</Text>
					<Text
						font="normal 400 18px/160% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#555"
						md-font="normal 400 16px/140% --fontFamily-googleInter"
						sm-text-align="center"
					>
						Activity Monitoring, Privileged Access Management and DLP Technology to Protect Your Data & IT Systems
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
						Monitor Privileged Users & Vendors with StaffCop
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="70%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" align-items="center" flex-direction="column" />
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
						sm-margin="1px 0px 0px 0px"
					>
						Privileged users have access to your core IT systems, network, applications and data. Since such users have access to elevated credentials, it can be incredibly difficult to detect a malicious privileged user before they have caused damage already. These users have a significant advantage over external attackers. In addition to already having access to privileged systems, they are aware of their organization’s policies, procedures, and technology and vulnerabilities. Stolen or hacked privileged accounts are also{" "}
						<Span
							color="--primary"
							data-q-widget-type="PRIMITIVE"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							the number one choice for many external criminals
						</Span>
						{" "}looking for gaining access to otherwise ‘secure’ systems.
						<br />
						<br />
						For all of these reasons and the increasing complexity of IT environment, privileged user monitoring, identity verification and privileged access management are becoming critical components in an organization’s security strategy.
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
				{"        "}
				<StackItem width="70%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" align-items="center" flex-direction="column" />
					{"        "}
					<Text
						font="400 18px/28px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#555"
						width="100%"
						md-font="400 14px/20px --fontFamily-googleInter"
						md-width="100%"
						sm-text-align="center"
						text-align="justify"
					>
						StaffCop’s real-time user activity monitoring and data loss prevention solutions help you monitor privileged users to automatically detect anomalous behavior and suspicious activity that signal a compromised or malicious privileged user. For example: creation of back-door accounts, transmission of sensitive data outside the company etc.
						<br />
						StaffCop’s Intelligent Policy & Rules Engine then automatically enforces data protection and access control rules on the compromised privileged user to prevent data exfiltration, IP theft, fraud, industrial espionage, sabotage and other malicious attempts.
						<br />
						With StaffCop Privileged User Monitoring, conduct threat analysis, forensic investigation and security auditing using complete session recording and metadata analysis and immutable logging features. Finally, extend your security coverage with built-in integration with security information and event management (SIEM) and threat analytics systems. With StaffCop’s privileged user monitoring you can:
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="75%" display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="18px 0px 0px 0px"
						/>
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							Identify and track all privileged users including system administrators, DBAs, network engineers, system architects, developers, IT auditors, remote users, third-party vendors etc.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="18px 0px 0px 0px"
						/>
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							Implement a ‘zero-trust’ data loss prevention (DLP) strategy utilizing activity,
							<br />
							system-access, schedule and content-based rules.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="18px 0px 0px 0px"
						/>
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							Create monitoring and access profiles based on a user’s role, separation of duties,
							<br />
							existing Active Directory Group Policy or on a need to know basis.
						</Text>
					</Box>
					<Box display="flex" margin="0px 0px 18 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							padding="18px 0px 0px 0px"
						/>
						<Text margin="9px 0px 9px 18px" font="400 18px/160% --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							Audit privileged sessions with immutable logs, session recording and real-time alerts
							<br />
							and notifications to detect credential sharing and other abuse of root accounts.
						</Text>
					</Box>
					{"            "}
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
							Real-time Monitoring for Visibility & Contro
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Teramind monitors all user activity over endpoints, servers/terminal servers, network and the Cloud covering 22+ system objects like: web, apps, email, file transfers even on-screen content in real-time.
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
							Detect Anomalies with Intelligent Behavioral Engine
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Prevent mishandling of confidential data like sharing over the Cloud or removable media.{" "}
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
							Conduct Forensic Investigation and IT Audit
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Video/audio recording of all user activity, session recording, immutable logs, alerts and optional OCR search are just a few examples of StaffCop’s powerful audit and forensic capabilities. Together they provide a vast collection of investigation data to locate the cause and source of any privileged user related threats with pinpoint accuracy.
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
							Risk Analysis to Identify Security Gaps & Vulnerabilities
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Dynamic risk scoring and vulnerabilities scanning identifies top risky users, policy and rules and system components. Trend graphs and severity mapping warns you about any change in threat level before it becomes critical.
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
							Protect Data and Privacy with Endpoint DLP
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Schedule employees by shift or workload and easily inform all employees about any updates.
							<br />
							<br />
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
							Conform with Regulatory Compliance
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							Privileged user monitoring and access management is required for most of the major compliance regimens, including HIPAA, PCI-DSS, GDPR, ISO 27001 etc.{" "}
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
				Industry Statistics Show the Need for{" "}
				<br />
				<Span color="--primary">
					Insider Threat Prevention Solutions
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
							Application monitoring
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							According to a survey of 400,000 member online, user privilege and increased sensitive data are main risk enablers. Source: Cybersecurity Insiders.{" "}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
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
								37%{" "}
							</Span>
							Excess Privilege
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
								34%{" "}
							</Span>
							Increased Amount of Sensitive Data
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
							Majority of enterprise breaches involve privileged accounts
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							A survey of 1,000 IT decision makers in the U.S. and the U.K. confirms that 74% of enterprise breaches involved privileged accounts. Source: Centrify.{" "}
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
								74%{" "}
							</Span>
							Enterprise Breaches Involved Privileged Credential Abuse
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
							Privileged users are one of the biggest security risks
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							In a recent survey, 55% mention that privileged IT users/admins pose the biggest insider security risk to their organization. Source: Crowd Research Partners.{" "}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
							sm-margin="0px 0px 0px 0px"
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
								55%
							</Span>
							{" "}Of Companies Say Privileged Users are Their Biggest Insider Threat
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
							Systems logs and user data are critical for security analytics
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
							display="inline-block"
							color="rgba(85, 85, 85, 1)"
							sm-font="normal 400 16px/140% Inter, sans-serif"
						>
							47% IT pros think login data and 41% think private activities on coproprate devices are most important from a security point of view. Source: Cynet.{" "}
						</Text>
						<Text
							font="--lead"
							margin="0px 0px 18px 0px"
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
								47%
							</Span>
							{" "}Login Date and Time
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
								41%
							</Span>
							{" "}Private User Activity on Company Devices
						</Text>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#F8F8F9" padding="70px 0 90px 0" sm-padding="24px 0 50px 0">
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
				width="70%"
			>
				Types of employee{" "}
				<Span color="--primary">
					monitoring software
				</Span>
			</Text>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="center"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="40px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
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
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Smart rules & automated alerts
						</Override>
						<Override slot="Before Text2 :default">
							Smart rules & automated alerts
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Groupxzcxzc.svg?v=2020-10-28T21:03:36.802Z" margin="-20px 0px 36px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="center"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="40px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
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
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Live view & history playback
						</Override>
						<Override slot="Before Text2 :default">
							Live view & history playback
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/cvbcvbvcbcv.svg?v=2020-10-28T21:03:36.801Z" margin="-20px 0px 36px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="center"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
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
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							instant message monitoring
						</Override>
						<Override slot="Before Text2 :default">
							instant message monitoringinstant message monitoring
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Messages,%20Chat.18%201.svg?v=2020-10-28T15:43:13.520Z" margin="-20px 0px 36px -10px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="start"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
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
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Keystroke logging
						</Override>
						<Override slot="Before Text2 :default">
							Keystroke logging
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/gjkhgkh.svg?v=2020-10-28T21:03:36.833Z" margin="-3px 0px 39px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="start"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
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
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Website monitoring
						</Override>
						<Override slot="Before Text2 :default">
							Website monitoring
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/oiuioioui.svg?v=2020-10-28T21:03:36.804Z" margin="-15px 0px 33px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="start"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
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
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Email monitoring
						</Override>
						<Override slot="Before Text2 :default">
							Email monitoring
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(6).svg?v=2020-10-28T15:43:13.528Z" margin="-20px 0px 38px 0px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="start"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
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
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							file transfer tracking
						</Override>
						<Override slot="Before Text2 :default">
							file transfer tracking
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Group%20(7).svg?v=2020-10-28T15:43:13.528Z" margin="-14px 0px 32px 1px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="start"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
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
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Remote desktop control
						</Override>
						<Override slot="Before Text2 :default">
							Remote desktop control
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/vnb14dasd.svg?v=2020-10-28T21:03:36.828Z" margin="-8px 0px 44px 1px" />
					</Components.Knopka2>
					{"    "}
				</StackItem>
				<StackItem width="33.3333%" display="flex" md-width="100%" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					{"        "}
					<Components.Knopka2
						height="100%"
						display="flex"
						flex-direction="column"
						justify-content="start"
						padding="40px 36px 40px 36px"
						background="#FFFFFF"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="6px"
						lg-padding="68px 36px 30px 36px"
						position="relative"
						align-items="flex-start"
						border-width="1px"
						box-shadow=" 0px 0px 1px rgba(0, 0, 0, 0.14), 0px 6px 12px rgba(0, 0, 0, 0.06)"
						border-color="rgba(255, 255, 255, 0.05)"
						sm-padding="30px 36px 30px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="rgba(0, 0, 238, 0)"
							width="0px"
							height="0px"
						/>
						<Override
							slot="Link :hover"
							width="48px"
							align-items="center"
							display="none"
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
							display="none"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#ffffff"
							text-decoration-line="initial"
							top="0px"
							bottom="0px"
							left="0px"
							right="0px"
							height="0px"
							width="0px"
						/>
						<Override
							slot="Before Text2"
							font="normal 600 24px/29px --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							color="rgba(19, 33, 42, 1)"
						>
							Application monitoring
						</Override>
						<Override slot="Before Text2 :default">
							Application monitoring
						</Override>
						<Override slot="Before Text2 :hover" color="--primary" />
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/uyiuiuyiyu.svg?v=2020-10-28T21:03:36.822Z" margin="-8px 0px 44px 1px" />
					</Components.Knopka2>
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
						System-Wide Monitoring & Control
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
						StaffCop visually records every action that a privileged user makes on your IT systems including endpoints, servers/terminal servers, network and the Cloud for 22+ system objects like: web, apps, email, file transfers, etc. Uncover what your users are up to both online and offline. Each object can be configured to take into consideration what needs to be monitored and who has access to the monitored records. This allows for instant administrative oversight in respect to all user activity while complying with any privacy requirements.
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
						Real-Time Alerts and Notifications
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
						Real-time alerts and trend reports show what rules were broken, when, by whom, what action was taken and the context. Receive instant warning or scheduled notification emails of suspicious user activity. Search for all users or a particular user or group activity.{" "}
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
						Behavioral Anomaly Detection
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
						Define what constitutes dangerous or harmful user behavior and StaffCop’s sophisticated anomaly engine will automatically detect when a user, department or group deviates from their normal parameters or exceeds acceptable risk levels. StaffCop can detect anomalies in applications, emails, network, file activities, printing and more. Immediately get notified about harmful user activity, lock out user or take remote control of the compromised system before any malicious or fraudulent attempts are made:
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
						Authentication and Access Control
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
						Identity based authentication and segregated access control prevents unauthorized access or sharing of confidential data. You can setup an access account for each privileged user that is going to need authorized clearance and easily track what each user is doing at any given time. With group profiles, you can create different access levels based on departments, job function or source of access (i.e. remote/third-party etc.) and then define what information and system resources each group can access
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
						Session Recording and Audit
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
						StaffCop visually records every action that a user makes while on a machine, allowing for both live viewing and pas recordings. Extensive meta data and fast indexing allows past incidents to be searched and retrieved in seconds. Optional audio support for the recording of both sound outputs and inputs, ensuring that all audio coming from speakers and microphones is captured. Recorded files can be exported and downloaded as MP4 files. Immutable session logs and systems logs can be exported as PDF/CSV file or sent to a log monitoring and analytics software like LogRythm.
					</Text>
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
				<Span
					color="rgba(255, 255, 255, 0)"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					data-q-widget-type="PRIMITIVE"
				>
					.
				</Span>
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
					data-q-widget-type="PRIMITIVE"
				>
					.
				</Span>
			</Override>
			<Override slot="text6">
				Employee Monitoring
			</Override>
			<Override slot="text7">
				Categorize applications and web-sites into productive and unproductive. Set up different configurations for particular users, groups and departments. Compare results.
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