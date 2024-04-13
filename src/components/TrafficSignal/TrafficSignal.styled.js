import styled from "styled-components";

export const TrafficSignal = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.layout === "horizontal" ? "column" : "row"};
  gap: 10px;
  margin: 10px auto;
  padding: 10px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
`;

export const Light = styled.div`
  --size: 50px;
  height: var(--size);
  width: var(--size);
  border-radius: var(--size);
  background-color: #ccc;
`;
