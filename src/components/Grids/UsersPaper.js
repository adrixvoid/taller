import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import CustomLoadingOverlay from '../CustomLoadingOverlay';
import useUsers from '../../hooks/useUsers';

const columns = [
  { field: 'id', headerName: 'ID', minWidth: 90 },
  { field: 'username', headerName: 'Username', minWidth: 145 },
  { field: 'website', headerName: 'Website', minWidth: 130 },
  {
    field: 'catchPhrase',
    headerName: 'catchphrase',
    minWidth: 155,
    valueGetter: (params) => params.row.company.catchPhrase,
  },
];

const UsersPaper = () => {
  const { users, loading, error } = useUsers();

  return (
    <DataGrid
      rows={!loading ? users : []}
      columns={columns}
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

export default UsersPaper;
