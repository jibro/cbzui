<template>
    <div v-show="myVisible">
        <div class="czb-modal-mask"></div>
        <div class="czb-modal-wrap">
            <div :style="{width:width}" class="czb-modal">
                <div class="czb-modal-content">
                    <button @click="myVisible=false" class="czb-modal-close"><i class="czbfont iczb-close czb-modal-close-x"></i></button>
                    <div class="czb-modal-header">
                        <div class="czb-modal-title">{{title}}</div>
                    </div>
                    <div :style="{height:height}" class="czb-modal-body">
                        <slot></slot>
                    </div>
                    <div class="czb-modal-footer">
                            <czb-button @btnClick="onsubmit">确定</czb-button>
                            <czb-button style="margin-left: 15px" @btnClick="myVisible=false" type="reverse">返回</czb-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'czb-modal',
        data() {
            return {
                myVisible: this.visible
            }
        },
        watch: {
            visible(val) {
                this.myVisible = val
            },
            myVisible(val){
                if(!val){
                    this.$emit("closeModel",val)
                }
            }
        },
        computed: {
        },
        props: {
            title: {
                type: [String],
                require: true
            },
            visible: {
                type: [Boolean],
                default: false,
            },
            width:{
                type: [String],
                default: '600px'
            },
            height:{
                type: [String],
                default: ''
            }
        },
        methods: {
            onsubmit(){
                this.$emit("onsubmit")
            }
        }
    }
</script>

<style>
    .czb-modal-mask{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.65);
        height: 100%;
        z-index: 1000;
    }
    .czb-modal-wrap{
        position: fixed;
        overflow: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        -webkit-overflow-scrolling: touch;
        outline: 0;
    }
    .czb-modal{
        line-height: 1.5;
        font-size: 14px;
        color: rgba(0,0,0,.65);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        position: relative;
        width: auto;
        margin: 0 auto;
        top: 100px;
        padding-bottom: 24px;
        transform-origin: 45px 326px 0px;
    }
    .czb-modal-content{
        position: relative;
        background-color: #fff;
        border: 0;
        border-radius: 4px;
        background-clip: padding-box;
        -webkit-box-shadow: 0 4px 12px rgba(0,0,0,.15);
        box-shadow: 0 4px 12px rgba(0,0,0,.15);
    }
    .czb-modal-header{
        padding: 16px 24px;
        border-radius: 4px 4px 0 0;
        background: #fff;
        color: rgba(0,0,0,.65);
        border-bottom: 1px solid #e8e8e8;
    }
    .czb-modal-title{
        margin: 0;
        font-size: 16px;
        line-height: 22px;
        font-weight: 500;
        color: rgba(0,0,0,.85);
    }
    .czb-modal-body{
        padding: 24px;
        font-size: 14px;
        line-height: 1.5;
        word-wrap: break-word;
    }
    .czb-modal-footer{
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: right;
        border-radius: 0 0 4px 4px;
        display: flex;
        justify-content: flex-end;
    }
    .czb-modal-close{
        cursor: pointer;
        border: 0;
        background: transparent;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 10;
        font-weight: 700;
        line-height: 1;
        text-decoration: none;
        -webkit-transition: color .3s;
        transition: color .3s;
        color: rgba(0,0,0,.45);
        outline: 0;
        padding: 0;
    }
    .czb-modal-close-x{
        display: block;
        font-style: normal;
        vertical-align: baseline;
        text-align: center;
        text-transform: none;
        text-rendering: auto;
        width: 56px;
        height: 56px;
        line-height: 56px;
        font-size: 16px;
        color: var(--color-999);
    }
</style>
