const {expect,use} = require("chai");
const {ethers} = require("hardhat");

describe("Whitelist",async () =>{
    let whitelist;
    let whitelistContract;

    before(async()=> {
        whitelist = await ethers.getContractFactory("Whitelist");
        whitelistContract = await whitelist.deploy(5); 
    });

    it("should deploy", async() =>{
        expect(whitelistContract.address).to.be.a("string");
        expect(whitelistContract.address).to.not.be.null;
    });

    it("should allow address to be added to whitelist",async()=>{
        const whitelistAddress = "0x0000000000000000000000000000000000000000";
        await whitelistContract.addUser(whitelistAddress);
        const isWhitelisted = await whitelistContract.verifyUser(whitelistAddress);
        expect(isWhitelisted).to.be.true;
    });

    it("should not allow address to be added to whitelist",async()=>{
        const whitelistAddress = "0x0000000000000000000000000000000000000009";
        await whitelistContract.addUser(whitelistAddress);
        const isWhitelisted = await whitelistContract.verifyUser(whitelistAddress);
        expect(isWhitelisted).to.be.true;
    });

    it("should allow address to be removed from whitelist",async()=>{
        const whitelistAddress = "0x0000000000000000000000000000000000000009";
        await whitelistContract.removeUser(whitelistAddress);
        const isWhitelisted = await whitelistContract.verifyUser(whitelistAddress);
        expect(isWhitelisted).to.be.false;
    });

    it("get total number of WL spots",async()=>{
        //const whitelistAddress = "0x0000000000000000000000000000000000000000";
        const count = await whitelistContract.CountOfWLAddress();
       // const isWhitelisted = await whitelistContract.CountOfWLAddress();
        expect(count).to.equal(1);
    });
    
    it("get max number of WL spots",async()=>{
        //const whitelistAddress = "0x0000000000000000000000000000000000000000";
        const count = await whitelistContract.maxNoOfWLAddress();
       // const isWhitelisted = await whitelistContract.CountOfWLAddress();
        expect(count).to.equal(5);
    });

})