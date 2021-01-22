type InputEventHandler = (value: string) => void;

export type GreetingProps = {
  name: string
};

export type InputFieldProps = {
  type: string,
  placeholder: string,
  errorMessage: string,
  handler: InputEventHandler
};
