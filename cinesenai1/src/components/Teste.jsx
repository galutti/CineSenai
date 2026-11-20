 const generos = [`Ação`, `Drama`, `comédia`]

    export const Teste = () => {
        return (
            <ul>
                {generos.map((genero) => 
                    <li key={genero}>{genero}</li> 
                )}
            </ul>
        );
    };
