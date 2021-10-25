import styles from './index.module.scss'
import Button from "components/ui/Button"
import {Form, Formik} from 'formik'
import Input from 'components/ui/Inputs/Input'
import {email, required} from 'utils/validations'
import FormError from 'components/ui/Form/FormError'
import {useState} from 'react'

interface Props {

}


export default function SubscribeSection(props: Props) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = async (data) => {

  }
  return (
      <div className={styles.root}>
        {isSuccess && <div className={styles.success}>
            Спасибо! Вы подписались.
        </div>}
        {!isSuccess &&  <Formik
          initialValues={{
            email: null
          }}

          onSubmit={handleSubmit}
        >

          {(formik) =>
            <Form {...formik} className={styles.form}>
              <Input className={styles.inputField} inputClassName={styles.input} name={'email'} validate={(value) => required(value) || email(value)} placeholder={'Email'}/>
              <FormError error={error}/>
              <Button type={'submit'} color='fill' className={styles.button}><img src='/img/icons/subscribe.svg' alt=''/></Button>
            </Form>}
        </Formik>}

      </div>
  )
}
