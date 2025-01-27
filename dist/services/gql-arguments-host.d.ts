import { ArgumentsHost } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
export interface GraphQLArgumentsHost extends ArgumentsHost {
  getRoot<T = any>(): T;
  getInfo<T = any>(): T;
  getArgs<T = any>(): T;
  getContext<T = any>(): T;
}
export declare class GqlArgumentsHost extends ExecutionContextHost {
  static create(host: ArgumentsHost): GraphQLArgumentsHost;
}
