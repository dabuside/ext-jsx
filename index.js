import * as Babel from "@babel/core";

import fn from "@babel/plugin-transform-react-jsx";

import { myCustomPlugin } from "./plugins";

const code = `form.items = 
<>
  <RadioGroup itemId="ext-jsx" vmodel={iam.a.nested.object} name={i18n('nice boat')}>
    <Radio checkedValue="A" defaultChecked />
    <Radio checkedValue="B" />
    <Radio checkedValue="C" />
    
    <RadioGroup>
      <Radio checkedValue="D" disabled />
      <Radio checkedValue="E"><myCustomInnerXtype/></Radio>
    </RadioGroup>
  </RadioGroup>
  {form.myVariable = new Grid({ext_in_jsx: 'awesome'})}
</>
`;

const ele = document.getElementById("result");

const output = Babel.transformSync(code, {
  plugins: [myCustomPlugin],
});

ele.innerText = output.code;
