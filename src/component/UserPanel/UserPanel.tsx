import React from 'react';
import { connect } from 'react-redux';
import { UserState } from '../../interfaces';
import styles from './UserPanel.module.css';

interface UserPanelProps {
    userName: string
}

const UserPanel: React.FC<UserPanelProps> = ({ userName }) => {
    return (
        <div className={styles.userContainer}>{userName ? userName: ''}</div>
    );
}

const mapStateToProps = (state: UserState) => ({
    userName: state.userName,
});

export default connect(mapStateToProps)(UserPanel);