import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import store from '@/store'

export function connectionSocket() {
    let socket = new SockJS('http://localhost:8081/ws/ep');//连接SockJS的endpoint名称为"/ws/ep"
    console.log('socket连接');
    // 获取STOMP子协议的客户端对象
    let stompClient = Stomp.over(socket);
    store.commit("initStomp",stompClient);
    // 向服务器发起websocket连接
    stompClient.connect({},success => {
        stompClient.subscribe('/user/queue/chat', (response) => { // 订阅服务端提供的某个topic
            if (response.body) {
                const repObj = JSON.parse(response.body);
                alert(repObj.content);
            }
        }, (err) => {
            // 连接发生错误时的处理函数
            console.log('失败')
        });
    })
}