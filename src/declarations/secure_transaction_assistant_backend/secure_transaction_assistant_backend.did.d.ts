import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Transaction { 'to' : string, 'amount' : bigint }
export interface TransactionAnalysis { 'is_safe' : boolean, 'reason' : string }
export interface _SERVICE {
  'analyze_transaction' : ActorMethod<[Transaction], TransactionAnalysis>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
