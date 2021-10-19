import React from "react";
import "devextreme/dist/css/dx.light.css";

import { TreeList, Column, Scrolling, Paging, Pager, Popup, Form, FilterRow, HeaderFilter, SearchPanel, Sorting, Editing, Button } from "devextreme-react/tree-list";
import { Item } from 'devextreme-react/form';


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

 


    console.log(dataSource);



    return (
        <div>
            <TreeList

                width="100%"
                height="auto"
                id="treeList"
                rootValue={-1}
                dataSource={dataSource}
                keyExpr="id"
                parentIdExpr="HeadId"
                autoExpandAll={false}
                showBorders={true}
                showRowLines={true}
                columnAutoWidth={true}
                
            >

                <Editing
                    allowUpdating={true}
                    allowDeleting={true}
                    allowAdding={true}
                    mode="popup">
                    <Popup title="Add Product" showTitle={true} width={700} height={300} />
                    <Form>
                        <Item itemType="group" colCount={2} colSpan={2}>
                            <Item dataField="id" />
                            <Item dataField="ProductName" />
                            <Item dataField="status">
                                <Switch
                                    defaultValue={true}
                                />
                            </Item>
                         

                        </Item>
                    </Form>
                </Editing>

                <SearchPanel visible={true} />
                <HeaderFilter visible={true} allowSearch={true} />
                <FilterRow visible={true} />
                <Sorting
                    mode="multiple" />
                <Scrolling
                    mode="standard" />
                <Paging
                    enabled={true}
                    defaultPageSize={7} />
                <Pager
                    showPageSizeSelector={true}
                    allowedPageSizes={allowedPageSizes}
                    showInfo={true} />


                <Column  dataField="id" visible={false} defaultSortOrder="asc"></Column>
                <Column dataField="ProductName" defaultSortOrder="asc" />
                <Column dataField="Status" cellRender={switchRender} defaultSortOrder="asc">></Column>
                <Column defaultSortOrder="asc" type="buttons">
                    <Button icon="edit" name="edit" />
                    <Button icon="trash" name="delete" />
                    <Button icon="plus" name="add" />
                </Column>


            </TreeList>
        </div>
    );
};

export default TreeListComponent;
