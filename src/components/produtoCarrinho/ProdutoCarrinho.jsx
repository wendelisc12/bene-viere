import "./ProdutoCarrinho.scss"
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';

const ProdutoCarrinho = () => {
    return ( 
        <div className="produtoCarrinho">
            <div className="produtoCarrinho_image">
                <img src="https://placehold.co/100" alt="" />
            </div>

            <div className="produtoCarrinho_text">
                <span className="produtoCarrinho_text_titulo">Nome produto</span>
                <span className="produtoCarrinho_text_desc text-truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
            </div>

            <div className="produtoCarrinho_preco">
                <span className="produtoCarrinho_preco_titulo">Preço</span>
                <span className="produtoCarrinho_preco_preco">12,99</span>
            </div>

            <div className="produtoCarrinho_preco">
            <span className="produtoCarrinho_preco_titulo">Quantidade</span>
            <span className="produtoCarrinho_preco_preco">1</span>
            </div>
            <div className="produtoCarrinho_preco">
                <button className="btn btn-danger w-25 d-flex align-items-center justify-content-center"><i class="bi bi-trash3-fill"></i></button>
            </div>
        </div>
     );
}
 
export default ProdutoCarrinho;