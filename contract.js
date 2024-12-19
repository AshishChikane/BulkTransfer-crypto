// // // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.0;

// contract BulkTransfer {
//     /**
//      * @notice Transfers the same amount to multiple recipients.
//      * @param recipients The array of wallet addresses to send funds to.
//      * @param amount The amount to send to each recipient (in wei).
//      */ 
//     function sendFunds(address payable[] memory recipients, uint256 amount) public payable {
//         uint256 totalAmount = recipients.length * amount;

//         // Ensure the contract has enough Ether to cover all transfers
//         require(msg.value >= totalAmount, "Insufficient Ether sent for transfers");

//         // Loop through recipients and transfer the specified amount to each
//         for (uint256 i = 0; i < recipients.length; i++) {
//             recipients[i].transfer(amount);
//         }
//     }

//     /**
//      * @notice Allows the contract to receive Ether.
//      */
//     receive() external payable {}
// }
