import React from 'react';

import Input from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Form, FieldList } from './styles';

export function RegisterUser() {
  return (
    <Container>
      <Form>
        <FieldList>
          <Input placeholder='Nome' />
          <Input placeholder='Email' />
          <Input placeholder='Password' />
        </FieldList>

        <Button title="Cadastrar" />
      </Form>
    </Container>
  );
}
