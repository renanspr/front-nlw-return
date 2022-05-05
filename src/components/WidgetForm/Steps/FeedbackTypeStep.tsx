import { CloseButton } from 'components/CloseButton'
import { feedbackTypes, FeedbackType } from '..'
import './FeedbackTypeStep.scss'

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span>Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="feedback-type">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              key={key}
              type="button"
            >
              <img src={value.image.source} alt={value.image.source} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}
