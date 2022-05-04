import { useState } from 'react'
import { CloseButton } from 'components/CloseButton'

import bugIconUrl from 'assets/icons/bug.svg'
import ideaIconUrl from 'assets/icons/idea.svg'
import thoughtIconUrl from 'assets/icons/thought.svg'
import './WidgetForm.scss'

const feedbackTypes = {
  BUG: {
    title: 'Bug',
    image: {
      source: bugIconUrl,
      alt: 'Ícone de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaIconUrl,
      alt: 'Ícone de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtIconUrl,
      alt: 'Ícone de um balão de pensamento',
    },
  },
}

type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return (
    <div className="widget-form">
      <header>
        <span>Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="widget-form__feedbacks">
        {!feedbackType
          ? Object.entries(feedbackTypes).map(([key, value]) => {
              return (
                <button
                  onClick={() => setFeedbackType(key as FeedbackType)}
                  key={key}
                  type="button"
                >
                  <img src={value.image.source} alt={value.image.source} />
                  <span>{value.title}</span>
                </button>
              )
            })
          : 'ola'}
      </div>

      <footer>Feito com ♥</footer>
    </div>
  )
}
