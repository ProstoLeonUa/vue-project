var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

const port = 3005;

app.listen(port, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
	console.log(`Example app listening on port http://localhost:${port}/`);
});
app.post('/auth', (req, res) => {


	const url = "./server-date/user.json";
	const { login, password } = req.body;

	fs.readFile(url, 'utf-8', (error, payload) => {
		if (error) {
			console.log(error);
			return
		}
		const data = JSON.parse(payload);

		const response = check(data, login, password);
		if (response != false) {
			const [{ user }] = response;
			res
				.status(200)
				.send(user)
		} else {
			res
				.status(401)
				.send(response)
		}
	})
});
function check(data, login, password) {

	const response = data.filter(item => {
		const { user } = item;
		return (login == user.login && password == user.password)
	})
	return response;
}

const url = "./server-date/items.json";

app.get('/', (req, res) => {


	fs.readFile(url, 'utf-8', (e, file) => {
		res
			.status(200)
			.send(file);
	})

})
app.post('/registration', (req, res) => {

console.log(req.body);
	res
		.status(200)
		.send('OK')
	//fs.readFile(url, 'utf-8', (e, file) => {
	//	res
	//		.status(200)
	//		.send(file);
	//})

})
//app.post('/auth', (req, res) => {

//	const { login, password } = JSON.parse(req.body);
//	readFile(login, password)
//		.then(response => {
//			console.log(response, 'finaly response from server')
//		})
//		.catch((e) => console.log(e));

//})

//async function readFile(login, password) {

//	try {
//		const url = "./server-date/user.json";
//		const response =  fs.readFile(url, 'utf-8', (error, payload) => {
//			const data = JSON.parse(payload);
//			console.log(check(data, login, password))
//			return check(data, login, password);

//		})
//		console.log(response)
//	} catch (e) {
//		throw Error
//	}

//}
//function check(data, login, password) {

//	const response = data.filter(item => {
//		const { user } = item;
//		return (login == user.login && password == user.password)
//	})
//	return response;
//}

