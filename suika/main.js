//모듈 불러오기
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    World = Matter.World;

const engine = Engine.create();

const render  = Render.create({
    engine,

    element:document.body,
    options: {
        wireframes : false,
        background : '#F7F4C8',
        width : 620,
        hegiht : 850,
    },
});

Render.run(render)
Runner.run(engine)
