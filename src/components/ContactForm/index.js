import React, { useState, useRef } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Input, Button, Alert, Checkbox } from 'src/components/Base'
import emailjs from 'emailjs-com'
import ReCAPTCHA from 'react-google-recaptcha'

const ContactForm = () => {
  const { handleSubmit, errors, control, reset } = useForm()
  const [isCaptchaValid, setIsCapcthaValid] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [displaySuccess, setDisplaySuccess] = useState(false)
  const [displayError, setDisplayError] = useState(false)
  const recaptchaRef = useRef()

  const onSubmit = (templateParams) => {
    // Send Mail via Mail-JS API
    if (isCaptchaValid) {
      setIsSending(true)
      setDisplayError(false)
      setDisplaySuccess(false)
      emailjs
        .send(
          process.env.GATSBY_EMAILJS_SERVICE_ID,
          process.env.GATSBY_EMAILJS_TEMPLATE_ID,
          templateParams,
          process.env.GATSBY_EMAILJS_USER_ID
        )
        .then((success) => {
          onMailSuccess()
        })
        .catch((error) => {
          onMailError(error)
        })
        .finally(() => {
          setIsSending(false)
          resetCaptcha()
        })
    }
  }

  const onMailSuccess = () => {
    reset({
      fullname: '',
      email: '',
      message: '',
      gdpr: false,
    })
    setDisplaySuccess(true)
  }

  const onMailError = () => {
    setDisplayError(true)
  }

  const onCaptchaChange = (value) => {
    if (value != null) {
      setIsCapcthaValid(true)
    }
  }

  const onCaptchaExpired = () => {
    setIsCapcthaValid(false)
  }

  const resetCaptcha = () => {
    recaptchaRef.current.reset()
    setIsCapcthaValid(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <Controller
          name="fullname"
          control={control}
          defaultValue="Maweo"
          rules={{ required: 'Dieses Feld ist ein Pflichtfeld' }}
          render={(props) => (
            <Input
              label="Full name *"
              onChange={(event) => props.onChange(event.target.value)}
              value={props.value}
              error={errors?.fullname?.message}
            />
          )}
        />
      </div>

      <div className="mb-2">
        <Controller
          name="email"
          control={control}
          defaultValue="support@maweo.at"
          rules={{
            required: 'Dieses Feld ist ein Pflichtfeld',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Ungültige E-Mail Adresse',
            },
          }}
          render={(props) => (
            <Input
              label="E-Mail *"
              onChange={(event) => props.onChange(event.target.value)}
              value={props.value}
              error={errors?.email?.message}
            />
          )}
        />
      </div>

      <div className="mb-2">
        <Controller
          name="message"
          control={control}
          defaultValue="Test"
          rules={{
            required: 'Dieses Feld ist ein Pflichtfeld',
            minLength: {
              value: 10,
              message: 'Ihre Nachricht muss mindestens 10 Zeichen enthalten',
            },
          }}
          render={(props) => (
            <Input
              as="textarea"
              label="Message *"
              rows={5}
              onChange={(event) => props.onChange(event.target.value)}
              value={props.value}
              error={errors?.message?.message}
            />
          )}
        />
      </div>

      <div className="mb-2">
        <Controller
          name="gdpr"
          control={control}
          defaultValue={false}
          rules={{ required: 'Dieses Feld ist ein Pflichtfeld' }}
          render={({ onChange, value, ref }) => (
            <Checkbox
              color="secondary"
              label="Ja, ich bin damit einverstanden, dass meine Daten im Zuge dieser Anfrage übermittelt und verarbeitet werden.*"
              onChange={(event) => onChange(event.target.checked)}
              checked={value}
              inputRef={ref}
              error={errors?.gdpr?.message}
            />
          )}
        />
      </div>

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.GATSBY_RECAPTCHA_V2_PUBLIC_KEY}
        onChange={onCaptchaChange}
        onExpired={onCaptchaExpired}
      />

      <div>
        <Button type="submit" className="mt-2" disabled={!isCaptchaValid}>
          {!isSending && <>Send Message</>}
          {isSending && <div>sending ...</div>}
        </Button>

        {displaySuccess && <Alert className="ml-2">Mail sent</Alert>}

        {displayError && (
          <Alert className="ml-2" color="error">
            Mail error
          </Alert>
        )}
      </div>
    </form>
  )
}

ContactForm.PropTypes = {}

export default ContactForm
