import RecordAudio from "@/components/RecordAudio"

function RecordingsPage() {
  return (
    <div>
      Please provide your audio to use our Voice Clone and Voice Translation features. This helps our AI models to accurately clone and translate your voice.
      <RecordAudio/>
    </div>
  )
}
export default RecordingsPage