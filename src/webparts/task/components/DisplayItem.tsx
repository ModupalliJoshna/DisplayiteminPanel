import * as React from 'react';  
import styles from './Task.module.scss';  
import { IReactGetItemsProps } from './IReactGetItemsProps ';  
import { escape } from '@microsoft/sp-lodash-subset';  
import * as jquery from 'jquery';  
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { ITextFieldStyleProps, ITextFieldStyles } from 'office-ui-fabric-react/lib/TextField';
import Task from './Task';
import {itemid} from './Task';

  console.log(itemid);
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
export  class Display extends React.Component<IReactGetItemsProps, IReactGetItemsState> {  
  
  public constructor(props: IReactGetItemsProps, state: IReactGetItemsState){    
    super(props);    
    this.state = {    
      items: [    
        {    
          "Ename": "",    
          "EId": "",    
          "Title":"{item.Title}",    
          "ID":"27"  
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
                    {item.Title}
                    <br/>
                    <br/>
                    <br/>
                 
                     <b>Title:</b> 
                     
                     <p>{item.Title}</p>
                     <br/>
                     <b>EId:</b> 
                     <p>{item.EId}</p>  
                     <br/>
                     <b>Ename:</b> 
                     <p>{item.Ename}</p>
                     <br/>
                    
                     <b>ID:</b> 
                     <p>{item.ID} </p>
                     <br/>
                     <br/>
                     <br/>

                </div>);    
              })}    
                      
          </div>    

       </div>    
    );    
  }      
}  

