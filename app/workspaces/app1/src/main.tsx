import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Window } from "@tauri-apps/api/window"
import { Webview } from "@tauri-apps/api/webview"

const appWindow = new Window('uniqueLabel');

// loading embedded asset:
const webview = new Webview(appWindow, 'theUniqueLabel', {
  url: 'path/to/page.html'
});
// alternatively, load a remote URL:
const webview = new Webview(appWindow, 'theUniqueLabel', {
  url: 'https://github.com/tauri-apps/tauri'
});

webview.once('tauri://created', function () {
 // webview successfully created
});
webview.once('tauri://error', function (e) {
 // an error happened creating the webview
});

// emit an event to the backend
await webview.emit("some-event", "data");
// listen to an event from the backend
const unlisten = await webview.listen("event-name", e => {});
unlisten();


// webview.show()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
