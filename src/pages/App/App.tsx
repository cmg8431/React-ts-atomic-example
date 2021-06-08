import React from 'react';
import styled from 'styled-components'

const Text = styled.div`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid blakc; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  letter-spacing: .15em; /* Adjust as needed */
  font-size:30px;

  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
  
    @keyframes typing {
  from { width: 0 }
  to { width: 500px }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: black; }
}
`

const App = () => {
  return (
    <Text className="Text">
     가나다라마바사아자차카타파하
    </Text>
  );
}

export default App;
