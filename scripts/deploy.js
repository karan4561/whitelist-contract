const main = async () => {
    //...
  
    // Deploy the contract and set the maximum number of whitelisted addresses to 5
    const portal = await whitelist.deploy(5);
  
    // Wait for it to finish deploying
    await portal.deployed();
  
    console.log("Whitelist address: ", portal.address);
  };
  
  //...
  