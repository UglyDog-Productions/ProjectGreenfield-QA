import http from 'k6/http';
import { check, sleep } from 'k6';

let counter = 9000000;
const url = 'http://localhost:3000';

export const options = {
  stages
   [
    { duration: '30s', target: 1 },
    { duration: '30s', target: 10 },
    { duration: '30s', target: 100 },
    { duration: '30s', target: 250 },

    { duration: '30s', target: 500 },
    { duration: '30s', target: 750 },
    { duration: '30s', target: 1000 },
    { duration: '30s', target: 750 },

    { duration: '30s', target: 500 },
    { duration: '30s', target: 250 },
    { duration: '30s', target: 100 },
    { duration: '30s', target: 10 },

    { duration: '30s', target: 1 },
    { duration: '30s', target: 0 }
  ]
};

export default function() {
  counter++;
  const res = http.get(`${url}/qa/${counter}`);
  check(res, {
    'status was 200': (r) => r.status === 200,
    'transaction time less than 200ms': (r) => r.timings.duration < 200,
    'transaction time less than 100ms': (r) => r.timings.duration < 100,
    'transaction time less than 50ms': (r) => r.timings.duration < 50,
    'transaction time less than 10ms': (r) => r.timings.duration < 10
  });
  sleep(1);
}
