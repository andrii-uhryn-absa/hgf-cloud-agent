import { agentDependencies } from '@aries-framework/node'
import {
  Agent,
  ConsoleLogger,
  InitConfig,
  LogLevel,
} from '@aries-framework/core'
import { ledgers } from './ledgers'

function createAgent(): Agent {
  const agentConfig: InitConfig = {
    endpoints: process.env.AGENT_ENDPOINTS?.split(','),
    label: process.env.AGENT_LABEL || '',
    walletConfig: {
      id: process.env.WALLET_NAME || '',
      key: process.env.WALLET_KEY || '',
    },
    autoUpdateStorageOnStartup: true,
    publicDidSeed: process.env.PUBLIC_DID_SEED || '',
    autoAcceptConnections: true,
    autoAcceptMediationRequests: true,
    logger: new ConsoleLogger(LogLevel.debug),
    indyLedgers: [ledgers.bcovrin_greenlight],
  }
  return new Agent(agentConfig, agentDependencies)
}

export { createAgent }
