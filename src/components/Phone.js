import '../styles/Phone.scss'
import phone from '../assets/phone.svg'

function phoneClick() {
	alert("Une question ? N'hésitez pas a nous appeller au 01.00.00..00.00 🌱✨")
}

function Phone() {
	return (
		<div className='ps-phone' onClick={phoneClick}>
      <img src={phone} alt='Contactez nous par téléphone'  />
    </div>
	)
}

export default Phone