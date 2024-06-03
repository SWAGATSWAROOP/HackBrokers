// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./ReentrancyGuard.sol";

contract Account is ReentrancyGuard{
    uint256 private usersid;
    address payable private owner;
    string private ownermail = "hackbrokers@gmail.com";
    struct user {
        uint256 userid;
        string name;
        string email;
        uint256 balance;
        string[] coins;
    }

    mapping (string => user) private users;
    mapping (string => bool) private userexists;
    mapping (string => mapping (string => uint)) private  usercoins;

    function createUser(string memory name,string  memory email) public nonReentrant{
        require(userexists[email] == false,"User Already Exists");
        usersid++;
        string [] memory coins;
        users[email] = user(
            usersid,
            name,
            email,
            0,
            coins
        );
        userexists[email] = true;
        emit userCreated(email);
    }

    event userCreated(
        string indexed email
    );

    constructor(){
        owner = payable (msg.sender);
        createUser("owner",ownermail);
        usersid = 0;
    }

    event bought(
        string indexed coin,
        string indexed email
    );

    event sold(
        string indexed coin,
        string indexed email
    );

    function buy(string memory fromEmail,uint256 amount,string memory coin,uint256 noofcoin) public payable  nonReentrant{
        require(userexists[fromEmail] == true,"User don't exists");
        require(users[fromEmail].balance >= amount,"Don't have enough balance");
        users[fromEmail].balance -= amount;
        users[ownermail].balance += amount;
        uint256 size = users[fromEmail].coins.length;
        bool found = false; 
        for(uint i = 0;i < size;i++){
            if(keccak256(abi.encodePacked(users[fromEmail].coins[i])) == keccak256(abi.encodePacked(coin))){
                found = true;
                usercoins[fromEmail][coin] += noofcoin;
                break;
            }
        }
        if(!found){
            string [] memory coins = new string [](size+1);
            for(uint i = 0;i < size;i++){
                coins[i] = users[fromEmail].coins[i]; 
            }
            coins[size] = coin;
            usercoins[fromEmail][coin] += noofcoin;
            users[fromEmail].coins = coins;
        }

        emit bought(coin, fromEmail);
    }

    function sell(string memory fromEmail,string memory coin,uint256 noofcoin,uint256 amount)public  payable nonReentrant{
        require(userexists[fromEmail] == true,"User don't exists");
        require(usercoins[fromEmail][coin] >= noofcoin,"User should have that coin");
        users[ownermail].balance -= amount;
        users[fromEmail].balance += amount;
        usercoins[fromEmail][coin] -= noofcoin;
        if(usercoins[fromEmail][coin] == 0){
            uint256 size = users[fromEmail].coins.length;
            string [] memory coins = new string [](size-1);
            for(uint i = 0;i < size;i++){
                if(keccak256(abi.encodePacked(users[fromEmail].coins[i])) == keccak256(abi.encodePacked(coin)))continue;
                coins[i] = users[fromEmail].coins[i];
            }
            users[fromEmail].coins = coins;
        }
        emit sold(coin, fromEmail);
    }

    function getCoins(string memory email)public view returns(string [] memory,uint256 [] memory){
        require(userexists[email] == true,"User don't exists");
        uint256 size = users[email].coins.length; 
        string [] memory coinname = new string [](size);
        uint [] memory nocoins = new uint [](size);
        for(uint i = 0;i < size;i++){
            coinname[i] = users[email].coins[i];
            nocoins[i] = usercoins[email][coinname[i]];
        }
        return (coinname,nocoins);
    }

    function getBalance(string memory email)public view returns(uint256){
        require(userexists[email] == true,"User don't exists");
        return users[email].balance;
    }   

    function deposit(string memory email,uint256 balance)public {
        require(userexists[email] == true,"User don't exists");
        users[email].balance += balance;
    } 

    function withdraw(string memory email,uint256 balance)public {
        require(userexists[email] == true,"User don't exists");
        require(users[email].balance >= balance);
        users[email].balance -= balance;
    } 
}