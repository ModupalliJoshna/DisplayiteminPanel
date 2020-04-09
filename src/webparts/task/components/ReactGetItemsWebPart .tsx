import * as React from 'react';  
import styles from './Task.module.scss';  
import { IReactGetItemsProps } from './IReactGetItemsProps ';  
import { escape } from '@microsoft/sp-lodash-subset';  
import * as jquery from 'jquery';  
  
export interface IReactGetItemsState{    
  items:[    
        {    
          "Ename": "",    
          "EId": "",    
          "Title":"",    
          "ID":""  
        }]    
}    
  
export  class ReactGetItems extends React.Component<IReactGetItemsProps, IReactGetItemsState> {  
  
  public constructor(props: IReactGetItemsProps, state: IReactGetItemsState){    
    super(props);    
    this.state = {    
      items: [    
        {    
          "Ename": "",    
          "EId": "",    
          "Title":"",    
          "ID":""  
        }    
      ]    
    };    
  }    
    
  public componentDidMount(){    
    var reactHandler = this;    
    jquery.ajax({    
        url: `${this.props.siteurl}/_api/web/lists/getbytitle('second')/items?$filter=ID%20eq%202`,    
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
  
        <div className={styles.panelStyle} >   
          <br></br>  
     
          <br></br>   
          <br></br>  
           <div className={styles.headerCaptionStyle} > Employee Details</div>  
          <div className={styles.tableStyle} >     
              
            <div className={styles.headerStyle} >    
              <div className={styles.CellStyle}>Employee Name</div>    
              <div className={styles.CellStyle}>Emplo Id </div>    
              <div className={styles.CellStyle}>Title</div>    
                <div className={styles.CellStyle}>ID</div>    
                       
            </div>    
              
              {this.state.items.map(function(item,key){    
                  
                return (<div className={styles.rowStyle} key={key}>    
                    <div className={styles.CellStyle}>{item.Ename}</div>    
                    <div className={styles.CellStyle}>{item.EId}</div>    
                     <div className={styles.CellStyle}>{item.Title}</div>  
                      <div className={styles.CellStyle}>{item.ID}</div>  
            
                  </div>);    
              })}    
                      
          </div>    
        </div>    
    );    
  }      
}  