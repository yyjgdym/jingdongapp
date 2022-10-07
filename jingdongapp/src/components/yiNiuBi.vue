<template>
    <div class="hello">
        <h1>{{msg}}</h1>
        <p>伊牛逼太</p>
    </div>
</template>

<script>
export default {
    name:"yiNiuBi",
    props:{
        msg:String
    }
}
</script>

<style>
p{
    font-size: 30px;
    margin: 100px auto;
}
</style>