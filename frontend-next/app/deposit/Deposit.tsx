"use client"
import { useState } from 'react';
import { useToast } from '../Components/ui/use-toast';
export default function Deposit() {
  const [accountNumber, setAccountNumber] = useState('');
  const [username, setUsername] = useState('');
  const [amount, setAmount] = useState('');
  const { toast } = useToast();

  // async function onSubmit() {
  //   const username = user.find((u) => u.username === username);

  //   if (!username) {
  //     setMessage('User not found or account number does not match.');
  //     return;
  //   }
  //   user.balance += parseFloat(amount);


  //   await new Promise((resolve) => setTimeout(resolve, 500)); 

  //   setMessage(`Successfully deposited ${amount} to ${username}'s account.`);

  //   try {
    
  //     if (signindata?.error) {
  //       console.log(signindata.error);
  //       toast({
  //         title: "Oops! Something Went Wrong",
  //         description: "Error Signing In",
  //       });
  //       router.push("/");
  //     } else {
  //       toast({
  //         title: "Hello From HackBrokers",
  //         description: "Sign In Successful",
  //       });
  //       router.push("/");
  //     }
  //   } catch (err) {
  //     router.push("/AuthError");
  //   }
  // }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Deposit Money</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accountNumber">
              Account Number
            </label>
            <input
              type="text"
              id="accountNumber"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Deposit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
