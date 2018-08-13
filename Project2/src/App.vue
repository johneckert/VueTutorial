<template>
    <div class="container">
        <quote-header :maxQuotes="maxQuotes" :quoteCount="quotes.length"></quote-header>
        <new-quote @quoteAdded="addQuote"></new-quote>
        <quote-grid :quotes="quotes" @quoteSelected="deleteQuote"></quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Click on a quote to delete it</div>
            </div>
        </div>
    </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuotes.vue";
import Header from "./components/Header.vue";
export default {
  data: function() {
    return {
      quotes: ["test quote"],
      maxQuotes: 10
    };
  },
  components: {
    quoteGrid: QuoteGrid,
    newQuote: NewQuote,
    quoteHeader: Header
  },
  methods: {
    addQuote(quote) {
      if (this.quotes.length < this.maxQuotes) {
        this.quotes.push(quote);
      } else {
        alert("Please Delete Old Quotes First");
      }
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  }
};
</script>

<style>
</style>
