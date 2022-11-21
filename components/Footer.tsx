import { useRef } from "react";
import { useHoverDirty } from "react-use";

const Footer = () => {

    return (
        <footer className="flex h-24 w-full bg-white items-center justify-between border-t px-8">
            <div className="flex flex-row space-x-2 items-center">
                <Instagram />
                <Whatsapp />
            </div>

            <span>©2022 - Panko</span>
        </footer>
    )
}

export default Footer;


// 


const Instagram = () => {
    const instaRef = useRef(null);
    const isHovered = useHoverDirty(instaRef);

    const handleRedirect = () => {
        window.open('https://instagram.com/pankosushipde', '_blank')
    }

    return (
        <a onClick={handleRedirect} target="_blank" ref={instaRef} className={`p-[2px] rounded-md hover:cursor-pointer ${isHovered ? 'footer-insta' : ''}`}>
            <svg role="img" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill={`${isHovered ? 'white' : 'currentColor'}`} d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
        </a>
    )
}


const Whatsapp = () => {

    const whatsappaRef = useRef(null);
    const isHovered = useHoverDirty(whatsappaRef);

    const handleRedirect = () => {
        window.open('https://api.whatsapp.com/send/?phone=59898756853&text=Buenos%20dias!%20Quiero%20hacer%20un%20pedido&type=phone_number&app_absent=0', '_blank')
    }

    return (
        <a onClick={handleRedirect} target="_blank" ref={whatsappaRef} className={`p-[8px] rounded-full hover:cursor-pointer ${isHovered ? 'bg-[#25D366] ' : ''}`}>
            <svg role="img" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.667 30.667">
                <path fill={`${isHovered ? 'white' : 'currentColor'}`} d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017
                c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382
                c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076
                c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427
                c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437
                c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536
                c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609
                c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611
                c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787
                c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739
                C23.307,19.268,23.307,18.533,23.214,18.38z"/>
            </svg>
        </a>
    )
}