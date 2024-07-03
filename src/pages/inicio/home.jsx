import Produto from "../../components/produto/Produto";
import "./home.scss"
import {motion} from "framer-motion"

const Home = () => {
    return ( 
        <motion.div className="container my-4"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.4 }}
        >
            <div className="my-5 pesquisa">
                <input type="text" name="" id="" placeholder="Pesquise um produto" className="form-control pesquisa_input"/>
                <button className="pesquisa_button"><i class="bi bi-search"></i></button>
            </div>
            <div className="d-flex  flex-wrap justify-content-between gap-4 align-items-center justify-content-center">
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            <Produto />
            </div>
        </motion.div>
     );
}
 
export default Home;