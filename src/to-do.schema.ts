import { TypeInfo, Module, SchemaRepository } from '@spcy/lib.core.reflection';

export const ToDoSchema: TypeInfo = {
  $id: '#/$defs/ToDo',
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
export const RootStorageSchema: TypeInfo = {
  $id: '#/$defs/RootStorage',
  type: 'object',
  required: ['todos'],
  properties: {
    todos: {
      type: 'array',
      items: {
        $ref: '#/$defs/ToDo'
      }
    }
  }
};

SchemaRepository.register(RootStorageSchema);

export const MetaSchema: Module = {
  $defs: {
    ToDo: ToDoSchema,
    RootStorage: RootStorageSchema
  }
};
