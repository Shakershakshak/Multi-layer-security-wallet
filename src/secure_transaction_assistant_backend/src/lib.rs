use candid::{candid_method,CandidType};
use serde::{Deserialize, Serialize}; 
use ic_cdk::update;

#[derive(CandidType, Debug, Serialize, Deserialize)]
pub struct Transaction {
    to: String,
    amount: u64,
}

#[derive(CandidType, Debug, Serialize, Deserialize)]
pub struct TransactionAnalysis {
    is_safe: bool,
    reason: String,
}


#[update]
#[candid_method(update)]
fn analyze_transaction(tx: Transaction) -> TransactionAnalysis {
    if tx.amount > 100_000 {
        TransactionAnalysis {
            is_safe: false,
            reason: "Amount exceeds safe limit.".to_string(),
        }
    } else if tx.to.contains("scam") {
        TransactionAnalysis {
            is_safe: false,
            reason: "Receiver address appears suspicious.".to_string(),
        }
    } else {
        TransactionAnalysis {
            is_safe: true,
            reason: "Transaction passed all safety checks.".to_string(),
        }
    }
}
