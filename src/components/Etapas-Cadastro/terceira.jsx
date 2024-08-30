import { Form } from "react-bootstrap";

const Terceira = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Pratica alguma atividade física?</Form.Label>
                <Form.Check type="radio" label="Caminhada" name="atividade_fisica" id="caminhada"/>
                <Form.Check type="radio" label="Academia" name="atividade_fisica" id="academia"/>
                <Form.Check type="radio" label="Não pratico nenhuma atividade" name="atividade_fisica" id="nao"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Está com alterações no colesterol ou triglicerídeos?</Form.Label>
                <Form.Check type="radio" label="Sim" name="alteraoes_colesterol_triglicerideos" id="alteraoes_colesterol_triglicerideos_sim"/>
                <Form.Check type="radio" label="Não" name="alteraoes_colesterol_triglicerideos" id="alteraoes_colesterol_triglicerideos_nao"/>
                <Form.Check type="radio" label="Talvez" name="alteraoes_colesterol_triglicerideos" id="alteraoes_colesterol_triglicerideos_talvez"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Possui problema de artrite, artrose, reumatismo, osteoporose ou fibromialgia?</Form.Label>
                <Form.Check type="radio" label="Sim" name="artitre" id="artitreSim"/>
                <Form.Check type="radio" label="Não" name="artitre" id="artitreNao"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Tem dificuldade para dormir?</Form.Label>
                <Form.Check type="radio" label="Sim" name="sono_dificuldade" id="sono_dificuldade_sim"/>
                <Form.Check type="radio" label="Não" name="sono_dificuldade" id="sono_dificuldade_nao"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Tem ansiedade?</Form.Label>
                <Form.Check type="radio" label="Sim, nível entre 1 a 5" name="ansiedade" id="ansiedade_nivel1a5"/>
                <Form.Check type="radio" label="Sim, nível entre 6 a 10" name="ansiedade" id="ansiedade_nivel6a10"/>
                <Form.Check type="radio" label="Não" name="ansiedade" id="ansiedade_nao"/>
            </Form.Group>
        </Form>
    );
}

export default Terceira;
