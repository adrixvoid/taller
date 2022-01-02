import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import CustomLoadingOverlay from '../CustomLoadingOverlay';
import useTodos from '../../hooks/useTodos';

const columns = [
  { field: 'id', headerName: 'ID', minWidth: 90 },
  { field: 'title', headerName: 'Title', minWidth: 130 },
  { field: 'completed', headerName: 'Completed', minWidth: 150 },
];

const TODOPaper = () => {
  const { todos, loading, error } = useTodos();

  return (
    <DataGrid
      rows={!loading ? todos : []}
      columns={columns}
      onSelectionChange={(selection) => {}}
      checkboxSelection
      loading={loading}
      error={error}
      pageSize={10}
      rowsPerPageOptions={[10]}
      components={{
        LoadingOverlay: CustomLoadingOverlay,
      }}
    />
  );
};

export default TODOPaper;
