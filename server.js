const express = require("express");
const morgan = require("morgan");

const app = express();
const router = express.Router({ mergeParams: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

const day = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

router.get("/", async (req, res) => {
	try {
		const { slack_name, track } = req.query;

		return res.status(200).send({
			slack_name,
			current_day: day[new Date().getUTCDay()],
			track,
			github_file_url: "",
			github_repo_url: "",
			status_code: 200,
		});
	} catch (error) {
		return res.status(500).send({ error: error.message || error });
	}
});

router.all("*", (req, res) => {
	res.status(404).json({
		message: "Invalid request, Route does not exist",
	});
});
app.use("/api", router);

const PORT = process.env.NODE_ENV === "test" ? 2345 : process.env.PORT || 4040;

app.listen(PORT, () => {
	console.log(`Server started on port #${PORT}`);
});

module.exports = { app };
