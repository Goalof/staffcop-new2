import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, Box, Image, Strong, Em } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { BsFillCircleFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"features/custom-reports"} />
		<Helmet>
			<title>
				Configurable Monitoring Profiles
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
		<Section
			padding="180px 0 120px 0"
			background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)"
			lg-padding="100px 0 30px 0"
			md-padding="100px 0 0px 0"
			sm-padding="80px 0 0px 0"
		>
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					width="50%"
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
						padding="0px 10px 0px 0px"
					/>
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 16px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						lg-text-align="center"
					>
						Custom reports
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 0px 0px">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							Dashboards{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" align-items="center">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							Data visualization
							<br />
							{"\n\n"}
						</Text>
					</Box>
					<Box display="flex" align-items="center">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/160% --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							Complex logic
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"    "}
					<Link
						href="/demo-request"
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
				<StackItem width="50%" display="flex" sm-width="100%" lg-width="100%">
					<Override slot="StackItemContent" position="relative" lg-align-items="center" lg-justify-content="center" />
					{"        "}
					<Image
						width="803px"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15:07:09.010Z"
						md-width="400px"
						position="absolute"
						right="-115px"
						left="auto"
						top="-60px"
						bottom="auto"
						lg-width="500px"
						lg-position="relative"
						lg-top="0px"
						lg-right="auto"
						md-top="0px"
						md-right="auto"
						sm-position="relative"
						lg-left="auto"
						lg-bottom="auto"
						md-bottom="auto"
						md-left="auto"
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
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
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
						Configurable Monitoring Profiles{"\n\n"}
					</Text>
					<Text
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
					>
						The ability to create fully-cutomized reports is the unique feature of StaffCop that is possible due to the usage of OLAP-cube data model. This technology allows to apply any amount of filtration criteria to collected data (including anti-fitlers). For each report a number of data visualization modes is available. Then, a number of reports can be united into a dashboard.
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
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
						<Strong>
							Event types
						</Strong>
						{"\n\n\n\n"}
					</Text>
					<Text
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
					>
						Filtration by event types is the fastest way to get a report related to a certain function (screenshots, web-sites visiting, file operation, etc). Each data type represents a corresponding module that is enabled in the configuration.
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/142.png?v=2021-02-02T12:28:35.310Z" />
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
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
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{"\n"}
							<Strong>
								Filtering dimensions
							</Strong>
							{"\n\n"}
						</Strong>
						{"\n\n\n\n"}
					</Text>
					<Text
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
					>
						Filtering dimensions can be applied together with Event types or separately. Each event recorded by StaffCop contains details related to its type. For example, "Web" events can be filtered by domain, subdomain, URL, application used for web-browsing. File operations contain details on file operation type, file path, information about the disk drive where this file is located, name of the application used for working with this file. Some details are common for all event types: time of event, computer and user account who initiated the event.{"\n\n"}
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/143.png?v=2021-02-03T05:26:12.533Z" />
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Text
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
					>
						To apply filtration according to a particular parameter, the left panel of dimensions is used. When we chose "Web" event type we got the list of all web-site visiting events. We can further narrow the output by applying any filtration criterion available for this event type. For example, we are interested in visiting particular web-sites. Usage of dimension panel will give us the list of all website domains that were visited. In this example we choose "tmyzer.com" and "utorrent.com" and the output contains only events related to these two domains.
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/144.png?v=2021-02-03T05:32:38.505Z" />
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Text
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
					>
						It's possible to apply anti-filters by reverting the currently applied ones. If we revert "tmyzer.com" and "utorrent.com" fitlers, the output will contain web-site visiting evetnts related to all registered domains EXCEPT "tmyzer.com" and "utorrent.com". In the bottom panel you can see all currently applied filters (blue for filters, red for anti-filters).
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/145.png?v=2021-02-03T05:35:46.734Z" />
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Text
						font="400 18px/160% --fontFamily-googleInter"
						margin="30px 0px 0px 0px"
						display="inline-block"
						color="#555"
						letter-spacing="-1%"
						sm-text-align="center"
					>
						We can apply filters from other dimensions available for this event type. In this example we applied filtering by offices (or departments) so only activities performed by users of "support" department are displayed.
						<br />
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/146.png?v=2021-02-03T05:40:41.586Z" />
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="0px 0 0px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -346px/3610px no-repeat">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Section background="#FFFFFF" padding="24px 0 24px 0">
				<Override slot="SectionContent" max-width="1200px" align-items="center" />
				<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
					{"    "}
					<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
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
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								{"\n"}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									{"\n"}
									<Strong>
										Complex logic
									</Strong>
									{"\n\n"}
								</Strong>
								{"\n\n"}
							</Strong>
							{"\n\n\n\n"}
						</Text>
						<Text
							font="400 18px/160% --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="#555"
							letter-spacing="-1%"
							sm-text-align="center"
						>
							The easiest way to create filters is to use Constructor and the currently collected data - in this case you can just "Save" the applied filtration criteria as a filter. But quite often, it's required to create a filter for things that haven't yet happend, or to create a filter with the usage of substring (part of word) or to create a filter triggered by a complex chain of conditions. In this case, we can use "Complex request" option for creating filters. The example below contains a filter which will show when members of "Support" department use torrents during their working days (suppose that they work MO-FR). For this we set a filter with 3 conditions:
							<br />
							<br />
							1. "Office" parameter equals to "Support"
							<br />
							2. Web-site URL contains "torrent" OR applications name contains "torrent"
							<br />
							3. Weekdays are not equal to Saturday AND not equal to Sunday{"\n\n"}
						</Text>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
				<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
					{"    "}
					<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/156.png?v=2021-02-03T06:05:08.186Z" width="667px" height="649px" />
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
			</Section>
			<Section background="#FFFFFF" padding="24px 0 24px 0">
				<Override slot="SectionContent" max-width="1200px" align-items="center" />
				<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
					{"    "}
					<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
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
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								{"\n"}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									{"\n"}
									<Strong
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										{"\n"}
										<Strong>
											Data visualization
										</Strong>
										{"\n\n"}
									</Strong>
									{"\n\n"}
								</Strong>
								{"\n\n"}
							</Strong>
							{"\n\n\n\n"}
						</Text>
						<Text
							font="400 18px/160% --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="#555"
							letter-spacing="-1%"
							sm-text-align="center"
						>
							StaffCop features 12 customized data view modes that can be applied to any report that you created by following the previous steps. They are found in menus "Facts" and "Analysis" and they include tables and various types of graphs and charts. View modes from "Facts" menu represent output of the events already set by the currently applied filters. View modes from "Analytics" menu allow changing (add new or remove existing) currently applied number of fitlers in order to get the desired output.
						</Text>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
				<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
					{"    "}
					<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/147.png?v=2021-02-03T06:09:18.831Z" width="229px" height="175px" />
						{"    "}
					</StackItem>
					<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/148.png?v=2021-02-03T06:12:51.849Z" width="264px" height="254px" />
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
			</Section>
			<Section background="#FFFFFF" padding="24px 0 24px 0">
				<Override slot="SectionContent" max-width="1200px" align-items="center" />
				<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
					{"    "}
					<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Text
							font="400 18px/160% --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="#555"
							letter-spacing="-1%"
							sm-text-align="center"
						>
							StaffCop features 12 customized data view modes that can be applied to any report that you created by following the previous steps. They are found in menus "Facts" and "Analysis" and they include tables and various types of graphs and charts. View modes from "Facts" menu represent output of the events already set by the currently applied filters. View modes from "Analytics" menu allow changing (add new or remove existing) currently applied number of fitlers in order to get the desired output.
						</Text>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
				<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
					{"    "}
					<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/149.png?v=2021-02-03T06:17:10.955Z" width="735px" height="706px" />
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
				<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
					{"    "}
					<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/150.png?v=2021-02-03T06:18:18.640Z" width="744px" height="702px" />
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
				<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
					{"    "}
					<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/151.png?v=2021-02-03T06:19:37.659Z" width="745px" height="698px" />
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
				<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
					{"    "}
					<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/152.png?v=2021-02-03T06:21:16.646Z" width="748px" height="697px" />
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
			</Section>
			<Section background="#FFFFFF" padding="24px 0 24px 0">
				<Override slot="SectionContent" max-width="1200px" align-items="center" />
				<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
					{"    "}
					<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
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
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								{"\n"}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									{"\n"}
									<Strong
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										{"\n"}
										<Strong>
											E-mail reports
										</Strong>
										{"\n\n"}
									</Strong>
									{"\n\n"}
								</Strong>
								{"\n\n"}
							</Strong>
							{"\n\n\n\n"}
						</Text>
						<Text
							font="400 18px/160% --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="#555"
							letter-spacing="-1%"
							sm-text-align="center"
						>
							When you have specified filtration criteria and chosen the most approapriate data view mode, you can set-up e-mail scheduled reports.{" "}
							<Em>
								For some parts of complex reports PDF-format of e-mail reports can be unavailable.
							</Em>
							{"\n\n"}
							<br />
						</Text>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
				<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
					{"    "}
					<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/153.png?v=2021-02-03T06:32:49.949Z" />
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
			</Section>
			<Section background="#FFFFFF" padding="24px 0 24px 0">
				<Override slot="SectionContent" max-width="1200px" align-items="center" />
				<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
					{"    "}
					<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
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
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								{"\n"}
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									{"\n"}
									<Strong
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										{"\n"}
										<Strong
											overflow-wrap="normal"
											word-break="normal"
											white-space="normal"
											text-indent="0"
											text-overflow="clip"
											hyphens="manual"
										>
											{"\n"}
											<Strong>
												Dashboards
											</Strong>
											{"\n\n"}
										</Strong>
										{"\n\n"}
									</Strong>
									{"\n\n"}
								</Strong>
								{"\n\n"}
							</Strong>
							{"\n\n\n\n"}
						</Text>
						<Text
							font="400 18px/160% --fontFamily-googleInter"
							margin="30px 0px 0px 0px"
							display="inline-block"
							color="#555"
							letter-spacing="-1%"
							sm-text-align="center"
						>
							Dashboards represent a number of filters combined together for a handier representation of information related to a particular object or task. On the screenshot below there is a dashboard containg the data view modes used in the previous example placed on a single page.
						</Text>
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
				<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
					{"    "}
					<StackItem width="80%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" />
						{"        "}
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/155.png?v=2021-02-03T06:40:07.428Z" />
						{"    "}
					</StackItem>
					{"    "}
				</Stack>
			</Section>
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