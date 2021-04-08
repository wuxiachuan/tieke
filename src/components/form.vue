<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称" >
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="即时配送">
                <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
                <el-radio-group v-model="form.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
        <table>
            <tr>
                <td>
                    踏面磨耗
                </td>
                <td>
                    <el-input v-model="form.name" ></el-input>
                </td>
                <td>
                    <el-input v-model="form.name"></el-input>
                </td>
                <td>
                    <el-input v-model="form.name"></el-input>
                </td>
                <td>
                    <el-input v-model="form.name"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                    轮辋厚
                </td>
                <td>
                    <el-input v-model="form.name" ></el-input>
                </td>
                <td>
                    <el-input v-model="form.name"></el-input>
                </td>
                <td>
                    <el-input v-model="form.name"></el-input>
                </td>
                <td>
                    <el-input v-model="form.name"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                    轮缘厚
                </td>
                <td>
                    <el-input v-model="form.name" ></el-input>
                </td>
                <td>
                    <el-input v-model="form.name"></el-input>
                </td>
                <td>
                    <el-input v-model="form.name"></el-input>
                </td>
                <td>
                    <el-input v-model="form.name"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                    轮辋宽
                </td>
                <td>
                    <el-input v-model="form.name" ></el-input>
                </td>
                <td>
                    <el-input v-model="form.name"></el-input>
                </td>
                <td>
                    <el-input v-model="form.name"></el-input>
                </td>
                <td>
                    <el-input v-model="form.name"></el-input>
                </td>
            </tr>
            <tr>
                <td>
                    轮对内距
                </td>
                <td>
                    <el-input v-model="form.name" >
                        <template slot="prepend">1: </template>
                    </el-input>
                </td>
                <td>
                    <el-input v-model="form.name">
                        <template slot="prepend">2: </template>
                    </el-input>
                </td>
                <td>
                    <el-input v-model="form.name">
                        <template slot="prepend">3: </template>
                    </el-input>
                </td>
                <td>
                    <el-input v-model="form.name">
                        <template slot="prepend">内距最大值: </template>
                    </el-input>
                </td>
            </tr>
            <tr>
                <td>
                    故障情况
                </td>
                <td>
                    <el-input v-model="form.name" ></el-input>
                </td>
                <td>
                    <el-input v-model="form.name"></el-input>
                </td>
                <td>
                    <el-input v-model="form.name"></el-input>
                </td>
                <td>
                    <el-input v-model="form.name"></el-input>
                </td>
                <td>
                    <el-input v-model="form.name"></el-input>
                </td>
                <td>
                    <el-input v-model="form.name"></el-input>
                </td>
            </tr>
        </table>
        <br>
        <br>
        <form>
            <el-row>
                <el-col :span="2"><span>踏面磨耗</span></el-col>
                <el-col :span="3"><el-input v-model="form.name"></el-input></el-col>
                <el-col :span="3"><el-input v-model="form.name"></el-input></el-col>
                <el-col :span="3"><el-input v-model="form.name"></el-input></el-col>
                <el-col :span="3"><el-input v-model="form.name"></el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span="2"><span>轮辋厚</span></el-col>
                <el-col :span="3"><el-input v-model="form.name"></el-input></el-col>
                <el-col :span="3"><el-input v-model="form.name"></el-input></el-col>
                <el-col :span="3"><el-input v-model="form.name"></el-input></el-col>
                <el-col :span="3"><el-input v-model="form.name"></el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span="2"><span>轮缘厚</span></el-col>
                <el-col :span="3"><el-input v-model="form.name"></el-input></el-col>
                <el-col :span="3"><el-input v-model="form.name"></el-input></el-col>
                <el-col :span="3"><el-input v-model="form.name"></el-input></el-col>
                <el-col :span="3"><el-input v-model="form.name"></el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span="2"><span>轮辋宽</span></el-col>
                <el-col :span="3"><el-input v-model="form.name"></el-input></el-col>
                <el-col :span="3"><el-input v-model="form.name"></el-input></el-col>
                <el-col :span="3"><el-input v-model="form.name"></el-input></el-col>
                <el-col :span="3"><el-input v-model="form.name"></el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span="2"><span>轮对内距</span></el-col>
                <el-col :span="3"><el-input v-model="form.name">
                    <template slot="prepend">1: </template>
                </el-input></el-col>
                <el-col :span="3"><el-input v-model="form.name">
                    <template slot="prepend">2: </template>
                </el-input></el-col>
                <el-col :span="3"><el-input v-model="form.name">
                    <template slot="prepend">3: </template>
                </el-input></el-col>
                <el-col :span="3"><el-input v-model="form.name">
                    <template slot="prepend">内距最大值: </template>
                </el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span="2"><span>故障情况</span></el-col>
                <el-col :span="2"><el-input v-model="form.name"></el-input></el-col>
                <el-col :span="2"><el-input v-model="form.name"></el-input></el-col>
                <el-col :span="2"><el-input v-model="form.name"></el-input></el-col>
                <el-col :span="2"><el-input v-model="form.name"></el-input></el-col>
                <el-col :span="2"><el-input v-model="form.name"></el-input></el-col>
                <el-col :span="2"><el-input v-model="form.name"></el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span="2"><span>修程</span></el-col>
                <el-col :span="6">
                    <el-radio-group v-model="radio">
                        <el-radio :label="1" style="line-height: 40px">送厂</el-radio>
                        <el-radio :label="2">旋面</el-radio>
                        <el-radio :label="3">超探</el-radio>
                    </el-radio-group>
                </el-col>
                <el-col :span="2"><el-input v-model="form.name"></el-input></el-col>
                <el-col :span="2"><span>检查者</span></el-col>
                <el-col :span="2"><el-input v-model="form.name"></el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span="2"><span>轴承型号</span></el-col>
                <el-col :span="3">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled="item.disabled">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="3">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled="item.disabled">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="2"><span>轴箱型号</span></el-col>
                <el-col :span="4">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled="item.disabled">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="2"><span>项目</span></el-col>
                <el-col :span="6"><span>左</span></el-col>
                <el-col :span="6"><span>右</span></el-col>
            </el-row>
            <el-row style="position: relative">
                <span style="position: absolute;top: 75px;left: 17px;">轴端标志板</span>
                <el-col :span="3" :offset="2">
                    <el-input v-model="form.name">
                        <template slot="prepend">A: </template>
                    </el-input>
                </el-col>
                <el-col :span="3">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled="item.disabled">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="3">
                    <el-input v-model="form.name">
                        <template slot="prepend">A: </template>
                    </el-input>
                </el-col>
                <el-col :span="3">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled="item.disabled">
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="3" :offset="2">
                    <el-input v-model="form.name">
                        <template slot="prepend">B: </template>
                    </el-input>
                </el-col>
                <el-col :span="3">
                    <el-input v-model="form.name">
                        <template slot="prepend">左</template>
                    </el-input>
                </el-col>
                <el-col :span="3">
                    <el-input v-model="form.name">
                        <template slot="prepend">B: </template>
                    </el-input>
                </el-col>
                <el-col :span="3"><el-input v-model="form.name"></el-input></el-col>
            </el-row>
            <el-row>
                <el-col :span="6" :offset="2">
                    <el-input v-model="form.name">
                        <template slot="prepend">C: </template>
                    </el-input>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="form.name">
                        <template slot="prepend">C: </template>
                    </el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6" :offset="2">
                    <el-input v-model="form.name">
                        <template slot="prepend">D: </template>
                    </el-input>
                </el-col>
                <el-col :span="6">
                    <el-input v-model="form.name">
                        <template slot="prepend">D: </template>
                    </el-input>
                </el-col>
            </el-row>

        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                },
                radio:'',
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶',
                    disabled: true
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: ''
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style lang="scss" scoped>
    table{
        border-collapse: collapse;
    }
     table td{
         border: 1px black solid;
     }
     el-input{
         width: 400px;
     }

     form{
         margin-left: 500px;
     }

    .el-row {
        margin-bottom: 5px;
    &:last-child {
         margin-bottom: 0;
     }
    }
    .el-col {
        border: 1px black solid;
        border-left: none;
        &:first-child {
            border: 1px black solid;
        }
    }
    span{
        line-height: 40px;
    }
</style>