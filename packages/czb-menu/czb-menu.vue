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
