

export function alterar() {
    return (
        <div className="container">
            <h1>Alterar</h1>
            <form>
                <input type="email" name="email" id="email"></input>
                <input type="password" name="senha" id="senha"></input>
                <button type="submit">Alterar</button>
            </form>
        </div>
    )
}