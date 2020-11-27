<template>
    <div>
        <header-top></header-top>
        <div class="main">
            <ul class="message">
                <li :key="index" v-for="(membre, index) in membres"><card-item :name="membre.name" :message="membre.message" :membre="dataUser.name"></card-item></li>
            </ul>
            <newMessage :user="dataUser" :reload="update"></newMessage>
        </div>
    </div>
</template>

<script>
import Header from '../components/HeaderMembre'
import Card from '../components/Card'
import Router from '../router'
import NewMessage from '../components/NewMessage'

export default {
    name: 'Membre',
    data() {
        return {
            membres : [],
            dataUser: ''
        }
    },
    components : {
        'card-item': Card,
        'header-top': Header,
        'newMessage': NewMessage
    },
    methods: {
        saveToken() {
            let data = sessionStorage.getItem('user');
            
            if(data === null){
                Router.push( 'error' );
            }else{
                this.dataUser = JSON.parse(data);
            }
            
        },
        chargeMessages(){
            fetch('http://192.168.0.26:3330/api/message', {
                methods: 'GET',
                headers : {
                    'Content-type' : 'application/json',
                    'Authorization' : `Bearer ${this.dataUser.token}`
                },
                
            })
            .then( response => response.json())
            .then(data => {
                // console.log(data);
                this.membres = data.message;
            })
        },
        scroll() {
            let element = document.querySelector('.main');
            element.scrollTop = element.scrollHeight;
            // console.log('passage');
        },
        update() {
            location.reload();
        }
    },
    mounted() {
        this.saveToken();
        this.chargeMessages();
    },
    updated() {
        this.scroll();
    }
    
    
}
</script>

<style lang="scss" scoped>
.main{
    position:relative;
    margin-top:60px;
    width:100%;
    height:80vh;
    overflow-y: auto;

    .message{
        margin-bottom:50px;
        li{
            list-style-type: none;
        }
    }  
}
</style>