import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Image, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"partners"} />
		<Helmet>
			<title>
				Partners
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
		<Section padding="103px 0 18px 0" sm-padding="80px 0 18px 0">
			<Override
				slot="SectionContent"
				max-width="1100px"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Rectangleghjkkl.png?v=2020-11-09T11:42:48.323Z) 100% 100% /cover no-repeat scroll padding-box"
				padding="59px 0px 66px 72px"
				width="100%"
				border-radius="6px"
				height="267px"
				justify-content="flex-end"
				lg-border-radius="6px"
				lg-padding="59px 0px 66px 0px"
				lg-width="95%"
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
						Partners
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section background="#FFFFFF" padding="24px 0 70px 0" sm-padding="24px 0 50px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				<StackItem width="100%">
					<Override slot="StackItemContent" flex-direction="column" md-align-items="center" />
					<Text
						font="normal 700 32px/38px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="rgba(19, 33, 42, 1)"
						margin="0px 0px 15px 0px"
						sm-text-align="center"
					>
						StaffCop regional distributors
					</Text>
					<Text
						font="normal 400 18px/160% --fontFamily-googleInter"
						letter-spacing="-1%"
						color="rgba(85, 85, 85, 1)"
						margin="15px 0px 0px 0px"
						sm-text-align="center"
					>
						You can contact your local distributor for the information.
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override
						slot="StackItemContent"
						sm-align-items="center"
						sm-justify-content="center"
						md-text-align="center"
						md-align-items="center"
						md-justify-content="center"
					/>
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/AU.svg?v=2020-11-07T22:50:21.309Z" margin="0px 18px 0px 0px" />
					<Text font="normal 700 24px/29px --fontFamily-googleInter" letter-spacing="-1%">
						Australia
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" sm-align-items="center" sm-justify-content="center" md-justify-content="center" />
					<Text font="normal 400 18px/28px --fontFamily-googleInter" letter-spacing="-1%" color="#1465FF" sm-text-align="center">
						i2Biz
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" md-align-items="center" />
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
						sm-text-align="center"
					>
						+61 (03) 9111 5657
					</Text>
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
					>
						<Link text-decoration-line="initial" color="#1465FF" href="malito:info@blackwallsolutions.com" sm-text-align="center">
							enquiries@i2biz.com.au
						</Link>
					</Text>
				</StackItem>
				{"  "}
			</Stack>
			<Hr width="98%" margin="26px 0px 20px 0px" border-color="rgba(237, 237, 237, 1)" />
			<Stack margin="0px 0px 0px 0px">
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" align-items="flex-start" md-justify-content="center" />
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/PK.svg?v=2020-11-07T22:54:10.547Z" margin="4px 18px 0px 0px" />
					<Text font="normal 700 24px/29px --fontFamily-googleInter" letter-spacing="-1%" margin="0px 0px 0px 0px">
						Pakistan
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" md-justify-content="center" />
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#1465FF"
						margin="0px 0px 0px 0px"
						sm-text-align="center"
					>
						Enterprise Hardware Solutions Ltd.
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" md-justify-content="center" md-align-items="center" />
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
						sm-text-align="center"
					>
						+924235916720 / +923231416914
					</Text>
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
					>
						<Link text-decoration-line="initial" color="#1465FF" href="malito:info@blackwallsolutions.com">
							info@ehws.biz
						</Link>
					</Text>
				</StackItem>
				{"  "}
			</Stack>
			<Hr width="98%" margin="26px 0px 20px 0px" border-color="rgba(237, 237, 237, 1)" />
			<Stack margin="0px 0px 0px 0px">
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" align-items="flex-start" md-justify-content="center" />
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/AE.svg?v=2020-11-07T22:58:06.153Z" margin="4px 18px 0px 0px" />
					<Text font="normal 700 24px/29px --fontFamily-googleInter" letter-spacing="-1%" margin="0px 0px 0px 0px">
						United Arab Emirates
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" md-justify-content="center" />
					<Text font="normal 400 18px/28px --fontFamily-googleInter" letter-spacing="-1%" color="#1465FF" margin="0px 0px 0px 0px">
						Parasol Software
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" md-justify-content="center" md-align-items="center" />
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
					>
						+971 4 394 2238
					</Text>
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
					/>
				</StackItem>
				{"  "}
			</Stack>
			<Hr width="98%" margin="36px 0px 20px 0px" border-color="rgba(237, 237, 237, 1)" />
			<Stack margin="0px 0px 0px 0px">
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" align-items="flex-start" md-justify-content="center" />
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/TR.svg?v=2020-11-07T23:00:35.096Z" margin="4px 18px 0px 0px" />
					<Text font="normal 700 24px/29px --fontFamily-googleInter" letter-spacing="-1%" margin="0px 0px 0px 0px">
						Turkey
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" md-justify-content="center" />
					<Text font="normal 400 18px/28px --fontFamily-googleInter" letter-spacing="-1%" color="#1465FF" margin="0px 0px 0px 0px">
						Norm Yazilim
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" md-justify-content="center" md-align-items="center" />
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
					>
						+90 312 229 09 81
					</Text>
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
					>
						<Link text-decoration-line="initial" color="#1465FF" href="malito:info@blackwallsolutions.com">
							info@normyazilim.com
						</Link>
					</Text>
				</StackItem>
				{"  "}
			</Stack>
			<Hr width="98%" margin="26px 0px 20px 0px" border-color="rgba(237, 237, 237, 1)" />
			<Stack margin="0px 0px 0px 0px">
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" align-items="flex-start" md-justify-content="center" />
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/VN.svg?v=2020-11-07T23:08:28.551Z" margin="4px 18px 0px 0px" />
					<Text font="normal 700 24px/29px --fontFamily-googleInter" letter-spacing="-1%" margin="0px 0px 0px 0px">
						Vietnam
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" md-justify-content="center" />
					<Text font="normal 400 18px/28px --fontFamily-googleInter" letter-spacing="-1%" color="#1465FF" margin="0px 0px 0px 0px">
						Tri Thuc
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" md-justify-content="center" md-align-items="center" />
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
					>
						+84908458515
					</Text>
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
					>
						<Link text-decoration-line="initial" color="#1465FF" href="malito:info@blackwallsolutions.com">
							sales@staffcop.com.vn
						</Link>
					</Text>
				</StackItem>
				{"  "}
			</Stack>
			<Hr width="98%" margin="26px 0px 20px 0px" border-color="rgba(237, 237, 237, 1)" />
			<Stack margin="0px 0px 0px 0px">
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" align-items="flex-start" md-justify-content="center" />
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/RS.svg?v=2020-11-07T23:11:51.392Z" margin="4px 18px 0px 0px" />
					<Text font="normal 700 24px/29px --fontFamily-googleInter" letter-spacing="-1%" margin="0px 0px 0px 0px">
						Serbia
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" md-justify-content="center" />
					<Text font="normal 400 18px/28px --fontFamily-googleInter" letter-spacing="-1%" color="#1465FF" margin="0px 0px 0px 0px">
						Aleksandar Beker
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" md-align-items="center" />
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
					>
						+381 63 533335
					</Text>
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
					>
						<Link text-decoration-line="initial" color="#1465FF" href="malito:info@blackwallsolutions.com">
							alek@beker.rs
						</Link>
					</Text>
				</StackItem>
				{"  "}
			</Stack>
			<Hr width="98%" margin="26px 0px 20px 0px" border-color="rgba(237, 237, 237, 1)" />
			<Stack margin="0px 0px 0px 0px">
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" align-items="flex-start" md-justify-content="center" />
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/HU.svg?v=2020-11-07T23:15:06.967Z" margin="4px 18px 0px 0px" />
					<Text font="normal 700 24px/29px --fontFamily-googleInter" letter-spacing="-1%" margin="0px 0px 0px 0px">
						Hungary
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" md-justify-content="center" />
					<Text font="normal 400 18px/28px --fontFamily-googleInter" letter-spacing="-1%" color="#1465FF" margin="0px 0px 0px 0px">
						Mind-Info Informatikai Kft
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" md-justify-content="center" md-align-items="center" />
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
					>
						+36 20 421 8775
					</Text>
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
					>
						<Link text-decoration-line="initial" color="#1465FF" href="malito:info@blackwallsolutions.com">
							info@mindinfo.hu
						</Link>
					</Text>
				</StackItem>
				{"  "}
			</Stack>
			<Hr width="98%" margin="26px 0px 20px 0px" border-color="rgba(237, 237, 237, 1)" />
			<Stack margin="0px 0px 0px 0px">
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" align-items="flex-start" md-justify-content="center" />
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/EC.svg?v=2020-11-07T23:17:29.999Z" margin="4px 18px 0px 0px" />
					<Text font="normal 700 24px/29px --fontFamily-googleInter" letter-spacing="-1%" margin="0px 0px 0px 0px">
						Ecuador
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" md-justify-content="center" />
					<Text font="normal 400 18px/28px --fontFamily-googleInter" letter-spacing="-1%" color="#1465FF" margin="0px 0px 0px 0px">
						<Link href="http://staffcop.ec/">
							Vocot. C. A.
						</Link>
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" md-align-items="center" />
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
					>
						+593 98 730 1364
					</Text>
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
					>
						<Link text-decoration-line="initial" color="#1465FF" href="malito:info@blackwallsolutions.com">
							<Link href="mailto:morales.v@vokot.ec">
								morales.v@vokot.ec
							</Link>
							{"\n\n"}
						</Link>
					</Text>
				</StackItem>
				{"  "}
			</Stack>
			<Hr width="98%" margin="26px 0px 20px 0px" border-color="rgba(237, 237, 237, 1)" />
			<Stack margin="0px 0px 0px 0px">
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" align-items="flex-start" md-justify-content="center" />
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/MX.svg?v=2020-11-07T23:19:24.777Z" margin="4px 18px 0px 0px" />
					<Text font="normal 700 24px/29px --fontFamily-googleInter" letter-spacing="-1%" margin="0px 0px 0px 0px">
						Mexico
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" md-justify-content="center" />
					<Text font="normal 400 18px/28px --fontFamily-googleInter" letter-spacing="-1%" color="#1465FF" margin="0px 0px 0px 0px">
						<Link href="https://auditoria.com.mx/staffcop">
							Auditoria y seguridad{" "}
							<br />
							informatica sa de cv.
						</Link>
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" md-justify-content="center" md-align-items="center" />
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
					>
						+593 98 730 1364
					</Text>
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
					>
						<Link text-decoration-line="initial" color="#1465FF" href="malito:info@blackwallsolutions.com">
							erutrade@gmail.com
						</Link>
					</Text>
				</StackItem>
				{"  "}
			</Stack>
			<Hr width="98%" margin="26px 0px 20px 0px" border-color="rgba(237, 237, 237, 1)" />
			<Stack margin="0px 0px 0px 0px">
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" align-items="flex-start" md-justify-content="center" />
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/SG.svg?v=2020-11-07T23:23:13.342Z" margin="4px 18px 0px 0px" />
					<Text font="normal 700 24px/29px --fontFamily-googleInter" letter-spacing="-1%" margin="0px 0px 0px 0px">
						Singapore
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" md-justify-content="center" />
					<Text font="normal 400 18px/28px --fontFamily-googleInter" letter-spacing="-1%" color="#1465FF" margin="0px 0px 0px 0px">
						<Link href="https://visibleone.com/">
							Visible One
						</Link>
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" md-align-items="center" />
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
					>
						+65 6248 0838
					</Text>
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
					>
						<Link text-decoration-line="initial" color="#1465FF" href="malito:info@blackwallsolutions.com">
							info@visibleone.com
						</Link>
					</Text>
				</StackItem>
				{"  "}
			</Stack>
			<Hr width="98%" margin="26px 0px 20px 0px" border-color="rgba(237, 237, 237, 1)" />
			<Stack margin="0px 0px 0px 0px">
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" align-items="flex-start" md-justify-content="center" />
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/PH.svg?v=2020-11-07T23:20:29.121Z" margin="4px 18px 0px 0px" />
					<Text font="normal 700 24px/29px --fontFamily-googleInter" letter-spacing="-1%" margin="0px 0px 0px 0px">
						Philippines
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" md-justify-content="center" />
					<Text font="normal 400 18px/28px --fontFamily-googleInter" letter-spacing="-1%" color="#1465FF" margin="0px 0px 0px 0px">
						<Link href="https://www.securezone.com.ph/employee-productivity">
							Secure Zone
						</Link>
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" md-align-items="center" />
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
					>
						+630283659285
					</Text>
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
					>
						<Link text-decoration-line="initial" color="#1465FF" href="malito:info@blackwallsolutions.com">
							sales@securezone.com.ph
						</Link>
					</Text>
				</StackItem>
				{"  "}
			</Stack>
			<Hr width="98%" margin="26px 0px 20px 0px" border-color="rgba(237, 237, 237, 1)" />
			<Stack margin="0px 0px 0px 0px">
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" align-items="flex-start" md-justify-content="center" />
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/bangladesh_flag.png?v=2021-04-14T06:45:14.505Z" margin="4px 18px 0px 0px" width="28px" />
					<Text font="normal 700 24px/29px --fontFamily-googleInter" letter-spacing="-1%" margin="0px 0px 0px 0px">
						Bangladesh
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" md-align-items="baseline" md-justify-content="center" />
					<Text font="normal 400 18px/28px --fontFamily-googleInter" letter-spacing="-1%" color="#1465FF" margin="0px 0px 0px 0px">
						<Link href="https://www.storerepublic.com/">
							Store Rupublic
						</Link>
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" md-align-items="center" md-justify-content="center" />
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
						sm-text-align="center"
					>
						+8801758068531, +8801402126084
					</Text>
				</StackItem>
				{"  "}
			</Stack>
			<Hr width="98%" margin="26px 0px 20px 0px" border-color="rgba(237, 237, 237, 1)" />
			<Stack margin="0px 0px 0px 0px">
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" align-items="flex-start" md-justify-content="center" />
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/thailand_flag64.png?v=2021-04-14T06:42:54.283Z" margin="4px 18px 0px 0px" width="28px" />
					<Text font="normal 700 24px/29px --fontFamily-googleInter" letter-spacing="-1%" margin="0px 0px 0px 0px">
						Thailand
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" md-align-items="baseline" md-justify-content="center" />
					<Text font="normal 400 18px/28px --fontFamily-googleInter" letter-spacing="-1%" color="#1465FF" margin="0px 0px 0px 0px">
						<Link href="http://www.softdebut.com/">
							Soft De'But
						</Link>
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" md-align-items="center" md-justify-content="center" />
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
						sm-text-align="center"
					>
						+662 8614600
					</Text>
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
						sm-text-align="center"
					>
						<Link href="#">
							<Link href="mailto:sales@softdebut.com">
								sales@softdebut.com
							</Link>
						</Link>
					</Text>
				</StackItem>
				{"  "}
			</Stack>
			<Hr width="98%" margin="26px 0px 20px 0px" border-color="rgba(237, 237, 237, 1)" />
			<Stack margin="0px 0px 0px 0px">
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" align-items="flex-start" md-justify-content="center" />
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/indonesia_flag.png?v=2021-04-14T05:40:56.863Z" margin="4px 18px 0px 0px" width="28 px" />
					<Text font="normal 700 24px/29px --fontFamily-googleInter" letter-spacing="-1%" margin="0px 0px 0px 0px">
						Indonesia
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" md-align-items="baseline" md-justify-content="center" />
					<Text font="normal 400 18px/28px --fontFamily-googleInter" letter-spacing="-1%" color="#1465FF" margin="0px 0px 0px 0px">
						<Link href="https://www.kum.co.id/v2/pages-1014-StaffCop.html">
							PT KREASI UTAMA MANDIRI
						</Link>
					</Text>
				</StackItem>
				<StackItem width="33.333%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" md-align-items="center" md-justify-content="center" />
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
						sm-text-align="center"
					>
						+62-897-123-3000, +62 899-8973-000
					</Text>
					<Text
						font="normal 400 18px/28px --fontFamily-googleInter"
						letter-spacing="-1%"
						color="#555"
						margin="0px 0px 0px 0px"
						text-align="right"
						sm-text-align="center"
					>
						<Link href="mailto:info@kum.co.id">
							info@kum.co.id
						</Link>
					</Text>
				</StackItem>
				{"  "}
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