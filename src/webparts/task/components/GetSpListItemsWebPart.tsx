import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import pnp from 'sp-pnp-js';
import styles from './Task.module.scss';
//import * as strings from 'GetSpListItemsWebPartStrings';
import * as $ from "jquery";




 interface IGetSpListItemsWebPartProps {
  description: string;
}
 interface ISPLists {  
  value: ISPList[];  
}  
 interface ISPList {  
  EId: string;  
  Ename: string; 
  Title: number; 
  ID:number; 
   
}  

export  class GetSpListItemsWebPart extends BaseClientSideWebPart <IGetSpListItemsWebPartProps> {


  

private _getListData(): Promise<ISPList[]> {
  return pnp.sp.web.lists.getByTitle("second").items.select("EId","ID","Title").get().then((response) => {
   
     return response;
   });
     
  }
  private _renderListAsync(): void {


    this._getListData()
      .then((response) => {
        this._renderList(response);
        alert("hii");
      });

  }
 private _renderList(items: ISPList[]): void {
  let htm: string = '<div style="background-color:Black;color:white;text-align: center;font-weight: bold;font-size:18px;">Employee Data</div>';
  let html: string = '<table class="TFtable" border=1 width=100% style="border-collapse: collapse;">';
 // html += `<th>Title</th><th>EId</th><th>Ename</th>`;
  html += `<tr>Title</tr><tr>EId</tr><tr>Ename</tr>`;


  items.forEach((item: ISPList) => {
    html += `
         
         <tr>${item.Title}</tr>
         <tr>${item.EId}</tr>  
         <tr>${item.ID}</tr>  
         
         `;
   });
   html += `</table>`;
   const heading: Element = this.domElement.querySelector('#heading');
   const listContainer: Element = this.domElement.querySelector('#spListContainer');
   heading.innerHTML = htm;
   listContainer.innerHTML = html;
   
  }


public render(): void {  
  this.domElement.innerHTML = `  
   
<div class="${styles.container}">  
 <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">  
   <div class="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">  
     <span class="ms-font-xl ms-fontColor-white" style="font-size:28px">Welcome to SharePoint Framework Development</span>  
       
     <p class="ms-font-l ms-fontColor-white" style="text-align: center">Employee Details</p>  
   </div>  
 </div>  
 <div class="ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}">  
 <div id="heading" /> </div>
 <br>  
<div id="spListContainer" />  
 </div>  
</div>  
</div>`;  
this._renderListAsync();  
} 

  protected get dataVersion(): Version {
  return Version.parse('1.0');
}

  
}
