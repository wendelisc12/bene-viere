import { Form } from "react-bootstrap";

const Quarta = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Compulsivo por doces ou salgados?</Form.Label>
                <Form.Check type="radio" label="Doce" name="compulsao_doce_salgado" id="doce_compulsao"/>
                <Form.Check type="radio" label="Salgado" name="compulsao_doce_salgado" id="salgado_compulsao"/>
                <Form.Check type="radio" label="Não" name="compulsao_doce_salgado" id="nao_compulsao"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Tem diabetes?</Form.Label>
                <Form.Check type="radio" label="Sim, tomo medicação" name="diabetico" id="diabetico_medicacao"/>
                <Form.Check type="radio" label="Sim, não tomo medicação" name="diabetico" id="diabetico_nao_medicacao"/>
                <Form.Check type="radio" label="Pré diabético" name="diabetico" id="pre_diabetico"/>
                <Form.Check type="radio" label="Não" name="diabetico" id="diabetico_nao"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Sofre com libido ou fertilidade?</Form.Label>
                <Form.Check type="radio" label="Sim" name="libido_fertilidade" id="libido_fertilidadeSim"/>
                <Form.Check type="radio" label="Não" name="libido_fertilidade" id="libido_fertilidadeNao"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Sofre com Menopausa ou TPM?</Form.Label>
                <Form.Check type="radio" label="Sim" name="menopausa_tpm" id="menopausa_tpm_sim"/>
                <Form.Check type="radio" label="Não" name="menopausa_tpm" id="menopausa_tpm_nao"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Sofre com queda de cabelo e/ou falta de crescimento, fios e unhas fracas?</Form.Label>
                <Form.Check type="radio" label="Sim" name="queda_cabelo_unhas" id="queda_cabelo_unhas_sim"/>
                <Form.Check type="radio" label="Não" name="queda_cabelo_unhas" id="queda_cabelo_unhas_nao"/>
            </Form.Group>
        </Form>
    );
}

export default Quarta;
