<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server {{ selectedServer }}</p>
    </div>

</template>

<script>
import { eventBus } from "../../main";
export default {
  props: ["selectedServer"],
  created() {
    eventBus.$on("SelectServer", serverId => {
      this.selectedServer = serverId;
    });
  }
};
</script>

<style>
</style>
