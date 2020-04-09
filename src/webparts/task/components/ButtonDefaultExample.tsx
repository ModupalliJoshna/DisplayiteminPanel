import * as React from 'react';
import { DefaultButton, PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react';
import{EditItem} from './PanelEditItem';



export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}

// Example formatting
const stackTokens: IStackTokens = { childrenGap: 40 };

export const ButtonDefaultExample: React.FunctionComponent<IButtonExampleProps> = props => {
  const { disabled, checked } = props;

  return (
    <Stack horizontal tokens={stackTokens}>
      <DefaultButton text="Save" onClick={_alertClicked} allowDisabledFocus disabled={disabled} checked={checked} />
      <DefaultButton text="Cancel" onClick={_alertClick} allowDisabledFocus disabled={disabled} checked={checked} />

    </Stack>
  );
};

function _alertClicked(): void {

  alert('Clicked');
}

function _alertClick(): void {
  alert('Clicked');
}

