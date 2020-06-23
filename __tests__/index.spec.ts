import { ModelRepository } from '@spcy/lib.core.mst-model';
import { getSnapshot } from '@spcy/pub.mobx-state-tree';
import { RootStorageSchema } from '../src/to-do.schema';
import { RootStorage } from '../src';

test('It creates to-do doc', () => {
  const rootModel = ModelRepository.resolve(RootStorageSchema.$id!);

  const data: RootStorage = {
    todos: [
      { isDone: false, description: 'Item1' },
      { isDone: false, description: 'Item2' }
    ]
  };
  const todo = rootModel.create(data);
  // console.log(getSnapshot(todo));
  expect(todo).toEqual(data);
});
