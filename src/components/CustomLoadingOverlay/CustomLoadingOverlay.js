import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

function CustomLoadingOverlay() {
  return (
    <div style={{ position: 'absolute', top: 0, width: '100%' }}>
      <LinearProgress />
    </div>
  );
}

export default CustomLoadingOverlay;
