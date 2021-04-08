import Vue from 'vue'
import Vuex from 'vuex'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import {connectionSocket} from "../utils/websocket";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    allRights:[],
    menus:[],
    users:[],
    sessions:{},
    currentSession: null,
    currentUser:null,
    stomp: null,
    isDot: {},
    websocket:{}
  },
  mutations: {
    initRights(state,rights){
      state.allRights = rights;
    },
    initMenus(state,menus){
      state.menus = menus;
    },
    addMessage(state, msg) {
      console.log("addMessage");
    },
    adduser(state, user){
      state.users.push(user);
    },
    removeUser(state, user){
      var index = state.users.indexOf(user);
      state.users.splice(index,1);
    },
    initUsers(state, users){
      state.users = users;
    },
    addChatMessage(state, msg){
      let mss = state.sessions[state.currentUser + '#' + msg.to];
      if (!mss) {
        // state.sessions[state.currentHr.username+'#'+msg.to] = [];
        Vue.set(state.sessions, state.currentUser + '#' + msg.to, []);
        Vue.set(state.sessions, state.currentUser + '*' + msg.to, 0);
      }
      state.sessions[state.currentUser + '#' + msg.to].push({
        content: msg.message,
        date: new Date(),
        self: !msg.notSelf
      });
      state.sessions[state.currentUser + '*' + msg.to]++;
    },
    changeCurrentSession(state, currentSession){
      state.currentSession = currentSession;
    },
    initStomp(state, stomp){
      state.stomp = stomp;
    },
    initWebsocket(state, websocket){
      state.websocket = websocket;
    },
    initCurrentUser(state, user){
      state.currentUser = user;
    },
    INIT_DATA(state) {
      //浏览器本地的历史聊天记录可以在这里完成
      let data = localStorage.getItem('vue-chat-session');
      if (data) {
        state.sessions = JSON.parse(data);
      }
    }
  },
  actions: {
    connect(context) {
      //connectionSocket();
      // context.state.stomp = Stomp.over(new SockJS('http://localhost:8081/spt2/ws/ep'));
      // context.state.stomp.connect({}, success => {
      //   context.state.stomp.subscribe('/spt2/queue/chat', msg => {
      //     if (msg.body) {
      //       const repObj = JSON.parse(response.body);
      //       alert(repObj.content);
      //     }
      //   })
      // }, error => {
      //
      // })
    },
    initData(context) {
      context.commit('INIT_DATA');
    }
  },
  modules: {
  }
})

store.watch(function (state) {
  return state.sessions
}, function (val) {
  localStorage.setItem('vue-chat-session', JSON.stringify(val));
}, {
  deep: true/*这个貌似是开启watch监测的判断,官方说明也比较模糊*/
})

export default store;