import Button from "../Button/Button";

export default function Pokemons({ poke }) {

    let style = {
        pokemon:{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            margin: '1rem',
            padding: '0.5rem',
            backgroundColor: 'lightGreen',
            borderRadius:'20px'
        },
        img:{
            width:'120px'
        }
    }

    return (
        <>
        <div style={style.pokemon} className="pokemon">
            <h3 className="id">{poke.id}</h3>
            <img style={style.img} className="imgPoke" src={poke.img} alt={poke.name}/>
            <h3 className="name">{poke.name}</h3>
            <Button name={poke.name}/>
        </div>
        </>
    )
}

