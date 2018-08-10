<template>
    <div class="container">
        <ServerHeader />
        <hr>
        <ServerListContainer />
        <hr>
        <ServerFooter />
    </div>
</template>

<script>
import ServerHeader from "./ServerHeader.vue";
import ServerListContainer from "./ServerListContainer.vue";
import ServerFooter from "./ServerFooter.vue";
export default {
  components: {
    ServerHeader: ServerHeader,
    ServerListContainer: ServerListContainer,
    ServerFooter: ServerFooter
  }
};
</script>

<style>
</style>
