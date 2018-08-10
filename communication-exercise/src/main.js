import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({
  methods: {
    selectServer(serverId) {
      console.log("bus");
      this.$emit("SelectServer", serverId);
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
