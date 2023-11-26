import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

export default function CustomizedTimeline(timeLineData) {
	return (
		<Timeline position="alternate">
			<TimelineItem>
				<TimelineOppositeContent
					sx={{ m: "auto 0" }}
					align="right"
					variant="body2"
					color="text.secondary"
				>
					9:30 am
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineConnector />
					<TimelineDot>
						<FastfoodIcon />
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent sx={{ py: "12px", px: 2 }}>
					<Typography variant="h6" component="span">
						Eat
					</Typography>
					<Typography>Because you need strength</Typography>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineOppositeContent
					sx={{ m: "auto 0" }}
					variant="body2"
					color="text.secondary"
				>
					10:00 am
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineConnector />
					<TimelineDot color="primary">
						<LaptopMacIcon />
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent sx={{ py: "12px", px: 2 }}>
					<Typography variant="h6" component="span">
						Code
					</Typography>
					<Typography>Because it&apos;s awesome!</Typography>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineConnector />
					<TimelineDot color="primary" variant="outlined">
						<HotelIcon />
					</TimelineDot>
					<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
				</TimelineSeparator>
				<TimelineContent sx={{ py: "12px", px: 2 }}>
					<Typography variant="h6" component="span">
						Sleep
					</Typography>
					<Typography>Because you need rest</Typography>
					<Typography>Because you need rest</Typography>
					<Typography>Because you need rest</Typography>
					<Typography>Because you need rest</Typography>
					<Typography>Because you need rest</Typography>
					<Typography>Because you need rest</Typography>
				</TimelineContent>
			</TimelineItem>

			<TimelineItem>
				<TimelineOppositeContent
					variant="body2"
					color="text.secondary"
					sx={{ paddingTop: "41px" }}
				>
					September 2020 - September 2021
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot>
						<img
							src="HGSWM.jpg"
							alt="Custom Icon"
							style={{
								width: 70,
								height: 70,
								objectFit: "cover",
								borderRadius: "50%",
							}}
						/>
					</TimelineDot>
				</TimelineSeparator>
				<TimelineContent sx={{ py: "12px", px: 2 }}>
					<Card
						variant="outlined"
						sx={{ border: "2px solid #dcb0ff", padding: 1 }}
					>
						<Typography
							sx={{ fontSize: "14px", textAlign: "left" }}
						>
							HydroGeoscience for Watershed Management Research
							Lab
						</Typography>
						<Typography
							sx={{ fontSize: "12px", textAlign: "left" }}
						>
							Used Python to delineate watersheds and process
							spatial data to inform land management in
							watersheds.
						</Typography>
					</Card>
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
}
