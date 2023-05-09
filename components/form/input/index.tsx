import { FC } from "react";
import { Controller } from "react-hook-form";
import {
  AsInput,
  AsPassword,
  AsTextarea,
  FileLabel,
  Label,
  Wrapper,
} from "./style";
import ErrorLabel from "../error-label";
import { Type } from "./type";
import { InputProps } from "antd";

const Input: FC<Type & InputProps> = ({
  placeholder = "",
  name,
  type = "input",
  htmlType = "text",
  error = "",
  control,
  required = false,
  label = "",
  disabled = false,
  style,
  defaultValue,
  rows,
  suffix,
  prefix,
  autoComplete,
  onFocus,
  ...args
}) => {
  return (
    <Wrapper required={label ? false : required} error={!!error}>
      {label &&
        (!(htmlType === "file") ? (
          <Label required={required} htmlFor={name}>
            {label}
          </Label>
        ) : (
          <FileLabel required={required} htmlFor={name}>
            Upload file
          </FileLabel>
        ))}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field, formState: { errors } }) => {
          return type === "input" ? (
            <AsInput
              prefix={prefix}
              disabled={disabled}
              id={name}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              suffix={suffix}
              type={htmlType}
              placeholder={placeholder}
              style={{ ...style, minHeight: "36px" }}
              hidden={htmlType === "file"}
              autoComplete={autoComplete}
              onFocus={onFocus}
              {...args}
            />
          ) : type === "textarea" ? (
            <AsTextarea
              disabled={disabled}
              id={name}
              onChange={field.onChange}
              value={field.value}
              placeholder={placeholder}
              {...args}
              hidden={htmlType === "file"}
              rows={rows}
            />
          ) : (
            <AsPassword
              value={field.value}
              disabled={disabled}
              onChange={field.onChange}
              placeholder={placeholder}
              {...args}
              autoComplete={autoComplete}
              onFocus={onFocus}
            />
          );
        }}
      />
      <ErrorLabel error={error} />
    </Wrapper>
  );
};

export default Input;
