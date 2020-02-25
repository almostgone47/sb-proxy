import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
 stages: [
    { duration: "30s", target: 20 },
    { duration: "30s", target: 200 },
    { duration: "30s", target: 2000 }
  ]
};

export default function() {
  let res = http.get("http://localhost:3000");
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 2000
  });
  sleep(.01);
}