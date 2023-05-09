import styled, { css } from "styled-components";
import { Input } from "antd";

const { TextArea }: { TextArea: any } = Input;
export const AsInput = styled(Input)<{ shadow?: any }>``;
export const AsPassword = styled(Input.Password)``;

export const AsTextarea = styled(TextArea)``;

export const Wrapper = styled.div<{
  required: boolean;
  error: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  ${({ error }) =>
    !!error &&
    css`
      border-color: red !important;
    `}
}
`;

export const Label = styled.label<{ required: boolean }>``;

export const FileLabel = styled.label<{ required: boolean }>``;
