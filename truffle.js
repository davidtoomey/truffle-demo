module.exports = {
	networks: {
  	ropsten: {
    	provider: function() {
      	return new HDWalletProvider(mnemonic, "http://localhost:8545/");
    	},
    		network_id: '3',

        from: "0xec0cd095fa386cd466a9a9facb4111a93ac7dc3a"
  		},
  	test: {
    	provider: function() {
      	return new HDWalletProvider(mnemonic, "http://localhost:8545/");
    	},
    		network_id: '*',
 	 	},
 	 	development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
	}
};
