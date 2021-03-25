namespace L01_FirstFudge {

    import f = FudgeCore;

    window.addEventListener("load", init);

    function init(_event: Event): void {

        let node: f.Node = new f.Node("Test");

        const canvas: HTMLCanvasElement = document.querySelector("canvas");

        let mesh: f.MeshQuad = new f.MeshQuad("Quad");
        let cmpMesh: f.ComponentMesh = new f.ComponentMesh(mesh);
        cmpMesh.mtxPivot.rotateY(25);
        node.addComponent(cmpMesh);


        let material: f.Material = new f.Material("Florian", f.ShaderUniColor, new f.CoatColored(new f.Color(1, 1, 1, 1)));
        let cmpMaterial: f.ComponentMaterial = new f.ComponentMaterial(material);
        node.addComponent(cmpMaterial);

        /* f.Color.CSS("'ff000", 1); */


        let cmpCamera: f.ComponentCamera = new f.ComponentCamera();
        cmpCamera.mtxPivot.translateZ(3);
        cmpCamera.mtxPivot.rotateY(180);


        let viewport: f.Viewport = new f.Viewport();
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


}
