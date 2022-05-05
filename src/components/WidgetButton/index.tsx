import { Popover } from '@headlessui/react'
import { WidgetForm } from 'components/WidgetForm'
import { ChatTeardropDots } from 'phosphor-react'
import './styles.scss'

export function WidgetButton() {
  return (
    <Popover className="widget">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="widget__button">
        <ChatTeardropDots className="icon" />

        <span className="widget__text">
          <span>Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  )
}
