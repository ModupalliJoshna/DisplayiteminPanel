declare interface ITaskWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'TaskWebPartStrings' {
  const strings: ITaskWebPartStrings;
  export = strings;
}
