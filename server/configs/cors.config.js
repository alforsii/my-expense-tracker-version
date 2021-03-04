const cors = require("cors");

module.exports = (app) => {
  // Cross-Origin Resource Sharing
  app.use(
    cors({
      // origin: ['www.web-side.com', 'http://localhost:3000']
      origin: [process.env.FRONTEND_POINT],
      // origin: true,
      credentials: true, // this needs set up on the frontend side as well
      //                   in axios "withCredentials: true"
      //    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      //    optionsSuccessStatus: 204,
      //  preflightContinue: false
    })
  );
};
