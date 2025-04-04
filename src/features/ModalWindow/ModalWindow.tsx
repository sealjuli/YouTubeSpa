import { JSX } from 'react'
import { Modal, message } from 'antd'
import {
  changeShowWindow,
  selectShowWindow,
  selectQuery,
} from '../../shared/redux/slices/modalWindowSlice'
import { setLikeButton } from '../../shared/redux/slices/likeSlice'
import { useAppSelector, useAppDispatch } from '../../shared/hooks/storeHooks'
import { RequestForm } from '../RequestForm/RequestForm'
import { selectCurrentMenuItem } from '../../shared/redux/slices/menuItemSlice'
import { menuItemsEnum } from '../../shared/helpers/menuItemsEnum'
import {
  updateItem,
  addItem,
} from '../../shared/redux/slices/favoriteItemsSlice'

export const ModalWindow = (): JSX.Element => {
  const isModalOpen = useAppSelector(selectShowWindow)
  const query = useAppSelector(selectQuery)
  const currentMenuItem = useAppSelector(selectCurrentMenuItem)
  const dispatch = useAppDispatch()

  const handleOk = () => {
    if (query.request && query.requestName) {
      dispatch(changeShowWindow())
      if (currentMenuItem === menuItemsEnum.search) {
        // добавить данные
        const id = crypto.randomUUID()
        dispatch(addItem({ ...query, id }))
        // закрасить лайк
        dispatch(setLikeButton())
      } else if (currentMenuItem === menuItemsEnum.favorites) {
        dispatch(updateItem(query))
      }
    } else {
      message.error('Заполните обязательные поля')
    }
  }

  const handleCancel = () => {
    dispatch(changeShowWindow())
  }

  return (
    <Modal
      title="Сохранить запрос"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Сохранить"
      cancelText="Не сохранять"
    >
      <RequestForm />
    </Modal>
  )
}
