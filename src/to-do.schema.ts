import * as r from '@spcy/lib.core.reflection';
import * as m from './to-do.model';

const PackageName = 'lib.model.to-do';

const ToDoType: r.TypeInfo = {
  $id: 'ToDo',
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
const ToDo: r.Prototype<m.ToDo> = {
  id: ToDoType.$id,
  package: PackageName,
  typeInfo: ToDoType
};
const RootStorageType: r.TypeInfo = {
  $id: 'RootStorage',
  type: 'object',
  required: ['todos'],
  properties: {
    todos: {
      type: 'array',
      items: {
        $ref: 'ToDo'
      }
    }
  }
};
const RootStorage: r.Prototype<m.RootStorage> = {
  id: RootStorageType.$id,
  package: PackageName,
  typeInfo: RootStorageType
};

export const ToDoModule: r.Module = {
  $id: PackageName,
  $defs: {
    ToDo: ToDoType,
    RootStorage: RootStorageType
  }
};

export const Types = {
  ToDo,
  RootStorage
};
