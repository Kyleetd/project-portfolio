import { useTheme } from "@mui/material/styles";
import "../../../data/styles.css";

const ParticleOptions = () => {
	const theme = useTheme();

	const options = {
		background: {
			color: {
				value: window
					.getComputedStyle(document.documentElement)
					.getPropertyValue("--background-color"),
			},
			opacity: 0.5,
		},
		fpsLimit: 120,
		interactivity: {
			events: {
				onHover: {
					enable: true,
					mode: ["grab", "bubble"],
				},
				resize: true,
			},
			modes: {
				grab: {
					distance: 200,
					links: {
						opacity: 0.6,
					},
				},
				bubble: {
					distance: 200,
					duration: 2,
					opacity: 0.8,
					size: 20,
				},
			},
		},
		particles: {
			//   color: {
			//     value: theme.palette.primary.main,
			//   },
			links: {
				color: theme.palette.primary.main,
				distance: 125,
				enable: true,
				opacity: 0.4,
				width: 1,
			},
			move: {
				direction: "none",
				enable: true,
				outModes: {
					default: "bounce",
				},
				speed: 2,
				straight: false,
				bounce: true,
			},
			number: {
				density: {
					enable: true,
					area: 800,
				},
				value: 75,
			},
			//   opacity: {
			//     value: {
			//       min: 1,
			//       max: 1,
			//     },
			//     animation: {
			//       enable: true,
			//       speed: 5,
			//       sync: false,
			//     },
			//   },
			shape: {
				options: {
					image: [
						{
							name: "moon",
						},
						{
							name: "planet",
						},
						{
							name: "star",
						},
					],
				},
				type: "image",
			},
			size: {
				value: { min: 5, max: 8 },
			},
		},
		preload: [
			{
				name: "moon",
				src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjQ0NDQ0ZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8cGF0aCBkPSJNNy42MzI2MiAzLjA2Njg5QzguOTg1NjcgMy4zNTczMyA5Ljk5OTk5IDQuNTYwMjUgOS45OTk5OSA2LjAwMDA3QzkuOTk5OTkgNy42NTY5MyA4LjY1Njg1IDkuMDAwMDcgNi45OTk5OSA5LjAwMDA3QzUuNDUxMiA5LjAwMDA3IDQuMTc2NTMgNy44MjY0MSA0LjAxNjg1IDYuMzE5OTciIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPHBhdGggZD0iTTIyIDEzLjA1MDVDMjEuMzY0NyAxMi40MDIyIDIwLjQ3OTMgMTIgMTkuNSAxMkMxNy41NjcgMTIgMTYgMTMuNTY3IDE2IDE1LjVDMTYgMTcuMjYzMiAxNy4zMDM5IDE4LjcyMTkgMTkgMTguOTY0NiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8cGF0aCBkPSJNMTQuNSA4LjUxTDE0LjUxIDguNDk4ODkiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAgMTdDMTEuMTA0NiAxNyAxMiAxNi4xMDQ2IDEyIDE1QzEyIDEzLjg5NTQgMTEuMTA0NiAxMyAxMCAxM0M4Ljg5NTQzIDEzIDggMTMuODk1NCA4IDE1QzggMTYuMTA0NiA4Ljg5NTQzIDE3IDEwIDE3WiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPg==",
				width: 16,
				height: 16,
			},
			{
				name: "planet",
				src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4NCjxzdmcgaGVpZ2h0PSI4MDBweCIgd2lkdGg9IjgwMHB4IiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiANCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojQzhGNERFOyIgY3g9IjI1OS4yMTciIGN5PSIyNTkuMTczIiByPSIyMDYuNTEyIi8+DQo8cGF0aCBkPSJNMTUxLjYyNCwzMDEuNjA1aC0wLjAxNWMtOC4xNDUsMC0xNC43NDMsNi42MDQtMTQuNzQzLDE0Ljc1MXM2LjYxMSwxNC43NTEsMTQuNzU4LDE0Ljc1MXMxNC43NTEtNi42MDQsMTQuNzUxLTE0Ljc1MQ0KCVMxNTkuNzcxLDMwMS42MDUsMTUxLjYyNCwzMDEuNjA1eiIvPg0KPHBhdGggZD0iTTQ3Mi4yNzIsMzE5LjIyNmM1LjQwOS0xOS4zMDEsOC4yMTItMzkuNDYzLDguMjEyLTYwLjA1N2MwLTU5LjEwMi0yMy4wMTctMTE0LjY2Ni02NC44MDgtMTU2LjQ1Ng0KCWMtNTcuNjczLTU3LjY3MS0xMzkuNTE5LTc2Ljc3OC0yMTMuMjItNTcuMzQ0QzExOC43ODktNC4wMTYsNTIuMTY5LTEzLjU3OSwxOS4zMjEsMTkuMjdDMi44MSwzNS43OC0xMS41NjcsNjkuNjcyLDEzLjY5MiwxMzcuMzgxDQoJYzcuNjA3LDIwLjM5MiwxOC4zNTksNDIuMzIyLDMxLjczOCw2NC45ODVjLTE5LjQ1Miw3My43MTEtMC4zNDgsMTU1LjU3OSw1Ny4zMzQsMjEzLjI2YzQzLjEzNiw0My4xMzQsOTkuNzk1LDY0LjcwMiwxNTYuNDU2LDY0LjcwMg0KCWMyMC4xNTYsMCw0MC4zMDgtMi43NDQsNTkuODU0LTguMjAzYzExLjgzNSw2LjY1NCwyMy40ODYsMTIuNTg4LDM0Ljg2MiwxNy43MTdjMzIuNjg1LDE0Ljc0MSw2MS42ODEsMjIuMTIzLDg1LjcyNywyMi4xMjMNCgljMjIuMzQ4LDAsNDAuNDItNi4zNzgsNTMuMTk3LTE5LjE1NUM1MjQuMjkyLDQ2MS4zOCw1MTYuNzIzLDM5OC4zMDgsNDcyLjI3MiwzMTkuMjI2eiBNNDEuMzMyLDEyNy4wNjkNCgljLTE1LjIxMS00MC43NzEtMTUuNjMtNzIuNDU5LTEuMTUxLTg2LjkzN2MxOS4yNS0xOS4yNDgsNjcuMDcxLTExLjc2OCwxMjUuNDY4LDE4LjUyNmMtMjIuNzgsMTAuNjAzLTQ0LjExNCwyNS4yODYtNjIuODg2LDQ0LjA1Ng0KCWMtMTguNzczLDE4Ljc3My0zMy40NTgsNDAuMTEtNDQuMDYxLDYyLjg5NUM1MS43NSwxNTIuMjYsNDUuOTEyLDEzOS4zNDQsNDEuMzMyLDEyNy4wNjl6IE0yNTkuMjE5LDQ1MC44NDENCgljLTQ5LjEtMC4wMDQtOTguMjE3LTE4LjY5Ny0xMzUuNTk2LTU2LjA3NUM4MS4wMTksMzUyLjE1OSw2Mi43MDYsMjk0LjMzLDY4LjY1NiwyMzguNjI2YzEzLjIyOSwxOS4xNzksMjguMDY5LDM4LjU3Myw0NC4yNTcsNTcuNzMzDQoJYzIuOTE4LDMuNDUzLDcuMDgyLDUuMjMxLDExLjI3Niw1LjIzMWMzLjM2MiwwLDYuNzQzLTEuMTQzLDkuNTExLTMuNDgzYzYuMjIzLTUuMjU3LDcuMDA3LTE0LjU2NSwxLjc0OS0yMC43ODcNCgljLTIyLjMzNC0yNi40MzYtNDEuOTQxLTUzLjIxNC01OC4wMy03OS4wNDhjOS4xMDMtMjcuMzIyLDI0LjQ5NS01Mi45ODgsNDYuMjA2LTc0LjY5OGMzNy4zODUtMzcuMzg1LDg2LjQ5LTU2LjA3NSwxMzUuNTk2LTU2LjA3NQ0KCXM5OC4yMTEsMTguNjkxLDEzNS41OTYsNTYuMDc1YzM2LjIxOSwzNi4yMTksNTYuMTY3LDg0LjM3Myw1Ni4xNjcsMTM1LjU5NmMwLDE5LjM5Ni0yLjg2NiwzOC4zNTEtOC4zODcsNTYuMzg1DQoJYy0wLjI0OSwwLjYzMy0wLjQ1NCwxLjI4Mi0wLjYxNSwxLjk0M2MtOS4xNjgsMjguODM1LTI1LjE1Niw1NS4yNTgtNDcuMTY2LDc3LjI2OGMtMjEuMDQyLDIxLjA0Mi00NS43OTQsMzYuMTYzLTcyLjE2OCw0NS4zNg0KCWMtNDMuNTc3LTI1Ljk1My04OS41OTUtNjIuMDQ4LTEzMy4yNTUtMTA0LjgyNGMtNS44MjEtNS43MDMtMTUuMTU4LTUuNjA0LTIwLjg1OSwwLjIxNGMtNS43MDEsNS44MTktNS42MDcsMTUuMTU4LDAuMjE0LDIwLjg2MQ0KCWMzNi45NTIsMzYuMjA0LDc1LjY4Nyw2Ny44NzYsMTEzLjUwNSw5My4wOTFDMjc0LjYwMyw0NTAuMzgzLDI2Ni45MTIsNDUwLjg0MiwyNTkuMjE5LDQ1MC44NDF6IE00NzIsNDcxLjk1MQ0KCWMtMTYuOTgxLDE2Ljk4My01NS41OTMsMTMuNzA0LTEwNS45MzYtOWMtMy4zNTQtMS41MTMtNi43MzgtMy4xMDQtMTAuMTQ0LTQuNzY1YzIxLjYwMy0xMC40NzMsNDEuODQ4LTI0LjY1Miw1OS43NTctNDIuNTU5DQoJYzE3LjY3Mi0xNy42NzIsMzEuOTcxLTM3LjgxNCw0Mi42MDgtNTkuNjM4QzQ4NC44NTEsNDEwLjQxNiw0OTAuMzM3LDQ1My42MTQsNDcyLDQ3MS45NTF6Ii8+DQo8L3N2Zz4=",
				width: 32,
				height: 32,
			},
			{
				name: "star",
				src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPg0KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI0ZGRkYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik05LjE1MzE2IDUuNDA4MzhDMTAuNDE5OCAzLjEzNjEzIDExLjA1MzEgMiAxMiAyQzEyLjk0NjkgMiAxMy41ODAyIDMuMTM2MTIgMTQuODQ2OCA1LjQwODM3TDE1LjE3NDUgNS45OTYyM0MxNS41MzQ1IDYuNjQxOTMgMTUuNzE0NCA2Ljk2NDc5IDE1Ljk5NTEgNy4xNzc4MUMxNi4yNzU3IDcuMzkwODMgMTYuNjI1MSA3LjQ2OTkgMTcuMzI0MSA3LjYyODA1TDE3Ljk2MDUgNy43NzIwM0MyMC40MjAxIDguMzI4NTYgMjEuNjUgOC42MDY4MiAyMS45NDI2IDkuNTQ3NzNDMjIuMjM1MiAxMC40ODg2IDIxLjM5NjggMTEuNDY5MSAxOS43MTk5IDEzLjQyOTlMMTkuMjg2MSAxMy45MzcyQzE4LjgwOTYgMTQuNDk0NCAxOC41NzEzIDE0Ljc3MyAxOC40NjQxIDE1LjExNzdDMTguMzU3IDE1LjQ2MjQgMTguMzkzIDE1LjgzNDEgMTguNDY1IDE2LjU3NzZMMTguNTMwNiAxNy4yNTQ0QzE4Ljc4NDEgMTkuODcwNiAxOC45MTA5IDIxLjE3ODcgMTguMTQ0OSAyMS43NjAyQzE3LjM3ODggMjIuMzQxNyAxNi4yMjczIDIxLjgxMTUgMTMuOTI0MyAyMC43NTEyTDEzLjMyODUgMjAuNDc2OEMxMi42NzQxIDIwLjE3NTUgMTIuMzQ2OSAyMC4wMjQ4IDEyIDIwLjAyNDhDMTEuNjUzMSAyMC4wMjQ4IDExLjMyNTkgMjAuMTc1NSAxMC42NzE1IDIwLjQ3NjhMMTAuMDc1NyAyMC43NTEyQzcuNzcyNjggMjEuODExNSA2LjYyMTE4IDIyLjM0MTcgNS44NTUxNSAyMS43NjAyQzUuMDg5MTIgMjEuMTc4NyA1LjIxNTg4IDE5Ljg3MDYgNS40Njk0IDE3LjI1NDRMNS41MzQ5OCAxNi41Nzc2QzUuNjA3MDMgMTUuODM0MSA1LjY0MzA1IDE1LjQ2MjQgNS41MzU4NiAxNS4xMTc3QzUuNDI4NjggMTQuNzczIDUuMTkwNDMgMTQuNDk0NCA0LjcxMzkyIDEzLjkzNzJMNC4yODAxIDEzLjQyOTlDMi42MDMyNSAxMS40NjkxIDEuNzY0ODIgMTAuNDg4NiAyLjA1NzQyIDkuNTQ3NzNDMi4zNTAwMiA4LjYwNjgyIDMuNTc5ODYgOC4zMjg1NiA2LjAzOTU0IDcuNzcyMDNMNi42NzU4OSA3LjYyODA1QzcuMzc0ODUgNy40Njk5IDcuNzI0MzMgNy4zOTA4MyA4LjAwNDk0IDcuMTc3ODFDOC4yODU1NSA2Ljk2NDc5IDguNDY1NTMgNi42NDE5NCA4LjgyNTQ3IDUuOTk2MjNMOS4xNTMxNiA1LjQwODM4WiIgc3Ryb2tlPSIjMUMyNzRDIiBzdHJva2Utd2lkdGg9IjEuNSIvPg0KPC9zdmc+",
				width: 32,
				height: 32,
			},
		],
		detectRetina: true,
	};

	return options;
};

export default ParticleOptions;
