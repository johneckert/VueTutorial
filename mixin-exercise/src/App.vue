<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>{{ textOne | reverseIt }}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>{{textTwo | getLength}}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p>{{ reversedOne }}</p>
                <p>{{ lengthOne }}</p>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <p>{{ reversedTwo }}</p>
                <p>{{ lengthTwo }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { filterMixin } from "./filterMixin";
export default {
  mixins: [filterMixin],
  data() {
    return {
      textOne: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      textTwo: "Antidisestablishmentarianism"
    };
  },
  filters: {
    reverseIt(str) {
      return str
        .split("")
        .reverse()
        .join("");
    }
  },
  computed: {
    reversedOne() {
      return this.textOne
        .split("")
        .reverse()
        .join("");
    },
    lengthOne() {
      return this.textTwo + " (" + this.textTwo.length + ")";
    }
  }
};
</script>

<style>
</style>
