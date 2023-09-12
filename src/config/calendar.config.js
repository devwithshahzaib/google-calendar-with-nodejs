const { google } = require("googleapis");
const SCOPES = "https://www.googleapis.com/auth/calendar";
const credentials = JSON.parse(process.env.GOOGLE_SERVICE_CREDENTIAL);
console.log(credentials.client_email);
const auth = new google.auth.JWT(
  credentials?.client_email,
  null,
  credentials?.private_key,
  SCOPES
);
exports.calendar = google.calendar({ version: "v3", auth });
