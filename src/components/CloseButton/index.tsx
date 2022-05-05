import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'
import './styles.scss'

export function CloseButton() {
  return (
    <Popover.Button className="close-button">
      <X className="icon" weight="bold" />
    </Popover.Button>
  )
}
