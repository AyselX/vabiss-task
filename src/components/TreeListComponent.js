import React from "react";
import "devextreme/dist/css/dx.light.css";

import { TreeList, Column} from "devextreme-react/tree-list";


import Switch from "devextreme-react/switch";

import LocalStore from 'devextreme/data/local_store';
import DataSource from 'devextreme/data/data_source';


const TreeListComponent = () => {
   

    

    const store = new LocalStore({
        key: 'id',
        name: 'myLocalData',
    
    });

   
    const dataSource = new DataSource({
        store,
       
    });
    const switchRender = () => {
        console.log('dataSource', dataSource.filter());
        return <Switch defaultValue={true} />;
    };



    console.log(dataSource._store);

    return (
        <div>
            <TreeList
                
                width="90%"
                height="80vh"
                id="treeList"
                rootValue={-1}
                dataSource={dataSource}
                keyExpr="id"
                parentIdExpr="HeadId"
                autoExpandAll={false}
                showBorders={true}
                columnAutoWidth={true}
            >




                <Column dataField="id" visible={false}></Column>
                <Column dataField="ProductName" />
                <Column dataField="Status" cellRender={switchRender}></Column>
               
               
            </TreeList>
        </div>
    );
};

export default TreeListComponent;
