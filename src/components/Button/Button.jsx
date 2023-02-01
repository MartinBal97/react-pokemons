
export default function Button({name}) {

    return (
        <>
            <button onClick={() => console.log(name)}>Ver vame en consola</button>
        </>
    )
}