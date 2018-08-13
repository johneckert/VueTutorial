<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button 
                    class="btn btn-primary"
                    @click="selectedComp = 'appBlue'">
                        Load Blue Template
                </button>
                <button 
                    class="btn btn-success"
                    @click="selectedComp = 'appGreen'">
                        Load Green Template
                </button>
                <button class="btn btn-danger"
                @click="selectedComp = 'appRed'">
                    Load Red Template
                </button>
                <hr>
                <component :is="selectedComp">
                    <h1 slot="title">Title</h1>
                    <p slot="body">Body</p>
                </component>
            </div>      
        </div>
    </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  },
  data: function() {
    return { selectedComp: "appBlue" };
  }
};
</script>

<style>
</style>
