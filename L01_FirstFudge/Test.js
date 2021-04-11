"use strict";
var L01_FirstFudge;
(function (L01_FirstFudge) {
    var f = FudgeCore;
    window.addEventListener("load", init);
    let node = new f.Node("Test");
    let viewport = new f.Viewport();
    function init(_event) {
        node.addComponent(new f.ComponentTransform());
        const canvas = document.querySelector("canvas");
        let mesh = new f.MeshQuad("Quad");
        let cmpMesh = new f.ComponentMesh(mesh);
        node.addComponent(cmpMesh);
        let material = new f.Material("Florian", f.ShaderUniColor, new f.CoatColored(new f.Color(1, 1, 1, 1)));
        let cmpMaterial = new f.ComponentMaterial(material);
        node.addComponent(cmpMaterial);
        /* f.Color.CSS("'ff000", 1); */
        let cmpCamera = new f.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(3);
        cmpCamera.mtxPivot.rotateY(180);
        console.log(cmpCamera);
        viewport.initialize("Viewport", node, cmpCamera, canvas);
        viewport.draw();
        f.Loop.start(f.LOOP_MODE.TIME_REAL, 60);
        f.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, update);
    }
    function update(_event) {
        // console.log(_event);
        let rotSpeed = 90;
        let timeSinceLastFrameInSeconds = f.Loop.timeFrameGame / 1000;
        node.getComponent(f.ComponentMesh).mtxPivot.rotateZ(rotSpeed * timeSinceLastFrameInSeconds);
        viewport.draw();
    }
    /* function rotateQuad(_node: f.Node, _cmpMesh: f.ComponentMesh): void {
        while (true) {
            _cmpMesh.mtxPivot.rotateY(25);
            _node.addComponent(_cmpMesh);
        }

    } */
})(L01_FirstFudge || (L01_FirstFudge = {}));
//# sourceMappingURL=Test.js.map