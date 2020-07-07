import '@spcy/lib.dev.tasty';
import { createInstance } from '@spcy/lib.core.mst-model';
import { getSnapshot } from '@spcy/pub.mobx-state-tree';
import { SchemaRepository } from '@spcy/lib.core.reflection';
import { Types as ToDoTypes } from '../src';

SchemaRepository.registerTypes(ToDoTypes);

test('It creates to-do doc', () => {
  const todo = createInstance(ToDoTypes.RootStorage, {
    todos: [
      { isDone: false, description: 'Item1' },
      { isDone: false, description: 'Item2' }
    ]
  });
  const snap = getSnapshot(todo);
  expect(snap).toMatchTastyShot('todo');
});
