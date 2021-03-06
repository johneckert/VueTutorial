import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({
  methods: {
    selectServer(server) {
      this.$emit("SelectServer", server);
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
