import { JSX } from 'react'
import { FormProps, Button, Form, Input, Typography, Image } from 'antd'
import { fetchPostLogin } from '../../shared/redux/slices/usersSlice'
import { useAppDispatch } from '../../shared/hooks/storeHooks'
import './loginFormStyle.css'

type FieldType = {
  username?: string
  password?: string
}

export const LoginForm = (): JSX.Element => {
  const dispatch = useAppDispatch()

  const onFinish: FormProps<FieldType>['onFinish'] = ({
    username,
    password,
  }) => {
    if (username && password) {
      dispatch(fetchPostLogin({ email: username, password: password }))
    }
  }

  return (
    <div className="styledDiv">
      <Image
        width={50}
        src="/YouTubeSpa/logo.jpg"
        alt="Login"
        preview={false}
      />
      <Typography.Title level={3}>Вход</Typography.Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Логин"
          name="username"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          style={{ marginBottom: '15px' }}
          rules={[
            { required: true, message: 'Пожалуйста, введите свой логин!' },
            {
              pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: 'Введите корректный email',
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Пароль"
          name="password"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          style={{ marginBottom: '40px' }}
          rules={[
            { required: true, message: 'Пожалуйста, введите свой пароль!' },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null} wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
