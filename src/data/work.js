export const WORK_INFO = {
	details: {
		logo: "/project-portfolio/cat.png",
	},

	work: [
		{
			Company: "Amazon",
			Logo: "aws.jpg",
			Description:
				"Used AWS Lambda & EMR Serverless to extract then transform data from an internal catalog on a daily basis, Apache Iceberg to store the data, and SES to automate the sending of a Jupyter Notebook which queries the Iceberg table using Athena as an HTML file.",
			Date: "September 2024-December 2024",
		},

		{
			Company: "Arius Technology",
			Logo: "Arius.jpg",
			Description:
				"Updated several repositories to abide to core C++ best practices in accordance to clang-tidy pre-commit checks. Virtualized the development environment using Docker.",
			Date: "May 2024-August 2024",
		},

		{
			Company: "Forsite Consultants",
			Logo: "Forsite.jpg",
			Description:
				"Calibrated the input parameters of a tree segmentation algorithm. Created spatial data inputs as training data for a tree species identification machine learning algorithm. Automated workflows using a collection of geospatial Python libraries",
			Date: "May 2022-December 2023",
		},

		{
			Company: "Transport Canada",
			Logo: "TC.jpg",
			Description:
				"Supported in the review of proposed development projects under the Canadian Environmental Impact Assessment Act. Managed budget sheets to aid in the organization of FCSAP projects.",
			Date: "January 2021-August 2021",
		},

		{
			Company: "HydroGeoscience for Watershed Management Research Lab",
			Logo: "HGSWM - Copy.jpg",
			Description:
				"Used Python to delineate watersheds and process spatial data to inform land management in watersheds.",
			Date: "September 2020 - January 2022",
		},
	],
};
