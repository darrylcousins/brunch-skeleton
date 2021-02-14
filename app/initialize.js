/** @jsx createElement */
import "regenerator-runtime/runtime"; // regeneratorRuntime error
import { createElement } from "@bikeshaving/crank/cjs";
import { renderer } from "@bikeshaving/crank/cjs/dom";

function App() {
  return <div>App</div>;
};

document.addEventListener("DOMContentLoaded", async () => {
  await renderer.render(<App />, document.querySelector("#app"));
});
