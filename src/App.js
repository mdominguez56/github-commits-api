import UserProfileCard from "./Components/Card/UserProfileCard";
import CommitsTable from "./Components/CommitsTable/CommitsTable";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <CommitsTable />
      <UserProfileCard />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

export default App;
