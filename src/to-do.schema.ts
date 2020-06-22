import { TypeInfo, Module, SchemaRepository } from '@spcy/lib.core.reflection';

export const ToDoSchema: TypeInfo = {
  $id: '@spcy/lib.model.to-do/ToDo',
  type: 'object',
  required: ['isDone'],
  properties: {
    isDone: {
      type: 'boolean'
    },
    description: {
      type: 'string'
    }
  }
};
SchemaRepository.register(ToDoSchema);

export const MetaSchema: Module = {
  $defs: {
    ToDo: ToDoSchema
  }
};
