import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '../views/Home.vue'
import About from '../views/About'
import one from '../components/onePage'
import two from '../components/twoPage'
import form from '../components/form'
import login from '../components/login'
import welcome from '../components/Welcome'
import adduser from "../components/adduser";
import deleteuser from "../components/deleteuser";
import modifyuser from "../components/modifyuser";
import addright from "../components/addright";
import deleteright from "../components/deleteright";
import modifyright from "../components/modifyright";
import information from "../components/wheelTakein/information3";
import measure from "../components/wheelTakein/measure3";
import noright from "../components/noright";
import appearanceInspection from "../components/bearingRepair/bearingRepair3";
import bearingCap from "../components/bearingRepair/bearingCap3";
import bearingTest from "../components/bearingRepair/bearingTest3";
import bearingLoad from "../components/bearingRepair/bearingLoad3";
import wheelRounding from "../components/wheelRound/wheelRounding3";
import magneticInspection from "../components/ultrasonicInspection/magneticInspection3";
import ultrasonicInspection from "../components/ultrasonicInspection/ultrasonicInspection3";
import remeasure from "../components/wheelDispatch/remeasure3";
import matching from  "../components/wheelDispatch/matching";
import wheel from "../components/manage/wheel";
import query from "../components/manage/query";
import monitor from "../components/manage/monitor";
import sheet from "../components/manage/sheet";
import dispatchCheck from "../components/quality/dispatchCheck";
import qualityProblems from "../components/quality/qualityProblems";
import planmaking from "../components/plan/planmaking";
import matching2 from "../components/wheelDispatch/matching2";
import bearingUnCap from "../components/bearingRepair/bearingUnCap";
import bearingUnLoad from "../components/bearingRepair/bearingUnLoad";
import bearingNeck from "../components/bearingRepair/bearingNeck";
import reinspection from "../components/ultrasonicInspection/reinspection";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/test',
    name: 'About',
    component: About,
    children:[
      {
        path: '/test/one',
        name: 'one',
        component: one
      },
      {
        path: '/test/two',
        name: 'two',
        component: two
      }
    ]
  },
  {
        path: '/form',
        name:'form',
        component: form
  },
  {
    path: '/login',
    name:"login",
    component: login
  },
  {
    path: '/home',
    name:"home",
    component: Home,
    redirect:'/welcome',
    children: [
        //无权限跳转
      {
        path: '/noright',
        name:"noright",
        component: noright
      },
        //首页
      {
        path: '/welcome',
        name:"welcome",
        component: welcome
      },
        //用户管理
      {
        path: '/adduser',
        name:"adduser",
        component: adduser
      },
      {
        path: '/deleteuser',
        name:"deleteuser",
        component: deleteuser
      },
      {
        path: '/modifyuser',
        name:"modifyuser",
        component: modifyuser
      },
        //权限管理
      {
        path: '/addAuthority',
        name:"addAuthority",
        component: addright
      },
      {
        path: '/deleteAuthority',
        name:"deleteAuthority",
        component: deleteright
      },
      {
        path: '/modifyAuthority',
        name:"modifyAuthority",
        component: modifyright
      },
        //轮对收入
      {
        path: '/information',
        name:"information",
        component: information
      },
      {
        path: '/measure',
        name:"measure",
        component: measure
      },
      //轴承检修
      {
        path: '/appearanceInspection',
        name:"appearanceInspection",
        component: appearanceInspection
      },
      {
        path:'/uncap',
        name: "bearingUncap",
        component: bearingUnCap
      },
      {
        path: '/unload',
        name: "bearingUnload",
        component: bearingUnLoad
      },
      {
        path: '/load',
        name:"load",
        component: bearingLoad
      },
      {
        path: '/neckDiameter',
        name: "bearingNeck",
        component: bearingNeck
      },
      {
        path: '/capping',
        name:"capping",
        component: bearingCap
      },
      {
        path: '/rollTest',
        name:"rollTest",
        component: bearingTest
      },
        //旋面
      {
        path: '/wheelRounding',
        name: 'wheelRounding',
        component: wheelRounding
      },
      //探伤
      {
        path: '/magneticInspection',
        name:'magneticInspection',
        component: magneticInspection
      },
      {
        path: '/reinspection',
        name: "reinspection",
        component: reinspection
      },
      {
        path: '/ultrasonicInspection',
        name:'ultrasonicInspection',
        component: ultrasonicInspection
      },
      //轮对支出
      {
        path: '/remeasure',
        name: 'remeasure',
        component: remeasure
      },
      {
        path: '/matching',
        name: 'matching',
        component: matching2
      },
        //综合管理
      {
        path: '/query',
        name: 'query',
        component: query
      },
      {
        path: '/wheel',
        name: 'wheel',
        component: wheel
      },
      {
        path: '/monitor',
        name: 'monitor',
        component: monitor
      },
      {
        path: '/sheet',
        name: 'sheet',
        component: sheet
      },
      //质检验收
      {
        path: '/qualityInspection',
        name: 'qualityInspection',
        component: dispatchCheck
      },
      {
        path: '/qualityFeedback',
        name: 'qualityProblems',
        component: qualityProblems
      },
      {
        path: '/planMaking',
        name: 'planmaking',
        component: planmaking
      }
    ]
  }
]

const router = new VueRouter({
//  mode: 'history',
  base:'/wheel/',
  routes:routes
})


// async function getRights(){
//   var result = await this.$http.post("/userManage/getRights");
//   if (result.data.code != 100){
//     alert("权限分配失败");
//     return ;
//   }
//   store.commit("initRights",result.data.object);
// }

//登录验证
//权限url列表
var rightMap;
//路由
router.beforeEach(async (to,from,next)=>{
    //访问登录页面则放行
    if (to.path == '/login') return next();
    //从sessionStorage里获取logintoken，如果值为空跳转至login页面
    var token = sessionStorage.getItem("logintoken");
    if (!token) return next('/login');
    if (store.state.menus.length>0){

    }else {
      var result = await axios.post("/userManage/getRights");
      if (result.data.code!=100){
        alert("权限获取失败");
        return ;
      }
      store.commit("initMenus",result.data.object);
    }
    next();
})

export default router
