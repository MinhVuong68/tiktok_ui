import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames/bind"
import styles from './AcoountItem.module.scss'

const cx = classNames.bind(styles)
const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
        <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4de7b9ebb4d7d9c71a5d6cde3000c841~c5_300x300.webp?x-expires=1657260000&x-signature=w7wrEcG%2FnnX4EAYCn0QcevZTu7g%3D" className={cx('avatar')} alt="Hoaa"/>
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Nguyen Van A</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>nguyenvana</span>
        </div>
    </div>
  )
}

export default AccountItem