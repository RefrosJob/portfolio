import { render } from "preact";
import "./index.css";
import { App } from "./app";

//TODO: FONT WRAPPER

import "@fontsource/outfit";
import "@fontsource/roboto";

render(<App />, document.getElementById("app")!);
