import { ModelRepository } from '@spcy/lib.core.mst-model';
import { ToDoSchema } from '../src/to-do.schema';
import { ToDo } from '../src';

test('It creates to-do doc', () => {
  const data: ToDo = { isDone: false, description: 'Hello' };
  const rootModel = ModelRepository.resolve(ToDoSchema.$id!);
  const todo = rootModel.create(data);
  expect(todo).toEqual(data);
});
