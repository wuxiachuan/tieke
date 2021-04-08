<template>
    <div id="list">
        <ul style="padding-left: 0px">
            <li v-for="item in users" :class="{ active: currentSession?item === currentSession:false}"
                v-on:click="changeCurrentSession(item)">
                <!--   :class="[item.id === currentSession ? 'active':'']" -->
                <span v-if="isshow(item)" class="info"></span>
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'list',
        data() {
            return {
                // user:window.sessionStorage.getItem("name"),
                //users:['lisi','zhangshan','lisi','zhangshan','lisi','zhangshan','lisi','zhangshan']
            }
        },
        computed: mapState({
            users:'users',
            currentSession:'currentSession',
            currentUser:'currentUser',
            sessions:'sessions'
        }),
        methods: {
            changeCurrentSession (currentSession) {
                console.log(currentSession);
                this.sessions[this.currentUser+'*'+this.currentSession]=0;
                this.$store.commit('changeCurrentSession', currentSession)
            },
            isshow(name){
               console.log(this.sessions[this.currentUser+'*'+name]);
               if (this.currentSession!=name&&this.sessions[this.currentUser+'*'+name]>0){
                   return true;
               }else {
                   //this.sessions[this.currentUser+'*'+name]=0;
                   return false;
               }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #list {
        height: 500px;
        overflow: auto;
        li {
            padding: 16px 15px;
            border-bottom: 1px solid #292C33;
            cursor: pointer;
            list-style: none;

            &:hover {
                background-color: rgba(255, 255, 255, 0.03);
            }
        }

        li.active { /*注意这个是.不是冒号:*/
            background-color: rgba(255, 255, 255, 0.1);
        }

        .avatar {
            border-radius: 2px;
            width: 30px;
            height: 30px;
            vertical-align: middle;
        }

        .name {
            display: inline-block;
            margin-left: 15px;
            margin-top: 0px;
            margin-bottom: 0px;
        }
    }
    .info{
        display: inline-block;
        background-color: red;
        width: 10px;
        height: 10px;
        border-radius: 5px;
    }
</style>
