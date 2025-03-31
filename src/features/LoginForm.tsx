import { JSX } from 'react'
import { FormProps, Button, Form, Input, Typography, Image } from 'antd'
import { StyledDiv } from '../shared/UI/StyledComponents'
import { fetchPostLogin } from '../shared/redux/slices/usersSlice'
import { useAppDispatch } from '../shared/hooks/storeHooks'

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
    <StyledDiv>
      <Image
        width={50}
        src="https://media.licdn.com/dms/image/v2/D4D0BAQGOQne94Bnf5Q/company-logo_400_400/company-logo_400_400/0/1683616127202/techsolvo_logo?e=2147483647&v=beta&t=8TFJK_L9nRChsiYkex9sppP5wzaaK82N67JZQgd_iJA" // Укажите URL картинки
        alt="Login"
        preview={false}
      />
      <Typography.Title level={3}>Вход</Typography.Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
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
    </StyledDiv>
  )
}
