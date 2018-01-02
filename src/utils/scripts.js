

/**
 * Gets the accounts under the node
 * 
 */

function    doGetAccounts() {
    // This is the synch call for getting the accounts
    // var accounts = web3.eth.accounts
    
    // Asynchronous call to get the accounts
    // result = [Array of accounts]
    // MetaMask returns 1 account in the array - that is the currently selected account
    web3.eth.getAccounts(function (error, result) {
        if (error) {
            setData('accounts_count', error, true);
        } else {
            accounts = result;
            setData('accounts_count', result.length, false);
            // You need to have at least 1 account to proceed
            if(result.length == 0) {
                if(nodeType == 'metamask'){
                    alert('Unlock MetaMask *and* click \'Get Accounts\'');
                }
                return;
            }

            // Remove the list items that may already be there
            removeAllChildItems('accounts_list');
            // Add the accounts as list items
            for (var i = 0; i < result.length; i++) {
                addAccountsToList('accounts_list',i,result[i])
            }
            
            var coinbase = web3.eth.coinbase;
            // trim it so as to fit in the window/UI
            if(coinbase) coinbase = coinbase.substring(0,25)+'...'
            setData('coinbase', coinbase, false);
            // set the default accounts
            var defaultAccount = web3.eth.defaultAccount;
            if(!defaultAccount){
                web3.eth.defaultAccount =  result[0];
                defaultAccount = '[Undef]' + result[0];
            }

            defaultAccount = defaultAccount.substring(0,25)+'...';
            setData('defaultAccount', defaultAccount, false);
        }
        // Get the balances of all accounts doGetBalances
        doGetBalances(accounts)

        // This populates the SELECT boxes with the accounts
        addAccountsToSelects(accounts);
    });
}

export default scripts;