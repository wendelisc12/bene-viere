import Form from 'react-bootstrap/Form';

const Primeira = () => {
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <div className='row'>
                    <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
                        <Form.Label>Idade</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
                        <Form.Label>Peso</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3 col" controlId="exampleForm.ControlInput1">
                        <Form.Label>Altura</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </div>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Toma algum remédio controlado? se sim, especifique qual</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Tem algum tipo de alergia, cirurgia ou doenças crônicas? se sim, especifique qual</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Fez o uso de emagrecedor nos últimos 90 dias? se sim, especifique qual</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Form>
        </>
    );
}

export default Primeira;