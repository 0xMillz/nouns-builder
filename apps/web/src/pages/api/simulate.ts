import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { InvalidRequestError } from 'src/services/errors'
import {
  InsufficientFundsError,
  simulate,
  SimulationResult,
} from 'src/services/simulationService'
import { ErrorResult } from './errorResult'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SimulationResult | ErrorResult>
) {
  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Only POST requests allowed' })
  }

  try {
    const { simulations, success, totalGasUsed } = await simulate(req.body)
    return res.status(200).json({ simulations, success, totalGasUsed })
  } catch (error) {
    console.error(error)

    if (error instanceof InvalidRequestError) {
      return res.status(400).json({ error: error.message })
    }
    if (error instanceof InsufficientFundsError) {
      return res.status(400).json({
        error:
          'Insufficient treasury funds to carry out some or all of these transactions',
      })
    }
    return res
      .status(400)
      .json({ error: 'Unexpected Error: Unable to simulate these transactions' })
  }
}