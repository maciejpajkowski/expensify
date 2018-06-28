import moment from 'moment'
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'Condoms',
      note: 'Very important!',
      amount: 1500,
      createdAt: 2000
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[3]).toEqual({
    id: '4',
    description: 'Condoms',
    note: 'Very important!',
    amount: 1500,
    createdAt: 2000
  });
});

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '2',
    updates: {
      description: 'Beer',
      note: 'Why not?',
      amount: 1100
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1]).toEqual({
    id: '2',
    description: 'Beer',
    note: 'Why not?',
    amount: 1100,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  });
});

test('should not edit expense if id is not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '142',
    updates: {
      description: 'Mafia',
      note: 'really important, better pay it quickly'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});