import { useState } from 'react'

import bugIconUrl from 'assets/icons/bug.svg'
import ideaIconUrl from 'assets/icons/idea.svg'
import thoughtIconUrl from 'assets/icons/thought.svg'

import {
  FeedbackTypeStep,
  FeedbackContentStep,
  FeedbackSuccessStep,
} from './Steps'

import './styles.scss'

export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  const handleRestartFeedback = () => {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className="widget-form">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer>Feito com ♥</footer>
    </div>
  )
}
