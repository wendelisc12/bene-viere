import { Form } from "react-bootstrap";

const Segunda = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Tem problema de pressão alta?</Form.Label>
                <Form.Check type="radio" label="Sim, É CONTROLADA" name="pressao_alta" id="simPressaoControlada"/>
                <Form.Check type="radio" label="Sim, NÃO É CONTROLADA" name="pressao_alta" id="simPressaoNaoControlada"/>
                <Form.Check type="radio" label="Não" name="pressao_alta" id="naoPressaoAlta"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Quantos quilos quer eliminar?</Form.Label>
                <Form.Check type="radio" label="Entre 1kg e 5kg" name="perda_peso" id="entre1e5"/>
                <Form.Check type="radio" label="Entre 5kg e 10kg" name="perda_peso" id="entre5e10"/>
                <Form.Check type="radio" label="Entre 10kg e 15kg" name="perda_peso" id="entre10e15"/>
                <Form.Check type="radio" label="Mais de 15kg" name="perda_peso" id="mais15"/>
                <Form.Check type="radio" label="Não quero perder peso" name="perda_peso" id="naoperderpeso"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Tem anemia?</Form.Label>
                <Form.Check type="radio" label="Sim" name="anemia" id="anemiaSim"/>
                <Form.Check type="radio" label="Não" name="anemia" id="anemiaNao"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Tem problemas nos rins?</Form.Label>
                <Form.Check type="radio" label="Sim" name="problema_rins" id="rins_sim"/>
                <Form.Check type="radio" label="Não" name="problema_rins" id="rins_nao"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Quer eliminar a gordura localizada? (barriguinha)</Form.Label>
                <Form.Check type="radio" label="Sim" name="gordura_localizada" id="gordura_localizada_sim"/>
                <Form.Check type="radio" label="Não" name="gordura_localizada" id="gordura_localizada_nao"/>
            </Form.Group>
        </Form>
    );
}

export default Segunda;
