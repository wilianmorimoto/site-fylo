import SignIn from '../SignIn/SignIn'
import Testimonials from '../Testimonials/Testimonials'
import './BackgroundGradient.scss'

export default function BackgroundGradient() {
  return (
    <div id='background-gradient'>
      <Testimonials />
      <SignIn/>
    </div>
  )
}
