const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51HnsDwCR5p1r9bSWYTK20D8pm320aYy33LZbvlYacJbZPBKU5O5kZFL5Max5aiYWeY9bVUTNBkF8qN9scCKAnh1N00taHsKq1N"
);

// API

// -App Config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.get("/", (request, response) => response.status(200).send("Hello World:)"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;
	console.log("Payment req received for the amount of: ", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // currency in subunit
		currency: "usd",
	});

	// OK - created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// -Listen Command
exports.api = functions.https.onRequest(app);


// http://localhost:5001/clone-a29e0/us-central1/api