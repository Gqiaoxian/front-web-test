//对axios进行二次封装,将刚才下载好的axios导入进来
import axios from "axios";
//import store from "@/store/index";
//1.利用axios对象的方法create,去创建一个axios实例
//2.requests就是axios,只不过稍微配置一下
const requests = axios.create({
	//配置对象
	//基础路径，发请求的时候，路径当中会出现api，不用你手写
	baseURL:'http://www.fzuprrxd.work',
	//请求时间超过5秒
	timeout:5000
});
 //请求拦截器:在发请求之前，请求拦截器可以检测到,可以在请求发出去之前做一些事情
 requests.interceptors.request.use((config)=>{
return config;		
 });
 
 //响应拦截器：包含两个函数（一个是成功返回的函数，一个是失败的返回的函数）
 requests.interceptors.response.use((res)=>{
	//const msg = res.data.msg
	/*if (res.headers["x-user-picture"]) {
		store.state.picture = res.headers["x-user-picture"];
	}*/
	// 后台会在响应头带上用户任务提醒和消息通知的数量，存在store里面，
	/*if (res.headers["x-system-notify-count"]) {
	store.state.systemNotifyCount = response.headers["x-system-notify-count"];
	}
	if (res.headers["x-task-notify-count"]) {
	store.state.taskNotifyCount = response.headers["x-task-notify-count"];
	}*/
	// 和后台约定好响应码为200且响应体的code字段为0的时候才算成功
	if (res.status === 200) {
		if (res.data) {
			console.log(res)
			/*if (res.data.code === 1000) {
				alert("deng")
				return Promise.resolve(res.data);
				
				// 如果code是302，代表需要跳转到切页面
			} else if(res.data.code === 2000 || res.data.code === 3000 ) {
				// window.location.href = response.data.data.target;
				store.state.isLogin = false;
				store.state.loginVisible = true;
				alert(res.data.code);
				if(res.data.code === 2000) alert(res.data.code);
				if(res.data.code === 3000) alert("验证码出错")
				return Promise.reject(res.data);
			} else if(res.data.code === 1001){
				return Promise.resolve(res.data);
				
			}
			else{
				throw res.data;
			}
			} else {
			throw res;
			}
	}else {
		// 响应码不是200则返回一个失败的Promise
		return Promise.reject(res);
	}*/
}}})/*(error)=>{
	return Promise.reject(error)
});*/
//对外暴露requests(axios的二次封装)
export default requests;
