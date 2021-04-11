"use strict";
var SpaceInvaders;
(function (SpaceInvaders) {
    var ƒ = FudgeCore;
    let Invader = /** @class */ (() => {
        class Invader extends SpaceInvaders.QuadNode {
            constructor(_pos) {
                let scale = new ƒ.Vector2(12 / 13, 8 / 13);
                super("Invader" + (++Invader.count), _pos, scale);
                this.getComponent(ƒ.ComponentMaterial).clrPrimary = new ƒ.Color(0.9, 0.8, 1, 1);
            }
        }
        Invader.count = 0;
        return Invader;
    })();
    SpaceInvaders.Invader = Invader;
})(SpaceInvaders || (SpaceInvaders = {}));
//# sourceMappingURL=Invader.js.map