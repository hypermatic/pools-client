/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ChainlinkOracleWrapper,
  ChainlinkOracleWrapperInterface,
} from "../ChainlinkOracleWrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "wad",
        type: "int256",
      },
    ],
    name: "fromWad",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "scaler",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
    ],
    name: "setOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001983380380620019838339818101604052810190620000379190620003f1565b620000576200004b6200006f60201b60201c565b6200007760201b60201c565b62000068816200013b60201b60201c565b506200084f565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6200014b6200006f60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620001716200039a60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1614620001ca576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001c190620004ca565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200023d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000234906200050e565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015620002e957600080fd5b505afa158015620002fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000324919062000423565b905060128160ff16111562000370576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200036790620004ec565b60405180910390fd5b8060ff166012620003829190620006d9565b600a6200039091906200059c565b6002819055505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600081519050620003d4816200081b565b92915050565b600081519050620003eb8162000835565b92915050565b6000602082840312156200040a57620004096200078e565b5b60006200041a84828501620003c3565b91505092915050565b6000602082840312156200043c576200043b6200078e565b5b60006200044c84828501620003da565b91505092915050565b60006200046460208362000530565b91506200047182620007a0565b602082019050919050565b60006200048b60168362000530565b91506200049882620007c9565b602082019050919050565b6000620004b2601a8362000530565b9150620004bf82620007f2565b602082019050919050565b60006020820190508181036000830152620004e58162000455565b9050919050565b6000602082019050818103600083015262000507816200047c565b9050919050565b600060208201905081810360008301526200052981620004a3565b9050919050565b600082825260208201905092915050565b6000808291508390505b600185111562000593578086048111156200056b576200056a6200075f565b5b60018516156200057b5780820291505b80810290506200058b8562000793565b94506200054b565b94509492505050565b6000620005a98262000748565b9150620005b68362000748565b9250620005e57fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620005ed565b905092915050565b600082620005ff5760019050620006d2565b816200060f5760009050620006d2565b8160018114620006285760028114620006335762000669565b6001915050620006d2565b60ff8411156200064857620006476200075f565b5b8360020a9150848211156200066257620006616200075f565b5b50620006d2565b5060208310610133831016604e8410600b8410161715620006a35782820a9050838111156200069d576200069c6200075f565b5b620006d2565b620006b2848484600162000541565b92509050818404811115620006cc57620006cb6200075f565b5b81810290505b9392505050565b6000620006e68262000748565b9150620006f38362000748565b9250828210156200070957620007086200075f565b5b828203905092915050565b6000620007218262000728565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600080fd5b60008160011c9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f434f413a20746f6f206d616e7920646563696d616c7300000000000000000000600082015250565b7f4f7261636c652063616e6e6f7420626520302061646472657373000000000000600082015250565b620008268162000714565b81146200083257600080fd5b50565b620008408162000752565b81146200084c57600080fd5b50565b611124806200085f6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80637dc0d1d01161005b5780637dc0d1d0146101015780638da5cb5b1461011f57806398d5fdca1461013d578063f2fde38b1461015b57610088565b80633c1e6ff51461008d578063412ad1cc146100ab578063715018a6146100db5780637adbf973146100e5575b600080fd5b610095610177565b6040516100a29190610a74565b60405180910390f35b6100c560048036038101906100c09190610894565b61017d565b6040516100d29190610a74565b60405180910390f35b6100e3610194565b005b6100ff60048036038101906100fa9190610867565b61021c565b005b61010961045a565b6040516101169190610a59565b60405180910390f35b610127610480565b6040516101349190610a59565b60405180910390f35b6101456104a9565b6040516101529190610a74565b60405180910390f35b61017560048036038101906101709190610867565b61060e565b005b60025481565b60006002548261018d9190610b60565b9050919050565b61019c610706565b73ffffffffffffffffffffffffffffffffffffffff166101ba610480565b73ffffffffffffffffffffffffffffffffffffffff1614610210576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020790610aef565b60405180910390fd5b61021a600061070e565b565b610224610706565b73ffffffffffffffffffffffffffffffffffffffff16610242610480565b73ffffffffffffffffffffffffffffffffffffffff1614610298576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028f90610aef565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610308576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ff90610b2f565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156103b357600080fd5b505afa1580156103c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103eb919061093c565b905060128160ff161115610434576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042b90610b0f565b60405180910390fd5b8060ff1660126104449190610e52565b600a6104509190610c1d565b6002819055505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080600080600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b15801561051a57600080fd5b505afa15801561052e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055291906108c1565b945094509450945094508469ffffffffffffffffffff168169ffffffffffffffffffff1610156105b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ae90610aaf565b60405180910390fd5b60008214156105fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f290610acf565b60405180910390fd5b610604846107d2565b9550505050505090565b610616610706565b73ffffffffffffffffffffffffffffffffffffffff16610634610480565b73ffffffffffffffffffffffffffffffffffffffff161461068a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068190610aef565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f190610a8f565b60405180910390fd5b6107038161070e565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000600254826107e29190610d3b565b9050919050565b6000813590506107f88161107b565b92915050565b60008135905061080d81611092565b92915050565b60008151905061082281611092565b92915050565b600081519050610837816110a9565b92915050565b60008151905061084c816110d7565b92915050565b600081519050610861816110c0565b92915050565b60006020828403121561087d5761087c610f4d565b5b600061088b848285016107e9565b91505092915050565b6000602082840312156108aa576108a9610f4d565b5b60006108b8848285016107fe565b91505092915050565b600080600080600060a086880312156108dd576108dc610f4d565b5b60006108eb8882890161083d565b95505060206108fc88828901610813565b945050604061090d88828901610828565b935050606061091e88828901610828565b925050608061092f8882890161083d565b9150509295509295909350565b60006020828403121561095257610951610f4d565b5b600061096084828501610852565b91505092915050565b61097281610e86565b82525050565b61098181610e98565b82525050565b6000610994602683610b4f565b915061099f82610f5f565b604082019050919050565b60006109b7601183610b4f565b91506109c282610fae565b602082019050919050565b60006109da601583610b4f565b91506109e582610fd7565b602082019050919050565b60006109fd602083610b4f565b9150610a0882611000565b602082019050919050565b6000610a20601683610b4f565b9150610a2b82611029565b602082019050919050565b6000610a43601a83610b4f565b9150610a4e82611052565b602082019050919050565b6000602082019050610a6e6000830184610969565b92915050565b6000602082019050610a896000830184610978565b92915050565b60006020820190508181036000830152610aa881610987565b9050919050565b60006020820190508181036000830152610ac8816109aa565b9050919050565b60006020820190508181036000830152610ae8816109cd565b9050919050565b60006020820190508181036000830152610b08816109f0565b9050919050565b60006020820190508181036000830152610b2881610a13565b9050919050565b60006020820190508181036000830152610b4881610a36565b9050919050565b600082825260208201905092915050565b6000610b6b82610e98565b9150610b7683610e98565b925082610b8657610b85610f1e565b5b600160000383147f800000000000000000000000000000000000000000000000000000000000000083141615610bbf57610bbe610eef565b5b828205905092915050565b6000808291508390505b6001851115610c1457808604811115610bf057610bef610eef565b5b6001851615610bff5780820291505b8081029050610c0d85610f52565b9450610bd4565b94509492505050565b6000610c2882610ec2565b9150610c3383610ec2565b9250610c607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484610c68565b905092915050565b600082610c785760019050610d34565b81610c865760009050610d34565b8160018114610c9c5760028114610ca657610cd5565b6001915050610d34565b60ff841115610cb857610cb7610eef565b5b8360020a915084821115610ccf57610cce610eef565b5b50610d34565b5060208310610133831016604e8410600b8410161715610d0a5782820a905083811115610d0557610d04610eef565b5b610d34565b610d178484846001610bca565b92509050818404811115610d2e57610d2d610eef565b5b81810290505b9392505050565b6000610d4682610e98565b9150610d5183610e98565b9250827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0482116000841360008413161615610d9057610d8f610eef565b5b817f80000000000000000000000000000000000000000000000000000000000000000583126000841260008413161615610dcd57610dcc610eef565b5b827f80000000000000000000000000000000000000000000000000000000000000000582126000841360008412161615610e0a57610e09610eef565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0582126000841260008412161615610e4757610e46610eef565b5b828202905092915050565b6000610e5d82610ec2565b9150610e6883610ec2565b925082821015610e7b57610e7a610eef565b5b828203905092915050565b6000610e9182610ea2565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b600069ffffffffffffffffffff82169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600080fd5b60008160011c9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f434f413a205374616c6520616e73776572000000000000000000000000000000600082015250565b7f434f413a20526f756e6420696e636f6d706c6574650000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f434f413a20746f6f206d616e7920646563696d616c7300000000000000000000600082015250565b7f4f7261636c652063616e6e6f7420626520302061646472657373000000000000600082015250565b61108481610e86565b811461108f57600080fd5b50565b61109b81610e98565b81146110a657600080fd5b50565b6110b281610ec2565b81146110bd57600080fd5b50565b6110c981610ecc565b81146110d457600080fd5b50565b6110e081610ed9565b81146110eb57600080fd5b5056fea264697066735822122049b5a4938a7f3c57fdb922dd103471ff24a6095e2e0d8249749e39b8e9898ae764736f6c63430008060033";

export class ChainlinkOracleWrapper__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _oracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ChainlinkOracleWrapper> {
    return super.deploy(
      _oracle,
      overrides || {}
    ) as Promise<ChainlinkOracleWrapper>;
  }
  getDeployTransaction(
    _oracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_oracle, overrides || {});
  }
  attach(address: string): ChainlinkOracleWrapper {
    return super.attach(address) as ChainlinkOracleWrapper;
  }
  connect(signer: Signer): ChainlinkOracleWrapper__factory {
    return super.connect(signer) as ChainlinkOracleWrapper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChainlinkOracleWrapperInterface {
    return new utils.Interface(_abi) as ChainlinkOracleWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChainlinkOracleWrapper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ChainlinkOracleWrapper;
  }
}