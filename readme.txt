# react nickel setup

`npm i` then `npm run start`
this will run rust api server and serve the web app with webpack

The rust main has to be in src/main.rs. Its really the only good option.

There is also a variant build using sucrase with hmr in the tools directory

# why nickel
rust backend benches:
https://github.com/the-benchmarker/web-frameworks
https://web-frameworks-benchmark.netlify.app/ (setup explanation)

Specifically, look at the average latency and sort the 512 concurrency column for average , P90, and P99, and P99.999 latency

https://web-frameworks-benchmark.netlify.app/result?metric=averageLatency
(the 0 columns are errors)

Most frameworks, including actix, experience increases in latency as concurrency increases.

They also have suprisingly high P90+ peaks. IE: at 512 concurrency, 1 in 10 requests will have a latency of 5 seconds!
Except nickel and iron.
Nickel has practically no lag, while iron has latency spikes as high as 1000ms.

code for nickel and iron
https://github.com/the-benchmarker/web-frameworks/blob/master/rust/iron/src/main.rs
https://github.com/the-benchmarker/web-frameworks/blob/master/rust/nickel/src/main.rs

The results are also consistent time.
