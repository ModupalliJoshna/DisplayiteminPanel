import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel ,PanelType} from 'office-ui-fabric-react/lib/Panel';
import { useConstCallback } from '@uifabric/react-hooks';
import pnp from 'sp-pnp-js';
import * as $ from "jquery";
import {Display} from './DisplayItem';

export const PanelBasicExample: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openPanel = useConstCallback(() => setIsOpen(true));
   const dismissPanel = useConstCallback(() => setIsOpen(false));
  

  return (
    <div>
      <DefaultButton text="Display Item" onClick={openPanel} />
      <Panel
        
        isOpen={isOpen}
        onDismiss={dismissPanel}
        type={PanelType.medium}
        // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
        closeButtonAriaLabel="Close"
      >
        
   
    <Display  description="hnkk" siteurl="https://sachagroup.sharepoint.com/sites/CInterns" />

    <DefaultButton text="Close" onClick={dismissPanel}  />
      </Panel>
      
    </div>
  );
};
function _alertClicked(): void {
    
  }