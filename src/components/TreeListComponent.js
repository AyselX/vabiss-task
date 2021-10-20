import React from "react";
import "devextreme/dist/css/dx.light.css";

import { TreeList, Column, Scrolling, Paging, Pager, Popup, Form, FilterRow, HeaderFilter, SearchPanel, Sorting, Editing, Button, Lookup, RequiredRule } from "devextreme-react/tree-list";
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

    const headDataSource = {
        store: store,
        /* sort: 'ProductName',
        bu filterlə child itemləri filtrləmək mümkündür ki, parentlərin parentləri kimi assign
    olunmasın amma bunun dinamik bir yolunu tapa bilməmişəm hələ */

        filter: ["HeadId", "<>", '90a87cb1-9948-1929-f72e-637c4110aae1']
      };
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

                <Column
                    dataField="HeadId"
                    caption="Head">
                    <Lookup
                        dataSource={headDataSource}
                        valueExpr="id"
                        displayExpr="ProductName" />
                    <RequiredRule />
                </Column>
                <Column dataField="Status" cellRender={switchRender} defaultSortOrder="asc"></Column>
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
