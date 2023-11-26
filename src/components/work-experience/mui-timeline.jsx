import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

export default function CustomizedTimeline({ timeLineData }) {
	return (
		<Timeline position="alternate">
			{timeLineData.map((item, index) => (
				<TimelineItem key={index}>
					<TimelineOppositeContent
						variant="body2"
						color="text.secondary"
						sx={{ paddingTop: "41px" }}
					>
						{item.Date}
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot>
							<img
								src={item.Logo}
								alt="Custom Icon"
								style={{
									width: 70,
									height: 70,
									objectFit: "cover",
									borderRadius: "50%",
								}}
							/>
						</TimelineDot>
						{index < timeLineData.length - 1 && (
							<TimelineConnector />
						)}
					</TimelineSeparator>
					<TimelineContent sx={{ py: "12px", px: 2 }}>
						<Card
							variant="outlined"
							sx={{ border: "2px solid #dcb0ff", padding: 1 }}
						>
							<Typography
								sx={{ fontSize: "14px", textAlign: "left" }}
							>
								{item.Company}
							</Typography>
							<Typography
								sx={{ fontSize: "12px", textAlign: "left" }}
							>
								{item.Description}
							</Typography>
							<Typography
								sx={{ fontSize: "12px", textAlign: "left" }}
							></Typography>
						</Card>
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	);
}
