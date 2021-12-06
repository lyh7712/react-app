import styled from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const ChildOne = styled.div`
  background-color: teal;
  height: 100px;
  width: 100px;
`;

const ChildTwo = styled.div`
  background-color: tomato;
  height: 100px;
  width: 100px;
`;

const Text = styled.span`
  color: wheat;
`;

function App() {
  return (
    <Father>
      <ChildOne>
        <Text>Hello</Text>
      </ChildOne>
      <ChildTwo />
    </Father>
  );
}

export default App;
