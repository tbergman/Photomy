import * as React from 'react';
import { Form, Label } from 'semantic-ui-react';

// TODO
type AnyProps = any;

const FormInputField = ({
  errors,
  fieldName,
  value,
  handleChange,
  fieldLabel,
  readOnly,
  placeholder,
  loading,
  type,
  ...rest
}: AnyProps) => {
  return (
    <Form.Field error={errors[fieldName] ? true : false} style={{ textAlign: 'left' }}>
      {errors[fieldName] && (
        <Label color="red" pointing="below">
          {errors[fieldName]}
        </Label>
      )}

      <Form.Input
        label={fieldLabel}
        placeholder={placeholder || fieldLabel}
        value={value}
        onChange={handleChange}
        name={fieldName}
        readOnly={readOnly}
        loading={loading}
        type={type}
        step="0.0000001"
        {...rest}
      />
    </Form.Field>
  );
};

export const EmailFormField = (props: AnyProps) => {
  return (
    <FormInputField
      fluid
      autoComplete="email"
      icon="mail"
      label="E-mail address"
      iconPosition="left"
      placeholder="E-mail address"
      fieldName="email"
      type="email"
      {...props}
    />
  );
};

export const PasswordFormField = (props: AnyProps) => {
  return (
    <FormInputField
      fluid
      autoComplete="new-password"
      icon="lock"
      iconPosition="left"
      placeholder="Password"
      fieldName="password"
      type="password"
      {...props}
    />
  );
};

export default FormInputField;