# 介绍

----

`czbUI` 是一款基于 `Vue.js 2.0` 的前端 UI 组件库，主要用于快速开发桌面web应用<br>
- 适用于拥有HTML+CSS+JAVASCRIPT基础，对前后端分离、MVVM、模块化、组件化感兴趣的同学
## 特性

- 基于 `Vue.js` 开发的 UI 组件
- 基础布局采用Flex弹性盒子结构
- 使用 npm + webpack + babel 的工作流，支持 ES6
- 提供友好的 API，灵活使用组件
- 适配车置宝桌面端需要
## 设计规范
<style lang="less">
    .box-wrap{
        overflow: hidden;
    }
    .box{
        width: 126px;
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);
        size-size: 14px;
        margin: 8px;
        float: left;
        .box-content{
            width: 126px;
            height: 150px;
            color: #fff;
            display: flex;
            align-items: center;
            div{
                text-align: center;
                span{
                    margin: 10px 0;
                    size-size: 18px;
                    &:last-child{
                        size-size: 14px;
                    } 
                }
            }
            &.color00a7ea{
                background-color: #0097e0;
            }
            &.color333{
                background-color: #333;
            }
            &.color999{
                background-color: #999;
            }
            &.colore7e7e7{
                background-color: #e7e7e7;
            }
            &.colorfd4f5c{
                background-color: #fd4f5c;
            }
            &.colorrgba{
                background-color: rgba(0,0,0,.5);
            }
        }
        .box-title{
            padding: 10px;
        }
    }
</style>
<div class="box-wrap">
    <div class="box">
        <div class="box-content color00a7ea">
            <div>
                <span>#0097e0</span>
                <span>rgb(0,151,224)</span>
            </div>
        </div>
        <div class="box-title">主色调</div>
    </div>
    <div class="box">
        <div class="box-content color333">
            <div>
                <span>#333333</span>
                <span>rgb(51,51,51)</span>
            </div>
        </div>
        <div class="box-title">文本主体色</div>
    </div>
    <div class="box">
        <div class="box-content color999">
            <div>
                <span>#999999</span>
                <span>rgb(153,153,153)</span>
            </div>
        </div>
        <div class="box-title">提示性文本色</div>
    </div>
    <div class="box">
        <div class="box-content colore7e7e7">
            <div>
                <span>#e7e7e7</span>
                <span>rgb(221,221,221)</span>
            </div>
        </div>
        <div class="box-title">边框线条色</div>
    </div>
    <div class="box">
        <div class="box-content colorfd4f5c">
            <div>
                <span>#fd4f5c</span>
                <span>rgb(223,79,92)</span>
            </div>
        </div>
        <div class="box-title">错误提示色</div>
    </div>
    <div class="box">
        <div class="box-content colorrgba">
            <div>
                <span>rgba(0,0,0,.5)</span>
                <span>opacity: 0.5</span>
            </div>
        </div>
        <div class="box-title">半透明背景</div>
    </div>
</div>

## 浏览器支持

- "> 1%,last 2 versions,not ie <= 8"
