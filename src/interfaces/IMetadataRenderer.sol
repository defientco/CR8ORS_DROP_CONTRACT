// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

/**
 ██████╗██████╗ ███████╗ █████╗  ██████╗ ██████╗ ███████╗
██╔════╝██╔══██╗██╔════╝██╔══██╗██╔═══██╗██╔══██╗██╔════╝
██║     ██████╔╝█████╗  ╚█████╔╝██║   ██║██████╔╝███████╗
██║     ██╔══██╗██╔══╝  ██╔══██╗██║   ██║██╔══██╗╚════██║
╚██████╗██║  ██║███████╗╚█████╔╝╚██████╔╝██║  ██║███████║
 ╚═════╝╚═╝  ╚═╝╚══════╝ ╚════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝                                                     
 */

/// @dev credit: https://github.com/ourzora/zora-drops-contracts
interface IMetadataRenderer {
    function tokenURI(uint256, address) external view returns (string memory);

    function contractURI() external view returns (string memory);
}
