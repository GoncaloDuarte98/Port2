import React from 'react';
import { Container, Card, Button, ListGroup, CardDeck } from 'react-bootstrap';

function Table1() {
    return (
        <Card>
            <Container>
                icon
           </Container>
            <h1></h1>
        </Card>
    );
}

export default function SkillsTable() {
    return (
        <Container className="bg-danger mb-5">
            <CardDeck>
                <Table1 />
                <Card>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural
                            lead-in to additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This card has
                            even longer content than the first to show that
                            equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            Last updated 3 mins ago
                        </small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </Container>
    );
}
