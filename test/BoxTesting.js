const BoxContract = artifacts.require("Box");

contract("Box Contract" , () => {
    it(" it should return Box Value ", async () => {
        const boxContract = await BoxContract.deployed();
        const result = await boxContract.store(10);
        console.log(result);

    });

})