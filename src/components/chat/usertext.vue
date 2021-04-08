<template>
    <div id="uesrtext">
        <textarea placeholder="按 Ctrl + Enter 发送" v-model="content" v-on:keyup="addMessage"></textarea>
        <el-button id="btn" size="small" @click="send">发送</el-button>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'uesrtext',
        data() {
            return {
                content: ''
            }
        },
        computed: mapState({
            sessions: 'sessions',
            currentSession: 'currentSession'
        }),
        methods: {
            addMessage(e) {
                if (e.ctrlKey && e.keyCode === 13 ) this.send();
            },
            send(){
                if (this.content.length) {
                    let msgObj = new Object();
                    msgObj.from = sessionStorage.getItem("name");
                    msgObj.to = this.currentSession;
                    msgObj.message = this.content;
                    msgObj.notSelf = false;
                    this.$store.state.websocket.send(JSON.stringify(msgObj));
                    this.$store.commit("addChatMessage",msgObj);
                    this.content = '';
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #uesrtext {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 500px;
        height: 30%;
        overflow: hidden;
        border: solid 1px #DDD;
         textarea {
            padding: 15px;
            width: 100%;
            height: 60%;
            border: none;
            outline: none;
        }
        #btn{
            position: absolute;
            right: 2px;
            bottom: 2px;
        }
    }
</style>
