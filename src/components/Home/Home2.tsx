import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {Sphere, MeshDistortMaterial} from "@react-three/drei";
import s from "./Home2.module.css"
import logo from "./home-logo.png";

const Hero = () => {

    return (
        <div className={s.home} id="home">
            <div className={s.overlay}/>

            <div className={s.homeContent}>

                <div className={s.homeLeft}>
                    <img src={logo} className={s.homeLogo} alt=""/>
                    <h1>
                        Оборудование для резиновой крошки
                    </h1>
                    <h2 style={{fontWeight: 'normal'}}>
                        от 25 до 240 м³/ч, окупаемость в среднем 1 месяц
                    </h2>
                    <hr/>
                    <h3 style={{fontWeight: 'normal'}}>Закажите бесплатный расчет окупаемости и получите:</h3>
                    <ul>
                        <li data-emoji="🔰">расчет рентабельности в вашем регионе</li>
                        <li data-emoji="🔰">2-3 варианта бетонных заводов с ценами</li>
                        <li data-emoji="🔰">сроки поставки</li>
                        <li data-emoji="🔰">просчет лизинга в 12 компаниях</li>
                    </ul>
                </div>

                <div className={s.homeRight}>
                    <Canvas className={s.canvas}>
                        <Suspense fallback={null}>

                            <ambientLight intensity={1}/>
                            <directionalLight position={[3, 2, 1]}/>
                            {
                                // @ts-ignore
                                <Sphere args={[1, 100, 200]} scale={1.6}>
                                    <MeshDistortMaterial
                                        color="rgb(81, 115, 36)"
                                        attach="material"
                                        distort={0.5}
                                        speed={0.5}
                                    />
                                </Sphere>
                            }
                        </Suspense>
                    </Canvas>
                    {/*<div className={s.canvas}></div>*/}
                </div>

            </div>

        </div>
    );
};

export default Hero;