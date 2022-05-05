import { useState } from 'react'
import { Loading } from 'components/Loading'
import { Camera, Trash } from 'phosphor-react'
import html2canvas from 'html2canvas'

import './styles.scss'

interface ScreenshotButtonProps {
  screenshot: string | null
  onScreenshotTook: (screenshot: string | null) => void
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTook,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')

    onScreenshotTook(base64image)
    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="screenshot-preview"
        onClick={() => onScreenshotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
        }}
      >
        <Trash className="icon" weight="fill" />
      </button>
    )
  }

  return (
    <button type="button" className="screenshot-button">
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className="icon" onClick={handleTakeScreenshot} />
      )}
    </button>
  )
}
