import styled, { keyframes } from 'styled-components';
import Circle from './Circle';

function App() {
  return (
    <div>
      <Circle borderColor='black' bgColor='teal' />
      <Circle bgColor='tomato' borderColor='red' />
    </div>
  );
}

export default App;
