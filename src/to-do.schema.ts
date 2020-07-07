import * as r from '@spcy/lib.core.reflection';
import * as m from './to-do.model';

const ToDoType: r.TypeInfo = {
  $id: 'ToDo',
  $package: 'lib.model.to-do',
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
  $ref: ToDoType.$id!,
  $refPackage: ToDoType.$package!,
  typeInfo: ToDoType
};

const RootStorageType: r.TypeInfo = {
  $id: 'RootStorage',
  $package: 'lib.model.to-do',
  type: 'object',
  required: ['todos'],
  properties: {
    todos: {
      type: 'array',
      items: {
        $ref: 'ToDo',
        $refPackage: 'lib.model.to-do'
      }
    }
  }
};

const RootStorage: r.Prototype<m.RootStorage> = {
  $ref: RootStorageType.$id!,
  $refPackage: RootStorageType.$package!,
  typeInfo: RootStorageType
};

export const ToDoModule: r.Module = {
  $id: 'lib.model.to-do',
  $defs: {
    ToDo: ToDoType,
    RootStorage: RootStorageType
  }
};

export const Types = {
  ToDo,
  RootStorage
};
