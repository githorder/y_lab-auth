/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { BaseButton, InvertedButton } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getCustomButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getCustomButton(buttonType);

  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {children}
    </CustomButton>
  );
};

export default Button;
