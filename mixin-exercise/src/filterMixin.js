export const filterMixin = {
  computed: {
    reversedTwo() {
      return this.textOne
        .split("")
        .reverse()
        .join(" ");
    },
    lengthTwo() {
      return this.textTwo + "-- (" + this.textTwo.length + ")";
    }
  }
}