export const idlFactory = ({ IDL }) => {
  const Transaction = IDL.Record({ 'to' : IDL.Text, 'amount' : IDL.Nat64 });
  const TransactionAnalysis = IDL.Record({
    'is_safe' : IDL.Bool,
    'reason' : IDL.Text,
  });
  return IDL.Service({
    'analyze_transaction' : IDL.Func(
        [Transaction],
        [TransactionAnalysis],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
