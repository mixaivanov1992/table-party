import { IconType } from 'react-icons';
import React from 'react';

interface Props {
    path: string,
    name: string,
}

const DynamicIcon: React.FC<Props> = (props) => {
    const { path, name } = props;
    if (path === 'ai') {
        const Icon = require('react-icons/ai')[name] as IconType;
        return <Icon />;
    } if (path === 'bs') {
        const Icon = require('react-icons/bs')[name] as IconType;
        return <Icon />;
    } if (path === 'bi') {
        const Icon = require('react-icons/bi')[name] as IconType;
        return <Icon />;
    } if (path === 'di') {
        const Icon = require('react-icons/di')[name] as IconType;
        return <Icon />;
    } if (path === 'fi') {
        const Icon = require('react-icons/fi')[name] as IconType;
        return <Icon />;
    } if (path === 'fc') {
        const Icon = require('react-icons/fc')[name] as IconType;
        return <Icon />;
    } if (path === 'fa') {
        const Icon = require('react-icons/fa')[name] as IconType;
        return <Icon />;
    } if (path === 'gi') {
        const Icon = require('react-icons/gi')[name] as IconType;
        return <Icon />;
    } if (path === 'go') {
        const Icon = require('react-icons/go')[name] as IconType;
        return <Icon />;
    } if (path === 'gr') {
        const Icon = require('react-icons/gr')[name] as IconType;
        return <Icon />;
    } if (path === 'hi') {
        const Icon = require('react-icons/hi')[name] as IconType;
        return <Icon />;
    } if (path === 'im') {
        const Icon = require('react-icons/im')[name] as IconType;
        return <Icon />;
    } if (path === 'io') {
        const Icon = require('react-icons/io')[name] as IconType;
        return <Icon />;
    } if (path === 'io5') {
        const Icon = require('react-icons/io5')[name] as IconType;
        return <Icon />;
    } if (path === 'md') {
        const Icon = require('react-icons/md')[name] as IconType;
        return <Icon />;
    } if (path === 'ri') {
        const Icon = require('react-icons/ri')[name] as IconType;
        return <Icon />;
    } if (path === 'si') {
        const Icon = require('react-icons/si')[name] as IconType;
        return <Icon />;
    } if (path === 'tb') {
        const Icon = require('react-icons/tb')[name] as IconType;
        return <Icon />;
    } if (path === 'ti') {
        const Icon = require('react-icons/ti')[name] as IconType;
        return <Icon />;
    } if (path === 'vsc') {
        const Icon = require('react-icons/vsc')[name] as IconType;
        return <Icon />;
    } if (path === 'wi') {
        const Icon = require('react-icons/wi')[name] as IconType;
        return <Icon />;
    } if (path === 'cg') {
        const Icon = require('react-icons/cg')[name] as IconType;
        return <Icon />;
    }
    // eslint-disable-next-line
    return <></>;
};
export default DynamicIcon;
