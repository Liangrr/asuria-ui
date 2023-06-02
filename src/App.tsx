import React from 'react';
import Button, {ButtonType,ButtonSize} from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <Button autoFocus onClick={(e) => {e.preventDefault(); alert('111')}} className='testaaa'>hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello</Button>
      <Button disabled btnType={ButtonType.Default}>hello</Button>
      <Button disabled btnType={ButtonType.Danger} size={ButtonSize.Large}>hello</Button>
      <Button btnType={ButtonType.Link} href='http://www.baidu.com' target='_blank'>hello</Button>

      <hr />

      <Button disabled btnType={ButtonType.Link} href='http://www.baidu.com'>hello</Button>
      <Button disabled btnType={ButtonType.Link} href='http://www.baidu.com'>hello</Button>
    </div>
  );
}

export default App;
