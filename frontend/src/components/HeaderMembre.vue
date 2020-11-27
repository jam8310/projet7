<template>
    <header>
        <nav id="nav">
            <h1> Réseau Social</h1>
            <div class="navBar">
                <router-link to="/membre">Accueil</router-link> |
                <router-link to="/profil">Profil</router-link> |
                <router-link to="/"> <button class="remove" @click="removeItem"><span class="quit">X</span></button></router-link>
                
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        removeItem() {
            sessionStorage.removeItem('user');
        }
    }
}
</script>

<style lang="scss" scoped>

#nav {
    position:fixed;
    top: 0; left:0 ; right:0;
    height:60px;
    width:100%;
    background-color: #f1f1f1;
    z-index:10;
    .navBar{
        height:30px;

        .remove{
        border: none;
        }
        .quit{
            text-align:center;
            font-size:13px;
            color: #fff;
            background-color: crimson;
            border-radius:3px;
            padding:0 4px;
        }
    }
    
    a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    transition: .2s;

    &.router-link-exact-active {
      color: #999;
      text-decoration: underline;
    }
    &:hover{
      color:#999;
    }
  }
}
</style>