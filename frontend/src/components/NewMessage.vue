<template>
    <form class="form" @submit="newMessage">
        <button type="button" class="trigger" @click="newEmoji">😀</button>
        <div class="emoji"></div>
        <textarea class="inputMessage" v-model="message"></textarea>
        <button type="submit" class="btn"></button>
    </form>
    
</template>

<script>

import { EmojiButton } from '@joeattardi/emoji-button'
import io from 'socket.io-client'

export default {
    name: 'NewMessage',
    data() {
        return {
            message: '',
            dataUser : '',
            socket : ''
        }
    },
    props: [
        'user'
    ],
    methods: {
        newMessage() {
            this.dataUser = this.user;
            let message = { message :this.message, name: this.dataUser.name, userId : this.dataUser.userId, id: this.dataUser.userId};
            // console.log(message);
            fetch('http://192.168.0.26:3330/api/message', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization' : `Bearer ${this.dataUser.token}`
                },
                body: JSON.stringify(message)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                
                this.$emit('reload');
            })
        },
        newEmoji() {
            const picker = new EmojiButton();
            const trigger = document.querySelector('.trigger');
            let input = document.querySelector('.inputMessage');

            picker.on('emoji', selection => {
            input.value += selection.emoji;
            this.message += selection.emoji;
            });

            trigger.addEventListener('click', () => picker.togglePicker(trigger));
        },
        
    },
    created(){
        this.socket = io();
    },
    mounted() {
        this.newEmoji();
    }
}
</script>

<style lang="scss" scoped>
.form{
        position:fixed;
        background-color:#f1f1f1;
        bottom:0; left:0; right:0;
        height:50px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding:10px;
        border-top:2px solid #dadada;

        textarea{
            border:none;
            width:80%;
            height:35px;
            border:1px solid #dadada;
            border-radius:10px;
            font-size:20px;
            padding:5px;
            outline:none;
        }
        .btn{
            background-image: url("../assets/send-button.png");
            background-repeat: no-repeat;
            background-size:cover;
            width:25px;
            height:25px;
            border:none;
            font-size:23px;
            background-color:transparent;
            cursor: pointer;
            outline:none;
        }
        .trigger{
            width:30px;
            height:30px;
            border:none;
            font-size:23px;
            cursor: pointer;
        }
    }
</style>