const ParaTi = () => {
    return(
    <>
    
    <section id="Para-ti" className="max-w-screen-xl mx-auto font-poppins mb-20">
        <h2 className="font-bold text-[48px] pb-20">
            ¿Qué hace NutriSmart por ti?
        </h2>
        
        <div className="flex flex-wrap font-bold gap-x-80 gap-y-30">


        <div className="flex">
            <div><img src="public/WorldIcon.png" className="mr-8" /></div>
        <div>
        <p className="text-[32px] pb-3">
            Evaluación inteligente
        </p>
            <p className="text-soft-gray text-[24px]">
            Responde un cuestionario <br />
            breve y obtén un análisis <br />
            nutricional pensado para ti <br />
            desde el primer clic.
            </p>
        </div>
        </div>

        <div className="flex">
            <div><img src="public/ViewIcon.png" className="mr-8" /></div>
        <div>
        <p className="text-[32px] pb-3">
        Seguimiento en tiempo real
        </p>
            <p className="text-soft-gray text-[24px]">
            Sigue tus avances con gráficas <br />
            dinámicas y reportes semanales <br />
            que hablan tu idioma
            </p>
        </div>
        </div>

        <div className="flex">
            <div><img src="public/UserIcon.png" className="mr-8" /></div>
        <div>
        <p className="text-[32px] pb-3">
        Planes personalizados
        </p>
            <p className="text-soft-gray text-[24px]">
            Diseñamos menús que se <br />
            adaptan a tus gustos, tu <br />
            rutina y tus metas. Porque <br />
            comer bien no tiene por qué <br />
            ser complicado
            </p>
        </div>
        </div>

        <div className="flex">
            <div><img src="public/HeartIcon.png" className="mr-8" /></div>
        <div>
        <p className="text-[32px] pb-3">
        Nutrición que se adapta a ti
        </p>
            <p className="text-soft-gray text-[24px]">
            Para quienes quieren sentirse <br />
            mejor sin contar calorías a <br />
            cada paso
            </p>
        </div>
        </div>
        </div>
        

    </section>


    </>
    )
}

export default ParaTi;