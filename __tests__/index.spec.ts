import '@spcy/lib.dev.tasty';
import { createInstance, getData } from '@spcy/lib.core.mst-model';
import { SchemaRepository } from '@spcy/lib.core.reflection';
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
