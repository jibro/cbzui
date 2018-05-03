<template>
    <div class="czb-modal-box" v-if="myVisible">
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

