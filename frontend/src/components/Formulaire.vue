<template>
    <form class="form">
        <div class="error"></div>
        <label for="name">Name </label><br>
        <input type="text" id="name" v-model="name">
        <br>
        <label for="password">Pass </label><br>
        <input type="password" id="password" v-model="password"><br>
        <button type="buttton" v-if="name !== '' && password !== '' " @click.prevent="envoiUser()">{{ btn }}</button>
    </form>
</template>

<script>
export default {
    name: 'formulaire',
    data() {
        return {
            name: '',
            password: '',
            validationName : false
        }
    },
    props: {
        btn : String
    },
    methods: {
        envoiUser(){
            this.validationName = false;
            let error = document.querySelector('.error');
            if(this.name.trim() === ''){
                error.innerHTML = '';
                error.innerHTML += 'Veuillez remplir le Nom correctement !';
            }else{
                error.innerHTML = '';
                this.validationName = true;
                this.$emit('sendUser', {
                    name: this.name,
                    password : this.password
                })
            }
            
        }
    }
}
</script>

<style lang="scss">
.form{
    padding-bottom:30px;

    .error{
        color: crimson;
    }
}

</style>