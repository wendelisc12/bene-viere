import { Form } from "react-bootstrap";

const Sexta = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Toma algum polivitamínico para aumentar a imunidade?</Form.Label>
                <Form.Check type="radio" label="Sim" name="polivitaminico" id="polivitaminico_sim"/>
                <Form.Check type="radio" label="Não" name="polivitaminico" id="polivitaminico_nao"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Sofre com alguma dor cronica envolvendo ossos ou articulações?</Form.Label>
                <Form.Check type="radio" label="Sim" name="doencas_cronicas_ossos" id="doencas_cronicas_ossosSim"/>
                <Form.Check type="radio" label="Não" name="doencas_cronicas_ossos" id="doencas_cronicas_ossosNao"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Gostaria de melhorar a saúde da sua pele?</Form.Label>
                <Form.Check type="radio" label="Sim" name="melhorar_pele" id="melhorar_peleSim"/>
                <Form.Check type="radio" label="Não" name="melhorar_pele" id="melhorar_peleNao"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>É fumante e deseja parar?</Form.Label>
                <Form.Check type="radio" label="Sim, quero  parar" name="fumante" id="fumante_sim_parar"/>
                <Form.Check type="radio" label="Não quero parar" name="fumante" id="fumante_sim_naoParar"/>
                <Form.Check type="radio" label="Não sou fumante" name="fumante" id="fumante_nao"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Consome bebidas em excesso e deseja parar?</Form.Label>
                <Form.Check type="radio" label="Sim, quero parar" name="bebidas" id="bebidas_sim_parar"/>
                <Form.Check type="radio" label="Não bebo" name="bebidas" id="bebidas_nao"/>
                <Form.Check type="radio" label="Bebo socialmente" name="bebidas" id="bebidas_bebo_socialmente"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Mulheres</Form.Label>
                <Form.Check type="radio" label="Amamentando" name="mulheres" id="mulheres_amamentando"/>
                <Form.Check type="radio" label="Gestante" name="mulheres" id="mulheres_gestante"/>
                <Form.Check type="radio" label="Não" name="mulheres" id="mulheres_nao"/>
            </Form.Group>
        </Form>
    );
}

export default Sexta;
