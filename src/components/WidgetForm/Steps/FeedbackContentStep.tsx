import { FormEvent, useState } from 'react'
import { CloseButton } from 'components/CloseButton'
import { ArrowLeft } from 'phosphor-react'
import { api } from 'services/api'
import { Loading } from 'components/Loading'
import { ScreenshotButton } from '../ScreenshotButton'
import { FeedbackType, feedbackTypes } from '..'

import './FeedbackContentStep.scss'

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
  onFeedbackSent: () => void
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)

  const feedbackTypeInfo = feedbackTypes[feedbackType]

  const handleSubmitFeedback = async (event: FormEvent) => {
    event.preventDefault()

    setIsSendingFeedback(true)

    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot,
    })

    setIsSendingFeedback(false)
    onFeedbackSent()
  }

  return (
    <>
      <header className="feedback-content-header">
        <button
          type="button"
          className="feedback-content-header__button"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" />
        </button>

        <span>
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />

          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="feedback-content">
        <textarea
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        />

        <footer>
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            disabled={comment.length === 0 || isSendingFeedback}
          >
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </>
  )
}
