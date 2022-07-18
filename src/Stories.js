const stories = [
    { image: "./Images and videos/9_gag.jpg", name: "9gag" },
    { image: "./Images and videos/the-big-bang-theory.png", name: "bigbangtheory" },
    { image: "./Images and videos/emicida.jpeg", name: "emicida" },
    { image: "./Images and videos/Hp.jpg", name: "wizardingworld" },
    { image: "./Images and videos/legiao.jpg", name: "legiaourbana" },
    { image: "./Images and videos/flamengo.jpg", name: "flamengo" },
    { image: "./Images and videos/Pokemon_GO.png", name: "pokemongo" },
    { image: "./Images and videos/rick.png", name: "rickandmorty" },
]

function Storie(props) {
    return (
        <div class="storie">
            <div class="back">
                <img src="./Images and videos/stories_background.jpg" />
                <div><img src={props.image} /></div>
            </div>
            <h1>{props.name}</h1>
        </div>
    )
}

function Stories() {
    return (
        <div class="stories">
            <div class="seta"><img src="./Images and videos/seta.png" /></div>
            {stories.map(storie => <Storie image={storie.image} name={storie.name} />)}
        </div>
    )
}
export default Stories;