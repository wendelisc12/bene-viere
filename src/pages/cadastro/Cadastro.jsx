import Primeira from '../../components/Etapas-Cadastro/primeira';
import Segunda from '../../components/Etapas-Cadastro/segunda';
import Terceira from '../../components/Etapas-Cadastro/terceira';
import Quarta from '../../components/Etapas-Cadastro/quarta';
import Quinta from '../../components/Etapas-Cadastro/quinta';
import Sexta from '../../components/Etapas-Cadastro/sexta';
import './Cadastro.scss'
import { useState } from 'react';

const Cadastro = () => {

    const [step, setStep] = useState(1)

    const nextStep = () => {
        if (step < 6) setStep(step + 1)
    }

    const prevStep = () => {
        if (step > 1) setStep(step - 1)
    }

    const renderStep = () => {
        switch(step) {
            case 1:
                return <Primeira />;
            case 2:
                return <Segunda />;
            case 3:
                return <Terceira />;
            case 4:
                return <Quarta />;
            case 5:
                return <Quinta />;
            case 6:
                return <Sexta />;
            default:
                return null;
        }
    }

    return ( 
        <div className='row'>
            <div className='cadastro_sidebar col-2'>
                <div className='cadastro_sidebar_logo'>
                    <img src="./logo-bene.png" alt="" width={120}/>
                </div>
                
                <div className='cadastro_sidebar_etapas'>
                    <div className={`cadastro_sidebar_etapas_etapa ${step === 1 ? 'cadastro_sidebar_etapas_etapa--active' : ''}`}>1</div>
                    <div className={`cadastro_sidebar_etapas_etapa ${step === 2 ? 'cadastro_sidebar_etapas_etapa--active' : ''}`}>2</div>
                    <div className={`cadastro_sidebar_etapas_etapa ${step === 3 ? 'cadastro_sidebar_etapas_etapa--active' : ''}`}>3</div>
                    <div className={`cadastro_sidebar_etapas_etapa ${step === 4 ? 'cadastro_sidebar_etapas_etapa--active' : ''}`}>4</div>
                    <div className={`cadastro_sidebar_etapas_etapa ${step === 5 ? 'cadastro_sidebar_etapas_etapa--active' : ''}`}>5</div>
                    <div className={`cadastro_sidebar_etapas_etapa ${step === 6 ? 'cadastro_sidebar_etapas_etapa--active' : ''}`}>6</div>
                </div>
            </div>

            <div className='cadastro_form col-10 p-5'>
                <div className='container'>
                    <div className='text-center'><h2>Formulário de anamnese</h2></div>
                    <div className='mt-4'>
                        {renderStep()}
                    </div>
                    <div className='d-flex justify-content-between mt-5'>
                        <button className='cadastro_form_button cadastro_form_button_voltar' onClick={prevStep} style={{display:step === 1 ? 'none' : 'inline'}}>
                            Voltar
                        </button>
                        <button className='cadastro_form_button cadastro_form_button_avancar' onClick={nextStep} >
                            Próximo
                        </button>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Cadastro;