import "./Produto.scss"

const Produto = () => {
    return ( 
        <div className="produto">
            <div className="produto_img">
                <img src="https://placehold.co/200" alt="" />
            </div>
            <div className="produto_text">
                <span className="produto_text_nome">Nome produto</span>
                <span className="produto_text_preco">R$82,00</span>
            </div>
            <button className="produto_button w-100">Adicionar ao carrinho</button>
        </div>
     );
}
 
export default Produto;