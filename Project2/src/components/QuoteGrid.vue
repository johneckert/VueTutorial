<template>
  <div class="row">
    <app-quote v-for="(quote, i) in quotes" :key="i" @click.native="selectQuote(i)">
      {{quote}}
    </app-quote>
  </div>
</template>

<script>
import Quote from "./Quote.vue";
export default {
  props: ["quotes"],
  components: {
    appQuote: Quote
  },
  methods: {
    selectQuote(index) {
      this.$emit("quoteSelected", index);
    }
  }
};
</script>

<style>
</style>

