import React from "react"
import { Form, Button } from "react-bootstrap"

const Generator = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Заголовок</Form.Label>
                    <Form.Control type="text" placeholder="nfactorial demo day 2022" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ключевые слова</Form.Label>
                    <Form.Control type="text" placeholder="IT, веб-приложения, инновации" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Описание аудиотрии</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="tech энтузиазисты, предприниматели"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Сгенерерировать
                </Button>
            </Form>
        </div>
    )
}
export default Generator