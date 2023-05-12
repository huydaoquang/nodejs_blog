const newsRoutes = require("./news");
const coursesRoutes = require("./courses");
const siteRoutes = require("./site");
const meRoutes = require("./me");

function route(app) {
	app.use("/news", newsRoutes);
	app.use("/me", meRoutes);
	app.use("/courses", coursesRoutes);

	app.use("/", siteRoutes);
}

module.exports = route;
