# react-boilerplate

sucrase: 693 packages
babel: 609 packages

Install deps with `npm i` then run dev server with `npm run dev` or browser sync with `npm run sync` 

checking:
<CounterClass />
 <CounterHookArrow />
<CounterHookFunction />

not working:

working with warning:
sucrase alone using import { hot } from "react-hot-loader" but console warning

working without warning:
babel + @hot-loader/react-dom using import { hot } from "react-hot-loader" but console warning

for my future self
https://doc.rust-lang.org/cargo/reference/manifest.html#the-workspace-field
https://github.com/babel/babel-loader