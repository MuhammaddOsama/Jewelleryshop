// import * as yup from "yup"
import * as Yup from 'yup';


export const FormValidation = Yup.object({

    name:Yup.string().min(3, "to short").max(20, "to long").required('name is must'),
    email:Yup.string().email("invaid email").required(),
    msg:Yup.string().required()


})

// export default FormValidation