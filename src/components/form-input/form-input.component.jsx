/* eslint-disable react/prop-types */

import { Group, Input, InputLabel } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => (
  <Group>
    <Input {...otherProps} />
    {label && <InputLabel shrink={otherProps.value.length}>{label}</InputLabel>}
  </Group>
);

export default FormInput;
