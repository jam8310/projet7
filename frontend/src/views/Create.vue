<template>
  <div>
    <header-top></header-top>
    <div class="create">
      <div class="formulaire">
        <h2>Create</h2>
        <br>
        <Formulaire  btn="Create" @sendUser="updateUser" />
        <router-link to="/"><span class="span">Login Account</span> </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Formulaire from '../components/Formulaire'
import Router from '../router/index'

export default {
  name: 'Create',
  data() {
    return {
      name: '',
      password : ''
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

       fetch('http://192.168.0.26:3330/api/auth/signup', {
        method: 'POST',
        headers: header,
        body: JSON.stringify(data)
      })
      .then( response => response.json())
      .then( data => {
        // console.log(data);
        let error = document.querySelector('.error');
        if(data.error){
            error.innerHTML = "Ce nom n'est pas disponible !"
        }else{
            error.innerHTML = '';
            Router.push('/')
        }
      })
    }
  }

}
</script>

<style lang="scss">
a{
  &.router-link-active{
    &.span{
      font-size:12px;
    }
  }
}
</style>