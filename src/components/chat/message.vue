<template>
    <div id="message" v-scroll-bottom="sessions">
        <ul v-if="currentSession">
            <li v-for="entry in sessions[user+'#'+currentSession]">
                <p class="time">
                    <span v-if="isshow(entry.date)">{{entry.date | dateFormate}}</span>
                </p>
                <div class="main" :class="{self:entry.self}">
                    <span v-if="!entry.self">{{currentSession}}:</span>
                    <p class="text">{{entry.content}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'message',
        data() {
            return {
                user: window.sessionStorage.getItem("name")
            }
        },
        computed: mapState([
            'sessions',
            'currentSession'
        ]),
        methods:{
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
            },
            isshow(date){
               var now = new Date().getTime();
               var flag = now - date.getTime();
               return flag>3*60*1000;
            }
        },
        filters: {
            time(date) {
                if (date) {
                    date = new Date(date);
                }
                return `${date.getHours()}:${date.getMinutes()}`;
            },
            dateFormate: function(datastr,patt){
                var data = new Date(datastr);
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
        },
        directives: {/*这个是vue的自定义指令,官方文档有详细说明*/
            // 发送消息后滚动到底部,这里无法使用原作者的方法，也未找到合理的方法解决，暂用setTimeout的方法模拟
            'scroll-bottom'(el) {
                //console.log(el.scrollTop);
                setTimeout(function () {
                    el.scrollTop += 9999;
                }, 1)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #message {
        padding: 15px;
        max-height: 68%;
        overflow-y: scroll;
        width: 500px;
        ul {
            list-style-type: none;
            padding-left: 0px;
            li {
                margin-bottom: 15px;
            }
        }

        .time {
            text-align: center;
            margin: 7px 0;

            > span {
                display: inline-block;
                padding: 0 18px;
                font-size: 12px;
                color: #FFF;
                background-color: #dcdcdc;
                border-radius: 2px;
            }
        }

        .main {
            .avatar {
                float: left;
                margin: 0 10px 0 0;
                border-radius: 3px;
                width: 30px;
                height: 30px;

            }

            .text {
                display: inline-block;
                padding: 0 10px;
                max-width: 40%;
                background-color: #fafafa;
                border-radius: 4px;
                line-height: 30px;
            }
        }

        .self {
            text-align: right;

            .avatar {
                float: right;
                margin: 0 0 0 10px;
                border-radius: 3px;
                width: 30px;
                height: 30px;
            }

            .text {
                display: inline-block;
                padding: 0 10px;
                max-width: 40%;
                background-color: #b2e281;
                border-radius: 4px;
                line-height: 30px;
            }
        }
    }
</style>
