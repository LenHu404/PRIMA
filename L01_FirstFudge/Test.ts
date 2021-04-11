namespace L01_FirstFudge {

    import f = FudgeCore;

    window.addEventListener("load", init);

    let node: f.Node = new f.Node("Test");
    let viewport: f.Viewport = new f.Viewport();

    function init(_event: Event): void {
        node.addComponent(new f.ComponentTransform());

        const canvas: HTMLCanvasElement = document.querySelector("canvas");

        let mesh: f.MeshQuad = new f.MeshQuad("Quad");
        let cmpMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        node.addComponent(cmpMesh);


        let material: f.Material = new f.Material("Florian", f.ShaderUniColor, new f.CoatColored(new f.Color(1, 1, 1, 1)));
        let cmpMaterial: f.ComponentMaterial = new f.ComponentMaterial(material);
        node.addComponent(cmpMaterial);

        /* f.Color.CSS("'ff000", 1); */


        let cmpCamera: f.ComponentCamera = new f.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(3);
        cmpCamera.mtxPivot.rotateY(180);

        console.log(cmpCamera);

        viewport.initialize("Viewport", node, cmpCamera, canvas);
        viewport.draw();

        f.Loop.start(f.LOOP_MODE.TIME_REAL, 60);
        f.Loop.addEventListener(f.EVENT.LOOP_FRAME, update);


    }

    function update(_event: Event): void {
        // console.log(_event);
        let rotSpeed: number = 90;
        let timeSinceLastFrameInSeconds: number = f.Loop.timeFrameGame / 1000;
        node.getComponent(f.ComponentMesh).mtxPivot.rotateZ(rotSpeed * timeSinceLastFrameInSeconds);
        viewport.draw();

    }

    /* function rotateQuad(_node: f.Node, _cmpMesh: f.ComponentMesh): void {
        while (true) {
            _cmpMesh.mtxPivot.rotateY(25);
            _node.addComponent(_cmpMesh);
        }

    } */


}
