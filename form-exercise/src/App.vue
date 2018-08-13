<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <div class="form-group">
                        <label for="name">Name
                            <input id="name" type="text" class="form-control" v-model="user.name">
                        </label>
                    </div>
                    <!-- Mail -->
                    <div class="form-group">
                        <label for="email">email
                            <input id="email" type="text" class="form-control" v-model="user.email">
                        </label>
                    </div>
                    <!-- Password -->
                    <div class="form-group">
                        <label for="password">password
                            <input id="password" type="password" class="form-control" v-model="user.password">
                        </label>
                    </div>
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                        <label for="yes">Store Data?
                            <input id="yes" type="radio" value="true" v-model="storeData">Y
                            <input id="yes" type="radio" value="false" v-model="storeData">N
                        </label>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <input type="submit" @click.prevent="handleSubmit" value="Submit">

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ user.name }}</p>
                        <p>Mail: {{user.email}} </p>
                        <p>Password: {{user.password}}</p>
                        <p>Store in Database?: {{storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: ""
      },
      storeData: true,
      submitted: false
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
    }
  }
};
</script>

<style>
</style>
