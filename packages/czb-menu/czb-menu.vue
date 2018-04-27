<template>
        <ul :style="{height:height,width:width}" class="czb_menu">
        <li v-if="item.items&&item.items.length>0" v-for="item in data" :key="item.key" class="czb_menu_subMenu" :class="{'czb_menu_subMenu_open':openKeys.filter(child=>child==item.key).length>0}">
            <div @click="onTitleClick(item.key)" class="czb_menu_subMenu_title">
                <i v-if="item.icon" class="czbfont anticon" :class="item.icon"></i>
                <span>{{item.name}}</span>
                <i class="czbfont iczb-arrow_down czb_menu_subMenu_arror" :class="{'arror_open':openKeys.filter(child=>child==item.key).length>0}"></i>
            </div>
            <ul v-if="openKeys.filter(child=>child==item.key).length>0" class="czb_menu czb_menu_subMenu">
                <li v-for="child in item.items" :key="child.key" @click="onSelectedKey(child)" class="czb_menu_item" :class="{'czb_menu_item_active':mySelectedKey==child.key}">
                    <i v-if="child.icon" class="czbfont anticon" :class="child.icon"></i>
                    <span>{{child.name}}</span>
                </li>
            </ul>
        </li>
        <li v-else :key="item.key" @click="onSelectedKey(item)" class="czb_menu_item czb_menu_item_root" :class="{'czb_menu_item_active':mySelectedKey==item.key}">
            <i v-if="item.icon" class="czbfont anticon" :class="item.icon"></i>
            <span>{{item.name}}</span>
        </li>
    </ul>
</template>
<script>
    export default {
        name: 'czb-menu',
        data() {
            return {
                mySelectedKey:this.selectedKey
            }
        },
        watch:{
            selectedKey(val) {
                if(this.mySelectedKey!=val){
                    this.mySelectedKey = val
                }
            },
            mySelectedKey(val){
                let selectItem = null
                this.data.map(item=>{
                    if(item.key==val){
                        selectItem = item
                    }
                    if(item.items&&item.items.length>0){
                        let list = item.items
                        list.map(child=>{
                            if(child.key == val){
                                selectItem = child
                                if(this.openKeys.filter(open=>open==item.key).length==0){
                                    this.openKeys.push(item.key)
                                }
                            }
                        })
                    }
                })
                this.$emit("onSelectedKey",selectItem)
            }
        },
        props: {
            width:{
                type: [String],
                default: '100%'
            },
            height:{
                type: [String],
                default: '100%'
            },
            openKeys:{
                type: [Array,Object],
                default: function () {
                    return []
                }
            },
            selectedKey:{
                type: [Number,String],
                default: ''
            },
            data:{
                type: [Array],
                default: []
            }
        },
        mounted () {
            if(this.selectedKey){
                let fathChild = null
                this.data.map(item=>{
                    if(item.items&&item.items.length>0){
                        let list = item.items
                        let filterList=list.filter(child=>child.key ==this.selectedKey)
                        if(filterList.length>0){
                            fathChild = item
                        }
                    }
                })
                if(fathChild&&this.openKeys.filter(item=>item==fathChild.key).length==0){
                    this.openKeys.push(fathChild.key)
                }
            }
        },
        methods: {
            onTitleClick(key){
                let bl = true
                for(let i=0;i<this.openKeys.length;i++){
                    if(this.openKeys[i]==key){
                        this.openKeys.splice(i,1)
                        bl=false
                        break
                    }
                }
                if(bl){
                    this.openKeys.push(key)
                }
                this.$emit("onTitleClick",this.openKeys)
            },
            onSelectedKey(child){
                this.mySelectedKey = child.key
            }
        }
    }
</script>
<style>
    .czb_menu{
        font-size: 14px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-box-shadow: none;
        box-shadow: none;
        margin: 0;
        padding: 0;
        outline: none;
        margin-bottom: 0;
        padding-left: 0;
        list-style: none;
        transition: background .3s,width .2s;
        zoom: 1;
        line-height: 0;
        color: hsla(0,0%,100%,.65);
        border-right: 0;
    }
    .czb_menu_subMenu{
        transition: border-color .3s cubic-bezier(.645,.045,.355,1),background .3s cubic-bezier(.645,.045,.355,1),padding .15s cubic-bezier(.645,.045,.355,1);
        padding-bottom: .01px;
        background: #001529;
    }
    .czb_menu_subMenu_title{
        padding-left: 24px;
        line-height: 40px;
        height: 40px;
        padding-right: 34px;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        cursor: pointer;
        position: relative;
        display: block;
        white-space: nowrap;
        transition: color .3s cubic-bezier(.645,.045,.355,1),border-color .3s cubic-bezier(.645,.045,.355,1),background .3s cubic-bezier(.645,.045,.355,1),padding .15s cubic-bezier(.645,.045,.355,1);
    }
    .czb_menu_subMenu_title:hover{
        color: #fff;
    }
    .czb_menu_subMenu_open{
        color: #fff;
    }
    .czb_menu_subMenu_arror{
        position: absolute;
        top: 50%;
        right: 15px;
        z-index: 11;
        line-height: 1;
        font-size: 14px;
        margin-top: -8px;
        transition-duration: .3s;
    }
    .arror_open{
        transform: rotateZ(180deg);
        transition-duration: .3s;
    }
    .czb_menu_subMenu_title .anticon{
        display: inline-block;
        font-style: normal;
        vertical-align: baseline;
        text-align: center;
        text-transform: none;
        line-height: 1;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        min-width: 14px;
        transition: font-size .15s cubic-bezier(.215,.61,.355,1),margin .3s cubic-bezier(.645,.045,.355,1);
    }
    .czb_menu_item{
        background-color: #000c17;
        margin-left: 0;
        left: 0;
        line-height: 40px;
        height: 40px;
        list-style-type: disc;
        list-style-position: inside;
        color: hsla(0,0%,100%,.65);
        padding: 0 16px 0 48px;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        position: relative;
        cursor: pointer;
        display: block;
        white-space: nowrap;
        transition: color .3s cubic-bezier(.645,.045,.355,1),border-color .3s cubic-bezier(.645,.045,.355,1),background .3s cubic-bezier(.645,.045,.355,1),padding .15s cubic-bezier(.645,.045,.355,1);
    }
    .czb_menu_item:hover{
        color: #fff;
    }

    .czb_menu_item_active{
        color: #fff!important;
        background-color: #0097e0!important;
    }

    .czb_menu_item_root{
        background-color: #001529;
        padding: 0 16px 0 24px;
    }

</style>
