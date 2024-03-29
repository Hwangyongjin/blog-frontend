import styled from "styled-components";

const ResponsiveBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1024px;
  margin: 0 auth;

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 748px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
