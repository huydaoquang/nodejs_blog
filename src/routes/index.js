const newsRoutes = require("./news");
const coursesRoutes = require("./courses");
const siteRoutes = require("./site");

function route(app) {
	app.use("/news", newsRoutes);
	app.use("/courses", coursesRoutes);

	app.use("/", siteRoutes);
}

module.exports = route;
