import React, {useState} from "react";
import s from './Carousel.module.css'
// import data from "../data/images.json";

export default function Carousel({images}) {
    const [clickedImg, setClickedImg] = useState(images[0].link);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.link);
    };

    const handelRotationRight = () => {
        const totalLength = images.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = images[0].link;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = images.filter((item) => {
            return images.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].link;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const handelRotationLeft = () => {
        const totalLength = images.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = images[totalLength - 1].link;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = images.filter((item) => {
            return images.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].link;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    return (
        <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
        />
    )
}

const Modal = ({clickedImg, setClickedImg, handelRotationRight, handelRotationLeft}) => {

    const img = new Image();
    img.src = clickedImg
    const isImgLandscape = img.width > img.height // определяем, является ли картинка широкой

    // const [opacity, setOpacity] = useState(false);

    const handleClick = (e) => {
        if (e.target.classList.contains("dismiss")) {
            setClickedImg(null);
        }
    };

    return (
        <div className={s.container}>
            <div className={s.carousel} onClick={handleClick}>
                <div onClick={handelRotationLeft} className={s.arrowsLeft}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                </div>
                <img src={clickedImg} alt="bigger pic" className={isImgLandscape ? s.landscape : undefined}/>
                <div onClick={handelRotationRight} className={s.arrowsRight}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                </div>
            </div>
        </div>
    );
};
