import { JSX } from 'react'
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import { useAppSelector, useAppDispatch } from '../../shared/hooks/storeHooks'
import { selectSearchInputValue } from '../../shared/redux/slices/inputValueSlice'
import {
  selectIsBlocksValue,
  setBlocksDisplayValue,
  setLinesDisplayValue,
} from '../../shared/redux/slices/dispaySlice'
import './displayInformationStyle.css'

export const DisplayInformation = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const query = useAppSelector(selectSearchInputValue)
  const displayBlocks = useAppSelector(selectIsBlocksValue)

  const blocksDisplay = () => {
    dispatch(setBlocksDisplayValue())
  }

  const linesDisplay = () => {
    dispatch(setLinesDisplayValue())
  }

  return (
    <div className="displayContainer">
      <p>
        Видео по запросу: <b>{query}</b>
      </p>
      <div>
        <BarsOutlined
          onClick={linesDisplay}
          className={`BarsOutlined ${displayBlocks ? 'inactive' : ''}`}
        />
        <AppstoreOutlined
          onClick={blocksDisplay}
          className={`AppstoreOutlined ${displayBlocks ? '' : 'inactive'}`}
        />
      </div>
    </div>
  )
}
