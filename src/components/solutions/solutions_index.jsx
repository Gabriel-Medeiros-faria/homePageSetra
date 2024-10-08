// SolutionsIndex.js
import styled from "styled-components";
import useScreenSize from "../../hooks/useScreenSize";
import SolutionsDesktop from "./solutions_desktop";
import SolutionsMobile from "./solutions_mobile";

export default function SolutionsIndex() {
  const translateX = 100; // or whatever value you want to pass

  return (
    <Container>
      {useScreenSize().isDesktop ? (
        <SolutionsDesktop translateX={translateX} />
      ) : (
        <SolutionsMobile/>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`;