import { CloseButton } from 'components/CloseButton'
import './FeedbackSuccessStep.scss'

import successIconUrl from 'assets/icons/success.svg'

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequested,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="feedback-success">
        <img src={successIconUrl} alt="Ícone de sucesso" />

        <p>Agradecemos o feedback!</p>

        <button type="button" onClick={onFeedbackRestartRequested}>
          Quero enviar outro
        </button>
      </div>
    </>
  )
}
