"use strict";
var SpaceInvaders;
(function (SpaceInvaders) {
    var ƒ = FudgeCore;
    window.addEventListener("load", init);
    let viewport = new ƒ.Viewport();
    let ship;
    let speedShip = 5;
    let projectiles = new ƒ.Node("Projectiles");
    let invaders = new ƒ.Node("Invaders");
    let barricades = new ƒ.Node("Barricades");
    let moveIndex = 0;
    let moveWay = true;
    let timeToGoDown = false;
    function init(_event) {
        const canvas = document.querySelector("canvas");
        invaders.addComponent(new ƒ.ComponentTransform());
        let space = new ƒ.Node("Space");
        ship = SpaceInvaders.Ship.getInstance();
        space.addChild(ship);
        space.addChild(SpaceInvaders.MotherShip.getInstance());
        space.addChild(projectiles);
        let columnCount = 11;
        let rowCount = 5;
        for (let row = 0; row < rowCount; ++row) {
            for (let column = 0; column < columnCount; ++column) {
                let pos = new ƒ.Vector2();
                pos.x = (column - (columnCount - 1) / 2) * 15 / 13;
                pos.y = (row * 15 + 65) / 13;
                invaders.addChild(new SpaceInvaders.Invader(pos));
            }
        }
        space.addChild(invaders);
        //let barricades: ƒ.Node = new ƒ.Node("Barricades");
        let nBarricade = 4;
        for (let iBarricade = 0; iBarricade < nBarricade; ++iBarricade) {
            let pos = new ƒ.Vector2();
            pos.x = (iBarricade - (nBarricade - 1) / 2) * 53 / 13;
            pos.y = 24 / 13;
            barricades.addChild(new SpaceInvaders.Barricade(pos));
        }
        space.addChild(barricades);
        let cmpCamera = new ƒ.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(18);
        cmpCamera.mtxPivot.translateY(77 / 13);
        cmpCamera.mtxPivot.rotateY(180);
        console.log(cmpCamera);
        viewport.initialize("Viewport", space, cmpCamera, canvas);
        viewport.draw();
        console.log(space);
        ƒ.Loop.start(ƒ.LOOP_MODE.TIME_REAL, 30);
        ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, update);
    }
    function update(_event) {
        // console.log(_event);
        let offset = speedShip * ƒ.Loop.timeFrameReal / 1000;
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.A, ƒ.KEYBOARD_CODE.ARROW_LEFT]))
            ship.mtxLocal.translateX(-offset);
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.D, ƒ.KEYBOARD_CODE.ARROW_RIGHT]))
            ship.mtxLocal.translateX(+offset);
        if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.SPACE])) {
            let projectile = new SpaceInvaders.Projectile(ship.mtxLocal.translation.toVector2());
            projectiles.addChild(projectile);
        }
        for (let projectile of projectiles.getChildren()) {
            projectile.move();
            if (projectile.mtxLocal.translation.y > 13)
                projectiles.removeChild(projectile);
        }
        moveInvaders();
        checkProjectileCollision();
        viewport.draw();
    }
    function checkProjectileCollision() {
        for (let projectile of projectiles.getChildren()) {
            for (let invader of invaders.getChildren()) {
                invader.setRectPosition();
                if (projectile.checkCollision(invader)) {
                    projectiles.removeChild(projectile);
                    invaders.removeChild(invader);
                }
            }
            /* for (let barricade of barricades.getChildren() as Invader[]) {
              if (projectile.checkCollision(barricade)) {
                projectiles.removeChild(barricade);
                barricades.removeChild(barricade);
              }
            } */
        }
    }
    function moveInvaders() {
        if (moveIndex > 200) {
            moveWay = false;
            timeToGoDown = true;
        }
        if (moveIndex < -200) {
            moveWay = true;
            timeToGoDown = true;
        }
        if (moveWay) {
            invaders.mtxLocal.translateX(0.3 * ƒ.Loop.timeFrameReal / 1000);
            moveIndex++;
        }
        if (!moveWay) {
            invaders.mtxLocal.translateX(-0.3 * ƒ.Loop.timeFrameReal / 1000);
            moveIndex--;
        }
        if (timeToGoDown) {
            invaders.mtxLocal.translateY(-0.5 * ƒ.Loop.timeFrameReal / 1000);
            timeToGoDown = false;
        }
        console.log(moveIndex);
    }
})(SpaceInvaders || (SpaceInvaders = {}));
//# sourceMappingURL=SpaceInvaders.js.map