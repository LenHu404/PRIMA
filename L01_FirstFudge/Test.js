"use strict";
var L01_FirstFudge;
(function (L01_FirstFudge) {
    var f = FudgeCore;
    window.addEventListener("load", init);
    function init(_event) {
        let node = new f.Node("Test");
        const canvas = document.querySelector("canvas");
        let mesh = new f.MeshQuad("Quad");
        let cmpMesh = new f.ComponentMesh(mesh);
        cmpMesh.mtxPivot.rotateY(25);
        node.addComponent(cmpMesh);
        let material = new f.Material("Florian", f.ShaderUniColor, new f.CoatColored(new f.Color(1, 1, 1, 1)));
        let cmpMaterial = new f.ComponentMaterial(material);
        node.addComponent(cmpMaterial);
        /* f.Color.CSS("'ff000", 1); */
        let cmpCamera = new f.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(3);
        cmpCamera.mtxPivot.rotateY(180);
        let viewport = new f.Viewport();
        viewport.initialize("Viewport", node, cmpCamera, canvas);
        viewport.draw();
        console.log(cmpCamera);
        // rotateQuad(node, cmpMesh);
    }
    /* function rotateQuad(_node: f.Node, _cmpMesh: f.ComponentMesh): void {
        while (true) {
            _cmpMesh.mtxPivot.rotateY(25);
            _node.addComponent(_cmpMesh);
        }

    } */
})(L01_FirstFudge || (L01_FirstFudge = {}));
//# sourceMappingURL=Test.js.map