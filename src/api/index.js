//导入刚才写好的axios二次封装的requests
import requests from "./request";
//三级联动接口
///api/product/getBaseCategoryList get 无参数
//发请求：axios发请求返回结果promise对象
export const getCodeImg = ()=>{
	//由于前面配置了基础路径，所以不用加/api
	return requests({url:'http://nicklorry.top:8090/fzu/verifycodeInfo',method:'get',withCredentials:true}
)};
/*export const login =(data)=>{
	return requests({url:'/bbs/login/',method:'post',data})
}*/