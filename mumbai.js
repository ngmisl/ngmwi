// Mumbai
const chainId = "0x13881";
const rpcURL = "https://rpc-mumbai.maticvigil.com";
const networkName = "Mumbai Testnet";
const currencyName = "MATIC";
const currencySymbol = "MATIC";
const explorerURL = "https://mumbai.polygonscan.com/";

const addNetwork = async () => {
  await window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: chainId,
        chainName: networkName,
        rpcUrls: [rpcURL],
        blockExplorerUrls: [explorerURL],
        nativeCurrency: {
          name: currencyName,
          symbol: currencySymbol, // 2-6 characters long
          decimals: 18,
        },
      },
    ],
  });
  // refresh
  window.location.reload();
};

function claimFaucet() {
  window.open("https://mumbaifaucet.com/");
}
