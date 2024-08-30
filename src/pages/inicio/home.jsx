import Carrousel from "../../components/Carrousel/Carrousel";
import Produto from "../../components/produto/Produto";
import "./home.scss"
import {motion} from "framer-motion"

const Home = () => {
    return ( 
        <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.4 }}
        >
            <Carrousel/>
            <div className="container my-4">
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
            </div>
        </motion.div>
     );
}
 
export default Home;