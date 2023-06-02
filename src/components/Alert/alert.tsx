import React from 'react';
import classNames from 'classnames'

export enum AlertType {
    Default = 'default',
    Success = 'success',
    Danger = 'danger'
}

interface BaseAlertProps {
    className?: string;
    close?: boolean;
    alertType?: string;
    children: React.ReactNode;
}

const Alert: React.FC<BaseAlertProps> = (props) => {
    const { className, close, alertType, children } = props
    return (
        <span></span>
    )
}

Alert.defaultProps = {
    alertType: AlertType.Default
}

export default Alert