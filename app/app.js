import Vue from "nativescript-vue";
Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer);
import routes from "./routes";
import BackendService from "./services/backend-service";

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

const backendService = new BackendService();
const appSettings = require("tns-core-modules/application-settings");

const URL = "http://laffahfastfood.com/idea-app/";

Vue.prototype.$backendService = backendService;

Vue.prototype.$appSettings = appSettings;

Vue.prototype.$URL = URL;

new Vue({
  render: h => h('frame', [h(routes['login'])])
}).$start()

