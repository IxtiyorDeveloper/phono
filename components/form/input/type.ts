import React, { CSSProperties } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export type Type = {
  style?: CSSProperties;
  placeholder?: string;
  name: string;
  type?: "password" | "input" | "textarea" | "file";
  htmlType?: string;
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  control: any;
  required?: boolean;
  label?: string;
  disabled?: boolean;
  rows?: number;
  defaultValue?: number | string;
  suffix?: React.ReactNode | string;
  autoComplete?: string;
};
