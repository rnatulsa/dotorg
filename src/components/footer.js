import EmailListForm from '@/components/email-list-form'

export default function Footer() {
  return (
    <footer className="; bg-wixColor15 text-wixColor13" style={{
      fontSize: '12px',
      lineHeight: '1.5em',
    }}>
      <div className="; md:container mx-auto md:flex md:justify-evenly p-4">
        <div className="; mx-4">
          <h6 className="; font-serif uppercase text-wixColor13 underline" style={{
            fontSize: '18px',
            letterSpacing: '0.2em',
            textShadow: 'rgba(0, 0, 0, 0.298039) 0px 5px 0px',
          }}>
            About Us
          </h6>

          <p className="; my-4">
            Renaissance Neighborhood Association (RNA) is a group of residents who volunteer their time to promote a
            united community by organizing events and by sharing information that affects our neighborhood.
          </p>
        </div>

        <div className="; mx-4">
          <h6 className="; font-serif uppercase text-wixColor13 underline" style={{
            fontSize: '18px',
            letterSpacing: '0.2em',
            textShadow: 'rgba(0, 0, 0, 0.298039) 0px 5px 0px',
          }}>
            Address
          </h6>

          <p className="; whitespace-pre my-4">
            Renaissance Neighborhood Association{'\n'}
            P.O. Box 4362{'\n'}
            Tulsa, OK 74159
          </p>

          <p className="; whitespace-pre my-4">
            For website trouble, email:{'\n'}
            RnaWebmaster2@gmail.com
          </p>
        </div>

        <div className="; mx-4">
          <h6 className="; font-serif uppercase text-wixColor13 underline whitespace-nowrap" style={{
            fontSize: '18px',
            letterSpacing: '0.2em',
            textShadow: 'rgba(0, 0, 0, 0.298039) 0px 5px 0px',
          }}>
            Join Our Email List
          </h6>
          <EmailListForm />
        </div>
      </div>
    </footer>
  )
}
