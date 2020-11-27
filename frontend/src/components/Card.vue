<template>
    <div class="card">
        <div v-if="name === membre" class="main active">
            <span>{{ name }}</span>
            <p>
                {{ message }}   
            </p>
            
        </div>
        <div v-if="name !== membre" class="main">
            <span>{{ name }}</span>
            <p>
                {{ message }}   
            </p>
            
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Card',
    props: [
        'name',
        'message',
        'membre'
    ]
}
</script>

<style lang="scss" scoped>
.card{
    // border: 1px solid #dadada;
    margin-bottom: 10px;
    border-radius:5px;
    // box-shadow: 2px 2px 2px #777;
    .main.active{
        max-width:70%;
        margin-left:auto;
        text-align:right;
        p{
            
            background-color: #0078FF;
            color:#fff;
            text-align:left;
            display: inline-block;
        }
        span{
            display: block;
            text-align:right;
            font-size:14px;
            opacity:0.3;
        }
    }
    .main{
        max-width:70%;
        text-align:left;

        p{
            text-align:left;
            padding:5px 10px;
            background-color:rgb(216,216,216);
            color: #000;
            border-radius:10px;
            display: inline-block;
        }
        span{
            display: block;
            text-align:left;
            font-size:14px;
            opacity:0.3;
        }
        
    }
    
}

</style>