const chainConfig = {
    '5': {
        chainId: 5,
        symbol: 'goerliETH',
        name: 'Goerli Testnet',
        decimals: 18,
        faucet: 'https://goerlifaucet.com',
        contractAddr: '0x7e20ced5f0c5c0b526bfdc6bc985e2a266d781b2',
        rpc: 'https://rpc.ankr.com/eth_goerli',
        lookHash: 'https://goerli.etherscan.io' + '/tx/',
        lookAddr: 'https://goerli.etherscan.io' + '/address/',
        logo: 'eth.png',
    },
    '97': {
        chainId: 97,
        symbol: 'BNB',
        name: 'Binance Testnet',
        decimals: 18,
        faucet: 'https://testnet.binance.org/faucet-smart',
        contractAddr: '0xe4ede24efe6632f2b2cc638de6c211798091f576',
        rpc: 'https://data-seed-prebsc-1-s3.binance.org:8545/',
        lookHash: 'https://testnet.bscscan.com' + '/tx/',
        lookAddr: 'https://testnet.bscscan.com' + '/address/',
        logo: 'bnb.png'
    },
    '4002': {
        chainId: 4002,
        symbol: 'FTM',
        name: 'Fantom testnet',
        decimals: 18,
        faucet: 'https://faucet.fantom.network',
        contractAddr: '0x94eB1BA202Ae078a559F35596aC8b6d7c32b5B93',
        rpc: 'https://rpc.testnet.fantom.network',
        lookHash: 'https://testnet.ftmscan.com' + '/tx/',
        lookAddr: 'https://testnet.ftmscan.com' + '/address/',
        logo: 'ftm.png'
    },
    '43113': {
        chainId: 43113,
        symbol: 'AVAX',
        name: 'Avalanche Testnet',
        decimals: 18,
        faucet: 'https://faucet.avax.network',
        contractAddr: '0x1cD905d4bBCd6CfC8eE6a80F841976B727803E05',
        rpc: 'https://api.avax-test.network/ext/bc/C/rpc',
        lookHash: 'https://testnet.snowtrace.io' + '/tx/',
        lookAddr: 'https://testnet.snowtrace.io' + '/address/',
        logo: 'avax.png'
    }
}
const xNFTAbi_main = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"admin","type":"address"}],"name":"LogAcceptAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"admin","type":"address"}],"name":"LogSetAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldadmin","type":"address"},{"indexed":false,"internalType":"address","name":"newadmin","type":"address"}],"name":"LogTransferAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"acceptAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"anyExecute","outputs":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"result","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fromChainID","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"anyExecuteTest","outputs":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"result","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"anyFallback","outputs":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"result","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"anyFallbackTest","outputs":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"result","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes32[]","name":"_proof","type":"bytes32[]"}],"name":"freeMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes32[]","name":"_proof","type":"bytes32[]"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"name":"setAnyCallProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_flag","type":"uint256"}],"name":"setFlag","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_root","type":"bytes32"}],"name":"setFreeMintRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"chainIDs","type":"uint256[]"},{"internalType":"address[]","name":"peers","type":"address[]"}],"name":"setPeers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_root","type":"bytes32"}],"name":"setWhiteListRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"toChainID","type":"uint256"}],"name":"Swapout_no_fallback","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"transferAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[],"name":"unpaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"callProxy","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"_anycall_fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"anyCallProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flag","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"freeClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"freeMintRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"foreignChainID","type":"uint256"}],"name":"getPeer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Method_Claim","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Method_Transfer","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINT_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINT_TYPE_FREE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINT_TYPE_PUBLIC","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINT_TYPE_WHITE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WHITE_MINT_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteListClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whiteListRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}];
const xNFTAbi_child = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"admin","type":"address"}],"name":"LogAcceptAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"admin","type":"address"}],"name":"LogSetAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldadmin","type":"address"},{"indexed":false,"internalType":"address","name":"newadmin","type":"address"}],"name":"LogTransferAdmin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"acceptAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"anyExecute","outputs":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"result","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fromChainID","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"anyExecuteTest","outputs":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"result","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"anyFallback","outputs":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"result","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"anyFallbackTest","outputs":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"bytes","name":"result","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes32[]","name":"_proof","type":"bytes32[]"}],"name":"freeMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes32[]","name":"_proof","type":"bytes32[]"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"name":"setAnyCallProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_flag","type":"uint256"}],"name":"setFlag","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_root","type":"bytes32"}],"name":"setFreeMintRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"chainIDs","type":"uint256[]"},{"internalType":"address[]","name":"peers","type":"address[]"}],"name":"setPeers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_root","type":"bytes32"}],"name":"setWhiteListRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"toChainID","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Swapout_no_fallback","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"transferAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[],"name":"unpaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"callProxy","type":"address"},{"internalType":"uint256","name":"_mainChain","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"_anycall_fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"anyCallProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"flag","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"freeClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"freeMintRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"foreignChainID","type":"uint256"}],"name":"getPeer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Method_Claim","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Method_Transfer","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINT_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINT_TYPE_FREE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINT_TYPE_PUBLIC","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINT_TYPE_WHITE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WHITE_MINT_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteListClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whiteListRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}]

$server_host = 'https://nftdemo.betterchain.com.cn'
const getWhiteList = function(chainId, address) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: `${$server_host}/white_list`,
            data: {chainId},
            type: 'get',
            dataType: 'json',
            success: function(data) {
                if(data.errCode==0) {
                    let freeList = data.data.filter(o=>o.type==1).map(o=>o.account)
                    let white_list = data.data.filter(o=>o.type==2).map(o=>o.account)
                    fetchProofAndValue(address, freeList, white_list).then(obj=> {
                        resolve(obj)
                    }).catch(()=> {
                        reject()
                    })
                }
            },
            error: function(err) { 
                reject(err)
            }
        })
    });
}
const cmerkleTree = function(leaves, address) {
    let tree = new MerkleTree(leaves.map(o=>keccak256(o)), keccak256, {sort: true})
    let root = tree.getHexRoot()
    console.log(root)
    let leaf = keccak256(address)
    let proof = tree.getProof(leaf)
    return [proof, tree.verify(proof, leaf, root)]
}
const fetchProofAndValue = async function(address, freeList, whiteList) {
    let [proof, bool] = cmerkleTree(freeList, address)
    if (bool) {
        bool = await window.xNFT.methods.freeClaimed(address).call()
        console.log(bool)
        if (!bool) {
            return [proof, 0]
        }
    }
    [proof, bool] = cmerkleTree(whiteList, address)
    if (bool) {
        bool = await window.xNFT.methods.whiteListClaimed(address).call()
        if (!bool) {
            return [proof, 0.05e18]
        }
    }
    return [proof, 0.1e18]
}

const { createApp } = Vue
createApp({
    data() {
        return {
            chainList:chainConfig,
            curWallet: {},
            tokenList: [{
                name: '?',
                image: './img/0.jpg',
            }],
            minted: 0,
            toChainId: 0,
            walletTip: this.walletModel('MetaMask').name,
            mintHashList: [],
            transferHashList: [],
            mintImg: [
                `${$server_host}/nft-minting/`
            ]
        }
    },
    computed: {
        toChainInfo() {
			if (!this.curWallet.chainId) {
				return {}
			}
			let info = {...chainConfig }
			delete info[this.curWallet.chainId]
			return info
		},
    },
    methods: {
        walletModel(key) {
			if (key == 'MetaMask') {
				let item = {
					logo: 'metamask.png',
					func: async ()=> {
						if (window.ethereum&&window.ethereum.isMetaMask) {
							try {
								// 请求用户授权
								let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
								this.init(window.ethereum, accounts, key)
							} catch (error) {
								alert(error.message)
							}
						}
						else {
							window.open('https://metamask.io/')
						}
					}
				}
				item.name = 'Install ' + key;
				if (window.ethereum&&window.ethereum.isMetaMask) {
					item.name = key;
				}
				return item
			}
			if (key == 'WalletConnet') {
				return {
					name: key,
					logo: 'walletConnectIcon.svg',
					func: async ()=> {
						try {
							//  Create WalletConnect Provider
							const provider = new WalletConnectProvider({
								// infuraId: "6722ace0f9f045afbfb4b0224d0f6036",
								rpc: {
									1: 'https://mainnet.infura.io/v3/6722ace0f9f045afbfb4b0224d0f6036',
									3: 'https://ropsten.infura.io/v3/6722ace0f9f045afbfb4b0224d0f6036',
								}
							});
							//  Enable session (triggers QR Code modal)
							let accounts = await provider.enable()
							this.init(provider, accounts, key)

						} catch (error) {
							alert(error.message)
						}
					}
				}
			}
		},
        handleAccountsChanged(accounts) {
            if (!accounts.length) {
                this.resetWallet()
                this.removeListener()
                sessionStorage.removeItem('account')
                return
            }
            this.curWallet.address = accounts[0]
            this.handleChainChanged()
        },
        async handleChainChanged(chainId) {
            this.curWallet.chainId = chainId ? parseInt(chainId, 16) : (await window.web3.eth.getChainId())
            this.curWallet.chainInfo = chainConfig[ this.curWallet.chainId]
            window.xNFT = new window.web3.eth.Contract(this.curWallet.chainId==5?xNFTAbi_main:xNFTAbi_child, this.curWallet.chainInfo.contractAddr);
            this.minted = await window.xNFT_main.methods.totalSupply().call();
            await this.getProofAndValue()
            let coin = await window.web3.eth.getBalance(this.curWallet.address)
            console.log(coin)
            this.curWallet.coin = parseFloat(coin / 10**this.curWallet.chainInfo.decimals).toFixed(4)
            await this.getTokenList(this.curWallet.address)
            if (!this.tokenList.length) {
                this.tokenList = [{
                    name: '?',
                    image: './img/0.jpg',
                }]
            }
            this.$nextTick(()=> {
                console.log('xxx')
                setTimeout(() => {
                    window.swiper2.update()
                }, 1000);
            })
        },
        async getTokenList(address) {
            this.tokenList = []
            let count = await window.xNFT.methods.balanceOf(address).call()
            console.log(count)
            let that = this
            for(let i=0; i < count; i++) {
                let id = await window.xNFT.methods.tokenOfOwnerByIndex(address, i).call()
                console.log(id)
                $.ajax({
                    url: `${$server_host}/nfts/${id}`,
                    type: 'get',
                    dataType: 'json',
                    success: function(data) {
                        console.log(data)
                        data.id = id
                        that.tokenList.push(data)
                    },
                    error: function(err) { 
                        console.log(err)
                    }
                })
            }
        },
        init(provider, accounts, key) {
            this.removeListener()
            window.provider = provider
            window.web3 = new Web3(provider)
            this.handleAccountsChanged(accounts)
            sessionStorage.setItem('account', key)
            provider.on('accountsChanged', this.handleAccountsChanged);
            provider.on('chainChanged', this.handleChainChanged)
        },
        resetWallet() {
            this.curWallet = {
                address: '',
                chainId: 5,
                chainInfo: chainConfig[5],
                mint_price: '0.1',
                coin: 0,
                proofAndValue: []
            }
        },
        removeListener() {
            if (!window.provider) { return }
            window.provider.removeListener('accountsChanged', this.handleAccountsChanged);
            window.provider.removeListener('chainChanged', this.handleChainChanged);
        },
        async swithNetwork({target}) {
            let item = this.chainList[target.value]
            let params = {
              chainId: '0x'+(item.chainId).toString(16)
            }
            try{
              await window.provider.request({method:"wallet_switchEthereumChain", params:[params]});
            }
            catch(e) {
              if (e.code == 4902) {
                try{
                  await window.provider.request({method:"wallet_addEthereumChain", params:[
                    {
                      ...params,
                      chainName: item.name,
                      rpcUrls: [item.rpc]
                    }
                  ]});
                }
                catch(e) {
                  console.log(e)
                  alert("Please switch the Metamask network to:" +item.name + ' ' + item.type + 'net')
                }
              }
            }
        },
        async getProofAndValue() {
            this.curWallet.proofAndValue = await getWhiteList(this.curWallet.chainId, this.curWallet.address)
            this.curWallet.mint_price = this.curWallet.proofAndValue[1]/10**this.curWallet.chainInfo.decimals
        },
        mintCallback(error, hash){
            let that = this
            if (hash) {
                this.mintHashList.push({hash, status: 'pending'})
                setTimeout(() => {
                    that.getTransactionReceipt(hash, 'mint')
                }, 3000);
            }
            else {
                this.mintHashList.push({hash: error.message, status: 'error'})
            }
		},
        getChildReceipt(hash, type) {
            let that = this
            $.ajax({
                url: `https://l2api.anyswap.exchange/v2/history/details?params=${hash}`,
                type: 'get',
                dataType: 'json',
                success: function(data) {
                    console.log(data)
                    if (data.status==10) {
                        if (type=='mint') {
                            that.mintHashList.find(o=>o.hash == hash).status = 'success'
                            setTimeout(() => {
                                window.xNFT_main.methods.totalSupply().call().then(c=> {
                                    console.log(c)
                                    that.minted = c
                                })
                            }, 10000);
                        }
                        else {
                            that.transferHashList.find(o=>o.hash == hash).status = 'success'
                        }
                    }
                    else {
                        setTimeout(() => {
                            that.getChildReceipt(hash, type)
                        }, 3000);
                    }
                },
                error: function(err) { 
                    console.log(err)
                    setTimeout(() => {
                        that.getChildReceipt(hash, type)
                    }, 3000);
                }
            })
        },
        getTransactionReceipt(hash, type='mint') {
			let that = this
			window.web3.eth.getTransactionReceipt(hash).then(obj=> {
				console.log(obj)
				if (obj && obj.status) {
                    // success
                    if (type=='mint') {
                        if (that.chainId == 5) {
                            that.mintHashList.find(o=>o.hash == hash).status = 'success'
                            setTimeout(() => {
                                window.xNFT_main.methods.totalSupply().call().then(c=> {
                                    console.log(c)
                                    that.minted = c
                                })
                            }, 10000);
                        }
                        else {
                            that.getChildReceipt(hash, type)
                        }
                    }
                    else {
                        that.getChildReceipt(hash, type)
                    }
				}
                else {
                    setTimeout(() => {
                        that.getTransactionReceipt(hash, type)
                    }, 3000);
                }
			}).catch(o=> {
                setTimeout(() => {
                    that.getTransactionReceipt(hash, type)
                }, 3000);
            })
		},
		handleMint() {
            let address = this.curWallet.address
            if (!address) {
                return
            }
			let [proof, value] = this.curWallet.proofAndValue
			if (value === 0) {
                window.xNFT.methods.freeMint(address, proof.map(p=>"0x"+p.data.toString('hex'))).send({from: address}, this.mintCallback);
			}
			else {
				window.xNFT.methods.mint(address, proof.map(p=>"0x"+p.data.toString('hex'))).send({from: address, value: value}, this.mintCallback);
			}
		},
        openFaucets() {
            if (this.curWallet.address && this.curWallet.chainInfo.faucet) {
                window.open(this.curWallet.chainInfo.faucet)
            }
        },
        openWhiteList() {
            if (this.curWallet.chainId) {
                let url = `whitelist.html?chainId=${this.curWallet.chainId}`
                if (this.curWallet.address) {
                    url += `&account=${this.curWallet.address}`
                }
                window.open(url)
            }
        },
        transferCallback(error, hash){
            let that = this
            if (hash) {
                this.transferHashList.push({hash, status: 'pending'})
                setTimeout(() => {
                    that.getTransactionReceipt(hash, 'transfer')
                }, 3000);
            }
            else {
                this.transferHashList.push({hash: error.message, status: 'error'})
            }
		},
        async handlerTransfer() {
            console.log(window.swiper2.activeIndex)
            let item = this.tokenList[window.swiper2.activeIndex]
            if (!item || !this.toChainId) {
                return
            }
            let address = this.curWallet.address
            console.log(address, item.id, this.toChainId)
            window.xNFT.methods.Swapout_no_fallback(address, item.id, this.toChainId).send({from: address}, this.transferCallback);
        },
        connectWallet() {
            this.walletModel('MetaMask').func()
        },
        lookAddr() {
            window.open(this.curWallet.chainInfo.lookAddr + this.curWallet.address)
        },
        lookHash(item) {
            if (item.status != 'error')
            window.open(this.curWallet.chainInfo.lookHash + item.hash)
        },
        visibilitychange() {
            if (document.visibilityState === 'visible') {
                if (this.curWallet.address) {
                    this.getProofAndValue()
                }
            }
        }
    },
    mounted() {
        let that = this
        window.xNFT_main = new (new Web3(chainConfig[5].rpc)).eth.Contract(xNFTAbi_main, chainConfig[5].contractAddr)
        window.xNFT_main.methods.totalSupply().call().then(c=> {
            that.minted = c
        })
        this.resetWallet()
		let key = sessionStorage.getItem('account')
		if (key) {
			sessionStorage.removeItem('account')
			this.walletModel(key).func()
		}
        document.addEventListener('visibilitychange', this.visibilitychange)
	},
    unmounted() {
		this.removeListener()
        document.removeEventListener('visibilitychange', this.visibilitychange)
	}
}).mount('#app')
