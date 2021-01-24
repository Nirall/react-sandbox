export type InputHandlingData = {
  fieldName: string,
  value: string
};

export type InputEventHandler = (arg0: InputHandlingData) => void;

export type GreetingProps = {
  name: string
};

export type InputFieldProps = {
  type: string,
  placeholder: string,
  errorMessage: string,
  handler: InputEventHandler,
  fieldName: string,
  value: string
};
