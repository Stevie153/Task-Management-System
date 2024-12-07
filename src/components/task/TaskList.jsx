import React from 'react';
import { DataGrid, Pager, Paging } from 'devextreme-react/data-grid';
import 'devextreme/dist/css/dx.light.css';

const TaskList = ({ tasks, onEdit, onDelete, onUpdateStatus }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6">Task List</h2>
      <div className="h-[80vh] ">
        <DataGrid
          dataSource={tasks}
          keyExpr="id"
          showBorders={true}
          columnAutoWidth={true}
          allowColumnResizing={true}
          allowColumnReordering={true}
          height="100%"
          width="200%"
          columns={[
            { dataField: 'title', caption: 'Title', minWidth: 200 },
            { dataField: 'status', caption: 'Status', minWidth: 150 },
            { dataField: 'dueDate', caption: 'Due Date', dataType: 'date', minWidth: 200 },
            {
              type: 'buttons',
              minWidth: 100,
              buttons: [
                'edit',
                'delete',
                {
                  hint: 'Delete',
                  icon: 'trash',
                  onClick: (e) => onDelete(e.row.data.id),
                },
                {
                  hint: 'Update Status',
                  icon: 'check',
                  onClick: (e) => onUpdateStatus(e.row.data.id),
                },
              ],
            },
          ]}
          onRowClick={(e) => onEdit(e.data)}
          rowAlternationEnabled={true}
          columnHidingEnabled={true}
        >
          <Paging defaultPageSize={10} />
          <Pager
            showPageSizeSelector={true}
            allowedPageSizes={[10, 20, 30, 40, 50]}
            showInfo={true}
          />
        </DataGrid>
      </div>
    </div>
  );
};

export default TaskList;
