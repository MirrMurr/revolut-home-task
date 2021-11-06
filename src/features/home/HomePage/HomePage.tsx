import { Col, Row } from 'antd'
import classNames from 'classnames'

import styles from './HomePage.module.scss'

const HomePage = () => {
    return (
        <>
            <Row style={{ height: '100vh' }} justify="center">
                <Col>
                    <Row style={{ height: '100%' }} align="middle" justify="space-between">
                        <Col>
                            <h1 className={classNames(styles.banner)}>Hello!</h1>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default HomePage
