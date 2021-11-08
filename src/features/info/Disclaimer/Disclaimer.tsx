import { InfoCircleOutlined } from '@ant-design/icons'
import { Button, Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { disclaimerActions } from '../disclaimerSlice'

import styles from './Disclaimer.module.scss'

const Disclaimer = () => {
    const dispatch = useDispatch()
    const { visible, message } = useSelector((state: RootState) => state.info)

    return (
        <div>
            <Button type="link" icon={<InfoCircleOutlined />} onClick={() => dispatch(disclaimerActions.setVisible(true))} />
            <Modal
                visible={visible}
                onCancel={() => dispatch(disclaimerActions.setVisible(false))}
                footer={null}
            >
                <div className={styles.infoText}>
                    {message}
                </div>
            </Modal>
        </div>
    )
}

export default Disclaimer
