import React from "react";
import styled from "styled-components";
import { Box, TextField } from "@mui/material";

function InputField({ label }) {
  return (
    <Box width="75%" padding="0">
      <StyledTextField label={label} fullWidth size="small"></StyledTextField>
    </Box>
  );
}

export default InputField;

const StyledTextField = styled(TextField)`
  text-align: left;
`;