import React from 'react';
import styled from 'styled-components';

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    height: 100%;
    /* Add your background pattern here */
    background-image: linear-gradient(
        90deg,
        rgba(200, 0, 0, 0.5) 50%,
        transparent 50%
      ),
      linear-gradient(rgba(200, 0, 0, 0.5) 50%, transparent 50%);
    background-size: 50px 50px;
  }`;

export default Pattern;
