import http from "k6/http";
import { check, sleep } from "k6";
import { Counter, Rate } from "k6/metrics";
import faker from "faker";

let ErrorCount = new Counter("errors");
let ErrorRate = new Rate("error_rate");

export let options = {
	stages: [
		{ duration: "4s", target: 5 },
	// ],
	// thresholds: {
	// 	error_rate: ["rate<0.1"],
	// },
	]
};

export default function () {
	const url = "http://127.0.0.1:8080/users/";
	let headers = { "Content-Type": "application/json" };
	let data = { name: faker.name.findName(), email: faker.internet.email() };
	let res = http.post(url, JSON.stringify(data), { headers: headers });
	// sleep(0.5);
}
