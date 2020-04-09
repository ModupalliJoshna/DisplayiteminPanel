import * as React from 'react';
import styles from './Task.module.scss';
import { ITaskProps } from './ITaskProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {ButtonDefaultExample} from './ButtonDefaultExample';
import {PanelBasicExample} from './PanelBasicExample';
import{Paneledit} from './Paneledit';



 export  var itemid ;
export default class Task extends React.Component<ITaskProps, {}> {
  public render(): React.ReactElement<ITaskProps> {
    return (
      <div className={ styles.task }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <br/>
                <br/>
                <br/>
               
                
                <br/>
                <PanelBasicExample/>
                <br/>
                <br/>
              <Paneledit/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

