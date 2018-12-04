//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {

    startPointX:number;
    startPointY:number;
    xAddSpeed:number=0;
    yAddSpeed:number=0;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })



    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        // const result = await RES.getResAsync("description_json")
        // this.startAnimation(result);
        // await platform.login();
        // const userInfo = await platform.getUserInfo();
        // console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private textfield: egret.TextField;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {
        // let speedC=6

        let mian= this.createBitmapByName("mian_jpeg")
        let qiu=this.createBitmapByName("qiuqiu_3_png")
        let box1=this.createDefaultObj(1,50,50)
        qiu.width *=0.5
        qiu.height *=0.5
        mian.width=1024
        mian.height=646
        this.addChild(mian)
        this.addChild(qiu)
        // box1.addChild(qiu)
        // box1.addChild(qiu)
        this.startPointX=0
        this.startPointY=0
        qiu.x=512
        qiu.y=323
        qiu.anchorOffsetX = qiu.width/2
        qiu.anchorOffsetY = qiu.height/2
        var label:egret.TextField = new egret.TextField(); 
        label.text = "This is a text!"; 
        this.addChild( label );

        // let xSpeed=(Math.random()*2-1)*speedC
        // let ySpeed=(Math.random()*2-1)*speedC
        qiu["xSpeed"]=0
        qiu["ySpeed"]=0
        // box1.x=100
        // box1.y=100
        // let sky = this.createBitmapByName("bg_jpg");
        // let box1 = this.createDefaultObj(0,50,50)
        // let box2 = this.createDefaultObj(0,100,100)
        // // this.addChild(sky);
        // // this.addChild(box1)
        // this.addChild(box2)
        // box2.addChild(box1)
        // this.startPointX=300
        // this.startPointY=300
        // return;
        this.getOrientation(label)
        this.addEventListener( egret.Event.ENTER_FRAME, ( evt:egret.Event )=>{

        // this.startPointX+=(Math.random()*2-1)*4
        // this.startPointY+=(Math.random()*2-1)*4
            /*** 本示例关键代码段开始 ***/
        //    let goOne=this.createDefaultObj(0,4,4)
        //    this.addChild(goOne)
        //     goOne.x=this.startPointX
        //     goOne.y=this.startPointY
            qiu["xSpeed"]+=this.xAddSpeed
            qiu["ySpeed"]+=this.yAddSpeed
            qiu.x+=qiu["xSpeed"]
            qiu.y+=qiu["ySpeed"]
            if(qiu.y<=qiu.height/2 || qiu.y+qiu.height/2>=646){
                qiu["ySpeed"]*=-1*0.8
            }

            if(qiu.x<=qiu.width/2|| qiu.x+qiu.width/2>=1024){
                qiu["xSpeed"]*=-1*0.8
            }

            

            return false;  /// 友情提示： startTick 中回调返回值表示执行结束是否立即重绘
        }, this );
        // sky.x=200
        // sky.y=200
        // box1.x=300
        // box2.x=500
    }

    private comAddSpeed(itemX:number,itemY:number){

    }

    private getOrientation(item:egret.TextField){
        var _this1=this
        // if (window.DeviceOrientationEvent!=undefined) {
            window.addEventListener('deviceorientation', function(event){
                
                    let alpha = event.alpha
                    let beta = event.beta
                    let gamma = event.gamma
                    // console.log(alpha,beta,gamma)
                    item.text=beta+"."+gamma+"."+alpha
                    // alert(alpha)
            _this1.xAddSpeed=Math.sin(gamma)*9.8/60
            _this1.yAddSpeed=Math.sin(beta)*9.8/60
            }, false);
        // } else {
        //     document.querySelector('body').innerHTML = '你的浏览器不支持陀螺仪';
        // }

    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    private createDefaultObj(type:number,width:number,height:number){
        let result = new egret.Sprite();
        result.graphics.beginFill(0x00ff00);
        switch(type){
            case 0:
                result.graphics.drawRect(0,0,width,height);
            break;
            case 1:
                result.graphics.drawCircle(0,0,width)
            break;
            default:
                result.graphics.drawRect(0,0,width,height);
            break;
        }
        result.graphics.endFill();
        return result;
    }

    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: string[]) {
        let parser = new egret.HtmlTextParser();

        let textflowArr = result.map(text => parser.parse(text));
        let textfield = this.textfield;
        let count = -1;
        let change = () => {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            let textFlow = textflowArr[count];

            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            let tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, this);
        };

        change();
    }
}