<template>
  <div>
    <header-top></header-top>
    <div class="home">
      <div class="formulaire">
        <h2>Login</h2>
        <br>
        <Formulaire  btn="Connexion" @sendUser="updateUser" />
        <router-link to="/create">Create Account</router-link>
        
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Formulaire from '../components/Formulaire'
import Router from '../router'

export default {
  name: 'Login',
  data() {
    return {
      name: '',
      password: '',
    }
  },
  components: {
    Formulaire,
    'header-top': Header
  },
  methods: {
    updateUser(payload) {
      this.name = payload.name;
      this.password = payload.password;

      const data = { name : this.name, password : this.password };
      const header = { 'Content-type': 'application/json' };

       fetch('http://192.168.0.26:3330/api/auth/login', {
        method: 'POST',
        headers: header,
        body: JSON.stringify(data)
      })
      .then( response => response.json())
      .then(data => {
        //  console.log(data);
         let user = {
           userId : data.userId,
           token : data.token,
           name: this.name
         };
         let dataUser = JSON.stringify(user);
         sessionStorage.setItem('user', dataUser);
         Router.push({ name: 'Membre'});
      })
    }
  }
}
</script>

<style lang="scss">
.home{
  width:100%;
}
.formulaire{
  width:100%;
  max-width:320px;
  border: 1px solid #333;
  border-radius:10px;
  padding:20px;
  margin:0 auto;
}
</style>