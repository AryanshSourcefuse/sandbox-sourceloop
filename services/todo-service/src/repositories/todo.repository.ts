import {Getter, inject} from '@loopback/core';
import {DefaultUserModifyCrudRepository, IAuthUserWithPermissions} from "@sourceloop/core"
import {PgDataSource} from '../datasources';
import {Todo, TodoRelations} from '../models';
import {AuthenticationBindings} from "loopback4-authentication";

export class TodoRepository extends DefaultUserModifyCrudRepository<
  Todo,
  typeof Todo.prototype.id,
  TodoRelations
> {
  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
    @inject.getter(AuthenticationBindings.CURRENT_USER)
    protected readonly getCurrentUser: Getter<
        IAuthUserWithPermissions | undefined
    >
  ) {
    super(Todo, dataSource, getCurrentUser);
  }
}
