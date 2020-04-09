import * as React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel ,PanelType} from 'office-ui-fabric-react/lib/Panel';
import { useConstCallback } from '@uifabric/react-hooks';
import pnp from 'sp-pnp-js';
import * as $ from "jquery";
import {Display} from './DisplayItem';
import {EditItem} from './PanelEditItem'

 export var dismissPanel;
export const Paneledit: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openPanel = useConstCallback(() => setIsOpen(true));
   dismissPanel = useConstCallback(() => setIsOpen(false));
  
  

  return (
    <div>
      <DefaultButton text="Edit Item" onClick={openPanel} />
      <Panel
        
        isOpen={isOpen}
        onDismiss={dismissPanel}
        type={PanelType.medium}
        // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
        closeButtonAriaLabel="Close"
      >
       
    
   
    <EditItem  description="hnkk" siteurl="https://sachagroup.sharepoint.com/sites/CInterns" /><br/>
    <DefaultButton text="Cancel" onClick={dismissPanel}  />
      </Panel>
      
    </div>
  );
};
