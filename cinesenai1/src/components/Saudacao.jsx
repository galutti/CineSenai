// export const Saudacao = (props) => {
//     return <h2>Olá, {props.nome}! Você tem {props.idade} anos.</h2>;  
// }

export const Saudacao = ({nome, idade = 18}) => {

    return <h2>Olá, {nome}! Você tem {idade} anos.</h2>
}
