import LogoImage from '../../assets/assets/logo.svg'
export default function Logo(){
    return (
        <a href="./index.html">
				<img className="h-9" src={LogoImage} alt="Weather App" />
			</a>
    );
}