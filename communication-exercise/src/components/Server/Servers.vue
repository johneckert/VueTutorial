<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="server in servers"
        :key="server.id"
        @click="selectServer(server)" 
        @changeStatus="server.status = $event">
            Server #{{ server.id }}
      </li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  methods: {
    selectServer(server) {
      eventBus.selectServer(server);
    }
  },
  data: function() {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Unknown" },
        { id: 4, status: "Normal" }
      ]
    };
  }
};
</script>

<style>
</style>
