import axios from 'axios';
axios.defaults.baseURL = 'http://121.89.205.189:3001';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 请求拦截器
// 请求拦截器的回调函数：是每个请求都会调用的函数，所以，在请求拦截器里可以处理所用请求的公共业务。如：token的携带。loading的显示

axios.interceptors.request.use((config)=>{ 
    // console.log("请求拦截器,config",config);
    if(sessionStorage.getItem("token")){
        //这个是给请求头上携带token。
        config.headers.token=token;
    }
    return config;
},(err)=>{
    console.log('err',err);
    
});

// 响应拦截器
// 响应拦截器处理的是响应回来后的公共业务，如：loading的隐藏
axios.interceptors.response.use((res)=>{
    
    return res;
},(err)=>{
    console.log("err",err);
});



export default axios;
