<template>
  <div class="reg-box">
    <van-icon name="arrow-left" @click="goBack" class="back"/>
    <h2>欢迎注册</h2>
    <div class="zhu">
    <p>
        姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;名:<input type="text" v-model="username" placeholder="字母数字6-10位">
    </p>
    <p>
        密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:<input type="password" v-model="userpass" placeholder="字母数字6-10位">
    </p>
    <p>
        确认密码:<input type="password" v-model="userpass2" placeholder="和上次密码保持一致">
    </p>
    <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;验&nbsp;证&nbsp;码:<input type="text" v-model="code"><span>{{randomCode}}</span>
    </p>
    <p>
        <input type="button" value="注册" @click="regSave">&nbsp;&nbsp;&nbsp;<input type='reset' value="重置" @click="reset">
    </p>
    <div class="ce">{{msg}}&nbsp;&nbsp;</div>
</div>
  </div>
</template>

<script>
    import axios from 'axios'
export default {
    name:"Reg",
    data(){
        return{
            username:"ynb110",
            userpass:"123456",
            userpass2:"123456",
            code:"",
            randomCode:"",
            msg:""
        }
    },
    created(){
        this.getRandomCode()
    },
    methods:{
        goBack(){
            this.$router.back();
            // this.$router.replace("/Reg");
        },
        //随机验证码
        getRandomCode(){
            let str='';
            for(let i=0;i<4;i++){
                str+=parseInt(Math.random()*10);
            }
            this.randomCode=str;
        },
        //注册
        regSave(){
            let regluar=/^[a-z]\w{5,11}$/i;
            if(!regluar.test(this.username)){
                this.msg="用户名不正确，应该是数字字母下划线6-12位，不能数字开头";
                return ;
            }
            //密码
            if(this.userpass!=this.userpass2){
                this.msg="两次密码不一致"
                return ;
            }        
        //3.验证码
        if(this.code!=this.randomCode){
                 this.msg="验证码不正确";
                 this.getRandomCode();
                 return ;
        }

        //二，注册：
        //data（发送给后端的数据使用 URLSearchParams对象）；content-type是application/x-www-form-urlencoded
        // let data=new URLSearchParams();
        // data.append("username",this.username);
        // data.append("userpass",this.userpass);
        //data（发送给后端的数据使用 JSON格式）；content-type是application/json
        // axios({
        //     url:"http://localhost:3000/vips",
        //     method:"post",
        //             //data（发送给后端的数据使用 字符串）；content-type是application/x-www-form-urlencoded
        //     // data:`username=${this.username}&userpass=${this.userpass}`,//1.
        //   data:{
        //     username:this.username,
        //     userpass:this.userpass,
        //   }
        // })
        // .then(res=>{
        //     console.log('我是console',res.data);
        //     if(res.data){
        //         this.msg="注册成功"
        //     }else{
        //         this.msg="注册fail"
        //     }
            
        // })
        axios.post("http://localhost:3000/vips",{
           username:this.username,
           userpass:this.userpass
        })
        .then(res=>{
            console.log('我是console',res.data);
            if(res.data){
                this.msg="注册成功"
                location.href='My.vue'
            }else{
                this.msg="注册fail"
            }
            
        })
      },
      reset(){
          if(this.reset){
           this.username='';
           this.userpass='';
           this.userpass2='';
           this.code='';
           
          }
      }
    }
}
</script>

<style>
.reg-box{
   position: relative;
}
.back{
    top: 0;
    left: 0;
}
.zhu{
    margin-top: 7.5rem;
    width:100%;
    height: 12.5rem;
    text-align: center;
    /* background-color: red; */
}
.zhu p{
    margin-top: 1.25rem;
}
h2{
    position: absolute;
    top: 5rem;
    left:8.125rem;
}
</style>