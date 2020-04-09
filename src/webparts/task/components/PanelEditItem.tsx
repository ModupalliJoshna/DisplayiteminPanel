import * as React from 'react';  
import styles from './Task.module.scss';  
import { IReactGetItemsProps } from './IReactGetItemsProps ';  
import { escape } from '@microsoft/sp-lodash-subset';  
import * as jquery from 'jquery';  
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton, PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react';
import $ from 'jquery';
import { Items, sp } from 'sp-pnp-js';
import "@pnp/sp/webs";
import "@pnp/sp/lists"
import "@pnp/sp/items";
import { useConstCallback } from '@uifabric/react-hooks';
import {PanelBasicExample} from './PanelBasicExample';
import {dismissPanel} from './Paneledit';


var a ;
var b;
var c;

//const { disabled, checked } = props;
export interface IReactGetItemsState{    
  items:[    
        {    
          "Ename": "",    
          "EId": "",    
          "Title":"{item.Title}",    
          "ID":"27"  
          
        }]    
}    
var Itemid = 27;
export  class EditItem extends React.Component<IReactGetItemsProps, IReactGetItemsState> {  
  
  public constructor(props: IReactGetItemsProps, state: IReactGetItemsState){    
    super(props);    
    this.state = {    
      items: [    
        {    
          "Ename": "",    
          "EId": "",    
          "Title":"{item.Title}",    
          "ID":"27",
          
        }    
      ]    
    };    
  }    
    
  public componentDidMount(){    
    var reactHandler = this;    
    jquery.ajax({    
        url: `${this.props.siteurl}/_api/web/lists/getbytitle('newlist')/items?$filter=ID%20eq%203`,    
        type: "GET",    
        headers:{'Accept': 'application/json; odata=verbose;'},    
        success: function(resultData) {             
          reactHandler.setState({    
            items: resultData.d.results    
          });    
        },    
        error : function(jqXHR, textStatus, errorThrown) {    
        }    
    });    
  }    
    
 

  public render(): React.ReactElement<IReactGetItemsProps> {  
     return (    
  
        <div  >   
          <br></br>  
     
          <br></br>   
          <br></br>  
           
          <div  >     
              
            
              
              {this.state.items.map(function(item,key){    
                  
                return (
                <div  key={key}> 
               
                <p  >{item.Title}</p>
                <br/>
                <br/>
                
                     <b>Title:</b> <TextField id="12" value={item.Title}  onChange={ event=>{changehandler(event)}} underlined  />
                     
                     <b>EId:</b> <TextField id="13" value={item.EId} onChange={ event=>{changehandler1(event)}}  underlined  /><br/>
                     <br/>
                     <b>Ename:</b> <TextField id="14" value={item.Ename}  onChange={ event=>{changehandler2(event)}} underlined  /><br/>
                     
                     <br/>
                     <b>ID:</b> <TextField  readOnly defaultValue={item.ID} underlined  /><br/>
                     <br/>
                     
                     <br/>

                </div>);    
              })}    
                      
          </div>    
          <DefaultButton text="Update" onClick={updateListItem} onDoubleClick={dismissPanel} />
          

     
         

       </div>  
       
       
    );    
  }      
}  


 function changehandler(event){a =event.target.value;  }
 function changehandler1(event){ b =event.target.value; } 
 function changehandler2(event){ c =event.target.value;}

  
function updateListItem (itemProperties) {
  {dismissPanel};
  return sp.web.lists.getByTitle("newlist").items.getById(3).update({
    Ename:c,
    EId:b,
    Title:a,
  }).then(()=>{
    
  }

  );
}





