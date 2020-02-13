// ===========================================================
// ******************  OPERAÇÕES BANCÁRIAS  ******************
// ===========================================================

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction){
    user.balance.push(transaction);
    if(transaction.type === 'credit'){
        user.balance = user.balance + user.balance.value
    } else {
        user.balance = user.balance - user.balance.value
    }
};

function getHigherTransactionByType(transactions){
    let typeOfHigher;
    let higher = 0;
    for(let transaction of user.transactions){
        if(transaction > transaction[i]){
            
        }
    }
}