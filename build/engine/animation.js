System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Animation;
    return {
        setters:[],
        execute: function() {
            Animation = (function () {
                function Animation(context) {
                    this.context = context;
                    this.sprites = [];
                    this.started = false;
                }
                Animation.prototype.newSprite = function (sprite) {
                    this.sprites.push(new sprite(this.context));
                };
                Animation.prototype.start = function () {
                    this.started = true;
                    this.nextFrame();
                };
                Animation.prototype.stop = function () {
                    this.started = false;
                };
                Animation.prototype.nextFrame = function () {
                    if (!this.started)
                        return;
                    this.clear();
                    this.sprites.forEach(function (sp) {
                        sp.update();
                        sp.draw();
                    });
                    var animation = this;
                    requestAnimationFrame(function () {
                        setTimeout(function () {
                            animation.nextFrame();
                        }, 1000 / 30);
                    });
                };
                Animation.prototype.clear = function () {
                    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
                };
                return Animation;
            }());
            exports_1("Animation", Animation);
        }
    }
});
//# sourceMappingURL=animation.js.map