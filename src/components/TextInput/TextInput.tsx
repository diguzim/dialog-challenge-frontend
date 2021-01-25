import React, { useRef } from "react";
import styled from "styled-components";

const Input = styled.input`
  height: 40px;
`;

interface TextInputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onValueChange?: (newValue: string) => void;
  onEnterPressed?: (currentValue: string) => void;
}

const TextInputDefaultProps: Partial<TextInputProps> = {
  type: "text",
};

function TextInput(props: TextInputProps) {
  const ref = useRef<HTMLInputElement>(null);

  function onChange(e: React.FormEvent<HTMLInputElement>) {
    if (props.onValueChange) {
      props.onValueChange(e.currentTarget.value);
    }
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && props.onEnterPressed) {
      if (ref.current) {
        props.onEnterPressed(ref.current.value);
      }
    }
  }

  return (
    <Input
      ref={ref}
      className={props.className}
      type={props.type || TextInputDefaultProps.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default TextInput;
