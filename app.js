const express = require("express");
const cors = require("cors");
const app = express();

const DBConnection = require("./db/dbConnection.js");

const researcherRoute = require("./routes/user-routes/reseacher.router.js");
const attendeeRoute = require("./routes/user-routes/attendee.router.js");
const workshopconductorRoute = require("./routes/user-routes/workshopConductor.router");
const reviewerRoute = require("./routes/reviewer-routes/reviewer.router.js");
const reviewerValidate = require("./routes/reviewer-routes/reviewerValidate.router");

const userRoute = require("./routes/userRoute");

require("./models/News/News");
require("./models/News/ApprovedNews");
require("./models/Speakers/Speaker");

// Connect Database
DBConnection;

app.use(cors());
app.use(express.json());

app.use("/api/attendee", attendeeRoute);
app.use("/api/reseacher", researcherRoute);
app.use("/api/workshopcon", workshopconductorRoute);
app.use("/api/reviewer", reviewerRoute);

app.use("/api/user", userRoute);

app.use("/api/reviewerValidate", reviewerValidate);

//admin routes
app.use("/api", require("./routes/adminRoutes/news"));
app.use("/api", require("./routes/adminRoutes/stats"));
app.use("/api", require("./routes/adminRoutes/keynotespeakers"));
app.use("/api", require("./routes/adminRoutes/addusers"));

//editor routes
const editorRouteNews = require("./routes/editorRoutes/news");
app.use("/api/editor", editorRouteNews);
const editorRouteSpeaker = require("./routes/editorRoutes/speakers");
app.use("/api/editor", editorRouteSpeaker);

const PORT = 8080;

app.listen(PORT, () => {
  console.log("Server is running on port : " + PORT);
});
