<template>
    <div class="row">
        <ServerList />
        <ServerDetails />
    </div>
</template>
<script>
import ServerList from "./ServerList.vue";
import ServerDetails from "./ServerDetails.vue";
export default {
  components: {
    ServerList: ServerList,
    ServerDetails: ServerDetails
  }
};
</script>

