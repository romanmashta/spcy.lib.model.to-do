import '@spcy/lib.dev.tasty';
import { createInstance, getData } from '@spcy/lib.core.mst-model';
import { SchemaRepository } from '@spcy/lib.core.reflection';
import { autorun } from 'mobx';
import { Types as ToDoTypes } from '../src';

SchemaRepository.registerTypes(ToDoTypes);

test('It creates to-do doc', () => {
  const todo = createInstance(ToDoTypes.RootStorage, {
    todos: [
      { isDone: false, description: 'Item1' },
      { isDone: false, description: 'Item2' },
      { isDone: false, description: 'Item3' }
    ]
  });
  const snap = getData(todo);
  expect(snap).toMatchTastyShot('todo');
});

test('It reacts on changes with mobx', () => {
  const tasks = createInstance(ToDoTypes.RootStorage, {
    todos: []
  });

  const consoleLog = jest.fn();
  autorun(() => {
    console.log(getData(tasks));
    consoleLog();
  });

  tasks.patch(self => {
    self.todos = [...self.todos, { isDone: false, description: 'Item 1' }];
  });

  tasks.patch(self => {
    self.todos = [...self.todos, { isDone: false, description: 'Item 2' }];
  });

  tasks.todos[0].patch(self => {
    self.isDone = true;
  });

  tasks.todos[1].patch(self => {
    self.isDone = true;
  });

  expect(consoleLog).toHaveBeenCalledTimes(5);
  expect(getData(tasks)).toMatchTastyShot('modified-todo');
});
