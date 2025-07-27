// ✅ Define allowlist (you can expand this)
const allowlist = [
  "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  "0x000000000000000000000000000000000000dead",
  "0xAbC123456789abcdefABC123456789abcdefABC1"
];

// ✅ Check if address is a valid Ethereum format
function isValidEthereumAddress(address) {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

// ✅ Main function to check wallet
function checkWallet() {
  const walletInput = document.getElementById("wallet");
  const resultDiv = document.getElementById("result");
  const wallet = walletInput.value.trim();

  resultDiv.className = "result"; // reset class

  if (!isValidEthereumAddress(wallet)) {
    resultDiv.innerHTML = "❌ Invalid Ethereum address.";
    resultDiv.classList.add("invalid");
    return;
  }

  const isEligible = allowlist.some(
    addr => addr.toLowerCase() === wallet.toLowerCase()
  );

  if (isEligible) {
    resultDiv.innerHTML = "✅ Whitelisted";
    resultDiv.classList.add("eligible");
  } else {
    resultDiv.innerHTML = "🚫 You are not eligible";
    resultDiv.classList.add("not-eligible");
  }
}
