<template>
    <ul class="czb__pagination__ul">
        <li :aria-disabled="childCurrent<2" @click="leftClick" class="czb__pagination__prev"><</li>
        <li @click="onChange(index)" :key="index" v-for="index in indexNumber" class="czb__pagination__li" :class="{'is-checked': childCurrent==index}">
            {{index}}
        </li>
        <li @click="rightClick" class="czb__pagination__prev">></li>
    </ul>
</template>
<script>
    export default {
        name: 'czb-pagination',
        data() {
            return {
                childCurrent:this.current
            }
        },
        watch:{
            current(val){
                this.childCurrent = val
            },
            childCurrent(val){
                this.$emit("onChange",val);
            }
        },
        computed: {
            indexNumber: function () {
                let index = this.total/this.pageSize
                index = index>0?index:1
                let list = []
                for (let i = 1;i<=index;i++){
                    list.push(i)
                }
                return this.total?list:[]
            }
        },
        props: {
            current: {
                type: [Number],
                default: 0,
                validator: function (value) {
                    return value >= 0
                }
            },
            pageSize: {
                type: [Number],
                default: 10,
                validator: function (value) {
                    return value >= 0
                }
            },
            total: {
                type: [Number],
                default: 0,
                required: true,
                validator: function (value) {
                    return value >= 0
                }
            }
        },
        methods: {
            onChange(index){
                this.childCurrent = index
            },
            leftClick(){
                if(this.childCurrent>1){
                    this.childCurrent = this.childCurrent-1
                }
            },
            rightClick(){
                if(this.childCurrent<this.indexNumber.length){
                    this.childCurrent = this.childCurrent+1
                }
            }
        }
    }
</script>
