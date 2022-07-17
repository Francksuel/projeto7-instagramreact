const sugestions=[
    {img:"./Images and videos/barked.jpg",profile:"barked"},
    {img:"./Images and videos/respondeai.jpg",profile:"respondeai"},
    {img:"./Images and videos/portalg1.png",profile:"portalg1"},
    {img:"./Images and videos/stone.png",profile:"stone"},
    {img:"./Images and videos/ifoodbrasil.jpg",profile:"ifoodbrasil"},
]

function Sugestion(props){
    return (
<div class="sugestao">
<div class="perfis"><img src={props.img} />
    <div>
        <h3>{props.profile}</h3>
        <h4>Segue você</h4>
    </div>
</div>
<h5>Seguir</h5>
</div>
    )
}

export default function Sugestions (){
    return (
        <div>
<div class="sugestoes">
                <h1>Sugestões para você</h1>
                <h2>Ver tudo</h2>
            </div>
           {sugestions.map(sugestion => <Sugestion img={sugestion.img} profile={sugestion.profile} /> )}           
            </div>
    )
}