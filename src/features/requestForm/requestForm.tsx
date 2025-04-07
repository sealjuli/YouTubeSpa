import { JSX, useEffect } from 'react'
import { Form, Input, InputNumber, Select } from 'antd'
import { useAppSelector, useAppDispatch } from '../../shared/hooks/storeHooks'
import {
  setQuantity,
  setRequestName,
  setRequest,
  setSortBy,
  selectQuery,
} from '../../shared/redux/slices/modalWindowSlice'
import { FieldType } from '../../shared/types/favoriteItemsTypes'
import { selectCurrentMenuItem } from '../../shared/redux/slices/menuItemSlice'
import { MenuItemsEnum } from '../../shared/enums/menuItemsEnum'
import { SortType } from '../../shared/types/favoriteItemsTypes'
import './requestFormStyle.css'

type Option = {
  value: SortType
  label: string
}

const options: Option[] = [
  {
    value: 'none',
    label: 'Без сортировки',
  },
  {
    value: 'title',
    label: 'По названию видео',
  },
  {
    value: 'channelTitle',
    label: 'По названию канала',
  },
]

export const RequestForm = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const [form] = Form.useForm()
  const queryModalWindow = useAppSelector(selectQuery)
  const currentMenuItem = useAppSelector(selectCurrentMenuItem)

  useEffect(() => {
    form.setFieldsValue({
      request: queryModalWindow.request,
      requestName: queryModalWindow.requestName,
      quantity: queryModalWindow.quantity,
      sortBy: queryModalWindow.sortBy,
    })
  }, [form, queryModalWindow])

  return (
    <Form
      form={form}
      className="RequestForm"
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Запрос"
        name="request"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        style={{ marginBottom: '15px' }}
        rules={[{ required: true, message: 'Пожалуйста, заполните запрос' }]}
      >
        <Input
          disabled={currentMenuItem === MenuItemsEnum.search}
          onChange={(e) => dispatch(setRequest(e.target.value))}
        />
      </Form.Item>

      <Form.Item<FieldType>
        label="Название запроса"
        name="requestName"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        style={{ marginBottom: '40px' }}
        rules={[
          {
            required: true,
            message: 'Пожалуйста, заполните название запроса',
          },
        ]}
      >
        <Input onChange={(e) => dispatch(setRequestName(e.target.value))} />
      </Form.Item>

      <Form.Item<FieldType>
        label="Сортировать по"
        name="sortBy"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        style={{ marginBottom: '40px' }}
        rules={[]}
      >
        <Select
          options={options}
          onChange={(value) => dispatch(setSortBy(value))}
        />
      </Form.Item>

      <Form.Item<FieldType>
        label="Количество видео на странице"
        name="quantity"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        style={{ marginBottom: '40px' }}
      >
        <InputNumber
          min={1}
          max={50}
          onChange={(value) => {
            dispatch(setQuantity(value))
          }}
          onBlur={() => {
            if (!queryModalWindow.quantity) {
              dispatch(setQuantity(12))
            }
          }}
        />
      </Form.Item>
    </Form>
  )
}
