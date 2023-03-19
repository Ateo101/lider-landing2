import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {Sphere, MeshDistortMaterial} from "@react-three/drei";
import s from "./Home.module.css"
import {Form} from "../../common/Form/Form";
import SvgComponent from "./SvgLogo";

export const Home = () => {

    return (
        <div className={s.home}>
            {/*<div className={s.overlay}/>*/}

            <div className={s.homeContent}>

                <div className={s.homeLeft}>
                    <SvgComponent className={s.homeLogo}/>
                    <h1>
                        Оборудование для резиновой крошки
                    </h1>
                    <h2 style={{fontWeight: 'normal'}}>
                        соответствует СНиП, ГОСТ Р 52169-2012, ГОСТ Р 58726-2019, СП 31-115-2006 и СП 31-115-2006
                    </h2>
                    <hr/>
                    <h3 style={{fontWeight: 'normal'}}>Закажите коммерческое предложение под ваши цели:</h3>
                    <ul>
                        <li data-emoji="🔰">2-3 варианта оборудования для резиновой крошки</li>
                        <li data-emoji="🔰">сроки поставки</li>
                        <li data-emoji="🔰">запрос лизинга в 12 компаниях</li>
                        <li data-emoji="🔰">5 площадок для поиска выгодных тендеров</li>
                    </ul>
                    <Form/>
                </div>

                <div className={s.homeRight}>
                    <Canvas className={s.canvas}>
                        <Suspense fallback={null}>

                            <ambientLight intensity={1.3}/>
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