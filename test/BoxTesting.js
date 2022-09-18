const BoxContract = artifacts.require("Box");

contract("Box Contract" , () => {
    it(" it should  work like set+ get both", async () => {
        const boxContract = await BoxContract.deployed();
        await boxContract.store(1900); // set value
        const result = await boxContract.retrieve(); // get value

        // console.log(result.toNumber());// set/get value on console
        
        assert(result.toNumber() === 1900); // this value check is it equal or not 
        
    });

})