import React from 'react'
import './InputField.css'

const TextAreaField = ({ label, name, value, onChange }) => (
    <div className="input-group">
        <label htmlFor={name}>{label}</label>
        <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="textarea-field"
        rows={4}
        />
    </div>
)

export default TextAreaField
