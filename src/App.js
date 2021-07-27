import UserProfileCard from "./Components/Card/UserProfileCard";
import CommitsTable from "./Components/CommitsTable/CommitsTable";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <UserProfileCard />
      <CommitsTable />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
