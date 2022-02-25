import { useState } from 'react'
import { useForm } from 'react-hook-form'


const ContactForm = () => {
  const [formData, setFormData] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [checked, setChecked] = useState(true)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const handleChange = () => {

  }
  const onSubmit = async (data) => {
    setIsSubmitting(true)
    let response
    setFormData(data)
    try {
      response = await fetch('/api/createMessage', {
        method: 'POST',
        body: JSON.stringify(data),
        type: 'application/json',
      })
      setIsSubmitting(false)
      setHasSubmitted(true)
    } catch (err) {
      setFormData(err)
    }
  }

  if (isSubmitting) {
    return <h3>Submitting message</h3>
  }

  if (hasSubmitted) {
    return (
      <h3>
        Thanks for your message. Please allow us some time to review and get
        back to you shortly!
      </h3>
    )
  }

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold">Contact us</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 max-w-md"
        disabled
      >
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-700">Full name</span>
            <input
              type="text"
              name="name"
              {...register('name', { required: true })}
              className="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  shadow-sm
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                "
              placeholder=""
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email address</span>
            <input
              name="email"
              type="email"
              {...register('email', { required: true })}
              className="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  shadow-sm
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                "
              placeholder="john@example.com"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Phone Number</span>
            <input
              className="
                mt-1
                block
                w-full
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
              "
              name="phone"
              type="phone"
              {...register('phone', { required: false })}
              placeholder="07555123456"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">When is your event?</span>
            <input
              name="eventDate"
              type="date"
              {...register('eventDate', { required: false })}
              className="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  shadow-sm
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                "
            />
          </label>
          <label className="block">
            <span className="text-gray-700">What type of event is it?</span>
            <select
              name="eventType"
              {...register('eventType', { required: false })}
              className="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  shadow-sm
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                "
            >
              <option disabled value="value" selected>
                {' '}
                type of event
              </option>
              <option>Corporate event</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Other</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700">Additional details</span>
            <textarea
              name="message"
              {...register('message', { required: true })}
              className="
                  mt-1
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  shadow-sm
                  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                "
              rows="3"
            ></textarea>
          </label>
          <div className="block">
            <div className="mt-2">
              <div>
                <label className="inline-flex items-center">
                  <input
                    className="
                      rounded
                      border-gray-300
                      text-indigo-600
                      shadow-sm
                      focus:border-indigo-300
                      focus:ring
                      focus:ring-indigo-200
                      focus:ring-opacity-50
                      focus:ring-offset-0
                    "
                    {...register('newsletter', { required: false })}
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked((value) => !value)}
                  />
                  <span className="ml-2">Email me news and special offers</span>
                </label>
              </div>
            </div>
          </div>
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" className="px-16 py-2" />
        </div>
      </form>
    </div>
  )
}

export default ContactForm
