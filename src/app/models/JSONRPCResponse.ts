import {JSONRPCError} from './JSONRPCError';

export class JSONRPCResponse<T> {
  code: number;
  error: JSONRPCError;
  object: JSONRPCResponseObject<T> | JSONRPCResponseArray<T>;
  successful: boolean;
}

export class JSONRPCResponseObject<T> {
  object: T;
}

export class JSONRPCResponseArray<T> {
  object: T[];
  from?: string;
  to?: string;
  last_id?: number;
  page_number?: number;
  page_size?: number;
  count?: number;
}
