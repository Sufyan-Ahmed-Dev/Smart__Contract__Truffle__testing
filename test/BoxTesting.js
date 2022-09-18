const BoxContract = artifacts.require("Box");

contract("Box Contract" , () => {
    it(" it should retuen a store func", async () => {
        const boxContract = await BoxContract.deployed();
        const result = await boxContract.store(70); // Working Good
        // console.log(typeof result.toNumber());
        // const check = await result.store;
        // console.log(check)

        // console.log(result);
        // assert(result === typeof(number));

    });

    it(" it should return retrieve func ", async () => {
        const boxContract = await BoxContract.deployed();
        const result = await boxContract.retrieve();
        

        console.log(result.toNumber());
        

    });

})