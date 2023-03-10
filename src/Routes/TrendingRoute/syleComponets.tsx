import styled from "styled-components";
import { TrendingRouteStyle } from ".";

export const TrendingPage = styled.div`
  background-color: ${(props: TrendingRouteStyle) =>
    props.darkMode ? "black" : "#f9f9f9"};
  min-height: 100%;
`;
export const TrendingPageContent = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  align-items: flex-start;
`;
export const TrendingPageRightSection = styled.div`
  width: 100%;
  height: 92vh;
  overflow-y: auto;
  background-color: ${(props: TrendingRouteStyle) =>
    props.darkMode ? "black" : "#f9f9f9"};
`;
