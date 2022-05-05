import { CircleNotch } from 'phosphor-react'
import './styles.scss'

export function Loading() {
  return (
    <div className="loading">
      <CircleNotch className="icon" weight="bold" />
    </div>
  )
}
