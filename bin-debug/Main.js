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
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.xAddSpeed = 0;
        _this.yAddSpeed = 0;
        _this.pyNum = 8;
        _this.gameNum = 0;
        _this.startTime = (new Date()).valueOf();
        _this.maxTime = 0;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
            context.onUpdate = function () {
            };
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 2:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        var _this = this;
        var speedC = 1;
        var moca = 0.2;
        var mian = this.createBitmapByName("mian_jpg");
        // mian.texture = RES.getRes("box");
        mian.fillMode = egret.BitmapFillMode.SCALE;
        var qiu = this.createBitmapByName("qiuqiu_3_png");
        var box1 = this.createDefaultObj(1, 50, 50);
        var outNum = 0;
        var maxTime = 0;
        qiu.width *= 0.5;
        qiu.height *= 0.5;
        mian.width = 646;
        mian.height = 1024;
        this.addChild(mian);
        this.addChild(qiu);
        // box1.addChild(qiu)
        // box1.addChild(qiu)
        this.startPointX = 0;
        this.startPointY = 0;
        qiu.x = 323;
        qiu.y = 512;
        qiu.anchorOffsetX = qiu.width / 2;
        qiu.anchorOffsetY = qiu.height / 2;
        var label = new egret.TextField();
        label.text = "当前游戏时间：0";
        this.addChild(label);
        var label2 = new egret.TextField();
        label2.text = "碰壁失败次数：0";
        this.addChild(label2);
        label2.y = 50;
        var label3 = new egret.TextField();
        label3.text = "最长游戏时间：0";
        this.addChild(label3);
        label3.y = 100;
        // var label1:egret.TextField = new egret.TextField(); 
        // label1.text = "This is a text!"; 
        // this.addChild( label1 );
        // label1.y=150
        var xSpeed = (Math.random() * 2 - 1) * speedC;
        var ySpeed = (Math.random() * 2 - 1) * speedC;
        qiu["xSpeed"] = xSpeed;
        qiu["ySpeed"] = ySpeed;
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
        var startTime = (new Date()).valueOf();
        var endTime = (new Date()).valueOf();
        this.getOrientation(label, label2);
        this.addEventListener(egret.Event.ENTER_FRAME, function (evt) {
            // this.startPointX+=(Math.random()*2-1)*4
            // this.startPointY+=(Math.random()*2-1)*4
            /*** 本示例关键代码段开始 ***/
            //    let goOne=this.createDefaultObj(0,4,4)
            //    this.addChild(goOne)
            //     goOne.x=this.startPointX
            //     goOne.y=this.startPointY
            qiu["xSpeed"] += _this.xAddSpeed;
            qiu["ySpeed"] += _this.yAddSpeed;
            qiu.x += qiu["xSpeed"] * (1 - moca / 60);
            qiu.y += qiu["ySpeed"] * (1 - moca / 60);
            // label1.text=qiu["xSpeed"].toFixed(2)+"."+qiu["ySpeed"].toFixed(2)+"."
            // if(qiu.y<=qiu.height/2 || qiu.y+qiu.height/2>=646){
            //     qiu["ySpeed"]*=-1*0.8
            // }
            // if(qiu.x<=qiu.width/2|| qiu.x+qiu.width/2>=1024){
            //     qiu["xSpeed"]*=-1*0.8
            // }
            endTime = (new Date()).valueOf();
            label.text = "当前游戏时间：" + ((endTime - _this.startTime) / 1000).toFixed(2).toString();
            if (qiu.y <= qiu.height / 2) {
                _this.gameOverAct(label2, label3);
                // endTime=(new Date()).valueOf();
                // label.text = "最长游戏时间："+((endTime-startTime)/1000).toFixed(2).toString(); 
                // outNum++
                // label2.text = "碰壁失败次数："+outNum.toString();
                // startTime=endTime
                qiu.y = qiu.height / 2;
                qiu["ySpeed"] *= -1 * 0.8;
            }
            if (qiu.y + qiu.height / 2 >= 1024) {
                _this.gameOverAct(label2, label3);
                qiu.y = 1024 - qiu.height / 2;
                qiu["ySpeed"] *= -1 * 0.8;
            }
            if (qiu.x <= qiu.width / 2) {
                _this.gameOverAct(label2, label3);
                qiu.x = qiu.width / 2;
                qiu["xSpeed"] *= -1 * 0.8;
            }
            if (qiu.x + qiu.width / 2 >= 646) {
                _this.gameOverAct(label2, label3);
                qiu.x = 646 - qiu.width / 2;
                qiu["xSpeed"] *= -1 * 0.8;
            }
            return false; /// 友情提示： startTick 中回调返回值表示执行结束是否立即重绘
        }, this);
        // sky.x=200
        // sky.y=200
        // box1.x=300
        // box2.x=500
    };
    Main.prototype.comAddSpeed = function (itemX, itemY) {
    };
    Main.prototype.gameOverAct = function (item, item1) {
        var endTime = (new Date()).valueOf();
        var timeC = (endTime - this.startTime);
        if (timeC > this.maxTime) {
            this.maxTime = timeC;
            item1.text = "最长游戏时间：" + (timeC / 1000).toFixed(2);
        }
        this.gameNum++;
        item.text = "碰壁失败次数：" + this.gameNum.toString();
        this.startTime = endTime;
    };
    Main.prototype.getOrientation = function (item, item1) {
        var _this1 = this;
        // if (window.DeviceOrientationEvent!=undefined) {
        window.addEventListener('deviceorientation', function (event) {
            var alpha = event.alpha * 0.017453293;
            var beta = event.beta * 0.017453293;
            var gamma = event.gamma * 0.017453293;
            // console.log(alpha,beta,gamma)
            // item.text=gamma.toFixed(2)+"."+beta.toFixed(2)+"."+alpha.toFixed(2)
            // alert(alpha)
            _this1.xAddSpeed = Math.sin(gamma ? gamma : 0) * 9.8 / 60 * _this1.pyNum;
            _this1.yAddSpeed = Math.sin(beta ? beta : 0) * 9.8 / 60 * _this1.pyNum;
            // item1.text=(Math.sin(gamma?gamma:0)).toFixed(2)+"."+(Math.sin(beta?beta:0)).toFixed(2)
        }, false);
        // } else {
        //     document.querySelector('body').innerHTML = '你的浏览器不支持陀螺仪';
        // }
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    Main.prototype.createDefaultObj = function (type, width, height) {
        var result = new egret.Sprite();
        result.graphics.beginFill(0x00ff00);
        switch (type) {
            case 0:
                result.graphics.drawRect(0, 0, width, height);
                break;
            case 1:
                result.graphics.drawCircle(0, 0, width);
                break;
            default:
                result.graphics.drawRect(0, 0, width, height);
                break;
        }
        result.graphics.endFill();
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    Main.prototype.startAnimation = function (result) {
        var _this = this;
        var parser = new egret.HtmlTextParser();
        var textflowArr = result.map(function (text) { return parser.parse(text); });
        var textfield = this.textfield;
        var count = -1;
        var change = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var textFlow = textflowArr[count];
            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            var tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, _this);
        };
        change();
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map