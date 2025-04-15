import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    font-weight: bold;
    margin-bottom: 4px;
`;

const Input = styled.input`
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

const InputField = ({ label, type, value, onChange, ...rest }) => (
<Wrapper>
    <Label>{label}</Label>
    <Input type={type} value={value} onChange={onChange} {...rest} />
</Wrapper>
);

export default InputField;