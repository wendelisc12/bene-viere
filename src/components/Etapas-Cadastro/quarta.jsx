import { Form } from "react-bootstrap";

const Quarta = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Fica pra baixo ou deprimido?</Form.Label>
                <Form.Check type="radio" label="Sim, deprimido" name="deprimido" id="sim_deprimido"/>
                <Form.Check type="radio" label="Sim, depressão e tomo medicação" name="deprimido" id="sim_depressao_medicacao"/>
                <Form.Check type="radio" label="Sim, tenho depressão. Mas não tomo medicação" name="deprimido" id="sim_depressao_naoMedicacao"/>
                <Form.Check type="radio" label="Não" name="deprimido" id="nao_deprimido"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Toma água com frequência durante o dia?</Form.Label>
                <Form.Check type="radio" label="1L" name="agua" id="agua_1l"/>
                <Form.Check type="radio" label="2L" name="agua" id="agua_2l"/>
                <Form.Check type="radio" label="3L" name="agua" id="agua_3l"/>
                <Form.Check type="radio" label="Mais de 3L" name="agua" id="agua_mais_de_3l"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Sofre de constipação ou prisão de ventre?</Form.Label>
                <Form.Check type="radio" label="Sim" name="constipacao_ou_prisao" id="constipacao_ou_prisaoSim"/>
                <Form.Check type="radio" label="Não" name="constipacao_ou_prisao" id="constipacao_ou_prisaoNao"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Gordura no fígado?</Form.Label>
                <Form.Check type="radio" label="Sim" name="gordura_figado" id="gordura_figado_sim"/>
                <Form.Check type="radio" label="Não" name="gordura_figado" id="gordura_figado_nao"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Tem dificuldade para tomar chás?</Form.Label>
                <Form.Check type="radio" label="Sim" name="dificuldade_cha" id="dificuldade_cha_sim"/>
                <Form.Check type="radio" label="Não" name="dificuldade_cha" id="dificuldade_cha_nao"/>
            </Form.Group>
        </Form>
    );
}

export default Quarta;
