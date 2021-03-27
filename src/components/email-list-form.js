import React from 'react'
import axios from 'axios'
import styles from '@/styles/footer-email-list-form.module.css'

const formInit = () => {
  return {
    name: '',
    email: '',
    className: styles.form,
    status: 'enabled'
  }
}

const formReducer = (state, action) => {
  switch (action.type) {
    case 'change':
      return {...state, ...action.payload}
    case 'disabled':
      return {...state, status: 'disabled', className: styles.formDisabled}
    case 'success':
      return {...state, status: 'success', className: styles.formSuccess}
    case 'reset':
    default:
      return formInit()
  }
}

export default function EmailListForm() {
  const [form, dispatchForm] = React.useReducer(formReducer, formInit())

  const handleChange = (field) => {
    return (event) => dispatchForm({type: 'change', payload: {[field]: event.target.value}})
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatchForm({type: 'disabled'})

    const {name, email} = form

    axios
      .post('/.netlify/functions/email-list', {name, email})
      .then(_response => dispatchForm({type: 'success'}))
  }

  return (
    <div className="; relative">
      <form onSubmit={handleSubmit} className={form.className}>
        <label>
          <div className="; hidden">Name</div>
          <div><input required type="text" placeholder="Name" value={form.name} onChange={handleChange('name')} disabled={form.disabled} /></div>
        </label>
        <label>
          <div className="; hidden">Email Address</div>
          <div><input required type="email" placeholder="Email Address" value={form.email} onChange={handleChange('email')} disabled={form.disabled} /></div>
        </label>
        <div>
          <button type="submit" disabled={form.disabled} className={styles.submitButton}>Subscribe Now</button>
        </div>
      </form>

      {form.status == 'success' && (
        <div className={styles.successOverlay}>
          <div className="; flex flex-col text-center justify-evenly w-full h-full text-lg">
            <div>Thanks for Subscribing!</div>
            <div>
              <button className={styles.successOkButton} onClick={() => dispatchForm({type: 'reset'})}>OK</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
