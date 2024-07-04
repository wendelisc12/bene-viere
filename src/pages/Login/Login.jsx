import "./Login.scss"
import {motion} from "framer-motion"
import Form from 'react-bootstrap/Form';

const Login = () => {
    return (
        <motion.div className="login"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.4 }}
        >
            <div className="box_background">
            </div>

            <div className="box_form">
                <img src="./logo-bene.png" width={200} alt="" />
                <Form className="box_form_form">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>
                    <button className="box_form_form_button w-100">Entrar</button>
                </Form>
            </div>
        </motion.div>
    );
}

export default Login;