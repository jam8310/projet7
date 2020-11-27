<template>
    <header>
        <nav id="nav">
            <h1> Réseau Social</h1>
            <div class="navBar">
                <router-link to="/">Login</router-link> |
                <router-link to="/create">Create</router-link>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>

#nav {
  width:100%;
  padding: 30px 0;
}
</style>