import { Button, Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import styles from './HomePage.module.scss'

const HomePage = () => {
    return (
        <>
            <Row style={{ height: '100vh' }} justify="center">
                <Col>
                    <Row style={{ height: '100%' }} align="middle" justify="center">
                        <Col>
                            <Row>
                                <Col>
                                    <h1 className={classNames(styles.banner)}>Hello!</h1>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col>
                                    <Button className={styles.linkButton} type="primary">
                                        <Link to="/exchange">
                                            Exchange
                                        </Link>
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default HomePage
