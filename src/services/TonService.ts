const TON_MAINNET_RPC: string = 'https://toncenter.com/api/v2/jsonRPC'
const TON_TESTNET_RPC: string = 'https://testnet.toncenter.com/api/v2/jsonRPC'

export class TonService {
  private readonly network: string
  private readonly rpc: string
  constructor(network: string) {
    this.network = network
    this.rpc = network === 'testnet' ? TON_TESTNET_RPC : TON_MAINNET_RPC
  }

  public textLog() {
    return 'textlog'
  }
}
