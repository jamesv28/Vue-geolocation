<template>
   <div class="container signup">
       <form class="card-panel" @submit.prevent="signup">
           <h1 class="center deep-purple-text">Sign Up</h1>
           <div class="field">
               <label for="email">Email</label>
               <input type="email" id="email" v-model="email">
           </div>
           <div class="field">
               <label for="password">Password</label>
               <input type="password" id="password" v-model="password">
           </div>
           <div class="field">
               <label for="alias">Alias</label>
               <input type="text" id="alias" v-model="alias">
           </div>
           <div class="field center">
               <button class="btn deep-purple">Sign Up</button>
           </div>
       </form>
   </div> 
</template>

<script>
export default {
    data() {
        return {
            email: null,
            password: null,
            alias: null
        }
    },
    methods: {
        signup() {
            
        }
    }
}
</script>

<style>
    .signup {
        margin-top: 60px;
    }
    .signup h1 {
        font-size: 2.4em;
    }
    .signup .field {
        margin-bottom: 16px;
    }
</style>