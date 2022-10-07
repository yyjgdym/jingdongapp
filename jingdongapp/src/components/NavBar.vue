<template>
  <div class="navbar-box">
    <ul>
        <li>
            <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png"><br>
            嗨购超市
        </li>
        <li>
            <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png"><br>
            数码电器
        </li>
        <li>
            <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/41867/2/15966/7116/60ec0e0dE9f50d596/758babcb4f911bf4.png"><br>
            嗨购服饰
        </li>
        <li>
            <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png"><br>
            嗨购生鲜
        </li>
        <li>
            <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png"><br>
            嗨购到家
        </li>
        <li>
            <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png"><br>
            充值缴费
        </li>
        <li>
            <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/36069/14/16068/6465/60ec0f67E155f9488/595ff3e606a53f02.png"><br>
            9.9拼
        </li>
        <li>
            <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/186080/16/13681/8175/60ec0fcdE032af6cf/c5acd2f8454c40e1.png"><br>
            领劵
        </li>
        <li>
            <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/36069/14/16068/6465/60ec0f67E155f9488/595ff3e606a53f02.png"><br>
            9.9拼
        </li>
        <li>
            <img src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/186080/16/13681/8175/60ec0fcdE032af6cf/c5acd2f8454c40e1.png"><br>
            领劵
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"NavBar"
}
</script>

<style scoped>
 .navbar-box{
    width:100%;
    height: 12.5rem;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    text-align: center;
    font-size: .75rem;
}
ul{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
li{
    width: 18%;
    height: 5rem;
    margin-top:.25rem;
}
li img{
    width: 100%;
    height: 3.75rem;
}
</style>