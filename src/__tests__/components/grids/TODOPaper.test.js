import React from 'react';
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import faker from 'faker';
import useTodos from '../../../hooks/useTodos';
import TODOPaper from '../../../components/Grids/TODOPaper';

/**
 * Hack to solve display rows in test
 */
jest.mock('@material-ui/data-grid', () => {
  const { DataGrid } = jest.requireActual('@material-ui/data-grid');
  return {
    ...jest.requireActual('@material-ui/data-grid'),
    DataGrid: (props) => {
      return <DataGrid {...props} autoHeight />;
    },
  };
});

/**
 * useTodos hook mockup
 */
jest.mock('../../../hooks/useTodos');

const fakeData = (num = 10) => {
  const rowData = [];
  for (let i = 0; i < num; i += 1) {
    const obj = {
      id: i + 1,
      title: faker.random.words(3),
      completed: faker.datatype.boolean(),
    };
    rowData.push(obj);
  }
  return rowData;
};

const setup = (props) => {
  cleanup();
  return render(<TODOPaper {...props} />);
};

describe('Table component: pagination', () => {
  let wrapper;

  it('renders without rows', async () => {
    useTodos.mockImplementation(() => ({
      todos: [],
      loading: false,
      error: null,
    }));

    wrapper = setup();
    expect(wrapper.container).toBeDefined();
    await waitFor(() => screen.queryByText('No rows'));
    expect(screen.queryByText('0-0 of 0')).toBeVisible();
  });

  it('renders with rows', async () => {
    const data = fakeData(10);

    useTodos.mockImplementation(() => ({
      todos: data,
      loading: false,
      error: null,
    }));

    wrapper = setup();
    expect(wrapper.container).toBeDefined();
    expect(screen.getByText('ID')).toBeVisible();
    await waitFor(() => screen.queryByText('1-10 of 10'));
    expect(screen.getByText('1-10 of 10')).toBeVisible();
    await waitFor(() => screen.queryByText(data[0].title));
    expect(screen.getByText(data[0].title)).toBeVisible();
  });
});
