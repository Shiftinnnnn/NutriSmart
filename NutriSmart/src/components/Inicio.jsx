const Inicio = () => {
    return (
        <section id="para-ti" className="max-w-screen-xl mx-auto py-45 font-poppins">
            
            <h2 className="font-semibold font-poppins text-[60px] leading-[1.2] mb-10 text-left">
                Come bien, vive mejor. <br />
                Nutrición que te entiende
            </h2>

            <div className="flex flex-col md:flex-row">
                <div className="font-semibold font-poppins text-[24px] leading-relaxed text-left">
                    <p className="text-soft-gray mb-15">
                    En NutriSmart, diseñamos planes de alimentación <br />
                    personalizados que se adaptan a ti, no al revés. <br />
                    Con tecnología inteligente y un enfoque humano, <br />
                    te ayudamos a transformar tus hábitos, sin complicaciones.
                    </p>

                    <div className="flex flex-wrap">
                        <div className="flex items-center w-full md:w-1/2 mb-5 gap-3">
                            <img src="public/CheckImg.png" alt="" className="w-8 h-6 object-contain"/>
                            Pierde grasa <br/> sin perder sabor
                        </div>
                        <div className="flex items-center w-full md:w-1/2 mb-5 gap-3">
                            <img src="public/CheckImg.png" alt="" className="w-8 h-6 object-contain"/>
                            Gana músculo con <br/> recetas reales
                        </div>
                        <div className="flex items-center w-full mt-15 gap-3">
                            <img src="public/CheckImg.png" alt="" className="w-8 h-6 object-contain"/>
                            Mejora tu bienestar, día a día
                        </div>
                    </div>
                
                </div>

               
                <div className="md:w-1/2 w-full flex justify-center md:justify-start">
                <img
  src="public/HomeImg.png"
  alt="Imagen"
  className="w-full max-w-md md:max-w-xl lg:max-w-2xl h-auto object-contain"
/>
                </div>
            </div>
        </section>
    );
};

export default Inicio