<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="this.selectedServer">Server #{{ selectedServer.id }}</p>
        <p v-if="this.selectedServer">Status: {{ selectedServer.status }}</p>
        <button @click='changeStatus'>Change Status</button>
    </div>

</template>

<script>
import { eventBus } from "../../main";
export default {
  props: ["selectedServer"],
  created() {
    eventBus.$on("SelectServer", server => {
      this.selectedServer = server;
    });
  },
  methods: {
    changeStatus() {
      eventBus.$emit("changeStatus", "Fine");
      this.selectedServer.status = "Fine";
    }
  }
};
</script>

<style>
</style>
