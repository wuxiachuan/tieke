<template>
  <el-container>
    <el-header>
      <span>轮轴管理系统</span>
      <div class="loginUser">
          <el-button class="chatBtn" type="info" size="small" round @click="chat">聊天</el-button>
          <div class="infoNum" v-if="problemNum != 0"><span v-text="problemNum"></span></div>
          <el-button type="primary"  size="mini" round @click="showTable">{{currentUser}}</el-button>
      </div>
      <el-button type="info" size="small" round @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
          <el-menu :router="true"  :default-openeds="[activeItem+'']" :default-active="activePath">
            <el-submenu v-for="(item,index) in menulist" :index="index+''">
              <template slot="title">
                <i :class="index==0?'el-icon-user-solid':'el-icon-s-tools'"></i>
                {{item.authName}}
              </template>
              <el-menu-item v-for="(item2,index2) in item.children" :index="item2.path" @click="saveNavstate(item2.path,index)">
                {{item2.authName}}
              </el-menu-item>
            </el-submenu>
          </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-dialog
            title="问题列表"
            :visible.sync="problemListVisible"
            width="80%"
            :before-close="handleProblemTable"
    >

      <el-table :data="problemList" style="width: 100%" height="600" :default-sort = "{prop: 'findTime', order: 'descending'}" border stripe>
        <el-table-column type="index" label="序号" width="50"></el-table-column>
        <el-table-column prop="axleType" label="轴型" width="50"></el-table-column>
        <el-table-column prop="axleNumber" label="轴号" width="50"></el-table-column>
        <el-table-column prop="axleMadeIn" label="厂代号" width="50"></el-table-column>
        <el-table-column prop="processBelong" label="部位" width="80" >
          <template slot-scope="scope">
            <span v-if="scope.row.processBelong==0" >信息采集</span>
            <span v-if="scope.row.processBelong==1" >轮对测量</span>
            <span v-if="scope.row.processBelong==2" >轴承检查</span>
            <span v-if="scope.row.processBelong==3" >磁粉探伤</span>
            <span v-if="scope.row.processBelong==4" >超声探伤</span>
            <span v-if="scope.row.processBelong==5" >车轮旋面</span>
            <span v-if="scope.row.processBelong==6" >轴承压装</span>
            <span v-if="scope.row.processBelong==7" >轴承关盖</span>
            <span v-if="scope.row.processBelong==8" >磨合测试</span>
            <span v-if="scope.row.processBelong==9" >轮对复测</span>
          </template>
        </el-table-column>
        <el-table-column prop="problemDescription" label="简介" ></el-table-column>
        <el-table-column prop="problemDetails" label="问题" width="400"></el-table-column>
        <el-table-column prop="worker" label="责任人" ></el-table-column>
        <el-table-column prop="problemFinder" label="发现人" ></el-table-column>
        <el-table-column prop="findTime" label="发现时间" sortable></el-table-column>
        <el-table-column prop="problemStatus" label="整改情况" >
          <template slot-scope="scope">
            <span v-if="scope.row.problemStatus=='0'" >未整改</span>
            <span v-if="scope.row.problemStatus=='1'" >已整改</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button
                    icon="el-icon-edit"
                    size="mini"
                    @click="handleToDone(scope.$index, scope.row)">整改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
    <el-dialog
            title="聊天界面"
            :visible.sync="chatTableVisible"
            width=740px
            :before-close="closeChat"
    >
      <div id="chatapp">
        <div class="sidebar">
          <card></card>
          <list></list>
        </div>
        <div class="main">
          <message></message>
          <usertext></usertext>
        </div>
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
  import card from '../components/chat/card'
  import list from '../components/chat/list.vue';
  import message from '../components/chat/message.vue';
  import usertext from '../components/chat/usertext.vue';
  import SockJS from 'sockjs-client';
  import Stomp from 'stompjs';
  import store from '@/store';
export default {
  name: 'Home',
  components: {
    card,
    list,
    message,
    usertext
  },
  data(){
    return{
      //menulist:[],
      activePath:'',
      activeItem:'',
      currentUser:'',
      problemListVisible:false,
      chatTableVisible:false,
      msg:'',
      problemList:[],
      problemNum:0,
      webSocket:{},
      commWebSocket: {},
      message:{}
    }
  },
  created() {
      //this.getmenus();
      this.getNavstate();
      this.currentUser = sessionStorage.getItem("name");
      this.getProblem();
      this.flushProblems();
  },
  computed:{
    menulist(){
      return this.$store.state.menus
    }
  },
  methods:{
    connect(){
      this.webSocket = new WebSocket("ws://localhost:8081/websocket/"+sessionStorage.getItem("name"));
      this.webSocket.onopen = ()=> {
          console.log("connect");
          store.commit("initWebsocket",this.webSocket);
          store.commit("initCurrentUser",this.currentUser);
      };
      this.webSocket.onmessage = (evt)=> {
        var received_msg = evt.data;
        let msgObj = {};
        var obj = JSON.parse(received_msg);
        var flag = obj.messageType;
        //1代表上线 2代表下线 3代表在线名单 4代表普通消息
        if(flag==='1'){
          //把名称放入到selection当中供选择
          this.$store.commit("adduser",obj.username);
        }else if(flag==='3'){
          //设置在线名单
          this.$store.commit("initUsers",obj.onlineUsers);
        }else if(flag==='2'){
          //下线
          this.$store.commit("removeUser",obj.username);
        }else if(flag==='4'){
          msgObj.to = obj.fromusername;
          msgObj.message = obj.textMessage;
          msgObj.notSelf = true;
          this.$store.commit("addChatMessage",msgObj);
        }else {
          console.log("error");
        }
      }

      this.webSocket.onclose = ()=> {
          console.log("disconnect");
      }
    },
    setMessageHTML(msg){
      console.log(msg);
    },
    closeWebSocket(){
      this.webSocket.close();
    },
    sendMessage(){
      this.message.from = "rose";
      this.message.to = "jack";
      this.message.message = "hello";
      this.webSocket.send(JSON.stringify(this.message));
    },
    async logout(){
      var result =await this.$http.get("/userManage/logout");
      if (result.data.code == 100){
        this.menulist = result.data.object;
      }
      sessionStorage.clear();
      this.$router.push("/login");
    },
    async getmenus(){
      var result =await this.$http.get("/userManage/getmenus");
      if (result.data.code == 100){
         this.menulist = result.data.object;
      }
    },
    saveNavstate(activePath,index){
        sessionStorage.setItem("activePath",activePath);
        sessionStorage.setItem("activeItem",index);
        this.activePath = activePath;
        this.activeItem = index;
    },
    getNavstate(){
      this.activePath = sessionStorage.getItem("activePath");
      this.activeItem = sessionStorage.getItem("activeItem");
    },
    showTable(){
      this.getProblem();
      this.problemListVisible = true;
    },
    async getProblem(){
      var result = await this.$http.get(
              "/quality/getProblems?worker="+this.currentUser);
      if (result.data.code != 100){
        alert("添加失败");
        return ;
      }
      this.problemList = result.data.object;
      this.problemNum = this.problemList.length;
    },
    handleProblemTable(done){
      this.$confirm('确认关闭？')
              .then(()=>{
                done();
              })
              .catch();
    },
   async handleToDone(index,row){
      var result = await this.$http.get(
              "/quality/resoveProblem?id="+row.id);
      if (result.data.code != 100){
        alert("整改失败");
        return ;
      }
     alert("问题已整改");
     this.getProblem();
    },
    //每个一分钟刷新一次问题列表
    flushProblems() {
      //setInterval(this.getProblem, 1000*60*1);
    },
    chat(){
      this.connect();
      this.chatTableVisible = true;
    },
    closeChat(){
      this.closeWebSocket();
      this.chatTableVisible = false;
    },
    submit(){
      let msgObj = new Object();
      msgObj.to = "admin";
      msgObj.from = "all";
      msgObj.content = this.msg;
      this.$store.state.stomp.send('/brocast/all', {}, JSON.stringify(msgObj));
      this.$store.commit('addMessage', msgObj);
      this.msg = '';
    },
    //日期格式化
    dateFormate(data,patt){
      var y = data.getFullYear();
      var M = (data.getMonth()+1).toString().padStart(2,"0");
      var d = (data.getDate()).toString().padStart(2,"0");

      var h = (data.getHours()).toString().padStart(2,"0");
      var m = (data.getMinutes()).toString().padStart(2,"0");
      var s = (data.getSeconds()).toString().padStart(2,"0");

      if(patt && patt.toLowerCase()=="yyyy-mm-dd"){
        return `${y}-${M}-${d}`;
      }else{
        return `${y}-${M}-${d}  ${h}:${m}:${s}`;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .el-container{
      height: 100%;
  }
  .el-header{
    background-color: #B3C0D1;
    position: relative;
    color: #333;
    font-size: 20px;
    text-align: center;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  i{
    margin-right: 10px;
  }
  .loginUser{
    font-size: 14px;
    position: absolute;
    top:0px;
    right:114px;
    .infoNum {
      position: absolute;
      top: 3px;
      right: -7px;
      width: 30px;
      height: 20px;
      border-radius: 10px;
      background-color: #EE6A50 ;
      span{
        position: absolute;
        top: -19px;
        right: 11px;
        color: white;
        font-weight: bold;
      }
    }
    .chatBtn{
      margin-right: 34px;
    }
  }
  #chatapp {
    margin: 20px auto;
    width: 800px;
    height: 600px;
    overflow: hidden;
    .sidebar {
      float: left;
      color: #f4f4f4;
      background-color: #2e3238;
      width: 200px;
      height: 100%;
    }
    .main {
      float: left;
      width: 500px;
      height: 100%;
      position: relative;
      overflow: hidden;
      border: 1px solid  #DDD;
    }
  }
</style>