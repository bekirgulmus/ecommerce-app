import * as yup from 'yup';

const validationSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().min(5).required(),
    price: yup.string().required(),
})

export default validationSchema