import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Window } from '@tauri-apps/api/window'
import { Webview } from '@tauri-apps/api/webview'
const appWindow = new Window('my-label')
const webview = new Webview(appWindow, 'my-label', {
  url: 'https://github.com/tauri-apps/tauri',x:500,y:500,height:500,width:500
});
webview.once('tauri://created', function () {
 // webview successfully created
});
webview.once('tauri://error', function (e) {
 // an error happened creating the webview
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
