import React from "react";
import "devextreme/dist/css/dx.light.css";

import { TreeList, Column, Scrolling, Paging, Pager, Popup, Form, FilterRow, HeaderFilter, SearchPanel, Sorting } from "devextreme-react/tree-list";


import Switch from "devextreme-react/switch";

import LocalStore from 'devextreme/data/local_store';
import DataSource from 'devextreme/data/data_source';


const TreeListComponent = () => {

    const allowedPageSizes = [2, 5, 10, 20];


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


                <SearchPanel visible={true} />
                <HeaderFilter visible={true} allowSearch={true} />
                <FilterRow visible={true} applyFilter="onClick" />
                <Sorting
                    mode="multiple" />
                <Scrolling
                    mode="standard" />
                <Paging
                    enabled={true}
                    defaultPageSize={2} />
                <Pager
                    showPageSizeSelector={true}
                    allowedPageSizes={allowedPageSizes}
                    showInfo={true} />


                <Column dataField="id" visible={false}></Column>
                <Column dataField="ProductName" />
                <Column dataField="Status" cellRender={switchRender}></Column>


            </TreeList>
        </div>
    );
};

export default TreeListComponent;
